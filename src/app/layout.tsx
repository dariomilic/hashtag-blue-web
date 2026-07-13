import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { logos } from "@/lib/brand";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arhitektonski ured Zagreb | Projektiranje kuća | HASHTAG BLUE",
  description:
    "Arhitektonski ured iz Zagreba specijaliziran za projektiranje privatnih kuća i zgrada te poslovanje nekretninama. Obratite nam se za profesionalno rješenje.",
  icons: {
    icon: logos.color,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
