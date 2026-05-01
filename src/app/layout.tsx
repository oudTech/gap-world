import type { Metadata } from "next";
import { Inter, Manrope, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GAP-World — Rethinking Construction for a Changing World",
  description:
    "GAP-World delivers precision-engineered, factory-built modular construction solutions — from bathroom pods to full building systems — built for speed, quality, and scalability.",
  keywords: [
    "modular construction",
    "bathroom pods",
    "factory-built buildings",
    "architectural design",
    "3D visualization",
    "construction Nigeria",
    "GAP-World",
  ],
  metadataBase: new URL("https://www.gap-worldnigltd.com/"),
  authors: [{ name: "GAP-World" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gap-worldnigltd.com",
    siteName: "GAP-World",
    title: "GAP-World — Rethinking Construction for a Changing World",
    description:
      "Precision-engineered modular construction. Factory-built bathroom pods, kitchen units, and full building systems designed to scale.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GAP-World — Modern Modular Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GAP-World — Rethinking Construction for a Changing World",
    description:
      "Factory-built modular construction solutions. Built for speed, quality, and scalability.",
    images: ["/images/og-image.jpg"],
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${manrope.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="antialiased font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
