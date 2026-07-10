import { verifyToken } from "./auth";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

/** Extract and verify JWT from request. Returns null if invalid. */
export function authenticateRequest(request: Request): AuthUser | null {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;

  const token = authHeader.split(" ")[1];
  const payload = verifyToken(token);
  if (!payload) return null;

  return { id: payload.id, email: payload.email, name: payload.name };
}
