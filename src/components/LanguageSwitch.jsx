// src/components/LanguageSwitch.jsx
import { useLanguage } from '../i18n/useLanguage';
import { LANGUAGES } from '../i18n/language';

export default function LanguageSwitch({ className = '' }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className={`flex items-center rounded-full border border-gray-700 p-0.5 text-xs font-bold ${className}`}>
      {LANGUAGES.map((code) => {
        const isActive = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            aria-label={t.languageSwitch[code]}
            lang={code}
            className={`px-2.5 py-1 rounded-full transition-colors ${
              isActive ? 'bg-lime-400 text-black' : 'text-white hover:text-lime-400'
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
