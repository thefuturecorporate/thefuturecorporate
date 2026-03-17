import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Systems & Automation — The Future Corporate",
  description:
    "AI-powered business portals, CRM & sales funnels, HR automation, WhatsApp & email systems, KYC integration, and custom dashboards for SMEs and startups.",
};

const services = [
  {
    title: "AI-Powered Business Portals",
    description:
      "Custom web portals with AI integrations that automate client interactions, lead qualification, and service delivery. Built to scale with your business.",
    icon: "🤖",
  },
  {
    title: "CRM & Sales Funnels",
    description:
      "End-to-end sales pipeline management — from lead capture to conversion. Automated follow-ups, deal tracking, and performance analytics.",
    icon: "📊",
  },
  {
    title: "HR & Payroll Automation",
    description:
      "Automate attendance, leave management, payroll processing, and compliance. Free your HR team to focus on people, not paperwork.",
    icon: "👥",
  },
  {
    title: "Onboarding Systems",
    description:
      "Streamlined employee and client onboarding flows that reduce time-to-value and improve first impressions. Digital, trackable, and consistent.",
    icon: "🚀",
  },
  {
    title: "WhatsApp & Email Automation",
    description:
      "Automated customer communication through WhatsApp Business API and email sequences. Nurture leads, send updates, and close deals on autopilot.",
    icon: "💬",
  },
  {
    title: "KYC Integration",
    description:
      "Digital KYC verification integrated into your workflows. Aadhaar, PAN, GST, and bank verification APIs — compliant and fast.",
    icon: "🔐",
  },
  {
    title: "Custom Dashboards",
    description:
      "Real-time business intelligence dashboards that pull data from all your systems. See what matters, when it matters, in one place.",
    icon: "📈",
  },
];

const targets = [
  "Small & Medium Enterprises (SMEs)",
  "Training Institutes & Ed-Tech",
  "Startups & Scale-ups",
  "Professional Service Firms",
  "Manufacturing & Distribution",
];

export default function SystemsPage() {
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
              Your Business Runs on People.{" "}
              <span className="text-gold">
                Your Operations Should Run on Systems.
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We build the digital infrastructure that lets your business scale
              without chaos. AI-powered portals, automated workflows, and
              custom dashboards — engineered for Indian businesses.
            </p>
            <div className="mt-8">
              <Link
                href="https://wa.me/918793630001?text=Hi%2C%20I%27m%20interested%20in%20Systems%20%26%20Automation%20services."
                target="_blank"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3.5 rounded-md font-bold transition-colors"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-dark mb-12">
            What We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg hover:border-gold/20 transition-all"
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-navy-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-dark mb-12 text-center">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We audit your current operations and identify bottlenecks." },
              { step: "02", title: "Design", desc: "We architect the right systems for your specific needs." },
              { step: "03", title: "Build", desc: "We develop, test, and deploy — typically within 4-8 weeks." },
              { step: "04", title: "Support", desc: "We train your team and provide ongoing support." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-5xl font-bold text-gold/30">{item.step}</span>
                <h3 className="text-xl font-bold text-navy-dark mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target & Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-6">
                Who This Is For
              </h2>
              <ul className="space-y-3">
                {targets.map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-6">
                Investment
              </h2>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <p className="text-3xl font-bold text-navy-dark">
                  ₹50,000 — ₹3,00,000
                </p>
                <p className="text-gray-500 mt-2">
                  Per project, depending on complexity, integrations, and scope.
                </p>
                <Link
                  href="https://wa.me/918793630001?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20Systems%20%26%20Automation."
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Get a Project Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
