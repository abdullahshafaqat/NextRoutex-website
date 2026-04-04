"use client";

import Image from "next/image";

import footerBg from "@/assets/footer.png";
import logo from "@/assets/logo.png";

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

function PinterestIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
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

export function HomeFooter() {
  return (
    <footer className="relative bg-[#1a1d29] overflow-hidden">
      <div className="absolute -top-12 -right-12 w-[400px] h-[400px] opacity-150">
        <Image
          src={footerBg}
          alt=""
          fill
          className="object-contain object-right-top"
        />
      </div>
      
      <div className="site-container relative py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="relative h-12 w-12">
                <Image
                  src={logo}
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-lg leading-relaxed text-gray-400 font-medium">
              Excellence decisively nay man twins impression maximum contrasted remarkably is perfect.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-white">Our Company</h4>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors font-medium">
                  Company Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors font-medium">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors font-medium">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors font-medium">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-white">Our Services</h4>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors font-medium">
                  Manage investment
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors font-medium">
                  Business planning
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors font-medium">
                  Financial advices
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors font-medium">
                  Tax strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors font-medium">
                  Insurance strategy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-white">Newsletter</h4>
            <p className="mt-4 text-lg text-gray-400 font-medium">
              Join our subscribers list to get the latest news and special offers.
            </p>
            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-transparent border border-gray-600 px-4 py-3 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0d7377] font-medium"
              />
              <button className="bg-[#0d7377] px-6 py-3 text-lg font-bold text-white hover:bg-[#0a5c5e] transition-colors">
                SUBSCRIBE
              </button>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 text-white transition-colors hover:bg-[#0d7377]"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 text-white transition-colors hover:bg-[#0d7377]"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 text-white transition-colors hover:bg-[#0d7377]"
              >
                <PinterestIcon />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 text-white transition-colors hover:bg-[#0d7377]"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="site-container py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              © Copyright 2026. All Rights Reserved by <span className="text-white font-semibold">NextRouteX</span>
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
