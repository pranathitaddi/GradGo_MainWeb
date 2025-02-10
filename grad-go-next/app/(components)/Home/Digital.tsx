import Image from "next/image";

export default function Digital() {
  return (
    <div className="flex items-center justify-between w-full h-screen px-10 mt-12 p-10">
      <div className="m-3 w-full h-full flex items-center justify-between bg-sec rounded-lg p-10">
        {/* Left Section */}
        <div>
          <p className="text-gray-300 text-sm mb-2">Let GradGo be</p>
          <h1 className="text-5xl font-bold text-white leading-snug">
            The Ultimate Guide <br /> To Enter into a New <br />
            <span className="text-blue-400">Digital Marketing</span> World
          </h1>
          <button className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-medium px-6 py-3 rounded-full shadow-md hover:opacity-90 transition">
            Discover Our Services →
          </button>
        </div>

        {/* Right Section */}
        <div className="w-96 h-96 relative rounded-3xl">
          <Image
            src="/man.jpg"
            fill
            alt="Tech Services"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
