import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  stack: string[];
  features: string[];
  links: Record<string, string>;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Portafolio de Proyectos Básicos",
      image: "/codePen.png",
      category: "Frontend",
      description: "Colección de proyectos básicos desarrollados durante el bootcamp en FreeCodeCamp, demostrando dominio de tecnologías base para desarrollo web como HTML, CSS, JS y React. Ademas se obtuvo el certificado de Frontend Development Libraries V8 y el certificado de Responsive Web Design V8.",
      stack: ["HTML", "CSS", "React", "JSX", "CodePen", "Bootstrap", "Redux"],
      features: [
        "Múltiples proyectos interactivos",
        "Responsividad completa con breakpoints personalizados",
        "Componentes React reutilizables",
        "Elementos semanticos y accesibles",
        "Animaciones CSS y transiciones suaves"
      ],
      links: {
        code: "https://codepen.io/alejandrooMartinez/pen/XWwjMOe",
        demo: "https://codepen.io/alejandroomartinez",
        docs: "https://www.freecodecamp.org/alejandroomartinez"
      }
    },
    {
      id: 2,
      title: "Sistema Backend - Task Manager",
      category: "Backend",
      image: "/backend.png",
      description: "Desarrollado bajo una arquitectura de microservicios robusta para la gestión de tareas y proyectos. Implementa seguridad mediante JWT y cookies HttpOnly, configuracion centralizada, un solo punto de entrada por gateway, persistencia de datos en MongoDB Atlas y el uso de SonarQube para la calidad del codigo. Debes autenticarte en el sitio e ingresar al apartado de Api Docs para visualizar la documentacion de la api.",
      stack: ["Java 21", "Spring cloud", "MongoDB Atlas", "Orecle cloud", "Docker Compose", "SonarQube", "Junit", "Mokito", "Jacoco"],
      features: [
        "3 microservicios independientes",
        "Hosting en Oracle Cloud",
        "Comunicacion entre microservicios solo en red interna docker",
        "Escalable y mantenible",
        "Documentacion de servicios con Swagger UI"
      ],
      links: {
        code: "https://github.com/alejandro77martinez/Microservicios-con-Spring",
        demo: "https://taskmanager-bf193.web.app/",
        docs: "https://github.com/alejandro77martinez/Microservicios-con-Spring/blob/main/docs/especificacion-requisitos.md",
        quality: "https://sonarcloud.io/organizations/alejandro77martinez/projects"
      }
    },
    {
      id: 3,
      title: "Sistema Frontend - Task Manager",
      category: "Frontend",
      image: "/frontend.png",
      description: "Interfaz de usuario moderna que consume el sistema backend - Task Manager. Para su uso es necesrio registrarse y autenticarse. Cuenta con tres seciones principales al momento, una para la gestión de proyectos, otra para la gestion de tareas mediante un tablero Kanban y la seccion team, encartgada de la comunicacion del equipo.",
      stack: ["Angular 21", "TypeScript", "Fire base", "Tailwind CSS 4", "Flowbite", "Angular Signals", "Vitest"],
      features: [
        "Reactividad con Angular Signals",
        "Login y registro de usuarios",
        "Tablero Kanban interactivo",
        "Chat de equipo en tiempo real",
        "Hosting en Firebase"
      ],
      links: {
        code: "https://github.com/alejandro77martinez/TaskManager",
        demo: "https://taskmanager-bf193.web.app/",
        docs: "https://github.com/alejandro77martinez/TaskManager/blob/main/docs/dise%C3%B1o-software.md",
        quality: "https://taskmanagerquality.duckdns.org"
      }
    },
    {
      id: 4,
      title: "Corp Caps",
      category: "Full Stack",
      image: "/dashboard.png",
      description: "Dashboard para la gestión de ventas y clientes. Desarrollado en el curso oficial de Next.js ofrecido por Vercel, extendida con funcionalidades adicionales para profundizar en el ecosistema del framework. Implementé autenticación de usuarios con better-auth (fork de NextAuth). Diseñé el modelo de datos y persistencia con PostgreSQL (Neon) y Prisma ORM. Añadí pruebas unitarias y de integración con Vitest y Testing Library. Integré almacenamiento de archivos mediante Vercel Blob y envío de correos con Nodemailer.",
      stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Vitest", "Testing Library", "Vercel Blob", "Nodemailer"],
      features: [
        "Registro y login de usuarios con Better-Auth",
        "Gestion de clientes",
        "Gestion de facturas",
        "Hooks personalizados y genericos para el manejo de formularios."
      ],
      links: {
        code: "https://github.com/alejandro77martinez/nextjs-dashboard",
        demo: "https://nextjs-dashboard-lemon-tau-78.vercel.app"
      }
    },
    {
      id: 5,
      title: "Portafolio Personal",
      category: "Full Stack",
      image: "/portfolio.png",
      description: "Este portafolio personal es más que una colección de proyectos, este sitio es una carta de presentación como desarrollador Full Stack. Está pensado para reclutadores, clientes y colegas que buscan evidencia real de trabajo, sin rodeos y qué demuestra mi forma de resolver problemas.",
      stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel"],
      features: [
        "Página de presentación personalizada",
        "Sección About detallada",
        "Galería de proyectos",
        "Diseño responsivo y moderno",
        "Optimizado para SEO"
      ],
      links: {
        code: "https://github.com/alejandro77martinez/portfolio",
        demo: "https://portfolio-ashy-five-25.vercel.app",
        docs: "https://github.com/alejandro77martinez/portfolio/blob/main/docs/design-thinking.md"
      }
    }
  ];

  return (
    <div id="projects" className="w-full pb-20">
      <div className="flex justify-center items-center flex-col mx-auto px-2">
        {/* Header */}
        <section className="mb-10 lg:mt-2 p-2">
          <div className="space-y-4 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold tracking-widest text-[#90AFC5] uppercase border border-[#336B87] rounded-full bg-[#336B87]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#763626] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#763626]"></span>
              </span>
              Proyectos
            </div>
            <h2 className="text-6xl lg:text-7xl font-black text-white text-center tracking-tighter">
              Proyectos <span className="text-gradient-rust">Relevantes</span>
            </h2>
            <p className="text-xl text-center text-slate-400 max-w-5xl leading-relaxed">
              Esta es una selección de proyectos que demuestran mi experiencia en desarrollo full stack,
              desde el backend con una arquitectura en microservicios,
              hasta el frontend con un diseño de interfaces modernas.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="grid grid-cols-1 max-w-6xl gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "from-[#763626] to-[#90AFC5]";
      case "Backend":
        return "from-[#336B87] to-[#90AFC5]";
      case "Full Stack":
        return "from-[#763626] to-[#336B87]";
      default:
        return "from-[#336B87] to-[#763626]";
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case "Frontend":
        return "bg-[#763626]/20 border-[#763626]/50 text-white";
      case "Backend":
        return "bg-[#336B87]/20 border-[#336B87]/50 text-white";
      case "Full Stack":
        return "bg-gradient-to-r from-[#763626]/20 to-[#336B87]/20 border-[#90AFC5]/50 text-white";
      default:
        return "bg-[#336B87]/20 border-[#336B87]/50 text-white";
    }
  };

  return (
    <div className="group glass-card rounded-xl border border-[#336B87]/20 hover:border-[#763626]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#763626]/20 overflow-hidden flex flex-col">
      {/* Header con gradiente */}
      <div className={`h-1 bg-gradient-to-r ${getCategoryColor(project.category)}`}></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-3 lg:p-6">
        <div className="flex flex-col h-full">
          {/* Category Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 text-sm font-bold rounded-full border ${getCategoryBg(project.category)}`}>
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3 text-center lg:text-left w-full">
            {project.title}
          </h3>
          {/* Image */}
          <div className="lg:hidden mb-4">
            <ImageProject links={project.links} urlImg={project.image} />
          </div>
          {/* Description */}
          <p className="text-slate-400 mb-4">
            {project.description}
          </p>

          {/* Stack Technologies */}
          <div className="mb-4 space-y-3">
            <p className="text-xs font-semibold text-[#90AFC5] uppercase tracking-widest">
              Herramientas y Tecnologías
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(project.stack).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium text-[#90AFC5] bg-[#336B87]/20 border border-[#336B87]/50 rounded-full hover:border-[#763626] hover:bg-[#763626]/20 hover:text-[#763626] transition-all duration-300"
                >
                  {tech[1]}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <p className="text-xs font-semibold text-[#90AFC5] uppercase tracking-widest mb-3">
              Características
            </p>
            <ul className="text-slate-400 font-light list-disc pl-4">
              {project.features.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          {/* Image y Links */}
          <ImageProject links={project.links} urlImg={project.image} />
        </div>
      </div>
    </div>
  );
}

function ImageProject({ links, urlImg }: { links: Record<string, string>; urlImg: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <div className="flex flex-col rounded-lg border-2 border-[#336B87]/20 h-85 lg:h-80">
        <div className="flex h-3 bg-[#336B87] rounded-t-lg">
          <span className="w-2 h-2 bg-red-500 rounded-full ml-2 mt-0.5"></span>
          <span className="w-2 h-2 bg-[#90AFC5] rounded-full ml-2 mt-0.5"></span>
          <span className="w-2 h-2 bg-green-500 rounded-full ml-2 mt-0.5"></span>
        </div>
        <div className="relative flex-1 min-h-0">
          <Image src={urlImg} alt="Project Image" width={500} height={500} className="rounded-b-lg" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex gap-2 flex-wrap">
        {Object.entries(links).map(([label, url]) => {
          const buttonLabels: Record<string, string> = {
            demo: "Ver Demo",
            quality: "Calidad",
            code: "Código",
            docs: "Documentación"
          };

          return (
            <Link
              key={label}
              href={url}
              target="_blank"
              className="relative btn-ember inline-flex items-center px-3 py-1.5 text-xs rounded-xl font-medium uppercase tracking-widest text-white overflow-hidden border border-transparent bg-gradient-to-br from-[#2A3132] via-[#336B87] to-[#90AFC5] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(51,107,135,0.35),0_2px_8px_rgba(118,54,38,0.25)] active:scale-95 active:shadow-none"
            >
              {buttonLabels[label] || label}
            </Link>
          );
        })}
      </div>
    </div>
  )
}