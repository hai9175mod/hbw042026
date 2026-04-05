import type { Metadata } from "next";
import { Inter } from "next/font/google";
// 1. Import thư viện Google Tag Manager
import { GoogleTagManager } from '@next/third-parties/google'; 
import Header from "@/components/layout/Header"; 
import Footer from "@/components/layout/Footer"; 
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter", 
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hbw.com.vn";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  
  title: {
    default: "HBW - Xe đạp của thanh xuân",
    template: "%s | HBW",
  },
  description: "Xe đạp cho học sinh - Kiến tạo tương lai xanh.",
  
  // 2. TÍCH HỢP GOOGLE SEARCH CONSOLE
  // Giúp xác minh quyền sở hữu website với Google
  verification: {
    google: "ZgWcK6WNURIR8THOml3JUfZXHFY0C-RI0ZyyxKnILPo",
  },

  alternates: {
    canonical: "./",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      {/* 3. TÍCH HỢP GOOGLE TAG MANAGER */}
      {/* ID container của bạn: GTM-TSHMC2WL */}
      <GoogleTagManager gtmId="GTM-TSHMC2WL" />

      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        {/* Header luôn ở trên cùng */}
        <Header />
        
        {/* Phần nội dung chính sẽ tự động co giãn để đẩy Footer xuống đáy */}
        <main className="flex-grow">
            {children}
        </main>
        
        {/* Footer luôn ở dưới cùng */}
        <Footer />
      </body>
    </html>
  );
}