"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import sidePhoto from "@/assets/13.jpg";
import decorGeom from "@/assets/17.webp";
import decorGeom from "@/assets/4-removebg-preview.png";
import signature from "@/assets/signature.webp";

const LOGO_GREEN = "#187d76";

function CertificateIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="26" height="20" rx="2" stroke={LOGO_GREEN} strokeWidth="2" />
      <path d="M11 14h16M11 19h12M11 24h14" stroke={LOGO_GREEN} strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="30" r="6" stroke={LOGO_GREEN} strokeWidth="2" />
      <path d="M34 24l1.4 2.8 3.1.5-2.2 2.2.5 3.1-2.8-1.5-2.8 1.5.5-3.1-2.2-2.2 3.1-.5L34 24z" stroke={LOGO_GREEN} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke={LOGO_GREEN} strokeWidth="2" />
      <path d="M10 24h28M24 10c4 4 6 9 6 14s-2 10-6 14c-4-4-6-9-6-14s2-10 6-14z" stroke={LOGO_GREEN} strokeWidth="2" strokeLinecap="round" />
      <circle cx="36" cy="13" r="4" stroke={LOGO_GREEN} strokeWidth="2" />
      <path d="M33.5 17.5c1.7-1.2 3.3-1.2 5 0" stroke={LOGO_GREEN} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function HomeConsultingSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number>(0);
  const wasInViewRef = useRef(false);
  const [hasUserScrolled, setHasUserScrolled] = useState(false);
  const [successCount, setSuccessCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setHasUserScrolled(true);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    if (!sectionNode) return;

    const resetCounts = () => {
      setSuccessCount(0);
      setClientCount(0);
    };

    const animateCounts = () => {
      const duration = 1250;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        setSuccessCount(Math.round(98 * eased));
        setClientCount(Math.round(120 * eased));

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const startAnimation = () => {
      cancelAnimationFrame(frameRef.current);
      resetCounts();
      animateCounts();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (!hasUserScrolled) return;

        if (entry.isIntersecting && !wasInViewRef.current) {
          wasInViewRef.current = true;
          startAnimation();
          return;
        }

        if (!entry.isIntersecting && wasInViewRef.current) {
          wasInViewRef.current = false;
          cancelAnimationFrame(frameRef.current);
          resetCounts();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionNode);

    if (hasUserScrolled) {
      const rect = sectionNode.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15;

      if (isVisible && !wasInViewRef.current) {
        wasInViewRef.current = true;
        startAnimation();
      }
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [hasUserScrolled]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#f3f3f3] py-20 sm:py-24 lg:py-28">

      <div className="site-container relative grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-155">
          <p className="text-2xl font-bold uppercase tracking-wide">
            <span className="text-[#187d76]">FEEL VALUED</span>
            <span className="text-[#187d76]"> &amp; REWARDED</span>
          </p>

          <h2 className="mt-5 text-5xl font-semibold leading-[1.16] text-[#0b1220] sm:text-6xl">
            Finance Consulting For
            Challenging Times
          </h2>

          <p className="mt-7 max-w-145 text-lg leading-9 text-[#4e5562]">
            We work to understand your issues and are driven to ask better questions in
            the pursuit of making work. Me contained explained my education. Vulgar as
            hearts by garret. Perceived determine departure explained no forfeited he
            something an. Contrasted dissimilar get joy you instrument out reasonably.
            Again keep.
          </p>

          <div className="mt-9 flex items-center gap-7">
            <div className="pr-7">
              <p className="text-3xl font-semibold text-[#0f172a]">Malik Suleman</p>
              <p className="mt-1 text-base font-medium text-[#4b5563]">CEO &amp; Founder</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-115 lg:ml-auto">
          <div className="relative ml-auto" style={{ width: 420, height: 520 }}>
            <Image
              src={sidePhoto}
              alt="Consulting professional"
              fill
              sizes="(max-width: 1024px) 85vw, 420px"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-7.5 -left-12.5 w-72 bg-[#151b2a] px-8 py-7 text-white shadow-2xl">
            <div className="flex items-center gap-5">
              <CertificateIcon />
              <div>
                <p className="flex items-end gap-1 text-[50px] font-semibold leading-none tracking-tight [font-variant-numeric:tabular-nums]">
                  <span>{successCount}</span>
                  <span className="text-[42px]">%</span>
                </p>
                <p className="mt-1 text-sm font-semibold text-white/85">Consulting Success</p>
              </div>
            </div>

            <div className="my-6 h-px bg-white/20" />

            <div className="flex items-center gap-5">
              <GlobeIcon />
              <div>
                <p className="flex items-end gap-1 text-[50px] font-semibold leading-none tracking-tight [font-variant-numeric:tabular-nums]">
                  <span>{clientCount}</span>
                  <span className="text-[42px]">+</span>
                </p>
                <p className="mt-1 text-sm font-semibold text-white/85">Worldwide Clients</p>
              </div>
            </div>
          </div>

          <Image
            src={decorGeom}
            alt=""
            className="pointer-events-none absolute -top-24 -left-16 h-auto w-56"
          />
        </div>
      </div>
    </section>
  );
}
