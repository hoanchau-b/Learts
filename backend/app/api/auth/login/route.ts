import { admins, comparePassword, signToken } from "@/lib/auth";
import { apiSuccess, apiError, apiOptions } from "@/lib/apiResponse";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return apiError("Email and password are required", 400);
    }

    const admin = admins.find((a) => a.email === email);
    if (!admin || !comparePassword(password, admin.passwordHash)) {
      return apiError("Invalid email or password", 401);
    }

    const token = signToken({
      id: admin.id,
      email: admin.email,
      name: admin.name,
    });

    return apiSuccess(
      { admin: { id: admin.id, email: admin.email, name: admin.name }, token },
      "Login successful",
    );
  } catch {
    return apiError("Internal server error", 500);
  }
}

export async function OPTIONS() {
  return apiOptions("POST, OPTIONS");
}