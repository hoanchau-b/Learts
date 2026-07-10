import { placeOrder } from "@/lib/orders";
import { apiSuccess, apiError, apiOptions } from "@/lib/apiResponse";

export const runtime = "nodejs";

/** POST /api/orders — place an order (public) */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customer, items } = body;

    if (!customer || !customer.name || !customer.phone || !customer.email) {
      return apiError("Customer name, phone, and email are required", 400);
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return apiError("At least one item is required", 400);
    }

    const order = placeOrder({
      customer: {
        name: customer.name,
        phone: customer.phone,
        email: customer.email,
      },
      items: items.map((i: { productId: number; quantity: number }) => ({
        productId: i.productId,
        quantity: i.quantity,
      })),
    });

    return apiSuccess(order, "Order placed successfully", 201);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Order failed";
    const isStockError = message.includes("Insufficient stock");
    return apiError(message, isStockError ? 409 : 400);
  }
}

export async function OPTIONS() {
  return apiOptions("POST, OPTIONS");
}
