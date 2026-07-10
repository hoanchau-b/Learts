import { Link } from "react-router-dom";

const PagesHeader = () => {
  return (
    <>
      {/* Header Section Start */}
      <div className="header-section section section-fluid bg-white d-none d-xl-block">
        <div className="container">
          <div className="row align-items-center">
            {/* Header Logo Start */}
            <div className="col-auto">
              <div className="header-logo">
                <Link to="/"><img src="/assets/images/logo-2.webp" alt="Learts Logo" /></Link>
              </div>
            </div>
            {/* Header Logo End */}
            {/* Search Start */}
            <div className="col-auto me-auto">
              <nav className="site-main-menu site-main-menu-left menu-height-100 justify-content-center" style={{ position: 'relative' }}>
                <ul>
                  <li className="has-children"><Link to="/"><span className="menu-text">Home</span></Link></li>
                  <li className="has-children"><Link to="/shop"><span className="menu-text">Shop</span></Link></li>
                </ul>
              </nav>
            </div>
            {/* Search End */}
            {/* Search Start */}
            <div className="col-auto d-none d-xl-block">
              <div className="header2-search">
                <form action="#">
                  <input type="text" placeholder="Search..." />
                  <button className="btn"><i className="fas fa-search" /></button>
                </form>
              </div>
            </div>
            {/* Search End */}
            {/* Header Tools Start */}
            <div className="col-auto">
              <div className="header-tools justify-content-end">
                <div className="header-login">
                  <Link to="/account"><i className="far fa-user" /></Link>
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
      </div>
      {/* Header Section End */}
    </>
  );
};

export default PagesHeader;
