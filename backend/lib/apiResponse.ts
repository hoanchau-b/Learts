import { NextResponse } from "next/server";

/**
 * Standard success response: { success: true, message, data }
 */
export function apiSuccess<T>(
  data: T,
  message = "Success",
  status = 200,
): NextResponse {
  const res = NextResponse.json({ success: true, message, data }, { status });
  res.headers.set("Access-Control-Allow-Origin", "*");
  return res;
}

/**
 * Standard error response: { success: false, message }
 */
export function apiError(
  message: string,
  status = 400,
): NextResponse {
  const res = NextResponse.json({ success: false, message }, { status });
  res.headers.set("Access-Control-Allow-Origin", "*");
  return res;
}

/**
 * CORS preflight helper for OPTIONS requests
 */
export function apiOptions(methods: string = "GET, OPTIONS"): NextResponse {
  const res = new NextResponse(null, { status: 204 });
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", methods);
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return res;
}
