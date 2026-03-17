"use client";

import { useState } from "react";
import Link from "next/link";
import { trainings } from "@/data/trainings";
import type { Training } from "@/data/trainings";

const categories = ["All", "Leadership", "Communication", "Behavioral", "Team Building", "Specialized"] as const;

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

      {/* Pricing & Target */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4">
                Who These Programs Are For
              </h2>
              <ul className="space-y-3">
                {[
                  "Corporates & MNCs",
                  "Public Sector Undertakings (PSUs)",
                  "Banks & Financial Institutions",
                  "Manufacturing Companies",
                  "Government Organizations",
                  "Training Institutes",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4">
                Investment
              </h2>
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <p className="text-3xl font-bold text-navy-dark">
                  ₹40,000 — ₹2,00,000
                </p>
                <p className="text-gray-500 mt-2 mb-6">
                  Per engagement, depending on program, duration, batch size,
                  and customization requirements.
                </p>
                <Link
                  href="https://wa.me/918793630001?text=Hi%2C%20I%27d%20like%20a%20custom%20quote%20for%20a%20training%20program."
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Get a Custom Quote
                </Link>
              </div>
            </div>
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
