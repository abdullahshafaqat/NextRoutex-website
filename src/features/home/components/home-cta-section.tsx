"use client";

import Image from "next/image";

import ctaImage from "@/assets/hero-slide-2.jpg";

function AwardIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="20" cy="15" r="8" />
      <path d="M20 23v8" />
      <path d="M14 31h12" />
      <path d="M12 19l-2 2" />
      <path d="M28 19l2 2" />
      <path d="M20 7v-2" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="8" y="6" width="24" height="20" rx="2" />
      <path d="M8 14h24" />
      <path d="M12 10h4" />
      <circle cx="26" cy="11" r="1.5" fill="currentColor" />
      <path d="M20 26v8" />
      <path d="M16 34l4-4 4 4" />
    </svg>
  );
}

export function HomeCtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[400px] sm:h-[450px] lg:h-[500px]">
        <Image
          src={ctaImage}
          alt="Business consultant"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0d7377]/35" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] items-center px-4 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px]">
                Looking for a First-Class
                <br />
                Business Consultant?
              </h2>
              <button className="mt-8 rounded-full border-2 border-transparent bg-[#0d7377] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-transparent">
                Request A Call Back
              </button>
            </div>

            <div className="flex flex-col gap-8 lg:items-end">
              <div className="flex items-center gap-4 text-white">
                <AwardIcon />
                <div>
                  <p className="text-4xl font-bold">500+</p>
                  <p className="text-sm opacity-90">Business advices given over 30 years</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white">
                <CertificateIcon />
                <div>
                  <p className="text-4xl font-bold">30+</p>
                  <p className="text-sm opacity-90">Business Excellence awards achieved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
