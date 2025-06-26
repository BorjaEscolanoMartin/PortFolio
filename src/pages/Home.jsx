// src/pages/Home.jsx
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      {/* Contenedor con fondo unificado para Hero y TechStack */}
      <div 
        className="relative"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}fondo.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <section id="inicio" className="scroll-mt-16">
          <Hero />
        </section>
        
        {/* Degradado de transición hacia abajo */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)'
          }}
        ></div>      </div>

      {/* Línea separadora con gradiente mejorada */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            className="h-1 w-full relative"
            style={{
              background: 'linear-gradient(to right, transparent 0%, rgba(163, 230, 53, 0.3) 20%, #a3e635 35%, #a3e635 65%, rgba(163, 230, 53, 0.3) 80%, transparent 100%)'
            }}
          >
            {/* Línea central más brillante */}
            <div 
              className="absolute left-0 right-0 h-0.5 top-1/2 transform -translate-y-1/2"
              style={{
                background: 'linear-gradient(to right, transparent 0%, rgba(163, 230, 53, 0.8) 25%, #a3e635 40%, #a3e635 60%, rgba(163, 230, 53, 0.8) 75%, transparent 100%)'
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Contenedor con fondo unificado para About y Projects */}
      <div 
        className="relative"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}fondo2.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Degradado de transición desde arriba */}
        <div 
          className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)'
          }}
        ></div>
          
        <section id="sobre-mi" className="scroll-mt-16">
          <About />
        </section>        <section id="proyectos" className="-scroll-mt-4">
          <Projects />
        </section>
        
        <section id="contacto" className="scroll-mt-2">
          <Contact />
        </section>
      </div>
    </>
  );
}