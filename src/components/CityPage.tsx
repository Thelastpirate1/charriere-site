import Link from "next/link";
import {
  ChefHat, Wrench, Bath, Ruler, MapPin, ArrowRight, CheckCircle,
  PhoneCall, Shield, Clock, Star
} from "lucide-react";

interface CityData {
  name: string;
  slug: string;
  department: string;
  postalCode: string;
  distance: string;
  description: string;
  localInfo: string;
  neighborhoods: string[];
  nearbyAreas: string[];
}

const services = [
  {
    icon: ChefHat,
    title: "Pose de Cuisine",
    desc: "Installation complète de cuisine équipée : montage, plan de travail, plomberie, électricité, finitions.",
  },
  {
    icon: Wrench,
    title: "Rénovation Intérieure",
    desc: "Peinture, sol, cloisons, électricité, plomberie. Un seul artisan pour tous vos travaux.",
  },
  {
    icon: Bath,
    title: "Salle de Bain",
    desc: "Création et rénovation complète : carrelage, douche italienne, plomberie, électricité.",
  },
  {
    icon: Ruler,
    title: "Aménagement Sur-Mesure",
    desc: "Dressings, rangements, bibliothèques, meubles intégrés adaptés à votre espace.",
  },
];

const engagements = [
  "Devis gratuit et sans engagement",
  "Rappel sous 48h",
  "Garantie décennale sur tous les travaux",
  "Plus de 20 ans d'expérience",
  "Un seul interlocuteur du début à la fin",
  "Chantier propre et respectueux",
];

export default function CityPage({ city }: { city: CityData }) {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-[#E67E22]" />
            <span className="text-sm text-white/90">{city.name} ({city.postalCode}) — à {city.distance} de notre atelier</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Artisan Poseur de Cuisine à {city.name}
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            {city.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] text-white font-semibold rounded-xl hover:bg-[#D35400] transition-colors"
            >
              <PhoneCall className="w-5 h-5" />
              Être rappelé gratuitement
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              Voir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro locale */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B4F72] mb-6">
            Votre artisan de confiance à {city.name}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Basés à Gargenville (78440), nous intervenons régulièrement à <strong>{city.name}</strong> et dans tout le {city.department}.
              Avec plus de 20 ans d&apos;expérience dans le bâtiment et la pose de cuisine, CHARRIERE SARL est le partenaire
              idéal pour vos projets de rénovation et d&apos;aménagement intérieur.
            </p>
            <p>{city.localInfo}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B4F72] text-center mb-4">
            Nos services à {city.name}
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            De la pose de cuisine à la rénovation complète, nous réalisons tous vos travaux d&apos;intérieur.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1B4F72]/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-[#1B4F72]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C3E50] mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#1B4F72] font-semibold hover:text-[#E67E22] transition-colors"
            >
              Voir le détail de nos prestations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B4F72] text-center mb-12">
            Pourquoi choisir CHARRIERE SARL ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {engagements.map((e) => (
              <div key={e} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-[#27AE60] mt-0.5 shrink-0" />
                <span className="text-[#2C3E50] font-medium">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones à proximité */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1B4F72] mb-6">
            Nous intervenons aussi autour de {city.name}
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {city.nearbyAreas.map((area) => (
              <span key={area} className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 border border-gray-200">
                {area}
              </span>
            ))}
          </div>
          {city.neighborhoods.length > 0 && (
            <>
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-3">Quartiers de {city.name} desservis :</h3>
              <div className="flex flex-wrap gap-2">
                {city.neighborhoods.map((n) => (
                  <span key={n} className="px-3 py-1.5 bg-[#1B4F72]/5 rounded-lg text-sm text-[#1B4F72]">
                    {n}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Avis / Confiance */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#E67E22] text-[#E67E22]" />
            ))}
          </div>
          <p className="text-lg text-gray-600 italic mb-2">
            &quot;Un travail soigné, dans les délais et au prix annoncé. Je recommande vivement.&quot;
          </p>
          <p className="text-sm text-gray-400">— Client à {city.name}</p>
        </div>
      </section>

      {/* CTA final */}
      <section className="gradient-hero py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d&apos;un artisan à {city.name} ?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Devis gratuit, rappel sous 48h, et garantie décennale sur tous nos travaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] text-white font-semibold rounded-xl hover:bg-[#D35400] transition-colors"
            >
              <PhoneCall className="w-5 h-5" />
              Demander un devis gratuit
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Réponse sous 48h</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>À {city.distance} de {city.name}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
