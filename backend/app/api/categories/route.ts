import { CATEGORIES } from "@/lib/products";
import { apiSuccess, apiError, apiOptions } from "@/lib/apiResponse";

export const runtime = "nodejs";

export async function GET() {
  try {
    const cats = CATEGORIES.filter((c) => c !== "All");
    return apiSuccess({ categories: cats }, "Categories retrieved");
  } catch {
    return apiError("Internal server error", 500);
  }
}

export async function OPTIONS() {
  return apiOptions();
}
