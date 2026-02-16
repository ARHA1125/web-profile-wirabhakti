"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50">
      {/* Garis Orange di paling atas */}
      {/* <div className="h-1 bg-dbl-orange w-full" /> */}
      
      {/* Main Navbar Container */}
      <div className="bg-dbl-blue/90 backdrop-blur-md border-b-4 border-primary relative">
        <div className="container mx-auto px-4 flex items-center justify-center h-16 md:h-20 relative">
  
  {/* Menu Kiri - Gunakan justify-end agar menempel ke arah logo */}
  <div className="hidden md:flex flex-1 justify-end items-center gap-8 pr-20 text-white font-bold text-xs uppercase tracking-wider">
    <Link href="/" className="hover:text-dbl-orange transition">Home</Link>
    <Link href="/news" className="hover:text-dbl-orange transition">News</Link>
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

  {/* Menu Kanan - Gunakan justify-start agar menempel ke arah logo */}
  <div className="hidden md:flex flex-1 justify-start items-center gap-8 pl-20 text-white font-bold text-xs uppercase tracking-wider">
    <Link href="/gallery" className="hover:text-dbl-orange transition">Gallery</Link>
    <Link href="#programs" className="hover:text-dbl-orange transition">Programs</Link>
    
    {/* Icon Profile */}
    <Link href="/login" className="flex items-center gap-2 border-l pl-6 border-white/30 ml-4">
       <span className="bg-white/20 p-1.5 rounded-full text-sm">👤</span>
    </Link>
  </div>
        </div>
      </div>
    </nav>
  );
}