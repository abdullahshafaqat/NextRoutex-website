"use client";

import Image from "next/image";

import mainImage from "@/assets/13.jpg";

const features = [
  {
    title: "Best Business Consulting",
    description:
      "Seeing rather her you not esteem men settle genius excuse. International Deal say over you age from. Comparison new ham melancholy son themselves.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Tothether rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son.",
  },
];

export function HomeInnovationSection() {
  return (
    <section className="relative overflow-hidden bg-[#1e2230]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative px-8 py-20 sm:px-16 sm:py-24 lg:px-20 lg:py-28">
          <div className="pointer-events-none absolute left-0 top-0">
            <svg width="200" height="400" viewBox="0 0 200 400" fill="none" aria-hidden="true">
              <polygon points="0,0 120,0 0,180" fill="#7c3aed" />
              <polygon points="0,120 100,120 0,260" fill="#3b82f6" />
              <polygon points="0,220 80,220 0,340" fill="#dc2626" />
            </svg>
          </div>

          <div className="relative z-10 ml-16 max-w-[520px]">
            <h2 className="text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-[52px]">
              Be at the forefront of the
              <br />
              new innovation
            </h2>

            <div className="mt-12 space-y-10">
              {features.map((feature) => (
                <div key={feature.title} className="border-l-[3px] border-[#dc2626] pl-6">
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-[450px] lg:h-auto">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <Image
              src={mainImage}
              alt="Business consulting"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="pointer-events-none absolute bottom-6 right-6">
            <span className="text-7xl font-bold tracking-widest text-white/15 sm:text-8xl lg:text-[120px]">
              CONSULTING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
