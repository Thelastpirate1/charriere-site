"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Mail, MapPin, Clock, Send, CheckCircle, PhoneCall, Shield,
  Zap, AlertCircle, Loader2, Phone
} from "lucide-react";

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
        "Une erreur est survenue. Vous pouvez nous appeler directement au 06 85 03 11 44."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3.5 bg-surface-container-low rounded-lg text-sm text-on-surface placeholder:text-outline focus:bg-surface-container focus:ring-2 focus:ring-primary/20 outline-none transition-all disabled:opacity-50";

  return (
    <>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden pt-28 pb-14 md:pt-32 md:pb-18">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-headline mb-5">
            Être rappelé gratuitement
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Laissez-nous vos coordonnées et décrivez votre projet.
            Nous vous rappelons sous 48h pour un devis gratuit.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Left column - Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary font-headline mb-6">
                  Comment ça marche ?
                </h2>
                <ul className="space-y-6">
                  {[
                    { icon: Send, step: "1", title: "Décrivez votre projet", desc: "Remplissez le formulaire avec les détails de votre projet et vos coordonnées." },
                    { icon: PhoneCall, step: "2", title: "Nous vous rappelons", desc: "Un artisan vous contacte sous 48h pour discuter de votre projet et planifier une visite." },
                    { icon: Zap, step: "3", title: "Devis gratuit sur place", desc: "Visite gratuite, prise de mesures et devis détaillé sans engagement." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-accent">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-on-surface">{item.title}</h3>
                        <p className="text-on-surface-variant text-sm mt-1">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reassurance */}
              <div className="bg-surface-container-low rounded-xl p-6 ghost-border">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-secondary" />
                  <h3 className="font-semibold text-on-surface">Nos engagements</h3>
                </div>
                <ul className="text-sm text-on-surface-variant space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0" /> Rappel sous 48h maximum</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0" /> Devis gratuit et sans engagement</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0" /> Vos données restent confidentielles</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0" /> Garantie décennale sur tous les travaux</li>
                </ul>
              </div>

              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">Téléphone</h4>
                    <a href="tel:0685031144" className="text-sm text-accent hover:underline">06 85 03 11 44</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">Zone d&apos;intervention</h4>
                    <p className="text-sm text-on-surface-variant">Yvelines (78), Val-d&apos;Oise (95), Hauts-de-Seine (92), Eure (27)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">Disponibilités</h4>
                    <p className="text-sm text-on-surface-variant">Lun-Ven 8h-18h, Samedi sur rendez-vous</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">Email</h4>
                    <a href="mailto:contact@charriere-artisan.fr" className="text-sm text-accent hover:underline">contact@charriere-artisan.fr</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-surface-container-lowest rounded-2xl ghost-border p-8 text-center shadow-ambient">
                  <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-on-surface font-headline mb-2">Demande envoyée !</h2>
                  <p className="text-on-surface-variant">
                    Merci pour votre message. Nous vous rappellerons sous 48h
                    pour discuter de votre projet.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-2xl shadow-ambient ghost-border p-6 md:p-8 space-y-5">
                  <h2 className="text-2xl font-bold text-primary font-headline mb-1">Demande de rappel gratuit</h2>
                  <p className="text-sm text-on-surface-variant mb-6">
                    Remplissez le formulaire, nous vous rappelons sous 48h pour discuter de votre projet.
                  </p>

                  {error && (
                    <div className="flex items-start gap-3 bg-error/5 rounded-lg p-4 ghost-border">
                      <AlertCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                      <p className="text-sm text-error">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-on-surface mb-1.5">Nom *</label>
                      <input type="text" required placeholder="Votre nom" value={name} onChange={(e) => setName(e.target.value)} disabled={loading} className={inputClasses} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-on-surface mb-1.5">Prénom *</label>
                      <input type="text" required placeholder="Votre prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={loading} className={inputClasses} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-on-surface mb-1.5">Téléphone *</label>
                      <input type="tel" required placeholder="06 XX XX XX XX" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={loading} className={inputClasses} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-on-surface mb-1.5">Email</label>
                      <input type="email" placeholder="votre@email.fr" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} className={inputClasses} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-on-surface mb-1.5">Ville *</label>
                    <input type="text" required placeholder="Ex : Poissy (78)" value={city} onChange={(e) => setCity(e.target.value)} disabled={loading} className={inputClasses} />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-on-surface mb-1.5">Type de travaux *</label>
                    <select required value={projectType} onChange={(e) => setProjectType(e.target.value)} disabled={loading} className={inputClasses}>
                      <option value="">Sélectionnez un service</option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-on-surface mb-1.5">Décrivez votre projet *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Surface, type de travaux, contraintes particulières, date souhaitée..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={loading}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
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

                  <p className="text-xs text-outline text-center">
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
