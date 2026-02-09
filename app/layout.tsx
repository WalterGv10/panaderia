import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Guatemalan Bread | Authentic Taste in The Hamptons, NY",
  description: "Pan tradicional guatemalteco artesanal. Reparto a domicilio en The Hamptons, NY. El sabor auténtico de Guatemala.",
  keywords: ["Guatemalan Bread", "Pan Guatemalteco", "The Hamptons", "Bread Delivery NY", "Mynor Veliz"],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Guatemalan Bread | Authentic Taste in The Hamptons",
    description: "Pan 100% de Guatemala. Fresco y recién horneado. Pedidos al 631-903-0520.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Authentic Guatemalan Bread",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-purple-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
