const Home = () => {
    return (
    <>
          {/* OffCanvas Search Start */}
  <div id="offcanvas-search" className="offcanvas offcanvas-search">
  <div className="inner">
    <div className="offcanvas-search-form">
      <button className="offcanvas-close">×</button>
      <form action="https://html-demo-orcin.vercel.app/premium/learts/index.html#">
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
            </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={2} style={{width: 143}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-e6df-container"><span className="select2-selection__rendered" id="select2-e6df-container" role="textbox" aria-readonly="true" title="All Categories">All Categories</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
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
    <div className="body customScroll ps ps--theme_default" data-ps-id="2bfe338e-8091-1b68-0360-6258ed954e58">
      <ul className="minicart-product-list">
        <li>
          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image"><img src="/assets/images/cart-product-1.webp" alt="Cart product Image" /></a>
          <div className="content">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="title">Walnut Cutting Board</a>
            <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="remove">×</a>
          </div>
        </li>
        <li>
          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image"><img src="/assets/images/cart-product-2.webp" alt="Cart product Image" /></a>
          <div className="content">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="title">Lucky Wooden Elephant</a>
            <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="remove">×</a>
          </div>
        </li>
        <li>
          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image"><img src="/assets/images/cart-product-3.webp" alt="Cart product Image" /></a>
          <div className="content">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="title">Fish Cut Out Set</a>
            <span className="quantity-price">1 x <span className="amount">$9.00</span></span>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="remove">×</a>
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
    <div className="body customScroll ps ps--theme_default" data-ps-id="d091b9f1-9e12-471a-d2c9-97b322039141">
      <ul className="minicart-product-list">
        <li>
          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image"><img src="/assets/images/cart-product-1.webp" alt="Cart product Image" /></a>
          <div className="content">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="title">Walnut Cutting Board</a>
            <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="remove">×</a>
          </div>
        </li>
        <li>
          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image"><img src="/assets/images/cart-product-2.webp" alt="Cart product Image" /></a>
          <div className="content">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="title">Lucky Wooden Elephant</a>
            <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="remove">×</a>
          </div>
        </li>
        <li>
          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image"><img src="/assets/images/cart-product-3.webp" alt="Cart product Image" /></a>
          <div className="content">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="title">Fish Cut Out Set</a>
            <span className="quantity-price">1 x <span className="amount">$9.00</span></span>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="remove">×</a>
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
  <div className="inner customScroll ps ps--theme_default" data-ps-id="22e4b540-d645-57aa-120e-b921fc896f2d">
    <div className="offcanvas-menu-search-form">
      <form action="https://html-demo-orcin.vercel.app/premium/learts/index.html#">
        <input type="text" placeholder="Search..." />
        <button><i className="fas fa-search" /></button>
      </form>
    </div>
    <div className="offcanvas-menu">
      <ul>
        <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Home</span></a>
          <ul className="sub-menu">
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Home Group</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html"><span className="menu-text">Arts Propelled</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-2.html"><span className="menu-text">Decor Thriving</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-3.html"><span className="menu-text">Savvy Delight</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-4.html"><span className="menu-text">Perfect Escapes</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Home Group</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-5.html"><span className="menu-text">Kitchen Cozy</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-6.html"><span className="menu-text">Dreamy Designs</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-7.html"><span className="menu-text">Crispy Recipes</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-8.html"><span className="menu-text">Decoholic Chic</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Home Group</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-9.html"><span className="menu-text">Reblended Dish</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-10.html"><span className="menu-text">Craftin House</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index-11.html"><span className="menu-text">Craftswork Biz</span></a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Shop</span></a>
          <ul className="sub-menu">
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Shop Pages</span></a>
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
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Product Pages</span></a>
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
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">PRODUCT &amp; Other PAGES</span></a>
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
        <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Project</span></a>
          <ul className="sub-menu">
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-3-columns.html"><span className="menu-text">Portfolio 3 Columns</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-4-columns.html"><span className="menu-text">Portfolio 4 Columns</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-5-columns.html"><span className="menu-text">Portfolio 5 Columns</span></a></li>
            <li><a href="https://html-demo-orcin.vercel.app/premium/learts/portfolio-details.html"><span className="menu-text">Portfolio Details</span></a></li>
          </ul>
        </li>
        <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Elements</span></a>
          <ul className="sub-menu">
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">Column One</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-products.html"><span className="menu-text">Product Styles</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-products-tabs.html"><span className="menu-text">Product Tabs</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-product-sale-banner.html"><span className="menu-text">Product &amp; Sale Banner</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">Column Two</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-category-banner.html"><span className="menu-text">Category Banner</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-team.html"><span className="menu-text">Team Member</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-testimonials.html"><span className="menu-text">Testimonials</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">Column Three</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-instagram.html"><span className="menu-text">Instagram</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-map.html"><span className="menu-text">Google Map</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-icon-box.html"><span className="menu-text">Icon Box</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" />
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="mega-menu-title"><span className="menu-text">Column Four</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-buttons.html"><span className="menu-text">Buttons</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-faq.html"><span className="menu-text">FAQs / Toggles</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/elements-brands.html"><span className="menu-text">Brands</span></a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Blog</span></a>
          <ul className="sub-menu">
            <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Standard Layout</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Grid Layout</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-grid-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">List Layout</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-list-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Masonry Layout</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-masonry-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
              </ul>
            </li>
            <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Single Post Layout</span></a>
              <ul className="sub-menu">
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                <li><a href="https://html-demo-orcin.vercel.app/premium/learts/blog-details-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><span className="menu-expand" /><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><span className="menu-text">Pages</span></a>
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
      <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><i className="fab fa-facebook-f" /></a>
      <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><i className="fab fa-twitter" /></a>
      <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><i className="fab fa-instagram" /></a>
      <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><i className="fab fa-youtube" /></a>
    </div>
    <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
</div>
{/* OffCanvas Search End */}
<div className="offcanvas-overlay" />
{/* Slider main container Start */}
<div className="home1-slider swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal">
  <div className="swiper-wrapper" style={{transitionDuration: '750ms'}}><div className="home1-slide-item swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-autoplay={5000} data-bg-image="assets/images/slider/home1/slide-3.webp" style={{backgroundImage: 'url("assets/images/slider/home1/slide-3.webp")', width: 1905, opacity: 1, transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '750ms'}} data-swiper-slide-index={2}>
      <div className="home1-slide3-content">
        <h2 className="title">Affectious gifts</h2>
        <h3 className="sub-title">
          <img className="left-icon " src="/assets/images/slide-2-2.webp" alt="Slide Icon" />
          For friends &amp; family
          <img className="right-icon " src="/assets/images/slide-2-3.webp" alt="Slide Icon" />
        </h3>
        <div className="link"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html">shop now</a></div>
      </div>
    </div>
    <div className="home1-slide-item swiper-slide swiper-slide-duplicate-active" data-swiper-autoplay={5000} data-bg-image="assets/images/slider/home1/slide-1.webp" style={{backgroundImage: 'url("assets/images/slider/home1/slide-1.webp")', width: 1905, opacity: 1, transform: 'translate3d(-1905px, 0px, 0px)', transitionDuration: '750ms'}} data-swiper-slide-index={0}>
      <div className="home1-slide1-content">
        <span className="bg" />
        <span className="slide-border" />
        <span className="icon"><img src="/assets/images/slide-1-1.webp" alt="Slide Icon" /></span>
        <h2 className="title">Handicraft Shop</h2>
        <h3 className="sub-title">Just for you</h3>
        <div className="link"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html">shop now</a></div>
      </div>
    </div>
    <div className="home1-slide-item swiper-slide" data-swiper-autoplay={5000} data-bg-image="assets/images/slider/home1/slide-2.webp" style={{backgroundImage: 'url("assets/images/slider/home1/slide-2.webp")', width: 1905, opacity: 1, transform: 'translate3d(-3810px, 0px, 0px)', transitionDuration: '750ms'}} data-swiper-slide-index={1}>
      <div className="home1-slide2-content">
        <span className="bg" data-bg-image="assets/images/slider/home1/slide-2-1.webp" style={{backgroundImage: 'url("assets/images/slider/home1/slide-2-1.webp")'}} />
        <span className="slide-border" />
        <span className="icon">
          <img src="/assets/images/slide-2-2.webp" alt="Slide Icon" />
          <img src="/assets/images/slide-2-3.webp" alt="Slide Icon" />
        </span>
        <h2 className="title">Newly arrived</h2>
        <h3 className="sub-title">Sale up to <br />10%</h3>
        <div className="link"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html">shop now</a></div>
      </div>
    </div>
    <div className="home1-slide-item swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-autoplay={5000} data-bg-image="assets/images/slider/home1/slide-3.webp" style={{backgroundImage: 'url("assets/images/slider/home1/slide-3.webp")', width: 1905, opacity: 1, transform: 'translate3d(-5715px, 0px, 0px)', transitionDuration: '750ms'}} data-swiper-slide-index={2}>
      <div className="home1-slide3-content">
        <h2 className="title">Affectious gifts</h2>
        <h3 className="sub-title">
          <img className="left-icon " src="/assets/images/slide-2-2.webp" alt="Slide Icon" />
          For friends &amp; family
          <img className="right-icon " src="/assets/images/slide-2-3.webp" alt="Slide Icon" />
        </h3>
        <div className="link"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html">shop now</a></div>
      </div>
    </div>
    <div className="home1-slide-item swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-autoplay={5000} data-bg-image="assets/images/slider/home1/slide-1.webp" style={{backgroundImage: 'url("assets/images/slider/home1/slide-1.webp")', width: 1905, opacity: 1, transform: 'translate3d(-7620px, 0px, 0px)', transitionDuration: '750ms'}} data-swiper-slide-index={0}>
      <div className="home1-slide1-content">
        <span className="bg" />
        <span className="slide-border" />
        <span className="icon"><img src="/assets/images/slide-1-1.webp" alt="Slide Icon" /></span>
        <h2 className="title">Handicraft Shop</h2>
        <h3 className="sub-title">Just for you</h3>
        <div className="link"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html">shop now</a></div>
      </div>
    </div></div>
  <div className="home1-slider-prev swiper-button-prev" tabIndex={0} role="button" aria-label="Previous slide"><i className="ti-angle-left" /></div>
  <div className="home1-slider-next swiper-button-next" tabIndex={0} role="button" aria-label="Next slide"><i className="ti-angle-right" /></div>
  <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
{/* Slider main container End */}
{/* Sale Banner Section Start */}
<div className="section section-padding">
  <div className="container">
    {/* Section Title Start */}
    <div className="section-title text-center">
      <h3 className="sub-title">Just for you</h3>
      <h2 className="title title-icon-both">Making &amp; crafting</h2>
    </div>
    {/* Section Title End */}
    <div className="row learts-mb-n40">
      <div className="col-lg-5 col-md-6 col-12 me-auto learts-mb-40">
        <div className="sale-banner1" data-bg-image="assets/images/banner/sale/sale-banner1-1.webp" style={{backgroundImage: 'url("assets/images/banner/sale/sale-banner1-1.webp")'}}>
          <div className="inner">
            <img src="/assets/images/sale-banner1-1.1.webp" alt="Sale Banner Icon" />
            <span className="title">Spring sale</span>
            <h2 className="sale-percent">
              <span className="number">40</span> % <br /> off
            </h2>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="link">shop now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-12 learts-mb-40">
        <div className="sale-banner2">
          <div className="inner">
            <div className="image"><img src="/assets/images/sale-banner2-1.webp" alt /></div>
            <div className="content row justify-content-between mb-n3">
              <div className="col-auto mb-3">
                <h2 className="sale-percent">10% off</h2>
                <span className="text">YOUR NEXT PURCHASE</span>
              </div>
              <div className="col-auto mb-3">
                <a className="btn btn-hover-dark" href="https://html-demo-orcin.vercel.app/premium/learts/shop.html">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Sale Banner Section End */}
{/* Category Banner Section Start */}
<div className="section section-fluid section-padding pt-0">
  <div className="container">
    <div className="category-banner1-carousel slick-initialized slick-slider"><button className="slick-prev slick-arrow" style={{}}><i className="fas fa-long-arrow-alt-left" /></button><div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 7787, transform: 'translate3d(-1797px, 0px, 0px)'}}><div className="slick-slide slick-cloned" data-slick-index={-3} aria-hidden="true" style={{width: 599}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                <div className="category-banner1">
                  <div className="inner">
                    <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="image" tabIndex={-1}><img src="/assets/images/banner-s1-3.webp" alt /></a>
                    <div className="content">
                      <h3 className="title">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" tabIndex={-1}>Kids &amp; Babies</a>
                        <span className="number">6</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-cloned" data-slick-index={-2} aria-hidden="true" style={{width: 599}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                <div className="category-banner1">
                  <div className="inner">
                    <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="image" tabIndex={-1}><img src="/assets/images/banner-s1-4.webp" alt /></a>
                    <div className="content">
                      <h3 className="title">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" tabIndex={-1}>Kitchen</a>
                        <span className="number">15</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" style={{width: 599}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                <div className="category-banner1">
                  <div className="inner">
                    <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="image" tabIndex={-1}><img src="/assets/images/banner-s1-5.webp" alt /></a>
                    <div className="content">
                      <h3 className="title">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" tabIndex={-1}>Kniting &amp; Sewing</a>
                        <span className="number">4</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{width: 599}}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                <div className="category-banner1">
                  <div className="inner">
                    <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="image" tabIndex={0}><img src="/assets/images/banner-s1-1.webp" alt /></a>
                    <div className="content">
                      <h3 className="title">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" tabIndex={0}>Gift ideas</a>
                        <span className="number">16</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{width: 599}}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                <div className="category-banner1">
                  <div className="inner">
                    <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="image" tabIndex={0}><img src="/assets/images/banner-s1-2.webp" alt /></a>
                    <div className="content">
                      <h3 className="title">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" tabIndex={0}>Home Decor</a>
                        <span className="number">16</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{width: 599}}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                <div className="category-banner1">
                  <div className="inner">
                    <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="image" tabIndex={0}><img src="/assets/images/banner-s1-3.webp" alt /></a>
                    <div className="content">
                      <h3 className="title">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" tabIndex={0}>Kids &amp; Babies</a>
                        <span className="number">6</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div></div></div><div className="slick-slide" data-slick-index={3} aria-hidden="true" style={{width: 599}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                <div className="category-banner1">
                  <div className="inner">
                    <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="image" tabIndex={-1}><img src="/assets/images/banner-s1-4.webp" alt /></a>
                    <div className="content">
                      <h3 className="title">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" tabIndex={-1}>Kitchen</a>
                        <span className="number">15</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div></div></div><div className="slick-slide" data-slick-index={4} aria-hidden="true" style={{width: 599}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                <div className="category-banner1">
                  <div className="inner">
                    <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="image" tabIndex={-1}><img src="/assets/images/banner-s1-5.webp" alt /></a>
                    <div className="content">
                      <h3 className="title">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" tabIndex={-1}>Kniting &amp; Sewing</a>
                        <span className="number">4</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-cloned" data-slick-index={5} aria-hidden="true" style={{width: 599}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                <div className="category-banner1">
                  <div className="inner">
                    <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="image" tabIndex={-1}><img src="/assets/images/banner-s1-1.webp" alt /></a>
                    <div className="content">
                      <h3 className="title">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" tabIndex={-1}>Gift ideas</a>
                        <span className="number">16</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-cloned" data-slick-index={6} aria-hidden="true" style={{width: 599}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                <div className="category-banner1">
                  <div className="inner">
                    <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="image" tabIndex={-1}><img src="/assets/images/banner-s1-2.webp" alt /></a>
                    <div className="content">
                      <h3 className="title">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" tabIndex={-1}>Home Decor</a>
                        <span className="number">16</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-cloned" data-slick-index={7} aria-hidden="true" style={{width: 599}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                <div className="category-banner1">
                  <div className="inner">
                    <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="image" tabIndex={-1}><img src="/assets/images/banner-s1-3.webp" alt /></a>
                    <div className="content">
                      <h3 className="title">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" tabIndex={-1}>Kids &amp; Babies</a>
                        <span className="number">6</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-cloned" data-slick-index={8} aria-hidden="true" style={{width: 599}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                <div className="category-banner1">
                  <div className="inner">
                    <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="image" tabIndex={-1}><img src="/assets/images/banner-s1-4.webp" alt /></a>
                    <div className="content">
                      <h3 className="title">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" tabIndex={-1}>Kitchen</a>
                        <span className="number">15</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-cloned" data-slick-index={9} aria-hidden="true" style={{width: 599}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                <div className="category-banner1">
                  <div className="inner">
                    <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" className="image" tabIndex={-1}><img src="/assets/images/banner-s1-5.webp" alt /></a>
                    <div className="content">
                      <h3 className="title">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html" tabIndex={-1}>Kniting &amp; Sewing</a>
                        <span className="number">4</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div></div></div></div></div><button className="slick-next slick-arrow" style={{}}><i className="fas fa-long-arrow-alt-right" /></button></div>
  </div>
</div>
{/* Category Banner Section End */}
{/* Product Section Start */}
<div className="section section-fluid section-padding pt-0">
  <div className="container">
    {/* Section Title Start */}
    <div className="section-title text-center">
      <h3 className="sub-title">Shop now</h3>
      <h2 className="title title-icon-both">Shop our best-sellers</h2>
    </div>
    {/* Section Title End */}
    {/* Products Start */}
    <div className="products row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
      <div className="col">
        <div className="product">
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
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
          <div className="product-thumb">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
              <img src="/assets/images/product-2.webp" alt="Product Image" />
              <img className="image-hover " src="/assets/images/product-2-hover.webp" alt="Product Image" />
            </a>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Motorized Tricycle</a></h6>
            <span className="price">
              $35.00
            </span>
            <div className="product-buttons">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
          <div className="product-thumb">
            <span className="product-badges">
              <span className="hot">hot</span>
            </span>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
              <img src="/assets/images/product-3.webp" alt="Product Image" />
              <img className="image-hover " src="/assets/images/product-3-hover.webp" alt="Product Image" />
            </a>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Walnut Cutting Board</a></h6>
            <span className="price">
              $100.00
            </span>
            <div className="product-buttons">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
          <div className="product-thumb">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
              <span className="product-badges">
                <span className="onsale">-27%</span>
              </span>
              <img src="/assets/images/product-4.webp" alt="Product Image" />
              <img className="image-hover " src="/assets/images/product-4-hover.webp" alt="Product Image" />
            </a>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Pizza Plate Tray</a></h6>
            <span className="price">
              <span className="old">$30.00</span>
              <span className="new">$22.00</span>
            </span>
            <div className="product-buttons">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
          <div className="product-thumb">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
              <img src="/assets/images/product-5.webp" alt="Product Image" />
              <img className="image-hover " src="/assets/images/product-5-hover.webp" alt="Product Image" />
            </a>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            <div className="product-options">
              <ul className="colors">
                <li style={{backgroundColor: '#c2c2c2'}}>color one</li>
                <li style={{backgroundColor: '#374140'}}>color two</li>
                <li style={{backgroundColor: '#8ea1b2'}}>color three</li>
              </ul>
              <ul className="sizes">
                <li>Large</li>
                <li>Medium</li>
                <li>Small</li>
              </ul>
            </div>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Minimalist Ceramic Pot</a></h6>
            <span className="price">
              $120.00
            </span>
            <div className="product-buttons">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
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
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
          <div className="product-thumb">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
              <span className="product-badges">
                <span className="hot">hot</span>
              </span>
              <img src="/assets/images/product-7.webp" alt="Product Image" />
              <img className="image-hover " src="/assets/images/product-7-hover.webp" alt="Product Image" />
            </a>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Lucky Wooden Elephant</a></h6>
            <span className="price">
              $35.00
            </span>
            <div className="product-buttons">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
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
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
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
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
          <div className="product-thumb">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
              <img src="/assets/images/product-10.webp" alt="Product Image" />
              <img className="image-hover " src="/assets/images/product-10-hover.webp" alt="Product Image" />
            </a>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Fish Cut Out Set</a></h6>
            <span className="price">
              $9.00
            </span>
            <div className="product-buttons">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
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
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
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
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
          <div className="product-thumb">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
              <img src="/assets/images/product-13.webp" alt="Product Image" />
              <img className="image-hover " src="/assets/images/product-13-hover.webp" alt="Product Image" />
            </a>
            <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart" /></a>
            <div className="product-options">
              <ul className="colors">
                <li style={{backgroundColor: '#ffffff'}}>color one</li>
                <li style={{backgroundColor: '#01796f'}}>color two</li>
              </ul>
            </div>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Kernel Popcorn Bowl</a></h6>
            <span className="price">
              $25.00
            </span>
            <div className="product-buttons">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
          <div className="product-thumb">
            <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image">
              <span className="product-badges">
                <span className="outofstock"><i className="far fa-frown" /></span>
              </span>
              <img src="/assets/images/product-14.webp" alt="Product Image" />
              <img className="image-hover " src="/assets/images/product-14-hover.webp" alt="Product Image" />
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
            <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html">Abstract Folded Pots</a></h6>
            <span className="price">
              $50.00 - $55.00
            </span>
            <div className="product-buttons">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="product">
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
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Products End */}
  </div>
</div>
{/* Product Section End */}
<div className="footer1-section section section-padding">
  <div className="container">
    <div className="row text-center row-cols-1">
      <div className="footer1-logo col text-center">
        <img src="/assets/images/logo.webp" alt />
      </div>
      <div className="footer1-menu col">
        <ul className="widget-menu justify-content-center">
          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">About us</a></li>
          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">Store location</a></li>
          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">Contact</a></li>
          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">Support</a></li>
          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">Policy</a></li>
          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">FAQs</a></li>
        </ul>
      </div>
      <div className="footer1-subscribe d-flex flex-column col">
        <form id="mc-form" className="mc-form widget-subscibe" noValidate="true">
          <input id="mc-email" autoComplete="off" type="email" placeholder="Enter your e-mail address" name="EMAIL" />
          <button id="mc-submit" className="btn btn-dark">subscibe</button>
        </form>
        {/* mailchimp-alerts Start */}
        <div className="mailchimp-alerts text-centre">
          <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
          <div className="mailchimp-success text-success" />{/* mailchimp-success end */}
          <div className="mailchimp-error text-danger" />{/* mailchimp-error end */}
        </div>{/* mailchimp-alerts end */}
      </div>
      <div className="footer1-social col">
        <ul className="widget-social justify-content-center">
          <li className="hintT-top" data-hint="Twitter"> <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a></li>
          <li className="hintT-top" data-hint="Facebook"> <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a></li>
          <li className="hintT-top" data-hint="Instagram"> <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a></li>
          <li className="hintT-top" data-hint="Youtube"> <a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a></li>
        </ul>
      </div>
      <div className="footer1-copyright col">
        <p className="copyright">© 2023 learts. All Rights Reserved | <strong>(+00) 123 567990</strong> | <a href="mailto:contact@learts.com">contact@learts.com</a></p>
      </div>
    </div>
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
                <img src="/assets/images/product-2(1).webp" alt />
              </div>
              <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-3.webp">
                <img src="/assets/images/product-3(1).webp" alt />
              </div>
              <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-4.webp">
                <img src="/assets/images/product-4(1).webp" alt />
              </div>
            </div>
          </div>
        </div>
        {/* Product Images End */}
        {/* Product Summery Start */}
        <div className="col-lg-6 col-12 overflow-hidden position-relative learts-mb-30">
          <div className="product-summery customScroll ps ps--theme_default" data-ps-id="bd66452c-206c-a032-95b3-beaba34f655c">
            <div className="product-ratings">
              <span className="star-rating">
                <span className="rating-active" style={{width: '100%'}}>ratings</span>
              </span>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#reviews" className="review-link">(<span className="count">3</span> customer reviews)</a>
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
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">Large</a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">Medium</a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">Small</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="label"><span>Color</span></td>
                    <td className="value">
                      <div className="product-colors">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" data-bg-color="#000000" style={{backgroundColor: 'rgb(0, 0, 0)'}} />
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" data-bg-color="#ffffff" style={{backgroundColor: 'rgb(255, 255, 255)'}} />
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
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="btn btn-icon btn-outline-body btn-hover-dark"><i className="far fa-heart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="btn btn-dark btn-outline-hover-dark"><i className="fas fa-shopping-cart" /> Add to Cart</a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#" className="btn btn-icon btn-outline-body btn-hover-dark"><i className="fas fa-random" /></a>
            </div>
            <div className="product-brands">
              <span className="title">Brands</span>
              <div className="brands">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><img src="/assets/images/brand-3.webp" alt /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><img src="/assets/images/brand-8.webp" alt /></a>
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
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">Kitchen</a></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="label"><span>Tags</span></td>
                    <td className="value">
                      <ul className="product-tags">
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">handmade</a></li>
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">learts</a></li>
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">mug</a></li>
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">product</a></li>
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#">learts</a></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="label"><span>Share on</span></td>
                    <td className="va">
                      <div className="product-share">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><i className="fab fa-facebook-f" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><i className="fab fa-twitter" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><i className="fab fa-google-plus-g" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><i className="fab fa-pinterest" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/index.html#"><i className="far fa-envelope" /></a>
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
export default Home;