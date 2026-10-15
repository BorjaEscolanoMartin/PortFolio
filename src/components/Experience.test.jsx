import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Experience from './Experience';
import { experiences } from '../data/experience';
import { renderInLanguage } from '../test-utils';

describe('Experience', () => {
  it('renders in Spanish by default', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('EXPERIENCIA');
    expect(screen.getByRole('heading', { name: 'Desarrollador Full-Stack (colaboración)' })).toBeInTheDocument();
    expect(screen.getByText('2026 – Actualidad')).toBeInTheDocument();
    expect(screen.getByText('Ayuntamiento de Novelda')).toBeInTheDocument();
  });

  it('renders in English with ?lang=en', () => {
    renderInLanguage(<Experience />, 'en');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('EXPERIENCE');
    expect(screen.getByRole('heading', { name: 'Full-Stack Developer (collaboration)' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Web Developer Intern' })).toBeInTheDocument();
    expect(screen.getByText('2026 – Present')).toBeInTheDocument();
    expect(screen.getByText('Novelda City Council')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(6);
  });
});

describe('experience data', () => {
  it('has the same number of bullets in Spanish and English', () => {
    for (const exp of experiences) {
      expect(exp.bullets.en, exp.id).toHaveLength(exp.bullets.es.length);
    }
  });
});
