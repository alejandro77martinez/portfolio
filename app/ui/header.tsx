'use client'
import Image from 'next/image'
import clsx from 'clsx';
import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [floatMenu, setFloatMenu] = useState(false);
  const handlerMenu = () => { setFloatMenu(!floatMenu) }
  return (
    <>
      <nav className="z-50 fixed w-full h-16 max-lg:h-14 flex justify-between items-center backdrop-blur-sm bg-transparent border-b border-[#336B87]/20">
        <div className='px-0 mt-1 lg:px-2'>
          <Link href='/'>
            <Image
              src="/iconAM.png"
              width={70}
              height={80}
              className="block filter drop-shadow-[0_0_10px_rgba(255,255,255,255)]"
              alt="Logotipo"
            />
          </Link>
        </div>
        <div className='px-6 flex h-10 gap-4 py-1 max-lg:hidden'>
          <Link href='#about' className="relative btn-ember inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium uppercase tracking-widest text-white overflow-hidden border border-transparent bg-gradient-to-br from-[#2A3132] via-[#336B87] to-[#90AFC5] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(51,107,135,0.35),0_2px_8px_rgba(118,54,38,0.25)] active:scale-95 active:shadow-none">
            Sobre mi
          </Link>
          <Link href='#projects' className="relative btn-ember inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium uppercase tracking-widest text-white overflow-hidden border border-transparent bg-gradient-to-br from-[#2A3132] via-[#336B87] to-[#90AFC5] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(51,107,135,0.35),0_2px_8px_rgba(118,54,38,0.25)] active:scale-95 active:shadow-none">
            Proyectos
          </Link>
          <Link href='#contact' className="relative btn-ember inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium uppercase tracking-widest text-white overflow-hidden border border-transparent bg-gradient-to-br from-[#2A3132] via-[#336B87] to-[#90AFC5] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(51,107,135,0.35),0_2px_8px_rgba(118,54,38,0.25)] active:scale-95 active:shadow-none">
            Contacto
          </Link>
        </div>
        <div className='px-2 py-2 lg:hidden'>
          <button className="relative btn-ember inline-flex items-center gap-2 p-1 rounded-xl font-medium uppercase tracking-widest text-white overflow-hidden border border-transparent bg-gradient-to-br from-[#2A3132] via-[#336B87] to-[#90AFC5] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(51,107,135,0.35),0_2px_8px_rgba(118,54,38,0.25)] active:scale-95 active:shadow-none" onClick={() => { handlerMenu() }}>
            <svg className={clsx('', { 'hidden': floatMenu === !false })} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256" style={{ fill: 'white' }}>
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" style={{ mixBlendMode: 'normal' }}><g transform="scale(2.56,2.56)"><path d="M13,29.908c0,0 3.887,-1.186 10.237,-2.424c6.347,-1.239 15.169,-2.501 24.951,-2.646c9.782,-0.142 18.638,0.862 25.018,1.915c6.383,1.052 10.303,2.124 10.303,2.124c0,0 -3.972,0.865 -10.352,1.751c-6.383,0.885 -15.162,1.819 -24.856,1.96c-9.694,0.143 -18.496,-0.534 -24.902,-1.232c-6.403,-0.7 -10.399,-1.448 -10.399,-1.448zM13.02,52.356c0,0 16.009,-4.436 35.924,-5.131c19.915,-0.695 36.194,2.614 36.194,2.614c0,0 -16.008,4.436 -35.923,5.131c-19.915,0.695 -36.195,-2.614 -36.195,-2.614zM14.643,74.235c0,0 16.323,-4.291 36.58,-4.807c20.257,-0.516 36.777,2.941 36.777,2.941c0,0 -16.323,4.291 -36.58,4.807c-20.257,0.515 -36.777,-2.941 -36.777,-2.941z"></path></g></g>
            </svg>
            <svg className={clsx('', { 'hidden': floatMenu === false })} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256" style={{ fill: 'white' }}>
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" style={{ mixBlendMode: 'normal' }}><g transform="scale(8,8)"><path d="M7.64648,6.50977c-0.253,-0.03775 -0.51969,0.02105 -0.74219,0.18555c-0.443,0.329 -0.53798,0.95639 -0.20898,1.40039c2.4715,3.33841 5.12283,6.4293 7.87695,9.22266c-2.49311,2.39779 -5.05609,4.54803 -7.64648,6.36328c-0.453,0.317 -0.56114,0.94058 -0.24414,1.39258c0.195,0.278 0.50531,0.42578 0.82031,0.42578c0.198,0 0.39631,-0.05869 0.57031,-0.17969c2.68779,-1.88353 5.34638,-4.11314 7.92773,-6.59961c2.58118,2.48613 5.23818,4.71426 7.92578,6.59766c0.175,0.122 0.37427,0.18164 0.57227,0.18164c0.315,0 0.62731,-0.14873 0.82031,-0.42773c0.317,-0.453 0.20691,-1.07558 -0.24609,-1.39258c-2.5904,-1.81525 -5.15337,-3.96353 -7.64648,-6.36133c2.75418,-2.79351 5.4054,-5.88465 7.87695,-9.22266c0.329,-0.444 0.23697,-1.06944 -0.20703,-1.39844c-0.444,-0.329 -1.07139,-0.23597 -1.40039,0.20703c-2.41756,3.26516 -5.00723,6.28736 -7.69531,9.01367c-2.68843,-2.72657 -5.27941,-5.74811 -7.69727,-9.01367c-0.1645,-0.2215 -0.40325,-0.35678 -0.65625,-0.39453z"></path></g></g>
            </svg>
          </button>
        </div>
      </nav>
      <div className={clsx('p-5 flex flex-col gap-5 fixed top-16 right-2 rounded-2xl border border-[#336B87]/30 backdrop-blur-sm bg-transparent shadow-2xl z-40 min-w-[200px] lg:hidden', { 'hidden': floatMenu === false })}>
        <Link onClick={() => handlerMenu()} href='#about' className="relative btn-ember inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium uppercase tracking-widest text-white overflow-hidden border border-transparent bg-gradient-to-br from-[#2A3132] via-[#336B87] to-[#90AFC5] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(51,107,135,0.35),0_2px_8px_rgba(118,54,38,0.25)] active:scale-95 active:shadow-none">
          <span className="mx-auto">Sobre mi</span>
        </Link>
        <Link onClick={() => handlerMenu()} href='#projects' className="relative btn-ember inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium uppercase tracking-widest text-white overflow-hidden border border-transparent bg-gradient-to-br from-[#2A3132] via-[#336B87] to-[#90AFC5] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(51,107,135,0.35),0_2px_8px_rgba(118,54,38,0.25)] active:scale-95 active:shadow-none">
          <span className="mx-auto">Proyectos</span>
        </Link>
        <Link onClick={() => handlerMenu()} href='#contact' className="relative btn-ember inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium uppercase tracking-widest text-white overflow-hidden border border-transparent bg-gradient-to-br from-[#2A3132] via-[#336B87] to-[#90AFC5] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(51,107,135,0.35),0_2px_8px_rgba(118,54,38,0.25)] active:scale-95 active:shadow-none">
          <span className="mx-auto">Contacto</span>
        </Link>
      </div>
    </>
  )
}