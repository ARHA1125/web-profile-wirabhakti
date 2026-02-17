import Partners from "@/src/components/home/Partners";
import Hero from "../src/components/home/Hero";
import ProgramCard from "../src/components/home/ProgramCard";
import { PROGRAMS } from "../src/constants/Index";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stats Section (Ringkasan Cepat) */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary font-black uppercase">
          <div>
            <div className="text-4xl">500+</div>
            <div className="text-sm">Active Students</div>
          </div>
          <div>
            <div className="text-4xl">10+</div>
            <div className="text-sm">Pro Coaches</div>
          </div>
          <div>
            <div className="text-4xl">5</div>
            <div className="text-sm">Locations</div>
          </div>
          <div>
            <div className="text-4xl">20+</div>
            <div className="text-sm">Trophies Won</div>
          </div>
        </div>
      </section>

      {/* 3. Programs Section */}
      <section id="programs" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h3 className="text-5xl font-bold mt-2 text-secondary">Pilih Program Kamu</h3>
            <div className="w-24 h-2 bg-primary mx-auto mt-4"></div>
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