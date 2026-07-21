import type { Metadata } from "next";
import { logos } from "@/lib/brand";
import { cormorant, inter } from "@/lib/fonts";
import { rootMetadata } from "@/lib/seo";
import "../../globals.css";

export const metadata: Metadata = {
  ...rootMetadata,
  icons: {
    icon: logos.color,
  },
};

export default function GermanLegalRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
