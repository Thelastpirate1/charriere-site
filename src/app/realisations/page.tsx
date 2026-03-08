import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChefHat, Bath, Wrench, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Réalisations — Nos Chantiers Cuisine & Rénovation",
  description:
    "Découvrez nos réalisations : pose de cuisine, rénovation intérieure, salle de bain. Photos avant/après de nos chantiers dans les Yvelines (78).",
};

const categories = [
  { label: "Tous", value: "all" },
  { label: "Cuisine", value: "cuisine" },
  { label: "Salle de bain", value: "sdb" },
  { label: "Rénovation", value: "reno" },
  { label: "Sur-mesure", value: "mesure" },
];

const projects = [
  { category: "cuisine", icon: ChefHat, title: "Cuisine Schmidt — Poissy", desc: "Pose complète cuisine L, plan de travail quartz, crédence carrelage métro", lieu: "Poissy (78)" },
  { category: "cuisine", icon: ChefHat, title: "Cuisine Ixina — Mantes-la-Jolie", desc: "Installation cuisine en U, îlot central, raccordements plomberie/électricité", lieu: "Mantes-la-Jolie (78)" },
  { category: "sdb", icon: Bath, title: "Salle de bain — Conflans", desc: "Rénovation complète : douche à l'italienne, double vasque, carrelage grand format", lieu: "Conflans-Ste-Honorine (78)" },
  { category: "reno", icon: Wrench, title: "Rénovation appartement — Cergy", desc: "Rénovation complète T3 : peinture, sol, cuisine, salle de bain", lieu: "Cergy (95)" },
  { category: "cuisine", icon: ChefHat, title: "Cuisine Mobalpa — St-Germain", desc: "Pose cuisine haut de gamme, plan travail marbre, électroménager encastré", lieu: "Saint-Germain-en-Laye (78)" },
  { category: "mesure", icon: Ruler, title: "Dressing sur-mesure — Verneuil", desc: "Aménagement dressing sous combles, éclairage LED intégré", lieu: "Verneuil-sur-Seine (78)" },
  { category: "sdb", icon: Bath, title: "Salle d'eau — Gargenville", desc: "Création salle d'eau en sous-sol, plomberie neuve, carrelage imitation bois", lieu: "Gargenville (78)" },
  { category: "reno", icon: Wrench, title: "Rénovation maison — Épône", desc: "Rénovation cuisine + 2 salles de bain + peinture complète", lieu: "Épône (78)" },
  { category: "cuisine", icon: ChefHat, title: "Relooking cuisine — Les Mureaux", desc: "Remplacement plan de travail, nouvelles poignées, peinture meubles", lieu: "Les Mureaux (78)" },
];

export default function RealisationsPage() {
  return (
    <>
      {/* Header */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nos Réalisations</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos chantiers récents dans les Yvelines
            et en Île-de-France Ouest.
          </p>
        </div>
      </section>

      {/* Note photos */}
      <section className="py-8 bg-[#FEF9E7] border-b border-[#F39C12]/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-[#7D6608]">
            <strong>Photos à venir</strong> — Nous documentons actuellement nos chantiers.
            Les photos avant/après seront ajoutées prochainement.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="card-hover bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-[#1B4F72] to-[#2E86C1] flex items-center justify-center">
                  <p.icon className="w-12 h-12 text-white/30" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-[#E67E22] uppercase">{p.lieu}</span>
                  <h3 className="text-lg font-bold text-[#2C3E50] mt-1 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Votre projet peut être le prochain</h2>
          <p className="text-white/80 mb-8">Contactez-nous pour discuter de votre projet et obtenir un devis gratuit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] text-white font-semibold rounded-xl hover:bg-[#D35400] transition-colors">
              Demander un devis <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              Être rappelé gratuitement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
