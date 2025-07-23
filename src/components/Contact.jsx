// src/components/Contact.jsx
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'alternatives', null
  const [emailData, setEmailData] = useState(null); // Para almacenar los datos del email
  const [copySuccess, setCopySuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(emailData?.body || '');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Crear el enlace mailto con los datos del formulario
      const subject = formData.subject || 'Consulta desde Portfolio';
      const body = `Hola Borja,

Mi nombre es ${formData.name}.

${formData.message}

Saludos,
${formData.name}
Email: ${formData.email}`;

      const mailtoLink = `mailto:escolanomartinborja@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Almacenar los datos del email para las alternativas
      setEmailData({
        subject,
        body,
        mailtoLink
      });
      
      // Intentar abrir el cliente de correo
      window.location.href = mailtoLink;
      
      // Dar tiempo para que se abra el cliente y luego mostrar alternativas
      setTimeout(() => {
        setSubmitStatus('alternatives');
        setIsSubmitting(false);
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1500);

    } catch {
      setSubmitStatus('error');
      setIsSubmitting(false);
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
                  href="https://www.linkedin.com/in/borja-escolano-martin/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center text-white hover:bg-lime-400/20 hover:text-lime-400 transition-all duration-300 hover:scale-105"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/BorjaEscolanoMartin"
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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mensaje de estado */}
              {submitStatus === 'success' && (
                <div className="bg-lime-400/10 border border-lime-400/30 rounded-lg p-4 text-lime-400">
                  <p className="font-semibold text-center">¡Formulario procesado correctamente!</p>
                  <p className="text-sm text-center mt-2">
                    Se ha abierto tu cliente de correo con todos los datos del formulario. 
                    <br />
                    <span className="font-medium">Para completar el envío, haz clic en "Enviar" en tu aplicación de correo.</span>
                  </p>
                </div>
              )}

              {submitStatus === 'alternatives' && (
                <div className="bg-lime-400/10 border border-lime-400/30 rounded-lg p-4 text-lime-400">
                  <p className="font-semibold text-center mb-3">¡Formulario procesado!</p>
                  <p className="text-sm text-center mb-4">
                    Si no se abrió tu cliente de correo, puedes usar estas alternativas:
                  </p>
                  <div className="space-y-2">
                    <button
                      onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=escolanomartinborja@gmail.com&su=' + encodeURIComponent(emailData?.subject || '') + '&body=' + encodeURIComponent(emailData?.body || ''), '_blank')}
                      className="w-full bg-lime-400/20 hover:bg-lime-400/30 border border-lime-400/50 text-lime-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Abrir Gmail Web
                    </button>
                    <button
                      onClick={handleCopyMessage}
                      className="w-full bg-gray-600/50 hover:bg-gray-600/70 border border-gray-500/50 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      {copySuccess ? '¡Copiado!' : 'Copiar mensaje'}
                    </button>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-400">
                    Email: escolanomartinborja@gmail.com
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-400/10 border border-red-400/30 rounded-lg p-4 text-red-400 text-center">
                  <p className="font-semibold">Error en el formulario</p>
                  <p className="text-sm mt-1">Por favor, completa todos los campos obligatorios.</p>
                </div>
              )}

              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 transition-colors"
                  placeholder="tu@email.com"
                  required
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
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 transition-colors"
                  placeholder="¿En qué te puedo ayudar?"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                ></textarea>
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                    : 'bg-lime-400 text-black hover:bg-lime-300 hover:transform hover:scale-[1.02]'
                }`}
              >
                <FaEnvelope className="text-sm" />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
