import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL('https://guatemalanbread.com'),
  title: "Guatemalan Bread | Panadería Artesanal en The Hamptons, NY",
  description: "Descubre el sabor auténtico de Guatemala en The Hamptons. Pan artesanal horneado hoy: conchas, champurradas, pan francés y más. Entrega a domicilio en NY.",
  keywords: ["Guatemalan Bread", "Pan Guatemalteco NY", "Panadería Hamptons", "Mynor Veliz", "Pan artesanal Guatemala", "Reparto de pan NY"],
  authors: [{ name: "Mynor Veliz" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://guatemalanbread.com",
  },
  icons: {
    icon: "/panguate/logo2.png",
    apple: "/panguate/logo2.png",
  },
  openGraph: {
    title: "Guatemalan Bread | El Auténtico Sabor de Guatemala en NY",
    description: "Panadería artesanal con entrega a domicilio en The Hamptons. Frescura garantizada en cada pieza.",
    url: "https://guatemalanbread.com",
    siteName: "Guatemalan Bread",
    locale: "es_US",
    type: "website",
    images: [
      {
        url: "/pan/pan-recien-horneado.jpg",
        width: 1200,
        height: 630,
        alt: "Pan Artesanal Guatemalteco recién horneado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guatemalan Bread | Panadería Artesanal NY",
    description: "El sabor de Guatemala directo a tu puerta en The Hamptons.",
    images: ["/pan/pan-recien-horneado.jpg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "Guatemalan Bread",
              "image": "/panguate/logo2.png",
              "@id": "",
              "url": "https://guatemalanbread.com",
              "telephone": "+1-631-903-0520",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "The Hamptons",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "11968",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.8843,
                "longitude": -72.3895
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "06:00",
                "closes": "20:00"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
