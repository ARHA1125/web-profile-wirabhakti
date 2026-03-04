import Image from "next/image";

// Data dummy untuk foto gallery
const GALLERY_IMAGES = [
  { id: 1, src: "/image/banner1-wb.jpg", title: "Latihan Rutin U-12" },
  { id: 2, src: "/image/banner1-wb.jpg", title: "Internal Game 2024" },
  { id: 3, src: "/image/banner1-wb.jpg", title: "Physical Training" },
  { id: 4, src: "/image/banner1-wb.jpg", title: "Drill Basketball" },
  { id: 5, src: "/image/banner1-wb.jpg", title: "Tournament Cup" },
  { id: 6, src: "/image/banner1-wb.jpg", title: "Victory Celebration" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-secondary pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header Gallery */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <div className="w-24 h-2 bg-primary mx-auto mt-4 rounded-full"></div>
          {/* <p className="mt-6 text-gray-600 font-montserrat max-w-2xl mx-auto font-medium">
            Momen-momen terbaik perjalanan atlet Wirabhakti Basket Akademi dalam meraih prestasi dan pengembangan diri.
          </p> */}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-xl bg-secondary aspect-square shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay Text saat Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-montserrat font-bold text-xl uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <div className="w-10 h-1 bg-dbl-orange mt-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}