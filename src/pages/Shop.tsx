const Shop = () => {
    return (
        <>
          {/* Header Section Start */}
  <div className="header-section section section-fluid bg-white d-none d-xl-block">
  <div className="container">
    <div className="row align-items-center">
      {/* Header Logo Start */}
      <div className="col-auto">
        <div className="header-logo">
          <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html"><img src="/assets/images/logo-2.webp" alt="Learts Logo" /></a>
        </div>
      </div>
      {/* Header Logo End */}
      {/* Search Start */}
      <div className="col-auto me-auto">
        <nav className="site-main-menu site-main-menu-left menu-height-100 justify-content-center" style={{position: 'relative'}}>
          <ul>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Home</span></a>
              <ul className="sub-menu mega-menu">
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
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
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="menu-banner"><img src="/assets/images/menu-banner-1.webp" alt="Home Menu Banner" /></a>
                </li>
              </ul>
            </li>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Shop</span></a>
              <ul className="sub-menu mega-menu">
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">SHOP PAGES</span></a>
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
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">PRODUCT PAGES</span></a>
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
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">PRODUCT &amp; Other PAGES</span></a>
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
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="menu-banner"><img src="/assets/images/menu-banner-2.webp" alt="Shop Menu Banner" /></a>
                </li>
              </ul>
            </li>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Project</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-3-columns.html"><span className="menu-text">Portfolio 3 Columns</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-4-columns.html"><span className="menu-text">Portfolio 4 Columns</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-5-columns.html"><span className="menu-text">Portfolio 5 Columns</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-details.html"><span className="menu-text">Portfolio Details</span></a></li>
              </ul>
            </li>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Elements</span></a>
              <ul className="sub-menu mega-menu">
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">Column One</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-products.html"><span className="menu-text">Product Styles</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-products-tabs.html"><span className="menu-text">Product Tabs</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-product-sale-banner.html"><span className="menu-text">Product &amp; Sale Banner</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">Column Two</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-category-banner.html"><span className="menu-text">Category Banner</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-team.html"><span className="menu-text">Team Member</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-testimonials.html"><span className="menu-text">Testimonials</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">Column Three</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-instagram.html"><span className="menu-text">Instagram</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-map.html"><span className="menu-text">Google Map</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-icon-box.html"><span className="menu-text">Icon Box</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">Column Four</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-buttons.html"><span className="menu-text">Buttons</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-faq.html"><span className="menu-text">FAQs / Toggles</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-brands.html"><span className="menu-text">Brands</span></a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Blog</span></a>
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
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Pages</span></a>
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
      {/* Search Start */}
      <div className="col-auto d-none d-xl-block">
        <div className="header2-search">
          <form action="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">
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
            <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html"><i className="far fa-user" /></a>
          </div>
          <div className="header-wishlist">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart" /></a>
          </div>
          <div className="header-cart">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></a>
          </div>
        </div>
      </div>
      {/* Header Tools End */}
    </div>
  </div>
</div>
{/* Header Section End */}
{/* Header Section Start */}
<div className="sticky-header section bg-white section-fluid d-none d-xl-block">
  <div className="container">
    <div className="row align-items-center">
      {/* Header Logo Start */}
      <div className="col-xl-auto col">
        <div className="header-logo">
          <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html"><img src="/assets/images/logo-2.webp" alt="Learts Logo" /></a>
        </div>
      </div>
      {/* Header Logo End */}
      {/* Search Start */}
      <div className="col-auto me-auto d-none d-xl-block">
        <nav className="site-main-menu site-main-menu-left justify-content-center" style={{position: 'relative'}}>
          <ul>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Home</span></a>
              <ul className="sub-menu mega-menu">
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
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
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="menu-banner"><img src="/assets/images/menu-banner-1.webp" alt="Home Menu Banner" /></a>
                </li>
              </ul>
            </li>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Shop</span></a>
              <ul className="sub-menu mega-menu">
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">SHOP PAGES</span></a>
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
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">PRODUCT PAGES</span></a>
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
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">PRODUCT &amp; Other PAGES</span></a>
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
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="menu-banner"><img src="/assets/images/menu-banner-2.webp" alt="Shop Menu Banner" /></a>
                </li>
              </ul>
            </li>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Project</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-3-columns.html"><span className="menu-text">Portfolio 3 Columns</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-4-columns.html"><span className="menu-text">Portfolio 4 Columns</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-5-columns.html"><span className="menu-text">Portfolio 5 Columns</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-details.html"><span className="menu-text">Portfolio Details</span></a></li>
              </ul>
            </li>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Elements</span></a>
              <ul className="sub-menu mega-menu">
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">Column One</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-products.html"><span className="menu-text">Product Styles</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-products-tabs.html"><span className="menu-text">Product Tabs</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-product-sale-banner.html"><span className="menu-text">Product &amp; Sale Banner</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">Column Two</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-category-banner.html"><span className="menu-text">Category Banner</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-team.html"><span className="menu-text">Team Member</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-testimonials.html"><span className="menu-text">Testimonials</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">Column Three</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-instagram.html"><span className="menu-text">Instagram</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-map.html"><span className="menu-text">Google Map</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-icon-box.html"><span className="menu-text">Icon Box</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">Column Four</span></a>
                  <ul>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-buttons.html"><span className="menu-text">Buttons</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-faq.html"><span className="menu-text">FAQs / Toggles</span></a></li>
                    <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-brands.html"><span className="menu-text">Brands</span></a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Blog</span></a>
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
            <li className="has-children"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Pages</span></a>
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
      {/* Search Start */}
      <div className="col-auto d-none d-xl-block">
        <div className="header2-search">
          <form action="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">
            <input type="text" placeholder="Search..." />
            <button className="btn"><i className="fas fa-search" /></button>
          </form>
        </div>
      </div>
      {/* Search End */}
      {/* Header Tools Start */}
      <div className="col-auto">
        <div className="header-tools justify-content-end">
          <div className="header-login d-none d-sm-block">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html"><i className="far fa-user" /></a>
          </div>
          <div className="header-search d-none d-sm-block d-xl-none">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search" /></a>
          </div>
          <div className="header-wishlist d-none d-sm-block">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart" /></a>
          </div>
          <div className="header-cart">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></a>
          </div>
          <div className="mobile-menu-toggle d-xl-none">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="offcanvas-toggle">
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
{/* Header Section End */}
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
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search" /></a>
          </div>
          <div className="header-wishlist d-none d-sm-block">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart" /></a>
          </div>
          <div className="header-cart">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></a>
          </div>
          <div className="mobile-menu-toggle">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#offcanvas-mobile-menu" className="offcanvas-toggle">
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
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search" /></a>
          </div>
          <div className="header-wishlist d-none d-sm-block">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart" /></a>
          </div>
          <div className="header-cart">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></a>
          </div>
          <div className="mobile-menu-toggle">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#offcanvas-mobile-menu" className="offcanvas-toggle">
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
{/* OffCanvas Search Start */}
<div id="offcanvas-search" className="offcanvas offcanvas-search">
  <div className="inner">
    <div className="offcanvas-search-form">
      <button className="offcanvas-close">×</button>
      <form action="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">
        <div className="row mb-n3">
          <div className="col-lg-8 col-12 mb-3"><input type="text" placeholder="Search Products..." /></div>
          <div className="col-lg-4 col-12 mb-3">
            <select className="search-select select2-basic select2-hidden-accessible" data-select2-id={1} tabIndex={-1} aria-hidden="true">
              <option value={0} data-select2-id={3}>All Categories</option>
              <option value="kids-babies">Kids &amp; Babies</option>
              <option value="home-decor">Home Decor</option>
              <option value="gift-ideas">Gift ideas</option>
              <option value="kitchen">Kitchen</option>
              <option value="toys">Toys</option>
              <option value="kniting-sewing">Kniting &amp; Sewing</option>
              <option value="pots">Pots</option>
            </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={2} style={{width: 132}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-bntr-container"><span className="select2-selection__rendered" id="select2-bntr-container" role="textbox" aria-readonly="true" title="All Categories">All Categories</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
          </div>
        </div>
      </form>
    </div>
    <p className="search-description text-body-light mt-2"> <span># Type at least 1 character to search</span> <span># Hit enter to search or ESC to close</span></p>
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
    <div className="body customScroll ps ps--theme_default" data-ps-id="08af4f30-cb4b-130d-e493-4d8fc127554d">
      <ul className="minicart-product-list">
        <li>
          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image"><img src="/assets/images/cart-product-1.webp" alt="Cart product Image" /></a>
          <div className="content">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="title">Walnut Cutting Board</a>
            <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="remove">×</a>
          </div>
        </li>
        <li>
          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image"><img src="/assets/images/cart-product-2.webp" alt="Cart product Image" /></a>
          <div className="content">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="title">Lucky Wooden Elephant</a>
            <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="remove">×</a>
          </div>
        </li>
        <li>
          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image"><img src="/assets/images/cart-product-3.webp" alt="Cart product Image" /></a>
          <div className="content">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="title">Fish Cut Out Set</a>
            <span className="quantity-price">1 x <span className="amount">$9.00</span></span>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="remove">×</a>
          </div>
        </li>
      </ul>
      <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
    <div className="foot">
      <div className="buttons">
        <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="btn btn-dark btn-hover-primary">view wishlist</a>
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
    <div className="body customScroll ps ps--theme_default" data-ps-id="ace5d9f2-2afd-3c5f-a2df-8a4e5e2731d5">
      <ul className="minicart-product-list">
        <li>
          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image"><img src="/assets/images/cart-product-1.webp" alt="Cart product Image" /></a>
          <div className="content">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="title">Walnut Cutting Board</a>
            <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="remove">×</a>
          </div>
        </li>
        <li>
          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image"><img src="/assets/images/cart-product-2.webp" alt="Cart product Image" /></a>
          <div className="content">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="title">Lucky Wooden Elephant</a>
            <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="remove">×</a>
          </div>
        </li>
        <li>
          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image"><img src="/assets/images/cart-product-3.webp" alt="Cart product Image" /></a>
          <div className="content">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="title">Fish Cut Out Set</a>
            <span className="quantity-price">1 x <span className="amount">$9.00</span></span>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="remove">×</a>
          </div>
        </li>
      </ul>
      <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
    <div className="foot">
      <div className="sub-total">
        <strong>Subtotal :</strong>
        <span className="amount">$144.00</span>
      </div>
      <div className="buttons">
        <a href="https://html-demo-orcin.vercel.app/premium/learts/shopping-cart.html" className="btn btn-dark btn-hover-primary">view cart</a>
        <a href="https://html-demo-orcin.vercel.app/premium/learts/checkout.html" className="btn btn-outline-dark">checkout</a>
      </div>
      <p className="minicart-message">Free Shipping on All Orders Over $100!</p>
    </div>
  </div>
</div>
{/* OffCanvas Cart End */}
{/* OffCanvas Search Start */}
<div id="offcanvas-mobile-menu" className="offcanvas offcanvas-mobile-menu">
  <div className="inner customScroll ps ps--theme_default" data-ps-id="355b6afb-b06e-1d48-ad9e-cd5fbcfcd9af">
    <div className="offcanvas-menu-search-form">
      <form action="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">
        <input type="text" placeholder="Search..." />
        <button><i className="fas fa-search" /></button>
      </form>
    </div>
    <div className="offcanvas-menu">
      <ul>
        <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Home</span></a>
          <ul className="sub-menu">
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Home Group</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html"><span className="menu-text">Arts Propelled</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-2.html"><span className="menu-text">Decor Thriving</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-3.html"><span className="menu-text">Savvy Delight</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-4.html"><span className="menu-text">Perfect Escapes</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Home Group</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-5.html"><span className="menu-text">Kitchen Cozy</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-6.html"><span className="menu-text">Dreamy Designs</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-7.html"><span className="menu-text">Crispy Recipes</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-8.html"><span className="menu-text">Decoholic Chic</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Home Group</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-9.html"><span className="menu-text">Reblended Dish</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-10.html"><span className="menu-text">Craftin House</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-11.html"><span className="menu-text">Craftswork Biz</span></a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Shop</span></a>
          <ul className="sub-menu">
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Shop Pages</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html"><span className="menu-text">Shop No Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-left-sidebar.html"><span className="menu-text">Shop Left Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-right-sidebar.html"><span className="menu-text">Shop Right Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-fullwidth-no-gutters.html"><span className="menu-text">Shop Fullwidth No Space</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-fullwidth.html"><span className="menu-text">Shop Fullwidth No Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-fullwidth-left-sidebar.html"><span className="menu-text">Shop Fullwidth Left Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop-fullwidth-right-sidebar.html"><span className="menu-text">Shop Fullwidth Right Sidebar</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Product Pages</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html"><span className="menu-text">Basic</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-fullwidth.html"><span className="menu-text">Fullwidth</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-sticky.html"><span className="menu-text">Sticky Details</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-sidebar.html"><span className="menu-text">Width Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-extra-content.html"><span className="menu-text">Extra Content</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-image-variation.html"><span className="menu-text">Variations Images</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-group.html"><span className="menu-text">Bought Together</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-360.html"><span className="menu-text">Product 360</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details-background.html"><span className="menu-text">Product with Background</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">PRODUCT &amp; Other PAGES</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shopping-cart.html"><span className="menu-text">Shopping Cart</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/checkout.html"><span className="menu-text">Checkout</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/order-tracking.html"><span className="menu-text">Order Tracking</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html"><span className="menu-text">Wishlist</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/login-register.html"><span className="menu-text">Customer Login</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html"><span className="menu-text">My Account</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/lost-password.html"><span className="menu-text">Lost Password</span></a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Project</span></a>
          <ul className="sub-menu">
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-3-columns.html"><span className="menu-text">Portfolio 3 Columns</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-4-columns.html"><span className="menu-text">Portfolio 4 Columns</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-5-columns.html"><span className="menu-text">Portfolio 5 Columns</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-details.html"><span className="menu-text">Portfolio Details</span></a></li>
          </ul>
        </li>
        <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Elements</span></a>
          <ul className="sub-menu">
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">Column One</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-products.html"><span className="menu-text">Product Styles</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-products-tabs.html"><span className="menu-text">Product Tabs</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-product-sale-banner.html"><span className="menu-text">Product &amp; Sale Banner</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">Column Two</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-category-banner.html"><span className="menu-text">Category Banner</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-team.html"><span className="menu-text">Team Member</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-testimonials.html"><span className="menu-text">Testimonials</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">Column Three</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-instagram.html"><span className="menu-text">Instagram</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-map.html"><span className="menu-text">Google Map</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-icon-box.html"><span className="menu-text">Icon Box</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="mega-menu-title"><span className="menu-text">Column Four</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-buttons.html"><span className="menu-text">Buttons</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-faq.html"><span className="menu-text">FAQs / Toggles</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-brands.html"><span className="menu-text">Brands</span></a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Blog</span></a>
          <ul className="sub-menu">
            <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Standard Layout</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Grid Layout</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">List Layout</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Masonry Layout</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Single Post Layout</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="menu-text">Pages</span></a>
          <ul className="sub-menu">
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/about-us.html"><span className="menu-text">About us</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/about-us-2.html"><span className="menu-text">About us 02</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/contact-us.html"><span className="menu-text">Contact us</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/coming-soon.html"><span className="menu-text">Coming Soon</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/404.html"><span className="menu-text">Page 404</span></a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="offcanvas-buttons">
      <div className="header-tools">
        <div className="header-login">
          <a href="https://html-demo-orcin.vercel.app/premium/learts/my-account.html"><i className="far fa-user" /></a>
        </div>
        <div className="header-wishlist">
          <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html"><span>3</span><i className="far fa-heart" /></a>
        </div>
        <div className="header-cart">
          <a href="https://html-demo-orcin.vercel.app/premium/learts/shopping-cart.html"><span className="cart-count">3</span><i className="fas fa-shopping-cart" /></a>
        </div>
      </div>
    </div>
    <div className="offcanvas-social">
      <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><i className="fab fa-facebook-f" /></a>
      <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><i className="fab fa-twitter" /></a>
      <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><i className="fab fa-instagram" /></a>
      <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><i className="fab fa-youtube" /></a>
    </div>
    <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
</div>
{/* OffCanvas Search End */}
<div className="offcanvas-overlay" />
{/* Page Title/Header Start */}
<div className="page-title-section section" data-bg-image="assets/images/bg/page-title-1.webp" style={{backgroundImage: 'url("assets/images/bg/page-title-1.webp")'}}>
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="page-title">
          <h1 className="title">Shop</h1>
          <ul className="breadcrumb">
            <li className="breadcrumb-item"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html">Home</a></li>
            <li className="breadcrumb-item active">Products</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Page Title/Header End */}
{/* Shop Products Section Start */}
<div className="section section-padding pt-0">
  {/* Shop Toolbar Start */}
  <div className="shop-toolbar border-bottom">
    <div className="container">
      <div className="row learts-mb-n20">
        {/* Isotop Filter Start */}
        <div className="col-md col-12 align-self-center learts-mb-20">
          <div className="isotope-filter shop-product-filter" data-target="#shop-products">
            <button className="active" data-filter="*">all</button>
            <button data-filter=".featured">Hot Products</button>
            <button data-filter=".new">New Products</button>
            <button data-filter=".sales">Sales Products</button>
          </div>
        </div>
        {/* Isotop Filter End */}
        <div className="col-md-auto col-12 learts-mb-20">
          <ul className="shop-toolbar-controls">
            <li>
              <div className="product-sorting">
                <select className="nice-select" style={{display: 'none'}}>
                  <option value="menu_order" selected="selected">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select><div className="nice-select" tabIndex={0}><span className="current">Default sorting</span><ul className="list"><li data-value="menu_order" className="option selected">Default sorting</li><li data-value="popularity" className="option">Sort by popularity</li><li data-value="rating" className="option">Sort by average rating</li><li data-value="date" className="option">Sort by latest</li><li data-value="price" className="option">Sort by price: low to high</li><li data-value="price-desc" className="option">Sort by price: high to low</li></ul></div>
              </div>
            </li>
            <li>
              <div className="product-column-toggle d-none d-xl-flex">
                <button className="toggle active hintT-top" data-hint="5 Column" data-column={5}><i className="ti-layout-grid4-alt" /></button>
                <button className="toggle hintT-top" data-hint="4 Column" data-column={4}><i className="ti-layout-grid3-alt" /></button>
                <button className="toggle hintT-top" data-hint="3 Column" data-column={3}><i className="ti-layout-grid2-alt" /></button>
              </div>
            </li>
            <li>
              <a className="product-filter-toggle" href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#product-filter">Filters</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Shop Toolbar End */}
  {/* Product Filter Start */}
  <div id="product-filter" className="product-filter bg-light">
    <div className="container">
      <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 learts-mb-n30">
        {/* Sort by Start */}
        <div className="col learts-mb-30">
          <h3 className="widget-title product-filter-widget-title">Sort by</h3>
          <ul className="widget-list product-filter-widget customScroll ps ps--theme_default" data-ps-id="7701b0e5-a490-0306-eb8a-203519c99af6">
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Popularity</a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Average rating</a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Newness</a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Price: low to high</a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Price: high to low</a></li>
            <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></ul>
        </div>
        {/* Sort by End */}
        {/* Price filter Start */}
        <div className="col learts-mb-30">
          <h3 className="widget-title product-filter-widget-title">Price filter</h3>
          <ul className="widget-list product-filter-widget customScroll ps ps--theme_default" data-ps-id="96c9b74f-9392-46d0-982d-59186e6d755b">
            <li> <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">All</a></li>
            <li> <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="amount"><span className="cur-symbol">£</span>0.00</span> - <span className="amount"><span className="cur-symbol">£</span>80.00</span></a></li>
            <li> <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="amount"><span className="cur-symbol">£</span>80.00</span> - <span className="amount"><span className="cur-symbol">£</span>160.00</span></a></li>
            <li> <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="amount"><span className="cur-symbol">£</span>160.00</span> - <span className="amount"><span className="cur-symbol">£</span>240.00</span></a></li>
            <li> <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="amount"><span className="cur-symbol">£</span>240.00</span> - <span className="amount"><span className="cur-symbol">£</span>320.00</span></a></li>
            <li> <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><span className="amount"><span className="cur-symbol">£</span>320.00</span> +</a></li>
            <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></ul>
        </div>
        {/* Price filter End */}
        {/* Categories Start */}
        <div className="col learts-mb-30">
          <h3 className="widget-title product-filter-widget-title">Categories</h3>
          <ul className="widget-list product-filter-widget customScroll ps ps--theme_default" data-ps-id="f7a880cf-8f76-41c3-e82b-2c4228df9f6a">
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Gift ideas</a> <span className="count">16</span></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Home Decor</a> <span className="count">16</span></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Kids &amp; Babies</a> <span className="count">6</span></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Kitchen</a> <span className="count">15</span></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Kniting &amp; Sewing</a> <span className="count">4</span></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Pots</a> <span className="count">4</span></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Toys</a> <span className="count">6</span></li>
            <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></ul>
        </div>
        {/* Categories End */}
        {/* Filters by colors Start */}
        <div className="col learts-mb-30">
          <h3 className="widget-title product-filter-widget-title">Filters by colors</h3>
          <ul className="widget-colors product-filter-widget customScroll ps ps--theme_default" data-ps-id="510a3ca8-19af-ae25-3bea-7af97515280b">
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="hintT-top" data-hint="Black"><span data-bg-color="#000000" style={{backgroundColor: 'rgb(0, 0, 0)'}}>Black</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="hintT-top" data-hint="White"><span data-bg-color="#FFFFFF" style={{backgroundColor: 'rgb(255, 255, 255)'}}>White</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="hintT-top" data-hint="Dark Red"><span data-bg-color="#b2483c" style={{backgroundColor: 'rgb(178, 72, 60)'}}>Dark Red</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="hintT-top" data-hint="Flaxen"><span data-bg-color="#d5b85a" style={{backgroundColor: 'rgb(213, 184, 90)'}}>Flaxen</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="hintT-top" data-hint="Pine"><span data-bg-color="#01796f" style={{backgroundColor: 'rgb(1, 121, 111)'}}>Pine</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="hintT-top" data-hint="Tortilla"><span data-bg-color="#997950" style={{backgroundColor: 'rgb(153, 121, 80)'}}>Tortilla</span></a></li>
            <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></ul>
        </div>
        {/* Filters by colors End */}
        {/* Brands Start */}
        <div className="col learts-mb-30">
          <h3 className="widget-title product-filter-widget-title">Brands</h3>
          <ul className="widget-list product-filter-widget customScroll ps ps--theme_default" data-ps-id="a893f886-e23c-6df4-c79d-53945d7fb677">
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Alexander</a> <span className="count">(2)</span></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Carmella</a> <span className="count">(4)</span></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Danielle</a> <span className="count">(7)</span></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Diana Day</a> <span className="count">(13)</span></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Emilia</a> <span className="count">(2)</span></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Gasmine</a> <span className="count">(15)</span></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Jack &amp; Ella</a> <span className="count">(7)</span></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Juliette</a> <span className="count">(11)</span></li>
            <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></ul>
        </div>
        {/* Brands End */}
      </div>
    </div>
  </div>
  {/* Product Filter End */}
  <div className="section learts-mt-70">
    <div className="container">
      {/* Products Start */}
      <div id="shop-products" className="products isotope-grid row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1" style={{position: 'relative', height: '1222.12px'}}>
        <div className="grid-sizer col-1" />
        <div className="grid-item col featured" style={{position: 'absolute', left: 0, top: 0}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <img src="/assets/images/product-17.webp" alt="Product Image" />
                <img className="image-hover " src="/assets/images/product-17-hover.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">3D Attractive Pot</a></h6>
              <span className="price">
                $90.00
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col new" style={{position: 'absolute', left: 240, top: 0}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <span className="product-badges">
                  <span className="outofstock"><i className="far fa-frown" /></span>
                </span>
                <img src="/assets/images/product-14.webp" alt="Product Image" />
                <img className="image-hover " src="/assets/images/product-14-hover.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Abstract Folded Pots</a></h6>
              <span className="price">
                $50.00 - $55.00
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col featured" style={{position: 'absolute', left: 480, top: 0}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <span className="product-badges">
                <span className="hot">hot</span>
              </span>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <img src="/assets/images/product-30.webp" alt="Product Image" />
                <img className="image-hover " src="/assets/images/product-30-hover.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Adhesive Tape Dispenser</a></h6>
              <span className="price">
                $15.00
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col featured" style={{position: 'absolute', left: 720, top: 0}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <img src="/assets/images/product-9.webp" alt="Product Image" />
                <img className="image-hover " src="/assets/images/product-9-hover.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Aluminum Equestrian</a></h6>
              <span className="price">
                $100.00
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col sales featured" style={{position: 'absolute', left: 960, top: 0}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <span className="product-badges">
                  <span className="onsale">-20%</span>
                </span>
                <img src="/assets/images/product-25.webp" alt="Product Image" />
                <img className="image-hover " src="/assets/images/product-25-hover.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Antique Sewing Scissors</a></h6>
              <span className="price">
                <span className="old">$15.00</span>
                <span className="new">$12.00</span>
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col sales" style={{position: 'absolute', left: 0, top: '407.375px'}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <span className="product-badges">
                  <span className="onsale">-13%</span>
                </span>
                <img src="/assets/images/product-1.webp" alt="Product Image" />
                <img className="image-hover " src="/assets/images/product-1-hover.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Boho Beard Mug</a></h6>
              <span className="price">
                <span className="old">$45.00</span>
                <span className="new">$39.00</span>
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col new" style={{position: 'absolute', left: 240, top: '407.375px'}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <img src="/assets/images/product-31.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Bouncer Measuring Cup</a></h6>
              <span className="price">
                $150.00
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col new" style={{position: 'absolute', left: 480, top: '407.375px'}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <img src="/assets/images/product-15.webp" alt="Product Image" />
                <img className="image-hover " src="/assets/images/product-15-hover.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Brush &amp; Dustpan Set</a></h6>
              <span className="price">
                $9.00
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col featured" style={{position: 'absolute', left: 720, top: '407.375px'}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <img src="/assets/images/product-12.webp" alt="Product Image" />
                <img className="image-hover " src="/assets/images/product-12-hover.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Cape Cottage Playhouse</a></h6>
              <span className="price">
                $35.00
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col new" style={{position: 'absolute', left: 960, top: '407.375px'}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <span className="product-badges">
                  <span className="outofstock"><i className="far fa-frown" /></span>
                </span>
                <img src="/assets/images/product-32.webp" alt="Product Image" />
                <img className="image-hover " src="/assets/images/product-32-hover.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
              <div className="product-options">
                <ul className="colors">
                  <li style={{backgroundColor: '#000000'}}>color one</li>
                  <li style={{backgroundColor: '#ffffff'}}>color two</li>
                </ul>
              </div>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Cleaning Dustpan &amp; Brush</a></h6>
              <span className="price">
                $38.00 - $50.00
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col featured" style={{position: 'absolute', left: 0, top: '814.75px'}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <img src="/assets/images/product-6.webp" alt="Product Image" />
                <img className="image-hover " src="/assets/images/product-6-hover.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Clear Silicate Teapot</a></h6>
              <span className="price">
                $140.00
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col sales new" style={{position: 'absolute', left: 240, top: '814.75px'}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <span className="product-badges">
                  <span className="onsale">-13%</span>
                </span>
                <img src="/assets/images/product-19.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Country Feast Set</a></h6>
              <span className="price">
                <span className="old">$45.00</span>
                <span className="new">$39.00</span>
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col new" style={{position: 'absolute', left: 480, top: '814.75px'}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <span className="product-badges">
                  <span className="outofstock"><i className="far fa-frown" /></span>
                  <span className="hot">hot</span>
                </span>
                <img src="/assets/images/product-8.webp" alt="Product Image" />
                <img className="image-hover " src="/assets/images/product-8-hover.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
              <div className="product-options">
                <ul className="colors">
                  <li style={{backgroundColor: '#000000'}}>color one</li>
                  <li style={{backgroundColor: '#b2483c'}}>color two</li>
                </ul>
                <ul className="sizes">
                  <li>Large</li>
                  <li>Medium</li>
                  <li>Small</li>
                </ul>
              </div>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Decorative Christmas Fox</a></h6>
              <span className="price">
                $50.00
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col featured" style={{position: 'absolute', left: 720, top: '814.75px'}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <img src="/assets/images/product-28.webp" alt="Product Image" />
                <img className="image-hover " src="/assets/images/product-28-hover.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Digital Camera System</a></h6>
              <span className="price">
                $350.00
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item col new" style={{position: 'absolute', left: 960, top: '814.75px'}}>
          <div className="product" style={{height: '357.375px'}}>
            <div className="product-thumb">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
                <img src="/assets/images/product-11.webp" alt="Product Image" />
                <img className="image-hover " src="/assets/images/product-11-hover.webp" alt="Product Image" />
              </a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            </div>
            <div className="product-info">
              <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Electric Egg Blender</a></h6>
              <span className="price">
                $200.00
              </span>
              <div className="product-buttons">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products End */}
      <div className="text-center learts-mt-70">
        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="btn btn-dark btn-outline-hover-dark"><i className="ti-plus" /> More</a>
      </div>
    </div>
  </div>
</div>
{/* Shop Products Section End */}
<div className="footer2-section section section-padding">
  <div className="container">
    <div className="row learts-mb-n40">
      <div className="col-lg-6 learts-mb-40">
        <div className="widget-about">
          <img src="/assets/images/logo-2.webp" alt />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque recusandae commodi mollitia facere iure nisi, laudantium quis quas perferendis a minus dolores.</p>
        </div>
      </div>
      <div className="col-lg-4 learts-mb-40">
        <div className="row">
          <div className="col">
            <ul className="widget-list">
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">About us</a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Store location</a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Contact</a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Orders</a></li>
            </ul>
          </div>
          <div className="col">
            <ul className="widget-list">
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Returns</a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Support Policy</a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Size Guide</a></li>
              <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-2 learts-mb-40">
        <ul className="widget-list">
          <li> <i className="fab fa-twitter" /> <a href="https://www.twitter.com/">Twitter</a></li>
          <li> <i className="fab fa-facebook-f" /> <a href="https://www.facebook.com/">Facebook</a></li>
          <li> <i className="fab fa-instagram" /> <a href="https://www.instagram.com/">Instagram</a></li>
          <li> <i className="fab fa-youtube" /> <a href="https://www.youtube.com/">Youtube</a></li>
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
{/* Modal */}
<div className="quickViewModal modal fade" id="quickViewModal">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <button className="close" data-bs-dismiss="modal">×</button>
      <div className="row learts-mb-n30">
        {/* Product Images Start */}
        <div className="col-lg-6 col-12 learts-mb-30">
          <div className="product-images">
            <div className="product-gallery-slider-quickview">
              <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-1.webp">
                <img src="/assets/images/product-1(1).webp" alt />
              </div>
              <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-2.webp">
                <img src="/assets/images/product-2.webp" alt />
              </div>
              <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-3.webp">
                <img src="/assets/images/product-3.webp" alt />
              </div>
              <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-4.webp">
                <img src="/assets/images/product-4.webp" alt />
              </div>
            </div>
          </div>
        </div>
        {/* Product Images End */}
        {/* Product Summery Start */}
        <div className="col-lg-6 col-12 overflow-hidden position-relative learts-mb-30">
          <div className="product-summery customScroll ps ps--theme_default" data-ps-id="01ebca7d-1973-692f-8f50-a954c48a637b">
            <div className="product-ratings">
              <span className="star-rating">
                <span className="rating-active" style={{width: '100%'}}>ratings</span>
              </span>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#reviews" className="review-link">(<span className="count">3</span> customer reviews)</a>
            </div>
            <h3 className="product-title">Cleaning Dustpan &amp; Brush</h3>
            <div className="product-price">£38.00 – £50.00</div>
            <div className="product-description">
              <p>Easy clip-on handle – Hold the brush and dustpan together for storage; the dustpan edge is serrated to allow easy scraping off the hair without entanglement. High-quality bristles – no burr damage, no scratches, thick and durable, comfortable to remove dust and smaller particles.</p>
            </div>
            <div className="product-variations">
              <table>
                <tbody>
                  <tr>
                    <td className="label"><span>Size</span></td>
                    <td className="value">
                      <div className="product-sizes">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Large</a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Medium</a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Small</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="label"><span>Color</span></td>
                    <td className="value">
                      <div className="product-colors">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" data-bg-color="#000000" style={{backgroundColor: 'rgb(0, 0, 0)'}} />
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" data-bg-color="#ffffff" style={{backgroundColor: 'rgb(255, 255, 255)'}} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="label"><span>Quantity</span></td>
                    <td className="value">
                      <div className="product-quantity">
                        <span className="qty-btn minus"><i className="ti-minus" /></span>
                        <input type="text" className="input-qty" defaultValue={1} />
                        <span className="qty-btn plus"><i className="ti-plus" /></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="product-buttons">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="btn btn-icon btn-outline-body btn-hover-dark"><i className="far fa-heart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="btn btn-dark btn-outline-hover-dark"><i className="fas fa-shopping-cart" /> Add to Cart</a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#" className="btn btn-icon btn-outline-body btn-hover-dark"><i className="fas fa-random" /></a>
            </div>
            <div className="product-brands">
              <span className="title">Brands</span>
              <div className="brands">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><img src="/assets/images/brand-3.webp" alt /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><img src="/assets/images/brand-8.webp" alt /></a>
              </div>
            </div>
            <div className="product-meta mb-0">
              <table>
                <tbody>
                  <tr>
                    <td className="label"><span>SKU</span></td>
                    <td className="value">0404019</td>
                  </tr>
                  <tr>
                    <td className="label"><span>Category</span></td>
                    <td className="value">
                      <ul className="product-category">
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">Kitchen</a></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="label"><span>Tags</span></td>
                    <td className="value">
                      <ul className="product-tags">
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">handmade</a></li>
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">learts</a></li>
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">mug</a></li>
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">product</a></li>
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#">learts</a></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="label"><span>Share on</span></td>
                    <td className="va">
                      <div className="product-share">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><i className="fab fa-facebook-f" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><i className="fab fa-twitter" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><i className="fab fa-google-plus-g" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><i className="fab fa-pinterest" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html#"><i className="far fa-envelope" /></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
        </div>
        {/* Product Summery End */}
      </div>
    </div>
  </div>
</div>
</>
    );
};
export default Shop;