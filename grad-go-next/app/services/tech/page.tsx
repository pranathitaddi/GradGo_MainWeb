import React from "react";
import Image from "next/image";

const services = [
  {
    title: "AI/ML",
    description:
      "Leverage AI-driven solutions to unlock insights, automate processes, and drive smarter decisions.",
    icon: "🤖",
    address: "/microchip.png",
  },
  {
    title: "IoT",
    description:
      "Build intelligent, connected systems that revolutionize operations and enhance productivity.",
    icon: "🔗",
    address: "/technology.png",
  },
  {
    title: "AR/VR",
    description:
      "Immerse your users in interactive experiences with cutting-edge AR and VR technologies.",
    icon: "🕶️",
    address: "/vr-glasses.png",
  },
  {
    title: "Web Design & Development",
    description:
      "Create stunning, responsive websites tailored to engage and convert your audience.",
    icon: "🌐",
    address: "/code.png",
  },
  {
    title: "UI/UX",
    description:
      "Craft intuitive, visually appealing designs that put user experience at the forefront.",
    icon: "🎨",
    address: "/ux-design.png",
  },
  {
    title: "App Development",
    description:
      "Design and develop scalable mobile applications that deliver seamless user experiences.",
    icon: "📱",
    address: "/mobile-development.png",
  },
];

const ServicesGrid = () => {
  return (
    <div className="min-h-screen py-12 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-30 text-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center space-y-4"
          >
            {/* Icon */}
            <div className="w-16 h-16 border rounded-full flex items-center justify-center shadow-md">
              <Image
                src={service.address}
                alt="Expert Team Icon"
                width={50}
                height={50}
                className="w-8 h-8 invert"
              />
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold">{service.title}</h3>
            {/* Description */}
            <p className="text-gray-400">{service.description}</p>
            {/* Button */}
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium shadow-md hover:opacity-90 transition">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
