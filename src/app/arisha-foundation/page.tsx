import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arisha Foundation — CSR | The Future Corporate",
  description:
    "Registered charitable trust enabling corporate CSR funding for skill development, vocational training, and computer education. 12A & 80G registered.",
};

const registrations = [
  { label: "Public Trust Registration", status: "Active" },
  { label: "Society Registration", status: "Active" },
  { label: "PAN Registration", status: "Active" },
  { label: "NGO Darpan (NITI Aayog)", status: "Registered" },
  { label: "12A Registration", status: "Active" },
  { label: "80G Certification", status: "Active" },
];

const programs = [
  {
    title: "Skill Development",
    description:
      "Industry-relevant skill training for underprivileged youth — from communication and soft skills to digital literacy and employability training.",
  },
  {
    title: "Vocational Training",
    description:
      "Hands-on vocational programs in trades and services that create direct employment pathways for youth in tier-2 and tier-3 cities.",
  },
  {
    title: "Computer Education",
    description:
      "Basic to advanced computer education programs across 5 locations, giving students the digital skills they need to compete in today's economy.",
  },
];

export default function ArishaFoundationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              CSR Initiative
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
              Arisha Foundation
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A registered charitable trust that enables corporates to fulfill
              their CSR mandate through skill development, vocational training,
              and computer education. Your CSR investment, our execution —
              creating real impact across 5 locations.
            </p>
            <div className="mt-8">
              <Link
                href="https://wa.me/918793630001?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20CSR%20funding%20through%20Arisha%20Foundation."
                target="_blank"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-navy-dark px-8 py-3.5 rounded-md font-bold transition-colors"
              >
                Partner With Us for CSR
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why CSR Through Arisha */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-dark mb-4">
              Why CSR Through Arisha Foundation?
            </h2>
            <p className="text-gray-600 text-lg">
              Corporates can donate to Arisha Foundation and claim tax benefits
              under Section 80G. We handle program design, execution, and
              reporting — you get compliant, impactful CSR delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tax Benefits",
                desc: "80G certified — donations are eligible for tax deductions. Fully compliant with CSR regulations.",
              },
              {
                title: "Transparent Reporting",
                desc: "Detailed impact reports, beneficiary data, and program outcomes — everything your CSR committee needs.",
              },
              {
                title: "Proven Execution",
                desc: "Active programs across 5 locations with measurable outcomes in skill development and employment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-navy-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-dark mb-12 text-center">
            Registrations & Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {registrations.map((reg) => (
              <div
                key={reg.label}
                className="bg-white rounded-lg p-5 border border-gray-100 flex items-center justify-between"
              >
                <span className="font-medium text-navy-dark">{reg.label}</span>
                <span className="text-xs font-bold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                  {reg.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-dark mb-12 text-center">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-navy-dark rounded-xl p-8 text-white"
              >
                <h3 className="text-xl font-bold text-gold mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500">
              Active across <span className="font-semibold text-navy">5 locations</span> in Maharashtra
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4">
            Ready to Make Your CSR Count?
          </h2>
          <p className="text-navy-dark/70 mb-8 text-lg">
            Partner with Arisha Foundation for CSR programs that create real,
            measurable impact — with full compliance and tax benefits.
          </p>
          <Link
            href="https://wa.me/918793630001?text=Hi%2C%20our%20company%20is%20interested%20in%20CSR%20partnership%20with%20Arisha%20Foundation."
            target="_blank"
            className="inline-flex items-center gap-2 bg-navy-dark hover:bg-navy text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
          >
            Discuss CSR Partnership
          </Link>
        </div>
      </section>
    </>
  );
}
