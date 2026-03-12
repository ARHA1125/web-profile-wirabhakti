import Image from "next/image";
import { getSponsorList } from "../../hooks/useSponsor";

export default async function Partners() {
  const sponsors = await getSponsorList();

  if (sponsors.length === 0) return null;

  return (
    <section id="partners" className="py-16 bg-white text-white">
      <div className="container mx-auto px-4">
        {/* Garis Pembatas dengan Label Partners di Tengah */}
        <div className="relative flex items-center justify-center mb-16">
          <div className="w-full h-[2px] bg-dbl-orange"></div>
          <div className="absolute bg-dbl-orange text-white font-montserrat font-bold px-8 py-2 rounded-full uppercase text-xs tracking-[0.2em]">
            Partners
          </div>
        </div>

        {/* Container Logo Partner */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-24">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="w-32 md:w-44 transition-all duration-300 hover:scale-110">
              <Image
                src={sponsor.logoUrl}
                alt={sponsor.name}
                width={200}
                height={100}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}