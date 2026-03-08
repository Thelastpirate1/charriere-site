import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CHARRIERE SARL</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Artisan poseur de cuisine et tous corps de métier depuis plus de 20 ans.
              Intervention dans les Yvelines et Île-de-France Ouest.
            </p>
            <p className="text-xs text-gray-400">SIRET : XXX XXX XXX XXXXX</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services#pose-cuisine" className="hover:text-[#E67E22] transition-colors">Pose de cuisine</Link></li>
              <li><Link href="/services#renovation" className="hover:text-[#E67E22] transition-colors">Rénovation intérieure</Link></li>
              <li><Link href="/services#salle-de-bain" className="hover:text-[#E67E22] transition-colors">Salle de bain</Link></li>
              <li><Link href="/services#amenagement" className="hover:text-[#E67E22] transition-colors">Aménagement sur-mesure</Link></li>
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h4 className="font-semibold mb-4">Zone d&apos;intervention</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Gargenville &amp; environs</li>
              <li>Mantes-la-Jolie, Poissy</li>
              <li>Saint-Germain-en-Laye</li>
              <li>Conflans, Cergy-Pontoise</li>
              <li>Tout le département 78</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#E67E22]" />
                <a href="tel:+33600000000" className="hover:text-[#E67E22]">06 XX XX XX XX</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-[#E67E22]" />
                <a href="mailto:contact@charriere-sarl.fr" className="hover:text-[#E67E22]">contact@charriere-sarl.fr</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#E67E22]" />
                <span>78440 Gargenville</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-[#E67E22]" />
                <span>Lun-Ven : 8h-18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-600 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} CHARRIERE SARL — Tous droits réservés</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-gray-200">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-gray-200">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
