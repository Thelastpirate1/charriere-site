import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Shield, Clock, CheckCircle, Star,
  Award, Users, Home, Phone, Verified, Timer, MapPin
} from "lucide-react";

const services = [
  {
    title: "Pose de Cuisine",
    image: "/images/service-cuisine.webp",
    href: "/services#pose-cuisine",
  },
  {
    title: "Rénovation Salle de Bain",
    image: "/images/service-sdb.webp",
    href: "/services#salle-de-bain",
  },
  {
    title: "Peinture & Rénovation",
    image: "/images/service-renovation.webp",
    href: "/services#renovation",
  },
  {
    title: "Aménagement Intérieur",
    image: "/images/service-amenagement.webp",
    href: "/services#amenagement",
  },
];

const testimonials = [
  {
    name: "Marie L.",
    initials: "ML",
    location: "Poissy (78)",
    text: "Un travail d'une précision remarquable pour notre cuisine. Daniel a su écouter nos besoins tout en apportant ses conseils d'expert. Chantier propre et délais respectés. Je recommande vivement !",
    rating: 5,
  },
  {
    name: "Jean-Pierre D.",
    initials: "JD",
    location: "Mantes-la-Jolie (78)",
    text: "Rénovation complète de notre salle de bain. Le résultat dépasse nos attentes. Le sens du détail et la finition sont irréprochables. Enfin un artisan de confiance dans les Yvelines.",
    rating: 5,
  },
];

const portfolio = [
  { title: "Cuisine sur-mesure", subtitle: "Appartement Haussmannien, Poissy", image: "/images/real-cuisine-schmidt-poissy.webp", span: "md:col-span-8", aspect: "aspect-video" },
  { title: "Salle d'eau Moderne", subtitle: "Mantes-la-Jolie", image: "/images/real-sdb-conflans.webp", span: "md:col-span-4", aspect: "aspect-square md:aspect-auto" },
  { title: "Rénovation Peinture", subtitle: "Gargenville", image: "/images/real-sde-gargenville.webp", span: "md:col-span-4", aspect: "aspect-square md:aspect-auto" },
  { title: "Aménagement de Combles", subtitle: "Épône", image: "/images/real-renov-epone.webp", span: "md:col-span-8", aspect: "aspect-video" },
];

export default function HomePage() {
  return (
    <>
      {/* ======= HERO ======= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-about.webp"
            alt="Rénovation intérieure cuisine haut de gamme"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-6 bg-secondary/20 text-white border border-secondary/30 rounded-full text-sm font-bold tracking-wider">
              DEPUIS 2002
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-headline leading-[1.1] mb-6">
              Votre Artisan Rénovation dans les Yvelines
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium mb-10 leading-relaxed">
              Cuisine &bull; Salle de bain &bull; Peinture &bull; Aménagement intérieur.
              Expertise et passion pour vos projets de vie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Demander un Devis Gratuit
              </Link>
              <a
                href="tel:0685031144"
                className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                06 85 03 11 44
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======= TRUST BAR ======= */}
      <section className="bg-surface-container py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <Verified className="w-7 h-7 text-primary shrink-0" />
              <span className="font-semibold text-on-surface text-sm">20+ ans d&apos;expérience</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-7 h-7 text-primary shrink-0" />
              <span className="font-semibold text-on-surface text-sm">Artisan certifié</span>
            </div>
            <div className="flex items-center gap-3">
              <Timer className="w-7 h-7 text-primary shrink-0" />
              <span className="font-semibold text-on-surface text-sm">Devis gratuit sous 48h</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-7 h-7 text-primary shrink-0" />
              <span className="font-semibold text-on-surface text-sm">Yvelines & Île-de-France</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======= SERVICES GRID ======= */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">
                Nos Domaines d&apos;Expertise
              </h2>
              <p className="text-on-surface-variant">
                Du conseil à la réalisation finale, nous transformons votre habitat avec rigueur et souci du détail.
              </p>
            </div>
            <Link
              href="/services"
              className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300"
            >
              Voir tous nos services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white font-headline mb-2">{s.title}</h3>
                  <span className="text-sm text-white/80 flex items-center gap-2 group-hover:text-white transition-colors">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======= ABOUT ======= */}
      <section className="py-20 md:py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Images staggered */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="mt-8 aspect-[3/4] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-about.webp"
                    alt="Artisan travaillant avec soin"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="-mt-8 aspect-[3/4] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/service-renovation.webp"
                    alt="Plans de rénovation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-1/2">
              <h4 className="text-secondary font-bold tracking-widest text-sm mb-4 uppercase">
                L&apos;excellence artisanale
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-primary mb-8 leading-tight">
                Daniel Charriere : Une passion transmise au service de vos murs.
              </h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed text-base md:text-lg">
                <p>
                  Depuis plus de deux décennies, Daniel Charriere façonne les intérieurs des Yvelines
                  avec une philosophie simple : la perfection réside dans le détail. Ce qui n&apos;était au départ
                  qu&apos;une passion pour le bois et la matière est devenu une entreprise familiale reconnue
                  pour sa rigueur.
                </p>
                <p>
                  Ancrés localement, nous privilégions la proximité et le dialogue pour transformer
                  chaque contrainte technique en une opportunité esthétique. Pour nous, chaque chantier
                  est une pièce unique.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary font-headline">2002</div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-wider">Fondation</div>
                </div>
                <div className="w-px h-12 bg-outline-variant" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary font-headline">500+</div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-wider">Projets finis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= PORTFOLIO (Asymmetric grid) ======= */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Nos Réalisations</h2>
            <div className="w-20 h-1.5 bg-tertiary-container rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {portfolio.map((p, i) => (
              <div key={i} className={`${p.span} group relative overflow-hidden rounded-xl ${p.aspect}`}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-all duration-300" />
                <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {p.subtitle && <p className="text-sm font-bold uppercase tracking-widest mb-1">{p.subtitle}</p>}
                  <h3 className="font-headline text-xl md:text-2xl font-bold">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/realisations" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              Voir toutes nos réalisations <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======= TESTIMONIALS ======= */}
      <section className="py-20 md:py-24 bg-surface-container-high/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">
              La satisfaction de nos clients
            </h2>
            <p className="text-on-surface-variant">Ils nous ont fait confiance pour transformer leur foyer.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-2xl shadow-ambient ghost-border relative">
                <div className="text-6xl font-headline text-tertiary-fixed-dim/20 absolute -top-3 -left-2 select-none">&ldquo;</div>
                <div className="flex text-secondary mb-4 gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-base md:text-lg italic text-on-surface mb-8 leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-on-surface-variant">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= ZONE D'INTERVENTION ======= */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">
              Notre zone d&apos;intervention
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { zone: "Yvelines (78)", cities: "Gargenville, Mantes, Poissy, St-Germain, Versailles", primary: true },
              { zone: "Val-d'Oise (95)", cities: "Cergy, Pontoise, Conflans, Herblay", primary: false },
              { zone: "Hauts-de-Seine (92)", cities: "Nanterre, Rueil-Malmaison, Boulogne", primary: false },
              { zone: "Eure (27)", cities: "Vernon, Les Andelys, Évreux", primary: false },
              { zone: "Oise (60)", cities: "Méru, Chaumont-en-Vexin", primary: false },
              { zone: "Essonne (91)", cities: "Sur devis selon localisation", primary: false },
            ].map((z, i) => (
              <div
                key={i}
                className={`p-5 rounded-xl transition-all duration-300 ${
                  z.primary
                    ? "btn-primary-gradient text-white shadow-ambient"
                    : "bg-surface-container-lowest ghost-border hover:shadow-ambient"
                }`}
              >
                <h3 className={`font-bold text-lg font-headline mb-1 ${z.primary ? "text-white" : "text-primary"}`}>
                  {z.zone}
                </h3>
                <p className={`text-sm ${z.primary ? "text-white/80" : "text-on-surface-variant"}`}>
                  {z.cities}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA BANNER ======= */}
      <section className="py-14 md:py-16 bg-primary overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-white mb-4">
                Un projet de rénovation ?
              </h2>
              <p className="text-white/80 text-lg">
                Parlons-en dès aujourd&apos;hui et obtenez votre étude gratuite.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <a
                href="tel:0685031144"
                className="text-xl md:text-2xl font-bold text-white flex items-center gap-3"
              >
                <Phone className="w-6 h-6 text-secondary" />
                06 85 03 11 44
              </a>
              <Link
                href="/contact"
                className="bg-accent text-white px-10 py-4 rounded-xl font-bold hover:bg-accent-hover transition-colors shadow-lg"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
