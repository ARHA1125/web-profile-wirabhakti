import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsList, getNewsBySlug, getNewsSlugs } from "../../../hooks/useNews";
import NewsDetailClient from "../../../components/news/NewsDetailClient";
import NewsImage from "../../../components/news/NewsImage";
import type { Metadata } from "next";

// ── Static params for SSG ──
export async function generateStaticParams() {
  const slugs = await getNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ── Dynamic metadata ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);
  if (!news) return { title: "Not Found" };
  return {
    title: `${news.title} | Wirabhakti Basket Akademi`,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      images: [news.image],
    },
    twitter: {
      card: "summary_large_image",
      title: news.title,
      description: news.excerpt,
      images: [news.image],
    }
  };
}

// ── Page Component ──
export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);
  if (!news) notFound();

  const allNews = await getNewsList();
  const relatedNews = allNews.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <>
      <NewsDetailClient title={news.title} />

      <main className="min-h-screen bg-white">
        {/* ── Hero Banner ── */}
        <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
          <NewsImage
            src={news.image}
            alt={news.title}
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 lg:p-24">
            <div className="container mx-auto max-w-5xl">
              {/* Breadcrumb */}
              <nav className="hidden md:flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
                <span>/</span>
                <Link
                  href="/news"
                  className="hover:text-white transition-colors"
                >
                  News
                </Link>
                <span>/</span>
                <span className="text-dbl-orange">{news.category}</span>
              </nav>

              {/* Category badge */}
              <span className="inline-block bg-dbl-orange text-white px-4 py-1 md:px-5 md:py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 md:mb-6">
                {news.category}
              </span>

              {/* Title */}
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.1] tracking-tight max-w-4xl">
                {news.title}
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-5 md:mt-8 text-white/80">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-dbl-orange flex items-center justify-center text-white font-black text-sm">
                    {news.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{news.author}</p>
                    <p className="text-white/60 text-xs">{news.date}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-8 bg-white/30" />

                {/* Read time */}
                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span className="text-sm font-bold uppercase tracking-wider">
                    {news.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Article Body ── */}
        <article className="container mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-24">
          {/* Excerpt / lead paragraph */}
          <p className="text-lg md:text-2xl text-gray-700 font-medium leading-relaxed border-l-4 border-dbl-orange pl-4 md:pl-6 mb-10 md:mb-12">
            {news.excerpt}
          </p>

          {/* Content blocks */}
          <div className="space-y-8">
            {news.content.map((block, idx) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p
                      key={idx}
                      className="text-gray-700 text-base md:text-lg leading-[1.8] md:leading-[1.9] font-[400]"
                    >
                      {block.text}
                    </p>
                  );

                case "heading":
                  return (
                    <h2
                      key={idx}
                      className="text-2xl md:text-3xl font-black text-secondary uppercase tracking-tight mt-14 mb-4 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1.5 before:bg-dbl-orange before:rounded-full"
                    >
                      {block.text}
                    </h2>
                  );

                case "image":
                  return (
                    <figure
                      key={idx}
                      className="my-12 -mx-6 md:mx-0 group"
                    >
                      <div className="relative h-72 md:h-96 w-full overflow-hidden rounded-none md:rounded-2xl shadow-xl">
                        <NewsImage
                          src={block.src!}
                          alt={block.alt || ""}
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(min-width: 768px) 768px, 100vw"
                        />
                      </div>
                      {block.caption && (
                        <figcaption className="text-center text-gray-500 text-sm mt-4 italic px-6">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );

                case "quote":
                  return (
                    <blockquote
                      key={idx}
                      className="relative my-12 py-8 px-8 md:px-12 bg-secondary/5 border-l-4 border-dbl-orange rounded-r-2xl"
                    >
                      <svg
                        className="absolute top-4 left-4 w-8 h-8 text-dbl-orange/20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391C0 7.905 3.748 4.039 9 3l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                      </svg>
                      <p className="text-lg md:text-xl text-secondary font-bold italic leading-relaxed relative z-10">
                        &ldquo;{block.text}&rdquo;
                      </p>
                    </blockquote>
                  );

                default:
                  return null;
              }
            })}
          </div>

          {/* Tags / bottom accent */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-3">
              <span className="bg-secondary text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                {news.category}
              </span>
              <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                Wirabhakti
              </span>
              <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                Basket
              </span>
            </div>
          </div>
        </article>

        {/* ── Related News Section ── */}
        {relatedNews.length > 0 && (
          <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
              {/* Section header */}
              <div className="relative flex items-center justify-center mb-16">
                <div className="w-full h-[2px] bg-dbl-orange" />
                <div className="absolute bg-dbl-orange text-white font-montserrat font-bold px-8 py-2 rounded-full uppercase text-xs tracking-[0.2em]">
                  Related News
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {relatedNews.map((item) => (
                  <Link
                    href={`/news/${item.slug}`}
                    key={item.id}
                    className="group"
                  >
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl mb-5 shadow-md">
                      <NewsImage
                        src={item.image}
                        alt={item.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-dbl-orange font-bold text-xs uppercase mb-2">
                      {item.date}
                    </p>
                    <h3 className="text-lg font-black text-secondary uppercase leading-snug group-hover:text-dbl-orange transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2 font-montserrat text-sm line-clamp-2">
                      {item.excerpt}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Back to all news */}
              <div className="mt-16 text-center">
                <Link
                  href="/news"
                  className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-black py-4 px-12 rounded-full transition-all uppercase tracking-widest text-sm"
                >
                  ← All News
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
