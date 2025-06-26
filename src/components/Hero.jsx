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

export default function Hero() {
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
            src="/iconotelefono.svg" 
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
            src="/flecha.png" 
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
            src="/flecha.png" 
            alt="Scroll down arrow"
            className="w-5 h-60 object-cover"
          />
        </div>
        
        {/* Espaciador antes de iconos sociales */}
        <div className="flex-grow"></div>
        
        <div className="flex flex-col gap-4 text-2xl">
          <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white hover:text-lime-400 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white hover:text-lime-400 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:escolanomartinborja@gmail.com" aria-label="Email" className="text-white hover:text-lime-400 transition-colors duration-300">
            <FaEnvelope />
          </a>
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
        <div className="hidden md:flex w-1/3 h-full items-center justify-center relative transform -translate-x-12">
          <div className="relative">
            <img
              src="/Yop.png" 
              alt="Desarrollador"
              className="max-w-full h-auto max-h-[450px] object-cover"
            />
            {/* Sombreado negro con máscara para seguir la forma de la imagen */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 8%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 65%, transparent 85%)',
                WebkitMask: 'url("/Yop.png") center/cover no-repeat',
                mask: 'url("/Yop.png") center/cover no-repeat',
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
    </section>
  );
}
