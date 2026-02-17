import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from "../src/components/layout/Navbar"; // Pastikan path @ mengarah ke src
import Footer from "../src/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], // Ambil berbagai ketebalan
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Wirabhakti Basket Akademi | Where Champions Begin",
  description: "Akademi basket terbaik untuk anak dan remaja.",
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