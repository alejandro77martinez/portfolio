import Image from 'next/image'

export default function Footer () {
  return (
    <p className='flex justify-center items-center h-20'>
      <a rel="cc:attributionURL" href="/">Este trabajo es&nbsp;</a> realizado por&nbsp;<a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="contact"> Alejandro Martinez y&nbsp;</a> esta bajo una licencia&nbsp; 
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" className='flex'> CC BY-NC-SA 4.0       
        <img style={{height:22, marginLeft:3,}} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""/>
        <img style={{height:22, marginLeft:3,}} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""/>
        <img style={{height:22, marginLeft:3,}} src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""/>
        <img style={{height:22, marginLeft:3,}} src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""/>
      </a>
    </p>
  )
}