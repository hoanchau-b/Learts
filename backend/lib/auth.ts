import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "learts-admin-secret-key-change-in-production";

export interface AdminPayload {
  id: string;
  email: string;
  name: string;
}

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10);
}

export function comparePassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}

export function signToken(payload: AdminPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
}

export function verifyToken(token: string): AdminPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AdminPayload;
  } catch {
    return null;
  }
}

// In-memory admin store (replace with DB in production)
export interface Admin {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
}

export const admins: Admin[] = [
  {
    id: "admin-1",
    email: "admin@learts.com",
    name: "Admin",
    passwordHash: hashPassword("admin123"),
  },
];
