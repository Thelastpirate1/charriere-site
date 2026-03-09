import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Artisan Poseur de Cuisine à Saint-Germain-en-Laye (78100) — Devis Gratuit",
  description:
    "Artisan poseur de cuisine et rénovation intérieure à Saint-Germain-en-Laye (78100). Plus de 20 ans d'expérience. Pose de cuisine, salle de bain, aménagement. Devis gratuit.",
  keywords: [
    "poseur cuisine Saint-Germain-en-Laye",
    "artisan Saint-Germain 78100",
    "rénovation cuisine Saint-Germain-en-Laye",
    "pose cuisine Saint-Germain",
    "artisan salle de bain Saint-Germain-en-Laye",
  ],
  alternates: { canonical: "https://charriere-artisan.fr/artisan-saint-germain-en-laye" },
};

const cityData = {
  name: "Saint-Germain-en-Laye",
  slug: "artisan-saint-germain-en-laye",
  department: "département des Yvelines (78)",
  postalCode: "78100",
  distance: "25 minutes",
  description:
    "CHARRIERE SARL, artisan poseur de cuisine et tous corps de métier, intervient à Saint-Germain-en-Laye et ses environs. Plus de 20 ans d'expérience, devis gratuit et garantie décennale.",
  localInfo:
    "Saint-Germain-en-Laye, ville royale au riche patrimoine avec son château et sa forêt domaniale, est un secteur où nous intervenons régulièrement pour des projets de pose de cuisine haut de gamme et de rénovation intérieure soignée. Les appartements bourgeois du centre-ville, les maisons de maître et les pavillons des quartiers résidentiels requièrent un savoir-faire artisanal que nous maîtrisons depuis plus de 20 ans. Nous nous adaptons aux exigences de qualité propres à cette ville prestigieuse des Yvelines.",
  neighborhoods: ["Centre-ville", "Fourqueux", "Le Pecq", "Bel-Air", "Le Château", "Camp des Loges"],
  nearbyAreas: ["Le Vésinet", "Chambourcy", "Mareil-Marly", "L'Étang-la-Ville", "Poissy", "Chatou", "Le Pecq"],
};

export default function Page() {
  return <CityPage city={cityData} />;
}
