import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_MEASUREMENT_ID = "G-YGT019114S";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-headline",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  verification: {
    google: "0_dwmKqardFRGLlk-nc3EF2381DpoGgJibF7tf0MeAU",
  },
  title: {
    default: "CHARRIERE SARL — Artisan Rénovation Yvelines (78) | Cuisine, Salle de Bain, Aménagement",
    template: "%s | CHARRIERE SARL",
  },
  description:
    "Artisan rénovation intérieure à Gargenville (78). Pose de cuisine, salle de bain, peinture, aménagement sur-mesure. 20+ ans d'expérience dans les Yvelines. Devis gratuit.",
  keywords: [
    "artisan rénovation Yvelines",
    "poseur cuisine 78",
    "rénovation intérieure Gargenville",
    "salle de bain Yvelines",
    "artisan tous corps de métier 78",
    "pose cuisine Île-de-France",
  ],
  authors: [{ name: "CHARRIERE SARL" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "CHARRIERE SARL",
    title: "CHARRIERE SARL — Artisan Rénovation Yvelines (78)",
    description:
      "Artisan rénovation intérieure. Cuisine, salle de bain, peinture, aménagement. 20+ ans d'expérience dans les Yvelines.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${notoSerif.variable} ${manrope.variable}`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CHARRIERE SARL",
              description:
                "Artisan rénovation intérieure à Gargenville (78). Pose de cuisine, salle de bain, peinture, aménagement sur-mesure. 20+ ans d'expérience.",
              url: "https://charriere-artisan.fr",
              telephone: "+33685031144",
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
      <body className="font-body antialiased bg-surface text-on-surface">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
