import Image from "next/image";

export default function Consultancy() {
  return (
    <div className="flex items-center justify-between w-full h-screen px-10 mt-12 p-10">
      <div className="m-3 w-full h-full flex items-center justify-between bg-sec rounded-lg p-10">
        {/* Left Section */}
        <div className="flex flex-col space-y-6 max-w-lg">
          <h1 className="text-5xl font-bold text-white leading-snug">
            "Strategic Guidance for Smarter {" "}
            <span className="text-pri">Decisions</span>"
          </h1>
          <p className="text-lg text-white leading-snug">
            Navigating today’s business challenges requires expertise, strategy,
            and vision. At GradGo, our consultancy services empower businesses
            with the tools and insights needed to grow, adapt, and succeed.
          </p>
          <button className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-medium px-6 py-3 rounded-full shadow-md hover:opacity-90 transition">
            Get Expert Advice →
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
