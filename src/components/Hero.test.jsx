import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import Footer from './Footer';
import { renderInLanguage } from '../test-utils';
import { ui } from '../i18n/ui';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const publicDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../public');

describe('Hero', () => {
  it('renders in Spanish by default', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Desarrollador Full-Stack');
    expect(screen.getByRole('link', { name: 'Descargar CV' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ver proyectos' })).toHaveAttribute('href', '#proyectos');
  });

  it('renders in English with ?lang=en', () => {
    renderInLanguage(<Hero />, 'en');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Full-Stack Developer');
    expect(screen.getByText('Available to start immediately')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View projects' })).toHaveAttribute('href', '#proyectos');
    expect(screen.getByRole('link', { name: 'Go to contact' })).toHaveAttribute('href', '#contacto');
    expect(screen.getByAltText(/^Photo of Borja Escolano/)).toBeInTheDocument();
    expect(screen.getByText('SCROLL DOWN')).toBeInTheDocument();
    expect(screen.getByText('FOLLOW ME')).toBeInTheDocument();
  });

  it('offers the Spanish CV in Spanish', () => {
    render(<Hero />);
    const cv = screen.getByRole('link', { name: 'Descargar CV' });
    expect(cv.getAttribute('href')).toMatch(/\/Borja_Escolano_Martin_CV\.pdf$/);
    expect(cv).toHaveAttribute('download', 'Borja_Escolano_Martin_CV.pdf');
  });

  it('offers the English CV in English', () => {
    renderInLanguage(<Hero />, 'en');
    const cv = screen.getByRole('link', { name: 'Download CV' });
    expect(cv.getAttribute('href')).toMatch(/\/Borja_Escolano_Martin_CV_EN\.pdf$/);
    expect(cv).toHaveAttribute('download', 'Borja_Escolano_Martin_CV_EN.pdf');
  });

  it('every CV file offered exists in public/', () => {
    for (const lang of ['es', 'en']) {
      const file = path.join(publicDir, ui[lang].hero.cvFile);
      expect(fs.existsSync(file), `missing ${ui[lang].hero.cvFile}`).toBe(true);
    }
  });
});

describe('Footer', () => {
  it('renders in Spanish by default', () => {
    render(<Footer />);
    expect(screen.getByText(/Desarrollador Full-Stack · Datos e IA/)).toBeInTheDocument();
  });

  it('renders in English with ?lang=en', () => {
    renderInLanguage(<Footer />, 'en');
    expect(screen.getByText(/Full-Stack Developer · Data & AI/)).toBeInTheDocument();
  });
});
