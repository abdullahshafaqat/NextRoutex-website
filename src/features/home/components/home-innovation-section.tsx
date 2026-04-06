"use client";

import Image from "next/image";

import dashboardImage from "@/assets/innovation-trucking-software.png";
import truckingImage from "@/assets/hero-trucking-road-hd.jpg";

const features = [
  {
    title: "Real-Time Fleet Visibility",
    description:
      "Track vehicles, drivers, and trip status in one live dashboard so operations teams can act faster and avoid delays.",
  },
  {
    title: "Reliable Support",
    description:
      "Get quick help from onboarding to daily operations so your team stays productive and your logistics never stop.",
  },
];

export function HomeInnovationSection() {
  return (
    <section className="relative overflow-hidden bg-[#1e2230]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative px-8 py-20 sm:px-16 sm:py-24 lg:px-20 lg:py-28">
          <div className="relative z-10 ml-16 max-w-[520px]">
            <h2 className="text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-[52px]">
              Lead the next era of
              logistics technology
            </h2>

            <div className="mt-12 space-y-10">
              {features.map((feature) => (
                <div key={feature.title} className="border-l-[3px] border-[#187d76] pl-6">
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
              src={truckingImage}
              alt="Truck on the highway"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[72%_center]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,15,27,0.72)_0%,rgba(10,15,27,0.2)_45%,rgba(10,15,27,0.05)_100%)]" />
          </div>

          <div className="absolute bottom-8 left-[22%] right-6 z-10 sm:bottom-10 sm:left-[24%] lg:left-[18%]">
            <div className="relative ml-auto w-full max-w-[430px] overflow-hidden rounded-[20px] border border-white/15 bg-white shadow-[0_26px_80px_rgba(15,23,42,0.45)]">
              <Image
                src={dashboardImage}
                alt="Trucking software dashboard"
                width={1400}
                height={900}
                sizes="(max-width: 1024px) 80vw, 430px"
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-6 right-6">
            <span className="text-7xl font-bold tracking-widest text-white/15 sm:text-8xl lg:text-[120px]">
              TMS ERP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
