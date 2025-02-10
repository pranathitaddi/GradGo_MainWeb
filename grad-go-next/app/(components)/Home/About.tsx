import Image from "next/image";
import { Target, Users, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 pt-0 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              About GradGo
            </h2>
            <div className="w-24 h-1 bg-pri mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-pri text-white p-6 rounded-xl">
                <p className="text-3xl font-bold">2024</p>
                <p className="text-sm">Founded</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Your Partner in Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Headquartered in India, GradGo is a next-gen agency designed to
                empower startups, growing businesses, and ambitious individuals.
                We offer a holistic suite of services across technology, digital
                marketing, and consultancy.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Target,
                    title: "Vision",
                    text: "Transforming ideas into thriving realities",
                  },
                  {
                    icon: Users,
                    title: "Team",
                    text: "Diverse specialists delivering excellence",
                  },
                  {
                    icon: Rocket,
                    title: "Growth",
                    text: "Focused on your sustainable success",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-sec rounded-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
