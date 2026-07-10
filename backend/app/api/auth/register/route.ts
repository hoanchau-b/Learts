import { admins, hashPassword, signToken } from "@/lib/auth";
import { apiSuccess, apiError, apiOptions } from "@/lib/apiResponse";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return apiError("Email, password, and name are required", 400);
    }

    const exists = admins.find((a) => a.email === email);
    if (exists) {
      return apiError("Email already registered", 409);
    }

    const id = `admin-${Date.now()}`;
    const newAdmin = {
      id,
      email,
      name,
      passwordHash: hashPassword(password),
    };
    admins.push(newAdmin);

    const token = signToken({ id, email, name });

    return apiSuccess(
      { admin: { id, email, name }, token },
      "Registration successful",
      201,
    );
  } catch {
    return apiError("Internal server error", 500);
  }
}

export async function OPTIONS() {
  return apiOptions("POST, OPTIONS");
}