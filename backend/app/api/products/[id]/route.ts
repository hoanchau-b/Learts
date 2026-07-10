import { products } from "@/lib/products";
import { apiSuccess, apiError, apiOptions } from "@/lib/apiResponse";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const productId = parseInt(id, 10);

  if (Number.isNaN(productId)) {
    return apiError("Invalid product ID", 400);
  }

  const product = products.find((p) => p.id === productId);
  if (!product) {
    return apiError("Product not found", 404);
  }

  return apiSuccess(product, "Product retrieved");
}

export async function OPTIONS() {
  return apiOptions();
}