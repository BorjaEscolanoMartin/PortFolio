import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import { LanguageProvider } from '../i18n/LanguageContext';
import { renderInLanguage } from '../test-utils';

describe('Header language switch', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.history.replaceState(null, '', '/PortFolio/');
    vi.spyOn(window.navigator, 'language', 'get').mockReturnValue('es-ES');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('marks Spanish as active by default and switches to English', async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <Header />
      </LanguageProvider>,
    );

    const [esButton] = screen.getAllByRole('button', { name: 'Ver en español' });
    const [enButton] = screen.getAllByRole('button', { name: 'View in English' });
    expect(esButton).toHaveAttribute('aria-pressed', 'true');
    expect(enButton).toHaveAttribute('aria-pressed', 'false');

    await user.click(enButton);

    expect(enButton).toHaveAttribute('aria-pressed', 'true');
    expect(esButton).toHaveAttribute('aria-pressed', 'false');
    expect(document.documentElement.lang).toBe('en');
  });

  it('translates the navigation and keeps the Spanish anchors', () => {
    render(
      <LanguageProvider>
        <Header />
      </LanguageProvider>,
    );
    expect(screen.getByRole('link', { name: 'SOBRE MÍ' })).toHaveAttribute('href', '#sobre-mi');

    cleanup();
    renderInLanguage(<Header />, 'en');

    expect(screen.getByRole('link', { name: 'ABOUT' })).toHaveAttribute('href', '#sobre-mi');
    expect(screen.getByRole('link', { name: 'SKILLS' })).toHaveAttribute('href', '#competencias');
    expect(screen.getByRole('link', { name: "LET'S TALK" })).toHaveAttribute('href', '#contacto');
  });

  it('keeps the mobile switch outside the hamburger menu', async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <Header />
      </LanguageProvider>,
    );

    // Desktop + mobile switches are both in the bar, with the menu closed.
    expect(screen.getAllByRole('button', { name: 'View in English' })).toHaveLength(2);

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }));

    expect(screen.getAllByRole('button', { name: 'View in English' })).toHaveLength(2);
  });
});
