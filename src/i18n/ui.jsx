// User interface texts, one dictionary per language.
// Rich text (highlighted words, word order) is stored as JSX per language.
import { Hl, Strong } from './RichText';

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
    about: {
      title: 'SOBRE MÍ',
      paragraphs: [
        <>
          <Strong>Desarrollador Full-Stack</Strong> con experiencia práctica en aplicaciones web de principio a fin: frontend con <Hl>React</Hl> y <Hl>TypeScript</Hl>, APIs con <Hl>Node.js</Hl>, <Hl>Python (FastAPI)</Hl> y <Hl>PHP (Laravel)</Hl>, bases de datos <Hl>SQL</Hl> y despliegue con <Hl>Docker</Hl>.
        </>,
        <>
          Trabajo con <Hl>decisiones de diseño documentadas</Hl> antes del código, <Hl>test-first</Hl>, PR pequeños con <Hl>CI</Hl> y <Hl>revisión independiente</Hl> antes de cada merge. El código crítico (autenticación, permisos y datos de usuario) pasa además por una <Hl>revisión de seguridad</Hl> dedicada.
        </>,
        <>
          He completado el <Strong>Máster de FP en Inteligencia Artificial y Big Data</Strong>: análisis y visualización de datos con <Hl>SQL</Hl>, <Hl>Python</Hl> y <Hl>Power BI</Hl>, <Hl>machine learning</Hl> con scikit-learn y TensorFlow, y aplicaciones con <Hl>LLMs (RAG)</Hl> y <Hl>visión por computador</Hl>.
        </>,
      ],
      educationTitle: 'Formación Académica',
      specialisationTitle: 'Especialización',
      specialisation: [
        'Desarrollo Full-Stack (Frontend + Backend)',
        'APIs, bases de datos y despliegue',
        'Test-first, CI y revisión de código',
        'Análisis de datos y BI: SQL, Python, Power BI',
        'Machine Learning e IA aplicada: LLMs, visión por computador',
      ],
    },
    skills: {
      title: 'COMPETENCIAS',
      subtitle:
        'Stack de desarrollo web full-stack combinado con análisis de datos, Business Intelligence e inteligencia artificial aplicada.',
    },
    experience: {
      title: 'EXPERIENCIA',
    },
    projects: {
      title: 'PROYECTOS',
      subtitle:
        'Una colección de proyectos que combina desarrollo web full-stack con análisis de datos e inteligencia artificial, desde aplicaciones completas hasta modelos y dashboards de datos.',
      filters: { all: 'Todos', web: 'Web', 'datos-ia': 'Datos e IA' },
      status: { completed: 'Completado', 'in-progress': 'En desarrollo', 'coming-soon': 'Próximamente' },
      screenshotAlt: 'Captura del proyecto',
      report: 'Informe (PDF)',
      ctaQuestion: '¿Tienes un proyecto en mente? ¡Hablemos!',
      ctaButton: 'Contactar',
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
    about: {
      title: 'ABOUT ME',
      paragraphs: [
        <>
          <Strong>Full-Stack Developer</Strong> with hands-on experience building end-to-end web applications: frontend with <Hl>React</Hl> and <Hl>TypeScript</Hl>, APIs with <Hl>Node.js</Hl>, <Hl>Python (FastAPI)</Hl> and <Hl>PHP (Laravel)</Hl>, <Hl>SQL</Hl> databases and deployment with <Hl>Docker</Hl>.
        </>,
        <>
          I work with <Hl>documented design decisions</Hl> before writing code, <Hl>test-first</Hl>, small PRs with <Hl>CI</Hl> and <Hl>independent review</Hl> before every merge. Critical code (authentication, permissions and user data) also goes through a dedicated <Hl>security review</Hl>.
        </>,
        <>
          I have completed the <Strong>Vocational Master&apos;s in Artificial Intelligence and Big Data</Strong>: data analysis and visualisation with <Hl>SQL</Hl>, <Hl>Python</Hl> and <Hl>Power BI</Hl>, <Hl>machine learning</Hl> with scikit-learn and TensorFlow, and applications with <Hl>LLMs (RAG)</Hl> and <Hl>computer vision</Hl>.
        </>,
      ],
      educationTitle: 'Education',
      specialisationTitle: 'Specialisation',
      specialisation: [
        'Full-Stack Development (Frontend + Backend)',
        'APIs, databases and deployment',
        'Test-first, CI and code review',
        'Data analysis and BI: SQL, Python, Power BI',
        'Machine Learning and applied AI: LLMs, computer vision',
      ],
    },
    skills: {
      title: 'SKILLS',
      subtitle:
        'A full-stack web development stack combined with data analysis, Business Intelligence and applied artificial intelligence.',
    },
    experience: {
      title: 'EXPERIENCE',
    },
    projects: {
      title: 'PROJECTS',
      subtitle:
        'A collection of projects combining full-stack web development with data analysis and artificial intelligence, from complete applications to models and data dashboards.',
      filters: { all: 'All', web: 'Web', 'datos-ia': 'Data & AI' },
      status: { completed: 'Completed', 'in-progress': 'In progress', 'coming-soon': 'Coming soon' },
      screenshotAlt: 'Screenshot of',
      report: 'Report (PDF)',
      ctaQuestion: "Have a project in mind? Let's talk!",
      ctaButton: 'Get in touch',
    },
    footer: {
      tagline: 'Full-Stack Developer · Data & AI',
    },
  },
};
