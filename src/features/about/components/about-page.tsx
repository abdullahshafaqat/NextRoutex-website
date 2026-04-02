import Image from "next/image";

import aboutUs2 from "@/assets/about-us2.jpg";
import team1 from "@/assets/team-member-1.webp";
import team2 from "@/assets/team-member-2.webp";
import team3 from "@/assets/team-member-3.webp";
import team4 from "@/assets/team-member-4.webp";
import { SiteHeader } from "@/components/layout/site-header";
import { HomeFooter } from "@/features/home/components/home-footer";

import { AboutHero } from "./about-hero";

const teamMembers = [
  {
    image: team1,
    role: "CEO & Founder",
    name: "Md Sohag",
  },
  {
    image: team2,
    role: "Product Manager",
    name: "Kevin Martin",
  },
  {
    image: team3,
    role: "Financial Consultant",
    name: "Sarah Albert",
  },
  {
    image: team4,
    role: "Developer",
    name: "Aleesha Brown",
  },
];

function BackgroundDecoration() {
  return (
    <svg
      viewBox="0 0 1200 600"
      fill="none"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
      aria-hidden="true"
    >
      <path
        d="M0,300 Q300,100 600,300 T1200,300"
        stroke="#e5e7eb"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M0,350 Q300,150 600,350 T1200,350"
        stroke="#e5e7eb"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M0,400 Q300,200 600,400 T1200,400"
        stroke="#e5e7eb"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function AboutPage() {
  return (
    <>
      <SiteHeader />
      <AboutHero />
      
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xl font-bold uppercase tracking-wide text-[#0d7377]">
                About Us
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#1a1d29] sm:text-4xl lg:text-5xl">
                We Are Trusted Logistics Company
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                We provide the best logistics services for your business needs. 
                Our team of experts ensures that your goods are delivered safely 
                and on time to their destination.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                With years of experience in the industry, we have built a reputation 
                for reliability and excellence in logistics and transportation services.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                <Image
                  src={aboutUs2}
                  alt="Logistics Truck"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TEAM MEMBERS SECTION - HIDDEN
      <section className="relative overflow-hidden bg-[#f9f9f9] py-20 sm:py-24 lg:py-28">
        <BackgroundDecoration />

        <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[480px] text-center">
            <p className="text-xl font-bold uppercase tracking-wide text-[#0d7377]">
              TEAM MEMBERS
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#1a1a2e] sm:text-4xl lg:text-[42px]">
              Meet our experts
            </h2>
            <span className="mx-auto mt-4 block h-0.5 w-12 bg-[#e63946]" />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 bg-[#0d7377] py-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a href="#" className="text-white hover:text-white/80">
                      <FacebookIcon />
                    </a>
                    <a href="#" className="text-white hover:text-white/80">
                      <TwitterIcon />
                    </a>
                    <a href="#" className="text-white hover:text-white/80">
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <h3 className="mt-1 text-lg font-semibold text-[#1a1a2e]">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
      
      <HomeFooter />
    </>
  );
}
