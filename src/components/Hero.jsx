import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { skillGroups } from '../data/skills';

// Vista compacta del stack para el Hero: los primeros N items de cada grupo
// de skills.js, repartidos en filas de como máximo 7 iconos (sin duplicar
// datos a mano).
const ITEMS_PER_GROUP = 5;
const ROW_SIZE = 7;

const heroTechnologies = skillGroups.flatMap((group) => group.items.slice(0, ITEMS_PER_GROUP));
const technologyRows = [];
for (let i = 0; i < heroTechnologies.length; i += ROW_SIZE) {
  technologyRows.push(heroTechnologies.slice(i, i + ROW_SIZE));
}

export default function Hero() {
  return (    <section
        className="relative text-white min-h-[400px] md:min-h-[550px] lg:min-h-[550px] flex items-start pt-16 pb-16 overflow-hidden"
    >    {/* Lateral izquierdo */}
      {/* Altura fija (no calc del 100%) para que la flecha termine a la altura del icono
          de correo del lateral derecho, que tambien es de altura fija por contenido.
          Con calc(100%) la flecha se movia cada vez que crecia el texto del hero. */}
      <div className="absolute left-6 top-17 hidden lg:flex flex-col justify-between items-center w-8" style={{height: '530px'}}>
        {/* Icono de móvil */}
        <div>
          <img
            src={`${import.meta.env.BASE_URL}iconotelefono.svg`}
            alt="Phone icon"
            className="w-6 h-6"
          />
        </div>
        {/* Teléfono rotado */}
        <div>
          <a href="tel:+34628406752" className="block rotate-90 text-xs font-bold hover:text-lime-400 transition whitespace-nowrap origin-center text-white tracking-widest mb-10">
            +34 628 406 752
          </a>
        </div>
        {/* Texto DESLIZA ABAJO rotado */}
        <div>
          <span className="block rotate-90 tracking-widest text-xs whitespace-nowrap origin-center text-gray-400">DESLIZA ABAJO</span>
        </div>
        {/* Flecha */}
        <div>
          <img
            src={`${import.meta.env.BASE_URL}flecha.png`}
            alt="Scroll down arrow"
            className="w-20 h-30 object-cover translate-x-0.5"
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
            className="w-5 h-72 object-cover"
          />
        </div>

        {/* Espaciador antes de iconos sociales */}
        <div className="mt-12"></div>
        
        <div className="flex flex-col gap-4 text-2xl">
          <a href="https://github.com/BorjaEscolanoMartin/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white hover:text-lime-400 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/borja-escolano-martin/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white hover:text-lime-400 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a
            href="#contacto"
            aria-label="Ir a contacto"
            className="text-white hover:text-lime-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>        {/* Contenido principal - Layout con dos columnas */}      
      <div className="w-full max-w-7xl mx-auto px-6 z-10 relative lg:px-20 lg:ml-8 gap-2">
        {/* Layout principal con texto e imagen */}
        <div className="flex items-center">
          {/* Contenido de texto - Lado izquierdo */}
          <div className="w-full md:w-2/3 flex items-center justify-center pr-2 lg:pl-16">
          <div className="text-center lg:text-left">
            <p className="uppercase text-sm tracking-widest text-gray-400 mb-4">
              Disponible para trabajar
            </p>            <h1 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold leading-tight tracking-normal">
              Desarrollador <span className="whitespace-nowrap">Full-Stack</span>
              <span className="block text-lime-400 font-bold text-lg md:text-xl lg:text-lg xl:text-2xl mt-3 lg:whitespace-nowrap">
                Analista de datos · Máster de FP en IA y Big Data
              </span>
            </h1>
            <p className="mt-6 text-lg text-white max-w-xl lg:pr-16 mx-auto lg:mx-0">
              Diseño y desarrollo de aplicaciones web con Clean Architecture y testing: código desacoplado y preparado para escalar. Y del dato a la decisión: análisis con SQL, Python y Power BI, con machine learning aplicado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start items-center">
              <a
                href="#proyectos"
                className="inline-block px-6 py-3 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-300 transition text-center w-50"
              >
                Ver proyectos
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Borja_Escolano_Martin_CV.pdf`}
                download="Borja_Escolano_Martin_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition w-50"
              >
                <FaDownload className="text-sm" />
                Descargar CV
              </a>
            </div>          </div>
        </div>

        {/* Imagen - Lado derecho */}
        <div className="hidden md:flex w-1/3 h-full items-center justify-center relative transform md:translate-x-4 lg:-translate-x-6">
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}Yop.webp`}
              alt="Foto de Borja Escolano, desarrollador full-stack y analista de datos"
              loading="eager"
              fetchPriority="high"
              className="max-w-full h-auto max-h-[450px] object-cover"
            />
            {/* Sombreado negro con máscara para seguir la forma de la imagen */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 8%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 65%, transparent 85%)',
                WebkitMask: `url("${import.meta.env.BASE_URL}Yop.webp") center/cover no-repeat`,
                mask: `url("${import.meta.env.BASE_URL}Yop.webp") center/cover no-repeat`,
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
          <div className="space-y-6 px-6 sm:px-10 md:px-12 lg:px-14">
            {technologyRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-7 gap-2 sm:gap-4 md:gap-8 lg:gap-12 place-items-center">
                {row.map((tech) => {
                  const IconComponent = tech.icon;
                  return (
                    <div key={tech.name} className="group flex items-center justify-center w-full" title={tech.name}>
                      {IconComponent
                        ? <IconComponent className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white hover:text-lime-400 group-hover:scale-110 transition-all duration-300" />
                        : <span className="text-[10px] sm:text-xs font-bold text-white hover:text-lime-400 group-hover:scale-110 transition-all duration-300 text-center leading-tight">{tech.name}</span>
                      }
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
