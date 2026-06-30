import Image from "next/image";

const COACHES = [
  {
    id: 1,
    name: "Muhammad Fathur Rohman",
    role: "HEAD COACH",
    image: "https://basketyuk-id.nos.wjv-1.neo.id/uploads/2026/03/SytrCR6bL1p0-69bd751866642.jpg",
    experience: [
      "Pelatih Kepala Wirabhakti Basketball Academy",
      "Sertifikasi Pelatih Lisensi Nasional",
      "Spesialisasi dalam Taktik Tim dan Strategi Permainan",
      "Pengembangan Talenta Muda Basket Regional"
    ]
  },
  {
    id: 2,
    name: "Maulana Zakaria",
    role: "TECHNICAL COACH",
    image: "https://basketyuk-id.nos.wjv-1.neo.id/uploads/2026/03/mTRa1eOf7Xni-69bd5fc2e1cb9.jpg",
    experience: [
      "Pelatih Fundamental Wirabhakti Basketball Academy",
      "Spesialis Fundamental & Shooting Development",
      "Fokus pada Technical Skill Development Individu",
      "Berpengalaman Melatih Kelompok Umur (KU-12, KU-14, KU-18)"
    ]
  },
  {
    id: 3,
    name: "Mohammad Rizki Dwi Septianto",
    role: "ASSISTANT COACH",
    image: "https://basketyuk-id.nos.wjv-1.neo.id/uploads/2026/03/H6XKmGdDj0bc-69bd5503b980f.jpg",
    experience: [
      "Asisten Pelatih Wirabhakti Basketball Academy",
      "Sertifikasi Lisensi C Perbasi (Berlaku hingga 2026)",
      "Spesialisasi Basic Motoric Skills & Fisik Pemain",
      "Fokus Pembinaan Kelompok Umur KU-12 Laki-Laki"
    ]
  },
  {
    id: 4,
    name: "Muhammad Anggik Hartanto",
    role: "ASSISTANT COACH",
    image: "https://basketyuk-id.nos.wjv-1.neo.id/uploads/2026/03/nNqF7QdZaG0C-69bf95246bb01.jpg",
    experience: [
      "Asisten Pelatih Wirabhakti Basketball Academy",
      "Sertifikasi Lisensi C Perbasi (Berlaku hingga 2028)",
      "Spesialisasi Sistem Pertahanan (Defense) & Game Analysis",
      "Fokus Pembinaan Kelompok Umur KU-14 & KU-18 Laki-Laki"
    ]
  }
];

export default function CoachPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Judul Halaman */}
        <div className="text-center mb-20">
          <h1 className="text-2xl md:text-5xl font-black text-secondary uppercase tracking-tighter">
            Our <span className="text-dbl-orange">Coaches</span>
          </h1>
          <div className="w-20 h-1.5 bg-dbl-orange mx-auto mt-3"></div>
        </div>

        {/* List Pelatih gaya DBL */}
        <div className="space-y-24 max-w-6xl mx-auto">
          {COACHES.map((coach, index) => (
            <div 
              key={coach.id} 
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Bagian Foto - Transparan tanpa background box */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-contain" // Agar foto transparan tidak terpotong
                    priority
                  />
                </div>
              </div>

              {/* Bagian Info & Prestasi */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-secondary uppercase leading-none">
                  {coach.name}
                </h2>
                <p className="text-dbl-orange font-bold text-lg mt-2 mb-6 uppercase tracking-widest">
                  {coach.role}
                </p>
                
                <div className="w-full h-[1px] bg-gray-200 mb-6"></div>

                <ul className="space-y-3">
                  {coach.experience.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 font-montserrat">
                      <span className="text-dbl-orange font-bold">•</span>
                      <span className="text-base md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}