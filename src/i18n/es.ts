import { techStack } from "./unique";

const workExperiencesES = [
  {
    company: "TripleTen",
    position: "Tutor de Programación",
    period: "Julio 2024 - Presente",
    description: [
      "Brindo asistencia y apoyo a estudiantes en su proceso de aprendizaje de desarrollo web.",
      "Resuelvo bugs, explico conceptos y guío en la implementación de proyectos.",
      "Fomento la autonomía y confianza en los estudiantes.",
    ],
  },
  {
    company: "4Geeks Academy",
    position: "Teacher Assistant / Teacher",
    period: "Marzo 2022 - Julio 2024",
    description: [
      "Asistí a estudiantes en la comprensión de conceptos de desarrollo web.",
      "Como Teacher, impartí clases y supervisé proyectos prácticos de los estudiantes.",
    ],
  },
  {
    company: "TechneStudioIT",
    position: "Frontend Developer",
    period: "Marzo 2023 - Febrero 2024",
    description: [
      "Lideré el desarrollo del frontend de una aplicación innovadora utilizando Next.js, Chakra-UI y Recoil.js.",
      "Desarrollé la página de inicio, páginas corporativas, dashboard de usuario, sistema de recarga de billetera digital y sistema de pago de servicios.",
      "Creé un datatable para mostrar transacciones realizadas.",
    ],
  },
  {
    company: "YOI",
    position: "Frontend Developer",
    period: "Abril 2022 - Abril 2023",
    description: [
      "Desarrollé el ecosistema de aplicaciones web usando Next.js con Chakra-UI.",
      "Colaboré con el equipo de DevOps para CI/CD y con el backend para el consumo de APIs.",
      "Implementé funcionalidades como consumir artículos de un CMS, crear comentarios y dar rating a artículos.",
      "Realicé la autenticación de usuarios, modificación de tema en Chakra-UI, y desarrollé un dashboard dinámico.",
      "Desarrollé un chat en tiempo real con respuestas y reacciones.",
    ],
  },
  {
    company: "TechneStudioIT",
    position: "Frontend Developer",
    period: "Junio 2022 - Octubre 2022",
    description: [
      "Participé en un proyecto de gestión y administración de estudiantes para una academia de vuelo utilizando Django, Django-Templates, jQuery y Bootstrap.",
      "Contribuí en la creación de modelos de la base de datos y el diseño de las vistas de la página.",
      "Brindé apoyo en la creación de rutas de Django.",
    ],
  },
];

const es = {
  header: {
    title: "Octavio Lara",
    description: "Programador Web Fullstack",
    button: "Ver portafolio",
  },
  about: {
    title: "Sobre mi",
    stack: techStack,
    main: {
      title: "Quien soy",
      content:
        "Soy un programador web con una sólida experiencia en el desarrollo frontend y una pasión por la creación de soluciones web eficientes y escalables. A lo largo de mi carrera, he tenido la oportunidad de colaborar en diversos proyectos, especializándome en el uso de tecnologías como Next.js para construir interfaces de usuario modernas y optimizadas.",
    },
    education: {
      title: "Educacion",
      content: [
        "Fullstack Developer @4geeks Academy",
        "Psicologia, Universidad Catolica Andres Bello(Incompleto)",
        "Comunicacion Social, Universidad Santa Maria(Incompleto)",
      ],
    },
  },
  career: workExperiencesES,
  portfolio: {
    title: "Portafolios",
    projects: [
      {
        title: "'Quake' aplicacion de visualizacion de datos sismicos",
        description:
          "Quake es una breve aplicacion creada como prueba tecnica, esta aplicacion posee un comando para recopilar informacion sismica de la API earthquake.gov y la muestra en un mapa",
        technologies: [
          "Ruby On Rails",
          "PostgreSQL",
          "React.js",
          "Framer Motion",
          "Chakra-UI",
          "Docker",
          "Docker Composer",
        ],
        link: "https://github.com/olaracode/quake",
      },
      {
        title: "SvelteKit, FastAPI, Docker, Postgresql, Redis",
        description:
          "Plantilla basica para crear aplicaciones usando SvelteKit + FastAPI, usando Docker, Postgresql y Redis",
        technologies: ["PostgreSQL", "Docker", "FastAPI", "SvelteKit", "Redis"],
        link: "https://github.com/olaracode/fastapi-sveltekit",
      },
      {
        title: "'Chirp' simple red social",
        description:
          "Copia basica de twitter, usando Laravel, Intertia y React.js",
        technologies: ["Laravel", "React", "Typescript"],
        link: "https://github.com/olaracode/laravel-chirp",
      },
      {
        title: "Aplicacion para toma de notas markdown",
        description:
          "Aplicacion sencilla creada usando Rust(Tauri) y SvelteKit para tomar notas en markdown",
        technologies: ["Rust", "SvelteKit", "Tauri", "TailwindCSS"],
        link: "https://github.com/olaracode/md-editor",
      },
    ],
    details: "Ver detalles",
    linkContent: "Ver projecto",
  },
  footer: {
    title: "Conectemos",
    subtitle: "Ponte en contacto conmigo",
    description:
      "Siempre estoy abierto a nuevas oportunidades y colaboraciones!",
    links: ["#", "#", "#"],
  },
  nav: {
    home: "Inicio",
    about: "Sobre mi",
    career: "Carrera",
    portfolio: "Portafolios",
    contact: "Contacto",
  },
} as const;

export default es;
