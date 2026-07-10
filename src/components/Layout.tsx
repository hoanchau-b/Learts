import { useLocation, Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import PagesHeader from "./PagesHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* OffCanvas Search Start */}
      <div id="offcanvas-search" className="offcanvas offcanvas-search">
        <div className="inner">
          <div className="offcanvas-search-form">
            <button className="offcanvas-close">×</button>
            <form action="#">
              <div className="row mb-n3">
                <div className="col-lg-8 col-12 mb-3"><input type="text" placeholder="Search Products..." /></div>
                <div className="col-lg-4 col-12 mb-3">
                  <select className="search-select select2-basic">
                    <option value={0}>All Categories</option>
                    <option value="kids-babies">Kids & Babies</option>
                    <option value="home-decor">Home Decor</option>
                    <option value="gift-ideas">Gift ideas</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="toys">Toys</option>
                    <option value="kniting-sewing">Kniting & Sewing</option>
                    <option value="pots">Pots</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <p className="search-description text-body-light mt-2">
            <span># Type at least 1 character to search</span>
            <span># Hit enter to search or ESC to close</span>
          </p>
        </div>
      </div>
      {/* OffCanvas Search End */}

      {/* OffCanvas Wishlist Start */}
      <div id="offcanvas-wishlist" className="offcanvas offcanvas-wishlist">
        <div className="inner">
          <div className="head">
            <span className="title">Wishlist</span>
            <button className="offcanvas-close">×</button>
          </div>
          <div className="body customScroll">
            <ul className="minicart-product-list">
              <li>
                <a href="#" className="image"><img src="/assets/images/cart-product-1.webp" alt="Cart product" /></a>
                <div className="content">
                  <a href="#" className="title">Walnut Cutting Board</a>
                  <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                  <a href="#" className="remove">×</a>
                </div>
              </li>
              <li>
                <a href="#" className="image"><img src="/assets/images/cart-product-2.webp" alt="Cart product" /></a>
                <div className="content">
                  <a href="#" className="title">Lucky Wooden Elephant</a>
                  <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
                  <a href="#" className="remove">×</a>
                </div>
              </li>
              <li>
                <a href="#" className="image"><img src="/assets/images/cart-product-3.webp" alt="Cart product" /></a>
                <div className="content">
                  <a href="#" className="title">Fish Cut Out Set</a>
                  <span className="quantity-price">1 x <span className="amount">$9.00</span></span>
                  <a href="#" className="remove">×</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="foot">
            <div className="buttons">
              <a href="#" className="btn btn-dark btn-hover-primary">view wishlist</a>
            </div>
          </div>
        </div>
      </div>
      {/* OffCanvas Wishlist End */}

      {/* OffCanvas Cart Start */}
      <div id="offcanvas-cart" className="offcanvas offcanvas-cart">
        <div className="inner">
          <div className="head">
            <span className="title">Cart</span>
            <button className="offcanvas-close">×</button>
          </div>
          <div className="body customScroll">
            <ul className="minicart-product-list">
              <li>
                <a href="#" className="image"><img src="/assets/images/cart-product-1.webp" alt="Cart product" /></a>
                <div className="content">
                  <a href="#" className="title">Walnut Cutting Board</a>
                  <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                  <a href="#" className="remove">×</a>
                </div>
              </li>
              <li>
                <a href="#" className="image"><img src="/assets/images/cart-product-2.webp" alt="Cart product" /></a>
                <div className="content">
                  <a href="#" className="title">Lucky Wooden Elephant</a>
                  <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
                  <a href="#" className="remove">×</a>
                </div>
              </li>
              <li>
                <a href="#" className="image"><img src="/assets/images/cart-product-3.webp" alt="Cart product" /></a>
                <div className="content">
                  <a href="#" className="title">Fish Cut Out Set</a>
                  <span className="quantity-price">1 x <span className="amount">$9.00</span></span>
                  <a href="#" className="remove">×</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="foot">
            <div className="sub-total">
              <strong>Subtotal :</strong>
              <span className="amount">$144.00</span>
            </div>
            <div className="buttons">
              <Link to="/cart" className="btn btn-dark btn-hover-primary">view cart</Link>
              <Link to="/checkout" className="btn btn-outline-dark">checkout</Link>
            </div>
            <p className="minicart-message">Free Shipping on All Orders Over $100!</p>
          </div>
        </div>
      </div>
      {/* OffCanvas Cart End */}

      {/* OffCanvas Mobile Menu Start */}
      <div id="offcanvas-mobile-menu" className="offcanvas offcanvas-mobile-menu">
        <div className="inner customScroll">
          <div className="offcanvas-menu-search-form">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button><i className="fas fa-search" /></button>
            </form>
          </div>
          <div className="offcanvas-menu">
            <ul>
              <li>
                <span className="menu-expand" />
                <Link to="/">
                  <span className="menu-text">Home</span>
                </Link>
              </li>
              <li>
                <span className="menu-expand" />
                <Link to="/shop">
                  <span className="menu-text">Shop</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="offcanvas-buttons">
            <div className="header-tools">
              <div className="header-login">
                <Link to="/account"><i className="far fa-user" /></Link>
              </div>
              <div className="header-wishlist">
                <a href="#"><span>3</span><i className="far fa-heart" /></a>
              </div>
              <div className="header-cart">
                <Link to="/cart"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></Link>
              </div>
            </div>
          </div>
          <div className="offcanvas-social">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-youtube" /></a>
          </div>
        </div>
      </div>
      {/* OffCanvas Mobile Menu End */}

      <div className="offcanvas-overlay" />

      {/* Header */}
      {isHome ? <HomeHeader /> : <PagesHeader />}

      {/* Page Content */}
      {children}

      {/* Footer */}
      {isHome ? <HomeFooter /> : <ShopFooter />}
    </>
  );
};

/* ---- Home Footer ---- */
const HomeFooter = () => (
  <div className="footer1-section section section-padding">
    <div className="container">
      <div className="row text-center row-cols-1">
        <div className="footer1-logo col text-center">
          <img src="/assets/images/logo.webp" alt="" />
        </div>
        <div className="footer1-menu col">
          <ul className="widget-menu justify-content-center">
            <li><a href="#">About us</a></li>
            <li><a href="#">Store location</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Policy</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer1-subscribe d-flex flex-column col">
          <form id="mc-form" className="mc-form widget-subscibe" noValidate>
            <input id="mc-email" autoComplete="off" type="email" placeholder="Enter your e-mail address" name="EMAIL" />
            <button id="mc-submit" className="btn btn-dark">subscribe</button>
          </form>
          <div className="mailchimp-alerts text-centre">
            <div className="mailchimp-submitting" />
            <div className="mailchimp-success text-success" />
            <div className="mailchimp-error text-danger" />
          </div>
        </div>
        <div className="footer1-social col">
          <ul className="widget-social justify-content-center">
            <li className="hintT-top" data-hint="Twitter"><a href="#"><i className="fab fa-twitter" /></a></li>
            <li className="hintT-top" data-hint="Facebook"><a href="#"><i className="fab fa-facebook-f" /></a></li>
            <li className="hintT-top" data-hint="Instagram"><a href="#"><i className="fab fa-instagram" /></a></li>
            <li className="hintT-top" data-hint="Youtube"><a href="#"><i className="fab fa-youtube" /></a></li>
          </ul>
        </div>
        <div className="footer1-copyright col">
          <p className="copyright">© 2023 learts. All Rights Reserved | <strong>(+00) 123 567990</strong> | <a href="mailto:contact@learts.com">contact@learts.com</a></p>
        </div>
      </div>
    </div>
  </div>
);

/* ---- Shop Footer ---- */
const ShopFooter = () => (
  <>
    <div className="footer2-section section section-padding">
      <div className="container">
        <div className="row learts-mb-n40">
          <div className="col-lg-6 learts-mb-40">
            <div className="widget-about">
              <img src="/assets/images/logo-2.webp" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque recusandae commodi mollitia facere iure nisi, laudantium quis quas perferendis a minus dolores.</p>
            </div>
          </div>
          <div className="col-lg-4 learts-mb-40">
            <div className="row">
              <div className="col">
                <ul className="widget-list">
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Store location</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Orders</a></li>
                </ul>
              </div>
              <div className="col">
                <ul className="widget-list">
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Support Policy</a></li>
                  <li><a href="#">Size Guide</a></li>
                  <li><a href="#">FAQs</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 learts-mb-40">
            <ul className="widget-list">
              <li><i className="fab fa-twitter" /> <a href="#">Twitter</a></li>
              <li><i className="fab fa-facebook-f" /> <a href="#">Facebook</a></li>
              <li><i className="fab fa-instagram" /> <a href="#">Instagram</a></li>
              <li><i className="fab fa-youtube" /> <a href="#">Youtube</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer2-copyright section">
      <div className="container">
        <p className="copyright text-center">© 2023 learts. All Rights Reserved</p>
      </div>
    </div>
  </>
);

export default Layout;
