import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Réalisations — Nos Chantiers Cuisine & Rénovation",
  description:
    "Découvrez nos réalisations : pose de cuisine, rénovation intérieure, salle de bain. Photos avant/après de nos chantiers dans les Yvelines (78).",
};

const projects = [
  { title: "Cuisine Schmidt", lieu: "Poissy (78)", desc: "Pose complète cuisine L, plan de travail quartz, crédence carrelage métro", image: "/images/real-cuisine-schmidt-poissy.webp" },
  { title: "Cuisine Ixina", lieu: "Mantes-la-Jolie (78)", desc: "Installation cuisine en U, îlot central, raccordements", image: "/images/real-cuisine-ixina-mantes.webp" },
  { title: "Salle de bain", lieu: "Conflans-Ste-Honorine (78)", desc: "Douche à l'italienne, double vasque, carrelage grand format", image: "/images/real-sdb-conflans.webp" },
  { title: "Rénovation appartement", lieu: "Cergy (95)", desc: "Rénovation complète T3 : peinture, sol, cuisine, salle de bain", image: "/images/real-renov-cergy.webp" },
  { title: "Cuisine Mobalpa", lieu: "Saint-Germain-en-Laye (78)", desc: "Cuisine haut de gamme, plan travail marbre, électroménager encastré", image: "/images/real-cuisine-mobalpa-stgermain.webp" },
  { title: "Dressing sur-mesure", lieu: "Verneuil-sur-Seine (78)", desc: "Aménagement dressing sous combles, éclairage LED intégré", image: "/images/real-dressing-verneuil.webp" },
  { title: "Salle d'eau", lieu: "Gargenville (78)", desc: "Création salle d'eau en sous-sol, plomberie neuve", image: "/images/real-sde-gargenville.webp" },
  { title: "Rénovation maison", lieu: "Épône (78)", desc: "Cuisine + 2 salles de bain + peinture complète", image: "/images/real-renov-epone.webp" },
  { title: "Relooking cuisine", lieu: "Les Mureaux (78)", desc: "Remplacement plan de travail, nouvelles poignées, peinture", image: "/images/real-relooking-mureaux.webp" },
];

// Asymmetric grid pattern: alternate between wide and narrow
function getGridSpan(index: number): string {
  const pattern = [8, 4, 4, 8, 8, 4, 4, 8, 12];
  return `md:col-span-${pattern[index % pattern.length]}`;
}

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-headline mb-5">
              Nos Réalisations
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Découvrez quelques-uns de nos chantiers récents dans les Yvelines
              et en Île-de-France Ouest.
            </p>
            <div className="w-20 h-1.5 bg-accent rounded-full mt-6" />
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {projects.map((p, i) => {
              const spans = [8, 4, 4, 8, 8, 4, 4, 8, 12];
              const span = spans[i % spans.length];
              return (
                <div
                  key={i}
                  className={`md:col-span-${span} group relative overflow-hidden rounded-xl ${span >= 8 ? "aspect-video" : "aspect-square md:aspect-[3/4]"}`}
                  style={{ gridColumn: `span ${span} / span ${span}` }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover img-zoom"
                    sizes={span >= 8 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/50 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{p.lieu}</p>
                    <h3 className="font-headline text-lg md:text-xl font-bold mb-1">{p.title}</h3>
                    <p className="text-sm text-white/80">{p.desc}</p>
                  </div>
                </div>
              );
            })}
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
                Votre projet peut être le prochain
              </h2>
              <p className="text-white/80 text-lg">Contactez-nous pour discuter de votre projet et obtenir un devis gratuit.</p>
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
