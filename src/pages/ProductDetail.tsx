import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../services/productApi";
import type { Product } from "../data/products";
import { useCartStore } from "../store/cartStore";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  const addItem = useCartStore((s) => s.addItem);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("description");
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    setQuantity(1);
    setActiveImage(0);

    const id = Number(productId);
    if (Number.isNaN(id)) {
      setLoading(false);
      setNotFound(true);
      return;
    }

    fetchProductById(id).then((data) => {
      if (!data) {
        setNotFound(true);
      } else {
        setProduct(data);
        if (data.colors?.length) setSelectedColor(data.colors[0]);
        if (data.sizes?.length) setSelectedSize(data.sizes[0]);
      }
      setLoading(false);
    });
  }, [productId]);

  const increment = () => {
    if (product) setQuantity((prev) => Math.min(prev + 1, product.stock));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleQuantityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const val = raw === "" ? 1 : parseInt(raw, 10);
    if (product) {
      setQuantity(Math.max(1, Math.min(val, product.stock)));
    } else {
      setQuantity(Math.max(1, val));
    }
  };

  const discountPercent = product?.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  const isOutOfStock = product ? product.stock === 0 : true;

  const images: string[] = [];
  if (product) {
    images.push(product.image);
    if (product.imageHover) images.push(product.imageHover);
  }

  // Loading state
  if (loading) {
    return (
      <div className="section section-padding">
        <div className="container text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-body-light">Loading product details...</p>
        </div>
      </div>
    );
  }

  // Not found
  if (notFound || !product) {
    return (
      <div className="section section-padding">
        <div className="container text-center">
          <h2 className="mb-3">Product Not Found</h2>
          <p className="text-body-light mb-4">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/shop" className="btn btn-dark btn-outline-hover-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Page Title/Header Start */}
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
                <h1 className="title">Shop</h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/shop">Products</Link>
                  </li>
                  <li className="breadcrumb-item active">{product.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title/Header End */}

      {/* Product Detail Section Start */}
      <div className="section section-padding border-bottom">
        <div className="container">
          <div className="row learts-mb-n40">
            {/* Product Images Start */}
            <div className="col-lg-6 col-12 learts-mb-40">
              <div className="product-images">
                <div className="product-gallery-slider">
                  {images.map((img, i) => (
                    <div
                      key={img}
                      className="product-zoom"
                      data-image={img}
                      style={{ display: activeImage === i ? "block" : "none" }}
                    >
                      <img src={img} alt={product.title} />
                    </div>
                  ))}
                </div>
                {images.length > 1 && (
                  <div className="product-thumb-slider">
                    {images.map((img, i) => (
                      <button
                        key={img}
                        className={`item ${activeImage === i ? "active" : ""}`}
                        onClick={() => setActiveImage(i)}
                        style={{
                          border: activeImage === i ? "2px solid #000" : "2px solid transparent",
                          cursor: "pointer",
                          opacity: activeImage === i ? 1 : 0.6,
                          transition: "all 0.2s",
                          background: "none",
                          padding: 0,
                        }}
                      >
                        <img src={img} alt="" width={120} height={120} style={{ objectFit: "cover" }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Product Images End */}

            {/* Product Summary Start */}
            <div className="col-lg-6 col-12 learts-mb-40">
              <div className="product-summery">
                {/* Ratings */}
                <div className="product-ratings">
                  <span className="star-rating">
                    <span className="rating-active" style={{ width: "80%" }}>
                      ratings
                    </span>
                  </span>
                  <a href="#reviews" className="review-link">
                    (<span className="count">3</span> customer reviews)
                  </a>
                </div>

                <h3 className="product-title">{product.title}</h3>

                <div className="product-price">
                  {product.oldPrice ? (
                    <>
                      <del className="me-2 text-muted">
                        £{product.oldPrice.toFixed(2)}
                      </del>
                      <span className="text-danger">
                        £{product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span>£{product.price.toFixed(2)}</span>
                  )}
                </div>

                <div className="product-description">
                  <p>{product.description}</p>
                </div>

                <div className="product-variations">
                  <table>
                    <tbody>
                      {/* Colors */}
                      {product.colors && product.colors.length > 0 && (
                        <tr>
                          <td className="label">
                            <span>Color</span>
                          </td>
                          <td className="value">
                            <div className="product-colors">
                              {product.colors.map((color) => (
                                <a
                                  key={color}
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedColor(color);
                                  }}
                                  data-bg-color={color}
                                  style={{
                                    backgroundColor: color,
                                    border:
                                      selectedColor === color
                                        ? "3px solid #000"
                                        : "1px solid #ddd",
                                    display: "inline-block",
                                    width: 30,
                                    height: 30,
                                    borderRadius: "50%",
                                    marginRight: 8,
                                  }}
                                />
                              ))}
                            </div>
                          </td>
                        </tr>
                      )}

                      {/* Sizes */}
                      {product.sizes && product.sizes.length > 0 && (
                        <tr>
                          <td className="label">
                            <span>Size</span>
                          </td>
                          <td className="value">
                            <div className="product-sizes">
                              {product.sizes.map((size) => (
                                <a
                                  key={size}
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedSize(size);
                                  }}
                                  style={{
                                    display: "inline-block",
                                    padding: "4px 12px",
                                    marginRight: 8,
                                    border:
                                      selectedSize === size
                                        ? "2px solid #000"
                                        : "1px solid #ddd",
                                    borderRadius: 4,
                                    textDecoration: "none",
                                    color: selectedSize === size ? "#000" : "#666",
                                    fontWeight:
                                      selectedSize === size ? 700 : 400,
                                  }}
                                >
                                  {size}
                                </a>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )}

                      {/* Quantity */}
                      <tr>
                        <td className="label">
                          <span>Quantity</span>
                        </td>
                        <td className="value">
                          <div className="product-quantity" style={{ display: "flex", alignItems: "center", gap: 0 }}>
                            <span
                              className="qty-btn minus"
                              onClick={decrement}
                              style={{
                                cursor: quantity <= 1 ? "not-allowed" : "pointer",
                                opacity: quantity <= 1 ? 0.4 : 1,
                                padding: "8px 14px",
                                border: "1px solid #ddd",
                                userSelect: "none",
                              }}
                            >
                              <i className="ti-minus" />
                            </span>
                            <input
                              type="text"
                              className="input-qty"
                              value={quantity}
                              onChange={handleQuantityInput}
                              style={{
                                width: 60,
                                textAlign: "center",
                                border: "1px solid #ddd",
                                borderLeft: "none",
                                borderRight: "none",
                                padding: "8px 0",
                              }}
                            />
                            <span
                              className="qty-btn plus"
                              onClick={increment}
                              style={{
                                cursor:
                                  quantity >= product.stock
                                    ? "not-allowed"
                                    : "pointer",
                                opacity:
                                  quantity >= product.stock ? 0.4 : 1,
                                padding: "8px 14px",
                                border: "1px solid #ddd",
                                userSelect: "none",
                              }}
                            >
                              <i className="ti-plus" />
                            </span>
                          </div>
                          <small className="text-body-light mt-1 d-block">
                            {isOutOfStock
                              ? "Out of stock"
                              : `${product.stock} items available`}
                          </small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Discount badge */}
                {discountPercent > 0 && (
                  <div className="mb-3">
                    <span
                      style={{
                        background: "#e74c3c",
                        color: "#fff",
                        padding: "4px 10px",
                        borderRadius: 4,
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Save {discountPercent}%
                    </span>
                  </div>
                )}

                {/* Badges */}
                {product.badges && product.badges.length > 0 && (
                  <div className="mb-3">
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        style={{
                          display: "inline-block",
                          padding: "2px 8px",
                          marginRight: 6,
                          fontSize: 12,
                          textTransform: "uppercase",
                          fontWeight: 700,
                          borderRadius: 3,
                          background:
                            badge === "hot"
                              ? "#e74c3c"
                              : badge === "onsale"
                                ? "#27ae60"
                                : "#95a5a6",
                          color: "#fff",
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="product-buttons">
                  <a
                    href="#"
                    className="btn btn-icon btn-outline-body btn-hover-dark hintT-top"
                    data-hint="Add to Wishlist"
                  >
                    <i className="far fa-heart" />
                  </a>
                  <a
                    href="#"
                    className={`btn btn-dark btn-outline-hover-dark ${isOutOfStock ? "disabled" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (!isOutOfStock && product) {
                        addItem(product, quantity);
                        toast.success(
                          `Added ${quantity}x ${product.title} to cart!`,
                        );
                      }
                    }}
                    style={{
                      pointerEvents: isOutOfStock ? "none" : "auto",
                      opacity: isOutOfStock ? 0.5 : 1,
                    }}
                  >
                    <i className="fas fa-shopping-cart" />{" "}
                    {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-outline-body btn-hover-dark hintT-top"
                    data-hint="Compare"
                  >
                    <i className="fas fa-random" />
                  </a>
                </div>

                {/* Meta info */}
                <div className="product-meta mt-4">
                  <table>
                    <tbody>
                      <tr>
                        <td className="label">
                          <span>SKU</span>
                        </td>
                        <td className="value">{product.sku}</td>
                      </tr>
                      <tr>
                        <td className="label">
                          <span>Category</span>
                        </td>
                        <td className="value">
                          <ul className="product-category">
                            <li>
                              <Link to="/shop">{product.category}</Link>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="label">
                          <span>Tags</span>
                        </td>
                        <td className="value">
                          <ul className="product-tags">
                            {product.tags.map((tag) => (
                              <li key={tag}>
                                <a href="#">{tag}</a>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="label">
                          <span>Share on</span>
                        </td>
                        <td className="va">
                          <div className="product-share">
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fab fa-pinterest" />
                            </a>
                            <a href="#">
                              <i className="far fa-envelope" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Product Summary End */}
          </div>
        </div>
      </div>
      {/* Product Detail Section End */}

      {/* Product Tabs Section Start */}
      <div className="section section-padding border-bottom">
        <div className="container">
          <ul className="nav product-info-tab-list" role="tablist">
            <li>
              <a
                className={activeTab === "description" ? "active" : ""}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("description");
                }}
              >
                Description
              </a>
            </li>
            <li>
              <a
                className={activeTab === "additional" ? "active" : ""}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("additional");
                }}
              >
                Additional information
              </a>
            </li>
          </ul>
          <div className="tab-content product-infor-tab-content mt-4">
            {activeTab === "description" && (
              <div className="row">
                <div className="col-lg-10 col-12 mx-auto">
                  <p>{product.description}</p>
                </div>
              </div>
            )}
            {activeTab === "additional" && (
              <div className="row">
                <div className="col-lg-8 col-md-10 col-12 mx-auto">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        {product.sizes && product.sizes.length > 0 && (
                          <tr>
                            <td>Size</td>
                            <td>{product.sizes.join(", ")}</td>
                          </tr>
                        )}
                        {product.colors && product.colors.length > 0 && (
                          <tr>
                            <td>Color</td>
                            <td>
                              {product.colors.map((c) => c).join(", ")}
                            </td>
                          </tr>
                        )}
                        <tr>
                          <td>Stock</td>
                          <td>
                            {isOutOfStock
                              ? "Out of stock"
                              : `${product.stock} units`}
                          </td>
                        </tr>
                        <tr>
                          <td>SKU</td>
                          <td>{product.sku}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Product Tabs Section End */}

      {/* Back to Shop */}
      <div className="section section-padding">
        <div className="container text-center">
          <Link to="/shop" className="btn btn-outline-dark">
            ← Back to Shop
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
