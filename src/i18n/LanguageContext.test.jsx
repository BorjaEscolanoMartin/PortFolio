import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from './LanguageContext';
import { useLanguage } from './useLanguage';
import { STORAGE_KEY } from './language';
import { localize } from './localize';
import { ui } from './ui';

function Probe() {
  const { lang, setLang } = useLanguage();
  return (
    <>
      <p data-testid="lang">{lang}</p>
      <button onClick={() => setLang('en')}>to-en</button>
      <button onClick={() => setLang('es')}>to-es</button>
    </>
  );
}

function renderWithProvider() {
  return render(
    <LanguageProvider>
      <Probe />
    </LanguageProvider>,
  );
}

function mockBrowserLanguage(value) {
  vi.spyOn(window.navigator, 'language', 'get').mockReturnValue(value);
}

describe('LanguageProvider', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.history.replaceState(null, '', '/PortFolio/');
    mockBrowserLanguage('es-ES');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('uses ?lang=en from the URL', () => {
    window.history.replaceState(null, '', '/PortFolio/?lang=en');
    renderWithProvider();
    expect(screen.getByTestId('lang')).toHaveTextContent('en');
  });

  it('prefers ?lang over the stored language', () => {
    window.localStorage.setItem(STORAGE_KEY, 'en');
    window.history.replaceState(null, '', '/PortFolio/?lang=es');
    renderWithProvider();
    expect(screen.getByTestId('lang')).toHaveTextContent('es');
  });

  it('ignores an unsupported ?lang value', () => {
    window.history.replaceState(null, '', '/PortFolio/?lang=fr');
    renderWithProvider();
    expect(screen.getByTestId('lang')).toHaveTextContent('es');
  });

  it('uses the stored language when the URL has none', () => {
    window.localStorage.setItem(STORAGE_KEY, 'en');
    renderWithProvider();
    expect(screen.getByTestId('lang')).toHaveTextContent('en');
  });

  it('detects an English browser on the first visit', () => {
    mockBrowserLanguage('en-GB');
    renderWithProvider();
    expect(screen.getByTestId('lang')).toHaveTextContent('en');
  });

  it('defaults to Spanish for any other browser language', () => {
    mockBrowserLanguage('fr-FR');
    renderWithProvider();
    expect(screen.getByTestId('lang')).toHaveTextContent('es');
  });

  it('still works when localStorage throws', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    renderWithProvider();
    expect(screen.getByTestId('lang')).toHaveTextContent('es');
  });

  it('switching language updates html lang, title, URL and storage', async () => {
    window.history.replaceState(null, '', '/PortFolio/#proyectos');
    const user = userEvent.setup();
    renderWithProvider();

    await user.click(screen.getByText('to-en'));

    expect(screen.getByTestId('lang')).toHaveTextContent('en');
    expect(document.documentElement.lang).toBe('en');
    expect(document.title).toBe(ui.en.meta.title);
    expect(window.location.search).toBe('?lang=en');
    expect(window.location.hash).toBe('#proyectos');
    expect(window.localStorage.getItem(STORAGE_KEY)).toBe('en');

    await user.click(screen.getByText('to-es'));

    expect(document.documentElement.lang).toBe('es');
    expect(document.title).toBe(ui.es.meta.title);
    expect(window.location.search).toBe('?lang=es');
  });
});

describe('useLanguage without a provider', () => {
  it('falls back to Spanish', () => {
    render(<Probe />);
    expect(screen.getByTestId('lang')).toHaveTextContent('es');
  });
});

describe('localize', () => {
  it('picks the requested language from an { es, en } value', () => {
    expect(localize({ es: 'Hola', en: 'Hello' }, 'en')).toBe('Hello');
    expect(localize({ es: 'Hola', en: 'Hello' }, 'es')).toBe('Hola');
  });

  it('falls back to Spanish when the translation is missing', () => {
    expect(localize({ es: 'Hola' }, 'en')).toBe('Hola');
  });

  it('returns shared values unchanged', () => {
    expect(localize('React', 'en')).toBe('React');
    expect(localize(null, 'en')).toBe(null);
  });
});
