// src/data/experience.js
// Translatable fields are `{ es, en }`; shared ones are plain values.
export const experiences = [
  {
    id: 'tuytu',
    role: {
      es: 'Desarrollador Full-Stack (colaboración)',
      en: 'Full-Stack Developer (collaboration)',
    },
    company: 'TuyTu Tech',
    period: { es: '2026 – Actualidad', en: '2026 – Present' },
    bullets: {
      es: [
        'Plataforma de protección de imágenes frente a deepfakes, aplicando perturbaciones adversariales sobre modelos de IA generativa.',
        'Desarrollo completo del producto web: la web pública (tuytu.tech) sobre un único Worker de Cloudflare con Supabase, y el dashboard en React/TypeScript con subida multi-archivo y procesado por lotes contra una API en Python/FastAPI.',
        'Incorporación al equipo de Core para el desarrollo del algoritmo de protección preventiva.',
        'Revisión de código en PR y mantenimiento de tests en CI con mocks de modelos de ML, en un flujo colaborativo en GitHub.',
      ],
      en: [
        'Image protection platform against deepfakes, applying adversarial perturbations to generative AI models.',
        'End-to-end development of the web product: the public site (tuytu.tech) on a single Cloudflare Worker with Supabase, and the React/TypeScript dashboard with multi-file upload and batch processing against a Python/FastAPI API.',
        'Joined the Core team to develop the preventive protection algorithm.',
        'Code review on pull requests and maintenance of CI tests with mocked ML models, in a collaborative GitHub workflow.',
      ],
    },
  },
  {
    id: 'novelda',
    role: {
      es: 'Desarrollador Web en prácticas',
      en: 'Web Developer Intern',
    },
    company: { es: 'Ayuntamiento de Novelda', en: 'Novelda City Council' },
    period: { es: 'Mayo – Julio 2025', en: 'May – July 2025' },
    bullets: {
      es: [
        'Desarrollo y mantenimiento de webs de servicios municipales para distintas áreas (juventud, cultura...).',
        'Maquetación y estructuración de contenidos con foco en la experiencia de usuario.',
      ],
      en: [
        'Development and maintenance of municipal service websites for several departments (youth, culture...).',
        'Page layout and content structuring with a focus on user experience.',
      ],
    },
  },
];
