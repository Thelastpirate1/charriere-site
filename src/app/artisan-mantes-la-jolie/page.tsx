import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Artisan Poseur de Cuisine à Mantes-la-Jolie (78200) — Devis Gratuit",
  description:
    "Artisan poseur de cuisine et rénovation intérieure à Mantes-la-Jolie (78200). Plus de 20 ans d'expérience. Pose de cuisine, salle de bain, aménagement. Devis gratuit.",
  keywords: [
    "poseur cuisine Mantes-la-Jolie",
    "artisan Mantes 78200",
    "rénovation cuisine Mantes-la-Jolie",
    "pose cuisine Mantes",
    "artisan salle de bain Mantes-la-Jolie",
  ],
  alternates: { canonical: "https://charriere-artisan.fr/artisan-mantes-la-jolie" },
};

const cityData = {
  name: "Mantes-la-Jolie",
  slug: "artisan-mantes-la-jolie",
  department: "département des Yvelines (78)",
  postalCode: "78200",
  distance: "10 minutes",
  description:
    "CHARRIERE SARL, artisan poseur de cuisine et tous corps de métier, intervient à Mantes-la-Jolie et ses environs. Plus de 20 ans d'expérience, devis gratuit et garantie décennale.",
  localInfo:
    "Mantes-la-Jolie, sous-préfecture des Yvelines en bord de Seine, est l'une des villes les plus proches de notre atelier à Gargenville. Nous y intervenons très fréquemment pour des poses de cuisine, des rénovations de salle de bain et des travaux d'aménagement intérieur. La diversité de l'habitat mantais — des appartements du centre-ville aux pavillons des quartiers résidentiels — nous permet de répondre à tous types de projets, des plus modestes aux plus ambitieux.",
  neighborhoods: ["Centre-ville", "Val Fourré", "Gassicourt", "Les Martraits", "Le Colombier", "Mantes-Université"],
  nearbyAreas: ["Mantes-la-Ville", "Limay", "Buchelay", "Rosny-sur-Seine", "Guerville", "Gargenville", "Magnanville"],
};

export default function Page() {
  return <CityPage city={cityData} />;
}
