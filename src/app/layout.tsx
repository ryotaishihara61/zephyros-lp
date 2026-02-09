import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zephyros.jp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ZEPHYROS | 一生モノの学び",
    template: "%s | ZEPHYROS",
  },
  description:
    "ゼフィロスが提案する、今のスキルに確信を。プロの視点が詰まったカリキュラムで、あなたの市場価値を引き上げます。",
  keywords: ["ZEPHYROS", "ゼフィロス", "リーダーシップ研修", "人材育成", "法人研修", "オンライン学習"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ZEPHYROS",
    images: ["/zep-ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/zep-ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
