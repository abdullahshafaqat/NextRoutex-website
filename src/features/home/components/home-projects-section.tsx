"use client";

import Image from "next/image";
import { useState } from "react";

import projectImage1 from "@/assets/project-1.jpg";
import projectImage2 from "@/assets/project-2.webp";

const projects = [
  {
    image: projectImage1,
    category: "STRATEGY",
    title: "Digital business planning",
    description:
      "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son.",
  },
  {
    image: projectImage2,
    category: "PARTNERSHIP",
    title: "Business program management",
    description:
      "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son.",
  },
];

function ChevronLeftIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function HomeProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="bg-[#1a1d29] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[#0d7377]">
                POPULAR PROJECTS
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-[42px]">
                Our most recent
                <br />
                Completed Projects
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d7377] text-white transition-colors hover:bg-[#0a5c5e]"
              >
                <ChevronLeftIcon />
              </button>
              <span className="text-white">
                {currentIndex + 1}/{projects.length}
              </span>
              <button
                onClick={goToNext}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d7377] text-white transition-colors hover:bg-[#0a5c5e]"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] bg-white px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="relative -mt-12 grid grid-cols-1 gap-0 lg:grid-cols-2 lg:-mt-20">
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative bg-white p-8 shadow-lg sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0d7377]">
              {currentProject.category}
            </p>
            <h3 className="mt-3 text-2xl font-bold text-[#0d7377] sm:text-3xl">
              {currentProject.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              {currentProject.description}
            </p>
            <button className="group mt-10 inline-flex items-center font-semibold leading-none text-[#1a1a2e]">
              <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#1a1a2e]/30 transition-all duration-300 ease-out group-hover:border-[#187d76] group-hover:bg-[#187d76]">
                <span className="absolute text-2xl text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:opacity-100">
                  →
                </span>
              </span>
              <span className="-ml-4 text-lg transition-all duration-300 ease-out group-hover:ml-1 group-hover:text-[#187d76]">
                View Project
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
