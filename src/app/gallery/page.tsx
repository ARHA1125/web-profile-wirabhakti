import Link from "next/link";
import { getGalleryList } from "../../hooks/useGallery";
import type { GalleryAlbum } from "../../types/gallery";
import NewsImage from "../../components/news/NewsImage";

export default async function GalleryPage() {
  const albums: GalleryAlbum[] = await getGalleryList();

  return (
    <main className="min-h-screen bg-white pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header Gallery */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-2xl md:text-5xl font-black text-secondary uppercase tracking-tighter">
            Our <span className="text-dbl-orange">Gallery</span>
          </h1>
          <div className="w-24 h-2 bg-dbl-orange mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 md:mt-6 text-gray-600 font-montserrat max-w-2xl mx-auto font-medium text-sm md:text-base">
            Momen-momen terbaik perjalanan atlet Wirabhakti Basket Akademi dalam meraih prestasi dan pengembangan diri.
          </p>
        </div>

        {/* Grid */}
        {albums.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-black text-secondary uppercase">No Albums Yet</h2>
            <p className="text-gray-500 mt-4">Check back later for gallery updates.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <Link
                href={`/gallery/${album.slug}`}
                key={album.id}
                className="group relative overflow-hidden rounded-xl bg-secondary aspect-square shadow-lg block"
              >
                <NewsImage
                  src={album.cover}
                  alt={album.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-dbl-orange text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">
                    {album.category}
                  </span>
                </div>

                {/* Photo count badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-secondary px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                    {album.photos.length}
                  </span>
                </div>

                {/* Overlay Text on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-dbl-orange font-bold text-xs uppercase mb-1">{album.date}</p>
                    <h3 className="text-white font-montserrat font-bold text-xl uppercase tracking-wider">
                      {album.title}
                    </h3>
                    <div className="w-10 h-1 bg-dbl-orange mt-2"></div>
                    <p className="text-white/70 text-sm mt-3 line-clamp-2">{album.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
