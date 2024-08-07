import Image from 'next/image'

export default function NavBar() {
  return(
    <nav className="fixed w-full h-15 flex justify-between items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-lg">
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
      <div className='px-6 flex h-10 gap-4 py-1'>
        <a href='about' type="button" className="text-white bg-gradient-to-t from-gray-400 via-gray-900 to-gray-400 hover:bg-gradient-to-br focus:ring-2 focus:ring-black shadow-md shadow-black font-medium rounded-full text-sm px-5 py-1.5 text-center">Sobre mi</a> 
        <a href='contact' type="button" className="text-white bg-gradient-to-t from-gray-400 via-gray-900 to-gray-400 hover:bg-gradient-to-br focus:ring-2 focus:ring-black shadow-md shadow-black font-medium rounded-full text-sm px-5 py-1.5 text-center">Contacto</a>
        <a href='projects' type="button" className="text-white bg-gradient-to-t from-gray-400 via-gray-900 to-gray-400 hover:bg-gradient-to-br focus:ring-2 focus:ring-black shadow-md shadow-black font-medium rounded-full text-sm px-5 py-1.5 text-center">Proyectos</a>
      </div>
    </nav>
  )
}