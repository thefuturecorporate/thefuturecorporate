import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RandomGallery from "@/components/RandomGallery";

const STORAGE_BASE =
  "https://supabase-proxy.avinashchate-abc.workers.dev/storage/v1/object/public";

const ogImage =
  "https://supabase-proxy.avinashchate-abc.workers.dev/storage/v1/object/public/profile-assets/headshots/1772463022779-5f1g1i4yo.jpg";

export const metadata: Metadata = {
  title: "About Avinash Bhaskar Chate — The Future Corporate",
  description:
    "First-generation entrepreneur, TEDx Speaker, Author, and Business Transformation Consultant. 11+ years of building, failing, learning, and helping businesses grow by fixing their people and systems.",
  openGraph: {
    title: "About Avinash Bhaskar Chate — The Future Corporate",
    description:
      "First-generation entrepreneur, TEDx Speaker, Author. He doesn't promise to 10x your revenue. He promises to find what's broken and fix it.",
    url: "https://thefuturecorporate.com/about",
    images: [{ url: ogImage, width: 800, height: 800, alt: "Avinash Chate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Avinash Bhaskar Chate — The Future Corporate",
    images: [ogImage],
  },
};

const timeline = [
  {
    year: "2014",
    title: "The Entrepreneurial Leap",
    description:
      "Started his journey as a first-generation entrepreneur with no family business background, no investors, and no safety net. Built businesses from scratch — some succeeded, many failed. Every failure became a lesson that no MBA could teach.",
  },
  {
    year: "2016",
    title: "Author & Thought Leader",
    description:
      "Published 'The Winning Edge' and 'The Unanswered' — distilling years of real-world business lessons into books that resonated with professionals across India. Not motivational fluff, but practical frameworks born from experience.",
  },
  {
    year: "2018",
    title: "Corporate Training & Public Speaking",
    description:
      "Took the stage at TEDx and began conducting corporate training programs. Organizations like RBI, BARC, and JSW Steel brought him in because he didn't speak theory — he spoke from the trenches of building and running real businesses.",
  },
  {
    year: "2020",
    title: "The Realization: It's Always the People",
    description:
      "After working with dozens of organizations, a pattern became clear — behind every business that wasn't growing, the root cause was always people. Miscommunication, poor leadership, broken team dynamics. That's why he founded The Future Corporate — focused entirely on people development.",
  },
  {
    year: "2022",
    title: "The Second Realization: People Alone Aren't Enough",
    description:
      "Managing offices across multiple cities revealed the other half of the equation. Even the best-trained teams struggled when they were drowning in manual processes, disconnected tools, and operational chaos. Great people need great systems.",
  },
  {
    year: "2024",
    title: "The Future Corporate: People + Systems",
    description:
      "Upgraded The Future Corporate to address both sides — People Development AND AI-Powered Systems. Because in a world where every competitor is adopting AI, businesses that don't build intelligent systems will be left behind.",
  },
];

const industries = [
  "Hospitals & Healthcare",
  "Restaurants & F&B Chains",
  "Manufacturing Units",
  "Real Estate Firms",
  "Training Institutes",
  "Professional Services",
  "Retail & E-Commerce",
  "Construction & Infrastructure",
  "Logistics & Distribution",
  "Schools & Colleges",
  "Banks & Financial Services",
  "Government Organizations",
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
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Headshot */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-gold/20 shadow-2xl">
                <Image
                  src={`${STORAGE_BASE}/profile-assets/headshots/1772463022779-5f1g1i4yo.jpg`}
                  alt="Avinash Bhaskar Chate"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                The Man Behind The Future Corporate
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
                Avinash Bhaskar Chate
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-2">
                First-Generation Entrepreneur. TEDx Speaker. Published Author.
                Business Transformation Consultant.
              </p>
              <p className="text-gray-400 leading-relaxed">
                He doesn&apos;t promise to &ldquo;10x your revenue.&rdquo; He
                promises to understand your business, find what&apos;s broken,
                and fix it. The growth follows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { number: "11+", label: "Years in Business" },
              { number: "10", label: "Offices Managed" },
              { number: "140+", label: "Employees Led" },
              { number: "2", label: "Books Published" },
              { number: "1", label: "TEDx Talk" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-navy">
                  {stat.number}
                </p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Real Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-dark mb-8">
            The Real Story
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              In 2014, Avinash Chate started his entrepreneurial journey. No
              family business. No investors. No playbook. Just a first-generation
              entrepreneur figuring it out as he went.
            </p>
            <p>
              He started multiple businesses. Some worked. Many didn&apos;t.
              But every failure taught him something that no business school
              could — what actually goes wrong inside businesses when nobody is
              watching.
            </p>
            <p>
              Through years of building teams, managing 10 offices across
              cities, and leading 140+ employees, one pattern became
              impossible to ignore:{" "}
              <span className="text-navy-dark font-semibold">
                behind every business that wasn&apos;t growing, the real problem
                was always the people.
              </span>{" "}
              Not the market. Not the product. Not the competition. The people
              — their communication, their mindset, their leadership gaps, their
              inability to work as a cohesive unit.
            </p>
            <p>
              That realization led him to write two books, take the TEDx stage,
              and eventually start corporate training. Organizations like RBI,
              BARC, JSW Steel, and the Indian Army didn&apos;t bring him in
              because of his degrees — they brought him in because he spoke from
              real experience, not textbooks.
            </p>
          </div>
        </div>
      </section>

      <RandomGallery
        count={4}
        title="In Action"
        subtitle="Training sessions, keynotes, and workshops across India"
        className="bg-gray-50"
      />

      {/* The Turning Point */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-dark mb-8">
            The Turning Point
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              But as he worked with more organizations and managed operations
              across multiple cities, a second truth emerged:{" "}
              <span className="text-navy-dark font-semibold">
                great people alone aren&apos;t enough.
              </span>
            </p>
            <p>
              He watched talented teams waste hours on manual processes. Saw
              businesses lose clients because follow-ups fell through the
              cracks. Watched leaders spend their days firefighting operations
              instead of thinking strategically — because they didn&apos;t have
              the systems to support them.
            </p>
            <p>
              People AND systems. Both have to be strong. One without the other
              is a half-built bridge.
            </p>
            <p>
              And in an era where AI is reshaping every industry — where
              hospitals are using intelligent patient management, restaurants
              are automating their kitchens, and manufacturing units are
              predicting quality issues before they happen — businesses that
              don&apos;t build intelligent systems aren&apos;t just falling
              behind. They&apos;re becoming invisible.
            </p>

            <div className="bg-navy-dark rounded-2xl p-8 md:p-10 mt-10">
              <p className="text-white text-xl md:text-2xl font-bold leading-relaxed mb-4">
                &ldquo;In the next 10 years, every business — small or large —
                will have AI integrated into their operations. The ones who
                start now will lead. The ones who wait will struggle to
                catch up.&rdquo;
              </p>
              <p className="text-gold font-semibold">— Avinash Chate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-dark mb-8">
            What Makes Him Different
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Most business consultants will tell you they&apos;ll &ldquo;grow
              your business 5x&rdquo; or &ldquo;guarantee results.&rdquo;
              Avinash doesn&apos;t. Because that&apos;s not how real businesses
              work.
            </p>
            <p className="text-navy-dark font-semibold text-xl">
              His approach is simple: every business has problems. We minimize
              those problems. When the problems get smaller, the business
              naturally grows.
            </p>
            <p>
              He doesn&apos;t walk in with a generic framework or a pre-packaged
              solution. He sits down, understands your business — your people,
              your processes, your pain points — and then builds a solution
              that fits your reality. Not someone else&apos;s template. Yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-navy-dark font-bold text-lg mb-4">
                On People Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Training programs aren&apos;t picked from a catalog. Every
                program is custom-designed after understanding your
                organization&apos;s culture, challenges, and goals. Because a
                leadership program for a PSU bank looks nothing like one for a
                tech startup.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-navy-dark font-bold text-lg mb-4">
                On Systems & AI
              </h3>
              <p className="text-gray-600 leading-relaxed">
                There are hundreds of software products in the market. But every
                leader has their own style, every business has its own way of
                running. One software cannot fit all. That&apos;s why we build
                custom AI-powered systems — so the leader can focus on strategy
                and growth, not on fighting with tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The AI Vision */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">
            The Vision
          </span>
          <h2 className="text-3xl font-bold text-white mt-3 mb-8">
            AI Isn&apos;t the Future.{" "}
            <span className="text-gold">It&apos;s the Present.</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Avinash believes that AI integration is no longer optional — it&apos;s
            the baseline. In the next decade, every business across every
            industry will run on intelligent systems:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-center"
              >
                <p className="text-gray-300 text-sm font-medium">{industry}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-10 leading-relaxed">
            The question isn&apos;t whether your industry will adopt AI. It
            already is. The question is whether you&apos;ll be leading that
            change or scrambling to catch up.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-dark mb-12">
            The Journey
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-navy-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-xs font-bold">
                      {item.year}
                    </span>
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 bg-navy/10 flex-1" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="text-xl font-bold text-navy-dark mb-2">
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
          <h2 className="text-3xl font-bold text-navy-dark mb-3 text-center">
            Trusted By
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Organizations that chose real experience over polished
            presentations.
          </p>
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
            Let&apos;s Talk About Your Business
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            No sales pitch. No jargon. Just an honest conversation about
            what&apos;s holding your business back — and what we can do about
            it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/918793630001?text=Hi%20Avinash%2C%20I%27d%20like%20to%20discuss%20how%20you%20can%20help%20my%20business."
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
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
