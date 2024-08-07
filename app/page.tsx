import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex items-center px-60">
        <div className="w-2/5 flex justify-center">
          <Image
            src="/im.png"
            width={200}
            height={200}
            alt="Avatar"
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-5">
          <h1>Alejandro Martinez</h1>
          <p>
            jkfdjsgsl jdfgkdjg ksdjg ksdjgkf gjfkdsjg klsjdfg kfjdgkd jsfkgjdskfg jklds gjkldfs
            jgkld fsj gljd sfkglj fdkgjdf sjgkldj</p>
          <div>
            Redes sociales
          </div>
        </div>
      </div>
    </div>
  );
}
