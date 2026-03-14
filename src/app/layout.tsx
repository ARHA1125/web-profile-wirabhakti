import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from "../components/layout/Navbar"; // Pastikan path @ mengarah ke src
import Footer from "../components/layout/Footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], // Ambil berbagai ketebalan
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Wirabhakti Basket Akademi | Where Champions Begin",
  description: "Akademi basket terbaik untuk anak dan remaja.",
  openGraph: {
    title: "Wirabhakti Basket Akademi | Where Champions Begin",
    description: "Akademi basket terbaik untuk anak dan remaja.",
    url: "https://wirabhakti.my.id",
    siteName: "Wirabhakti Basket Akademi",
    images: [
      {
        url: "/OG.png",
        width: 1200,
        height: 630,
        alt: "Wirabhakti Basket Akademi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wirabhakti Basket Akademi | Where Champions Begin",
    description: "Akademi basket terbaik untuk anak dan remaja.",
    images: ["/OG.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}