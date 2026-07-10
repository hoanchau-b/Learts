import { apiSuccess, apiError, apiOptions } from "@/lib/apiResponse";
import { products, getNextId } from "@/lib/products";
import { authenticateRequest } from "@/lib/adminAuth";
import type { Product } from "@/lib/products";

export const runtime = "nodejs";

/** GET /api/admin/products — list all products (admin, requires JWT) */
export async function GET(request: Request) {
  try {
    const user = authenticateRequest(request);
    if (!user) {
      return apiError("Unauthorized", 401);
    }

    return apiSuccess({ products }, "Products retrieved");
  } catch {
    return apiError("Internal server error", 500);
  }
}

/** POST /api/admin/products — create a new product (admin, requires JWT) */
export async function POST(request: Request) {
  const user = authenticateRequest(request);
  if (!user) {
    return apiError("Unauthorized", 401);
  }

  try {
    const body = await request.json();
    const { title, price, category, stock, sku, description } = body;

    if (!title || price == null || !category || stock == null || !sku) {
      return apiError(
        "Missing required fields: title, price, category, stock, sku",
        400,
      );
    }

    const newProduct: Product = {
      id: getNextId(),
      title,
      price: Number(price),
      oldPrice: body.oldPrice ? Number(body.oldPrice) : undefined,
      image: body.image || "",
      imageHover: body.imageHover || "",
      category,
      badges: body.badges,
      colors: body.colors,
      sizes: body.sizes,
      stock: Number(stock),
      sku,
      description: description || "",
      tags: body.tags || [],
    };

    products.push(newProduct);

    return apiSuccess(newProduct, "Product created", 201);
  } catch {
    return apiError("Invalid request body", 400);
  }
}

export async function OPTIONS() {
  return apiOptions("GET, POST, OPTIONS");
}
