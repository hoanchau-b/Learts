import { create } from "zustand";
import { loginApi, registerApi, getMeApi } from "../services/authApi";

interface Admin {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  admin: Admin | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  admin: null,
  token: localStorage.getItem("admin_token"),
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const data = await loginApi(email, password);
      localStorage.setItem("admin_token", data.token);
      set({ admin: data.admin, token: data.token, isLoading: false });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Login failed";
      set({ error: message, isLoading: false });
      throw err;
    }
  },

  register: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const data = await registerApi(email, password, name);
      localStorage.setItem("admin_token", data.token);
      set({ admin: data.admin, token: data.token, isLoading: false });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Registration failed";
      set({ error: message, isLoading: false });
      throw err;
    }
  },

  logout: () => {
    localStorage.removeItem("admin_token");
    set({ admin: null, token: null, error: null });
  },

  checkAuth: async () => {
    const token = localStorage.getItem("admin_token");
    if (!token) return;

    set({ isLoading: true });
    try {
      const admin = await getMeApi();
      set({ admin, token, isLoading: false });
    } catch {
      localStorage.removeItem("admin_token");
      set({ admin: null, token: null, isLoading: false });
    }
  },

  clearError: () => set({ error: null }),
}));
