// User interface texts, one dictionary per language.
// Rich text (highlighted words, word order) is stored as JSX per language.
const languageSwitch = {
  es: 'Ver en español',
  en: 'View in English',
};

const CV_FILE = 'Borja_Escolano_Martin_CV.pdf';

export const ui = {
  es: {
    meta: {
      title: 'Borja Escolano Martín — Desarrollador Full-Stack · Analista de datos',
    },
    languageSwitch,
    nav: {
      home: 'INICIO',
      about: 'SOBRE MÍ',
      skills: 'COMPETENCIAS',
      experience: 'EXPERIENCIA',
      projects: 'PROYECTOS',
      contact: 'CONTACTO',
      cta: 'HABLEMOS',
    },
    hero: {
      scrollDown: 'DESLIZA ABAJO',
      followMe: 'SÍGUEME',
      goToContact: 'Ir a contacto',
      available: 'Disponible para incorporación inmediata',
      title: (
        <>
          Desarrollador <span className="whitespace-nowrap">Full-Stack</span>
        </>
      ),
      subtitle: 'IA aplicada · Máster de FP en IA y Big Data',
      description:
        'Aplicaciones web de principio a fin con React, TypeScript y Python (FastAPI), combinadas con datos e IA: análisis con SQL y Power BI, modelos de machine learning e integración de LLM. Con tests, CI y revisión de código en cada cambio.',
      viewProjects: 'Ver proyectos',
      downloadCv: 'Descargar CV',
      cvFile: CV_FILE,
      photoAlt: 'Foto de Borja Escolano, desarrollador full-stack y analista de datos',
    },
    footer: {
      tagline: 'Desarrollador Full-Stack · Datos e IA',
    },
  },
  en: {
    meta: {
      title: 'Borja Escolano Martín — Full-Stack Developer · Data Analyst',
    },
    languageSwitch,
    nav: {
      home: 'HOME',
      about: 'ABOUT',
      skills: 'SKILLS',
      experience: 'EXPERIENCE',
      projects: 'PROJECTS',
      contact: 'CONTACT',
      cta: "LET'S TALK",
    },
    hero: {
      scrollDown: 'SCROLL DOWN',
      followMe: 'FOLLOW ME',
      goToContact: 'Go to contact',
      available: 'Available to start immediately',
      title: (
        <>
          <span className="whitespace-nowrap">Full-Stack</span> Developer
        </>
      ),
      subtitle: "Applied AI · Vocational Master's in AI & Big Data",
      description:
        'End-to-end web applications with React, TypeScript and Python (FastAPI), combined with data and AI: analysis with SQL and Power BI, machine learning models and LLM integration. With tests, CI and code review on every change.',
      viewProjects: 'View projects',
      // No English CV yet: the Spanish one is offered and labelled as such.
      downloadCv: 'Download CV (Spanish)',
      cvFile: CV_FILE,
      photoAlt: 'Photo of Borja Escolano, full-stack developer and data analyst',
    },
    footer: {
      tagline: 'Full-Stack Developer · Data & AI',
    },
  },
};
