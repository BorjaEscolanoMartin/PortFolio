// src/components/About.jsx
export default function About() {
  return (
    <section className="text-white pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          SOBRE MÍ
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda - Información personal */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-lime-400">
              Borja Escolano Martín
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                <span className="text-white font-semibold">Desarrollador web</span> con formación técnica y gran pasión por la creación de experiencias digitales modernas y funcionales.
              </p>
              
              <p>
                Soy <span className="text-lime-400 font-semibold">Técnico Superior en Desarrollo de Aplicaciones Web</span>, título obtenido en 2025. Actualmente, sigo ampliando mis conocimientos en tecnologías como <span className="text-white">React, Tailwind CSS, Laravel</span> y entornos cloud como <span className="text-white">AWS</span>.
              </p>
              
              <p>
                Me especializo en la construcción de interfaces atractivas, eficientes y accesibles, cuidando tanto el <span className="text-lime-400">frontend</span> como la integración con servicios <span className="text-lime-400">backend</span>. Disfruto trabajando en proyectos que resuelven problemas reales y aportan valor a las personas.
              </p>
            </div>
          </div>

          {/* Columna derecha - Formación y destacados */}
          <div className="space-y-8">            {/* Tarjeta de formación */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-lime-400/30 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-lime-400 text-black rounded-lg p-3 flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 11-2 0 1 1 0 012 0zm-3 3a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Formación Académica
                  </h4>
                  <p className="text-lime-400 font-semibold">
                    Técnico Superior en Desarrollo de Aplicaciones Web
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Título oficial obtenido en 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta de especialización */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-lime-400/30 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-4">
                Especialización
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                  Interfaces modernas y accesibles
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                  Integración Frontend-Backend
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                  Experiencias digitales funcionales
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                  Soluciones que aportan valor real
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
