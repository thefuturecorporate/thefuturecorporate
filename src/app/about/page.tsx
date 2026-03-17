import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Avinash Bhaskar Chate — The Future Corporate",
  description:
    "TEDx Speaker, Author, and Business Transformation Consultant with 11+ years of experience. Managed 10 offices and 140+ employees. Clients include RBI, BARC, JSW Steel, Hitachi.",
};

const timeline = [
  {
    period: "Early Career",
    title: "Building from the Ground Up",
    description:
      "Started with hands-on business operations — learning what it takes to manage teams, deliver results, and build processes from scratch. This wasn't theory. It was real, messy, ground-level business building.",
  },
  {
    period: "Growth Phase",
    title: "Scaling to 10 Offices & 140+ Employees",
    description:
      "Expanded operations across India, managing multi-location teams and complex organizational structures. Learned firsthand that growth without systems creates chaos — and that systems without capable people are useless.",
  },
  {
    period: "Public Speaking",
    title: "TEDx Speaker & Keynote Authority",
    description:
      "Took the stage at TEDx and became a sought-after keynote speaker for corporates, PSUs, and industry events. Known for high-energy talks that combine behavioral science with business strategy.",
  },
  {
    period: "Published Author",
    title: "'The Winning Edge' & 'The Unanswered'",
    description:
      "Published two books — 'The Winning Edge' on professional excellence and 'The Unanswered' exploring deeper questions of purpose and performance in the corporate world.",
  },
  {
    period: "Today",
    title: "The Future Corporate",
    description:
      "Founded The Future Corporate to bring together both halves of the equation — People Development and Systems Automation — into a single, integrated transformation practice for Indian businesses.",
  },
];

const clients = [
  "Reserve Bank of India (RBI)",
  "Bhabha Atomic Research Centre (BARC)",
  "JSW Steel",
  "Hitachi",
  "Mumbai Port Authority",
  "Indian Army",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              About
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
              Avinash Bhaskar Chate
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              TEDx Speaker. Published Author. Business Transformation
              Consultant. The man who believes that great businesses are built
              on great people AND great systems — never just one.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "11+", label: "Years Experience" },
              { number: "10", label: "Offices Managed" },
              { number: "140+", label: "Employees Led" },
              { number: "2", label: "Books Published" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-navy">{stat.number}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-dark mb-4">The Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Avinash Chate didn&apos;t start as a consultant. He started as a
              builder — someone who had to figure out how to hire, train, manage,
              and retain teams across multiple cities, all while building
              operational systems that actually worked.
            </p>
            <p>
              Over 11+ years, he managed 10 offices and more than 140 employees.
              He saw what happened when you invested in people but ignored
              systems — chaos at scale. And he saw what happened when you built
              beautiful systems but forgot the people — expensive software that
              nobody used.
            </p>
            <p>
              That&apos;s why he founded The Future Corporate — a company that doesn&apos;t
              separate the two. Because the future of business isn&apos;t just digital
              transformation. It&apos;s not just leadership training. It&apos;s both,
              working together.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-dark mb-12">Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gold rounded-full flex-shrink-0 mt-1" />
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 bg-gold/20 flex-1 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-navy-dark mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-dark mb-8 text-center">
            Trusted By
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {clients.map((client) => (
              <div
                key={client}
                className="bg-gray-50 rounded-lg p-6 text-center border border-gray-100"
              >
                <p className="font-semibold text-navy-dark">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to Work with Avinash?
          </h2>
          <p className="text-gray-400 mb-8">
            Whether it&apos;s a keynote, a training program, or a full business
            transformation — let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/918793630001"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              Connect on WhatsApp
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
