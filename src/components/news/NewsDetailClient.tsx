"use client";

import { useState, useEffect } from "react";

// ── Share Button Icons (inline SVG for zero-dependency) ──

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

// ── Main Client Component ──

export default function NewsDetailClient({ title }: { title: string }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shareOnWhatsApp = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${title} — Wirabhakti Basket Akademi`);
    window.open(`https://wa.me/?text=${text}%20${url}`, "_blank");
  };

  const shareOnX = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const input = document.createElement("input");
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ── Reading Progress Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-black/10">
        <div
          className="h-full bg-gradient-to-r from-dbl-orange to-primary transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ── Floating Share Sidebar (desktop) ── */}
      <aside
        className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3 transition-all duration-500 ${
          scrollProgress > 5 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 text-center">
          Share
        </span>
        <button
          onClick={shareOnWhatsApp}
          className="w-11 h-11 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Share on WhatsApp"
        >
          <WhatsAppIcon />
        </button>
        <button
          onClick={shareOnX}
          className="w-11 h-11 rounded-full bg-secondary hover:bg-secondary/80 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Share on X"
        >
          <XIcon />
        </button>
        <button
          onClick={copyLink}
          className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer ${
            copied
              ? "bg-green-500 text-white"
              : "bg-white text-secondary border border-gray-200 hover:border-dbl-orange hover:text-dbl-orange"
          }`}
          aria-label="Copy link"
        >
          {copied ? <CheckIcon /> : <LinkIcon />}
        </button>
      </aside>

      {/* ── Mobile Share Bar ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 flex items-center justify-center gap-4 transition-all duration-500 ${
          scrollProgress > 5 ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mr-2">
          Share
        </span>
        <button
          onClick={shareOnWhatsApp}
          className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
          aria-label="Share on WhatsApp"
        >
          <WhatsAppIcon />
        </button>
        <button
          onClick={shareOnX}
          className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
          aria-label="Share on X"
        >
          <XIcon />
        </button>
        <button
          onClick={copyLink}
          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all cursor-pointer ${
            copied
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-secondary hover:text-dbl-orange"
          }`}
          aria-label="Copy link"
        >
          {copied ? <CheckIcon /> : <LinkIcon />}
        </button>
      </div>

      {/* ── Back to Top Button ── */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-24 lg:bottom-8 z-50 w-12 h-12 rounded-full bg-dbl-orange hover:bg-primary text-white flex items-center justify-center shadow-xl transition-all duration-500 cursor-pointer ${
          showBackToTop
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUpIcon />
      </button>
    </>
  );
}
