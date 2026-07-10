import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const getSubtotal = useCartStore((s) => s.getSubtotal);
  const clearCart = useCartStore((s) => s.clearCart);

  const subtotal = getSubtotal();

  if (items.length === 0) {
    return (
      <>
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
                  <h1 className="title">Cart</h1>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-padding">
          <div className="container text-center">
            <h3 className="mb-3">Your cart is empty</h3>
            <p className="text-body-light mb-4">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/shop" className="btn btn-dark btn-outline-hover-dark">
              Start Shopping
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="offcanvas-overlay" />
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
                <h1 className="title">Cart</h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title/Header End */}

      {/* Shopping Cart Section Start */}
      <div className="section section-padding">
        <div className="container">
          <table className="cart-wishlist-table table">
            <thead>
              <tr>
                <th className="name" colSpan={2}>
                  Product
                </th>
                <th className="price">Price</th>
                <th className="quantity">Quantity</th>
                <th className="subtotal">Total</th>
                <th className="remove">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.product.id}>
                  <td className="thumbnail">
                    <Link to={`/product/${item.product.id}`}>
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                      />
                    </Link>
                  </td>
                  <td className="name">
                    <Link to={`/product/${item.product.id}`}>
                      {item.product.title}
                    </Link>
                  </td>
                  <td className="price">
                    <span>£{item.product.price.toFixed(2)}</span>
                  </td>
                  <td className="quantity">
                    <div className="product-quantity">
                      <span
                        className="qty-btn minus"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        style={{
                          cursor:
                            item.quantity <= 1 ? "not-allowed" : "pointer",
                          opacity: item.quantity <= 1 ? 0.4 : 1,
                        }}
                      >
                        <i className="ti-minus" />
                      </span>
                      <input
                        type="text"
                        className="input-qty"
                        value={item.quantity}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/\D/g, "");
                          const val = raw === "" ? 1 : parseInt(raw, 10);
                          updateQuantity(item.product.id, val);
                        }}
                      />
                      <span
                        className="qty-btn plus"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        style={{
                          cursor:
                            item.quantity >= item.product.stock
                              ? "not-allowed"
                              : "pointer",
                          opacity:
                            item.quantity >= item.product.stock ? 0.4 : 1,
                        }}
                      >
                        <i className="ti-plus" />
                      </span>
                    </div>
                  </td>
                  <td className="subtotal">
                    <span>
                      £{(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </td>
                  <td className="remove">
                    <button
                      className="btn"
                      onClick={() => removeItem(item.product.id)}
                      style={{
                        border: "none",
                        background: "none",
                        fontSize: 20,
                        cursor: "pointer",
                        color: "#999",
                      }}
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="row justify-content-between mb-n3">
            <div className="col-auto mb-3">
              <div className="cart-coupon">
                <input type="text" placeholder="Enter your coupon code" />
                <button className="btn">
                  <i className="fas fa-gift" />
                </button>
              </div>
            </div>
            <div className="col-auto">
              <Link
                className="btn btn-light btn-hover-dark mr-3 mb-3"
                to="/shop"
              >
                Continue Shopping
              </Link>
              <button
                className="btn btn-outline-dark mb-3"
                onClick={clearCart}
                style={{ marginLeft: 8 }}
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className="cart-totals mt-5">
            <h2 className="title">Cart totals</h2>
            <table>
              <tbody>
                <tr className="subtotal">
                  <th>Subtotal</th>
                  <td>
                    <span className="amount">£{subtotal.toFixed(2)}</span>
                  </td>
                </tr>
                <tr className="total">
                  <th>Total</th>
                  <td>
                    <strong>
                      <span className="amount">£{subtotal.toFixed(2)}</span>
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <Link
              className="btn btn-dark btn-outline-hover-dark"
              to="/checkout"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
      {/* Shopping Cart Section End */}
    </div>
  );
};

export default Cart;
