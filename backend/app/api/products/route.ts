import { products, PRODUCTS_PER_PAGE } from "@/lib/products";
import { apiSuccess, apiError, apiOptions } from "@/lib/apiResponse";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") || "";
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const sort = searchParams.get("sort") || "";

    let result = [...products];

    // Filter by category
    if (category) {
      result = result.filter((p) => p.category === category);
    }

    // Sort
    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    const total = result.length;
    const totalPages = Math.max(1, Math.ceil(total / PRODUCTS_PER_PAGE));
    const safePage = Math.min(page, totalPages);
    const start = (safePage - 1) * PRODUCTS_PER_PAGE;
    const items = result.slice(start, start + PRODUCTS_PER_PAGE);

    return apiSuccess(
      { products: items, total, page: safePage, totalPages },
      "Products retrieved",
    );
  } catch {
    return apiError("Internal server error", 500);
  }
}

export async function OPTIONS() {
  return apiOptions();
}
