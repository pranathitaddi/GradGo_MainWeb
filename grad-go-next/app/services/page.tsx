"use client"
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();
  const services = [
    {
      title: "Digital Marketing",
      path: "/marketing",
      description:
        "Boost your online presence with targeted strategies and creative campaigns to reach your audience effectively.",
      points: [
        "SEO Optimization",
        "Social Media Management",
        "Pay-Per-Click Advertising",
        "Content Marketing",
      ],
    },
    {
      title: "Technology and Innovation",
      path: "/tech",
      description:
        "Harness cutting-edge technology to drive innovation and achieve transformative results for your business.",
      points: [
        "AI-Powered Solutions",
        "Custom Software Development",
        "IoT Integration",
        "Cloud Computing Services",
      ],
    },
    {
      title: "Consultancy",
      path: "/consultancy",
      description:
        "Leverage expert advice to navigate challenges and seize opportunities, ensuring your success at every step.",
      points: [
        "Business Strategy Development",
        "Market Research & Analysis",
        "Process Optimization",
        "Risk Management Solutions",
      ],
    },
  ];

  return (
    <section className="bg-[#0f0f2e] py-12 px-6">
      <h2 className="text-white text-4xl font-bold text-center mb-12">
        Our Services
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => router.push("/services" +service.path)}
            className="w-96 bg-[#2a2a4a] rounded-xl shadow-lg p-12 flex flex-col text-left cursor-pointer hover:transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              {service.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
