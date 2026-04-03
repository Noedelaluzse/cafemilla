import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cafemilla.mx'

export const metadata: Metadata = {
  title: "CAFEMILLA · Tu momento de café, hecho ritual",
  description:
    "CAFEMILLA es una bebida funcional de origen mexicano elaborada con semilla de Ramón. Sin cafeína, 100% natural, suave con el estómago. Disponible en Cancún.",
  keywords: [
    "cafemilla",
    "café sin cafeína",
    "semilla de ramón",
    "bebida natural mexicana",
    "sustituto de café",
    "café saludable",
    "cancún",
    "sin acidez",
    "bebida funcional",
    "origen mexicano",
  ],
  authors: [{ name: "CAFEMILLA" }],
  creator: "CAFEMILLA",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CAFEMILLA · Tu momento de café, hecho ritual",
    description:
      "Bebida funcional de origen mexicano. Sin cafeína, 100% natural, hecha con semilla de Ramón. Disponible en Cancún.",
    url: siteUrl,
    siteName: "CAFEMILLA",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: process.env.NEXT_PUBLIC_HERO_IMAGE_URL ?? "",
        width: 797,
        height: 952,
        alt: "CAFEMILLA - Bebida funcional con semilla de Ramón",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAFEMILLA · Tu momento de café, hecho ritual",
    description:
      "Bebida funcional de origen mexicano. Sin cafeína, 100% natural, hecha con semilla de Ramón.",
    images: [process.env.NEXT_PUBLIC_HERO_IMAGE_URL ?? ""],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}