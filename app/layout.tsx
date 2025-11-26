import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

// --- SEO AYARLARI ---
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), // Domain adresin
  title: {
    default: siteConfig.brandName,
    template: `%s | ${siteConfig.brandName}`, // Diğer sayfalarda: "Margarita | Excellent Homemade Pizza" yazar
  },
  description: siteConfig.translations.tr.metaDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.brandName }],
  creator: siteConfig.brandName,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    title: siteConfig.brandName,
    description: siteConfig.translations.tr.metaDescription,
    siteName: siteConfig.brandName,
    images: [
      {
        url: "/og-image.jpg", // public klasörüne 1200x630 boyutunda bir kapak resmi koymalısın
        width: 1200,
        height: 630,
        alt: siteConfig.brandName,
      },
    ],
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}