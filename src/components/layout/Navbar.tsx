"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  {/* Di dalam Navbar.tsx */}


  // Fungsi untuk membuka menu
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  // Fungsi untuk menutup menu dengan jeda (delay)
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Jeda 300ms (0.3 detik) sebelum menutup
  };

  return (
    <nav className="fixed w-full z-50">

      
      <div className="bg-dbl-blue/90 backdrop-blur-md border-b-4 border-primary relative">
        <div className="container mx-auto px-4 flex items-center justify-center h-16 md:h-20 relative">
          
          {/* Menu Kiri */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-8 pr-20 text-white font-bold text-xs uppercase tracking-wider">
            
            {/* Dropdown WB ACADEMY */}
            <div 
              className="relative py-4" // Memberikan area hover yang lebih luas
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="font-montserrat text-[12px] tracking-wide hover:text-dbl-orange transition uppercase">
                WB Academy
                <span className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute left-0 mt-4 w-48 bg-white shadow-xl border-t-2 border-dbl-orange transition-all duration-500 ease-in-out
                ${isDropdownOpen 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-4'}`}
              >
                <Link href="/sponsor" className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-100 transition-colors">Sponsor</Link>
                <Link href="/coach" className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-100 transition-colors">Our Coach</Link>
                <Link href="/location" className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-100 transition-colors">Location</Link>
                <Link href="/contact" className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors">Contact</Link>
              </div>
            </div>

            <Link href="/news" className="font-montserrat text-[12px] hover:text-dbl-orange transition">News</Link>
          </div>

          {/* Logo Tengah (Tetap Absolute) */}
  <div className="absolute left-1/2 -translate-x-1/2 top-0 pt-2 z-10">
    {/* <div className="bg-white p-2 rounded-b-xl shadow-lg border-x-2 border-b-2 border-dbl-blue"> */}
      <Link href="/">
        <Image 
          src="/image/logo-wirabhakti.png"
          alt="Wirabhakti Logo"
          width={150}
          height={150}
          priority
          className="object-contain"
        />
      </Link>
    {/* </div> */}
  </div>

          {/* Menu Kanan */}
          <div className="hidden md:flex flex-1 justify-start items-center gap-8 pl-20 text-white font-bold text-xs uppercase tracking-wider">
            <Link href="/gallery" className="font-montserrat text-[12px] hover:text-dbl-orange transition">Gallery</Link>
            <Link href="#programs" className="font-montserrat text-[12px] hover:text-dbl-orange transition">Our Programs</Link>
            
            <Link href="/login" className="flex items-center gap-2 border-l pl-6 border-white/30 ml-4">
               <span className="bg-white p-1.5 rounded-full text-sm">👤</span>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}