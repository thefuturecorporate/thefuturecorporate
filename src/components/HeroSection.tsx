import Link from "next/link";
const STORAGE_BASE =
  "https://supabase-proxy.avinashchate-abc.workers.dev/storage/v1/object/public";

export default function HeroSection() {
  return (
    <section className="bg-navy-dark relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your team isn&apos;t performing.{" "}
              <span className="text-gold">Your operations are broken.</span>{" "}
              We fix both.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              The Future Corporate combines people development with systems
              automation to transform how your business operates — from the
              inside out. We don&apos;t just consult. We build.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/918793630001?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20The%20Future%20Corporate%20services."
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Talk to Us on WhatsApp
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" />
                11+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" />
                140+ Team Members Managed
              </span>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex-shrink-0 hidden lg:block">
            <div className="relative">
              <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden border-2 border-gold/20 shadow-2xl">
                <img
                  src={`${STORAGE_BASE}/profile-assets/headshots/1772463022779-5f1g1i4yo.jpg`}
                  alt="Avinash Chate — Founder, The Future Corporate"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold text-navy-dark px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                TEDx Speaker & Author
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
