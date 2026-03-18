const testimonials = [
  {
    quote:
      "After Avinash's leadership program, our mid-level managers started owning decisions instead of escalating everything. Within 6 months, our project turnaround time dropped by 35% and internal escalations fell by half. This wasn't motivation — it was a measurable shift in how our people operate.",
    name: "Rajesh Kulkarni",
    role: "VP — Operations",
    company: "Manufacturing Sector, Pune",
  },
  {
    quote:
      "We were running our entire client follow-up on WhatsApp and Excel. Avinash's team built us a custom CRM with automated reminders and a client portal. In the first quarter itself, we recovered 42 lakh in pending payments that had slipped through the cracks. Our team now saves 22+ hours a week on manual work.",
    name: "Sneha Deshmukh",
    role: "Founder & CEO",
    company: "Training & Ed-Tech, Mumbai",
  },
  {
    quote:
      "We brought Avinash in for a 2-day communication workshop for 120 officers. The feedback score was 4.8 out of 5 — the highest we've recorded for any external trainer in 3 years. What impressed me most is that he customized every example to our sector. It didn't feel like a generic program.",
    name: "Amit Sharma",
    role: "Chief General Manager — HRD",
    company: "Public Sector Bank, Delhi",
  },
  {
    quote:
      "Our HR team of 4 was spending 70% of their time on attendance, leave tracking, and payroll. After the AI-powered HR system went live, payroll processing went from 5 days to 4 hours. Zero errors in the last 8 months. My HR team finally has time to focus on hiring and culture.",
    name: "Priya Menon",
    role: "Director — HR",
    company: "Healthcare Group, Bengaluru",
  },
  {
    quote:
      "I was skeptical about AI for our business — we're a traditional manufacturing company, not a tech startup. But the operations dashboard Avinash's team built gives me a real-time view of production, sales, and cash flow that I never had in 18 years of running this company. I make better decisions now because I see the numbers before problems become crises.",
    name: "Vikram Patil",
    role: "Managing Director",
    company: "Manufacturing & Export, Chh. Sambhajinagar",
  },
  {
    quote:
      "The 'Star at Office' program changed how our high-potential employees see their own careers. 3 participants got promoted within 4 months — not because Avinash pulled strings, but because they started showing up differently. The ROI on this program is impossible to ignore.",
    name: "Deepika Joshi",
    role: "L&D Head",
    company: "IT Services, Pune",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col"
            >
              <div className="text-gold mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 italic flex-1 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-gold/80 text-sm">{t.role}</p>
                <p className="text-gray-500 text-xs mt-0.5">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
