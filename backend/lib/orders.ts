import { products } from "./products";

export type OrderStatus = "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";

export interface OrderItem {
  productId: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: number;
  customer: {
    name: string;
    phone: string;
    email: string;
  };
  items: OrderItem[];
  subtotal: number;
  total: number;
  status: OrderStatus;
  createdAt: string; // ISO string
  updatedAt: string;
}

export const ORDER_STATUSES: OrderStatus[] = [
  "pending",
  "confirmed",
  "shipped",
  "delivered",
  "cancelled",
];

let lastOrderId = 0;
export function getNextOrderId(): number {
  lastOrderId += 1;
  return lastOrderId;
}

export const orders: Order[] = [];

/**
 * Place an order, deduct stock for each item.
 * Returns the created order or throws on insufficient stock.
 */
export function placeOrder(orderData: {
  customer: { name: string; phone: string; email: string };
  items: { productId: number; quantity: number }[];
}): Order {
  const now = new Date().toISOString();

  // Build order items, validate stock
  const orderItems: OrderItem[] = [];

  for (const item of orderData.items) {
    const product = products.find((p) => p.id === item.productId);
    if (!product) {
      throw new Error(`Product ID ${item.productId} not found`);
    }
    if (product.stock < item.quantity) {
      throw new Error(
        `Insufficient stock for "${product.title}". Available: ${product.stock}, requested: ${item.quantity}`,
      );
    }
    orderItems.push({
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity: item.quantity,
      image: product.image,
    });
  }

  // Deduct stock
  for (const oi of orderItems) {
    const product = products.find((p) => p.id === oi.productId)!;
    product.stock -= oi.quantity;
  }

  // Compute totals
  const subtotal = orderItems.reduce(
    (sum, oi) => sum + oi.price * oi.quantity,
    0,
  );

  const order: Order = {
    id: getNextOrderId(),
    customer: orderData.customer,
    items: orderItems,
    subtotal,
    total: subtotal,
    status: "pending",
    createdAt: now,
    updatedAt: now,
  };

  orders.push(order);
  return order;
}

/**
 * Update order status.
 */
export function updateOrderStatus(id: number, status: OrderStatus): Order | null {
  const order = orders.find((o) => o.id === id);
  if (!order) return null;

  order.status = status;
  order.updatedAt = new Date().toISOString();
  return order;
}
