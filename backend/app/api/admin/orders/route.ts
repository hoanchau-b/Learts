import { orders } from "@/lib/orders";
import { authenticateRequest } from "@/lib/adminAuth";
import { apiSuccess, apiError, apiOptions } from "@/lib/apiResponse";

export const runtime = "nodejs";

/** GET /api/admin/orders — list all orders (admin, requires JWT, newest first) */
export async function GET(request: Request) {
  try {
    const user = authenticateRequest(request);
    if (!user) {
      return apiError("Unauthorized", 401);
    }

    const sorted = [...orders].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    return apiSuccess({ orders: sorted }, "Orders retrieved");
  } catch {
    return apiError("Internal server error", 500);
  }
}

export async function OPTIONS() {
  return apiOptions("GET, OPTIONS");
}
