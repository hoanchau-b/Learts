import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import {
  fetchAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/adminProductApi";
import type { Product } from "../data/products";
import toast from "react-hot-toast";

type ModalMode = "add" | "edit";

const EMPTY_FORM: Omit<Product, "id"> = {
  title: "",
  price: 0,
  image: "",
  imageHover: "",
  category: "Home Decor",
  stock: 0,
  sku: "",
  description: "",
  tags: [],
};

const CATEGORY_OPTIONS = [
  "Gift ideas",
  "Home Decor",
  "Kids & Babies",
  "Kitchen",
  "Kniting & Sewing",
  "Pots",
  "Toys",
];

const AdminProducts = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>("add");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<Omit<Product, "id">>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);

  // Delete confirm
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // Load products (auth handled by ProtectedRoute)
  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchAllProducts();
      setProducts(data);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to load products";
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
    loadProducts();
  }, [loadProducts]);

  // Modal handlers
  const openAddModal = () => {
    setModalMode("add");
    setEditingId(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setModalMode("edit");
    setEditingId(product.id);
    setForm({
      title: product.title,
      price: product.price,
      oldPrice: product.oldPrice,
      image: product.image,
      imageHover: product.imageHover,
      category: product.category,
      badges: product.badges,
      colors: product.colors,
      sizes: product.sizes,
      stock: product.stock,
      sku: product.sku,
      description: product.description,
      tags: product.tags,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingId(null);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const val =
      type === "number" ? (value === "" ? 0 : Number(value)) : value;
    setForm((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (modalMode === "add") {
        await createProduct(form);
        toast.success("Product created!");
      } else if (editingId !== null) {
        await updateProduct(editingId, form);
        toast.success("Product updated!");
      }
      closeModal();
      await loadProducts();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Operation failed";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (deleteId === null) return;
    try {
      await deleteProduct(deleteId);
      toast.success("Product deleted!");
      setDeleteId(null);
      await loadProducts();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Delete failed";
      toast.error(msg);
    }
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
                <h1 className="title">Manage Products</h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/dashboard">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section section-padding">
        <div className="container">
          {/* Toolbar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <h4 style={{ margin: 0 }}>
              All Products ({products.length})
            </h4>
            <button
              className="btn btn-dark btn-outline-hover-dark"
              onClick={openAddModal}
            >
              + Add Product
            </button>
          </div>

          {/* Table */}
          {loading ? (
            <p className="text-center">Loading products...</p>
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
                    <th style={thStyle}>ID</th>
                    <th style={thStyle}>Image</th>
                    <th style={thStyle}>Title</th>
                    <th style={thStyle}>Price</th>
                    <th style={thStyle}>Stock</th>
                    <th style={thStyle}>Category</th>
                    <th style={thStyle}>SKU</th>
                    <th style={thStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} style={{ verticalAlign: "middle" }}>
                      <td style={tdStyle}>{p.id}</td>
                      <td style={tdStyle}>
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.title}
                            style={{ width: 50, height: 50, objectFit: "cover" }}
                          />
                        ) : (
                          <span style={{ color: "#999" }}>—</span>
                        )}
                      </td>
                      <td style={tdStyle}>
                        <strong>{p.title}</strong>
                        {p.badges && p.badges.length > 0 && (
                          <div style={{ marginTop: 4 }}>
                            {p.badges.map((b) => (
                              <span
                                key={b}
                                style={{
                                  display: "inline-block",
                                  fontSize: 10,
                                  textTransform: "uppercase",
                                  fontWeight: 700,
                                  padding: "1px 6px",
                                  borderRadius: 3,
                                  marginRight: 4,
                                  background:
                                    b === "hot"
                                      ? "#e74c3c"
                                      : b === "onsale"
                                        ? "#27ae60"
                                        : "#95a5a6",
                                  color: "#fff",
                                }}
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        )}
                      </td>
                      <td style={tdStyle}>
                        {p.oldPrice ? (
                          <>
                            <del style={{ color: "#999", fontSize: 12 }}>
                              ${p.oldPrice}
                            </del>{" "}
                            <span style={{ color: "#e74c3c" }}>
                              ${p.price}
                            </span>
                          </>
                        ) : (
                          `$${p.price}`
                        )}
                      </td>
                      <td style={tdStyle}>
                        <span
                          style={{
                            color: p.stock === 0 ? "#e74c3c" : "#27ae60",
                            fontWeight: 600,
                          }}
                        >
                          {p.stock === 0 ? "Out of stock" : p.stock}
                        </span>
                      </td>
                      <td style={tdStyle}>{p.category}</td>
                      <td style={tdStyle}>
                        <code style={{ fontSize: 12 }}>{p.sku}</code>
                      </td>
                      <td style={tdStyle}>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button
                            className="btn btn-sm btn-dark"
                            style={{ padding: "4px 12px", fontSize: 12 }}
                            onClick={() => openEditModal(p)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm"
                            style={{
                              padding: "4px 12px",
                              fontSize: 12,
                              background: "#e74c3c",
                              color: "#fff",
                              border: "none",
                            }}
                            onClick={() => setDeleteId(p.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                    <tr>
                      <td colSpan={8} style={{ textAlign: "center", padding: 40 }}>
                        No products found. Click "Add Product" to create one.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 8,
              maxWidth: 640,
              width: "90%",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: 32,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 24,
              }}
            >
              <h3 style={{ margin: 0 }}>
                {modalMode === "add" ? "Add Product" : "Edit Product"}
              </h3>
              <button
                onClick={closeModal}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 22,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gap: 16 }}>
                {/* Title */}
                <div>
                  <label style={labelStyle}>Title *</label>
                  <input
                    name="title"
                    value={form.title}
                    onChange={handleFormChange}
                    style={inputStyle}
                    required
                  />
                </div>

                {/* Price + Old Price row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={labelStyle}>Price *</label>
                    <input
                      type="number"
                      name="price"
                      value={form.price}
                      onChange={handleFormChange}
                      style={inputStyle}
                      min={0}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Old Price</label>
                    <input
                      type="number"
                      name="oldPrice"
                      value={form.oldPrice ?? ""}
                      onChange={(e) => {
                        const v = e.target.value;
                        setForm((prev) => ({
                          ...prev,
                          oldPrice: v === "" ? undefined : Number(v),
                        }));
                      }}
                      style={inputStyle}
                      min={0}
                    />
                  </div>
                </div>

                {/* Category + Stock row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={labelStyle}>Category *</label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleFormChange}
                      style={inputStyle}
                      required
                    >
                      {CATEGORY_OPTIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Stock *</label>
                    <input
                      type="number"
                      name="stock"
                      value={form.stock}
                      onChange={handleFormChange}
                      style={inputStyle}
                      min={0}
                      required
                    />
                  </div>
                </div>

                {/* SKU */}
                <div>
                  <label style={labelStyle}>SKU *</label>
                  <input
                    name="sku"
                    value={form.sku}
                    onChange={handleFormChange}
                    style={inputStyle}
                    required
                  />
                </div>

                {/* Image + ImageHover */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={labelStyle}>Image URL</label>
                    <input
                      name="image"
                      value={form.image}
                      onChange={handleFormChange}
                      style={inputStyle}
                      placeholder="/assets/images/product-x.webp"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Image Hover URL</label>
                    <input
                      name="imageHover"
                      value={form.imageHover}
                      onChange={handleFormChange}
                      style={inputStyle}
                      placeholder="/assets/images/product-x-hover.webp"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label style={labelStyle}>Description</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleFormChange}
                    style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
                    rows={3}
                  />
                </div>

                {/* Tags */}
                <div>
                  <label style={labelStyle}>
                    Tags (comma-separated)
                  </label>
                  <input
                    name="tags"
                    value={form.tags.join(", ")}
                    onChange={(e) => {
                      const arr = e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean);
                      setForm((prev) => ({ ...prev, tags: arr }));
                    }}
                    style={inputStyle}
                    placeholder="kitchen, modern, ceramic"
                  />
                </div>

                {/* Badges */}
                <div>
                  <label style={labelStyle}>Badges</label>
                  <div style={{ display: "flex", gap: 16 }}>
                    {(["hot", "onsale", "outofstock"] as const).map((badge) => (
                      <label key={badge} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <input
                          type="checkbox"
                          checked={form.badges?.includes(badge) ?? false}
                          onChange={(e) => {
                            const current = form.badges ?? [];
                            setForm((prev) => ({
                              ...prev,
                              badges: e.target.checked
                                ? [...current, badge]
                                : current.filter((b) => b !== badge),
                            }));
                          }}
                        />
                        {badge}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
                <button
                  type="submit"
                  className="btn btn-dark btn-outline-hover-dark"
                  disabled={submitting}
                >
                  {submitting
                    ? "Saving..."
                    : modalMode === "add"
                      ? "Create Product"
                      : "Save Changes"}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
          }}
          onClick={() => setDeleteId(null)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 8,
              padding: 32,
              maxWidth: 400,
              width: "90%",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h4 style={{ marginBottom: 8 }}>Confirm Delete</h4>
            <p style={{ color: "#666", marginBottom: 24 }}>
              Are you sure you want to delete product #{deleteId}? This action
              cannot be undone.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button
                className="btn btn-sm"
                style={{
                  background: "#e74c3c",
                  color: "#fff",
                  border: "none",
                  padding: "8px 20px",
                }}
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="btn btn-sm btn-outline-dark"
                onClick={() => setDeleteId(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
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

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 4,
  fontWeight: 600,
  fontSize: 13,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  border: "1px solid #ddd",
  borderRadius: 4,
  fontSize: 14,
  boxSizing: "border-box",
};

export default AdminProducts;
