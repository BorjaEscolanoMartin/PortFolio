# Portfolio — Borja Escolano Martín

Sitio web personal desarrollado con React 19 y Vite, desplegado en GitHub Pages.

**Demo en vivo:** [borjaescolanomartin.github.io/PortFolio](https://borjaescolanomartin.github.io/PortFolio/)

---

## Stack

| Capa | Tecnologías |
|------|-------------|
| Frontend | React 19, JavaScript, Vite 6 |
| Estilos | Tailwind CSS 4 |
| Iconos | React Icons |
| Testing | Vitest, Testing Library |
| CI | GitHub Actions |
| Despliegue | GitHub Pages (gh-pages) |

---

## Características

- Diseño responsive con tema oscuro y acento lime-green
- Secciones: Hero, Sobre mí, Competencias, Experiencia, Proyectos, Contacto
- Filtro de proyectos por categoría (Web / Datos e IA)
- Sección Competencias con 5 grupos (Frontend · Backend y bases de datos · Datos y BI · IA y Machine Learning · DevOps y herramientas)
- Tech stack visual en el Hero derivado de los mismos datos de competencias
- Descarga directa del CV en PDF
- Navegación por anclas sin router
- Metadatos SEO y Open Graph (imagen de compartición propia, JSON-LD `Person`)

---

## Instalación y uso local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Ejecutar los tests
npm test

# Lint
npm run lint

# Build de producción
npm run build

# Preview del build
npm run preview

# Desplegar en GitHub Pages
npm run deploy
```

Cada push y pull request ejecuta lint, tests y build en GitHub Actions
(`.github/workflows/ci.yml`).

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx        # Presentación + tech stack (derivado de data/skills.js)
│   ├── About.jsx       # Sobre mí, formación e idiomas
│   ├── Skills.jsx       # Competencias (grupos de tecnologías)
│   ├── Experience.jsx  # Experiencia laboral
│   ├── Projects.jsx    # Tarjetas de proyectos con filtro por categoría
│   ├── Contact.jsx     # Formulario de contacto
│   └── Footer.jsx
├── data/
│   ├── projects.js     # Datos de los proyectos
│   ├── skills.js       # Grupos de competencias
│   └── education.js    # Formación e idiomas
├── pages/
│   └── Home.jsx         # Composición de secciones
└── App.jsx
public/                  # Assets estáticos (WebP, CV, fuentes, og-image)
```

---

## Contacto

- **Email:** escolanomartinborja@gmail.com
- **LinkedIn:** [borja-escolano-martin](https://www.linkedin.com/in/borja-escolano-martin/)
- **GitHub:** [BorjaEscolanoMartin](https://github.com/BorjaEscolanoMartin/)
