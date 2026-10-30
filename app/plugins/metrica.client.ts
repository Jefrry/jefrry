type MetricaCommand = [counter: number, method: string, ...args: unknown[]];
type Metrica = ((...command: MetricaCommand) => void) & { a?: IArguments[]; l?: number };

declare global {
  interface Window {
    ym?: Metrica;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const id = String(useRuntimeConfig().public.yandexMetricaId);
  const local = /^(localhost|.*\.localhost|127(?:\.\d+){3}|\[::1\]|0\.0\.0\.0)$/i.test(location.hostname);
  const enabled = /^[1-9]\d*$/.test(id) && !local;
  const counter = Number(id);
  const route = useRoute();
  const { language } = useLanguage();
  const head = nuxtApp.vueApp.runWithContext(() => injectHead());
  let mounted = false;
  let changingPage = false;
  let previousPath: string | undefined;

  function command(method: string, ...args: unknown[]) {
    if (!enabled) return;
    try {
      window.ym?.(counter, method, ...args);
    } catch {
      // Analytics must never interrupt navigation or language selection.
    }
  }

  function trackGoal(name: string, params: Record<string, string> = {}) {
    command('reachGoal', name, { language: language.value, page_path: route.path, ...params });
  }

  if (enabled) {
    window.ym = window.ym || Object.assign(function () {
      (window.ym!.a = window.ym!.a || []).push(arguments);
    }, { l: Date.now() });
    command('init', { defer: true, webvisor: false, clickmap: false, trackLinks: false, accurateTrackBounce: true });
    try {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://mc.yandex.ru/metrika/tag.js';
      document.head.append(script);
    } catch {
      // A blocked script leaves commands queued without affecting the site.
    }
  }

  async function trackPage() {
    if (!enabled || !mounted || changingPage) return;
    await nextTick();
    // Let page metadata and disposal of the previous page settle before reading the title.
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
    await head?.render();
    if (changingPage) return;
    const path = route.path;
    if (path === previousPath) return;
    const first = previousPath === undefined;
    const referrer = first ? document.referrer : new URL(previousPath!, location.origin).href;
    let previousPage = previousPath;
    let referer = referrer;
    if (first && referrer) {
      const source = new URL(referrer);
      if (source.origin === location.origin) {
        previousPage = source.pathname;
        referer = `${source.origin}${source.pathname}`;
      }
    }
    const url = new URL(path, location.origin);
    if (first) {
      url.search = location.search;
      url.searchParams.delete('category');
    }
    command('hit', url.href, {
      title: document.title,
      referer,
      params: {
        language: language.value,
        page_path: path,
        ...(previousPage === undefined ? {} : { previous_page: previousPage }),
      },
    });
    previousPath = path;
  }

  onNuxtReady(() => {
    mounted = true;
    return trackPage();
  });
  nuxtApp.hook('page:start', () => { changingPage = true; });
  nuxtApp.hook('page:finish', () => {
    changingPage = false;
    return trackPage();
  });
  // Nuxt's route updates after the new page resolves, including reused pages.
  watch(() => route.path, trackPage, { flush: 'post' });

  return { provide: { metricaGoal: trackGoal } };
});
