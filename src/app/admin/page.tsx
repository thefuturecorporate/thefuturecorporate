"use client";

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-navy-dark mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Leads",
            description: "View and manage contact form submissions",
            href: "/admin/leads",
            color: "bg-blue-50 border-blue-200",
          },
          {
            title: "Blog Manager",
            description: "Create, edit, and publish blog posts",
            href: "/admin/blog",
            color: "bg-green-50 border-green-200",
          },
          {
            title: "Content Editor",
            description: "Edit homepage headline, about text, and more",
            href: "/admin/content",
            color: "bg-purple-50 border-purple-200",
          },
        ].map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className={`${card.color} border rounded-xl p-8 hover:shadow-md transition-shadow`}
          >
            <h2 className="text-xl font-bold text-navy-dark mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
