// src/data/projects.js
// Translatable fields are `{ es, en }`; shared ones (technologies, urls, images, categories) are plain values.
// `status` is a key: 'completed' | 'in-progress' | 'coming-soon' (labels live in src/i18n/ui.jsx).
export const projects = [
  {
    id: 1,
    title: 'TuyTu Tech',
    description: {
      es: 'Desarrollo íntegro de la web pública de TuyTu: arquitectura React 19 + TypeScript sobre un único Worker de Cloudflare que sirve assets y API, datos en Supabase, validación con Zod, protección antibot con Turnstile y CSP estricta fijada por tests. Colaboración en un producto real: actualmente en el equipo de Core, con revisión de código en PR y tests en CI con mocks de modelos de ML.',
      en: "Full development of TuyTu's public website: a React 19 + TypeScript architecture on a single Cloudflare Worker that serves both assets and API, data in Supabase, validation with Zod, bot protection with Turnstile and a strict CSP locked in by tests. Collaboration on a real product: currently on the Core team, with code review on pull requests and CI tests with mocked ML models.",
    },
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Cloudflare Workers', 'Supabase', 'React Router', 'Zod', 'Vitest'],
    image: `${import.meta.env.BASE_URL}Tuytu.webp`,
    githubUrl: null,
    demoUrl: 'https://tuytu.tech',
    status: 'in-progress',
    categories: ['web'],
  },
  {
    id: 2,
    title: 'DataInsight AI',
    description: {
      es: 'Plataforma web que convierte un CSV en un informe sin escribir código: perfil de cada columna, gráficos que se adaptan a los datos, hallazgos redactados por Claude con sus cifras comprobadas contra los datos, y previsión Holt-Winters con intervalo del 95 % y error medido en backtest (WAPE), o regresión con Random Forest cuando no hay fechas. API en FastAPI con worker Celery, web en Next.js, tests y CI en GitHub Actions.',
      en: 'Web platform that turns a CSV into a report without writing code: a profile of every column, charts that adapt to the data, findings written by Claude with their figures checked against the data, and a Holt-Winters forecast with a 95% interval and error measured by backtesting (WAPE), or Random Forest regression when there are no dates. FastAPI API with a Celery worker, Next.js frontend, tests and CI on GitHub Actions.',
    },
    technologies: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'Supabase', 'Celery', 'Claude API', 'statsmodels', 'scikit-learn', 'pandas'],
    image: `${import.meta.env.BASE_URL}DataInsightAI-v2.webp`,
    githubUrl: 'https://github.com/BorjaEscolanoMartin/DataInsightAI',
    demoUrl: 'https://data-insight-ai-qbh4.vercel.app/login',
    status: 'completed',
    categories: ['web', 'datos-ia'],
    note: {
      es: 'Demo pública con datos sintéticos, sin registro',
      en: 'Public demo with synthetic data, no sign-up required',
    },
  },
  {
    id: 3,
    title: {
      es: 'Pets - Plataforma de alojamiento de mascotas',
      en: 'Pets - Pet Boarding Platform',
    },
    description: {
      es: 'Proyecto final de grado, full stack con autenticación, roles de usuario, perfiles, reservas, chat en tiempo real, notificaciones, filtros avanzados, mapas y subida de imágenes.',
      en: 'Final degree project: a full-stack app with authentication, user roles, profiles, bookings, real-time chat, notifications, advanced filters, maps and image uploads.',
    },
    technologies: ['Laravel', 'React', 'Tailwind CSS', 'Docker', 'Nginx', 'AWS'],
    image: `${import.meta.env.BASE_URL}Pets.webp`,
    githubUrl: 'https://github.com/BorjaEscolanoMartin/PlataformaPets',
    demoUrl: null,
    status: 'completed',
    categories: ['web'],
  },
  {
    id: 4,
    title: {
      es: 'Cuadros de mando de ventas en Power BI y Tableau',
      en: 'Sales Dashboards in Power BI and Tableau',
    },
    description: {
      es: 'Informe de ventas y rentabilidad en Power BI Desktop con medidas DAX (Utilidad, Margen), limpieza de datos con Power Query y visuales por país, continente y periodo (mapa, gráficos y tarjetas KPI). Dashboard y story equivalentes construidos en Tableau y publicados en Tableau Public.',
      en: 'Sales and profitability report in Power BI Desktop with DAX measures (Profit, Margin), data cleaning with Power Query and visuals by country, continent and period (map, charts and KPI cards). Equivalent dashboard and story built in Tableau and published on Tableau Public.',
    },
    technologies: ['Power BI', 'DAX', 'Power Query', 'Tableau', 'Excel'],
    image: `${import.meta.env.BASE_URL}PowerBI.webp`,
    githubUrl: 'https://github.com/BorjaEscolanoMartin/powerbi-ventas-globales',
    demoUrl: 'https://public.tableau.com/app/profile/borja.escolano/viz/Supertienda-BEM/Dashboard1',
    reportUrl: 'https://github.com/BorjaEscolanoMartin/powerbi-ventas-globales/blob/main/powerbi/Appol-BEM.pdf',
    note: {
      es: 'Demo: dashboard interactivo en Tableau Public · Informe (PDF): páginas del informe de Power BI',
      en: 'Demo: interactive dashboard on Tableau Public · Report (PDF): pages of the Power BI report',
    },
    status: 'completed',
    categories: ['datos-ia'],
  },
  {
    id: 5,
    title: {
      es: 'Chatbot RAG con LangChain',
      en: 'RAG Chatbot with LangChain',
    },
    description: {
      es: 'Chatbot conversacional con memoria que responde preguntas sobre documentos PDF mediante RAG (Retrieval Augmented Generation), con recuperación en Chroma y búsqueda MMR. Permite alternar entre la API de Gemini y un modelo Ollama local, con interfaz Streamlit desplegada en Hugging Face Spaces vía Docker.',
      en: 'Conversational chatbot with memory that answers questions about PDF documents using RAG (Retrieval Augmented Generation), with retrieval in Chroma and MMR search. It can switch between the Gemini API and a local Ollama model, with a Streamlit interface deployed on Hugging Face Spaces via Docker.',
    },
    technologies: ['Python', 'LangChain', 'Streamlit', 'Chroma', 'Gemini API', 'Ollama', 'Docker'],
    image: `${import.meta.env.BASE_URL}RagChatbot.webp`,
    githubUrl: 'https://github.com/BorjaEscolanoMartin/rag-chatbot-langchain',
    demoUrl: 'https://huggingface.co/spaces/BemDev/chatbot-rag-ut7-1',
    note: {
      es: 'Demo en Hugging Face: puede tardar ~30 s en arrancar',
      en: 'Hugging Face demo: it may take ~30 s to start',
    },
    status: 'completed',
    categories: ['datos-ia'],
  },
  {
    id: 6,
    title: {
      es: 'Detección de objetos con YOLO',
      en: 'Object Detection with YOLO',
    },
    description: {
      es: 'Serie de ejercicios de visión por computador con YOLO (Ultralytics): inferencia y detección en tiempo real sobre vídeo con OpenCV, una interfaz Streamlit para explorar distintas tareas del modelo, y el fine-tuning de un detector de fuego propio integrado en la misma interfaz.',
      en: "A series of computer vision exercises with YOLO (Ultralytics): real-time inference and detection on video with OpenCV, a Streamlit interface to explore the model's different tasks, and fine-tuning of a custom fire detector integrated into the same interface.",
    },
    technologies: ['Python', 'YOLO (Ultralytics)', 'OpenCV', 'Streamlit', 'PyTorch'],
    image: `${import.meta.env.BASE_URL}Yolo.webp`,
    githubUrl: 'https://github.com/BorjaEscolanoMartin/computer-vision-yolo',
    demoUrl: null,
    status: 'completed',
    categories: ['datos-ia'],
  },
  {
    id: 7,
    title: {
      es: 'Email Automation Matrícula',
      en: 'Enrolment Email Automation',
    },
    description: {
      es: 'Pipeline automatizado de procesamiento de matrículas: lectura de correo vía IMAP, extracción de las imágenes del PDF con PyMuPDF y decodificación del código QR con pyzbar, volcado de los datos a Excel y respuesta automática por SMTP. Infraestructura de correo completa (DNS y dos servidores de correo) montada en local con Docker.',
      en: 'Automated enrolment processing pipeline: reads email via IMAP, extracts the images from the PDF with PyMuPDF and decodes the QR code with pyzbar, writes the data to Excel and sends an automatic reply via SMTP. Complete email infrastructure (DNS and two mail servers) set up locally with Docker.',
    },
    technologies: ['Robot Framework', 'RPA Framework', 'Python', 'Selenium', 'Flask', 'PyMuPDF', 'pyzbar', 'Docker', 'SMTP/IMAP'],
    image: `${import.meta.env.BASE_URL}EmailAutomationMatricula.webp`,
    githubUrl: 'https://github.com/BorjaEscolanoMartin/EmailAutomationMatricula',
    demoUrl: null,
    status: 'completed',
    categories: ['datos-ia'],
  },
  {
    id: 8,
    title: {
      es: 'Plataforma Domótica con LLM',
      en: 'LLM-Powered Smart Home Platform',
    },
    description: {
      es: 'Integración de un LLM local (Ollama) con OpenHAB para el control domótico por lenguaje natural. Aplicado a un centro educativo ficticio, implementa function calling para ejecutar acciones sobre dispositivos y escucha reactiva de eventos vía SSE.',
      en: 'Integration of a local LLM (Ollama) with OpenHAB for natural-language home automation control. Applied to a fictional school, it implements function calling to act on devices and listens reactively to events via SSE.',
    },
    technologies: ['Python', 'Ollama', 'OpenHAB', 'Docker', 'SSE', 'Function Calling'],
    image: `${import.meta.env.BASE_URL}PlataformaDomotica.webp`,
    githubUrl: 'https://github.com/BorjaEscolanoMartin/PlataformaDomotica',
    demoUrl: null,
    status: 'completed',
    categories: ['datos-ia'],
  },
  {
    id: 9,
    title: 'Iris ML Prediction',
    description: {
      es: 'Clasificador de la especie Iris con red neuronal Keras. Doble frontend con Gradio y Streamlit sobre un núcleo de predicción compartido. Modelo completamente reproducible vía train.py.',
      en: 'Iris species classifier with a Keras neural network. Two frontends, Gradio and Streamlit, over a shared prediction core. Fully reproducible model via train.py.',
    },
    technologies: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'Gradio', 'Streamlit'],
    image: `${import.meta.env.BASE_URL}IrisMlPrediction.webp`,
    githubUrl: 'https://github.com/BorjaEscolanoMartin/iris-ml-prediction',
    demoUrl: 'https://huggingface.co/spaces/BemDev/Proyecto_Iris-BEM',
    status: 'completed',
    categories: ['datos-ia'],
    note: {
      es: 'Demo en Hugging Face: puede tardar ~30 s en arrancar',
      en: 'Hugging Face demo: it may take ~30 s to start',
    },
  },
]
