"use client"

import { useActionState } from "react";
import { sendEmail } from "@/app/actions/send-email";

export default function ContactMe() {
  const [state, action, pending] = useActionState(sendEmail, null);

  const socialLinks = [
    {
      name: "Twitter/X",
      icon: "M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,7v10	c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V7c0-2.209,1.791-4,4-4h10C19.209,3,21,4.791,21,7z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z",
      url: "#"
    },
    {
      name: "LinkedIn",
      icon: "M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z",
      url: "#"
    },
    {
      name: "Discord",
      icon: "M21,23l-4.378-3.406L17,21H5c-1.105,0-2-0.895-2-2V5c0-1.105,0.895-2,2-2h14c1.105,0,2,0.895,2,2V23z M16.29,8.57	c0,0-1.23-0.95-2.68-1.06l-0.3,0.61C12.86,8.04,12.4,7.98,12,7.98c-0.41,0-0.88,0.06-1.31,0.14l-0.3-0.61	C8.87,7.66,7.71,8.57,7.71,8.57s-1.37,1.98-1.6,5.84C7.49,15.99,9.59,16,9.59,16l0.43-0.58c-0.44-0.15-0.82-0.35-1.21-0.65	l0.09-0.24c0.72,0.33,1.65,0.53,3.1,0.53s2.38-0.2,3.1-0.53l0.09,0.24c-0.39,0.3-0.77,0.5-1.21,0.65L14.41,16	c0,0,2.1-0.01,3.48-1.59C17.66,10.55,16.29,8.57,16.29,8.57z M10,13.38c-0.52,0-0.94-0.53-0.94-1.18c0-0.65,0.42-1.18,0.94-1.18	s0.94,0.53,0.94,1.18C10.94,12.85,10.52,13.38,10,13.38z M14,13.38c-0.52,0-0.94-0.53-0.94-1.18c0-0.65,0.42-1.18,0.94-1.18	s0.94,0.53,0.94,1.18C14.94,12.85,14.52,13.38,14,13.38z",
      url: "#"
    },
    {
      name: "GitHub",
      icon: "M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z",
      url: "#"
    }
  ];

  return (
    <div className="w-full pb-20">
      <div className="flex justify-center items-center flex-col mx-auto px-2">
        {/* Header */}
        <section className="mb-10 lg:mt-2 p-2">
          <div className="space-y-4 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold tracking-widest text-[#90AFC5] uppercase border border-[#336B87] rounded-full bg-[#336B87]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#763626] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#763626]"></span>
              </span>
              Contacto
            </div>
            <h2 className="text-6xl lg:text-7xl font-black text-white text-center tracking-tighter">
              Trabajemos <span className="text-gradient-rust">Juntos</span>
            </h2>
            <p className="text-lg text-center text-slate-400 font-light leading-relaxed">
              Estoy disponible para nuevos proyectos y oportunidades. No dudes en contactarme enviandome un mensaje desde el formulario,
              correo directo o mis redes sociales.
            </p>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full">
          {/* Contact Info & Social */}
          <section className="space-y-8 lg:mt-10">
            {/* Contact Methods */}
            <div className="glass-card p-8 rounded-xl border border-[#336B87]/20">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#336B87] to-transparent rounded-l-xl"></div>
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#336B87]/20 border border-[#336B87]/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#763626] text-lg">✉</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#90AFC5] uppercase tracking-widest mb-1">Correo Electrónico</p>
                    <a href="mailto:alejandro.martinez.nava@outlook.com" className="text-white hover:text-[#90AFC5] transition-colors duration-300">
                      alejandro.martinez.nava@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#763626]/20 border border-[#763626]/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#336B87] text-lg">💬</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#90AFC5] uppercase tracking-widest mb-1">Redes Sociales</p>
                    <p className="text-slate-400 text-sm font-light">
                      Conéctate conmigo en Twitter, LinkedIn, Discord o GitHub
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center mt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="group p-4 rounded-lg border border-[#336B87]/20 hover:border-[#763626]/50 hover:bg-[#763626]/10 transition-all duration-300 flex items-center justify-center"
                      title={social.name}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        className="fill-[#336B87] group-hover:fill-[#763626] transition-colors duration-300"
                      >
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <form action={action} className="glass-card p-8 rounded-xl border border-[#336B87]/20 space-y-4">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#763626] to-transparent rounded-l-xl"></div>

              <h3 className="text-2xl font-bold text-white">Envía tu Mensaje</h3>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#90AFC5] uppercase tracking-widest mb-3">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#336B87]/10 border border-[#336B87]/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#763626]/50 focus:ring-2 focus:ring-[#763626]/20 transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#90AFC5] uppercase tracking-widest mb-3">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#336B87]/10 border border-[#336B87]/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#763626]/50 focus:ring-2 focus:ring-[#763626]/20 transition-all duration-300"
                  placeholder="tu@correo.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#90AFC5] uppercase tracking-widest mb-3">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-[#336B87]/10 border border-[#336B87]/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#763626]/50 focus:ring-2 focus:ring-[#763626]/20 transition-all duration-300"
                  placeholder="+52 XXX XXX XXXX"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#90AFC5] uppercase tracking-widest mb-3">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-[#336B87]/10 border border-[#336B87]/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#763626]/50 focus:ring-2 focus:ring-[#763626]/20 transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={pending}
                className="relative btn-ember inline-flex items-center px-6 py-2 rounded-xl font-medium uppercase tracking-widest text-white overflow-hidden border border-transparent bg-gradient-to-br from-[#2A3132] via-[#336B87] to-[#90AFC5] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(51,107,135,0.35),0_2px_8px_rgba(118,54,38,0.25)] active:scale-95 active:shadow-none"
              >
                {pending ? "Enviando..." : "Enviar Mensaje"}
              </button>

              {/* Success/Error Messages */}
              {state?.success && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 text-sm font-medium">✓ ¡Correo enviado exitosamente! Me pondré en contacto pronto.</p>
                </div>
              )}
              {state?.error && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-sm font-medium">✗ Error: {state.error}</p>
                </div>
              )}
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}