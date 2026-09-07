// src/data/skills.js
import { TbApi } from 'react-icons/tb';
import { FaDatabase, FaCrosshairs } from 'react-icons/fa';
import { BiLineChart, BiBarChart, BiSliderAlt } from 'react-icons/bi';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaAws, FaFileExcel } from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiPhp,
  SiLaravel,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiPandas,
  SiNumpy,
  SiTableau,
  SiKnime,
  SiJupyter,
  SiApachespark,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiLangchain,
  SiHuggingface,
  SiOllama,
  SiStreamlit,
  SiGithubactions,
  SiDocker,
  SiVercel,
  SiCloudflareworkers,
  SiRailway,
  SiGooglecolab,
} from 'react-icons/si'

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    summary:
      'Interfaces modernas, responsive y accesibles con React, TypeScript y Tailwind CSS, usando Vite como herramienta de build.',
    items: [
      { name: 'React', icon: FaReact },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Vite', icon: SiVite },
    ],
  },
  {
    id: 'backend-bd',
    title: 'Backend y bases de datos',
    summary:
      'APIs REST y lógica de negocio con Node.js, PHP y Laravel, con persistencia en MySQL, PostgreSQL y Supabase.',
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'PHP', icon: SiPhp },
      { name: 'Laravel', icon: SiLaravel },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'API REST', icon: TbApi },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'SQL', icon: FaDatabase },
      { name: 'Supabase', icon: SiSupabase },
    ],
  },
  {
    id: 'datos-bi',
    title: 'Datos y BI',
    summary:
      'Análisis y visualización de datos con Python, pandas, NumPy y Matplotlib, y herramientas de Business Intelligence como Power BI, Excel, Tableau, KNIME y Apache Spark.',
    items: [
      { name: 'Python', icon: FaPython },
      { name: 'pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Matplotlib', icon: BiLineChart },
      { name: 'Power BI', icon: BiBarChart },
      { name: 'Excel', icon: FaFileExcel },
      { name: 'Tableau', icon: SiTableau },
      { name: 'KNIME', icon: SiKnime },
      { name: 'Jupyter', icon: SiJupyter },
      { name: 'Apache Spark', icon: SiApachespark },
    ],
  },
  {
    id: 'ia-ml',
    title: 'IA y Machine Learning',
    summary:
      'Modelos de machine learning y deep learning con scikit-learn, TensorFlow y Keras, visión por computador con YOLO y OpenCV, y aplicaciones basadas en LLMs con LangChain, Hugging Face y Ollama.',
    items: [
      { name: 'scikit-learn', icon: SiScikitlearn },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Keras', icon: SiKeras },
      { name: 'YOLO', icon: FaCrosshairs },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'LangChain', icon: SiLangchain },
      { name: 'Hugging Face', icon: SiHuggingface },
      { name: 'Ollama', icon: SiOllama },
      { name: 'Streamlit', icon: SiStreamlit },
      { name: 'Gradio', icon: BiSliderAlt },
    ],
  },
  {
    id: 'devops-herramientas',
    title: 'DevOps y herramientas',
    summary:
      'Control de versiones, integración continua y despliegue con Git, GitHub Actions, Docker, AWS, Vercel, Cloudflare Workers y Railway.',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS', icon: FaAws },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Cloudflare Workers', icon: SiCloudflareworkers },
      { name: 'Railway', icon: SiRailway },
      { name: 'Google Colab', icon: SiGooglecolab },
    ],
  },
]
