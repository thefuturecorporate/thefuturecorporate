import { trainings } from "@/data/trainings";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return trainings.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const training = trainings.find((t) => t.slug === slug);
  if (!training) return { title: "Training Not Found" };

  return {
    title: `${training.title} — The Future Corporate`,
    description: training.hook,
  };
}

export default async function TrainingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const training = trainings.find((t) => t.slug === slug);
  if (!training) notFound();

  const related = trainings
    .filter((t) => t.category === training.category && t.slug !== training.slug)
    .slice(0, 3);

  const isSignature = training.slug === "star-at-office";

  return (
    <>
      {/* Hero */}
      <section
        className={`py-20 ${
          isSignature
            ? "bg-gradient-to-br from-navy-dark via-navy to-navy-dark"
            : "bg-navy-dark"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold bg-white/10 text-gold px-3 py-1.5 rounded-full uppercase tracking-wide">
                {training.category}
              </span>
              {training.featured && (
                <span className="text-xs font-bold bg-gold/20 text-gold px-3 py-1.5 rounded-full">
                  {isSignature ? "Signature Program by Avinash Chate" : "Featured"}
                </span>
              )}
            </div>
            <h1
              className={`font-bold text-white mb-4 ${
                isSignature
                  ? "text-4xl md:text-6xl"
                  : "text-3xl md:text-5xl"
              }`}
            >
              {training.title}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {training.hook}
            </p>
            {isSignature && (
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  By Avinash Chate
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  TEDx Speaker & Author
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  11+ Years Experience
                </span>
              </div>
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={`https://wa.me/918793630001?text=${encodeURIComponent(
                  `Hi, I'm interested in the "${training.title}" training program.`
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
                Book This Training
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white px-8 py-3.5 rounded-md font-semibold transition-colors"
              >
                Send an Enquiry
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
            {training.problem.map((point, i) => (
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
            {training.diagnosis.split("\n\n").map((para, i) => (
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
              The Solution: Our Training Program
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {training.solution.overview}
          </p>

          {/* Modules */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-navy-dark mb-4">
              Key Modules
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {training.solution.modules.map((mod, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-navy-dark/5 rounded-lg p-4"
                >
                  <span className="text-gold font-bold text-sm flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-navy-dark font-medium text-sm">
                    {mod}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                Duration
              </p>
              <p className="text-navy-dark font-semibold">
                {training.solution.duration}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                Format
              </p>
              <p className="text-navy-dark font-semibold text-sm">
                {training.solution.format.split(" — ")[0]}
              </p>
            </div>
          </div>

          {/* Audience */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-navy-dark mb-3">
              Who Should Attend
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {training.solution.audience}
            </p>
          </div>

          {/* Outcomes */}
          <div>
            <h3 className="text-lg font-bold text-navy-dark mb-4">
              Expected Outcomes
            </h3>
            <div className="space-y-3">
              {training.solution.outcomes.map((outcome, i) => (
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

      {/* Signature Testimonials (only for star-at-office) */}
      {isSignature && (
        <section className="py-16 bg-navy-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              What Past Participants Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  quote:
                    "This program completely changed how I approach my career. Within 3 months, I was leading a high-visibility project that got me noticed by the CEO.",
                  name: "Senior Analyst",
                  company: "Banking Sector",
                },
                {
                  quote:
                    "I used to think hard work speaks for itself. Avinash showed me that visibility and strategic positioning are skills you can learn — and I wish I'd learned them 5 years earlier.",
                  name: "Team Lead",
                  company: "IT Services",
                },
                {
                  quote:
                    "The 90-day action plan is what makes this different. It's not just inspiration — it's a system. I followed it step by step and got my first promotion in 2 years.",
                  name: "Operations Manager",
                  company: "Manufacturing",
                },
                {
                  quote:
                    "We brought Avinash in for our high-potential cohort. The energy was incredible. More importantly, the behavioral change we saw in the weeks after was real and measurable.",
                  name: "L&D Head",
                  company: "PSU Bank",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <div className="text-gold mb-3">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className={`py-16 ${isSignature ? "bg-gold" : "bg-gray-50"}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              isSignature ? "text-navy-dark" : "text-navy-dark"
            }`}
          >
            Ready to Book &ldquo;{training.title}&rdquo;?
          </h2>
          <p
            className={`mb-8 text-lg ${
              isSignature ? "text-navy-dark/70" : "text-gray-600"
            }`}
          >
            Get in touch to discuss your team&apos;s needs, customize the
            program, and schedule your training dates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/918793630001?text=${encodeURIComponent(
                `Hi, I'd like to book the "${training.title}" training program for my team.`
              )}`}
              target="_blank"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-lg transition-colors ${
                isSignature
                  ? "bg-navy-dark hover:bg-navy text-white"
                  : "bg-navy hover:bg-navy-dark text-white"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </Link>
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center border-2 px-8 py-4 rounded-md font-bold text-lg transition-colors ${
                isSignature
                  ? "border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white"
                  : "border-navy text-navy hover:bg-navy hover:text-white"
              }`}
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Related Trainings */}
      {related.length > 0 && (
        <section className="py-16 bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy-dark mb-8">
              Related Training Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((t) => (
                <Link
                  key={t.slug}
                  href={`/people/${t.slug}`}
                  className="group bg-gray-50 rounded-xl p-7 border border-gray-100 hover:shadow-lg hover:border-gold/20 transition-all"
                >
                  <span className="text-xs font-bold bg-navy/5 text-navy px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {t.category}
                  </span>
                  <h3 className="text-lg font-bold text-navy-dark mt-3 mb-2 group-hover:text-gold transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{t.hook}</p>
                  <span className="inline-block mt-4 text-navy font-semibold text-sm group-hover:text-gold transition-colors">
                    Learn More &rarr;
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/people"
                className="text-navy font-semibold hover:text-gold transition-colors"
              >
                &larr; View All Training Programs
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
