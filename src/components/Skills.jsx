// src/components/Skills.jsx
import { skillGroups } from '../data/skills';

export default function Skills() {
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 pt-20">
          COMPETENCIAS
        </h2>

        {/* Subtítulo */}
        <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
          Stack de desarrollo web full-stack combinado con análisis de datos,
          Business Intelligence e inteligencia artificial aplicada.
        </p>

        {/* Grid de grupos de competencias */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-lime-400/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-lime-400 mb-2">
                {group.title}
              </h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                {group.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-lime-400/10 text-gray-200 text-sm rounded-md border border-lime-400/20"
                    >
                      {Icon && <Icon className="text-lime-400 text-base" aria-hidden="true" />}
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
