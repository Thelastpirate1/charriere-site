import Link from "next/link";
import { Mail, MapPin, Clock, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 px-6 lg:px-8 py-14 max-w-7xl mx-auto">
        {/* Company info */}
        <div className="space-y-5">
          <div className="text-xl font-bold text-primary font-headline">CHARRIERE SARL</div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Artisan rénovateur passionné intervenant dans toutes les Yvelines depuis 2002.
            Qualité, rigueur et respect des délais.
          </p>
          <p className="text-xs text-outline">SIRET : 444 547 905 00042</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-headline text-base text-primary font-bold mb-5">Nos Services</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li>
              <Link href="/services#pose-cuisine" className="hover:text-accent hover:underline decoration-accent decoration-2 underline-offset-4 transition-all">
                Cuisine sur-mesure
              </Link>
            </li>
            <li>
              <Link href="/services#salle-de-bain" className="hover:text-accent hover:underline decoration-accent decoration-2 underline-offset-4 transition-all">
                Salle de bain
              </Link>
            </li>
            <li>
              <Link href="/services#renovation" className="hover:text-accent hover:underline decoration-accent decoration-2 underline-offset-4 transition-all">
                Rénovation intérieure
              </Link>
            </li>
            <li>
              <Link href="/services#amenagement" className="hover:text-accent hover:underline decoration-accent decoration-2 underline-offset-4 transition-all">
                Aménagement sur-mesure
              </Link>
            </li>
          </ul>
        </div>

        {/* Liens utiles */}
        <div>
          <h4 className="font-headline text-base text-primary font-bold mb-5">Liens Utiles</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li>
              <Link href="/realisations" className="hover:text-accent hover:underline decoration-accent decoration-2 underline-offset-4 transition-all">
                Nos Réalisations
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-accent hover:underline decoration-accent decoration-2 underline-offset-4 transition-all">
                Blog & Conseils
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:text-accent hover:underline decoration-accent decoration-2 underline-offset-4 transition-all">
                Mentions Légales
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent hover:underline decoration-accent decoration-2 underline-offset-4 transition-all">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-headline text-base text-primary font-bold mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <a href="tel:0685031144" className="hover:text-accent transition-colors">06 85 03 11 44</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <a href="mailto:contact@charriere-artisan.fr" className="hover:text-accent transition-colors">contact@charriere-artisan.fr</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <span>78440 Gargenville, Yvelines</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <span>Lun-Ven : 8h-18h</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 border-t border-outline-variant/20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-outline">
          <p>&copy; {new Date().getFullYear()} CHARRIERE SARL. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link>
            <Link href="/mentions-legales#rgpd" className="hover:text-primary transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
