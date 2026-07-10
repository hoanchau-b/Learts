import type { Product } from "../data/products";

const API_BASE = "http://localhost:3000/api";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ProductsData {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
}

async function handleResponse<T>(res: Response): Promise<T> {
  const body: ApiResponse<T> = await res.json();
  if (!res.ok || !body.success) {
    throw new Error(body.message || "Request failed");
  }
  return body.data;
}

export async function fetchProducts(params?: {
  category?: string;
  page?: number;
  sort?: string;
}): Promise<ProductsData> {
  const searchParams = new URLSearchParams();
  if (params?.category) searchParams.set("category", params.category);
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.sort) searchParams.set("sort", params.sort);

  const res = await fetch(`${API_BASE}/products?${searchParams.toString()}`);
  return handleResponse<ProductsData>(res);
}

export async function fetchProductById(id: number): Promise<Product | null> {
  const res = await fetch(`${API_BASE}/products/${id}`);
  if (res.status === 404) return null;
  const data = await handleResponse<Product>(res);
  return data;
}

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(`${API_BASE}/categories`);
  const data = await handleResponse<{ categories: string[] }>(res);
  return data.categories;
}
