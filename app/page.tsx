import Image from "next/image";

export default function Home() {
  return (
   <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-lg">Vertex Science Point</p>
      <Image
        src="/images/nextjs.png"
        alt="Next.js Logo"
        width={500}
        height={500}
        className="rounded-lg shadow-lg"

    
      />
      </div>
  );
}
