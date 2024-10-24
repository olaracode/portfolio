const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "PostgreSQL",
  "Docker",
  "Bootstrap.css",
  "Python",
  "Flask",
  "MongoDB",
];

interface WorkExperience {
  company: string;
  position: string;
  period: string;
  description: string[];
}
const workExperiencesES: WorkExperience[] = [
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

const workExperiencesEN: WorkExperience[] = [
  {
    company: "TripleTen",
    position: "Programming Tutor",
    period: "July 2024 - Present",
    description: [
      "Provide assistance and support to students in their web development learning process.",
      "Solve bugs, explain concepts, and guide project implementations.",
      "Foster autonomy and confidence in students.",
    ],
  },
  {
    company: "4Geeks Academy",
    position: "Teacher Assistant / Teacher",
    period: "March 2023 - July 2024",
    description: [
      "Assisted students in understanding web development concepts.",
      "As a Teacher, delivered lectures and supervised students' practical projects.",
    ],
  },
  {
    company: "TechneStudioIT",
    position: "Frontend Developer",
    period: "March 2023 - February 2024",
    description: [
      "Led the frontend development of an innovative application using Next.js, Chakra-UI, and Recoil.js.",
      "Developed the landing page, corporate pages, user dashboard, digital wallet top-up system, and service payment system.",
      "Created a datatable to display transaction history.",
    ],
  },
  {
    company: "YOI",
    position: "Frontend Developer",
    period: "April 2022 - April 2023",
    description: [
      "Developed the web application ecosystem using Next.js with Chakra-UI.",
      "Collaborated with the DevOps team for CI/CD and with the backend team to consume APIs.",
      "Implemented features like consuming articles from a CMS, creating comments, and rating articles.",
      "Handled user authentication, modified the Chakra-UI theme, and developed a dynamic dashboard.",
      "Developed a real-time chat with responses and reactions.",
    ],
  },
  {
    company: "TechneStudioIT",
    position: "Frontend Developer",
    period: "June 2022 - October 2022",
    description: [
      "Participated in a student management system project for a flight academy using Django, Django-Templates, jQuery, and Bootstrap.",
      "Contributed to the creation of database models and page design.",
      "Supported the creation of Django routes.",
    ],
  },
];

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}
const projectsES: Project[] = [
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
    description: "Copia basica de twitter, usando Laravel, Intertia y React.js",
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
];

export type HeaderT = {
  title: string;
  description: string;
  button: string;
};

export type AboutT = {
  title: string;
  stack: string[];
  main: {
    title: string;
    content: string;
  };
  education: {
    title: string;
    content: string[];
  };
};

export type CareerT = {
  title: string;
  experiences: WorkExperience[];
};

export type PortfolioT = {
  title: string;
  projects: Project[];
  details: string;
  linkContent: string;
};

export type FooterT = {
  title: string;
  subtitle: string;
  description: string;
  links: string[];
};

export interface PageContent {
  header: HeaderT;
  about: AboutT;
  career: CareerT;
  portfolio: PortfolioT;
  footer: FooterT;
}

type ContentT = {
  en: PageContent;
  es: PageContent;
};

const content: ContentT = {
  es: {
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
    career: {
      title: "Experiencia Laboral",
      experiences: workExperiencesES,
    },
    portfolio: {
      title: "Portafolios",
      projects: projectsES,
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
  },
  en: {
    header: {
      title: "Octavio Lara",
      description: "Fullstack Web Developer",
      button: "View Portfolio",
    },
    about: {
      title: "About Me",
      stack: techStack,
      main: {
        title: "Who I Am",
        content:
          "I am a web developer with solid experience in frontend development and a passion for creating efficient and scalable web solutions. Throughout my career, I have had the opportunity to collaborate on various projects, specializing in the use of technologies like Next.js to build modern and optimized user interfaces.",
      },
      education: {
        title: "Education",
        content: [
          "Fullstack Developer @4geeks Academy",
          "Psychology, Universidad Catolica Andres Bello (Incomplete)",
          "Social Communication, Universidad Santa Maria (Incomplete)",
        ],
      },
    },
    career: {
      title: "Work Experience",
      experiences: workExperiencesEN,
    },
    portfolio: {
      title: "Portfolio",
      projects: [],
      details: "See Details",
      linkContent: "View Project",
    },
    footer: {
      title: "Let's Connect",
      subtitle: "Get in touch",
      description: "I’m always open to new opportunities and collaborations!",
      links: ["#", "#", "#"],
    },
  },
};
export default content;
