import Image from "next/image";

export default function Projects() {
  return (
    <div className="h-auto w-full max-w-7xl mx-auto border">
      <div className="w-full pt-6">
        <h1 className="text-3xl text-center font-bold underline decoration-wavy mb-10 max-lg:mb-7">Proyectos</h1>
      </div>
      <div className="flex justify-end">
        <div className="flex w-5/6 bg-violet-200 p-4 shadow-2xl shadow-black rounded-xl border-2 border-black mb-10">
          <div className="w-2/5 p-4">
            <Image 
              src="/Boceto.png"
              width={500}
              height={600}
              className="w-66 h-56"
              alt="Portafolio web">
            </Image>
          </div>
          <div className="w-3/5 p-4">
            <h2 className="text-xl font-bold mb-4">Portafolio web</h2>
            <p>ghjd jhf h adsjkdj sk hdf jksa hf jdsk fhd sjakfh jdsk ds hfj kdsh fjs haf jkds hfjsk hfjk jssf hjska hfjsdka hfjk hfjs</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="flex w-5/6 bg-violet-200 p-4 shadow-2xl shadow-black rounded-xl border-2 border-black mb-10">
          <div className="w-3/5 p-4">
            <h2 className="text-xl font-bold mb-4">Portafolio web</h2>
            <p>ghjd jhf h adsjkdj sk hdf jksa hf jdsk fhd sjakfh jdsk ds hfj kdsh fjs haf jkds hfjsk hfjk jssf hjska hfjsdka hfjk hfjs</p>
          </div>
          <div className="w-2/5 p-4">
            <Image 
              src="/Boceto.png"
              width={500}
              height={600}
              className="w-66 h-56"
              alt="Portafolio web">
            </Image>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex w-5/6 bg-violet-200 p-4 shadow-2xl shadow-black rounded-xl border-2 border-black mb-10">
          <div className="w-2/5 p-4">
            <Image 
              src="/Boceto.png"
              width={500}
              height={600}
              className="w-66 h-56"
              alt="Portafolio web">
            </Image>
          </div>
          <div className="w-3/5 p-4">
            <h2 className="text-xl font-bold mb-4">Portafolio web</h2>
            <p>ghjd jhf h adsjkdj sk hdf jksa hf jdsk fhd sjakfh jdsk ds hfj kdsh fjs haf jkds hfjsk hfjk jssf hjska hfjsdka hfjk hfjs</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="w-4/6 bg-violet-200 p-4 shadow-2xl shadow-black rounded-xl border-2 border-black mb-10">
          mundo
        </div>
      </div>
    </div>
  )
}