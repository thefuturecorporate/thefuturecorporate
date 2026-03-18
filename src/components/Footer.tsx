import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/the-future-logo.png"
                alt="The Future Corporate"
                width={40}
                height={40}
                className="object-contain brightness-0 invert"
              />
              <div>
                <span className="font-bold text-lg block">The Future Corporate</span>
                <span className="text-gold text-xs tracking-widest uppercase">
                  People. Systems. Growth.
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming businesses through people development and systems automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/people", label: "People Development" },
                { href: "/systems", label: "Systems & Automation" },
                { href: "/about", label: "About Us" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="font-semibold text-gold mb-4">Our Companies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://thefuturecorporate.com"
                  target="_blank"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  The Future Corporate
                </Link>
              </li>
              <li>
                <Link
                  href="https://avinashchate.com"
                  target="_blank"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Avinash Chate
                </Link>
              </li>
              <li>
                <Link
                  href="https://abctrainings.in"
                  target="_blank"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  ABC Trainings
                </Link>
              </li>
              <li>
                <Link
                  href="https://abctraining.in"
                  target="_blank"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  ABC Training
                </Link>
              </li>
              <li>
                <Link
                  href="/arisha-foundation"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Arisha Foundation{" "}
                  <span className="text-gray-500 text-xs">(coming soon)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Corporate Training</li>
              <li>Leadership Development</li>
              <li>AI-Powered Business Portals</li>
              <li>CRM & Sales Funnels</li>
              <li>HR & Payroll Automation</li>
              <li>Executive Coaching</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="mailto:avinash@thefuturecorporate.com"
                  className="hover:text-gold transition-colors"
                >
                  avinash@thefuturecorporate.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/918793630001"
                  target="_blank"
                  className="hover:text-gold transition-colors"
                >
                  +91 8793630001 (WhatsApp)
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/avinashchate"
                  target="_blank"
                  className="hover:text-gold transition-colors"
                >
                  @avinashchate on Instagram
                </Link>
              </li>
              <li>Pune — Hadapsar, Magarpatta</li>
              <li>Chh. Sambhajinagar — Kranti Chowk</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Future Corporate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
