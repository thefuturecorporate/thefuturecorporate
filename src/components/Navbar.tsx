"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/people", label: "People" },
  { href: "/systems", label: "Systems" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy-dark sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Image
              src="/the-future-logo.png"
              alt="The Future Corporate"
              width={50}
              height={50}
              className="object-contain brightness-0 invert w-9 h-9 sm:w-[50px] sm:h-[50px] flex-shrink-0"
            />
            <div className="min-w-0">
              <span className="text-white font-bold text-sm sm:text-lg leading-tight block truncate">
                The Future Corporate
              </span>
              <span className="text-gold text-xs tracking-widest uppercase hidden sm:block">
                People. Systems. Growth.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-gold font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/918793630001"
              target="_blank"
              className="bg-gold text-navy-dark px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gold-dark transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/90 hover:text-gold font-medium py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/918793630001"
              target="_blank"
              className="block bg-gold text-navy-dark px-5 py-2.5 rounded-md text-sm font-semibold text-center hover:bg-gold-dark transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
