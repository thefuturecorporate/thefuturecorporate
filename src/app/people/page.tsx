"use client";

import { useState } from "react";
import Link from "next/link";
import { trainings } from "@/data/trainings";
import type { Training } from "@/data/trainings";

const categories = ["All", "Communication", "Leadership", "Sales & Negotiation", "Team Building", "Soft Skills", "Productivity", "Motivation", "Student & Faculty", "Workplace Culture", "Industry-Specific"] as const;

export default function PeoplePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered: Training[] =
    activeCategory === "All"
      ? trainings
      : trainings.filter((t) => t.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              People Development
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
              Training Programs That Transform How Your Team{" "}
              <span className="text-gold">Thinks, Leads, and Performs</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              {trainings.length}+ training programs built on behavioral science,
              real corporate experience, and a decade of transforming teams
              across India. Every program follows our signature Problem →
              Diagnosis → Solution methodology.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/918793630001?text=Hi%2C%20I%27m%20interested%20in%20People%20Development%20training%20programs."
                target="_blank"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3.5 rounded-md font-bold transition-colors"
              >
                Enquire About Training
              </Link>
              <Link
                href="https://avinashchate.com"
                target="_blank"
                className="inline-flex items-center justify-center border-2 border-gold text-gold px-8 py-3.5 rounded-md font-semibold hover:bg-gold hover:text-navy-dark transition-colors"
              >
                Visit avinashchate.com for More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter + Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-navy text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({trainings.filter((t) => t.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Training Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((training) => (
              <Link
                key={training.slug}
                href={`/people/${training.slug}`}
                className={`group rounded-xl p-7 border transition-all duration-300 hover:shadow-xl ${
                  training.featured
                    ? "bg-navy-dark text-white border-gold/30 hover:border-gold/60 ring-1 ring-gold/10"
                    : "bg-white border-gray-100 hover:border-gold/30"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${
                      training.featured
                        ? "bg-gold text-navy-dark"
                        : "bg-navy/5 text-navy"
                    }`}
                  >
                    {training.category}
                  </span>
                  {training.featured && (
                    <span className="text-xs font-bold bg-gold/20 text-gold px-2.5 py-1 rounded-full">
                      Signature
                    </span>
                  )}
                </div>
                <h3
                  className={`text-lg font-bold mb-2 group-hover:text-gold transition-colors ${
                    training.featured ? "text-white" : "text-navy-dark"
                  }`}
                >
                  {training.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    training.featured ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {training.hook}
                </p>
                <div
                  className={`text-sm font-semibold flex items-center gap-1 transition-colors ${
                    training.featured
                      ? "text-gold"
                      : "text-navy group-hover:text-gold"
                  }`}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customized Solutions */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Every Organization is Different.{" "}
              <span className="text-gold">
                Every Training Should Be Too.
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We don&apos;t believe in off-the-shelf training programs. Before we
              design anything, we spend time understanding your organization&apos;s
              unique challenges, culture, and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {[
              {
                step: "01",
                title: "UNDERSTAND",
                desc: "We listen to your pain points, interview key stakeholders, and study your team dynamics.",
              },
              {
                step: "02",
                title: "DIAGNOSE",
                desc: "We identify the root behavioral and systemic causes behind your challenges.",
              },
              {
                step: "03",
                title: "DESIGN",
                desc: "We create an exclusive training program built specifically for your team \u2014 not a generic module picked from a catalog.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                  <span className="text-gold text-2xl font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-gold font-bold text-lg tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-8 max-w-2xl mx-auto">
              This is why organizations like RBI, BARC, JSW Steel, and Mumbai
              Port Authority trust us with their most important asset &mdash;
              their people.
            </p>
            <Link
              href="https://wa.me/918793630001?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20customized%20training%20program%20for%20my%20organization."
              target="_blank"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-navy-dark px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Let&apos;s Discuss Your Training Needs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4">
            Want to explore more about Avinash Chate&apos;s people development
            work?
          </h2>
          <Link
            href="https://avinashchate.com"
            target="_blank"
            className="inline-flex items-center gap-2 bg-navy-dark hover:bg-navy text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
          >
            Visit avinashchate.com
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
