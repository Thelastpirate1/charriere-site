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
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#1B4F72] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Conseils d&apos;Artisan
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Guides pratiques, astuces et conseils pour vos projets de cuisine,
            salle de bain et rénovation intérieure — par un artisan avec plus de
            20 ans d&apos;expérience.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              {article.image && (
                <Link href={`/blog/${article.slug}`}>
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={article.image}
                      alt={article.imageAlt || article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Link>
              )}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#1B4F72]/10 text-[#1B4F72] rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-[#1B4F72] transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1 text-[#E67E22] font-semibold text-sm hover:gap-2 transition-all"
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
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-gray-600 mb-6">
            Demandez votre devis gratuit et sans engagement. Nous vous rappelons
            sous 48h.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </main>
  );
}
