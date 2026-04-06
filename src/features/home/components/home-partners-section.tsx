"use client";

import Image from "next/image";

import numberEight from "@/assets/process-step-1.jpg";
import numberZero from "@/assets/hero-slide-2.jpg";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.webp";
import partnerLogo3 from "@/assets/partner-logo-3.webp";
import partnerLogo4 from "@/assets/partner-logo-4.webp";
import partnerLogo5 from "@/assets/partner-logo-5.webp";
import partnerLogo6 from "@/assets/partner-logo-6.webp";
import worldMapImage from "@/assets/map.jpg";

const partners = [
  { name: "Partner1", image: partnerLogo1 },
  { name: "Partner2", image: partnerLogo2 },
  { name: "Partner3", image: partnerLogo3 },
  { name: "Partner4", image: partnerLogo4 },
  { name: "Partner5", image: partnerLogo5 },
  { name: "Partner6", image: partnerLogo6 },
];

function WorldMap() {
  return (
    <Image
      src={worldMapImage}
      alt="World Map"
      fill
      className="object-contain opacity-60"
      aria-hidden="true"
    />
  );
}

export function HomePartnersSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-96 w-full">
            <WorldMap />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="relative flex items-end">
                <div className="relative h-56 w-32 overflow-hidden sm:h-72 sm:w-52">
                  <span
                    className="absolute inset-0 flex items-center justify-center text-[180px] font-bold leading-none text-[#1a1a2e] sm:text-[240px]"
                    style={{
                      backgroundImage: `url(${numberEight.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    8
                  </span>
                </div>
                <div className="relative -ml-6 h-56 w-32 overflow-hidden sm:-ml-8 sm:h-72 sm:w-52">
                  <span
                    className="absolute inset-0 flex items-center justify-center text-[180px] font-bold leading-none text-[#1a1a2e] sm:text-[240px]"
                    style={{
                      backgroundImage: `url(${numberZero.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    0
                  </span>
                </div>
              </div>
              <p className="mt-2 text-2xl font-semibold text-[#1a1a2e] sm:text-3xl">
                Partners in world wide
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`flex h-24 items-center justify-center ${
                  index % 3 !== 2 ? "border-r border-gray-300" : ""
                } ${index < 3 ? "border-b border-gray-300" : ""}`}
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={100}
                  height={60}
                  className="h-auto w-auto max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
