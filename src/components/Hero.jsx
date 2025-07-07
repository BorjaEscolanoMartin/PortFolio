import { FaGithub, FaLinkedin, FaEnvelope, FaMobileAlt, FaArrowDown } from "react-icons/fa";
import { 
  FaReact, 
  FaJs, 
  FaJava,
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiVite, 
  SiMongodb,
  SiExpress,
  SiDocker,
  SiLaravel,
  SiPhp,
  SiMysql 
} from 'react-icons/si';
import { useState } from 'react';

export default function Hero() {
  const [showEmailModal, setShowEmailModal] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    
    // Intentar mailto primero
    const mailtoLink = "mailto:escolanomartinborja@gmail.com?subject=Consulta%20desde%20el%20portfolio&body=Hola%20Borja%2C%20te%20escribo%20porque...";
    
    // Crear enlace temporal
    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    
    // Si no funciona después de 2 segundos, mostrar modal
    setTimeout(() => {
      setShowEmailModal(true);
    }, 2000);
  };

  const openGmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=escolanomartinborja@gmail.com&su=Consulta%20desde%20el%20portfolio&body=Hola%20Borja%2C%20te%20escribo%20porque...",
      '_blank'
    );
    setShowEmailModal(false);
  };

  const closeModal = () => {
    setShowEmailModal(false);
  };

  const technologies = [
    { name: 'React', icon: FaReact, color: 'text-white' },
    { name: 'JavaScript', icon: FaJs, color: 'text-white' },
    { name: 'Java', icon: FaJava, color: 'text-white' },
    { name: 'PHP', icon: SiPhp, color: 'text-white', size: 'text-4xl md:text-5xl lg:text-6xl' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-white' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-white' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-white' },
    { name: 'MySQL', icon: SiMysql, color: 'text-white', size: 'text-4xl md:text-5xl lg:text-6xl' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-white' },
    { name: 'Express', icon: SiExpress, color: 'text-white' },
    { name: 'Laravel', icon: SiLaravel, color: 'text-white' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-white' },
    { name: 'Docker', icon: SiDocker, color: 'text-white' },
    { name: 'Vite', icon: SiVite, color: 'text-white' },
    { name: 'Git', icon: FaGitAlt, color: 'text-white' },
  ];
  return (    <section
        className="relative text-white min-h-[400px] md:min-h-[550px] lg:min-h-[550px] flex items-start pt-16 pb-16 overflow-hidden"
        id="inicio"
    >    {/* Lateral izquierdo */}
      <div className="absolute left-6 top-16 hidden lg:flex flex-col justify-between items-center w-8" style={{height: 'calc(100% - 32px - 350px)'}}>{/* Icono de móvil */}
        <div className="flex flex-col items-center">
          <img 
            src={`${import.meta.env.BASE_URL}iconotelefono.svg`} 
            alt="Phone icon"
            className="w-6 h-6"
          />
        </div>          
        {/* Teléfono rotado */}
        <div className="flex flex-col items-center">
          <a href="tel:+34628406752" className="rotate-90 text-xs font-bold hover:text-lime-400 transition whitespace-nowrap origin-center text-white tracking-widest">
            +34 628 406 752
          </a>
        </div>
        
        {/* Espaciador adicional */}
        <div></div>        
        {/* Texto rotado SCROLL DOWN */}
        <div className="flex flex-col items-center">
          <span className="rotate-90 tracking-widest text-xs whitespace-nowrap origin-center text-gray-400">DESLIZA ABAJO</span>
        </div>

        {/* Flecha hacia abajo personalizada */}
        <div className="flex flex-col items-center ml-1">
          <img 
            src={`${import.meta.env.BASE_URL}flecha.png`} 
            alt="Scroll down arrow"
            className="w-20 h-30 object-cover"
          />
        </div>
      </div>      {/* Lateral derecho */}      
      <div className="absolute right-6 top-20 hidden lg:flex flex-col items-center w-8 z-40" style={{height: 'calc(100% - 80px - 320px)'}}><div className="flex flex-col items-center -ml-1">
          <span className="rotate-90 text-xs tracking-widest text-gray-400 whitespace-nowrap origin-center">SÍGUEME</span>
        </div>
        
        {/* Espaciador entre SÍGUEME y flecha */}
        <div className="mt-12"></div>
        
        {/* Flecha hacia abajo personalizada */}
        <div className="flex flex-col items-center">
          <img 
            src={`${import.meta.env.BASE_URL}flecha.png`} 
            alt="Scroll down arrow"
            className="w-5 h-60 object-cover"
          />
        </div>
        
        {/* Espaciador antes de iconos sociales */}
        <div className="flex-grow"></div>
        
        <div className="flex flex-col gap-4 text-2xl">
          <a href="https://github.com/BorjaEscolanoMartin/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white hover:text-lime-400 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white hover:text-lime-400 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <button
            onClick={handleEmailClick}
            aria-label="Enviar email" 
            title="Enviar email a escolanomartinborja@gmail.com"
            className="text-white hover:text-lime-400 transition-colors duration-300 bg-transparent border-none cursor-pointer p-0 text-2xl"
          >
            <FaEnvelope />
          </button>
        </div>
      </div>        {/* Contenido principal - Layout con dos columnas */}      
      <div className="w-full max-w-7xl mx-auto px-6 z-10 relative lg:px-20 lg:ml-8 gap-2">
        {/* Layout principal con texto e imagen */}
        <div className="flex items-center">
          {/* Contenido de texto - Lado izquierdo */}
          <div className="w-full md:w-2/3 flex items-center justify-center pr-2 lg:pl-16">
          <div className="text-center md:text-left">
            <p className="uppercase text-sm tracking-widest text-gray-400 mb-4">
              Disponible para trabajar
            </p>            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-normal">
              Desarrollador Web Full-Stack
            </h1>
            <p className="mt-6 text-lg text-white max-w-xl md:pr-16">
              Me especializo en crear experiencias web modernas con React, Laravel y Tailwind. Listo para asumir nuevos retos.
            </p>
            <a
              href="#proyectos"
              className="inline-block mt-8 px-8 py-3 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-300 transition"
            >
              Ver proyectos
            </a>          </div>
        </div>

        {/* Imagen - Lado derecho */}
        <div className="hidden md:flex w-1/3 h-full items-center justify-center relative transform md:translate-x-4 lg:-translate-x-12">
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}Yop.png`} 
              alt="Desarrollador"
              className="max-w-full h-auto max-h-[450px] object-cover"
            />
            {/* Sombreado negro con máscara para seguir la forma de la imagen */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 8%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 65%, transparent 85%)',
                WebkitMask: `url("${import.meta.env.BASE_URL}Yop.png") center/cover no-repeat`,
                mask: `url("${import.meta.env.BASE_URL}Yop.png") center/cover no-repeat`,
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect',
                WebkitMaskPosition: 'center center',
                maskPosition: 'center center',
                WebkitMaskSize: '102% 102%',
                maskSize: '102% 102%'
              }}
            ></div>
          </div>
        </div>
        </div>        {/* Sección de TechStack integrada - debajo de las dos columnas */}
        <div className="mt-12 lg:mt-16 mb-14" id="tecnologias">
          <div className="space-y-8">
            {/* Primera fila - 8 iconos */}
            <div className="flex justify-center items-center gap-8 md:gap-14 lg:gap-19">
              {technologies.slice(0, 8).map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div 
                    key={index} 
                    className="group flex items-center justify-center"
                    title={tech.name}
                  >
                    <IconComponent 
                      className={`${tech.size || 'text-3xl md:text-4xl lg:text-5xl'} ${tech.color} hover:text-lime-400 group-hover:scale-110 transition-all duration-300`} 
                    />
                  </div>
                );
              })}
            </div>

            {/* Segunda fila - 7 iconos */}
            <div className="flex justify-center items-center gap-8 md:gap-14 lg:gap-19">
              {technologies.slice(8, 15).map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div 
                    key={index + 8} 
                    className="group flex items-center justify-center"
                    title={tech.name}
                  >
                    <IconComponent 
                      className={`${tech.size || 'text-3xl md:text-4xl lg:text-5xl'} ${tech.color} hover:text-lime-400 group-hover:scale-110 transition-all duration-300`} 
                    />
                  </div>
                );
              })}            </div>
          </div>
        </div>
      </div>

      {/* Modal personalizado para email */}
      {showEmailModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 px-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="text-center">
              <div className="mb-4">
                <FaEnvelope className="text-4xl text-lime-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  ¿No se abrió tu cliente de correo?
                </h3>
                <p className="text-gray-600 mb-6">
                  Puedes contactarme en: <strong>escolanomartinborja@gmail.com</strong>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={openGmail}
                  className="flex-1 bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Abrir Gmail
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
