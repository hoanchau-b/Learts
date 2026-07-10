const API_BASE = "http://localhost:3000/api/auth";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface AdminData {
  admin: { id: string; email: string; name: string };
  token: string;
}

async function handleResponse<T>(res: Response): Promise<T> {
  const body: ApiResponse<T> = await res.json();
  if (!res.ok || !body.success) {
    throw new Error(body.message || "Request failed");
  }
  return body.data;
}

export async function loginApi(
  email: string,
  password: string,
): Promise<AdminData> {
  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse<AdminData>(res);
}

export async function registerApi(
  email: string,
  password: string,
  name: string,
): Promise<AdminData> {
  const res = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name }),
  });
  return handleResponse<AdminData>(res);
}

export async function getMeApi(): Promise<{ id: string; email: string; name: string }> {
  const token = localStorage.getItem("admin_token");
  if (!token) throw new Error("No token found");

  const res = await fetch(`${API_BASE}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return handleResponse<{ id: string; email: string; name: string }>(res);
}
