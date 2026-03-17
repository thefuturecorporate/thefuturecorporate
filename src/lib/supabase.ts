import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

function getSupabaseClient(): SupabaseClient {
  if (!supabaseUrl || supabaseUrl === "your_supabase_url_here") {
    // Return a mock-like client that won't crash during build
    return createClient("https://placeholder.supabase.co", "placeholder-key");
  }
  return createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = getSupabaseClient();
