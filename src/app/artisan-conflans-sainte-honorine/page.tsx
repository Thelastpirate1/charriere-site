import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Artisan Poseur de Cuisine à Conflans-Sainte-Honorine (78700) — Devis Gratuit",
  description:
    "Artisan poseur de cuisine et rénovation intérieure à Conflans-Sainte-Honorine (78700). Plus de 20 ans d'expérience. Pose de cuisine, salle de bain, aménagement. Devis gratuit.",
  keywords: [
    "poseur cuisine Conflans-Sainte-Honorine",
    "artisan Conflans 78700",
    "rénovation cuisine Conflans",
    "pose cuisine Conflans-Sainte-Honorine",
    "artisan salle de bain Conflans",
  ],
  alternates: { canonical: "https://charriere-artisan.fr/artisan-conflans-sainte-honorine" },
};

const cityData = {
  name: "Conflans-Sainte-Honorine",
  slug: "artisan-conflans-sainte-honorine",
  department: "département des Yvelines (78)",
  postalCode: "78700",
  distance: "25 minutes",
  description:
    "CHARRIERE SARL, artisan poseur de cuisine et tous corps de métier, intervient à Conflans-Sainte-Honorine et ses environs. Plus de 20 ans d'expérience, devis gratuit et garantie décennale.",
  localInfo:
    "Conflans-Sainte-Honorine, capitale de la batellerie au confluent de la Seine et de l'Oise, est une ville où nous réalisons régulièrement des chantiers de pose de cuisine et de rénovation. Son centre-ville vallonné avec ses maisons de caractère et ses quartiers pavillonnaires offrent des configurations variées qui nécessitent un vrai savoir-faire artisanal. Nous connaissons bien les spécificités de l'habitat conflanais et adaptons nos interventions en conséquence.",
  neighborhoods: ["Centre-ville", "Chennevières", "Le Plateau", "Rive de Seine", "Le Village", "Les Messageries"],
  nearbyAreas: ["Herblay-sur-Seine", "Andrésy", "Maurecourt", "Éragny", "Cergy", "Achères", "Saint-Germain-en-Laye"],
};

export default function Page() {
  return <CityPage city={cityData} />;
}
