import { MapPin, Phone, Mail, Clock } from "lucide-react"; // Pastikan sudah install lucide-react

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-secondary uppercase tracking-tighter">
            OUR <span className="text-dbl-orange">LOCATION</span>
          </h1>
          <div className="w-24 h-2 bg-dbl-orange mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Kolom Kiri: Detail Kontak & Alamat */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-dbl-orange">
              <h2 className="text-2xl font-black text-secondary uppercase mb-6">GOR Wirabhakti</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-dbl-orange flex-shrink-0" size={24} />
                  <p className="font-montserrat text-gray-700 font-medium">
                    Jl.Brigjen Slamet Riyadi Lumajang, Tompokersan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-dbl-orange flex-shrink-0" size={24} />
                  <p className="font-montserrat text-gray-700 font-medium">+62 812 3456 7890</p>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="text-dbl-orange flex-shrink-0" size={24} />
                  <div>
                    <p className="font-montserrat font-bold text-secondary text-sm uppercase">Jam Operasional:</p>
                    <p className="font-montserrat text-gray-700 font-medium">Senin - Sabtu: 08.00 - 21.00</p>
                  </div>
                </div>
              </div>

              {/* <button className="w-full mt-10 bg-secondary hover:bg-dbl-orange text-white font-black py-4 rounded-xl transition-all uppercase tracking-widest text-sm">
                Get Directions
              </button> */}
            </div>
          </div>

          {/* Kolom Kanan: Google Maps Embed */}
          <div className="w-full lg:w-2/3 h-[450px] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7899.476113928357!2d113.21418503223197!3d-8.128129019742666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd65d6055668185%3A0x22f0d919a20e595!2sGelora%20Wira%20Bhakti!5e0!3m2!1sid!2sid!4v1772644241265!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Section Bawah: Fasilitas Arena
        <div className="bg-secondary rounded-[3rem] p-10 md:p-16 text-white">
          <h3 className="text-3xl font-black uppercase mb-10 text-center md:text-left">Arena Facilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "International Standard Court", icon: "🏀" },
              { label: "Professional Gym Area", icon: "🏋️‍♂️" },
              { label: "Comfortable Locker Rooms", icon: "🚿" },
              { label: "Player Lounge & Cafe", icon: "☕" },
            ].map((facility, i) => (
              <div key={i} className="text-center md:text-left space-y-4">
                <span className="text-4xl">{facility.icon}</span>
                <p className="font-montserrat font-bold text-sm uppercase tracking-wider">{facility.label}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </main>
  );
}