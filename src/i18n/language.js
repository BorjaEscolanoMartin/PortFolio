import { createContext } from 'react';
import { ui } from './ui';

export const LANGUAGES = ['es', 'en'];
export const DEFAULT_LANGUAGE = 'es';
export const STORAGE_KEY = 'portfolio-lang';

const isSupported = (lang) => LANGUAGES.includes(lang);

function readStoredLanguage() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function storeLanguage(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage blocked (private mode, disabled site data): the URL still keeps the choice.
  }
}

// Order: ?lang= in the URL → stored choice → browser language → Spanish.
export function detectInitialLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (isSupported(fromUrl)) return fromUrl;

  const stored = readStoredLanguage();
  if (isSupported(stored)) return stored;

  const browser = window.navigator.language?.toLowerCase() ?? '';
  return browser.startsWith('en') ? 'en' : DEFAULT_LANGUAGE;
}

// Default value lets components render in Spanish without a provider (e.g. isolated tests).
export const LanguageContext = createContext({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
  t: ui[DEFAULT_LANGUAGE],
});
