"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../constants/Index";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-secondary py-4 shadow-xl" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-black text-2xl tracking-tighter italic">
          WIRABHAKTI<span className="text-primary">BASKET</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white font-bold hover:text-primary transition-colors uppercase text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button className="bg-primary text-secondary px-5 py-2 rounded-full font-bold text-sm uppercase">
          Join Class
        </button>
      </div>
    </nav>
  );
}