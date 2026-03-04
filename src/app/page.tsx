import Partners from "@/src/components/home/Partners";
import Hero from "../components/home/Hero";
import ProgramCard from "../components/home/ProgramCard";
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
      <section id="programs" className="py-24 bg-white text-white">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-center mb-16">
          <div className="w-full h-[2px] bg-dbl-orange"></div>
          <div className="absolute bg-dbl-orange text-white font-montserrat font-bold px-8 py-2 rounded-full uppercase text-xs tracking-[0.2em]">
            Our Programs
          </div>
        </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PROGRAMS.map((item) => (
              <ProgramCard key={item.title} {...item} />
            ))}
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