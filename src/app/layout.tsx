import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Modern typography
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import Providers from "@/components/Providers";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Little More Altitude | Trekking Agency",
  description: "Experience the thrill of high altitude trekking with certified guides in the Himalayas.",
  keywords: ["Trekking", "Hiking", "Himalayas", "Adventure", "Travel Agency"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans antialiased bg-brand-dark text-white`}
      >
        <Providers>
          <Navbar />
          {children}
          <WhatsAppButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

