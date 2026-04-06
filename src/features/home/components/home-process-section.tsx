"use client";

import Image from "next/image";

import processImageOne from "@/assets/process-step-1.jpg";
import processImageTwo from "@/assets/process-step-2.jpg";
import processImageThree from "@/assets/process-step-3.jpg";

type ProcessStep = {
  id: string;
  title: string;
  description: string;
  image: typeof processImageOne;
};

const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Request Demo",
    description: "Click Request Demo and share your basic details.",
    image: processImageOne,
  },
  {
    id: "02",
    title: "Quick Setup Meeting",
    description: "Meet our team to set up users, drivers, and vehicles.",
    image: processImageTwo,
  },
  {
    id: "03",
    title: "Get Credentials",
    description: "Receive login access and start using NextRouteX.",
    image: processImageThree,
  },
];

export function HomeProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] py-16 sm:py-20 lg:py-24">
      <div className="site-container relative">
        <div className="mx-auto max-w-120 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#187d76] sm:text-[15px]">
            OUR PROCESS
          </p>
          <h3 className="mt-3 text-[34px] font-semibold leading-[1.12] text-[#151a24] sm:text-[42px]">
            Start with NextRouteX
            <br />
            3 Simple Steps
          </h3>
          <span className="mx-auto mt-5 block h-0.5 w-14 bg-[#187d76]" />
        </div>

        <div className="relative mt-10 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {processSteps.map((step, index) => (
            <article key={step.id} className="relative text-center">
              {index < processSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 top-24 z-20 hidden text-4xl font-bold leading-none text-[#187d76] sm:top-26 lg:top-28 lg:block"
                >
                  -&gt;
                </span>
              ) : null}

              <div className="group relative z-10 mx-auto h-57.5 w-57.5 overflow-hidden rounded-full sm:h-61.25 sm:w-61.25 lg:h-65 lg:w-65">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 230px, (max-width: 1024px) 245px, 260px"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 rounded-full bg-[#187d76]/0 transition-colors duration-300 ease-out group-hover:bg-[#187d76]/45" />
                <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[72px] font-extrabold leading-none text-white opacity-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition-opacity duration-300 ease-out group-hover:opacity-100 sm:text-[78px]">
                  {step.id}
                </span>
              </div>

              <h4 className="mx-auto mt-5 max-w-50 text-[15px] font-semibold leading-[1.3] text-[#1b1f29]">
                {step.title}
              </h4>
              <div className="mx-auto mt-4 h-px w-56 bg-[#dbdbdb]" />
              <p className="mx-auto mt-4 max-w-60 text-[13px] leading-6 text-[#707581]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
