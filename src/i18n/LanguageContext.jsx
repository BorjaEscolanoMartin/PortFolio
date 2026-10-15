import { useEffect, useMemo, useState } from 'react';
import { ui } from './ui';
import { LanguageContext, detectInitialLanguage, storeLanguage } from './language';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui[lang].meta.title;
    storeLanguage(lang);

    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState(window.history.state, '', url);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: ui[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
