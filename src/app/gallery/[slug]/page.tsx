import Link from "next/link";
import { notFound } from "next/navigation";
import { getGalleryList, getGalleryBySlug, getGallerySlugs } from "../../../hooks/useGallery";
import GalleryLightbox from "../../../components/gallery/GalleryLightbox";
import NewsImage from "../../../components/news/NewsImage";
import type { Metadata } from "next";

// ── Static params for SSG ──
export async function generateStaticParams() {
  const slugs = await getGallerySlugs();
  return slugs.map((slug) => ({ slug }));
}

// ── Dynamic metadata ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const album = await getGalleryBySlug(slug);
  if (!album) return { title: "Not Found" };
  return {
    title: `${album.title} — Gallery | Wirabhakti Basket Akademi`,
    description: album.description,
    openGraph: {
      title: album.title,
      description: album.description,
      images: [album.cover],
    },
    twitter: {
      card: "summary_large_image",
      title: album.title,
      description: album.description,
      images: [album.cover],
    }
  };
}

// ── Page Component ──
export default async function GalleryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const album = await getGalleryBySlug(slug);
  if (!album) notFound();

  const allAlbums = await getGalleryList();
  const otherAlbums = allAlbums.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Banner ── */}
      <section className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden">
        <NewsImage
          src={album.cover}
          alt={album.title}
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 lg:p-24">
          <div className="container mx-auto max-w-5xl">
            {/* Breadcrumb */}
            <nav className="hidden md:flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/gallery" className="hover:text-white transition-colors">
                Gallery
              </Link>
              <span>/</span>
              <span className="text-dbl-orange">{album.title}</span>
            </nav>

            {/* Category badge */}
            <span className="inline-block bg-dbl-orange text-white px-4 py-1 md:px-5 md:py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 md:mb-6">
              {album.category}
            </span>

            {/* Title */}
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.1] tracking-tight max-w-4xl">
              {album.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-4 md:mt-6 text-white/80">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span className="text-sm font-bold uppercase tracking-wider">{album.date}</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
                <span className="text-sm font-bold uppercase tracking-wider">{album.photos.length} Photos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Album Description ── */}
      <section className="container mx-auto max-w-5xl px-4 md:px-6 py-10 md:py-16">
        <p className="text-lg md:text-2xl text-gray-700 font-medium leading-relaxed border-l-4 border-dbl-orange pl-4 md:pl-6">
          {album.description}
        </p>
      </section>

      {/* ── Photo Gallery Grid + Lightbox ── */}
      <section className="container mx-auto max-w-5xl px-4 md:px-6 pb-20">
        <GalleryLightbox photos={album.photos} />
      </section>

      {/* ── Other Albums ── */}
      {otherAlbums.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            {/* Section header */}
            <div className="relative flex items-center justify-center mb-16">
              <div className="w-full h-[2px] bg-dbl-orange" />
              <div className="absolute bg-dbl-orange text-white font-montserrat font-bold px-8 py-2 rounded-full uppercase text-xs tracking-[0.2em]">
                More Albums
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherAlbums.map((item) => (
                <Link
                  href={`/gallery/${item.slug}`}
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl bg-secondary aspect-[4/3] shadow-lg block"
                >
                  <NewsImage
                    src={item.cover}
                    alt={item.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-dbl-orange text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">
                      {item.category}
                    </span>
                  </div>
                  {/* Photo count */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-secondary px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full">
                      {item.photos.length} Photos
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-dbl-orange font-bold text-xs uppercase mb-1">{item.date}</p>
                      <h3 className="text-white font-montserrat font-bold text-lg uppercase tracking-wider">
                        {item.title}
                      </h3>
                      <div className="w-10 h-1 bg-dbl-orange mt-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Back to gallery */}
            <div className="mt-16 text-center">
              <Link
                href="/gallery"
                className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-black py-4 px-12 rounded-full transition-all uppercase tracking-widest text-sm"
              >
                ← All Albums
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
