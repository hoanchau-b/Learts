import { createBrowserClient } from "@supabase/ssr";

/**
 * Supabase client for Client Components (use client).
 * Uses createBrowserClient from @supabase/ssr — singleton pattern.
 *
 * Usage (in any Client Component or hook):
 *
 *   import { createClient } from "@/lib/supabase/client";
 *   const supabase = createClient();
 *   const { data } = await supabase.from("products").select("*");
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
