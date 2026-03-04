import Image from "next/image";
import Link from "next/link";

const NEWS_DATA = [
  {
    id: 1,
    title: "Wirabhakti Championship 2026: Mencari Bakat Muda Terbaik",
    category: "Tournament",
    date: "5 Maret 1945",
    image: "/image/banner1-wb.jpg",
    excerpt: "Turnamen tahunan Wirabhakti kembali digelar untuk kategori usia U-12 dan U-15..."
  },
  {
    id: 2,
    title: "Tips Latihan Fundamental Basket di Rumah Selama Liburan",
    category: "Tips & Trick",
    date: "1 Maret 1945",
    image: "/image/banner1-wb.jpg",
    excerpt: "Latihan tidak harus di lapangan. Berikut adalah 5 gerakan dasar yang bisa kamu asah..."
  },
  {
    id: 3,
    title: "Kedatangan Coach Internasional di Camp Wirabhakti",
    category: "Event",
    date: "20 Februari 1945",
    image: "/image/banner1-wb.jpg",
    excerpt: "Sesi coaching clinic eksklusif bersama pelatih tamu dari Australia untuk para atlet Elite..."
  },
];

export default function NewsPage() {
  const featuredNews = NEWS_DATA[0];
  const regularNews = NEWS_DATA.slice(1);

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Judul Halaman */}
        <div className="mb-12 border-l-8 border-dbl-orange pl-6">
          <h1 className="text-5xl font-black text-secondary uppercase tracking-tighter">
            Latest <span className="text-dbl-orange">News</span>
          </h1>
          <p className="text-gray-500 font-montserrat font-bold uppercase tracking-widest text-sm mt-2">
            Update terbaru dari Wirabhakti Basket Akademi
          </p>
        </div>

        {/* Featured News (Berita Utama) */}
        <Link href={`/news/${featuredNews.id}`} className="group relative block w-full h-[500px] overflow-hidden rounded-3xl mb-16 shadow-2xl">
          <Image 
            src={featuredNews.image} 
            alt={featuredNews.title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <span className="bg-dbl-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block">
              {featuredNews.category}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight max-w-4xl">
              {featuredNews.title}
            </h2>
            <p className="text-gray-300 mt-4 font-montserrat hidden md:block">{featuredNews.date}</p>
          </div>
        </Link>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEWS_DATA.map((news) => (
            <Link href={`/news/${news.id}`} key={news.id} className="group">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-6 shadow-md">
                <Image 
                  src={news.image} 
                  alt={news.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                   <span className="bg-secondary text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                    {news.category}
                  </span>
                </div>
              </div>
              <p className="text-dbl-orange font-bold text-xs uppercase mb-2">{news.date}</p>
              <h3 className="text-xl font-black text-secondary uppercase leading-snug group-hover:text-dbl-orange transition-colors">
                {news.title}
              </h3>
              <p className="text-gray-600 mt-3 font-montserrat text-sm line-clamp-2">
                {news.excerpt}
              </p>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-20 text-center">
          <button className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-black py-4 px-12 rounded-full transition-all uppercase tracking-widest text-sm">
            View More News
          </button>
        </div>
      </div>
    </main>
  );
}