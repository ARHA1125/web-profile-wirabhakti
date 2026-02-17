import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Image menggunakan Next.js Image untuk optimasi */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/image/banner1-wb.jpg" // Path ke file baru kamu
          alt="Banner Wirabhakti Basket" 
          fill 
          priority
          className="object-cover opacity-40" // Tetap pakai opacity agar teks terbaca
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
          Where <span className="text-primary">Champions</span> Begin
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Wirabhakti Basket Akademi mencetak atlet yang tangguh, berkarakter, dan siap bersaing di level tertinggi.
        </p>
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 uppercase cursor-pointer">
            Daftar Sekarang
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold py-4 px-8 rounded-full transition-all uppercase cursor-pointer">
            Jadwal Trial Gratis
          </button>
        </div>
      </div>
    </section>
  );
}