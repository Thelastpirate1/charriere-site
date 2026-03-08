"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Pose de cuisine",
  "Rénovation intérieure",
  "Salle de bain",
  "Aménagement sur-mesure",
  "Relooking cuisine",
  "Autre",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service or API
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contactez-nous</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Demandez votre devis gratuit ou posez-nous vos questions.
            Nous répondons sous 48h.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1B4F72] mb-6">Nos coordonnées</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1B4F72]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#1B4F72]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C3E50]">Téléphone</h3>
                      <a href="tel:+33600000000" className="text-[#E67E22] font-medium hover:underline">
                        06 XX XX XX XX
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1B4F72]/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#1B4F72]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C3E50]">Email</h3>
                      <a href="mailto:contact@charriere-sarl.fr" className="text-[#E67E22] font-medium hover:underline">
                        contact@charriere-sarl.fr
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1B4F72]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#1B4F72]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C3E50]">Adresse</h3>
                      <p className="text-gray-600 text-sm">78440 Gargenville<br />Yvelines, Île-de-France</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1B4F72]/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#1B4F72]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C3E50]">Horaires</h3>
                      <p className="text-gray-600 text-sm">Lundi — Vendredi : 8h — 18h<br />Samedi : sur rendez-vous</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Zone */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-[#2C3E50] mb-3">Zone d&apos;intervention</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nous intervenons dans tout le département des Yvelines (78) ainsi que dans
                  le Val-d&apos;Oise (95), les Hauts-de-Seine (92), l&apos;Eure (27) et l&apos;Oise (60).
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-[#27AE60] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">Demande envoyée !</h2>
                  <p className="text-gray-600">
                    Merci pour votre message. Nous vous recontacterons sous 48h
                    pour discuter de votre projet.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 space-y-5">
                  <h2 className="text-2xl font-bold text-[#1B4F72] mb-2">Demande de devis gratuit</h2>
                  <p className="text-sm text-gray-500 mb-6">Remplissez le formulaire, nous vous recontactons sous 48h.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2C3E50] mb-1">Nom *</label>
                      <input
                        type="text"
                        required
                        placeholder="Votre nom"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2C3E50] mb-1">Prénom *</label>
                      <input
                        type="text"
                        required
                        placeholder="Votre prénom"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2C3E50] mb-1">Téléphone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="06 XX XX XX XX"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2C3E50] mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="votre@email.fr"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C3E50] mb-1">Ville *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex : Poissy (78)"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C3E50] mb-1">Type de travaux *</label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Sélectionnez un service</option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C3E50] mb-1">Décrivez votre projet *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Décrivez votre projet : surface, type de travaux, contraintes particulières, date souhaitée..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors text-lg"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer ma demande de devis
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    En soumettant ce formulaire, vous acceptez d&apos;être recontacté par CHARRIERE SARL
                    concernant votre projet. Vos données ne seront jamais partagées avec des tiers.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
