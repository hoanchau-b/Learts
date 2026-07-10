import { apiSuccess, apiError, apiOptions } from "@/lib/apiResponse";
import { products } from "@/lib/products";
import { authenticateRequest } from "@/lib/adminAuth";

export const runtime = "nodejs";

/** PUT /api/admin/products/[id] — update a product (admin, requires JWT) */
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = authenticateRequest(request);
  if (!user) {
    return apiError("Unauthorized", 401);
  }

  const { id } = await params;
  const productId = parseInt(id, 10);
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    return apiError("Product not found", 404);
  }

  try {
    const body = await request.json();
    const existing = products[index];

    products[index] = {
      ...existing,
      title: body.title ?? existing.title,
      price: body.price != null ? Number(body.price) : existing.price,
      oldPrice: body.oldPrice != null ? Number(body.oldPrice) : existing.oldPrice,
      image: body.image ?? existing.image,
      imageHover: body.imageHover ?? existing.imageHover,
      category: body.category ?? existing.category,
      badges: body.badges ?? existing.badges,
      colors: body.colors ?? existing.colors,
      sizes: body.sizes ?? existing.sizes,
      stock: body.stock != null ? Number(body.stock) : existing.stock,
      sku: body.sku ?? existing.sku,
      description: body.description ?? existing.description,
      tags: body.tags ?? existing.tags,
    };

    return apiSuccess(products[index], "Product updated");
  } catch {
    return apiError("Invalid request body", 400);
  }
}

/** DELETE /api/admin/products/[id] — delete a product (admin, requires JWT) */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = authenticateRequest(request);
  if (!user) {
    return apiError("Unauthorized", 401);
  }

  const { id } = await params;
  const productId = parseInt(id, 10);
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    return apiError("Product not found", 404);
  }

  products.splice(index, 1);

  return apiSuccess(null, "Product deleted");
}

export async function OPTIONS() {
  return apiOptions("PUT, DELETE, OPTIONS");
}