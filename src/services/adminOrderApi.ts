import type { Order } from "../types/order";

const API_BASE = "http://localhost:3000/api/admin/orders";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

function getAuthHeaders(): Record<string, string> {
  const token = localStorage.getItem("admin_token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

async function handleResponse<T>(res: Response): Promise<T> {
  const body: ApiResponse<T> = await res.json();
  if (res.status === 401) throw new Error("Unauthorized — please log in again");
  if (!res.ok || !body.success) {
    throw new Error(body.message || "Request failed");
  }
  return body.data;
}

export async function fetchAllOrders(): Promise<Order[]> {
  const res = await fetch(API_BASE, { headers: getAuthHeaders() });
  const data = await handleResponse<{ orders: Order[] }>(res);
  return data.orders;
}

export async function updateOrderStatus(
  id: number,
  status: string,
): Promise<Order> {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify({ status }),
  });
  return handleResponse<Order>(res);
}
