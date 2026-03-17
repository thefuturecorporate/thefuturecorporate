"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Client {
  id: string;
  name: string;
  logo_url: string;
  industry: string;
}

const SUPABASE_ORIGIN = "https://irphkhhtnfodgrqcygmw.supabase.co";
const PROXY_ORIGIN = "https://supabase-proxy.avinashchate-abc.workers.dev";

function proxyLogoUrl(url: string): string {
  return url.replace(SUPABASE_ORIGIN, PROXY_ORIGIN);
}

const fallbackClients = [
  "RBI",
  "BARC",
  "JSW Steel",
  "Hitachi",
  "Mumbai Port Authority",
  "Indian Army",
  "Suprajit Engineering",
];

export default function ClientsSection() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    async function fetchClients() {
      try {
        const { data, error } = await supabase
          .from("companies")
          .select("id, name, logo_url, industry")
          .not("logo_url", "is", null)
          .neq("logo_url", "")
          .eq("deleted", false)
          .order("name");

        if (error || !data || data.length === 0) {
          setFailed(true);
        } else {
          setClients(data);
        }
      } catch {
        setFailed(true);
      }
      setLoading(false);
    }
    fetchClients();
  }, []);

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

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-3 border-gray-300 border-t-navy rounded-full animate-spin" />
          </div>
        ) : failed ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {fallbackClients.map((client) => (
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
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group bg-white border border-gray-200 rounded-lg p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:border-gold/30 transition-all"
              >
                <div className="h-16 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={proxyLogoUrl(client.logo_url)}
                    alt={client.name}
                    className="max-h-16 max-w-[120px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-gray-500 group-hover:text-navy-dark text-xs font-medium text-center leading-tight transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
