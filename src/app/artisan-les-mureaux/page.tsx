import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Artisan Poseur de Cuisine aux Mureaux (78130) — Devis Gratuit",
  description:
    "Artisan poseur de cuisine et rénovation intérieure aux Mureaux (78130). Plus de 20 ans d'expérience. Pose de cuisine, salle de bain, aménagement. Devis gratuit.",
  keywords: [
    "poseur cuisine Les Mureaux",
    "artisan Les Mureaux 78130",
    "rénovation cuisine Les Mureaux",
    "pose cuisine Les Mureaux",
    "artisan salle de bain Les Mureaux",
  ],
  alternates: { canonical: "https://charriere-artisan.fr/artisan-les-mureaux" },
};

const cityData = {
  name: "Les Mureaux",
  slug: "artisan-les-mureaux",
  department: "département des Yvelines (78)",
  postalCode: "78130",
  distance: "10 minutes",
  description:
    "CHARRIERE SARL, artisan poseur de cuisine et tous corps de métier, intervient aux Mureaux et ses environs. Plus de 20 ans d'expérience, devis gratuit et garantie décennale.",
  localInfo:
    "Les Mureaux, ville dynamique des bords de Seine toute proche de notre atelier de Gargenville, est l'un de nos secteurs d'intervention privilégiés. Nous y réalisons très régulièrement des chantiers de pose de cuisine, de rénovation de salle de bain et d'aménagement intérieur. Des résidences du centre-ville aux quartiers pavillonnaires de la Vigne Blanche ou des Bougimonts, nous connaissons parfaitement les typologies de logements muriautins et adaptons nos prestations à chaque configuration.",
  neighborhoods: ["Centre-ville", "La Vigne Blanche", "Les Bougimonts", "Les Musiciens", "Bècheville", "La Marée"],
  nearbyAreas: ["Meulan-en-Yvelines", "Gargenville", "Aubergenville", "Ecquevilly", "Hardricourt", "Verneuil-sur-Seine", "Flins-sur-Seine"],
};

export default function Page() {
  return <CityPage city={cityData} />;
}
