// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Pets - Cuidado de Mascotas",
      description: "Proyecto final de grado para el alojamiento de mascotas con sistema de reservas y perfiles de usuarios, cuidadores y empresas. Sistemas de búsqueda, notificaciones y chat en tiempo real.",
      technologies: ["React", "Laravel", "Docker", "PostgreSQL", "Tailwind CSS", "Vite", "JavaScript", "Node.js", "AWS"],
      image: `${import.meta.env.BASE_URL}Pets.png`, 
      githubUrl: "https://github.com/BorjaEscolanoMartin/pet-hosting-platform",
      demoUrl: "http://51.20.38.155:5173/",
      status: "Completado"
    },
    {
      id: 2,
      title: "Portfolio Personal",
      description: "Sitio web personal moderno y responsive diseñado para mostrar proyectos, habilidades y experiencia profesional. Optimizado para rendimiento y SEO.",
      technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      image: `${import.meta.env.BASE_URL}Portfolio.png`, 
      githubUrl: "https://github.com/BorjaEscolanoMartin/PortFolio",
      demoUrl: "https://borjaescolanomartin.github.io/PortFolio/",
      status: "En desarrollo"
    },
    {
      id: 3,
      title: "E-commerce Dashboard",
      description: "Panel de administración para comercio electrónico con análisis de ventas, gestión de inventario y control de usuarios. Interfaz intuitiva con gráficos interactivos.",
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB"],
      image: `${import.meta.env.BASE_URL}fondo.png`, 
      githubUrl: "#",
      demoUrl: "#",
      status: "Próximamente"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completado":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "En desarrollo":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Próximamente":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };
  return (    <section className="text-white pt-8 pb-24 px-6">
      <div className="max-w-7xl mx-auto">        {/* Línea separadora encima del título */}
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
          PROYECTOS
        </h2>
        
        {/* Subtítulo */}
        <p className="text-center text-gray-400 text-lg mb-20 max-w-3xl mx-auto">
          Una colección de proyectos que demuestran mis habilidades en desarrollo web, 
          desde aplicaciones completas hasta interfaces modernas y funcionales.
        </p>

        {/* Grid de proyectos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-lime-400/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                
                {/* Badge de estado */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-lime-400/10 text-lime-400 text-xs rounded-md border border-lime-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700/50 hover:bg-gray-600/50 text-white text-center py-2 px-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-lime-400/20 hover:bg-lime-400/30 text-lime-400 text-center py-2 px-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-lime-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 hover:transform hover:scale-105"
          >
            Contactar
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
