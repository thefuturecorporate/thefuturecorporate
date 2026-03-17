const testimonials = [
  {
    quote:
      "The Future Corporate transformed how our leadership team operates. The training was practical, impactful, and directly tied to business outcomes.",
    name: "Senior Director",
    company: "Manufacturing Sector",
  },
  {
    quote:
      "Avinash doesn't just talk — he builds. The CRM and automation systems his team delivered saved us 20+ hours a week in manual processes.",
    name: "CEO",
    company: "Training Institute",
  },
  {
    quote:
      "We brought Avinash in for a keynote and ended up signing a full transformation engagement. That's how good the People + Systems approach is.",
    name: "HR Head",
    company: "PSU Bank",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Leaders Say
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Results from organizations that chose to transform with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <div className="text-gold mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
