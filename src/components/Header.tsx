const Header = ()=> {
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
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="text-white"><i className="fa fa-map-marker-alt" />Store Location</a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="text-white"><i className="fa fa-truck" />Order Status</a></li>
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
          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">English</a>
            <ul className="curr-lan-sub-menu">
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">Français</a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">Deutsch</a></li>
            </ul>
          </li>
          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">USD</a>
            <ul className="curr-lan-sub-menu">
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">EUR</a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">GBP</a></li>
            </ul>
          </li>
        </ul>
      </div>
      {/* Header Language & Currency End */}
      {/* Header Logo Start */}
      <div className="col">
        <div className="header-logo justify-content-center">
          <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html"><img src="/assets/images/logo.webp" alt="Learts Logo" /></a>
        </div>
      </div>
      {/* Header Logo End */}
      {/* Header Tools Start */}
      <div className="col">
        <div className="header-tools justify-content-end">
          <div className="header-login">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html"><i className="far fa-user" /></a>
          </div>
          <div className="header-search">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search" /></a>
          </div>
          <div className="header-wishlist">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart" /></a>
          </div>
          <div className="header-cart">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></a>
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
          <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Home</span></a>
            <ul className="sub-menu mega-menu">
              <li>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                <ul>
                  <li> <img className="mmh_img " src="/assets/images/home-01.webp" alt="home-01" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html"><span className="menu-text">Arts Propelled</span></a></li>
                  <li> <img className="mmh_img " src="/assets/images/home-02.webp" alt="home-02" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-2.html"><span className="menu-text">Decor Thriving</span></a></li>
                  <li> <img className="mmh_img " src="/assets/images/home-03.webp" alt="home-03" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-3.html"><span className="menu-text">Savvy Delight</span></a></li>
                  <li> <img className="mmh_img " src="/assets/images/home-04.webp" alt="home-04" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-4.html"><span className="menu-text">Perfect Escapes</span></a></li>
                </ul>
              </li>
              <li>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                <ul>
                  <li> <img className="mmh_img " src="/assets/images/home-05.webp" alt="home-05" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-5.html"><span className="menu-text">Kitchen Cozy</span></a></li>
                  <li> <img className="mmh_img " src="/assets/images/home-06.webp" alt="home-06" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-6.html"><span className="menu-text">Dreamy Designs</span></a></li>
                  <li> <img className="mmh_img " src="/assets/images/home-07.webp" alt="home-07" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-7.html"><span className="menu-text">Crispy Recipes</span></a></li>
                  <li> <img className="mmh_img " src="/assets/images/home-08.webp" alt="home-08" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-8.html"><span className="menu-text">Decoholic Chic</span></a></li>
                </ul>
              </li>
              <li>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                <ul>
                  <li> <img className="mmh_img " src="/assets/images/home-9.webp" alt="home-9" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-9.html"><span className="menu-text">Reblended Dish</span></a></li>
                  <li> <img className="mmh_img " src="/assets/images/home-10.webp" alt="home-10" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-10.html"><span className="menu-text">Craftin House</span></a></li>
                  <li> <img className="mmh_img " src="/assets/images/home-11.webp" alt="home-11" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-11.html"><span className="menu-text">Craftswork Biz</span></a></li>
                </ul>
              </li>
              <li>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="menu-banner"><img src="/assets/images/menu-banner-1.webp" alt="Home Menu Banner" /></a>
              </li>
            </ul>
          </li>
          <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Shop</span></a>
            <ul className="sub-menu mega-menu">
              <li>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">SHOP PAGES</span></a>
                <ul>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html"><span className="menu-text">Shop No Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-left-sidebar.html"><span className="menu-text">Shop Left Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-right-sidebar.html"><span className="menu-text">Shop Right Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-fullwidth-no-gutters.html"><span className="menu-text">Shop Fullwidth No Space</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-fullwidth.html"><span className="menu-text">Shop Fullwidth No Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-fullwidth-left-sidebar.html"><span className="menu-text">Shop Fullwidth Left Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-fullwidth-right-sidebar.html"><span className="menu-text">Shop Fullwidth Right Sidebar</span></a></li>
                </ul>
              </li>
              <li>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">PRODUCT PAGES</span></a>
                <ul>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html"><span className="menu-text">Basic</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-fullwidth.html"><span className="menu-text">Fullwidth</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-sticky.html"><span className="menu-text">Sticky Details</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-sidebar.html"><span className="menu-text">Width Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-extra-content.html"><span className="menu-text">Extra Content</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-image-variation.html"><span className="menu-text">Variations Images</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-group.html"><span className="menu-text">Bought Together</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-360.html"><span className="menu-text">Product 360</span></a></li>
                </ul>
              </li>
              <li>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">PRODUCT &amp; Other PAGES</span></a>
                <ul>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-background.html"><span className="menu-text">Product with Background</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shopping-cart.html"><span className="menu-text">Shopping Cart</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/checkout.html"><span className="menu-text">Checkout</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/order-tracking.html"><span className="menu-text">Order Tracking</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html"><span className="menu-text">Wishlist</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/login-register.html"><span className="menu-text">Customer Login</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html"><span className="menu-text">My Account</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/lost-password.html"><span className="menu-text">Lost Password</span></a></li>
                </ul>
              </li>
              <li className="align-self-center">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="menu-banner"><img src="/assets/images/menu-banner-2.webp" alt="Shop Menu Banner" /></a>
              </li>
            </ul>
          </li>
          <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Project</span></a>
            <ul className="sub-menu">
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-3-columns.html"><span className="menu-text">Portfolio 3 Columns</span></a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-4-columns.html"><span className="menu-text">Portfolio 4 Columns</span></a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-5-columns.html"><span className="menu-text">Portfolio 5 Columns</span></a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-details.html"><span className="menu-text">Portfolio Details</span></a></li>
            </ul>
          </li>
          <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Elements</span></a>
            <ul className="sub-menu mega-menu">
              <li>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">Column One</span></a>
                <ul>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-products.html"><span className="menu-text">Product Styles</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-products-tabs.html"><span className="menu-text">Product Tabs</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-product-sale-banner.html"><span className="menu-text">Product &amp; Sale Banner</span></a></li>
                </ul>
              </li>
              <li>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">Column Two</span></a>
                <ul>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-category-banner.html"><span className="menu-text">Category Banner</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-team.html"><span className="menu-text">Team Member</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-testimonials.html"><span className="menu-text">Testimonials</span></a></li>
                </ul>
              </li>
              <li>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">Column Three</span></a>
                <ul>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-instagram.html"><span className="menu-text">Instagram</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-map.html"><span className="menu-text">Google Map</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-icon-box.html"><span className="menu-text">Icon Box</span></a></li>
                </ul>
              </li>
              <li>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">Column Four</span></a>
                <ul>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-buttons.html"><span className="menu-text">Buttons</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-faq.html"><span className="menu-text">FAQs / Toggles</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-brands.html"><span className="menu-text">Brands</span></a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Blog</span></a>
            <ul className="sub-menu">
              <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-right-sidebar.html"><span className="menu-text">Standard Layout</span></a>
                <ul className="sub-menu">
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                </ul>
              </li>
              <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-right-sidebar.html"><span className="menu-text">Grid Layout</span></a>
                <ul className="sub-menu">
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                </ul>
              </li>
              <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-right-sidebar.html"><span className="menu-text">List Layout</span></a>
                <ul className="sub-menu">
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                </ul>
              </li>
              <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-right-sidebar.html"><span className="menu-text">Masonry Layout</span></a>
                <ul className="sub-menu">
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                </ul>
              </li>
              <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-right-sidebar.html"><span className="menu-text">Single Post Layout</span></a>
                <ul className="sub-menu">
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                  <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Pages</span></a>
            <ul className="sub-menu">
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/about-us.html"><span className="menu-text">About us</span></a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/about-us-2.html"><span className="menu-text">About us 02</span></a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/contact-us.html"><span className="menu-text">Contact us</span></a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/coming-soon.html"><span className="menu-text">Coming Soon</span></a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/404.html"><span className="menu-text">Page 404</span></a></li>
            </ul>
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
          <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html"><img src="/assets/images/logo-2.webp" alt="Learts Logo" /></a>
        </div>
      </div>
      {/* Header Logo End */}
      {/* Search Start */}
      <div className="col d-none d-xl-block">
        <nav className="site-main-menu justify-content-center">
          <ul>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Home</span></a>
              <ul className="sub-menu mega-menu">
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                  <ul>
                    <li> <img className="mmh_img " src="/assets/images/home-01.webp" alt="home-01" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html"><span className="menu-text">Arts Propelled</span></a></li>
                    <li> <img className="mmh_img " src="/assets/images/home-02.webp" alt="home-02" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-2.html"><span className="menu-text">Decor Thriving</span></a></li>
                    <li> <img className="mmh_img " src="/assets/images/home-03.webp" alt="home-03" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-3.html"><span className="menu-text">Savvy Delight</span></a></li>
                    <li> <img className="mmh_img " src="/assets/images/home-04.webp" alt="home-04" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-4.html"><span className="menu-text">Perfect Escapes</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                  <ul>
                    <li> <img className="mmh_img " src="/assets/images/home-05.webp" alt="home-05" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-5.html"><span className="menu-text">Kitchen Cozy</span></a></li>
                    <li> <img className="mmh_img " src="/assets/images/home-06.webp" alt="home-06" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-6.html"><span className="menu-text">Dreamy Designs</span></a></li>
                    <li> <img className="mmh_img " src="/assets/images/home-07.webp" alt="home-07" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-7.html"><span className="menu-text">Crispy Recipes</span></a></li>
                    <li> <img className="mmh_img " src="/assets/images/home-08.webp" alt="home-08" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-8.html"><span className="menu-text">Decoholic Chic</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                  <ul>
                    <li> <img className="mmh_img " src="/assets/images/home-9.webp" alt="home-9" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-9.html"><span className="menu-text">Reblended Dish</span></a></li>
                    <li> <img className="mmh_img " src="/assets/images/home-10.webp" alt="home-10" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-10.html"><span className="menu-text">Craftin House</span></a></li>
                    <li> <img className="mmh_img " src="/assets/images/home-11.webp" alt="home-11" /> <a href="https://html-demo-orcin.vercel.app/premium/learts/index-11.html"><span className="menu-text">Craftswork Biz</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="menu-banner"><img src="/assets/images/menu-banner-1.webp" alt="Home Menu Banner" /></a>
                </li>
              </ul>
            </li>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Shop</span></a>
              <ul className="sub-menu mega-menu">
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">SHOP PAGES</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html"><span className="menu-text">Shop No Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-left-sidebar.html"><span className="menu-text">Shop Left Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-right-sidebar.html"><span className="menu-text">Shop Right Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-fullwidth-no-gutters.html"><span className="menu-text">Shop Fullwidth No Space</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-fullwidth.html"><span className="menu-text">Shop Fullwidth No Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-fullwidth-left-sidebar.html"><span className="menu-text">Shop Fullwidth Left Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-fullwidth-right-sidebar.html"><span className="menu-text">Shop Fullwidth Right Sidebar</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">PRODUCT PAGES</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html"><span className="menu-text">Basic</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-fullwidth.html"><span className="menu-text">Fullwidth</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-sticky.html"><span className="menu-text">Sticky Details</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-sidebar.html"><span className="menu-text">Width Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-extra-content.html"><span className="menu-text">Extra Content</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-image-variation.html"><span className="menu-text">Variations Images</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-group.html"><span className="menu-text">Bought Together</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-360.html"><span className="menu-text">Product 360</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">PRODUCT &amp; Other PAGES</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-background.html"><span className="menu-text">Product with Background</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shopping-cart.html"><span className="menu-text">Shopping Cart</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/checkout.html"><span className="menu-text">Checkout</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/order-tracking.html"><span className="menu-text">Order Tracking</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html"><span className="menu-text">Wishlist</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/login-register.html"><span className="menu-text">Customer Login</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html"><span className="menu-text">My Account</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/lost-password.html"><span className="menu-text">Lost Password</span></a></li>
                  </ul>
                </li>
                <li className="align-self-center">
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="menu-banner"><img src="/assets/images/menu-banner-2.webp" alt="Shop Menu Banner" /></a>
                </li>
              </ul>
            </li>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Project</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-3-columns.html"><span className="menu-text">Portfolio 3 Columns</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-4-columns.html"><span className="menu-text">Portfolio 4 Columns</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-5-columns.html"><span className="menu-text">Portfolio 5 Columns</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-details.html"><span className="menu-text">Portfolio Details</span></a></li>
              </ul>
            </li>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Elements</span></a>
              <ul className="sub-menu mega-menu">
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">Column One</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-products.html"><span className="menu-text">Product Styles</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-products-tabs.html"><span className="menu-text">Product Tabs</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-product-sale-banner.html"><span className="menu-text">Product &amp; Sale Banner</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">Column Two</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-category-banner.html"><span className="menu-text">Category Banner</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-team.html"><span className="menu-text">Team Member</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-testimonials.html"><span className="menu-text">Testimonials</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">Column Three</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-instagram.html"><span className="menu-text">Instagram</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-map.html"><span className="menu-text">Google Map</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-icon-box.html"><span className="menu-text">Icon Box</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">Column Four</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-buttons.html"><span className="menu-text">Buttons</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-faq.html"><span className="menu-text">FAQs / Toggles</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-brands.html"><span className="menu-text">Brands</span></a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Blog</span></a>
              <ul className="sub-menu">
                <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-right-sidebar.html"><span className="menu-text">Standard Layout</span></a>
                  <ul className="sub-menu">
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                  </ul>
                </li>
                <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-right-sidebar.html"><span className="menu-text">Grid Layout</span></a>
                  <ul className="sub-menu">
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                  </ul>
                </li>
                <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-right-sidebar.html"><span className="menu-text">List Layout</span></a>
                  <ul className="sub-menu">
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                  </ul>
                </li>
                <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-right-sidebar.html"><span className="menu-text">Masonry Layout</span></a>
                  <ul className="sub-menu">
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                  </ul>
                </li>
                <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-right-sidebar.html"><span className="menu-text">Single Post Layout</span></a>
                  <ul className="sub-menu">
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Pages</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/about-us.html"><span className="menu-text">About us</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/about-us-2.html"><span className="menu-text">About us 02</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/contact-us.html"><span className="menu-text">Contact us</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/coming-soon.html"><span className="menu-text">Coming Soon</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/404.html"><span className="menu-text">Page 404</span></a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      {/* Search End */}
      {/* Header Tools Start */}
      <div className="col-auto">
        <div className="header-tools justify-content-end">
          <div className="header-login">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html"><i className="far fa-user" /></a>
          </div>
          <div className="header-search d-none d-sm-block">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search" /></a>
          </div>
          <div className="header-wishlist">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart" /></a>
          </div>
          <div className="header-cart">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></a>
          </div>
          <div className="mobile-menu-toggle d-xl-none">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-mobile-menu" className="offcanvas-toggle">
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
      {/* Header Logo Start */}
      <div className="col">
        <div className="header-logo">
          <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html"><img src="/assets/images/logo-2.webp" alt="Learts Logo" /></a>
        </div>
      </div>
      {/* Header Logo End */}
      {/* Header Tools Start */}
      <div className="col-auto">
        <div className="header-tools justify-content-end">
          <div className="header-login d-none d-sm-block">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html"><i className="far fa-user" /></a>
          </div>
          <div className="header-search d-none d-sm-block">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search" /></a>
          </div>
          <div className="header-wishlist d-none d-sm-block">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart" /></a>
          </div>
          <div className="header-cart">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></a>
          </div>
          <div className="mobile-menu-toggle">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-mobile-menu" className="offcanvas-toggle">
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
{/* Mobile Header Section End */}
{/* Mobile Header Section Start */}
<div className="mobile-header sticky-header bg-white section d-xl-none">
  <div className="container">
    <div className="row align-items-center">
      {/* Header Logo Start */}
      <div className="col">
        <div className="header-logo">
          <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html"><img src="/assets/images/logo-2.webp" alt="Learts Logo" /></a>
        </div>
      </div>
      {/* Header Logo End */}
      {/* Header Tools Start */}
      <div className="col-auto">
        <div className="header-tools justify-content-end">
          <div className="header-login d-none d-sm-block">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html"><i className="far fa-user" /></a>
          </div>
          <div className="header-search d-none d-sm-block">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search" /></a>
          </div>
          <div className="header-wishlist d-none d-sm-block">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart" /></a>
          </div>
          <div className="header-cart">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></a>
          </div>
          <div className="mobile-menu-toggle">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#offcanvas-mobile-menu" className="offcanvas-toggle">
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
{/* Mobile Header Section End */}
</>
    );
};
export default Header;