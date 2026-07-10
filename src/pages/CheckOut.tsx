import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCartStore } from "../store/cartStore";
import { placeOrder } from "../services/orderApi";

const checkoutSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  phone: z
    .string()
    .regex(
      /^(0|\+84)[1-9][0-9]{8,9}$/,
      "Phone must be a valid Vietnamese number (e.g. 0912345678 or +84912345678)",
    ),
  email: z.string().email("Please enter a valid email address"),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const CheckOut = () => {
  const navigate = useNavigate();
  const items = useCartStore((s) => s.items);
  const getSubtotal = useCartStore((s) => s.getSubtotal);
  const clearCart = useCartStore((s) => s.clearCart);

  const subtotal = getSubtotal();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      await placeOrder({
        customer: {
          name: data.name,
          phone: data.phone,
          email: data.email,
        },
        items: items.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
      });

      toast.success(
        `Order placed successfully! A confirmation email has been sent to ${data.email}.`,
        { duration: 4000 },
      );

      clearCart();
      navigate("/shop");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(message);
    }
  };

  // Empty cart guard
  if (items.length === 0) {
    return (
      <div className="section section-padding">
        <div className="container text-center">
          <h3 className="mb-3">Your cart is empty</h3>
          <p className="text-body-light mb-4">
            Add some products before checking out.
          </p>
          <Link to="/shop" className="btn btn-dark btn-outline-hover-dark">
            Go to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Checkout Section Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="checkout-coupon">
            <p className="coupon-toggle">
              Have a coupon?{" "}
              <a
                href="#checkout-coupon-form"
                data-bs-toggle="collapse"
              >
                Click here to enter your code
              </a>
            </p>
            <div id="checkout-coupon-form" className="collapse">
              <div className="coupon-form">
                <p>If you have a coupon code, please apply it below.</p>
                <form className="learts-mb-n10">
                  <input
                    className="learts-mb-10"
                    type="text"
                    placeholder="Coupon code"
                  />
                  <button
                    className="btn btn-dark btn-outline-hover-dark learts-mb-10"
                    type="button"
                  >
                    apply coupon
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="section-title2">
            <h2 className="title">Billing details</h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="checkout-form learts-mb-50"
            noValidate
          >
            <div className="row">
              {/* Name */}
              <div className="col-md-6 col-12 learts-mb-20">
                <label htmlFor="name">
                  Full Name <abbr className="required">*</abbr>
                </label>
                <input type="text" id="name" {...register("name")} />
                {errors.name && (
                  <small className="text-danger">{errors.name.message}</small>
                )}
              </div>

              {/* Phone */}
              <div className="col-md-6 col-12 learts-mb-20">
                <label htmlFor="phone">
                  Phone <abbr className="required">*</abbr>
                </label>
                <input type="text" id="phone" {...register("phone")} />
                {errors.phone && (
                  <small className="text-danger">{errors.phone.message}</small>
                )}
              </div>

              {/* Email */}
              <div className="col-12 learts-mb-20">
                <label htmlFor="email">
                  Email address <abbr className="required">*</abbr>
                </label>
                <input type="text" id="email" {...register("email")} />
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </div>

              {/* Order Notes */}
              <div className="col-12 learts-mb-20">
                <label htmlFor="bdOrderNote">
                  Order Notes (optional)
                </label>
                <textarea
                  id="bdOrderNote"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  rows={3}
                />
              </div>
            </div>
          </form>

          <div className="section-title2 text-center">
            <h2 className="title">Your order</h2>
          </div>

          <div className="row learts-mb-n30">
            <div className="col-lg-6 order-lg-2 learts-mb-30">
              <div className="order-review">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="name">Product</th>
                      <th className="total">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.product.id}>
                        <td className="name">
                          {item.product.title}&nbsp;
                          <strong className="quantity">
                            ×&nbsp;{item.quantity}
                          </strong>
                        </td>
                        <td className="total">
                          <span>
                            £{(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="subtotal">
                      <th>Subtotal</th>
                      <td>
                        <span>£{subtotal.toFixed(2)}</span>
                      </td>
                    </tr>
                    <tr className="total">
                      <th>Total</th>
                      <td>
                        <strong>
                          <span>£{subtotal.toFixed(2)}</span>
                        </strong>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div className="col-lg-6 order-lg-1 learts-mb-30">
              <div className="order-payment">
                <div className="payment-method">
                  <div className="accordion" id="paymentMethod">
                    <div className="card active">
                      <div className="card-header">
                        <button
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#checkPayments"
                        >
                          Check payments
                        </button>
                      </div>
                      <div
                        id="checkPayments"
                        className="collapse show"
                        data-bs-parent="#paymentMethod"
                      >
                        <div className="card-body">
                          <p>
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <button
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#cashkPayments"
                        >
                          Cash on delivery
                        </button>
                      </div>
                      <div
                        id="cashkPayments"
                        className="collapse"
                        data-bs-parent="#paymentMethod"
                      >
                        <div className="card-body">
                          <p>Pay with cash upon delivery.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <button
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payPalPayments"
                        >
                          PayPal{" "}
                          <img
                            src="/assets/images/pay-2.webp"
                            alt="PayPal"
                          />
                        </button>
                      </div>
                      <div
                        id="payPalPayments"
                        className="collapse"
                        data-bs-parent="#paymentMethod"
                      >
                        <div className="card-body">
                          <p>
                            Pay via PayPal; you can pay with your credit card
                            if you don't have a PayPal account.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="payment-note">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                  <button
                    className="btn btn-dark btn-outline-hover-dark"
                    onClick={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        />
                        Processing...
                      </>
                    ) : (
                      "Place Order"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Checkout Section End */}
    </>
  );
};

export default CheckOut;
