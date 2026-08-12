import Link from "next/link";

export default function AboutMe() {
  return (
    <div id="about" className="w-full pb-20">
      <div className="flex justify-center items-center flex-col mx-auto">
        {/* Intro Section */}
        <section className="mb-10 lg:mt-2 p-2">
          <div className="space-y-4 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold tracking-widest text-[#90AFC5] uppercase border border-[#336B87] rounded-full bg-[#336B87]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#763626] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#763626]"></span>
              </span>
              Sobre mí
            </div>
            <h2 className="text-6xl lg:text-7xl font-black text-white text-center tracking-tighter leading-tight">
              Desarrollador de Software
              <br />
              <span className="text-gradient-rust">Full Stack</span>
            </h2>
            <p className="text-xl text-center text-slate-400 leading-relaxed">
              Soy un desarrollador web apasionado por crear soluciones escalables y de alto rendimiento.
              Con experiencia en tecnologías modernas y sistemas legacy, combino mi formación académica en Ingeniería
              de Software con experiencia práctica en entornos desafiantes.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-10 p-2">
          <h3 className="text-4xl font-black text-white text-center mb-8 tracking-tight">
            <span className="text-gradient-rust">Experiencia laboral</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-5xl">
            <div className="group relative glass-card p-4 lg:p-6 rounded-xl border border-[#336B87]/20 hover:border-[#763626]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#763626]/20">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#763626] to-transparent rounded-l-xl"></div>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-4 mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">Desarrollador de Sistemas</h4>
                  <p className="text-[#90AFC5] text-xl font-semibold">Secretaría de Educación, Ciencia, Tecnología e Innovación (SECTEI)</p>
                </div>
                <span className="inline-flex px-3 py-1 font-semibold text-[#90AFC5] bg-[#336B87]/20 rounded-full border border-[#336B87]/50 w-fit">
                  7 meses
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4 text-lg">
                Mantenimiento y escalado de funcionalidades de sistema legacy construido con PHP 5 y base de datos PostgreSQL 9,
                incrementando en un 30% las funciones del sistema. Desarrollo de módulos en Odoo 14, los cuales ayudaron a la gestión de los practicantes en SECTEI,
                a la administración de cursos ofrecidos a empleados y a la gestión de tickets del área de TI.
                Implementación de metodología ágil Scrum para gestión de actividades, lo que mejoró la entrega de trabajo en un 15%.
                Desarrollo de documentación técnica de sistemas para facilitar el mantenimiento y la transferencia de conocimiento.
              </p>
              <div className="flex flex-wrap gap-2">
                <SkillTag text="PHP" />
                <SkillTag text="Python" />
                <SkillTag text="Odoo" />
                <SkillTag text="Sistema Legacy" />
                <SkillTag text="Documentación técnica" />
                <SkillTag text="Git" />
                <SkillTag text="Linux" />
                <SkillTag text="PostgreSQL" />
                <SkillTag text="Metodologías Ágiles" />
                <SkillTag text="Mantenimiento de software" />
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-10 p-2">
          <h3 className="text-4xl font-black text-white text-center mb-8 tracking-tight">
            <span className="text-gradient-rust">Formación académica</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
            <div className="group relative glass-card p-4 lg:p-6 rounded-xl border border-[#336B87]/20 hover:border-[#336B87]/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#336B87] to-transparent rounded-l-xl"></div>
              <h4 className="text-2xl font-bold text-white mb-2">Ingeniería de Software</h4>
              <p className="text-[#90AFC5] font-semibold text-xl">Universidad Autonoma de la Ciudadd de Mexico</p>
              <p className="text-slate-400 leading-relaxed mb-2 text-lg">Licenciatura </p>
              <SkillTag text="2015-2025" />
            </div>
            <div className="group relative glass-card p-4 lg:p-6 rounded-xl border border-[#336B87]/20 hover:border-[#336B87]/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#336B87] to-transparent rounded-l-xl"></div>
              <Link href="/NDG_Linux_Essentials.pdf" target="_blank" rel="noopener noreferrer">
                <h4 className="text-2xl font-bold text-white mb-2">NDG Linux Essentials</h4>
                <p className="text-[#90AFC5] font-semibold text-xl">Cisco Networking Academy</p>
              </Link>
              <p className="text-slate-400 leading-relaxed mb-2 text-lg">Curso </p>
              <SkillTag text="2024" />
            </div>
            <div className="group relative glass-card p-4 lg:p-6 rounded-xl border border-[#336B87]/20 hover:border-[#336B87]/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#336B87] to-transparent rounded-l-xl"></div>
              <Link href="https://www.freecodecamp.org/alejandroomartinez" target="_blank" rel="noopener noreferrer">
                <h4 className="text-2xl font-bold text-white mb-2">Desarrollo web con React</h4>
                <p className="text-[#90AFC5] font-semibold text-xl">FreeCodeCamp </p>
              </Link>
              <p className="text-slate-400 leading-relaxed mb-2 text-lg">Curso </p>
              <SkillTag text="2024" />
            </div>
            <div className="group relative glass-card p-4 lg:p-6 rounded-xl border border-[#336B87]/20 hover:border-[#336B87]/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#336B87] to-transparent rounded-l-xl"></div>
              <Link href="https://symfonycasts.com/certificates/bc97bd1ec141" target="_blank" rel="noopener noreferrer">
                <h4 className="text-2xl font-bold text-white mb-2">Harmonious Development with Symfony 6</h4>
                <p className="text-[#90AFC5] font-semibold text-xl">Symfony Casts </p>
              </Link>
              <p className="text-slate-400 leading-relaxed mb-2 text-lg">Curso </p>
              <SkillTag text="2025" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="p-2">
          <h3 className="text-4xl font-black text-white text-center mb-8 tracking-tight">
            <span className="text-gradient-rust">Habilidades Técnicas</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {/* Frontend */}
            <SkillCard
              title="Frontend"
              skills={["React", "Next.js", "Angular", "TypeScript", "Tailwind", "Flowbite", "Bootstrap", "JQuery", "CSS"]}
            />

            {/* Backend */}
            <SkillCard
              title="Backend"
              skills={["Java", "Spring Boot", "Maven", "Spring Cloud", "Spring Security", "Hibernate", "PHP", "Python"]}
            />

            {/* Bases de Datos */}
            <SkillCard
              title="Bases de Datos"
              skills={["PostgreSQL", "MongoDB", "MySQL", "Oracle", "MariaDB", "HeidiSQL", "DBeaver", "pgAdmin", "Workbech",]}
            />

            {/* DevOps & Contenedorización */}
            <SkillCard
              title="DevOps"
              skills={["Docker", "Docker Compose", "Git", "GitHub", "Jenkins", "Linux", "CI/CD", "Pipelines"]}
            />

            {/* Cloud */}
            <SkillCard
              title="Cloud"
              skills={["Google Firebase", "Vercel", "Oracle Cloud", "Railway", "VPS", "Ubuntu Server", "Nginx", "Apache"]}
            />

            {/* Gestión de Proyectos */}
            <SkillCard
              title="Gestión de proyectos"
              skills={["Scrum", "Trabajo en equipo", "Jira", "Design Thinking", "Kanban", "Diagramas de Gantt"]}
            />
            <SkillCard
              title="UML y Wireframes"
              skills={["Arquitectura de Software", "StarUML", "LucidChart", "Figma", "Marvel", "Balsamiq"]}
            />
            <SkillCard
              title="Test y Calidad"
              skills={["Mokito", "JUnit", "Jacoco", "SonarQube", "Vitest", "Jest", "Integration Test", "End-to-End Test"]}
            />
            {/* IA */}
            <SkillCard
              title="Herramientas de IA"
              skills={["Copilot", "ChatGPT", "Claude", "Codex", "Stitch", "Gemini", "Cursor", "Antigravity"]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="glass-card p-4 lg:p-6 rounded-xl border border-[#336B87]/20 hover:border-[#763626]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#763626]/20">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#336B87] to-transparent rounded-l-xl"></div>
      <h4 className="text-2xl font-bold text-white mb-4">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill} text={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillTag({ text }: { text: string }) {
  return (
    <span className="px-3 py-1 font-semibold text-[#90AFC5] bg-[#336B87]/20 rounded-full border border-[#336B87]/50 hover:border-[#763626] hover:bg-[#763626]/20 transition-all duration-300">
      {text}
    </span>
  );
}