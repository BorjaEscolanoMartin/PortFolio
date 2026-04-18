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
                <span className="text-white font-semibold">Desarrollador Web Full Stack</span> con experiencia práctica en el desarrollo de aplicaciones web modernas, participando tanto en <span className="text-lime-400">frontend</span> como en <span className="text-lime-400">backend</span>.
              </p>

              <p>
                Trabajo con un stack orientado a la <span className="text-lime-400">lógica de negocio</span>, <span className="text-lime-400">bases de datos</span>, <span className="text-lime-400">interfaces responsive</span>, <span className="text-lime-400">APIs</span> y despliegue de proyectos web, y he desarrollado soluciones propias con <span className="text-lime-400">autenticación, reservas, chat en tiempo real y notificaciones</span>.
              </p>

              <p>
                Actualmente continúo mi formación con una <span className="text-white font-semibold">Especialización de FP en Inteligencia Artificial y Big Data</span>, abarcando <span className="text-white">análisis de datos</span>, <span className="text-white">machine learning</span>, <span className="text-white">tratamiento de datos</span> y aplicación de <span className="text-lime-400">soluciones de IA en entornos reales</span>.
              </p>
            </div>
          </div>

          {/* Columna derecha - Formación y destacados */}
          <div className="space-y-6">            {/* Tarjeta de formación */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-lime-400/30 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-lime-400 text-black rounded-lg p-3 flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 11-2 0 1 1 0 012 0zm-3 3a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white">
                  Formación Académica
                </h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <p className="text-lime-400 font-semibold leading-snug">
                    Técnico Superior en Desarrollo de Aplicaciones Web
                  </p>
                  <p className="text-gray-400 text-sm">
                    Título oficial · 2025
                  </p>
                </li>
                <li>
                  <p className="text-lime-400 font-semibold leading-snug">
                    Especialización de FP en Inteligencia Artificial y Big Data
                  </p>
                  <p className="text-gray-400 text-sm">
                    En curso
                  </p>
                </li>
                <li>
                  <p className="text-lime-400 font-semibold leading-snug">
                    Curso de Desarrollo con IA de 0 a producción
                  </p>
                  <p className="text-gray-400 text-sm">
                    Completado este año
                  </p>
                </li>
              </ul>
            </div>

            {/* Tarjeta de especialización */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-lime-400/30 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-3">
                Especialización
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                  Desarrollo Full Stack (Frontend + Backend)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                  APIs, bases de datos y despliegue
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                  Auth, chat en tiempo real y notificaciones
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                  Análisis de datos, Machine Learning e IA aplicada
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
