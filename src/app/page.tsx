import Partners from "@/src/components/home/Partners";
import Hero from "../components/home/Hero";
import Image from "next/image";
import Link from "next/link";
import { PROGRAMS } from "../constants/Index";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stats Section (Ringkasan Cepat) */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary font-bold uppercase">
          <div>
            <div className="text-4xl">74+</div>
            <div className="text-sm">Active Students</div>
          </div>
          <div>
            <div className="text-4xl">3+</div>
            <div className="text-sm">Pro Coaches</div>
          </div>
          <div>
            <div className="text-4xl">1</div>
            <div className="text-sm">Locations</div>
          </div>
          <div>
            <div className="text-4xl">20+</div>
            <div className="text-sm">Trophies Won</div>
          </div>
        </div>
      </section>

      {/* 3. Programs Section */}
      <section id="programs" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="relative flex items-center justify-center mb-16">
            <div className="w-full h-[2px] bg-dbl-orange"></div>
            <div className="absolute bg-dbl-orange text-white font-montserrat font-bold px-8 py-2 rounded-full uppercase text-xs tracking-[0.2em]">
              Our Programs
            </div>
          </div>

          {/* Program cards — compact home layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Age badge on image */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-dbl-orange text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                      {prog.age}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-black text-secondary uppercase tracking-tight">
                    {prog.title}
                  </h3>
                  <p className="mt-3 text-gray-600 font-montserrat text-sm leading-relaxed flex-1">
                    {prog.desc}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mt-5">
                    {prog.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-dbl-orange rounded-full flex-shrink-0"></div>
                        <span className="text-xs font-bold text-secondary uppercase tracking-tight">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/programs"
                    className="mt-6 inline-flex items-center gap-2 font-black text-secondary border-b-2 border-dbl-orange text-sm uppercase tracking-wider hover:text-dbl-orange transition-colors group/link"
                  >
                    Lihat Detail
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View all programs button */}
          <div className="mt-14 text-center">
            <Link
              href="/programs"
              className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-black py-4 px-12 rounded-full transition-all uppercase tracking-widest text-sm"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>
      
      {/* 4. Partners Section */}
      <Partners />
      
      {/* 5. CTA Section */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 italic">Mulai Perjalananmu Menjadi Pro Sekarang!</h2>
          <a href="#" className="bg-white text-secondary font-bold py-4 px-10 rounded-full hover:bg-primary transition-colors">
            Hubungi Kami di WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}