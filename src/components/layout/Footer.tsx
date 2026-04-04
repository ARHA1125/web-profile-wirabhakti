export default function Footer() {
  return (
    <footer className="bg-secondary text-primary py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4 italic">WIRABHAKTI BASKET</h3>
          <p className="text-white leading-relaxed">
            Akademi basket profesional yang berfokus pada pengembangan teknik dasar, fisik, dan karakter atlet muda di Indonesia.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-primary">Quick Links</h4>
          <ul className="space-y-2 text-white">
            <li><a href="#programs" className="hover:text-white transition">Program Latihan</a></li>
            <li><a href="#" className="hover:text-white transition">Lokasi Kami</a></li>
            <li><a href="#partners" className="hover:text-white transition">Partners</a></li>
            <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-primary">Contact</h4>
          <p className="text-white">Jl.Brigjen Slamet Riyadi Lumajang, Tompokersan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur</p>
          <br />
          <p className="text-white">WhatsApp: +62 822-4486-6770</p>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-white">
        © 2026 Wirabhakti Basket Akademi. All rights reserved.
      </div>
    </footer>
  );
}