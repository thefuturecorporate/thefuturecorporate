import { createClient } from "@supabase/supabase-js";
import { trainings } from "@/data/trainings";
import { solutions } from "@/data/solutions";

export const runtime = "edge";

const BASE = "https://thefuturecorporate.com";
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

function entry(
  loc: string,
  priority: number,
  changefreq: string,
  lastmod?: string
) {
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}
  </url>`;
}

export async function GET() {
  const now = new Date().toISOString().split("T")[0];
  const urls: string[] = [];

  // Static pages
  urls.push(entry(BASE, 1.0, "daily", now));
  urls.push(entry(`${BASE}/people`, 0.8, "monthly", now));
  urls.push(entry(`${BASE}/systems`, 0.8, "monthly", now));
  urls.push(entry(`${BASE}/about`, 0.8, "monthly", now));
  urls.push(entry(`${BASE}/contact`, 0.8, "monthly", now));
  urls.push(entry(`${BASE}/blog`, 0.9, "daily", now));

  // People (training) pages
  for (const t of trainings) {
    urls.push(entry(`${BASE}/people/${t.slug}`, 0.7, "monthly"));
  }

  // Systems (solution) pages
  for (const s of solutions) {
    urls.push(entry(`${BASE}/systems/${s.slug}`, 0.7, "monthly"));
  }

  // Blog pages from Supabase
  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data } = await supabase
      .from("blogs")
      .select("slug, updated_at")
      .eq("site", "thefuturecorporate")
      .eq("status", "published")
      .eq("deleted", false);

    if (data) {
      for (const blog of data) {
        const lastmod = blog.updated_at
          ? new Date(blog.updated_at).toISOString().split("T")[0]
          : undefined;
        urls.push(entry(`${BASE}/blog/${blog.slug}`, 0.7, "weekly", lastmod));
      }
    }
  } catch {
    // If Supabase is unreachable, skip blog URLs
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
