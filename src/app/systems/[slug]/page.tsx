import { solutions } from "@/data/solutions";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SolutionIcon from "@/components/SolutionIcon";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return { title: "Solution Not Found" };

  const ogImage =
    "https://supabase-proxy.avinashchate-abc.workers.dev/storage/v1/object/public/profile-assets/headshots/1772463022779-5f1g1i4yo.jpg";

  return {
    title: `${solution.title} — The Future Corporate`,
    description: solution.hook,
    openGraph: {
      title: `${solution.title} — The Future Corporate`,
      description: solution.hook,
      url: `https://thefuturecorporate.com/systems/${slug}`,
      siteName: "The Future Corporate",
      type: "article",
      images: [
        {
          url: ogImage,
          width: 800,
          height: 800,
          alt: `${solution.title} — The Future Corporate`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.title} — The Future Corporate`,
      description: solution.hook,
      images: [ogImage],
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const related = solutions
    .filter(
      (s) => s.category === solution.category && s.slug !== solution.slug
    )
    .slice(0, 3);

  // If no related in same category, pick featured ones
  const relatedSolutions =
    related.length > 0
      ? related
      : solutions
          .filter((s) => s.slug !== solution.slug && s.featured)
          .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold bg-white/10 text-gold px-3 py-1.5 rounded-full uppercase tracking-wide">
                {solution.category}
              </span>
              {solution.featured && (
                <span className="text-xs font-bold bg-gold/20 text-gold px-3 py-1.5 rounded-full">
                  Popular Solution
                </span>
              )}
            </div>
            <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
              <SolutionIcon slug={solution.slug} className="w-7 h-7 text-gold" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {solution.title}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {solution.hook}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={`https://wa.me/918793630001?text=${encodeURIComponent(
                  `Hi, I'm interested in the "${solution.title}" solution for my business.`
                )}`}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3.5 rounded-md font-bold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Discuss This Solution
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white px-8 py-3.5 rounded-md font-semibold transition-colors"
              >
                Request a Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark">
              The Problem
            </h2>
          </div>
          <div className="space-y-4">
            {solution.problem.map((point, i) => (
              <div
                key={i}
                className="flex gap-4 bg-red-50/50 border border-red-100/50 rounded-lg p-5"
              >
                <span className="text-red-400 font-bold text-lg flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Diagnosis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark">
              The Diagnosis
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            {solution.diagnosis.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark">
              The Solution: What We Build For You
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {solution.solution.overview}
          </p>

          {/* Features */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-navy-dark mb-4">
              Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {solution.solution.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-navy-dark/5 rounded-lg p-4"
                >
                  <span className="text-gold font-bold text-sm flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-navy-dark font-medium text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Details Grid */}
          <div className="mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 max-w-sm">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                Timeline
              </p>
              <p className="text-navy-dark font-semibold">
                {solution.solution.timeline}
              </p>
            </div>
          </div>

          {/* Ideal For */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-navy-dark mb-3">
              Ideal For
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {solution.solution.idealFor}
            </p>
          </div>

          {/* Expected Outcomes */}
          <div>
            <h3 className="text-lg font-bold text-navy-dark mb-4">
              Expected Outcomes
            </h3>
            <div className="space-y-3">
              {solution.solution.outcomes.map((outcome, i) => (
                <div key={i} className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p className="text-gray-600 leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4">
            Ready to Build &ldquo;{solution.title}&rdquo;?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Let&apos;s discuss your specific requirements, timeline, and budget.
            We&apos;ll create a custom proposal tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/918793630001?text=${encodeURIComponent(
                `Hi, I'd like to discuss building the "${solution.title}" for my business.`
              )}`}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      {relatedSolutions.length > 0 && (
        <section className="py-16 bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy-dark mb-8">
              Related Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedSolutions.map((s) => (
                <Link
                  key={s.slug}
                  href={`/systems/${s.slug}`}
                  className="group bg-gray-50 rounded-xl p-7 border border-gray-100 hover:shadow-lg hover:border-gold/20 transition-all"
                >
                  <span className="text-xs font-bold bg-navy/5 text-navy px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {s.category}
                  </span>
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center mt-3 mb-2">
                    <SolutionIcon slug={s.slug} className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark mb-2 group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{s.hook}</p>
                  <span className="inline-block mt-4 text-navy font-semibold text-sm group-hover:text-gold transition-colors">
                    Explore Solution &rarr;
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/systems"
                className="text-navy font-semibold hover:text-gold transition-colors"
              >
                &larr; View All Solutions
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
