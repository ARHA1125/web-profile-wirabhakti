export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4 italic">WIRABHAKTI BASKET</h3>
          <p className="text-gray-400 leading-relaxed">
            Akademi basket profesional yang berfokus pada pengembangan teknik dasar, fisik, dan karakter atlet muda di Indonesia.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-primary">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Program Latihan</a></li>
            <li><a href="#" className="hover:text-white transition">Lokasi Kami</a></li>
            <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-primary">Contact</h4>
          <p className="text-gray-400">Jl. Contoh Alamat No. 123, Surabaya</p>
          <p className="text-gray-400 mt-2">WhatsApp: +62 812-3456-7890</p>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        © 2026 Wirabhakti Basket Akademi. All rights reserved.
      </div>
    </footer>
  );
}