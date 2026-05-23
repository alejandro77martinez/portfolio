import Image from "next/image";

export default function Presentation() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 pb-10 ">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-widest text-[#90AFC5] uppercase border border-[#336B87] rounded-full bg-[#336B87]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#763626] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#763626]"></span>
              </span>
              Status: Disponible para nuevos proyectos
            </div>
            <div className="lg:hidden">
              <ProfilePicture/>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none">
              ALEJANDRO <br />
              <span className="text-gradient-rust">MARTÍNEZ</span>
            </h1>
            <h2 className="text-xl lg:text-2xl font-light tracking-[0.2em] text-[#336B87] border-l-4 border-[#763626] pl-4">
              Desarrollador Full Stack
            </h2>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-light">
              Como <span className="text-white font-normal">Desarrollador Full Stack</span>,
              diseño y construyo ecosistemas web de alto rendimiento. Mi enfoque combina
              arquitectura robusta con experiencias de usuario intuitivas, resolviendo
              problemas complejos mediante tecnología escalable y mantenible.
            </p>
          </div>
          <div className="hidden lg:flex">
            <ProfilePicture/>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfilePicture() {
  return (
    <div className="flex-1 flex justify-center lg:justify-end">
      <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
        <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#763626] rounded-2xl z-0"></div>
        <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#336B87] rounded-2xl z-0"></div>
        <div className="relative w-full h-full glass-card p-4 rounded-2xl shadow-2xl overflow-hidden">
          <Image
            src="/im.png"
            width={400}
            height={400}
            alt="Alejandro Martínez"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}