import type { Language } from '~/types/language/language';

export function languagePath(path: string, language: Language): string {
  const unprefixed = path.replace(/^\/(ru|en)(?=\/|[?#]|$)/, '');
  const suffix = unprefixed.startsWith('/') ? unprefixed : `/${unprefixed}`;
  return `/${language}${suffix}`;
}
