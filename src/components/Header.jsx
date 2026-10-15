// src/components/Header.jsx
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from '../i18n/useLanguage';

// Anchors stay in Spanish in both languages so shared links keep working.
const NAV_LINKS = [
  { href: '#inicio', key: 'home' },
  { href: '#sobre-mi', key: 'about' },
  { href: '#competencias', key: 'skills' },
  { href: '#experiencia', key: 'experience' },
  { href: '#proyectos', key: 'projects' },
  { href: '#contacto', key: 'contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 bg-black text-white shadow-sm">
      <div className="px-6 py-4 flex justify-between items-center gap-6">
        {/* Logo o nombre */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity" onClick={closeMenu}>
          <img src={`${import.meta.env.BASE_URL}IconoB.webp`} alt="Logo BEM_DEV" width="32" height="32" className="w-8 h-8" />
          <div className="text-xl font-bold tracking-wide">BEM_DEV</div>
        </a>
        {/* Navegación desktop */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-10 font-bold text-sm tracking-normal whitespace-nowrap">
          {NAV_LINKS.map(({ href, key }) => (
            <a key={key} href={href} className="hover:text-lime-400 transition">{t.nav[key]}</a>
          ))}
        </nav>

        {/* Selector de idioma y botón Hablemos desktop */}
        <div className="hidden lg:flex items-center gap-8 shrink-0">
          <LanguageSwitch />
          <a
            href="#contacto"
            className="bg-lime-400 text-black px-4 py-2 rounded-full font-bold whitespace-nowrap hover:bg-lime-300 transition"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Selector de idioma (fuera del menú) y botón hamburguesa móvil */}
        <div className="lg:hidden flex items-center gap-5 shrink-0">
          <LanguageSwitch />
          <button
            onClick={toggleMenu}
            className="text-white hover:text-lime-400 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {NAV_LINKS.map(({ href, key }) => (
              <a
                key={key}
                href={href}
                className="font-bold text-sm tracking-wide hover:text-lime-400 transition py-2"
                onClick={closeMenu}
              >
                {t.nav[key]}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-lime-400 text-black px-4 py-2 rounded-full font-bold hover:bg-lime-300 transition text-center mt-4"
              onClick={closeMenu}
            >
              {t.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
