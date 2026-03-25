import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChefHat, Wrench, Bath, Ruler, PaintBucket, Plug, Droplets, LayoutGrid,
  ArrowRight, CheckCircle, Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Pose de Cuisine & Rénovation",
  description:
    "Pose de cuisine équipée, rénovation intérieure, salle de bain, aménagement sur-mesure. Artisan qualifié dans les Yvelines (78). Devis gratuit.",
};

const allServices = [
  {
    id: "pose-cuisine",
    image: "/images/service-cuisine.webp",
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
    image: "/images/service-renovation.webp",
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
    image: "/images/service-sdb.webp",
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
    image: "/images/service-amenagement.webp",
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
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-headline mb-5">
            Nos Services
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Pose de cuisine, rénovation, salle de bain, aménagement.
            Un artisan qualifié pour tous vos projets dans les Yvelines.
          </p>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-20">
          {allServices.map((s, i) => (
            <div key={s.id} id={s.id} className="scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Image */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="group aspect-[4/3] rounded-xl overflow-hidden relative shadow-ambient">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover img-zoom"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                    <s.icon className="w-4 h-4 text-accent" />
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{s.subtitle}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline mb-4">{s.title}</h2>
                  <p className="text-on-surface-variant leading-relaxed mb-6">{s.desc}</p>

                  <div className="bg-surface-container-low rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-on-surface mb-4 text-sm uppercase tracking-wider">Ce que nous faisons</h3>
                    <ul className="space-y-3">
                      {s.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-on-surface-variant">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {s.brands && (
                    <p className="text-sm text-on-surface-variant mb-5">
                      <span className="font-semibold text-on-surface">Marques partenaires : </span>
                      {s.brands}
                    </p>
                  )}

                  <div className="flex items-center gap-5 flex-wrap">
                    <span className="text-xl font-bold text-accent font-headline">{s.price}</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 btn-primary-gradient text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all"
                    >
                      Demander un devis <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services complémentaires */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline mb-8">
            Également à votre service
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalServices.map((s, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-xl p-6 ghost-border hover:shadow-ambient transition-all duration-300">
                <s.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <span className="text-sm font-semibold text-on-surface">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 bg-primary overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-white mb-4">
                Prêt à lancer votre projet ?
              </h2>
              <p className="text-white/80 text-lg">Devis gratuit et sans engagement. Réponse sous 48h.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <a href="tel:0685031144" className="text-xl font-bold text-white flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                06 85 03 11 44
              </a>
              <Link href="/contact" className="bg-accent text-white px-10 py-4 rounded-xl font-bold hover:bg-accent-hover transition-colors shadow-lg">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
