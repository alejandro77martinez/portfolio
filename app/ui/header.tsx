'use client'
import Image from 'next/image'
import clsx from 'clsx';
import { useState } from 'react';

export default function NavBar() {
  const [floatMenu, setFloatMenu] = useState(false);
  const handlerMenu = () => {setFloatMenu(!floatMenu)}
  return(
    <>
      <nav className="fixed w-full h-16 max-lg:h-14 flex justify-between items-center backdrop-blur-md border-b border-gray-300 bg-transparent">
        <div className='px-0 mt-1 lg:px-2'>
          <a href='/'>
            <Image
              src="/iconAM.png"
              width={70}
              height={80}
              className="block"
              alt="Logotipo"
            />
          </a>
        </div>
        <div className='px-6 flex h-10 gap-4 py-1 max-lg:hidden'>
          <a href='about' type="button" className="text-white bg-gradient-to-t from-gray-400 via-gray-900 to-gray-400 hover:bg-gradient-to-br focus:ring-2 focus:ring-black shadow-md shadow-black font-medium rounded-full text-sm px-5 py-1.5 text-center">Sobre mi</a> 
          <a href='contact' type="button" className="text-white bg-gradient-to-t from-gray-400 via-gray-900 to-gray-400 hover:bg-gradient-to-br focus:ring-2 focus:ring-black shadow-md shadow-black font-medium rounded-full text-sm px-5 py-1.5 text-center">Contacto</a>
          <a href='projects' type="button" className="text-white bg-gradient-to-t from-gray-400 via-gray-900 to-gray-400 hover:bg-gradient-to-br focus:ring-2 focus:ring-black shadow-md shadow-black font-medium rounded-full text-sm px-5 py-1.5 text-center">Proyectos</a>
        </div>
        <div className='px-2 py-2 lg:hidden'>
          <button className='bg-gradient-to-t from-gray-400 via-gray-900 to-gray-400 hover:bg-gradient-to-br focus:ring-2 focus:ring-black shadow-md shadow-black rounded-full p-1.5' onClick={() => {handlerMenu()}}>
            <svg className={clsx('',{'hidden':floatMenu === !false})} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256" style={{fill:'white'}}>
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}><g transform="scale(2.56,2.56)"><path d="M13,29.908c0,0 3.887,-1.186 10.237,-2.424c6.347,-1.239 15.169,-2.501 24.951,-2.646c9.782,-0.142 18.638,0.862 25.018,1.915c6.383,1.052 10.303,2.124 10.303,2.124c0,0 -3.972,0.865 -10.352,1.751c-6.383,0.885 -15.162,1.819 -24.856,1.96c-9.694,0.143 -18.496,-0.534 -24.902,-1.232c-6.403,-0.7 -10.399,-1.448 -10.399,-1.448zM13.02,52.356c0,0 16.009,-4.436 35.924,-5.131c19.915,-0.695 36.194,2.614 36.194,2.614c0,0 -16.008,4.436 -35.923,5.131c-19.915,0.695 -36.195,-2.614 -36.195,-2.614zM14.643,74.235c0,0 16.323,-4.291 36.58,-4.807c20.257,-0.516 36.777,2.941 36.777,2.941c0,0 -16.323,4.291 -36.58,4.807c-20.257,0.515 -36.777,-2.941 -36.777,-2.941z"></path></g></g>
            </svg>
            <svg className={clsx('',{'hidden':floatMenu === false})} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256" style={{fill:'white'}}>
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}><g transform="scale(8,8)"><path d="M7.64648,6.50977c-0.253,-0.03775 -0.51969,0.02105 -0.74219,0.18555c-0.443,0.329 -0.53798,0.95639 -0.20898,1.40039c2.4715,3.33841 5.12283,6.4293 7.87695,9.22266c-2.49311,2.39779 -5.05609,4.54803 -7.64648,6.36328c-0.453,0.317 -0.56114,0.94058 -0.24414,1.39258c0.195,0.278 0.50531,0.42578 0.82031,0.42578c0.198,0 0.39631,-0.05869 0.57031,-0.17969c2.68779,-1.88353 5.34638,-4.11314 7.92773,-6.59961c2.58118,2.48613 5.23818,4.71426 7.92578,6.59766c0.175,0.122 0.37427,0.18164 0.57227,0.18164c0.315,0 0.62731,-0.14873 0.82031,-0.42773c0.317,-0.453 0.20691,-1.07558 -0.24609,-1.39258c-2.5904,-1.81525 -5.15337,-3.96353 -7.64648,-6.36133c2.75418,-2.79351 5.4054,-5.88465 7.87695,-9.22266c0.329,-0.444 0.23697,-1.06944 -0.20703,-1.39844c-0.444,-0.329 -1.07139,-0.23597 -1.40039,0.20703c-2.41756,3.26516 -5.00723,6.28736 -7.69531,9.01367c-2.68843,-2.72657 -5.27941,-5.74811 -7.69727,-9.01367c-0.1645,-0.2215 -0.40325,-0.35678 -0.65625,-0.39453z"></path></g></g>
            </svg>
          </button>
        </div>
      </nav>
      <div className={clsx('p-5 flex flex-col gap-5 fixed top-14 right-2 rounded-b-lg border border-gray-300 backdrop-blur-md bg-transparent',{'hidden':floatMenu === false})}>
        <a href='about' type="button" className="text-white bg-gradient-to-t from-gray-400 via-gray-900 to-gray-400 hover:bg-gradient-to-br focus:ring-2 focus:ring-black shadow-md shadow-black font-medium rounded-full text-base px-5 py-1.5 text-center">Sobre mi</a> 
        <a href='contact' type="button" className="text-white bg-gradient-to-t from-gray-400 via-gray-900 to-gray-400 hover:bg-gradient-to-br focus:ring-2 focus:ring-black shadow-md shadow-black font-medium rounded-full text-base px-5 py-1.5 text-center">Contacto</a>
        <a href='projects' type="button" className="text-white bg-gradient-to-t from-gray-400 via-gray-900 to-gray-400 hover:bg-gradient-to-br focus:ring-2 focus:ring-black shadow-md shadow-black font-medium rounded-full text-base px-5 py-1.5 text-center">Proyectos</a>
      </div>
    </>
  )
}