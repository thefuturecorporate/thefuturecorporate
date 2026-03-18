import BlogDetail from "./BlogDetail";
import { createClient } from "@supabase/supabase-js";
import type { Metadata } from "next";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

function getSupabase() {
  return createClient(supabaseUrl, supabaseKey);
}

export async function generateStaticParams() {
  try {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("blogs")
      .select("slug")
      .eq("site", "thefuturecorporate")
      .eq("status", "published")
      .eq("deleted", false);
    if (data) return data.map((row) => ({ slug: row.slug }));
  } catch {
    // During build without valid credentials, return empty
  }
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("blogs")
      .select("title, excerpt, cover_image, meta_title, meta_description")
      .eq("slug", slug)
      .eq("site", "thefuturecorporate")
      .eq("status", "published")
      .single();

    if (data) {
      const title = data.meta_title || `${data.title} — The Future Corporate`;
      const description =
        data.meta_description || data.excerpt || "";
      const image =
        data.cover_image ||
        "https://supabase-proxy.avinashchate-abc.workers.dev/storage/v1/object/public/profile-assets/headshots/1772463022779-5f1g1i4yo.jpg";

      return {
        title,
        description,
        openGraph: {
          title,
          description,
          type: "article",
          url: `https://thefuturecorporate.com/blog/${slug}`,
          siteName: "The Future Corporate",
          images: [{ url: image, width: 1200, height: 630, alt: data.title }],
        },
        twitter: {
          card: "summary_large_image",
          title,
          description,
          images: [image],
        },
      };
    }
  } catch {
    // Fallback
  }

  return {
    title: "Blog — The Future Corporate",
  };
}

export default function BlogSlugPage() {
  return <BlogDetail />;
}
