import Partners from "@/src/components/home/Partners";
import Hero from "../components/home/Hero";
import Image from "next/image";
import Link from "next/link";
import { PROGRAMS } from "../constants/Index";
import { getNewsList } from "@/src/hooks/useNews";
import { getGalleryList } from "@/src/hooks/useGallery";
import NewsImage from "@/src/components/news/NewsImage";

export default async function Home() {
  const newsList = await getNewsList();
  const albums = await getGalleryList();

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stats Section (Ringkasan Cepat) */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary font-bold uppercase">
          <div>
            <div className="text-4xl text-secondary">74+</div>
            <div className="text-sm text-gray-500">Active Students</div>
          </div>
          <div>
            <div className="text-4xl text-secondary">3+</div>
            <div className="text-sm text-gray-500">Pro Coaches</div>
          </div>
          <div>
            <div className="text-4xl text-secondary">1</div>
            <div className="text-sm text-gray-500">Locations</div>
          </div>
          <div>
            <div className="text-4xl text-secondary">20+</div>
            <div className="text-sm text-gray-500">Trophies Won</div>
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

      {/* 3.1. News Section */}
      {newsList.length > 0 && (
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-center mb-16">
              <div className="w-full h-[2px] bg-dbl-orange"></div>
              <div className="absolute bg-dbl-orange text-white font-montserrat font-bold px-8 py-2 rounded-full uppercase text-xs tracking-[0.2em]">
                Latest News
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsList.slice(0, 3).map((news) => (
                <Link href={`/news/${news.slug}`} key={news.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <NewsImage
                      src={news.image}
                      alt={news.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-xs text-dbl-orange font-bold uppercase">{news.date}</span>
                      <h3 className="text-lg font-black text-secondary uppercase mt-2 line-clamp-2 group-hover:text-dbl-orange transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-500 text-xs mt-3 leading-relaxed line-clamp-2 font-montserrat">
                        {news.excerpt}
                      </p>
                    </div>
                    <span className="mt-4 text-xs font-black text-secondary uppercase tracking-wider inline-flex items-center gap-1 group-hover:text-dbl-orange transition-colors">
                      Baca Selengkapnya
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/news" className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-black py-3.5 px-10 rounded-full transition-all uppercase tracking-widest text-xs">
                Lihat Semua Berita
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 3.2. Gallery Section */}
      {albums.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-center mb-16">
              <div className="w-full h-[2px] bg-dbl-orange"></div>
              <div className="absolute bg-dbl-orange text-white font-montserrat font-bold px-8 py-2 rounded-full uppercase text-xs tracking-[0.2em]">
                Our Gallery
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {albums.slice(0, 3).map((album) => (
                <Link
                  href={`/gallery/${album.slug}`}
                  key={album.id}
                  className="group relative overflow-hidden rounded-2xl bg-secondary aspect-square shadow-lg block"
                >
                  <NewsImage
                    src={album.cover}
                    alt={album.title}
                    className="object-cover transition-transform duration-750 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-dbl-orange text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">
                      {album.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-white/95 text-secondary px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full flex items-center gap-1.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                      {album.photos.length}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-dbl-orange font-bold text-[10px] uppercase mb-1">{album.date}</p>
                      <h3 className="text-white font-montserrat font-bold text-lg uppercase tracking-wider leading-snug">
                        {album.title}
                      </h3>
                      <div className="w-8 h-1 bg-dbl-orange mt-2"></div>
                      <p className="text-white/70 text-xs mt-2.5 line-clamp-2">{album.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/gallery" className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-black py-3.5 px-10 rounded-full transition-all uppercase tracking-widest text-xs">
                Lihat Semua Galeri
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 4. Partners Section */}
      <Partners />

      {/* 4.1. Visi & Misi Section (BELOW PARTNERS) */}
      <section className="py-24 bg-gradient-to-b from-secondary to-slate-950 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-dbl-orange/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Visi &amp; <span className="text-dbl-orange">Misi</span>
            </h2>
            <div className="w-24 h-1.5 bg-dbl-orange mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-400 font-montserrat text-sm max-w-xl mx-auto uppercase tracking-wider">
              Komitmen kami dalam pembinaan karakter dan prestasi atlet muda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Visi Card */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-dbl-orange/10 rounded-full blur-xl"></div>
              <div>
                <span className="text-xs font-bold text-dbl-orange uppercase tracking-widest block mb-4">Visi Kami</span>
                <svg className="w-12 h-12 text-dbl-orange/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <h3 className="text-2xl md:text-3xl font-extrabold uppercase leading-tight italic tracking-wide text-white font-montserrat mb-6">
                  "Mencetak Atlet Basket Berprestasi Tinggi &amp; Berkarakter Unggul"
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Menjadi akademi bola basket terkemuka di Indonesia yang mencetak atlet berprestasi tinggi, berkarakter tangguh, disiplin, dan memiliki integritas moral di dalam maupun di luar lapangan.
                </p>
              </div>
            </div>

            {/* Misi Card */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold text-dbl-orange uppercase tracking-widest block mb-2">Misi Kami</span>
                
                {[
                  {
                    title: "Pengembangan Karakter",
                    desc: "Membentuk kedisiplinan, sportivitas, mental pemenang, dan kerja sama tim pada setiap atlet sejak usia dini."
                  },
                  {
                    title: "Pembinaan Berjenjang",
                    desc: "Menyelenggarakan program pelatihan bola basket terstruktur yang berstandar nasional dan disesuaikan dengan tahapan pertumbuhan usia."
                  },
                  {
                    title: "Pelatih & Fasilitas Profesional",
                    desc: "Didukung oleh pelatih berlisensi profesional dan fasilitas penunjang yang aman demi mengoptimalkan potensi fisik dan taktis atlet."
                  },
                  {
                    title: "Peluang Prestasi",
                    desc: "Memberikan panggung kompetisi yang sehat di tingkat daerah hingga nasional guna membuka jalur prestasi akademik maupun karir profesional atlet."
                  }
                ].map((misi, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-dbl-orange/10 flex items-center justify-center flex-shrink-0 text-dbl-orange border border-dbl-orange/20">
                      <span className="font-extrabold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-tight text-white">{misi.title}</h4>
                      <p className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed">{misi.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. CTA Section */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 italic">Mulai Perjalananmu Menjadi Pro Sekarang!</h2>
          <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="bg-white text-secondary font-bold py-4 px-10 rounded-full hover:bg-dbl-orange hover:text-white transition-colors">
            Hubungi Kami di WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}