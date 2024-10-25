import { techStack } from "./unique";

const en = {
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
    experiences: [
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
    ],
  },
  portfolio: {
    title: "Portfolio",
    projects: [
      {
        title: "'Quake' application for visualizing seismic data",
        description:
          "Quake is a brief application created as a technical test; this application has a command to collect seismic information from the earthquake.gov API and displays it on a map.",
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
        title: "SvelteKit, FastAPI, Docker, PostgreSQL, Redis",
        description:
          "Basic template for creating applications using SvelteKit + FastAPI, using Docker, PostgreSQL, and Redis.",
        technologies: ["PostgreSQL", "Docker", "FastAPI", "SvelteKit", "Redis"],
        link: "https://github.com/olaracode/fastapi-sveltekit",
      },
      {
        title: "'Chirp' simple social network",
        description:
          "Basic copy of Twitter, using Laravel, Inertia, and React.js.",
        technologies: ["Laravel", "React", "Typescript"],
        link: "https://github.com/olaracode/laravel-chirp",
      },
      {
        title: "Application for taking markdown notes",
        description:
          "Simple application created using Rust (Tauri) and SvelteKit for taking notes in markdown.",
        technologies: ["Rust", "SvelteKit", "Tauri", "TailwindCSS"],
        link: "https://github.com/olaracode/md-editor",
      },
    ],
    details: "See Details",
    linkContent: "View Project",
  },
  footer: {
    title: "Let's Connect",
    subtitle: "Get in touch",
    description: "I’m always open to new opportunities and collaborations!",
    links: ["#", "#", "#"],
  },
  nav: {
    home: "Home",
    about: "About",
    career: "Career",
    portfolio: "Portfolio",
    contact: "Contact",
  },
  "404": {
    title: "Page Not Found",
    content:
      "Oops! The page you're looking for doesn't exist or has been moved.",
    link: "Back to Home",
  },
} as const;

export default en;
