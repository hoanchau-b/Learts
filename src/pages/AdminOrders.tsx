import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { fetchAllOrders, updateOrderStatus } from "../services/adminOrderApi";
import { ORDER_STATUSES, type Order, type OrderStatus } from "../types/order";
import toast from "react-hot-toast";

const STATUS_COLORS: Record<OrderStatus, string> = {
  pending: "#f39c12",
  confirmed: "#3498db",
  shipped: "#9b59b6",
  delivered: "#27ae60",
  cancelled: "#e74c3c",
};

const AdminOrders = () => {
  const navigate = useNavigate();
  const { token, admin, checkAuth } = useAuthStore();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Auth check
  useEffect(() => {
    if (!token) {
      navigate("/login-register", { replace: true });
      return;
    }
    if (!admin) checkAuth();
  }, [token, admin, checkAuth, navigate]);

  useEffect(() => {
    if (!token) navigate("/login-register", { replace: true });
  }, [token, navigate]);

  const loadOrders = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchAllOrders();
      setOrders(data);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to load orders";
      toast.error(msg);
      if (msg.includes("Unauthorized")) {
        useAuthStore.getState().logout();
        navigate("/login-register", { replace: true });
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    if (token && admin) loadOrders();
  }, [token, admin, loadOrders]);

  const handleStatusChange = async (id: number, status: string) => {
    try {
      await updateOrderStatus(id, status);
      setOrders((prev) =>
        prev.map((o) =>
          o.id === id
            ? { ...o, status: status as OrderStatus, updatedAt: new Date().toISOString() }
            : o,
        ),
      );
      toast.success(`Order #${id} → ${status}`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Update failed";
      toast.error(msg);
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!token) return null;
  if (!admin) {
    return (
      <div className="section section-padding">
        <div className="container text-center">
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div
        className="page-title-section section"
        data-bg-image="assets/images/bg/page-title-1.webp"
        style={{
          backgroundImage: 'url("assets/images/bg/page-title-1.webp")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-title">
                <h1 className="title">Manage Orders</h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/dashboard">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Orders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section section-padding">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <h4 style={{ margin: 0 }}>All Orders ({orders.length})</h4>
            <button
              className="btn btn-dark btn-outline-hover-dark"
              onClick={loadOrders}
              disabled={loading}
            >
              {loading ? "Loading..." : "Refresh"}
            </button>
          </div>

          {loading ? (
            <p className="text-center">Loading orders...</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table
                className="table table-bordered"
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 14,
                }}
              >
                <thead style={{ background: "#f8f8f8" }}>
                  <tr>
                    <th style={thStyle}>#</th>
                    <th style={thStyle}>Customer</th>
                    <th style={thStyle}>Email</th>
                    <th style={thStyle}>Items</th>
                    <th style={thStyle}>Total</th>
                    <th style={thStyle}>Status</th>
                    <th style={thStyle}>Date</th>
                    <th style={thStyle}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} style={{ verticalAlign: "middle" }}>
                      <td style={tdStyle}>
                        <strong>#{order.id}</strong>
                      </td>
                      <td style={tdStyle}>{order.customer.name}</td>
                      <td style={tdStyle}>{order.customer.email}</td>
                      <td style={tdStyle}>
                        {order.items.length} item
                        {order.items.length !== 1 ? "s" : ""}
                      </td>
                      <td style={tdStyle}>
                        <strong>${order.total.toFixed(2)}</strong>
                      </td>
                      <td style={tdStyle}>
                        <select
                          value={order.status}
                          onChange={(e) =>
                            handleStatusChange(order.id, e.target.value)
                          }
                          style={{
                            padding: "4px 8px",
                            borderRadius: 4,
                            border: "1px solid #ddd",
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#fff",
                            backgroundColor: STATUS_COLORS[order.status],
                            cursor: "pointer",
                          }}
                        >
                          {ORDER_STATUSES.map((s) => (
                            <option
                              key={s}
                              value={s}
                              style={{ color: "#333", background: "#fff" }}
                            >
                              {s}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td style={tdStyle}>
                        {formatDate(order.createdAt)}
                      </td>
                      <td style={tdStyle}>
                        <button
                          className="btn btn-sm btn-dark"
                          style={{ padding: "4px 12px", fontSize: 12 }}
                          onClick={() => toggleExpand(order.id)}
                        >
                          {expandedId === order.id ? "Hide" : "View"}
                        </button>
                      </td>
                    </tr>
                  ))}
                  {orders.length === 0 && (
                    <tr>
                      <td
                        colSpan={8}
                        style={{ textAlign: "center", padding: 40 }}
                      >
                        No orders yet. Orders will appear when customers place
                        them.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Expanded detail rows */}
              {orders.map((order) => (
                <div key={`exp-${order.id}`}>
                  {expandedId === order.id && (
                    <div
                      style={{
                        background: "#f9f9f9",
                        borderRadius: 8,
                        padding: 20,
                        marginBottom: 16,
                        border: "1px solid #eee",
                      }}
                    >
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                        <div>
                          <strong>Customer:</strong> {order.customer.name}
                          <br />
                          <strong>Phone:</strong> {order.customer.phone}
                          <br />
                          <strong>Email:</strong> {order.customer.email}
                        </div>
                        <div>
                          <strong>Order ID:</strong> #{order.id}
                          <br />
                          <strong>Status:</strong>{" "}
                          <span
                            style={{
                              padding: "2px 8px",
                              borderRadius: 4,
                              fontSize: 12,
                              fontWeight: 600,
                              color: "#fff",
                              backgroundColor: STATUS_COLORS[order.status],
                            }}
                          >
                            {order.status}
                          </span>
                          <br />
                          <strong>Created:</strong> {formatDate(order.createdAt)}
                          <br />
                          <strong>Updated:</strong> {formatDate(order.updatedAt)}
                        </div>
                      </div>

                      <h6 style={{ marginBottom: 8 }}>Items</h6>
                      <table
                        className="table table-bordered"
                        style={{ fontSize: 13, marginBottom: 0 }}
                      >
                        <thead>
                          <tr>
                            <th style={thStyle}>Image</th>
                            <th style={thStyle}>Product</th>
                            <th style={thStyle}>Price</th>
                            <th style={thStyle}>Qty</th>
                            <th style={thStyle}>Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.items.map((item) => (
                            <tr key={item.productId}>
                              <td style={tdStyle}>
                                {item.image ? (
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                      width: 40,
                                      height: 40,
                                      objectFit: "cover",
                                    }}
                                  />
                                ) : (
                                  "—"
                                )}
                              </td>
                              <td style={tdStyle}>{item.title}</td>
                              <td style={tdStyle}>
                                ${item.price.toFixed(2)}
                              </td>
                              <td style={tdStyle}>{item.quantity}</td>
                              <td style={tdStyle}>
                                ${(item.price * item.quantity).toFixed(2)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan={4} style={{ textAlign: "right", fontWeight: 700 }}>
                              Total
                            </td>
                            <td style={{ fontWeight: 700 }}>
                              ${order.total.toFixed(2)}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  padding: "10px 12px",
  textAlign: "left",
  fontWeight: 700,
  fontSize: 13,
  whiteSpace: "nowrap",
};

const tdStyle: React.CSSProperties = {
  padding: "10px 12px",
  fontSize: 13,
};

export default AdminOrders;
