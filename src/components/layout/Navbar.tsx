"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  // Desktop dropdown handlers
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsDropdownOpen(false), 300);
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="bg-secondary backdrop-blur-md border-b-4 border-primary relative">
        <div className="container mx-auto px-4 flex items-center justify-between md:justify-center h-16 md:h-20 relative">

          {/* ── Mobile Hamburger (left) ── */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden relative z-20 w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          {/* ── Desktop Menu Left ── */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-8 pr-20 text-white font-bold text-xs uppercase tracking-wider">
            {/* Dropdown WB ACADEMY */}
            <div
              className="relative py-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="font-montserrat text-[12px] tracking-wide hover:text-dbl-orange transition uppercase cursor-pointer">
                WB Academy
                <span className={`ml-1 inline-block transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}>▼</span>
              </button>
              <div className={`absolute left-0 mt-4 w-48 bg-white shadow-xl border-t-2 border-dbl-orange transition-all duration-500 ease-in-out
                ${isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}`}
              >
                <Link href="#partners" className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-100 transition-colors">Partners</Link>
                <Link href="/coach" className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-100 transition-colors">Our Coach</Link>
                <Link href="/location" className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-100 transition-colors">Location</Link>
                <Link href="/" className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors">Contact</Link>
              </div>
            </div>
            <Link href="/news" className="font-montserrat text-[12px] hover:text-dbl-orange transition">News</Link>
          </div>

          {/* ── Center Logo ── */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 pt-1 md:pt-2 z-10">
            <Link href="/">
              <Image
                src="/image/logo-wirabhakti.png"
                alt="Wirabhakti Logo"
                width={150}
                height={150}
                priority
                className="object-contain w-[80px] h-[80px] md:w-[150px] md:h-[150px]"
              />
            </Link>
          </div>

          {/* ── Mobile Login (right) ── */}
          <Link
            href="https://app.wirabhakti.my.id/login"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden relative z-20"
          >
            <span className="bg-white p-1.5 rounded-full text-sm">👤</span>
          </Link>

          {/* ── Desktop Menu Right ── */}
          <div className="hidden md:flex flex-1 justify-start items-center gap-8 pl-20 text-white font-bold text-xs uppercase tracking-wider">
            <Link href="/gallery" className="hover:text-dbl-orange transition">Gallery</Link>
            <Link href="/programs" className="font-montserrat text-[12px] hover:text-dbl-orange transition">Our Programs</Link>
            <Link href="https://app.wirabhakti.my.id/login" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-l pl-6 border-white/30 ml-4">
              <span className="bg-white p-1.5 rounded-full text-sm">👤</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu Fullscreen Overlay ── */}
      <div className={`fixed inset-0 bg-secondary z-40 md:hidden transition-all duration-500 ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className={`flex flex-col items-center justify-center h-full gap-2 transition-all duration-500 ${isMobileOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}>
          
          <Link href="/" onClick={() => setIsMobileOpen(false)} className="text-white font-black text-2xl uppercase tracking-widest py-3 hover:text-dbl-orange transition-colors">
            Home
          </Link>

          {/* WB Academy Sub-menu */}
          <button
            onClick={() => setIsMobileSubOpen(!isMobileSubOpen)}
            className="text-white font-black text-2xl uppercase tracking-widest py-3 hover:text-dbl-orange transition-colors flex items-center gap-2 cursor-pointer"
          >
            WB Academy
            <span className={`text-sm transition-transform duration-300 ${isMobileSubOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${isMobileSubOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="flex flex-col items-center gap-1 pb-2">
              <Link href="#partners" onClick={() => setIsMobileOpen(false)} className="text-white/70 font-bold text-sm uppercase tracking-wider py-2 hover:text-dbl-orange transition-colors">Partners</Link>
              <Link href="/coach" onClick={() => setIsMobileOpen(false)} className="text-white/70 font-bold text-sm uppercase tracking-wider py-2 hover:text-dbl-orange transition-colors">Our Coach</Link>
              <Link href="/location" onClick={() => setIsMobileOpen(false)} className="text-white/70 font-bold text-sm uppercase tracking-wider py-2 hover:text-dbl-orange transition-colors">Location</Link>
              <Link href="/" onClick={() => setIsMobileOpen(false)} className="text-white/70 font-bold text-sm uppercase tracking-wider py-2 hover:text-dbl-orange transition-colors">Contact</Link>
            </div>
          </div>

          <Link href="/news" onClick={() => setIsMobileOpen(false)} className="text-white font-black text-2xl uppercase tracking-widest py-3 hover:text-dbl-orange transition-colors">
            News
          </Link>
          <Link href="/gallery" onClick={() => setIsMobileOpen(false)} className="text-white font-black text-2xl uppercase tracking-widest py-3 hover:text-dbl-orange transition-colors">
            Gallery
          </Link>
          <Link href="/programs" onClick={() => setIsMobileOpen(false)} className="text-white font-black text-2xl uppercase tracking-widest py-3 hover:text-dbl-orange transition-colors">
            Programs
          </Link>

          {/* Mobile CTA */}
          <Link
            href="https://app.wirabhakti.my.id/apply"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileOpen(false)}
            className="mt-6 bg-dbl-orange text-white font-black py-3 px-10 rounded-full uppercase tracking-widest text-sm hover:bg-primary transition-colors"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
}