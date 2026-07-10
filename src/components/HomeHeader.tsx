import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <>
      {/* Topbar Section Start */}
      <div className="topbar-section section bg-primary2">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-auto col-12">
              <p className="text-white text-center text-md-left my-2">Free shipping for orders over $59 !</p>
            </div>
            <div className="col-auto d-none d-md-block">
              <div className="topbar-menu">
                <ul>
                  <li><a href="#" className="text-white"><i className="fa fa-map-marker-alt" />Store Location</a></li>
                  <li><a href="#" className="text-white"><i className="fa fa-truck" />Order Status</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar Section End */}

      {/* Header Section Start */}
      <div className="header-section section bg-white d-none d-xl-block">
        <div className="container">
          <div className="row row-cols-lg-3 align-items-center">
            {/* Header Language & Currency Start */}
            <div className="col">
              <ul className="header-lan-curr">
                <li><a href="#">English</a>
                  <ul className="curr-lan-sub-menu">
                    <li><a href="#">Français</a></li>
                    <li><a href="#">Deutsch</a></li>
                  </ul>
                </li>
                <li><a href="#">USD</a>
                  <ul className="curr-lan-sub-menu">
                    <li><a href="#">EUR</a></li>
                    <li><a href="#">GBP</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Header Language & Currency End */}

            {/* Header Logo Start */}
            <div className="col">
              <div className="header-logo justify-content-center">
                <Link to="/">
                  <img src="/assets/images/logo.webp" alt="Learts Logo" />
                </Link>
              </div>
            </div>
            {/* Header Logo End */}

            {/* Header Tools Start */}
            <div className="col">
              <div className="header-tools justify-content-end">
                <div className="header-login">
                  <Link to="/account"><i className="far fa-user" /></Link>
                </div>
                <div className="header-search">
                  <a href="#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search" /></a>
                </div>
                <div className="header-wishlist">
                  <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart" /></a>
                </div>
                <div className="header-cart">
                  <Link to="/cart"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></Link>
                </div>
              </div>
            </div>
            {/* Header Tools End */}
          </div>
        </div>

        {/* Site Menu Section Start */}
        <div className="site-menu-section section">
          <div className="container">
            <nav className="site-main-menu justify-content-center">
              <ul>
                <li className="has-children">
                  <Link to="/">
                    <span className="menu-text">Home</span>
                  </Link>
                </li>
                <li className="has-children">
                  <Link to="/shop">
                    <span className="menu-text">Shop</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Site Menu Section End */}
      </div>
      {/* Header Section End */}

      {/* Header Sticky Section Start */}
      <div className="sticky-header header-menu-center section bg-white d-none d-xl-block">
        <div className="container">
          <div className="row align-items-center">
            {/* Header Logo Start */}
            <div className="col">
              <div className="header-logo">
                <Link to="/">
                  <img src="/assets/images/logo-2.webp" alt="Learts Logo" />
                </Link>
              </div>
            </div>
            {/* Header Logo End */}

            {/* Navigation Start */}
            <div className="col d-none d-xl-block">
              <nav className="site-main-menu justify-content-center">
                <ul>
                  <li className="has-children">
                    <Link to="/">
                      <span className="menu-text">Home</span>
                    </Link>
                  </li>
                  <li className="has-children">
                    <Link to="/shop">
                      <span className="menu-text">Shop</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Navigation End */}

            {/* Header Tools Start */}
            <div className="col-auto">
              <div className="header-tools justify-content-end">
                <div className="header-login">
                  <Link to="/account"><i className="far fa-user" /></Link>
                </div>
                <div className="header-search d-none d-sm-block">
                  <a href="#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search" /></a>
                </div>
                <div className="header-wishlist">
                  <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart" /></a>
                </div>
                <div className="header-cart">
                  <Link to="/cart"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></Link>
                </div>
                <div className="mobile-menu-toggle d-xl-none">
                  <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                    <svg viewBox="0 0 800 600">
                      <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top" />
                      <path d="M300,320 L540,320" className="middle" />
                      <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Header Tools End */}
          </div>
        </div>
      </div>
      {/* Header Sticky Section End */}

      {/* Mobile Header Section Start */}
      <div className="mobile-header bg-white section d-xl-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="header-logo">
                <Link to="/">
                  <img src="/assets/images/logo-2.webp" alt="Learts Logo" />
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-tools justify-content-end">
                <div className="header-login d-none d-sm-block">
                  <Link to="/account"><i className="far fa-user" /></Link>
                </div>
                <div className="header-search d-none d-sm-block">
                  <a href="#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search" /></a>
                </div>
                <div className="header-wishlist d-none d-sm-block">
                  <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart" /></a>
                </div>
                <div className="header-cart">
                  <Link to="/cart"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></Link>
                </div>
                <div className="mobile-menu-toggle">
                  <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                    <svg viewBox="0 0 800 600">
                      <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top" />
                      <path d="M300,320 L540,320" className="middle" />
                      <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Header Section End */}

      {/* Sticky Mobile Header */}
      <div className="mobile-header sticky-header bg-white section d-xl-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="header-logo">
                <Link to="/">
                  <img src="/assets/images/logo-2.webp" alt="Learts Logo" />
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-tools justify-content-end">
                <div className="header-login d-none d-sm-block">
                  <Link to="/account"><i className="far fa-user" /></Link>
                </div>
                <div className="header-search d-none d-sm-block">
                  <a href="#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search" /></a>
                </div>
                <div className="header-wishlist d-none d-sm-block">
                  <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart" /></a>
                </div>
                <div className="header-cart">
                  <Link to="/cart"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></Link>
                </div>
                <div className="mobile-menu-toggle">
                  <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                    <svg viewBox="0 0 800 600">
                      <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top" />
                      <path d="M300,320 L540,320" className="middle" />
                      <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sticky Mobile Header End */}
    </>
  );
};

export default HomeHeader;
