"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import slideOne from "@/assets/hero-slide-1.png";
import slideTwo from "@/assets/hero-slide-2.jpg";
import accentShape from "@/assets/hero-accent.png";
import fullLogo from "@/assets/full-logo.png";

type Slide = {
  id: number;
  eyebrow: string;
  title: string;
  cta: string;
  image: StaticImageData;
};

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "MEET CONSULTING",
    title: "Financial Analysis\nDeveloping Meeting.",
    cta: "Our Services",
    image: slideOne,
  },
  {
    id: 2,
    eyebrow: "COACHING & CONSULTING",
    title: "Strategies for\nEnduring Success",
    cta: "Our Services",
    image: slideTwo,
  },
];

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative isolate flex-1 overflow-hidden min-h-[calc(100vh-80px)]">
        {slides.map((slide, index) => (
          <Image
            key={slide.id}
            src={slide.image}
            alt={slide.eyebrow}
            fill
            sizes="100vw"
            priority={index === 0}
            className={`object-cover object-center transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-[#0e1724]/55" />

        <div className="pointer-events-none absolute inset-y-0 right-0 w-full max-w-225 opacity-14">
          <Image
            src={accentShape}
            alt="Decorative shape"
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-contain object-bottom-right"
          />
        </div>

        <div className="site-container relative z-10 flex min-h-[calc(100vh-88px)] w-full items-center py-0">
          <div className="w-full max-w-145 text-white">
            <p className="text-[18px] font-semibold tracking-wide text-white/90">{activeSlide.eyebrow}</p>
            <h1 className="mt-4 whitespace-pre-line text-[42px] font-semibold leading-[1.1] sm:text-[58px]">
              {activeSlide.title}
            </h1>

            <button className="group mt-10 inline-flex items-center font-semibold leading-none text-white">
              <span className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/55 transition-all duration-300 ease-out group-hover:border-white group-hover:bg-white">
                <span className="absolute text-5xl text-[#111827] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:opacity-100">
                  →
                </span>
              </span>
              <span className="-ml-6 text-5xl transition-all duration-300 ease-out group-hover:ml-1 sm:text-6xl">
                {activeSlide.cta}
              </span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              aria-label={`Go to slide ${slide.id}`}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? "w-10 bg-white" : "w-6 bg-white/40"
              }`}
            />
          ))}
        </div>
    </section>
  );
}
