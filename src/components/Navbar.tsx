"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/people", label: "People" },
  { href: "/systems", label: "Systems" },
  { href: "/arisha-foundation", label: "Arisha Foundation" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/the-future-logo.png"
              alt="The Future Corporate"
              width={50}
              height={50}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-navy font-bold text-lg leading-tight block">
                The Future Corporate
              </span>
              <span className="text-gold text-xs tracking-widest uppercase">
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
                className="text-navy-dark hover:text-gold font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/918793630001"
              target="_blank"
              className="bg-navy text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-navy-dark transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-navy"
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
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-navy-dark hover:text-gold font-medium py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/918793630001"
              target="_blank"
              className="block bg-navy text-white px-5 py-2.5 rounded-md text-sm font-semibold text-center hover:bg-navy-dark transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
