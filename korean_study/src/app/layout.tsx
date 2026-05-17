import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Du Học HanKang | Chuyên Gia Tư Vấn Định Hướng & Cultural Fit",
  description: "Đơn vị tư vấn du học Hàn Quốc uy tín hàng đầu, tập trung vào sự phù hợp văn hóa (Cultural Fit) và lộ trình sự nghiệp bền vững cho học sinh Việt Nam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <div className="bg-grid-layer" />
        <div className="bg-blob-blue" />
        <div className="bg-blob-orange" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
