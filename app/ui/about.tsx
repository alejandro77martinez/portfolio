function Bar({percent}: {percent:number}){
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: percent+"%"}}> {percent}%</div>
    </div>
  )
}

export default function AboutMe() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <div className="flex max-lg:flex-col">
        <div className="w-2/4 max-lg:w-full">
          <div className="lg:h-28 flex justify-center lg:items-center pb-7">
            <h1 className="text-3xl font-bold underline decoration-wavy">Sobre mi</h1>
          </div>
          <div className="h-auto w-5/6 mx-auto max-lg:w-full max-lg:px-4">
            <div className="bg-violet-200 p-4 shadow-2xl shadow-black rounded-xl border-2 border-black">
              <h2 className="text-xl font-semibold text-center">Formacion academica</h2>
              <br></br>
              <ul className="list-disc list-inside">
                <li>Licenciatura en Ingenieria de Software (ultimo año) - Universidad Autonoma de la Ciudad de Mexico</li>
                <li>Curso sobre Web Resposive - FreeCodeCamp</li>
                <li>Curso sobre librerias de front-end - FreeCodeCamp</li>
                <li>Curso de SQL basico - SelfLearnign</li>
                <li>Curso de PHP basico - SelfLearnign</li>
                <li>Curso de Linux basico - NetaCad Cisco</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-2/4 max-lg:w-full pt-10">
          <div className="h-auto w-5/6 mx-auto max-lg:w-full max-lg:px-4">
            <div className="bg-violet-200 p-4 shadow-2xl shadow-black rounded-xl border-2 border-black">
              <h2 className="text-xl font-semibold text-center">Habilidades tecnicas</h2>
              <br></br>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="w-1/3 text-center">HTML</td>
                    <td className="w-2/3"><Bar percent={70}/></td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-center">Java Script</td>
                    <td className="w-2/3"><Bar percent={65}/></td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-center">Type Script</td>
                    <td className="w-2/3"><Bar percent={65}/></td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-center">CSS</td>
                    <td className="w-2/3"><Bar percent={70}/></td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-center">XML</td>
                    <td className="w-2/3"><Bar percent={70}/></td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-center">SQL</td>
                    <td className="w-2/3"><Bar percent={75}/></td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-center">No-SQL</td>
                    <td className="w-2/3"><Bar percent={60}/></td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-center">Java</td>
                    <td className="w-2/3"><Bar percent={80}/></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto py-10 lg:pt-16 max-lg:w-full max-lg:px-4 w-2/4 mx-auto">
        <div className="mx-auto bg-violet-200 p-4 lg:w-5/6 shadow-2xl shadow-black rounded-xl border-2 border-black">
          <h2 className="text-xl font-semibold text-center">Habilidades Blandas</h2>
          <br></br>
          <ul className="list-disc list-inside">
            <li>
              Pasante en Ingenieria de Software - Universidad Autonoma de la Ciudad de Mexico (ultimo año)
            </li>
            <li>Curso sobre Web Resposive - FreeCodeCamp</li>
            <li>Curso sobre librerias de front-end - FreeCodeCamp</li>
            <li>Curso de SQL basico - SelfLearnign</li>
            <li>Curso de PHP basico - SelfLearnign</li>
            <li>Curso de Linux basico - NetaCad Cisco</li>
          </ul>
        </div>
      </div>
    </div>
  )
}