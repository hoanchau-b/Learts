const API_BASE = "http://localhost:3000/api";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface OrderItem {
  productId: number;
  quantity: number;
}

interface PlaceOrderRequest {
  customer: {
    name: string;
    phone: string;
    email: string;
  };
  items: OrderItem[];
}

export async function placeOrder(data: PlaceOrderRequest): Promise<unknown> {
  const res = await fetch(`${API_BASE}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const body: ApiResponse<unknown> = await res.json();
  if (!res.ok || !body.success) {
    throw new Error(body.message || "Order failed");
  }
  return body.data;
}
