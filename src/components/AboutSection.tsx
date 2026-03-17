import Link from "next/link";

const credentials = [
  "TEDx Speaker",
  "Author — 'The Winning Edge' & 'The Unanswered'",
  "11+ Years in Business Transformation",
  "Managed 10 Offices & 140+ Employees",
];

const clients = [
  "RBI",
  "BARC",
  "JSW Steel",
  "Hitachi",
  "Mumbai Port Authority",
  "Indian Army",
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Credential Blocks */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div
                  key={cred}
                  className="bg-navy-dark/5 border border-navy/10 rounded-lg p-5"
                >
                  <p className="text-navy-dark font-semibold text-sm">{cred}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-semibold">
                Trusted By
              </p>
              <div className="flex flex-wrap gap-3">
                {clients.map((client) => (
                  <span
                    key={client}
                    className="bg-gold/10 text-navy-dark text-sm font-medium px-4 py-1.5 rounded-full border border-gold/20"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              The Man Behind the Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mt-2 mb-6">
              Avinash Bhaskar Chate
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Avinash isn&apos;t your typical consultant. He&apos;s built businesses from
                the ground up — managing 10 offices and over 140 employees across
                India. He knows what it takes to scale operations and lead teams
                because he&apos;s done it himself.
              </p>
              <p>
                As a TEDx speaker and published author of &apos;The Winning Edge&apos; and
                &apos;The Unanswered&apos;, Avinash brings a unique combination of
                real-world business experience and behavioral science to every
                engagement.
              </p>
              <p>
                His clients range from government institutions like RBI, BARC, and
                the Indian Army to private enterprises like JSW Steel, Hitachi,
                and Mumbai Port Authority.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-dark transition-colors"
              >
                Read Full Story
              </Link>
              <Link
                href="https://wa.me/918793630001"
                target="_blank"
                className="inline-flex items-center justify-center border-2 border-navy text-navy px-6 py-3 rounded-md font-semibold hover:bg-navy hover:text-white transition-colors"
              >
                Book Avinash for a Keynote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
