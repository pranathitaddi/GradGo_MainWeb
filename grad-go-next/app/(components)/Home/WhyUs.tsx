import Image from "next/image";

export default function WhyUs() {
  return (
    <div className="min-h-screen py-12 px-8">
      <div className="container mx-auto text-center space-y-12">
        {/* Section Title */}
        <h1 className="text-3xl lg:text-4xl font-bold text-white">
          Why Choose GradGo for Technology Solutions?
        </h1>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border rounded-full flex items-center justify-center shadow-md">
              <Image
                src="/leadership.png"
                alt="Expert Team Icon"
                width={50}
                height={50}
                className="w-8 h-8 invert"
              />
            </div>
            <h2 className="text-lg font-semibold text-white">Expert Team</h2>
            <p className="text-gray-300 text-sm">
              "Skilled professionals in the latest technologies."
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border rounded-full flex items-center justify-center shadow-md">
              <Image
                src="/puzzle.png"
                alt="Expert Team Icon"
                width={50}
                height={50}
                className="w-8 h-8"
              />
            </div>
            <h2 className="text-lg font-semibold text-white">
              Custom Solutions
            </h2>
            <p className="text-gray-300 text-sm">
              "Tailored strategies to meet your business needs."
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border rounded-full flex items-center justify-center shadow-md">
              <Image
                src="/business-success.png"
                alt="Expert Team Icon"
                width={50}
                height={50}
                className="w-8 h-8 invert"
              />
            </div>
            <h2 className="text-lg font-semibold text-white">Proven Success</h2>
            <p className="text-gray-300 text-sm">
              "Track record of delivering impactful results."
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-500 my-6" />

        {/* Subsection Title */}
        <h2 className="text-2xl font-bold text-white">
          "Our Technology Expertise"
        </h2>

        {/* Blogs Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-white">
            Blogs on our Products that we have built till now
          </h2>
        </div>
      </div>
    </div>
  );
}
