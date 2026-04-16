import Link from "next/link";
import { getNewsList } from "../../hooks/useNews";
import type { NewsItem } from "../../types/news";
import NewsImage from "../../components/news/NewsImage";

export default async function NewsPage() {
  const newsList: NewsItem[] = await getNewsList();
  const featuredNews = newsList[0];

  if (!featuredNews) {
    return (
      <main className="min-h-screen bg-white pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 text-center py-20">
          <h1 className="text-3xl font-black text-secondary uppercase">No News Available</h1>
          <p className="text-gray-500 mt-4">Check back later for updates.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-4">

        {/* Judul Halaman */}
        <div className="mb-8 md:mb-12 border-l-8 border-dbl-orange pl-4 md:pl-6">
          <h1 className="text-3xl md:text-5xl font-black text-secondary uppercase tracking-tighter">
            Latest <span className="text-dbl-orange">News</span>
          </h1>
          <p className="text-gray-500 font-montserrat font-bold uppercase tracking-widest text-sm mt-2">
            Update terbaru dari Wirabhakti Basket Akademi
          </p>
        </div>

        {/* Featured News (Berita Utama) */}
        <Link href={`/news/${featuredNews.slug}`} className="group relative block w-full h-[300px] md:h-[500px] overflow-hidden rounded-2xl md:rounded-3xl mb-10 md:mb-16 shadow-2xl">
          <NewsImage
            src={featuredNews.image}
            alt={featuredNews.title}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-5 md:p-8 lg:p-12">
            <span className="bg-dbl-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block">
              {featuredNews.category}
            </span>
            <h2 className="text-xl md:text-3xl lg:text-5xl font-black text-white uppercase leading-tight max-w-4xl">
              {featuredNews.title}
            </h2>
            <p className="text-gray-300 mt-4 font-montserrat hidden md:block">{featuredNews.date}</p>
          </div>
        </Link>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {newsList.map((news) => (
            <Link href={`/news/${news.slug}`} key={news.id} className="group">
              <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-6 shadow-md">
                <NewsImage
                  src={news.image}
                  alt={news.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
