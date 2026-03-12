import Image from "next/image";
import Link from "next/link";
import { PROGRAMS } from "../../constants/Index";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mb-10 md:mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-secondary uppercase tracking-tighter leading-[0.85]">
            CHOOSE YOUR <br />
            <span className="text-dbl-orange">DESTINY.</span>
          </h1>
        </div>

        {/* Programs List */}
        <div className="space-y-12">
          {PROGRAMS.map((prog) => (
            <div 
              key={prog.id}
              className="group relative flex flex-col lg:flex-row bg-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative w-full lg:w-1/2 h-[250px] md:h-[350px] lg:h-auto overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-16 flex flex-col justify-center">
                <span className="text-dbl-orange font-bold tracking-[0.3em] uppercase mb-4 text-sm">
                  {prog.age}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary uppercase mb-4 md:mb-6">
                  {prog.title}
                </h2>
                <p className="text-gray-600 font-montserrat text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  {prog.desc}
                </p>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                  {prog.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-dbl-orange rounded-full"></div>
                      <span className="text-sm font-bold text-secondary uppercase tracking-tighter">{feat}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="https://app.wirabhakti.my.id/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-secondary hover:bg-dbl-orange text-white font-black py-4 px-10 rounded-full transition-all uppercase tracking-widest text-sm"
                >
                  Join This Program
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}