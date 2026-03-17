import Link from "next/link";

export default function GrowthSection() {
  return (
    <section id="growth" className="py-20 bg-gradient-to-br from-navy via-navy-dark to-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-gold/20 text-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            People + Systems = Growth
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for the Full Transformation?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            For companies that want both — people who perform at their peak AND
            systems that run on autopilot — The Future Corporate offers
            integrated transformation packages. We align your team&apos;s capability
            with your operational infrastructure so growth isn&apos;t just possible,
            it&apos;s inevitable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                label: "People",
                desc: "Train & align your team",
              },
              {
                label: "+",
                desc: "",
              },
              {
                label: "Systems",
                desc: "Automate & scale operations",
              },
            ].map((item, i) =>
              item.label === "+" ? (
                <div
                  key={i}
                  className="flex items-center justify-center text-gold text-4xl font-bold"
                >
                  +
                </div>
              ) : (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-lg p-6"
                >
                  <p className="text-gold font-bold text-lg">{item.label}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              )
            )}
          </div>

          <div className="flex items-center justify-center text-white mb-10">
            <svg className="w-6 h-6 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
            <span className="text-xl font-bold text-gold">= Compounding Growth</span>
          </div>

          <Link
            href="https://wa.me/918793630001?text=Hi%2C%20I%27m%20interested%20in%20the%20Growth%20(People%20%2B%20Systems)%20package."
            target="_blank"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark px-8 py-4 rounded-md font-bold text-lg transition-colors"
          >
            Discuss a Growth Package
          </Link>
        </div>
      </div>
    </section>
  );
}
