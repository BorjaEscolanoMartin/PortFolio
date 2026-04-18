// src/components/Contact.jsx
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaCopy, FaCheck, FaPaperPlane, FaGoogle, FaWhatsapp } from "react-icons/fa";
import { useState } from 'react';

const EMAIL = "escolanomartinborja@gmail.com";
const PHONE_INTL = "34628406752"; // sin '+' para wa.me
const DEFAULT_SUBJECT = "Contacto desde tu Portfolio";
const DEFAULT_BODY = `Hola Borja,

Me pongo en contacto contigo desde tu portfolio porque...

Un saludo.`;

export default function Contact() {
  const [copySuccess, setCopySuccess] = useState(false);

  const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(DEFAULT_SUBJECT)}&body=${encodeURIComponent(DEFAULT_BODY)}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(DEFAULT_SUBJECT)}&body=${encodeURIComponent(DEFAULT_BODY)}`;
  const whatsappLink = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent("Hola Borja, te escribo desde tu portfolio...")}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      // Fallback para navegadores sin clipboard API
      const textarea = document.createElement('textarea');
      textarea.value = EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('No se pudo copiar el email:', err);
      }
      document.body.removeChild(textarea);
    }
  };

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
                    href={`mailto:${EMAIL}`}
                    className="text-white hover:text-lime-400 transition-colors break-all"
                  >
                    {EMAIL}
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
                  href="https://www.linkedin.com/in/borja-escolano-martin/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center text-white hover:bg-lime-400/20 hover:text-lime-400 transition-all duration-300 hover:scale-105"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/BorjaEscolanoMartin"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center text-white hover:bg-lime-400/20 hover:text-lime-400 transition-all duration-300 hover:scale-105"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha - Acciones directas de contacto */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-3">
              Escríbeme directamente
            </h3>
            <p className="text-gray-400 mb-8">
              Elige la vía que prefieras. Todos los botones abren un mensaje ya preparado
              para que solo tengas que escribir lo que necesitas y enviar.
            </p>

            <div className="space-y-4">
              {/* Botón principal: abrir cliente de correo por defecto */}
              <a
                href={mailtoLink}
                className="w-full px-6 py-4 rounded-lg font-semibold bg-lime-400 text-black hover:bg-lime-300 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02] shadow-lg shadow-lime-400/10"
              >
                <FaPaperPlane className="text-sm" />
                Enviar email
              </a>

              {/* Abrir Gmail en el navegador */}
              <a
                href={gmailLink}
                target="_blank"
                rel="noreferrer"
                className="w-full px-6 py-4 rounded-lg font-semibold bg-gray-900/60 border border-gray-600/60 text-white hover:bg-lime-400/10 hover:border-lime-400/50 hover:text-lime-400 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaGoogle className="text-sm" />
                Abrir en Gmail
              </a>

              {/* Copiar email */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full px-6 py-4 rounded-lg font-semibold bg-gray-900/60 border border-gray-600/60 text-white hover:bg-lime-400/10 hover:border-lime-400/50 hover:text-lime-400 transition-all duration-300 flex items-center justify-center gap-3"
              >
                {copySuccess ? (
                  <>
                    <FaCheck className="text-sm" />
                    ¡Email copiado!
                  </>
                ) : (
                  <>
                    <FaCopy className="text-sm" />
                    Copiar dirección
                  </>
                )}
              </button>

              {/* WhatsApp como alternativa rápida */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full px-6 py-4 rounded-lg font-semibold bg-gray-900/60 border border-gray-600/60 text-white hover:bg-lime-400/10 hover:border-lime-400/50 hover:text-lime-400 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-sm" />
                Escribir por WhatsApp
              </a>
            </div>

            {/* Email visible como fallback */}
            <div className="mt-8 pt-6 border-t border-gray-700/50 text-center">
              <p className="text-gray-500 text-sm mb-1">O escríbeme a</p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-lime-400 font-medium hover:text-lime-300 transition-colors break-all"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
