export function useAnalytics() {
  const nuxtApp = useNuxtApp();
  function trackGoal(name: string, params: Record<string, string> = {}) {
    if (import.meta.client) nuxtApp.$metricaGoal(name, params);
  }

  return {
    trackGoal,
    trackResumeDownload(filePath: string) {
      trackGoal('resume_download', { file_path: filePath });
    },
    trackProjectSource(projectId: string, targetUrl: string) {
      trackGoal('project_source_click', {
        project_id: projectId,
        target_url: targetUrl,
        target_host: new URL(targetUrl).host,
      });
    },
    trackContact(href: string, placement: 'hero' | 'footer') {
      const url = new URL(href);
      const channel = url.protocol === 'mailto:' ? 'email'
        : url.hostname === 'github.com' ? 'github'
        : url.hostname === 't.me' ? 'telegram' : undefined;
      if (channel) trackGoal('contact_click', { channel, placement });
    },
  };
}
