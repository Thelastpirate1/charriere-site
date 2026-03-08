import Link from "next/link";
import Image from "next/image";
import {
  ChefHat, Wrench, Bath, Ruler, Star, Shield, Clock, CheckCircle,
  ArrowRight, Award, Users, Home, Hammer, MessageCircle
} from "lucide-react";

const services = [
  {
    icon: ChefHat,
    title: "Pose de Cuisine",
    desc: "Installation complète de cuisines équipées : meubles, plans de travail, électroménager, raccordements plomberie et électricité.",
    badge: "Spécialité",
  },
  {
    icon: Wrench,
    title: "Rénovation Intérieure",
    desc: "Travaux de rénovation tous corps de métier : peinture, sol, plafond, cloison, électricité, plomberie.",
    badge: null,
  },
  {
    icon: Bath,
    title: "Salle de Bain",
    desc: "Création et rénovation de salles de bain : carrelage, plomberie, douche à l'italienne, meubles vasque.",
    badge: null,
  },
  {
    icon: Ruler,
    title: "Aménagement Sur-Mesure",
    desc: "Dressing, rangements, bibliothèques, agencement intérieur personnalisé selon vos besoins et votre espace.",
    badge: null,
  },
];

const stats = [
  { icon: Award, value: "20+", label: "Années d'expérience" },
  { icon: Home, value: "500+", label: "Chantiers réalisés" },
  { icon: Users, value: "100%", label: "Clients satisfaits" },
  { icon: Hammer, value: "78", label: "Yvelines & IDF Ouest" },
];

const testimonials = [
  {
    name: "Marie L.",
    location: "Poissy (78)",
    text: "Excellent travail pour la pose de notre cuisine Schmidt. Propre, ponctuel, et un résultat impeccable. Je recommande sans hésiter.",
    rating: 5,
  },
  {
    name: "Thomas D.",
    location: "Mantes-la-Jolie (78)",
    text: "M. Charriere a rénové notre salle de bain en 5 jours, dans les délais et le budget annoncé. Travail soigné et professionnel.",
    rating: 5,
  },
  {
    name: "Sophie R.",
    location: "Conflans-Sainte-Honorine (78)",
    text: "Pose de cuisine Ixina + réfection du sol et peinture. Tout a été fait en une semaine. Très bon artisan, je referai appel à lui.",
    rating: 5,
  },
];

const engagements = [
  { icon: Shield, title: "Garantie décennale", desc: "Tous nos travaux sont couverts par une assurance décennale" },
  { icon: Clock, title: "Délais respectés", desc: "Planning clair, dates de début et fin tenues" },
  { icon: CheckCircle, title: "Devis gratuit sous 48h", desc: "Devis transparent, détaillé, sans surprise" },
  { icon: Star, title: "Finition impeccable", desc: "20 ans de métier, le souci du détail" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="gradient-hero relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Award className="w-4 h-4 text-[#E67E22]" />
              <span className="text-sm text-white/90">Plus de 20 ans d&apos;expérience dans les Yvelines</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Votre artisan cuisine
              <br />
              <span className="text-[#E67E22]">de confiance</span> dans le 78
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Pose de cuisine, rénovation et aménagement intérieur. Un savoir-faire artisanal
              reconnu à Gargenville et dans toutes les Yvelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] text-white text-lg font-semibold rounded-xl hover:bg-[#D35400] transition-colors"
              >
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Être rappelé gratuitement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white -mt-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#E67E22]" />
                <div className="text-3xl font-bold text-[#1B4F72]">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#E67E22] uppercase tracking-wider">Ce que nous faisons</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4F72] mt-2">Nos services</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              De la pose de cuisine à la rénovation complète, nous intervenons sur tous
              vos projets d&apos;aménagement intérieur dans les Yvelines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="card-hover bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
                {s.badge && (
                  <span className="absolute top-4 right-4 text-xs font-semibold bg-[#E67E22]/10 text-[#E67E22] px-2 py-1 rounded-full">
                    {s.badge}
                  </span>
                )}
                <div className="w-12 h-12 rounded-lg bg-[#1B4F72]/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-[#1B4F72]" />
                </div>
                <h3 className="text-lg font-bold text-[#2C3E50] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#1B4F72] font-semibold hover:text-[#E67E22] transition-colors">
              Voir tous nos services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/hero-about.webp"
                  alt="Artisan posant une cuisine"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#E67E22] text-white px-6 py-3 rounded-xl shadow-lg">
                <span className="text-2xl font-bold">20+</span>
                <span className="text-sm block">ans d&apos;expérience</span>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold text-[#E67E22] uppercase tracking-wider">Qui sommes-nous</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B4F72] mt-2 mb-6">
                Un artisan de confiance depuis plus de 20 ans
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fondée à Gargenville, CHARRIERE SARL est une entreprise artisanale
                spécialisée dans la pose de cuisine et les travaux de rénovation
                intérieure tous corps de métier.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fort de plus de 20 ans d&apos;expérience, nous intervenons dans tout
                le département des Yvelines (78) et les départements limitrophes :
                Val-d&apos;Oise (95), Hauts-de-Seine (92) et Eure (27).
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Notre force : un savoir-faire reconnu par les plus grandes enseignes
                de cuisine (Schmidt, Ixina, Mobalpa, Leroy Merlin) qui nous confient
                régulièrement leurs installations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {engagements.map((e, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <e.icon className="w-5 h-5 text-[#27AE60] mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#2C3E50]">{e.title}</h4>
                      <p className="text-xs text-gray-500">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#E67E22] uppercase tracking-wider">Avis clients</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4F72] mt-2">Ce que disent nos clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#F39C12] text-[#F39C12]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#2C3E50] text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#E67E22] uppercase tracking-wider">Couverture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4F72] mt-2">Notre zone d&apos;intervention</h2>
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
              <div key={i} className={`p-5 rounded-xl border ${z.primary ? "bg-[#1B4F72] text-white border-[#1B4F72]" : "bg-white border-gray-200"}`}>
                <h3 className={`font-bold text-lg mb-1 ${z.primary ? "text-white" : "text-[#1B4F72]"}`}>{z.zone}</h3>
                <p className={`text-sm ${z.primary ? "text-white/80" : "text-gray-500"}`}>{z.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Un projet de cuisine ou de rénovation ?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et sans engagement. Réponse sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] text-white text-lg font-semibold rounded-xl hover:bg-[#D35400] transition-colors">
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              <MessageCircle className="w-5 h-5" /> Être rappelé gratuitement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
