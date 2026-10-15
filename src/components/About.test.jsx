import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';
import { education } from '../data/education';
import { renderInLanguage } from '../test-utils';

describe('About', () => {
  it('renders in Spanish by default', () => {
    render(<About />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('SOBRE MÍ');
    expect(screen.getByRole('heading', { name: 'Formación Académica' })).toBeInTheDocument();
    expect(screen.getByText('Técnico Superior en Desarrollo de Aplicaciones Web')).toBeInTheDocument();
    expect(screen.getByText(/Test-first, CI y revisión de código/)).toBeInTheDocument();
  });

  it('renders in English with ?lang=en', () => {
    renderInLanguage(<About />, 'en');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('ABOUT ME');
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Specialisation' })).toBeInTheDocument();
    expect(screen.getByText(/with hands-on experience building end-to-end web applications/)).toBeInTheDocument();
    expect(screen.getByText('Higher Technician Diploma in Web Application Development')).toBeInTheDocument();
    expect(screen.getAllByText(/Official qualification/)).toHaveLength(2);
    expect(screen.getByText(/Test-first, CI and code review/)).toBeInTheDocument();
  });
});

describe('education data', () => {
  it('has Spanish and English text for every translatable field', () => {
    for (const item of education) {
      for (const field of ['title', 'detail']) {
        const value = item[field];
        if (typeof value === 'string') continue; // shared value, e.g. a proper name
        expect(value.es, `${item.id}.${field}.es`).toBeTruthy();
        expect(value.en, `${item.id}.${field}.en`).toBeTruthy();
      }
    }
  });
});
