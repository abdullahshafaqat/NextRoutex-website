"use client";

import Image from "next/image";

import processImageOne from "@/assets/process-step-1.webp";
import processImageTwo from "@/assets/process-step-2.webp";
import processImageThree from "@/assets/process-step-3.webp";
import processAccent from "@/assets/process-accent.png";
import rightDecor from "@/assets/process-arrow.png";
import hoverAnimation from "@/assets/process-accent.png";

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
    <section className="relative overflow-hidden bg-[#f3f3f3] py-16 sm:py-20 lg:py-24">
      <Image
        src={rightDecor}
        alt=""
        className="pointer-events-none absolute right-0 top-1/2 h-auto w-72 -translate-y-1/2 object-contain"
      />

      <div className="relative mx-auto w-full max-w-[1080px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[480px] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#187d76] sm:text-[15px]">
            OUR PROCESS
          </p>
          <h3 className="mt-3 text-[34px] font-semibold leading-[1.12] text-[#151a24] sm:text-[42px]">
            Steps of Recruitment
            <br />
            work process
          </h3>
          <span className="mx-auto mt-5 block h-0.5 w-14 bg-[#187d76]" />
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {processSteps.map((step, index) => (
            <article key={step.id} className="text-center">
              <div className="group relative mx-auto h-[190px] w-[190px] overflow-hidden rounded-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="190px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
                <span className="pointer-events-none absolute bottom-2 left-4 text-[60px] font-normal leading-none text-white/90 transition-opacity duration-300 group-hover:opacity-0">
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
