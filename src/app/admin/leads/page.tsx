"use client";

import { useState, useEffect } from "react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  created_at: string;
}

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/leads")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setLeads(data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-gray-500">Loading leads...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-navy-dark mb-6">
        Leads ({leads.length})
      </h1>

      {leads.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-gray-100">
          <p className="text-gray-500">
            No leads yet. They&apos;ll appear here when someone submits the contact form.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="bg-white rounded-xl p-6 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-navy-dark">{lead.name}</h3>
                    {lead.service && (
                      <span className="text-xs bg-gold/10 text-navy px-2 py-0.5 rounded-full font-medium">
                        {lead.service}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>{lead.email}</p>
                    {lead.phone && <p>{lead.phone}</p>}
                    {lead.company && <p>{lead.company}</p>}
                  </div>
                  <p className="text-gray-700 mt-3">{lead.message}</p>
                </div>
                <p className="text-xs text-gray-400 flex-shrink-0">
                  {new Date(lead.created_at).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
