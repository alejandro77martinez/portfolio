import Link from 'next/dist/client/link'
import Image from 'next/image'

export default function Footer () {
  return (
    <div className='flex flex-col items-center p-3 border-t border-[#336B87]/20'>
      <p className='flex justify-center items-center max-md:flex-col'>
        <span>
          <a rel="cc:attributionURL" href="/">Sitio web&nbsp;</a> desarrollado por&nbsp;<a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="contact"> Alejandro Martinez&nbsp;</a>
        </span>
        <span>
          bajo una licencia&nbsp;
        </span>
        <span>
          <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" className='flex'> CC BY-NC-SA 4.0&nbsp;    
            <Image width={22} height={22} style={{ height: 22, marginLeft: 2, }} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt={''}/>
            <Image width={22} height={22} style={{ height: 22, marginLeft: 2, }} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt={''}/>
            <Image width={22} height={22} style={{ height: 22, marginLeft: 2, }} src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt={''}/>
            <Image width={22} height={22} style={{ height: 22, marginLeft: 2, }} src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt={''}/>
          </Link>  
        </span>
      </p>
      <p>
        Construido con <Link href='https://nextjs.org' target="_blank">Next.js</Link> y <Link href='https://tailwindcss.com' target="_blank">Tailwindcss</Link>
      </p>
    </div>
  )
}