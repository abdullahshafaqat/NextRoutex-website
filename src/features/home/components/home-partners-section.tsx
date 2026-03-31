"use client";

import Image from "next/image";

import numberEight from "@/assets/process-step-1.webp";
import numberZero from "@/assets/hero-slide-2.jpg";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.webp";
import partnerLogo3 from "@/assets/partner-logo-3.webp";
import partnerLogo4 from "@/assets/partner-logo-4.webp";
import partnerLogo5 from "@/assets/partner-logo-5.webp";
import partnerLogo6 from "@/assets/partner-logo-6.webp";

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
    <svg
      viewBox="0 0 800 400"
      fill="none"
      className="absolute inset-0 h-full w-full opacity-40"
      aria-hidden="true"
    >
      <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="2" fill="#6b7280" />
      </pattern>
      <rect width="800" height="400" fill="url(#dots)" />
      <path
        d="M150,200 Q200,150 250,180 T350,160 T450,180 T550,150 T650,170"
        stroke="#4b5563"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100,250 Q180,220 260,240 T400,230 T520,250 T620,220 T720,240"
        stroke="#4b5563"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M120,150 Q180,120 240,140 T360,130 T480,150 T580,130 T680,140"
        stroke="#6b7280"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function HomePartnersSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <WorldMap />

            <div className="relative flex items-end gap-2">
              <div className="relative h-32 w-24 overflow-hidden sm:h-40 sm:w-32">
                <span
                  className="absolute inset-0 flex items-center justify-center text-[120px] font-bold leading-none text-[#1a1a2e] sm:text-[160px]"
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
              <div className="relative h-32 w-24 overflow-hidden sm:h-40 sm:w-32">
                <span
                  className="absolute inset-0 flex items-center justify-center text-[120px] font-bold leading-none text-[#1a1a2e] sm:text-[160px]"
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

            <p className="relative mt-4 text-2xl font-semibold text-[#1a1a2e] sm:text-3xl">
              Partners in world wide
            </p>
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
