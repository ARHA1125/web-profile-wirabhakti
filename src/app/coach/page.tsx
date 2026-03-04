import Image from "next/image";

const COACHES = [
  {
    id: 1,
    name: "Pep Guardiola",
    role: "HEAD COACH",
    image: "/image/coach1.png",
    experience: [
      "Pelatih Kepala Tim Manchester City",
      "Sertifikasi Pelatih Lisensi A Nasional",
      "Mantan Pemain Profesional NBL Indonesia",
      "Spesialis Pengembangan Karakter Atlet Muda"
    ]
  },
  {
    id: 2,
    name: "Xabi Alonso",
    role: "TECHNICAL COACH",
    image: "/image/coach2.png",
    experience: [
      "Spesialis Fundamental & Shooting",
      "Berpengalaman melatih di berbagai klub lokal",
      "Fokus pada Technical Skill Development",
      "Lulusan Pendidikan Kepelatihan Olahraga"
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