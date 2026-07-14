import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { logos } from "@/lib/brand";
import { rootMetadata } from "@/lib/seo";
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
  ...rootMetadata,
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
