import { verifyToken } from "@/lib/auth";
import { apiSuccess, apiError, apiOptions } from "@/lib/apiResponse";

export async function GET(request: Request) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return apiError("No token provided", 401);
  }

  const token = authHeader.split(" ")[1];
  const payload = verifyToken(token);

  if (!payload) {
    return apiError("Invalid or expired token", 401);
  }

  return apiSuccess(
    { id: payload.id, email: payload.email, name: payload.name },
    "Token valid",
  );
}

export async function OPTIONS() {
  return apiOptions("GET, OPTIONS");
}