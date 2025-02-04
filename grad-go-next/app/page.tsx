import Image from "next/image";
import Widgets from "@/app/(components)/Widgets";
import Widgetss from "@/app/(components)/Widgetss";
import Footer from "@/app/(components)/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div>
        <div className="flex justify-between items-start mt-0 h-full z-10 relative p-10">
          <div className="max-w-lg mt-10">
            <h1 className="text-5xl font-bold mb-6 leading-tight tracking-wider">
              Evolve <span className="text-pri">ideas</span> into Thriving{" "}
              <span className="text-pri">Realities</span>
            </h1>
            <p className="tracking-normal text-lg mb-8">
              Empowering startups and businesses with cutting-edge technology,
              strategic marketing, and expert consultancy. Your journey to
              success starts here.
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
      <div className="flex items-center justify-between w-full h-screen px-10 mt-12 p-10">
        {/* Left Section */}
        <div className="flex flex-col space-y-6 max-w-lg">
          <h1 className="text-5xl font-bold text-white leading-snug">
            Build future-ready platforms with our custom{" "}
            <span className="text-blue-400">Technology</span> Solutions
          </h1>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-medium rounded-lg shadow-lg hover:opacity-90 transition">
            Explore Our Tech Solutions →
          </button>
        </div>

        {/* Right Section */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 p-2">
          Image
        </div>
      </div>
      <div className="bg-gray-700 text-white py-12 px-8 my-0 p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Inside GradGo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Company</h3>
              <p className="text-gray-300 mb-4">
                Explore GradGo history and culture of putting technology to work
                in the real world
              </p>
              <a
                href="#"
                className="text-blue-400 hover:underline flex items-center"
              >
                About GradGo →
              </a>
              <a
                href="#"
                className="text-blue-400 hover:underline flex items-center mt-2"
              >
                Our history →
              </a>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
              <p className="text-gray-300 mb-4">
                Learn about GradGo’s commitment to support and bring the
                ideation of many individuals and companies
              </p>
              <a
                href="#"
                className="text-blue-400 hover:underline flex items-center"
              >
                GradGo Projects →
              </a>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Innovations</h3>
              <p className="text-gray-300 mb-4">
                Visit the GradGo lab and see what's in store for future
                computing
              </p>
              <a
                href="#"
                className="text-blue-400 hover:underline flex items-center"
              >
                GradGo Projects →
              </a>
              <a
                href="#"
                className="text-blue-400 hover:underline flex items-center mt-2"
              >
                GradGo Research →
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="flex justify-between items-start mt-0 h-full z-10 relative p-10">
          <div className="max-w-lg mt-10">
            <h1 className="text-5xl font-bold mb-6 leading-tight tracking-wider">
              Evolve <span className="text-pri">ideas</span> into Thriving
              <span className="text-pri">Realities</span>
            </h1>
            <p className="tracking-normal text-lg mb-8">
              Empowering startups and businesses with cutting-edge technology,
              strategic marketing, and expert consultancy. Your journey to
              success starts here.
            </p>
            <button className="px-8 py-3 font-bold bg-button-gradient rounded-full hover:opacity-90 transition-opacity">
              Get Started Today →
            </button>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden">
          <div className="scale-75 transform -rotate-12">
            <Widgetss />
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
