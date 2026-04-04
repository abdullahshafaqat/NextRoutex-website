"use client";

import Image from "next/image";
import Link from "next/link";

import servicesBg from "@/assets/services-hero-bg.jpg";
import aboutUsTruck from "@/assets/about-us1.png";

function HomeIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );
}

export function ServicesHero() {
  return (
    <section className="relative">
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src={servicesBg}
          alt="Services Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        <div className="absolute -right-10 top-0 h-full w-2/3 opacity-30">
          <Image
            src={aboutUsTruck}
            alt=""
            fill
            className="object-contain object-right-top"
          />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <nav className="mt-4 flex items-center gap-2 text-white text-lg font-bold">
            <Link href="/" className="flex items-center gap-1">
              <HomeIcon />
              <span>Home</span>
            </Link>
            <span className="text-white/60">›</span>
            <span className="text-[#0d7377]">Services</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
