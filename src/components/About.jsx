// src/components/About.jsx
import { education } from '../data/education';
import { useLanguage } from '../i18n/useLanguage';
import { localize } from '../i18n/localize';

export default function About() {
  const { lang, t } = useLanguage();

  return (
    <section className="text-white pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          {t.about.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda - Información personal */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-lime-400">
              Borja Escolano Martín
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
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
                  {t.about.educationTitle}
                </h4>
              </div>
              <ul className="space-y-3">
                {education.map((item) => (
                  <li key={item.id}>
                    <p className="text-lime-400 font-semibold leading-snug">
                      {localize(item.title, lang)}
                    </p>
                    {item.institution && (
                      <p className="text-gray-400 text-sm">
                        {item.institution}
                      </p>
                    )}
                    <p className="text-gray-500 text-sm">
                      {item.years} · {localize(item.detail, lang)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tarjeta de especialización */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-lime-400/30 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-3">
                {t.about.specialisationTitle}
              </h4>
              <ul className="space-y-2 text-gray-300">
                {t.about.specialisation.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
