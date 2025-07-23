// src/components/Header.jsx
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 bg-black text-white shadow-sm">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo o nombre */}
        <a href="#inicio" className="flex items-center gap-3 hover:opacity-80 transition-opacity" onClick={closeMenu}>
          <img src={`${import.meta.env.BASE_URL}IconoB.png`} alt="Logo" className="w-8 h-8" />
          <div className="text-xl font-bold tracking-wide">BEM_DEV</div>
        </a>        
        {/* Navegación desktop */}
        <nav className="hidden md:flex gap-12 font-bold text-sm tracking-wide">
          <a href="#inicio" className="hover:text-lime-400 transition">INICIO</a>
          <a href="#sobre-mi" className="hover:text-lime-400 transition">SOBRE MÍ</a>
          <a href="#proyectos" className="hover:text-lime-400 transition">PROYECTOS</a>
          <a href="#contacto" className="hover:text-lime-400 transition">CONTACTO</a>
        </nav>

        {/* Botón Hablemos desktop */}
        <div className="hidden md:block">
          <a
            href="#contacto"
            className="bg-lime-400 text-black px-4 py-2 rounded-full font-bold hover:bg-lime-300 transition"
          >
            HABLEMOS
          </a>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-lime-400 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <a 
              href="#inicio" 
              className="font-bold text-sm tracking-wide hover:text-lime-400 transition py-2"
              onClick={closeMenu}
            >
              INICIO
            </a>
            <a 
              href="#sobre-mi" 
              className="font-bold text-sm tracking-wide hover:text-lime-400 transition py-2"
              onClick={closeMenu}
            >
              SOBRE MÍ
            </a>
            <a 
              href="#proyectos" 
              className="font-bold text-sm tracking-wide hover:text-lime-400 transition py-2"
              onClick={closeMenu}
            >
              PROYECTOS
            </a>
            <a 
              href="#contacto" 
              className="font-bold text-sm tracking-wide hover:text-lime-400 transition py-2"
              onClick={closeMenu}
            >
              CONTACTO
            </a>
            <a
              href="#contacto"
              className="bg-lime-400 text-black px-4 py-2 rounded-full font-bold hover:bg-lime-300 transition text-center mt-4"
              onClick={closeMenu}
            >
              HABLEMOS
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
