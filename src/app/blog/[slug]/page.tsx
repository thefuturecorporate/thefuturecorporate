import BlogDetail from "./BlogDetail";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export async function generateStaticParams() {
  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
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

export default function BlogSlugPage() {
  return <BlogDetail />;
}
