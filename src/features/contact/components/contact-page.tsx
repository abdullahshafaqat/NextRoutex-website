"use client";

import Image from "next/image";
import { Send } from "lucide-react";

import contactImage from "@/assets/contact1.png";
import { SiteHeader } from "@/components/layout/site-header";
import { HomeFooter } from "@/features/home/components/home-footer";

import { ContactHero } from "./contact-hero";

function ContactSection() {
  return (
    <section className="bg-white py-12 font-sans sm:py-14 lg:py-16">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-start">
            <p className="text-xl font-bold uppercase tracking-widest text-[#0d7377]">Contact Us</p>
            <h2 className="mt-2 text-4xl font-bold text-[#1a1d29]">Let&apos;s Discuss Your Project</h2>
            <p className="mt-3 text-gray-500 max-w-md">Ready to take your business to the next level? Fill out the form below and our team will reach out to you shortly.</p>
            
            <div className="relative mt-6 h-[190px] w-[220px]">
              <Image
                src={contactImage}
                alt="Contact"
                fill
                className="object-contain object-left-top"
              />
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div className="group relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-base text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#0d7377] focus:bg-white focus:shadow-lg focus:shadow-[#0d7377]/10"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-base text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#0d7377] focus:bg-white focus:shadow-lg focus:shadow-[#0d7377]/10"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-base text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#0d7377] focus:bg-white focus:shadow-lg focus:shadow-[#0d7377]/10"
                />
              </div>
              <textarea
                placeholder="Your Message *"
                rows={3}
                className="w-full resize-none border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-base text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#0d7377] focus:bg-white focus:shadow-lg focus:shadow-[#0d7377]/10"
              />

              <button
                type="submit"
                className="w-full bg-[#0d7377] px-6 py-4 text-base font-bold text-white transition-all hover:bg-[#0a5c5e] hover:shadow-lg hover:shadow-[#0d7377]/30 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <>
      <SiteHeader />
      <ContactHero />
      <ContactSection />
      <HomeFooter />
    </>
  );
}
