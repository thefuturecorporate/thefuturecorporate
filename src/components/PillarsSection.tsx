import Link from "next/link";

const pillars = [
  {
    title: "People",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    description:
      "Corporate training, leadership development, behavioral science workshops, and executive coaching that transforms how your teams think, lead, and perform.",
    href: "/people",
    highlights: ["Corporate Training", "Leadership Development", "Executive Coaching", "Keynote Speaking"],
  },
  {
    title: "Systems",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description:
      "AI-powered business portals, CRM & sales funnels, HR automation, WhatsApp & email systems, and custom dashboards that make your operations run on autopilot.",
    href: "/systems",
    highlights: ["AI Business Portals", "CRM & Sales Funnels", "HR Automation", "Custom Dashboards"],
  },
  {
    title: "Growth",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    description:
      "The full transformation — people development AND systems automation working together. For companies that want to scale fast without the chaos.",
    href: "#growth",
    highlights: ["Integrated Packages", "End-to-End Transformation", "Scalable Growth", "Measurable ROI"],
  },
];

export default function PillarsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark">
            Three Pillars of Business Transformation
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Most consultants fix one thing. We fix everything — your people, your
            systems, and your growth trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/30"
            >
              <div className="text-navy group-hover:text-gold transition-colors mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy-dark mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {pillar.description}
              </p>
              <ul className="space-y-2">
                {pillar.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-navy font-semibold text-sm group-hover:text-gold transition-colors flex items-center gap-1">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
