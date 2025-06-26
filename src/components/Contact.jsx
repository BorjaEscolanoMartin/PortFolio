// src/components/Contact.jsx
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="text-white pt-2 pb-12 px-6">
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
          CONTACTO
        </h2>
        
        {/* Subtítulo */}
        <p className="text-center text-gray-400 text-lg mb-20 max-w-3xl mx-auto">
          ¿Tienes un proyecto en mente? Me encantaría colaborar contigo. 
          Ponte en contacto y construyamos algo increíble juntos.
        </p>

        {/* Contenido principal - Grid de 2 columnas */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Columna izquierda - Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de Contacto
              </h3>
              <p className="text-gray-400 mb-8">
                Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales. 
                No dudes en contactarme a través de cualquiera de estos medios.
              </p>
            </div>

            {/* Métodos de contacto */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center group-hover:bg-lime-400/30 transition-colors">
                  <FaEnvelope className="text-lime-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href="mailto:escolanomartinborja@gmail.com" 
                    className="text-white hover:text-lime-400 transition-colors"
                  >
                    escolanomartinborja@gmail.com
                  </a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center group-hover:bg-lime-400/30 transition-colors">
                  <FaPhone className="text-lime-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Teléfono</p>
                  <a 
                    href="tel:+34628406752" 
                    className="text-white hover:text-lime-400 transition-colors"
                  >
                    +34 628 406 752
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center group-hover:bg-lime-400/30 transition-colors">
                  <FaMapMarkerAlt className="text-lime-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Ubicación</p>
                  <p className="text-white">03660 Novelda, Alicante, España</p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Sígueme en</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/tuusuario"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center text-white hover:bg-lime-400/20 hover:text-lime-400 transition-all duration-300 hover:scale-105"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/tuusuario"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center text-white hover:bg-lime-400/20 hover:text-lime-400 transition-all duration-300 hover:scale-105"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario de contacto */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envíame un Mensaje
            </h3>
            
            <form className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Asunto */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 transition-colors"
                  placeholder="¿En qué te puedo ayudar?"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                className="w-full bg-lime-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 hover:transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <FaEnvelope className="text-sm" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Call to action final */}
        <div className="text-center mt-20 pt-12 border-t border-gray-700/50">          <p className="text-gray-400 mb-4">
            ¿Prefieres una llamada directa?
          </p>
          <a
            href="tel:+34628406752"
            className="inline-flex items-center gap-2 bg-gray-800/50 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lime-400 hover:text-black transition-all duration-300 hover:transform hover:scale-105"
          >
            <FaPhone className="text-sm" />
            Llamar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
