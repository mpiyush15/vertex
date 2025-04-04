import Image from "next/image";
import Navbar from "./Navbae";
import Hero from "./Hero";
import Courses from "./Courses";


export default function Home() {
  return (
    <main>
    <Navbar />
    <Hero />
    <Courses />
  </main>
  );
}
