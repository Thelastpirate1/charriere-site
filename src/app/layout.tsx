import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CHARRIERE SARL — Pose de Cuisine & Artisanat | Yvelines (78)",
    template: "%s | CHARRIERE SARL",
  },
  description:
    "Artisan poseur de cuisine et tous corps de métier à Gargenville (78). 20 ans d'expérience, devis gratuit, intervention dans les Yvelines et Île-de-France Ouest.",
  keywords: [
    "poseur cuisine Yvelines",
    "pose cuisine 78",
    "artisan cuisine Gargenville",
    "installation cuisine Yvelines",
    "rénovation cuisine Île-de-France",
    "artisan tous corps de métier 78",
  ],
  authors: [{ name: "CHARRIERE SARL" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "CHARRIERE SARL",
    title: "CHARRIERE SARL — Pose de Cuisine & Artisanat | Yvelines (78)",
    description:
      "Artisan poseur de cuisine et tous corps de métier. 20 ans d'expérience dans les Yvelines.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CHARRIERE SARL",
              description:
                "Artisan poseur de cuisine et tous corps de métier à Gargenville (78). 20 ans d'expérience.",
              url: "https://charriere-artisan.fr",
              email: "contact@charriere-artisan.fr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gargenville",
                addressLocality: "Gargenville",
                postalCode: "78440",
                addressRegion: "Île-de-France",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 48.9953,
                longitude: 1.8106,
              },
              areaServed: [
                { "@type": "State", name: "Yvelines" },
                { "@type": "State", name: "Val-d'Oise" },
                { "@type": "State", name: "Hauts-de-Seine" },
              ],
              priceRange: "€€",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
