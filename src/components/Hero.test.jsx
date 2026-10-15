import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import Footer from './Footer';
import { renderInLanguage } from '../test-utils';

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

  it('offers the Spanish CV in English, labelled as such', () => {
    renderInLanguage(<Hero />, 'en');
    const cv = screen.getByRole('link', { name: 'Download CV (Spanish)' });
    expect(cv.getAttribute('href')).toMatch(/Borja_Escolano_Martin_CV\.pdf$/);
    expect(cv).toHaveAttribute('download', 'Borja_Escolano_Martin_CV.pdf');
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
