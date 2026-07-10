import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Supabase client for Server Components, Server Actions, and Route Handlers.
 * Uses createServerClient from @supabase/ssr with cookie-based session.
 *
 * Usage (in any async Server Component or Route Handler):
 *
 *   const supabase = await createClient();
 *   const { data } = await supabase.from("products").select("*");
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            for (const { name, value, options } of cookiesToSet) {
              cookieStore.set(name, value, options);
            }
          } catch {
            // setAll can be called from a Server Component — this is a no-op
            // because Server Components cannot set cookies. The middleware
            // handles cookie refresh for Server Components.
          }
        },
      },
    },
  );
}
