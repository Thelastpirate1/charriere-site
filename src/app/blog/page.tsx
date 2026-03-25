import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Conseils Cuisine, Rénovation & Artisanat | CHARRIERE SARL",
  description:
    "Conseils pratiques d'un artisan avec 20 ans d'expérience : choisir sa cuisine, budget rénovation salle de bain, aménagement intérieur. Blog CHARRIERE SARL, Yvelines (78).",
  keywords: [
    "blog artisan cuisine",
    "conseils rénovation",
    "guide cuisine 2026",
    "blog rénovation yvelines",
  ],
  alternates: { canonical: "https://charriere-artisan.fr/blog" },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden pt-28 pb-14 md:pt-32 md:pb-18">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-headline mb-5">
            Nos Conseils d&apos;Artisan
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Guides pratiques, astuces et conseils pour vos projets de cuisine,
            salle de bain et rénovation intérieure — par un artisan avec plus de
            20 ans d&apos;expérience.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group bg-surface-container-lowest rounded-xl ghost-border overflow-hidden hover:shadow-ambient transition-all duration-500"
            >
              {article.image && (
                <Link href={`/blog/${article.slug}`}>
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.imageAlt || article.title}
                      fill
                      className="object-cover img-zoom"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Link>
              )}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-on-surface-variant mb-4 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-on-surface font-headline mb-3 leading-tight">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>

                <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                  {article.excerpt}
                </p>

                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                >
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-container-low py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-on-surface-variant mb-6">
            Demandez votre devis gratuit et sans engagement. Nous vous rappelons sous 48h.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
          >
            Demander un devis gratuit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
