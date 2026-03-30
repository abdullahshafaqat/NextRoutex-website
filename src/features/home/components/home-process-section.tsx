"use client";

import Image from "next/image";

import processImageOne from "@/assets/3.webp";
import processImageTwo from "@/assets/6.webp";
import processImageThree from "@/assets/5.webp";
import processAccent from "@/assets/14.84d35d29.png";
import hoverAnimation from "@/assets/14.84d35d29.png";

type ProcessStep = {
  id: string;
  title: string;
  description: string;
  image: typeof processImageOne;
};

const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Differentiate from the competition",
    description: "Capitalize on low hanging fruit to identify a ballpark value added.",
    image: processImageOne,
  },
  {
    id: "02",
    title: "Target the right people effectively",
    description: "Capitalize on low hanging fruit to identify a ballpark value added.",
    image: processImageTwo,
  },
  {
    id: "03",
    title: "Communicate your story consistently",
    description: "Capitalize on low hanging fruit to identify a ballpark value added.",
    image: processImageThree,
  },
];

export function HomeProcessSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#e8e8e8] bg-[#f3f3f3] py-16 sm:py-20 lg:py-24">
      {/* Red arrow shape - outer */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 bg-[#ec0000]"
        style={{
          width: "280px",
          height: "600px",
          clipPath: "polygon(100% 0, 100% 100%, 0% 50%)",
        }}
      />
      {/* Dark blue arrow shape - middle */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 bg-[#161b2a]"
        style={{
          width: "220px",
          height: "480px",
          clipPath: "polygon(100% 0, 100% 100%, 0% 50%)",
        }}
      />
      {/* Light gray arrow shape - inner (creates the layered effect) */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 bg-[#f3f3f3]"
        style={{
          width: "160px",
          height: "360px",
          clipPath: "polygon(100% 0, 100% 100%, 0% 50%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1080px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[480px] text-center">
          <p className="text-xs font-bold uppercase tracking-wide">
            <span className="text-[#ec0000]">OUR</span>
            <span className="text-[#3f58db]"> PROCESS</span>
          </p>
          <h3 className="mt-3 text-[42px] font-semibold leading-[1.1] text-[#151a24] sm:text-[50px]">
            Steps of Recruitment
            <br />
            work process
          </h3>
          <span className="mx-auto mt-5 block h-0.5 w-14 bg-[#ec0000]" />
        </div>

        <div className="mx-auto mt-12 grid max-w-[880px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {processSteps.map((step, index) => (
            <article key={step.id} className="text-center">
              <div className="group relative mx-auto h-[152px] w-[152px] overflow-hidden rounded-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="152px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover animation overlay */}
                <Image
                  src={hoverAnimation}
                  alt=""
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {index === 1 ? (
                  <Image
                    src={processAccent}
                    alt=""
                    className="pointer-events-none absolute -bottom-3 -left-2 h-auto w-24"
                  />
                ) : null}
                <span className="pointer-events-none absolute bottom-1 left-4 text-[52px] font-normal leading-none text-white/90 transition-opacity duration-300 group-hover:opacity-0">
                  {step.id}
                </span>
              </div>

              <h4 className="mx-auto mt-5 max-w-[200px] text-[15px] font-semibold leading-[1.3] text-[#1b1f29]">
                {step.title}
              </h4>
              <div className="mx-auto mt-4 h-px w-56 bg-[#dbdbdb]" />
              <p className="mx-auto mt-4 max-w-[240px] text-[13px] leading-6 text-[#707581]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}