import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getAllSlugs } from "@/data/articles";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `https://charriere-artisan.fr/blog/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedAt,
      authors: ["CHARRIERE SARL"],
      ...(article.image && {
        images: [{
          url: `https://charriere-artisan.fr${article.image}`,
          width: 1200,
          height: 630,
          alt: article.imageAlt || article.title,
        }],
      }),
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Simple markdown to HTML for headings and paragraphs
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3
            key={i}
            className="text-xl font-semibold text-gray-900 mt-8 mb-3"
          >
            {block.replace("### ", "")}
          </h3>
        );
      }
      return (
        <p key={i} className="text-gray-700 leading-relaxed mb-4">
          {block}
        </p>
      );
    });
  };

  // Related articles (same category, excluding current)
  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2);

  // JSON-LD Article schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    ...(article.image && {
      image: `https://charriere-artisan.fr${article.image}`,
    }),
    author: {
      "@type": "Organization",
      name: "CHARRIERE SARL",
      url: "https://charriere-artisan.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "CHARRIERE SARL",
      url: "https://charriere-artisan.fr",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://charriere-artisan.fr/blog/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#1B4F72] text-white py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-blue-200 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
            <div className="flex items-center gap-4 text-sm text-blue-200 mb-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-white/15 rounded-full text-xs font-medium">
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
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {article.title}
            </h1>
          </div>
        </section>

        {/* Hero Image */}
        {article.image && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={article.image}
                alt={article.imageAlt || article.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>
          </div>
        )}

        {/* Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="prose-custom">{renderContent(article.content)}</div>

          {/* CTA in article */}
          <div className="mt-12 p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Besoin d&apos;un devis ?
            </h3>
            <p className="text-gray-600 mb-4">
              CHARRIERE SARL intervient dans tout le département des Yvelines
              (78). Devis gratuit et sans engagement sous 48h.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </article>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Articles similaires
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <span className="text-xs text-[#1B4F72] font-medium">
                      {rel.category}
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 mt-1 leading-snug">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">{rel.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
