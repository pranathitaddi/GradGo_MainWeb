// import Image from "next/image";
import Widgets from "@/app/(components)/Widgets";
import Footer from "@/app/(components)/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div>
        <div className="flex items-start mt-0 h-screen w-[100%] z-10 relative p-10">
          <div className="mt-28 ml-6 w-[50%]">
            <h1 className="text-6xl font-bold mb-6 leading-tight tracking-wider">
              Evolve <span className="text-pri">ideas</span> into Thriving{" "}
              <span className="text-pri">Realities</span>
            </h1>
            <p className="tracking-normal text-lg mb-8">
              Empowering startups and businesses with cutting-edge technology,
              strategic marketing, and expert consultancy. Your journey to
              success
              <br /> starts here.
            </p>
            <button className="px-8 py-3 font-bold bg-button-gradient rounded-full hover:opacity-90 transition-opacity">
              Get Started Today →
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="scale-75 transform -rotate-12">
            <Widgets />
          </div>
        </div>
      </div>
    </div>
  );
}
