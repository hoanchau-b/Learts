import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Supabase middleware helper — refreshes the auth session cookie on every request.
 *
 * Called from the root `backend/middleware.ts`. It calls `supabase.auth.getUser()`
 * to refresh the session, then forwards updated cookies so both Server and Client
 * Components always have a fresh session.
 */
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          for (const { name, value } of cookiesToSet) {
            request.cookies.set(name, value);
          }
          supabaseResponse = NextResponse.next({ request });
          for (const { name, value, options } of cookiesToSet) {
            supabaseResponse.cookies.set(name, value, options);
          }
        },
      },
    },
  );

  // Refresh the auth session — extends the cookie if the token is near expiry.
  await supabase.auth.getUser();

  return supabaseResponse;
}
