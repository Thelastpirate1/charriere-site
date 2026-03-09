import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Artisan Poseur de Cuisine à Sartrouville (78500) — Devis Gratuit",
  description:
    "Artisan poseur de cuisine et rénovation intérieure à Sartrouville (78500). Plus de 20 ans d'expérience. Pose de cuisine, salle de bain, aménagement. Devis gratuit.",
  keywords: [
    "poseur cuisine Sartrouville",
    "artisan Sartrouville 78500",
    "rénovation cuisine Sartrouville",
    "pose cuisine Sartrouville",
    "artisan salle de bain Sartrouville",
  ],
  alternates: { canonical: "https://charriere-artisan.fr/artisan-sartrouville" },
};

const cityData = {
  name: "Sartrouville",
  slug: "artisan-sartrouville",
  department: "département des Yvelines (78)",
  postalCode: "78500",
  distance: "30 minutes",
  description:
    "CHARRIERE SARL, artisan poseur de cuisine et tous corps de métier, intervient à Sartrouville et ses environs. Plus de 20 ans d'expérience, devis gratuit et garantie décennale.",
  localInfo:
    "Sartrouville, grande ville résidentielle des Yvelines aux portes de Paris, offre un parc de logements varié où nous intervenons pour des poses de cuisine, des rénovations de salle de bain et de l'aménagement intérieur. Des pavillons du quartier de la gare aux appartements des résidences des Indes ou du Plateau, nous adaptons notre savoir-faire à chaque type d'habitat. Notre expérience de plus de 20 ans nous permet de gérer efficacement tous les corps de métier nécessaires à vos projets de rénovation.",
  neighborhoods: ["Centre-ville", "Le Plateau", "Les Indes", "Vieille Église", "La Marinière", "Les Trembleaux"],
  nearbyAreas: ["Maisons-Laffitte", "Houilles", "Montesson", "Le Pecq", "Cormeilles-en-Parisis", "Bezons", "Carrières-sur-Seine"],
};

export default function Page() {
  return <CityPage city={cityData} />;
}
