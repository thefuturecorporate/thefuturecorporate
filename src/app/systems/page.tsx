"use client";

import { useState } from "react";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import type { Solution } from "@/data/solutions";
import SolutionIcon from "@/components/SolutionIcon";

const categories = [
  "All",
  "AI Portals",
  "CRM & Sales",
  "HR & Operations",
  "Communication",
  "Data & Analytics",
  "Website & Digital",
  "Industry Solutions",
] as const;

export default function SystemsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered: Solution[] =
    activeCategory === "All"
      ? solutions
      : solutions.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              Systems & Automation
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
              AI-Powered Solutions That Make Your Business{" "}
              <span className="text-gold">Run on Autopilot</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              {solutions.length}+ AI-powered systems designed for Indian
              businesses. From intelligent CRMs and HR automation to custom
              portals and industry-specific solutions — we build the digital
              infrastructure that lets you scale without chaos.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/918793630001?text=Hi%2C%20I%27m%20interested%20in%20AI-powered%20systems%20and%20automation%20solutions."
                target="_blank"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3.5 rounded-md font-bold transition-colors"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-gold text-gold px-8 py-3.5 rounded-md font-semibold hover:bg-gold hover:text-navy-dark transition-colors"
              >
                Get a Free Consultation
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
                    ({solutions.filter((s) => s.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((solution) => (
              <Link
                key={solution.slug}
                href={`/systems/${solution.slug}`}
                className={`group rounded-xl p-7 border transition-all duration-300 hover:shadow-xl ${
                  solution.featured
                    ? "bg-navy-dark text-white border-gold/30 hover:border-gold/60 ring-1 ring-gold/10"
                    : "bg-white border-gray-100 hover:border-gold/30"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${
                      solution.featured
                        ? "bg-gold text-navy-dark"
                        : "bg-navy/5 text-navy"
                    }`}
                  >
                    {solution.category}
                  </span>
                  {solution.featured && (
                    <span className="text-xs font-bold bg-gold/20 text-gold px-2.5 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                  solution.featured ? "bg-gold/10" : "bg-navy/5"
                }`}>
                  <SolutionIcon slug={solution.slug} className={`w-5 h-5 ${
                    solution.featured ? "text-gold" : "text-navy"
                  }`} />
                </div>
                <h3
                  className={`text-lg font-bold mb-2 group-hover:text-gold transition-colors ${
                    solution.featured ? "text-white" : "text-navy-dark"
                  }`}
                >
                  {solution.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    solution.featured ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {solution.hook}
                </p>
                <div
                  className={`text-sm font-semibold flex items-center gap-1 transition-colors ${
                    solution.featured
                      ? "text-gold"
                      : "text-navy group-hover:text-gold"
                  }`}
                >
                  Explore Solution
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

      {/* How We Work */}
      <section className="py-16 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            How We Build Your System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We audit your current operations, identify bottlenecks, and map the systems that will have the highest impact.",
              },
              {
                step: "02",
                title: "Design",
                desc: "We architect the right solution for your specific needs — no templates, no one-size-fits-all, just what works for you.",
              },
              {
                step: "03",
                title: "Build & Deploy",
                desc: "We develop, test, and deploy your system — typically within 4-10 weeks. You see progress every week.",
              },
              {
                step: "04",
                title: "Train & Support",
                desc: "We train your team, provide documentation, and offer ongoing support to ensure the system delivers results.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-gold text-3xl font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
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
              No Two Businesses Run the Same Way.{" "}
              <span className="text-gold">Neither Should Their Systems.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We don&apos;t sell pre-built software. We build AI-powered systems
              designed exclusively for your business workflows, challenges, and
              growth goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {[
              {
                step: "01",
                title: "UNDERSTAND",
                desc: "We map your current operations, bottlenecks, and manual processes.",
                color: "from-gold/20 to-gold/5",
              },
              {
                step: "02",
                title: "DIAGNOSE",
                desc: "We identify where automation and AI can create the biggest impact with the least disruption.",
                color: "from-gold/20 to-gold/5",
              },
              {
                step: "03",
                title: "BUILD",
                desc: "We create a custom solution that fits your team, your processes, and your budget \u2014 not the other way around.",
                color: "from-gold/20 to-gold/5",
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
              Every system we build is yours &mdash; custom-coded, fully owned,
              and designed to scale with your business.
            </p>
            <Link
              href="https://wa.me/918793630001?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20custom%20AI%20system%20for%20my%20business."
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
              Let&apos;s Discuss Your Business Needs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4">
            Not Sure Which System Your Business Needs?
          </h2>
          <p className="text-navy-dark/70 text-lg mb-6">
            Book a free 30-minute consultation. We&apos;ll audit your operations
            and recommend the right systems — no obligation, no sales pitch.
          </p>
          <Link
            href="https://wa.me/918793630001?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation%20to%20discuss%20which%20AI%20systems%20would%20benefit%20my%20business."
            target="_blank"
            className="inline-flex items-center gap-2 bg-navy-dark hover:bg-navy text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book Free Consultation on WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
