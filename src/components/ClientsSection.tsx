const clients = [
  "RBI",
  "BARC",
  "JSW Steel",
  "Hitachi",
  "Mumbai Port Authority",
  "Indian Army",
  "Suprajit Engineering",
];

export default function ClientsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">
            Our Clients
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mt-2">
            Trusted By
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-white border border-gray-200 rounded-lg px-6 py-5 flex items-center justify-center text-center shadow-sm hover:shadow-md hover:border-gold/30 transition-all"
            >
              <span className="text-navy-dark font-semibold text-sm md:text-base tracking-wide">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
