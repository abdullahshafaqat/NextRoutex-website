"use client";

import Image from "next/image";

import testimonialImage from "@/assets/team-member-1.webp";

function StarIcon() {
  return (
    <svg className="h-4 w-4 fill-[#0d7377] text-[#0d7377]" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg className="h-10 w-10 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export function HomeTestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-[#0d7377]" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full sm:h-80 sm:w-80">
                <Image
                  src={testimonialImage}
                  alt="Testimonial"
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -right-2 top-8">
                <svg className="h-12 w-12 text-[#0d7377]" viewBox="0 0 50 50" fill="currentColor">
                  <path d="M45 10 L50 15 L45 20" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M40 5 L48 8 L42 12" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              The best service ever
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              &ldquo;Targeting consultation discover apartments. Indulgence off
              under folly death wrote cause her way spite. Plan upon yet way
              get cold spot its week. Almost do am or limits hearts. Resolve
              parties but why she shewing. She sang know now always
              remembering to the point.&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-6">
              <QuoteIcon />
              <div>
                <p className="font-bold text-[#1a1a2e]">Matthew J. Wyman</p>
                <p className="text-sm text-gray-500">Senior Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
