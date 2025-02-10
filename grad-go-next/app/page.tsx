import Image from "next/image";
import Hero from "@/app/(components)/Home/Hero";
import About from "./(components)/Home/About";
import Tech from "./(components)/Home/Tech";
import Digital from "./(components)/Home/Digital";
import Consultancy from "./(components)/Home/Consultancy";
import WhyUs from "./(components)/Home/WhyUs";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Hero />
      <About />
      <Tech />
      <Digital />
      <Consultancy />
      <WhyUs />
    </div>
  );
}
