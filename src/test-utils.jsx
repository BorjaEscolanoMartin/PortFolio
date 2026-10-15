import { render } from '@testing-library/react';
import { LanguageProvider } from './i18n/LanguageContext';

// Renders `ui` inside the language provider with `?lang=<lang>` in the URL.
export function renderInLanguage(ui, lang) {
  window.localStorage.clear();
  window.history.replaceState(null, '', `/PortFolio/?lang=${lang}`);
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}
