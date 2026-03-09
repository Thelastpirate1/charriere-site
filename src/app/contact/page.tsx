"use client";
import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle, PhoneCall, Shield, Zap, AlertCircle, Loader2 } from "lucide-react";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form fields
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://n8n.otsdr.fr/webhook/charriere-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${name}`.trim(),
          email: email || "non-fourni@charriere-artisan.fr",
          phone,
          projectType,
          message: city ? `[Ville: ${city}] ${message}` : message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Erreur lors de l'envoi");
      }

      // Envoi événement GA4 conversion
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "formulaire",
          event_label: projectType,
          value: 1,
        });
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Form submit error:", err);
      setError(
        "Une erreur est survenue. Vous pouvez nous appeler directement au 06 75 43 95 80."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Être rappelé gratuitement</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Laissez-nous vos coordonnées et décrivez votre projet.
            Nous vous rappelons sous 48h pour un devis gratuit.
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
                <h2 className="text-2xl font-bold text-[#1B4F72] mb-6">Comment ça marche ?</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#E67E22]/10 flex items-center justify-center shrink-0">
                      <Send className="w-5 h-5 text-[#E67E22]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C3E50]">1. Décrivez votre projet</h3>
                      <p className="text-gray-600 text-sm">Remplissez le formulaire avec les détails de votre projet et vos coordonnées.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#E67E22]/10 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5 text-[#E67E22]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C3E50]">2. Nous vous rappelons</h3>
                      <p className="text-gray-600 text-sm">Un artisan vous contacte sous 48h pour discuter de votre projet et planifier une visite.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#E67E22]/10 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-[#E67E22]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C3E50]">3. Devis gratuit sur place</h3>
                      <p className="text-gray-600 text-sm">Visite gratuite, prise de mesures et devis détaillé sans engagement.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Reassurance */}
              <div className="bg-[#1B4F72]/5 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-[#27AE60]" />
                  <h3 className="font-semibold text-[#2C3E50]">Nos engagements</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Rappel sous 48h maximum</li>
                  <li>Devis gratuit et sans engagement</li>
                  <li>Vos données restent confidentielles</li>
                  <li>Garantie décennale sur tous les travaux</li>
                </ul>
              </div>

              {/* Zone + infos */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1B4F72] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#2C3E50]">Zone d&apos;intervention</h4>
                    <p className="text-sm text-gray-500">Yvelines (78), Val-d&apos;Oise (95), Hauts-de-Seine (92), Eure (27)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1B4F72] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#2C3E50]">Disponibilités</h4>
                    <p className="text-sm text-gray-500">Lun-Ven 8h-18h, Samedi sur rendez-vous</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#1B4F72] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#2C3E50]">Email</h4>
                    <a href="mailto:contact@charriere-artisan.fr" className="text-sm text-[#E67E22] hover:underline">contact@charriere-artisan.fr</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-[#27AE60] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">Demande envoyée !</h2>
                  <p className="text-gray-600">
                    Merci pour votre message. Nous vous rappellerons sous 48h
                    pour discuter de votre projet.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 space-y-5">
                  <h2 className="text-2xl font-bold text-[#1B4F72] mb-2">Demande de rappel gratuit</h2>
                  <p className="text-sm text-gray-500 mb-6">Remplissez le formulaire, nous vous rappelons sous 48h pour discuter de votre projet.</p>

                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2C3E50] mb-1">Nom *</label>
                      <input
                        type="text"
                        required
                        placeholder="Votre nom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={loading}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2C3E50] mb-1">Prénom *</label>
                      <input
                        type="text"
                        required
                        placeholder="Votre prénom"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        disabled={loading}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2C3E50] mb-1">Téléphone (pour le rappel) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="06 XX XX XX XX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={loading}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2C3E50] mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="votre@email.fr"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C3E50] mb-1">Ville *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex : Poissy (78)"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C3E50] mb-1">Type de travaux *</label>
                    <select
                      required
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none bg-white disabled:opacity-50"
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1B4F72] focus:border-transparent outline-none resize-none disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <PhoneCall className="w-5 h-5" />
                        Demander à être rappelé
                      </>
                    )}
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
