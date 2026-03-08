import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | CHARRIERE SARL",
  description: "Mentions légales du site charriere-artisan.fr — CHARRIERE SARL, artisan poseur de cuisines et rénovation à Gargenville (78).",
};

export default function MentionsLegales() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Mentions Légales
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray">

          <h2 className="text-2xl font-bold text-[#1B4F72] mt-8 mb-4">1. Éditeur du site</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le site <strong>charriere-artisan.fr</strong> est édité par :
          </p>
          <ul className="list-none space-y-2 text-gray-700 mb-6">
            <li><strong>Raison sociale :</strong> CHARRIERE SARL</li>
            <li><strong>Forme juridique :</strong> Société à Responsabilité Limitée (SARL)</li>
            <li><strong>Capital social :</strong> 8 000 €</li>
            <li><strong>Siège social :</strong> 3 Rue des Longues Raies, 78440 Gargenville</li>
            <li><strong>SIREN :</strong> 444 547 905</li>
            <li><strong>SIRET :</strong> 444 547 905 00042</li>
            <li><strong>RCS :</strong> Versailles</li>
            <li><strong>N° TVA intracommunautaire :</strong> FR39 444 547 905</li>
            <li><strong>Gérant :</strong> Daniel Charriere</li>
            <li><strong>Email :</strong> contact@charriere-artisan.fr</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1B4F72] mt-8 mb-4">2. Hébergeur</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le site est hébergé par <strong>Hetzner Online GmbH</strong>, Industriestr. 25, 91710 Gunzenhausen, Allemagne.
            Site web : <a href="https://www.hetzner.com" target="_blank" rel="noopener noreferrer" className="text-[#2E86C1] underline">www.hetzner.com</a>
          </p>

          <h2 className="text-2xl font-bold text-[#1B4F72] mt-8 mb-4">3. Activité</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            CHARRIERE SARL est spécialisée dans la pose de cuisines équipées, la rénovation intérieure,
            l&apos;aménagement de salles de bain et les travaux d&apos;aménagement sur-mesure. L&apos;entreprise intervient
            principalement dans les Yvelines (78) et les départements limitrophes (95, 92, 27, 60).
          </p>

          <h2 className="text-2xl font-bold text-[#1B4F72] mt-8 mb-4">4. Propriété intellectuelle</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, mise en page)
            est la propriété exclusive de CHARRIERE SARL ou de ses partenaires. Toute reproduction,
            représentation, modification, publication ou adaptation de tout ou partie des éléments du site,
            quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable
            de CHARRIERE SARL.
          </p>

          <h2 id="rgpd" className="text-2xl font-bold text-[#1B4F72] mt-8 mb-4">5. Protection des données personnelles (RGPD)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
            Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez des droits suivants
            concernant vos données personnelles :
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
            <li>Droit d&apos;accès, de rectification et de suppression</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit d&apos;opposition et de limitation du traitement</li>
            <li>Droit de retirer votre consentement à tout moment</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Données collectées :</strong> Le formulaire de contact collecte votre nom, prénom,
            email, numéro de téléphone et le descriptif de votre projet. Ces données sont utilisées
            uniquement pour répondre à votre demande de devis ou de rappel.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Durée de conservation :</strong> Vos données sont conservées pendant une durée
            maximale de 3 ans à compter de votre dernier contact avec l&apos;entreprise.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pour exercer vos droits, contactez-nous à : <strong>contact@charriere-artisan.fr</strong>.
            En cas de litige, vous pouvez adresser une réclamation à la CNIL (www.cnil.fr).
          </p>

          <h2 className="text-2xl font-bold text-[#1B4F72] mt-8 mb-4">6. Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ce site n&apos;utilise actuellement aucun cookie de suivi ni cookie publicitaire.
            Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent
            être déposés sur votre navigateur. Aucune donnée n&apos;est transmise à des tiers à des
            fins publicitaires.
          </p>

          <h2 className="text-2xl font-bold text-[#1B4F72] mt-8 mb-4">7. Responsabilité</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            CHARRIERE SARL s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site.
            Toutefois, elle ne peut garantir l&apos;exactitude, la complétude et l&apos;actualité des informations
            mises à disposition. L&apos;entreprise décline toute responsabilité pour les éventuelles
            imprécisions, inexactitudes ou omissions portant sur les informations disponibles sur le site.
          </p>

          <h2 className="text-2xl font-bold text-[#1B4F72] mt-8 mb-4">8. Liens hypertextes</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le site peut contenir des liens vers d&apos;autres sites. CHARRIERE SARL n&apos;exerce aucun
            contrôle sur le contenu de ces sites tiers et décline toute responsabilité quant à leur
            contenu.
          </p>

          <h2 className="text-2xl font-bold text-[#1B4F72] mt-8 mb-4">9. Droit applicable</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Les présentes mentions légales sont régies par le droit français. En cas de litige,
            les tribunaux compétents du ressort de Versailles seront seuls compétents.
          </p>

          <p className="text-sm text-gray-400 mt-12">
            Dernière mise à jour : mars 2026
          </p>
        </div>
      </section>
    </>
  );
}
