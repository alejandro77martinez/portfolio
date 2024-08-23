function Bar(){
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "45%"}}> 45%</div>
    </div>
  )
}

export default function AboutMe() {
  return (
    <div className="flex px-10">
      <div className="w-2/4">
        <div className="border h-28 flex justify-center items-center">
          <h1 className="text-3xl font-bold underline decoration-wavy">Sobre mi</h1>
        </div>
        <div className="border h-auto">
          <div className="bg-violet-200 w-5/6 p-4 shadow-2xl shadow-black rounded-xl border-2 border-black mx-auto">
            <h2 className="text-xl font-semibold text-center">Formacion academica</h2>
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
      <div className="w-2/4">
        <div className="border h-auto">
          <div className="bg-violet-200 w-5/6 p-4 shadow-2xl shadow-black rounded-xl border-2 border-black mx-auto">
            <h2 className="text-xl font-semibold text-center">Habilidades tecnicas</h2>
            <br></br>
            <table className="w-full">
              <tr>
                <td className="w-1/3 text-center">HTML</td>
                <td className="w-2/3">{Bar()}</td>
              </tr>
              <tr>
                <td className="w-1/3 text-center">Java Script</td>
                <td className="w-2/3">{Bar()}</td>
              </tr>
              <tr>
                <td className="w-1/3 text-center">Type Script</td>
                <td className="w-2/3">{Bar()}</td>
              </tr>
              <tr>
                <td className="w-1/3 text-center">CSS</td>
                <td className="w-2/3">{Bar()}</td>
              </tr>
              <tr>
                <td className="w-1/3 text-center">XML</td>
                <td className="w-2/3">{Bar()}</td>
              </tr>
              <tr>
                <td className="w-1/3 text-center">SQL</td>
                <td className="w-2/3">{Bar()}</td>
              </tr>
              <tr>
                <td className="w-1/3 text-center">No-SQL</td>
                <td className="w-2/3">{Bar()}</td>
              </tr>
              <tr>
                <td className="w-1/3 text-center">Java</td>
                <td className="w-2/3">{Bar()}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="border h-auto mt-20">
          <div className="bg-violet-200 w-5/6 p-4 shadow-2xl shadow-black rounded-xl border-2 border-black">
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
    </div>
  )
}