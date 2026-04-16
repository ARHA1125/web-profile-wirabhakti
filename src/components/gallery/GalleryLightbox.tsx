"use client";

import { useState, useEffect, useCallback } from "react";
import NewsImage from "../news/NewsImage";
import type { GalleryPhoto } from "../../types/gallery";

// ── Icons ──

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

// ── Lightbox Component ──

export default function GalleryLightbox({ photos }: { photos: GalleryPhoto[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, goNext, goPrev]);

  return (
    <>
      {/* ── Photo Grid ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {photos.map((photo, idx) => (
          <button
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-dbl-orange"
          >
            <NewsImage
              src={photo.src}
              alt={photo.alt}
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(min-width: 768px) 33vw, 50vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#000a2a" strokeWidth={2} className="w-5 h-5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Caption on hover */}
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-bold truncate">{photo.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* ── Lightbox Modal ── */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <CloseIcon />
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 z-10 text-white/70 font-black text-sm uppercase tracking-widest">
            <span className="text-dbl-orange">{currentIndex + 1}</span>
            <span className="mx-1">/</span>
            <span>{photos.length}</span>
          </div>

          {/* Previous button */}
          <button
            onClick={goPrev}
            className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeftIcon />
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-16 md:mx-24">
            <NewsImage
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>

          {/* Next button */}
          <button
            onClick={goNext}
            className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRightIcon />
          </button>

          {/* Caption at bottom */}
          {photos[currentIndex].caption && (
            <div className="absolute bottom-8 left-0 right-0 text-center z-10">
              <p className="text-white font-bold text-sm md:text-base bg-black/50 backdrop-blur-sm inline-block px-6 py-3 rounded-full">
                {photos[currentIndex].caption}
              </p>
            </div>
          )}

          {/* Thumbnail strip */}
          <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2 max-w-[80vw] overflow-x-auto px-4 py-2">
            {photos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "ring-2 ring-dbl-orange scale-110 opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                 <NewsImage
                   src={photo.src}
                   alt={photo.alt}
                   className="object-cover"
                   sizes="64px"
                 />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
