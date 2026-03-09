import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Artisan Poseur de Cuisine à Poissy (78300) — Devis Gratuit",
  description:
    "Artisan poseur de cuisine et rénovation intérieure à Poissy (78300). Plus de 20 ans d'expérience. Pose de cuisine, salle de bain, aménagement. Devis gratuit, intervention rapide.",
  keywords: [
    "poseur cuisine Poissy",
    "artisan Poissy 78300",
    "rénovation cuisine Poissy",
    "pose cuisine Poissy",
    "artisan salle de bain Poissy",
  ],
  alternates: { canonical: "https://charriere-artisan.fr/artisan-poissy" },
};

const cityData = {
  name: "Poissy",
  slug: "artisan-poissy",
  department: "département des Yvelines (78)",
  postalCode: "78300",
  distance: "20 minutes",
  description:
    "CHARRIERE SARL, artisan poseur de cuisine et tous corps de métier, intervient à Poissy et ses environs. Plus de 20 ans d'expérience, devis gratuit et garantie décennale.",
  localInfo:
    "Poissy, ville historique des Yvelines avec sa célèbre collégiale et son patrimoine royal, est un secteur où nous intervenons régulièrement. Que vous habitiez dans le centre-ville, près de la gare ou dans les quartiers résidentiels, nous nous déplaçons gratuitement pour établir un devis. Les logements à Poissy, du pavillon au grand appartement, nous permettent d'exprimer tout notre savoir-faire en matière de pose de cuisine et de rénovation.",
  neighborhoods: ["Centre-ville", "Beauregard", "La Coudraie", "Saint-Exupéry", "Abbaye", "Gare"],
  nearbyAreas: ["Achères", "Carrières-sous-Poissy", "Villennes-sur-Seine", "Médan", "Orgeval", "Saint-Germain-en-Laye", "Triel-sur-Seine"],
};

export default function Page() {
  return <CityPage city={cityData} />;
}
