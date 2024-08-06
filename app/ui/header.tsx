import Image from 'next/image'

export default function NavBar() {
  return(
    <nav className="w-full h-15 flex justify-between items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl">
      <div className='px-2'>
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
      <div className='px-6 flex h-10 gap-4'>
        <a href='about' type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sobre mi</a>
        <a href='projects' type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Proyectos</a>
        <a href='contact' type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Contacto</a>
      </div>
    </nav>
  )
}