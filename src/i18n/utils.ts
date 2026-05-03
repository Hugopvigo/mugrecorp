import es from './es.json';
import en from './en.json';

const translations = { es, en } as const;

export type Lang = 'es' | 'en';
export type TranslationKey = string;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function t(key: TranslationKey, lang: Lang): string {
  const keys = key.split('.');
  let current: unknown = translations[lang];
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = (current as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof current === 'string' ? current : key;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === 'en') return `/en${path}`;
  return path;
}

export function getAlternateLangUrl(url: URL): { lang: Lang; href: string }[] {
  const currentLang = getLangFromUrl(url);
  const pathWithoutLang = currentLang === 'en'
    ? url.pathname.replace('/en', '') || '/'
    : url.pathname;

  return [
    { lang: 'es', href: pathWithoutLang },
    { lang: 'en', href: `/en${pathWithoutLang}` },
  ];
}
