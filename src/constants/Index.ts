export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "#programs" },
  { name: "Partners", href: "#partners" },
  { name: "Contact", href: "#" },
];

export interface ProgramItem {
  id: string;
  title: string;
  age: string;
  desc: string;
  features: string[];
  image: string;
  color: string;
}

export const PROGRAMS: ProgramItem[] = [
  {
    id: "elite",
    title: "Elite Academy",
    age: "Usia 13 - 18 Tahun",
    desc: "Program intensif bagi atlet yang ingin mengejar karier profesional. Fokus pada strategi tim, fisik tingkat lanjut, dan kesiapan kompetisi nasional.",
    features: ["5x Latihan Seminggu", "Strength & Conditioning", "Video Analysis", "National Tournaments"],
    image: "/image/banner1-wb.jpg",
    color: "bg-secondary",
  },
  {
    id: "junior",
    title: "Junior Starter",
    age: "Usia 6 - 12 Tahun",
    desc: "Membangun kecintaan pada basket melalui fundamental yang benar. Fokus pada dribbling, shooting, dan koordinasi motorik dasar.",
    features: ["2x Latihan Seminggu", "Fun Games", "Fundamental Skills", "Quarterly Evaluation"],
    image: "/image/banner1-wb.jpg",
    color: "bg-dbl-orange",
  },
];

// ── News Data ──────────────────────────────────────────────────

export interface NewsContentBlock {
  type: "paragraph" | "heading" | "image" | "quote";
  text?: string;
  src?: string;
  alt?: string;
  caption?: string;
}

export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  author: string;
  readTime: string;
  content: NewsContentBlock[];
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    slug: "wirabhakti-championship-2026",
    title: "Wirabhakti Championship 2026: Mencari Bakat Muda Terbaik",
    category: "Tournament",
    date: "5 Maret 2026",
    image: "/image/banner1-wb.jpg",
    excerpt:
      "Turnamen tahunan Wirabhakti kembali digelar untuk kategori usia U-12 dan U-15...",
    author: "Coach Wirabhakti",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Wirabhakti Basket Akademi dengan bangga mengumumkan penyelenggaraan Wirabhakti Championship 2026, ajang turnamen tahunan yang bertujuan untuk menjaring bakat-bakat muda terbaik dari seluruh penjuru Jawa Timur. Turnamen ini terbuka untuk kategori usia U-12 dan U-15, dengan format kompetisi yang telah disempurnakan untuk memberikan pengalaman bertanding yang sesungguhnya.",
      },
      {
        type: "heading",
        text: "Format Kompetisi yang Diperbarui",
      },
      {
        type: "paragraph",
        text: "Tahun ini, format kompetisi mengalami pembaruan signifikan. Setiap tim akan bermain dalam sistem pool round-robin pada fase grup, dilanjutkan dengan sistem eliminasi langsung pada babak knock-out. Ini memastikan setiap tim mendapatkan minimal tiga pertandingan, memberikan lebih banyak waktu bermain bagi para atlet muda.",
      },
      {
        type: "image",
        src: "/image/banner2-wb.jpg",
        alt: "Suasana pertandingan Wirabhakti Championship",
        caption:
          "Suasana pertandingan sengit di Wirabhakti Championship tahun lalu.",
      },
      {
        type: "heading",
        text: "Hadiah dan Penghargaan",
      },
      {
        type: "paragraph",
        text: "Selain trofi untuk tiga besar, panitia juga menyiapkan penghargaan individu yang bergengsi. MVP (Most Valuable Player), Best Defensive Player, dan Top Scorer akan dipilih oleh panel juri yang terdiri dari pelatih-pelatih berpengalaman. Pemenang penghargaan individu berhak atas beasiswa latihan selama satu semester di Wirabhakti Basket Akademi.",
      },
      {
        type: "quote",
        text: "Turnamen ini bukan hanya tentang menang atau kalah, tetapi tentang membangun mentalitas juara sejak usia dini. Kami ingin setiap anak pulang dengan pelajaran berharga.",
      },
      {
        type: "heading",
        text: "Cara Pendaftaran",
      },
      {
        type: "paragraph",
        text: "Pendaftaran dibuka mulai 1 Maret hingga 20 Maret 2026. Tim yang berminat dapat mendaftar melalui formulir online di website resmi kami atau langsung menghubungi panitia melalui WhatsApp. Biaya pendaftaran per tim sangat terjangkau, karena acara ini disubsidi oleh sponsor utama kami.",
      },
      {
        type: "paragraph",
        text: "Jangan lewatkan kesempatan emas ini! Ajak tim kamu untuk bertanding, belajar, dan tumbuh bersama di Wirabhakti Championship 2026. Untuk informasi lebih lanjut, ikuti akun media sosial resmi kami.",
      },
    ],
  },
  {
    id: 2,
    slug: "tips-latihan-fundamental-basket",
    title: "Tips Latihan Fundamental Basket di Rumah Selama Liburan",
    category: "Tips & Trick",
    date: "1 Maret 2026",
    image: "/image/banner2-wb.jpg",
    excerpt:
      "Latihan tidak harus di lapangan. Berikut adalah 5 gerakan dasar yang bisa kamu asah...",
    author: "Coach Dimas",
    readTime: "4 min read",
    content: [
      {
        type: "paragraph",
        text: "Liburan sekolah bukan berarti harus berhenti berlatih. Faktanya, masa liburan adalah waktu yang sempurna untuk memperkuat fundamental kamu tanpa tekanan jadwal sekolah. Berikut panduan lengkap latihan yang bisa kamu lakukan di rumah, bahkan tanpa ring basket sekalipun.",
      },
      {
        type: "heading",
        text: "1. Ball Handling Drill",
      },
      {
        type: "paragraph",
        text: "Mulailah dengan latihan dasar ball handling. Lakukan crossover, behind-the-back, dan between-the-legs secara bergantian selama 10 menit setiap hari. Konsistensi adalah kunci — lebih baik berlatih 15 menit setiap hari daripada 2 jam sekali seminggu.",
      },
      {
        type: "heading",
        text: "2. Footwork dan Agility",
      },
      {
        type: "paragraph",
        text: "Gunakan tangga atau garis di lantai sebagai pengganti agility ladder. Latih defensive slides, pivoting, dan jump stops. Footwork yang baik adalah fondasi dari pemain basket yang solid.",
      },
      {
        type: "quote",
        text: "Kamu tidak perlu ring basket untuk menjadi pemain yang lebih baik. Latih dasar-dasarnya dan ring itu hanya akan menjadi bonus saat kamu kembali ke lapangan.",
      },
      {
        type: "heading",
        text: "3. Core Strength Training",
      },
      {
        type: "paragraph",
        text: "Kekuatan inti tubuh sangat penting dalam basket. Lakukan plank, mountain climbers, dan superman hold setiap hari. Targetkan 3 set untuk setiap gerakan. Kekuatan core yang baik akan meningkatkan keseimbangan dan kontak fisik di lapangan.",
      },
      {
        type: "image",
        src: "/image/banner1-wb.jpg",
        alt: "Latihan fundamental basket",
        caption: "Latihan ball handling bisa dilakukan di mana saja.",
      },
      {
        type: "heading",
        text: "4. Shooting Form tanpa Ring",
      },
      {
        type: "paragraph",
        text: "Kamu bisa melatih form shooting tanpa harus memiliki ring. Fokus pada mekanisme: posisi kaki, grip bola, follow-through, dan arc. Berbaring dan tembak bola ke atas secara berulang untuk melatih muscle memory.",
      },
      {
        type: "heading",
        text: "5. Visualization dan Film Study",
      },
      {
        type: "paragraph",
        text: "Jangan remehkan kekuatan mental training. Tonton pertandingan NBA atau NBL Indonesia, pelajari gerakan pemain profesional, dan visualisasikan dirimu melakukan gerakan tersebut. Pemain-pemain besar selalu belajar dari menonton.",
      },
    ],
  },
  {
    id: 3,
    slug: "kedatangan-coach-internasional",
    title: "Kedatangan Coach Internasional di Camp Wirabhakti",
    category: "Event",
    date: "20 Februari 2026",
    image: "/image/banner1-wb.jpg",
    excerpt:
      "Sesi coaching clinic eksklusif bersama pelatih tamu dari Australia untuk para atlet Elite...",
    author: "Admin WB",
    readTime: "3 min read",
    content: [
      {
        type: "paragraph",
        text: "Wirabhakti Basket Akademi menyambut tamu istimewa dari negeri kanguru! Coach Michael Harper, pelatih basket profesional asal Melbourne, Australia, tiba di Indonesia untuk mengadakan coaching clinic eksklusif selama satu minggu penuh bersama para atlet program Elite kami.",
      },
      {
        type: "heading",
        text: "Tentang Coach Michael Harper",
      },
      {
        type: "paragraph",
        text: "Coach Michael memiliki pengalaman lebih dari 15 tahun di dunia basket profesional Australia. Ia pernah menjadi asisten pelatih di National Basketball League (NBL) Australia dan telah melatih beberapa pemain yang berhasil menembus draft NBA. Kehadirannya di Wirabhakti merupakan bagian dari program pertukaran pelatih internasional.",
      },
      {
        type: "image",
        src: "/image/banner2-wb.jpg",
        alt: "Coaching clinic bersama Coach Michael",
        caption: "Sesi latihan intensif bersama Coach Michael Harper.",
      },
      {
        type: "heading",
        text: "Materi Coaching Clinic",
      },
      {
        type: "paragraph",
        text: "Selama satu minggu, Coach Michael akan membawakan materi yang berfokus pada tiga aspek utama: offensive system modern yang digunakan di level profesional, defensive scheme yang efektif untuk tim muda, dan pengembangan basketball IQ melalui film session interaktif.",
      },
      {
        type: "quote",
        text: "Saya sangat terkesan dengan dedikasi dan potensi anak-anak di sini. Indonesia memiliki bakat besar di dunia basket, dan akademi seperti Wirabhakti adalah tempat yang tepat untuk mengembangkannya.",
      },
      {
        type: "heading",
        text: "Dampak bagi Atlet Elite",
      },
      {
        type: "paragraph",
        text: "Program coaching clinic ini diharapkan memberikan wawasan baru bagi para atlet Elite tentang standar latihan di level internasional. Selain sesi di lapangan, para atlet juga akan mendapatkan evaluasi individu tertulis dari Coach Michael, yang bisa menjadi panduan pengembangan mereka ke depan.",
      },
      {
        type: "paragraph",
        text: "Wirabhakti terus berkomitmen untuk menghadirkan pengalaman terbaik bagi para atletnya. Rencana ke depan, kami akan mengundang pelatih-pelatih dari berbagai negara untuk memperkaya wawasan dan teknik anak-anak didik kami.",
      },
    ],
  },
];

// ── Gallery Data ───────────────────────────────────────────────

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryAlbum {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  cover: string;
  description: string;
  photos: GalleryPhoto[];
}

export const GALLERY_DATA: GalleryAlbum[] = [
  {
    id: 1,
    slug: "latihan-rutin-u12",
    title: "Latihan Rutin U-12",
    category: "Training",
    date: "Februari 2026",
    cover: "/image/banner1-wb.jpg",
    description:
      "Sesi latihan rutin untuk kategori U-12 yang berfokus pada pengembangan fundamental: dribling, passing, dan shooting dasar. Para atlet muda berlatih dengan semangat tinggi di bawah bimbingan coach berpengalaman.",
    photos: [
      { src: "/image/banner1-wb.jpg", alt: "Warm up session", caption: "Sesi pemanasan sebelum latihan inti" },
      { src: "/image/banner2-wb.jpg", alt: "Dribbling drill", caption: "Latihan dribbling untuk meningkatkan kontrol bola" },
      { src: "/image/banner1-wb.jpg", alt: "Shooting practice", caption: "Latihan shooting form yang benar" },
      { src: "/image/banner2-wb.jpg", alt: "Mini game", caption: "Mini game di akhir sesi latihan" },
      { src: "/image/banner1-wb.jpg", alt: "Cool down", caption: "Sesi pendinginan dan evaluasi" },
      { src: "/image/banner2-wb.jpg", alt: "Team huddle", caption: "Huddle tim sebelum bubar" },
    ],
  },
  {
    id: 2,
    slug: "internal-game-2024",
    title: "Internal Game 2024",
    category: "Competition",
    date: "Desember 2024",
    cover: "/image/banner2-wb.jpg",
    description:
      "Pertandingan internal antar tim di Wirabhakti Basket Akademi. Ajang ini menjadi sarana bagi para atlet untuk mengasah kemampuan bertanding dan menerapkan teknik yang telah dipelajari selama latihan.",
    photos: [
      { src: "/image/banner2-wb.jpg", alt: "Opening ceremony", caption: "Upacara pembukaan internal game" },
      { src: "/image/banner1-wb.jpg", alt: "Tip off", caption: "Momen tip-off pertandingan pertama" },
      { src: "/image/banner2-wb.jpg", alt: "Fast break", caption: "Serangan cepat tim biru" },
      { src: "/image/banner1-wb.jpg", alt: "Defense", caption: "Pertahanan solid dari tim merah" },
      { src: "/image/banner2-wb.jpg", alt: "Trophy ceremony", caption: "Penyerahan trofi kepada tim juara" },
    ],
  },
  {
    id: 3,
    slug: "physical-training",
    title: "Physical Training",
    category: "Training",
    date: "Januari 2026",
    cover: "/image/banner1-wb.jpg",
    description:
      "Program latihan fisik khusus untuk meningkatkan kekuatan, kelincahan, dan stamina para atlet. Sesi ini dirancang oleh tim pelatih profesional dengan pendekatan sport science modern.",
    photos: [
      { src: "/image/banner1-wb.jpg", alt: "Agility drill", caption: "Latihan kelincahan dengan cone drill" },
      { src: "/image/banner2-wb.jpg", alt: "Strength training", caption: "Latihan kekuatan tubuh bagian atas" },
      { src: "/image/banner1-wb.jpg", alt: "Endurance run", caption: "Latihan daya tahan dengan interval run" },
      { src: "/image/banner2-wb.jpg", alt: "Stretching", caption: "Sesi stretching untuk fleksibilitas" },
    ],
  },
  {
    id: 4,
    slug: "drill-basketball",
    title: "Drill Basketball",
    category: "Training",
    date: "Januari 2026",
    cover: "/image/banner2-wb.jpg",
    description:
      "Sesi drill intensif yang fokus pada pengembangan skill individu dan tim. Dari ball handling hingga set play, setiap drill dirancang untuk membentuk pemain yang komplet.",
    photos: [
      { src: "/image/banner2-wb.jpg", alt: "Ball handling", caption: "Drill ball handling tingkat lanjut" },
      { src: "/image/banner1-wb.jpg", alt: "Passing drill", caption: "Latihan passing akurasi" },
      { src: "/image/banner2-wb.jpg", alt: "Pick and roll", caption: "Drill pick and roll" },
      { src: "/image/banner1-wb.jpg", alt: "Fast break drill", caption: "Latihan serangan cepat" },
      { src: "/image/banner2-wb.jpg", alt: "Free throw", caption: "Sesi free throw practice" },
      { src: "/image/banner1-wb.jpg", alt: "Team play", caption: "Drill permainan tim" },
    ],
  },
  {
    id: 5,
    slug: "tournament-cup",
    title: "Tournament Cup",
    category: "Competition",
    date: "November 2024",
    cover: "/image/banner1-wb.jpg",
    description:
      "Partisipasi tim Wirabhakti dalam turnamen antar akademi se-Jawa Timur. Tim kami berhasil menunjukkan performa luar biasa dan membawa pulang penghargaan bergengsi.",
    photos: [
      { src: "/image/banner1-wb.jpg", alt: "Team photo", caption: "Foto tim sebelum pertandingan" },
      { src: "/image/banner2-wb.jpg", alt: "Game action", caption: "Aksi dalam pertandingan semifinal" },
      { src: "/image/banner1-wb.jpg", alt: "Three pointer", caption: "Three-point shot yang menentukan" },
      { src: "/image/banner2-wb.jpg", alt: "Celebration", caption: "Selebrasi setelah kemenangan" },
      { src: "/image/banner1-wb.jpg", alt: "Award ceremony", caption: "Upacara penghargaan" },
    ],
  },
  {
    id: 6,
    slug: "victory-celebration",
    title: "Victory Celebration",
    category: "Event",
    date: "November 2024",
    cover: "/image/banner2-wb.jpg",
    description:
      "Perayaan kemenangan tim Wirabhakti setelah berhasil meraih juara di turnamen regional. Momen kebanggaan bagi seluruh keluarga besar Wirabhakti Basket Akademi.",
    photos: [
      { src: "/image/banner2-wb.jpg", alt: "Trophy lift", caption: "Momen mengangkat trofi juara" },
      { src: "/image/banner1-wb.jpg", alt: "Team celebration", caption: "Selebrasi bersama seluruh tim" },
      { src: "/image/banner2-wb.jpg", alt: "Coach and team", caption: "Coach bersama para atlet juara" },
      { src: "/image/banner1-wb.jpg", alt: "Group photo", caption: "Foto bersama orang tua dan pendukung" },
    ],
  },
];