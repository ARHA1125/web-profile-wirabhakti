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