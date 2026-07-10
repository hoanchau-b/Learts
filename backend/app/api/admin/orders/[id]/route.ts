import { updateOrderStatus, ORDER_STATUSES, type OrderStatus } from "@/lib/orders";
import { authenticateRequest } from "@/lib/adminAuth";
import { apiSuccess, apiError, apiOptions } from "@/lib/apiResponse";

export const runtime = "nodejs";

/** PUT /api/admin/orders/[id] — update order status (admin, requires JWT) */
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = authenticateRequest(request);
  if (!user) {
    return apiError("Unauthorized", 401);
  }

  const { id } = await params;
  const orderId = parseInt(id, 10);

  if (Number.isNaN(orderId)) {
    return apiError("Invalid order ID", 400);
  }

  try {
    const body = await request.json();
    const { status } = body;

    if (!status || !ORDER_STATUSES.includes(status as OrderStatus)) {
      return apiError(
        `Invalid status. Must be one of: ${ORDER_STATUSES.join(", ")}`,
        400,
      );
    }

    const updated = updateOrderStatus(orderId, status as OrderStatus);
    if (!updated) {
      return apiError("Order not found", 404);
    }

    return apiSuccess(updated, "Order status updated");
  } catch {
    return apiError("Invalid request body", 400);
  }
}

export async function OPTIONS() {
  return apiOptions("PUT, OPTIONS");
}
