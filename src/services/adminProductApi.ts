import type { Product } from "../data/products";

const API_BASE = "http://localhost:3000/api/admin/products";

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

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(API_BASE, { headers: getAuthHeaders() });
  const data = await handleResponse<{ products: Product[] }>(res);
  return data.products;
}

export async function createProduct(
  product: Omit<Product, "id">,
): Promise<Product> {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(product),
  });
  return handleResponse<Product>(res);
}

export async function updateProduct(
  id: number,
  updates: Partial<Product>,
): Promise<Product> {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(updates),
  });
  return handleResponse<Product>(res);
}

export async function deleteProduct(id: number): Promise<void> {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  await handleResponse<unknown>(res);
}
