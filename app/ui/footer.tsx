import Image from 'next/image'

export default function Footer () {
  return (
    <div className='flex flex-col items-center p-3 border-t border-gray-300'>
      <p className='flex justify-center items-center max-md:flex-col'>
        <span>
          <a rel="cc:attributionURL" href="/">Sitio web&nbsp;</a> realizado por&nbsp;<a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="contact"> Alejandro Martinez&nbsp;</a>
        </span>
        <span>
          bajo una licencia&nbsp;
        </span>
        <span>
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" className='flex'> CC BY-NC-SA 4.0&nbsp;    
            <img style={{height:22, marginLeft:3,}} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""/>
            <img style={{height:22, marginLeft:3,}} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""/>
            <img style={{height:22, marginLeft:3,}} src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""/>
            <img style={{height:22, marginLeft:3,}} src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""/>
          </a>  
        </span>
      </p>
      <p>
        Construido con <a href='https://nextjs.org' target="_blank">Next.js</a> y <a href='https://tailwindcss.com' target="_blank">Tailwindcss</a>
      </p>
    </div>
  )
}