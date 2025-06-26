// src/components/Header.jsx
export default function Header() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 bg-black text-white shadow-sm">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo o nombre */}
        <div className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}IconoB.png`} alt="Logo" className="w-8 h-8" />
          <div className="text-xl font-bold tracking-wide">BEM_DEV</div>
        </div>        
        {/* Navegación */}
        <nav className="hidden md:flex gap-12 font-bold text-sm tracking-wide">
          <a href="#inicio" className="hover:text-lime-400 transition">INICIO</a>
          <a href="#sobre-mi" className="hover:text-lime-400 transition">SOBRE MÍ</a>
          <a href="#proyectos" className="hover:text-lime-400 transition">PROYECTOS</a>
          <a href="#contacto" className="hover:text-lime-400 transition">CONTACTO</a>
        </nav>

        {/* Botón Hablemos */}
        <div className="hidden md:block">
          <a
            href="#contacto"
            className="bg-lime-400 text-black px-4 py-2 rounded-full font-bold hover:bg-lime-300 transition"
          >
            HABLEMOS
          </a>
        </div>
      </div>
    </header>
  );
}
