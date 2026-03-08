import type { Metadata } from "next";
import Link from "next/link";
import {
  ChefHat, Wrench, Bath, Ruler, PaintBucket, Plug, Droplets, LayoutGrid,
  ArrowRight, Phone, CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Pose de Cuisine & Rénovation",
  description:
    "Pose de cuisine équipée, rénovation intérieure, salle de bain, aménagement sur-mesure. Artisan qualifié dans les Yvelines (78). Devis gratuit.",
};

const allServices = [
  {
    id: "pose-cuisine",
    icon: ChefHat,
    title: "Pose de Cuisine Équipée",
    subtitle: "Notre spécialité depuis 20 ans",
    desc: "Installation complète de votre cuisine, de la livraison des meubles à la mise en service de l'électroménager. Nous travaillons avec toutes les marques et enseignes.",
    includes: [
      "Montage et fixation des meubles hauts et bas",
      "Découpe et pose du plan de travail",
      "Installation de l'évier et raccordement plomberie",
      "Branchement de l'électroménager",
      "Pose de la crédence et finitions",
      "Raccordements électriques (prises, éclairage)",
    ],
    brands: "Schmidt, Ixina, Mobalpa, Leroy Merlin, Ikea, cuisinistes indépendants",
    price: "À partir de 1 500€",
  },
  {
    id: "renovation",
    icon: Wrench,
    title: "Rénovation Intérieure",
    subtitle: "Tous corps de métier",
    desc: "Rénovation complète ou partielle de votre intérieur. Un seul interlocuteur pour tous vos travaux, de la démolition aux finitions.",
    includes: [
      "Peinture intérieure (murs, plafonds)",
      "Pose de revêtements de sol (parquet, carrelage, vinyle)",
      "Création et démolition de cloisons",
      "Mise aux normes électricité",
      "Plomberie et chauffage",
      "Isolation thermique et phonique",
    ],
    brands: null,
    price: "Sur devis — selon surface et travaux",
  },
  {
    id: "salle-de-bain",
    icon: Bath,
    title: "Salle de Bain",
    subtitle: "Création & Rénovation",
    desc: "Conception et réalisation de votre salle de bain ou salle d'eau. Du sol au plafond, nous gérons l'intégralité du chantier.",
    includes: [
      "Démontage de l'ancienne salle de bain",
      "Plomberie et évacuations",
      "Pose de carrelage mural et sol",
      "Installation douche à l'italienne",
      "Pose de meuble vasque et miroir",
      "Électricité (spots, VMC, sèche-serviettes)",
    ],
    brands: null,
    price: "À partir de 3 500€",
  },
  {
    id: "amenagement",
    icon: Ruler,
    title: "Aménagement Sur-Mesure",
    subtitle: "Solutions personnalisées",
    desc: "Dressings, rangements, bibliothèques, meubles intégrés. Nous concevons et réalisons des aménagements parfaitement adaptés à votre espace.",
    includes: [
      "Étude et prise de mesures",
      "Conception sur-mesure",
      "Fabrication ou adaptation de meubles",
      "Pose et intégration dans l'existant",
      "Finitions et ajustements",
    ],
    brands: null,
    price: "Sur devis — selon projet",
  },
];

const additionalServices = [
  { icon: PaintBucket, name: "Peinture" },
  { icon: LayoutGrid, name: "Carrelage / Faïence" },
  { icon: Plug, name: "Électricité" },
  { icon: Droplets, name: "Plomberie" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nos Services</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Pose de cuisine, rénovation, salle de bain, aménagement. Un artisan qualifié
            pour tous vos projets dans les Yvelines.
          </p>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {allServices.map((s, i) => (
            <div key={s.id} id={s.id} className="scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image placeholder */}
                <div className="lg:col-span-2">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1B4F72] to-[#2E86C1] flex items-center justify-center">
                    <s.icon className="w-16 h-16 text-white/40" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E67E22]/10 rounded-full mb-3">
                    <s.icon className="w-4 h-4 text-[#E67E22]" />
                    <span className="text-xs font-semibold text-[#E67E22]">{s.subtitle}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1B4F72] mb-3">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>

                  <h3 className="font-semibold text-[#2C3E50] mb-3">Ce que nous faisons :</h3>
                  <ul className="space-y-2 mb-6">
                    {s.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#27AE60] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {s.brands && (
                    <p className="text-sm text-gray-500 mb-4">
                      <span className="font-semibold text-[#2C3E50]">Marques partenaires : </span>
                      {s.brands}
                    </p>
                  )}

                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-[#E67E22]">{s.price}</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B4F72] text-white text-sm font-semibold rounded-lg hover:bg-[#154360] transition-colors"
                    >
                      Demander un devis <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
              {i < allServices.length - 1 && <hr className="mt-16 border-gray-200" />}
            </div>
          ))}
        </div>
      </section>

      {/* Petits travaux */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#1B4F72] mb-8">Également à votre service</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalServices.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <s.icon className="w-8 h-8 mx-auto mb-2 text-[#1B4F72]" />
                <span className="text-sm font-semibold text-[#2C3E50]">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à lancer votre projet ?</h2>
          <p className="text-white/80 mb-8">Devis gratuit et sans engagement. Réponse sous 48h.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] text-white font-semibold rounded-xl hover:bg-[#D35400] transition-colors">
              Demander un devis <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+33600000000" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              <Phone className="w-5 h-5" /> 06 XX XX XX XX
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
