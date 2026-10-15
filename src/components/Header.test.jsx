import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import { LanguageProvider } from '../i18n/LanguageContext';

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

  it('shows the switch in the mobile menu too', async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <Header />
      </LanguageProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }));

    expect(screen.getAllByRole('button', { name: 'View in English' })).toHaveLength(2);
  });
});
