// src/components/Experience.jsx
const experiences = [
  {
    role: "Desarrollador Full-Stack",
    company: "TuyTu Tech",
    period: "2026",
    bullets: [
      "Plataforma de protección de imágenes frente a deepfakes, aplicando perturbaciones adversariales sobre modelos de IA generativa.",
      "Dashboard en React/TypeScript con subida multi-archivo y procesado por lotes, integrado con una API en Python/FastAPI desarrollada por mí.",
      "Calidad de código en equipo: revisión de PRs, testing en CI con mocks de modelos ML (ONNX) y flujo colaborativo en GitHub.",
    ],
  },
  {
    role: "Desarrollador Web en prácticas",
    company: "Ayuntamiento de Novelda",
    period: "2025",
    bullets: [
      "Desarrollo y mantenimiento de webs de servicios municipales para distintas áreas (juventud, cultura...).",
      "Maquetación y estructuración de contenidos con foco en la experiencia de usuario.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="text-white pt-8 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Línea separadora encima del título */}
        <div
          className="h-1 w-full relative mt-6 mb-8"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(163, 230, 53, 0.3) 8%, #a3e635 22%, #a3e635 78%, rgba(163, 230, 53, 0.3) 92%, transparent 100%)'
          }}
        >
          {/* Línea central más brillante */}
          <div
            className="absolute left-0 right-0 h-0.5 top-1/2 transform -translate-y-1/2"
            style={{
              background: 'linear-gradient(to right, transparent 0%, rgba(163, 230, 53, 0.8) 12%, #a3e635 27%, #a3e635 73%, rgba(163, 230, 53, 0.8) 88%, transparent 100%)'
            }}
          ></div>
        </div>

        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 pt-20">
          EXPERIENCIA
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Línea vertical del timeline */}
          <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-gradient-to-b from-lime-400 via-lime-400/40 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative pl-12">
                {/* Punto del timeline */}
                <span className="absolute left-0 top-2 w-4 h-4 bg-lime-400 rounded-full ring-4 ring-lime-400/20"></span>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-lime-400/30 transition-all duration-300">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-lime-400 leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-white font-semibold">{exp.company}</p>
                    </div>
                    <p className="text-gray-400 text-sm font-semibold">
                      {exp.period}
                    </p>
                  </div>

                  <ul className="space-y-3 text-gray-300">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex">
                        <span className="w-2 h-2 bg-lime-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
