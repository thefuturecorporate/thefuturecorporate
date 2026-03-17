"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const pathname = usePathname();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password === ADMIN_PASSWORD) {
      setIsAuth(true);
    } else {
      setError("Invalid password");
    }
  }

  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-xl shadow-sm p-8 w-full max-w-sm border border-gray-100">
          <h1 className="text-2xl font-bold text-navy-dark mb-6 text-center">
            Admin Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent outline-none"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-navy hover:bg-navy-dark text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const navItems = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/leads", label: "Leads" },
    { href: "/admin/blog", label: "Blog" },
    { href: "/admin/content", label: "Content" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy-dark text-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="font-bold text-lg">
            TFC Admin
          </Link>
          <nav className="flex gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  pathname === item.href
                    ? "text-gold font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Link href="/" className="text-sm text-gray-400 hover:text-white">
          View Site &rarr;
        </Link>
      </div>
      <div className="p-6 max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
