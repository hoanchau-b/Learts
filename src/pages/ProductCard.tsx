import type { PageName } from "../App";

const ProductCard = (_props: { onNavigate?: (page: PageName) => void }) => {
    return (
        <>
  {/* Page Title/Header Start */}
  <div className="page-title-section section" data-bg-image="assets/images/bg/page-title-1.webp" style={{backgroundImage: 'url("assets/images/bg/page-title-1.webp")'}}>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="page-title">
            <h1 className="title">Shop</h1>
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="https://html-demo-orcin.vercel.app/premium/learts/index.html">Home</a></li>
              <li className="breadcrumb-item"><a href="https://html-demo-orcin.vercel.app/premium/learts/shop.html">Products</a></li>
              <li className="breadcrumb-item active">Cleaning Dustpan &amp; Brush</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Page Title/Header End */}
  {/* Single Products Section Start */}
  <div className="section section-padding border-bottom">
    <div className="container">
      <div className="row learts-mb-n40">
        {/* Product Images Start */}
        <div className="col-lg-6 col-12 learts-mb-40">
          <div className="product-images">
            <button className="product-gallery-popup hintT-left" data-hint="Click to enlarge" data-images="[
                          {&quot;src&quot;: &quot;assets/images/product/single/1/product-zoom-1.webp&quot;, &quot;w&quot;: 700, &quot;h&quot;: 1100},
                          {&quot;src&quot;: &quot;assets/images/product/single/1/product-zoom-2.webp&quot;, &quot;w&quot;: 700, &quot;h&quot;: 1100},
                          {&quot;src&quot;: &quot;assets/images/product/single/1/product-zoom-3.webp&quot;, &quot;w&quot;: 700, &quot;h&quot;: 1100},
                          {&quot;src&quot;: &quot;assets/images/product/single/1/product-zoom-4.webp&quot;, &quot;w&quot;: 700, &quot;h&quot;: 1100}
                      ]"><i className="fas fa-expand" /></button>
            <a href="https://www.youtube.com/watch?v=1jSsy7DtYgc" className="product-video-popup video-popup hintT-left" data-hint="Click to see video"><i className="fas fa-play" /></a>
            <div className="product-gallery-slider slick-initialized slick-slider slick-dotted"><button className="slick-prev slick-arrow" style={{}}><i className="ti-angle-left" /></button><div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 5400, transform: 'translate3d(-600px, 0px, 0px)'}}><div className="slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" style={{width: 600}} tabIndex={-1}><div><div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-4.webp" style={{width: '100%', display: 'inline-block'}}>
                        <img src="/assets/images/product-4.webp" alt="" />
                      </div></div></div><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{width: 600}} role="tabpanel" id="slick-slide10"><div><div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-1.webp" style={{width: '100%', display: 'inline-block'}}>
                        <img src="/assets/images/product-1.webp" alt="" />
                      </div></div></div><div className="slick-slide" data-slick-index={1} aria-hidden="true" style={{width: 600}} tabIndex={-1} role="tabpanel" id="slick-slide11"><div><div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-2.webp" style={{width: '100%', display: 'inline-block'}}>
                        <img src="/assets/images/product-2.webp" alt="" />
                      </div></div></div><div className="slick-slide" data-slick-index={2} aria-hidden="true" style={{width: 600}} tabIndex={-1} role="tabpanel" id="slick-slide12"><div><div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-3.webp" style={{width: '100%', display: 'inline-block'}}>
                        <img src="/assets/images/product-3.webp" alt="" />
                      </div></div></div><div className="slick-slide" data-slick-index={3} aria-hidden="true" style={{width: 600}} tabIndex={-1} role="tabpanel" id="slick-slide13"><div><div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-4.webp" style={{width: '100%', display: 'inline-block'}}>
                        <img src="/assets/images/product-4.webp" alt="" />
                      </div></div></div><div className="slick-slide slick-cloned" data-slick-index={4} aria-hidden="true" style={{width: 600}} tabIndex={-1}><div><div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-1.webp" style={{width: '100%', display: 'inline-block'}}>
                        <img src="/assets/images/product-1.webp" alt="" />
                      </div></div></div><div className="slick-slide slick-cloned" data-slick-index={5} aria-hidden="true" style={{width: 600}} tabIndex={-1}><div><div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-2.webp" style={{width: '100%', display: 'inline-block'}}>
                        <img src="/assets/images/product-2.webp" alt="" />
                      </div></div></div><div className="slick-slide slick-cloned" data-slick-index={6} aria-hidden="true" style={{width: 600}} tabIndex={-1}><div><div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-3.webp" style={{width: '100%', display: 'inline-block'}}>
                        <img src="/assets/images/product-3.webp" alt="" />
                      </div></div></div><div className="slick-slide slick-cloned" data-slick-index={7} aria-hidden="true" style={{width: 600}} tabIndex={-1}><div><div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-4.webp" style={{width: '100%', display: 'inline-block'}}>
                        <img src="/assets/images/product-4.webp" alt="" />
                      </div></div></div></div></div><button className="slick-next slick-arrow" style={{}}><i className="ti-angle-right" /></button><ul className="slick-dots" style={{}} role="tablist"><li className="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control10" aria-controls="slick-slide10" aria-label="1 of 4" tabIndex={0} aria-selected="true">1</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control11" aria-controls="slick-slide11" aria-label="2 of 4" tabIndex={-1}>2</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control12" aria-controls="slick-slide12" aria-label="3 of 4" tabIndex={-1}>3</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control13" aria-controls="slick-slide13" aria-label="4 of 4" tabIndex={-1}>4</button></li></ul></div>
            <div className="product-thumb-slider slick-initialized slick-slider"><div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 600, transform: 'translate3d(0px, 0px, 0px)'}}><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{width: 150}}><div><div className="item" style={{width: '100%', display: 'inline-block'}}>
                        <img src="/assets/images/product-thumb-1.webp" alt="" />
                      </div></div></div><div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{width: 150}}><div><div className="item" style={{width: '100%', display: 'inline-block'}}>
                        <img src="/assets/images/product-thumb-2.webp" alt="" />
                      </div></div></div><div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{width: 150}}><div><div className="item" style={{width: '100%', display: 'inline-block'}}>
                        <img src="/assets/images/product-thumb-3.webp" alt="" />
                      </div></div></div><div className="slick-slide slick-active" data-slick-index={3} aria-hidden="false" style={{width: 150}}><div><div className="item" style={{width: '100%', display: 'inline-block'}}>
                        <img src="/assets/images/product-thumb-4.webp" alt="" />
                      </div></div></div></div></div></div>
          </div>
        </div>
        {/* Product Images End */}
        {/* Product Summery Start */}
        <div className="col-lg-6 col-12 learts-mb-40">
          <div className="product-summery">
            <div className="product-nav">
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><i className="fas fa-long-arrow-alt-left" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><i className="fas fa-long-arrow-alt-right" /></a>
            </div>
            <div className="product-ratings">
              <span className="star-rating">
                <span className="rating-active" style={{width: '100%'}}>ratings</span>
              </span>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#reviews" className="review-link">(<span className="count">3</span> customer reviews)</a>
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
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">Large</a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">Medium</a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">Small</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="label"><span>Color</span></td>
                    <td className="value">
                      <div className="product-colors">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" data-bg-color="#000000" style={{backgroundColor: 'rgb(0, 0, 0)'}} />
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" data-bg-color="#ffffff" style={{backgroundColor: 'rgb(255, 255, 255)'}} />
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
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="btn btn-icon btn-outline-body btn-hover-dark hintT-top" data-hint="Add to Wishlist"><i className="far fa-heart" /></a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="btn btn-dark btn-outline-hover-dark"><i className="fas fa-shopping-cart" /> Add to Cart</a>
              <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="btn btn-icon btn-outline-body btn-hover-dark hintT-top" data-hint="Compare"><i className="fas fa-random" /></a>
            </div>
            <div className="product-brands">
              <span className="title">Brands</span>
              <div className="brands">
                <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><img src="/assets/images/brand-3.webp" alt="" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><img src="/assets/images/brand-8.webp" alt="" /></a>
              </div>
            </div>
            <div className="product-meta">
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
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">Kitchen</a></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="label"><span>Tags</span></td>
                    <td className="value">
                      <ul className="product-tags">
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">handmade</a></li>
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">learts</a></li>
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">mug</a></li>
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">product</a></li>
                        <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">learts</a></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="label"><span>Share on</span></td>
                    <td className="va">
                      <div className="product-share">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><i className="fab fa-facebook-f" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><i className="fab fa-twitter" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><i className="fab fa-google-plus-g" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><i className="fab fa-pinterest" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><i className="far fa-envelope" /></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Product Summery End */}
      </div>
    </div>
  </div>
  {/* Single Products Section End */}
  {/* Single Products Infomation Section Start */}
  <div className="section section-padding border-bottom">
    <div className="container">
      <ul className="nav product-info-tab-list" role="tablist">
        <li><a className="active" data-bs-toggle="tab" href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#tab-description" aria-selected="true" role="tab">Description</a></li>
        <li><a data-bs-toggle="tab" href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#tab-pwb_tab" aria-selected="false" tabIndex={-1} role="tab">Brand</a></li>
        <li><a data-bs-toggle="tab" href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#tab-additional_information" aria-selected="false" tabIndex={-1} role="tab">Additional information</a></li>
        <li><a data-bs-toggle="tab" href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#tab-reviews" aria-selected="false" tabIndex={-1} role="tab">Reviews (3)</a></li>
      </ul>
      <div className="tab-content product-infor-tab-content">
        <div className="tab-pane fade show active" id="tab-description" role="tabpanel">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <p>Easy clip-on handle – Hold the brush and dustpan together for storage; the dustpan edge is serrated to allow easy scraping off the hair without entanglement. High-quality bristles – no burr damage, no scratches, thick and durable, comfortable to remove dust and smaller particles. Rubber lip – The rubber lip on the front of the dustpan helps to remove all dust at once.</p>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tab-pwb_tab" role="tabpanel">
          <div className="row learts-mb-n30">
            <div className="col-12 learts-mb-30">
              <div className="row learts-mb-n10">
                <div className="col-lg-2 col-md-3 col-12 learts-mb-10"><img src="/assets/images/brand-3.webp" alt="" /></div>
                <div className="col learts-mb-10">
                  <p>We’ve worked with numerous industries and famous fashion brands around the world. We have also created tremendous impacts on fashion manufacturing and online sales. When we partner with an eCommerce agency, we connect every activity to set the trend and win customers’ trust. We make sure our customers are always happy with our products.</p>
                </div>
              </div>
            </div>
            <div className="col-12 learts-mb-30">
              <div className="row learts-mb-n10">
                <div className="col-lg-2 col-md-3 col-12 learts-mb-10"><img src="/assets/images/brand-8.webp" alt="" /></div>
                <div className="col learts-mb-10">
                  <p>Prior to Houdini, there have been many clothing brands that achieved such a roaring success. However, there’s no other brand that can obtain such a precious position like us. We have successfully built our site to make more people know about our products as well as our motto. We’ve been the inspiration for many other small and medium-sized businesses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tab-additional_information" role="tabpanel">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-12 mx-auto">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Size</td>
                      <td>Large, Medium, Small</td>
                    </tr>
                    <tr>
                      <td>Color</td>
                      <td>Black, White</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tab-reviews" role="tabpanel">
          <div className="product-review-wrapper">
            <span className="title">3 reviews for Cleaning Dustpan &amp; Brush</span>
            <ul className="product-review-list">
              <li>
                <div className="product-review">
                  <div className="thumb"><img src="/assets/images/review-1.webp" alt="" /></div>
                  <div className="content">
                    <div className="ratings">
                      <span className="star-rating">
                        <span className="rating-active" style={{width: '100%'}}>ratings</span>
                      </span>
                    </div>
                    <div className="meta">
                      <h5 className="title">Edna Watson</h5>
                      <span className="date">November 27, 2020</span>
                    </div>
                    <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="product-review">
                  <div className="thumb"><img src="/assets/images/review-2.webp" alt="" /></div>
                  <div className="content">
                    <div className="ratings">
                      <span className="star-rating">
                        <span className="rating-active" style={{width: '80%'}}>ratings</span>
                      </span>
                    </div>
                    <div className="meta">
                      <h5 className="title">Scott James</h5>
                      <span className="date">November 27, 2020</span>
                    </div>
                    <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="product-review">
                  <div className="thumb"><img src="/assets/images/review-3.webp" alt="" /></div>
                  <div className="content">
                    <div className="ratings">
                      <span className="star-rating">
                        <span className="rating-active" style={{width: '60%'}}>ratings</span>
                      </span>
                    </div>
                    <div className="meta">
                      <h5 className="title">Owen Christ</h5>
                      <span className="date">November 27, 2020</span>
                    </div>
                    <p>Good Product!</p>
                  </div>
                </div>
              </li>
            </ul>
            <span className="title">Add a review</span>
            <div className="review-form">
              <p className="note">Your email address will not be published. Required fields are marked *</p>
              <form action="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">
                <div className="row learts-mb-n30">
                  <div className="col-md-6 col-12 learts-mb-30"><input type="text" placeholder="Name *" /></div>
                  <div className="col-md-6 col-12 learts-mb-30"><input type="email" placeholder="Email *" /></div>
                  <div className="col-12 learts-mb-10">
                    <div className="form-rating">
                      <span className="title">Your rating</span>
                      <span className="rating"><span className="star" /></span>
                    </div>
                  </div>
                  <div className="col-12 learts-mb-30"><textarea placeholder="Your Review *" defaultValue={""} /></div>
                  <div className="col-12 text-center learts-mb-30"><button className="btn btn-dark btn-outline-hover-dark">Submit</button></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Single Products Infomation Section End */}
  {/* Recommended Products Section Start */}
  <div className="section section-padding">
    <div className="container">
      {/* Section Title Start */}
      <div className="section-title2 text-center">
        <h2 className="title">You Might Also Like</h2>
      </div>
      {/* Section Title End */}
      {/* Products Start */}
      <div className="product-carousel slick-initialized slick-slider"><button className="slick-prev slick-arrow" style={{}}><i className="ti-angle-left" /></button><div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 6000, transform: 'translate3d(-1200px, 0px, 0px)'}}><div className="slick-slide slick-cloned" data-slick-index={-4} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <img src="/assets/images/product-5.webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-5-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
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
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Minimalist Ceramic Pot</a></h6>
                      <span className="price">
                        $120.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={-3} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <img src="/assets/images/product-6.webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-6-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Clear Silicate Teapot</a></h6>
                      <span className="price">
                        $140.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={-2} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <span className="product-badges">
                          <span className="hot">hot</span>
                        </span>
                        <img src="/assets/images/product-7.webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-7-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Lucky Wooden Elephant</a></h6>
                      <span className="price">
                        $35.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <span className="product-badges">
                          <span className="outofstock"><i className="far fa-frown" /></span>
                          <span className="hot">hot</span>
                        </span>
                        <img src="/assets/images/product-8.webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-8-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
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
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Decorative Christmas Fox</a></h6>
                      <span className="price">
                        $50.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{width: 300}}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={0}>
                        <span className="product-badges">
                          <span className="onsale">-13%</span>
                        </span>
                        <img src="/assets/images/product-1(1).webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-1-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={0}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={0}>Boho Beard Mug</a></h6>
                      <span className="price">
                        <span className="old">$45.00</span>
                        <span className="new">$39.00</span>
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={0}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={0}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={0}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{width: 300}}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={0}>
                        <img src="/assets/images/product-2(1).webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-2-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={0}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={0}>Motorized Tricycle</a></h6>
                      <span className="price">
                        $35.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={0}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={0}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={0}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{width: 300}}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <span className="product-badges">
                        <span className="hot">hot</span>
                      </span>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={0}>
                        <img src="/assets/images/product-3(1).webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-3-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={0}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={0}>Walnut Cutting Board</a></h6>
                      <span className="price">
                        $100.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={0}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={0}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={0}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-active" data-slick-index={3} aria-hidden="false" style={{width: 300}}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={0}>
                        <span className="product-badges">
                          <span className="onsale">-27%</span>
                        </span>
                        <img src="/assets/images/product-4(1).webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-4-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={0}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={0}>Pizza Plate Tray</a></h6>
                      <span className="price">
                        <span className="old">$30.00</span>
                        <span className="new">$22.00</span>
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={0}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={0}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={0}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide" data-slick-index={4} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <img src="/assets/images/product-5.webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-5-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
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
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Minimalist Ceramic Pot</a></h6>
                      <span className="price">
                        $120.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide" data-slick-index={5} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <img src="/assets/images/product-6.webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-6-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Clear Silicate Teapot</a></h6>
                      <span className="price">
                        $140.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide" data-slick-index={6} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <span className="product-badges">
                          <span className="hot">hot</span>
                        </span>
                        <img src="/assets/images/product-7.webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-7-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Lucky Wooden Elephant</a></h6>
                      <span className="price">
                        $35.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide" data-slick-index={7} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <span className="product-badges">
                          <span className="outofstock"><i className="far fa-frown" /></span>
                          <span className="hot">hot</span>
                        </span>
                        <img src="/assets/images/product-8.webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-8-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
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
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Decorative Christmas Fox</a></h6>
                      <span className="price">
                        $50.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={8} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <span className="product-badges">
                          <span className="onsale">-13%</span>
                        </span>
                        <img src="/assets/images/product-1(1).webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-1-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Boho Beard Mug</a></h6>
                      <span className="price">
                        <span className="old">$45.00</span>
                        <span className="new">$39.00</span>
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={9} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <img src="/assets/images/product-2(1).webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-2-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Motorized Tricycle</a></h6>
                      <span className="price">
                        $35.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={10} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <span className="product-badges">
                        <span className="hot">hot</span>
                      </span>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <img src="/assets/images/product-3(1).webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-3-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Walnut Cutting Board</a></h6>
                      <span className="price">
                        $100.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={11} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <span className="product-badges">
                          <span className="onsale">-27%</span>
                        </span>
                        <img src="/assets/images/product-4(1).webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-4-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Pizza Plate Tray</a></h6>
                      <span className="price">
                        <span className="old">$30.00</span>
                        <span className="new">$22.00</span>
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={12} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <img src="/assets/images/product-5.webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-5-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
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
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Minimalist Ceramic Pot</a></h6>
                      <span className="price">
                        $120.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={13} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <img src="/assets/images/product-6.webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-6-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Clear Silicate Teapot</a></h6>
                      <span className="price">
                        $140.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={14} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <span className="product-badges">
                          <span className="hot">hot</span>
                        </span>
                        <img src="/assets/images/product-7.webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-7-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
                    </div>
                    <div className="product-info">
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Lucky Wooden Elephant</a></h6>
                      <span className="price">
                        $35.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={15} aria-hidden="true" style={{width: 300}} tabIndex={-1}><div><div className="col" style={{width: '100%', display: 'inline-block'}}>
                  <div className="product">
                    <div className="product-thumb">
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" className="image" tabIndex={-1}>
                        <span className="product-badges">
                          <span className="outofstock"><i className="far fa-frown" /></span>
                          <span className="hot">hot</span>
                        </span>
                        <img src="/assets/images/product-8.webp" alt="Product Image" />
                        <img className="image-hover " src="/assets/images/product-8-hover.webp" alt="Product Image" />
                      </a>
                      <a href="https://html-demo-orcin.vercel.app/premium/learts/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist" tabIndex={-1}><i className="far fa-heart" /></a>
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
                      <h6 className="title"><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html" tabIndex={-1}>Decorative Christmas Fox</a></h6>
                      <span className="price">
                        $50.00
                      </span>
                      <div className="product-buttons">
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View" tabIndex={-1}><i className="fas fa-search" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Add to Cart" tabIndex={-1}><i className="fas fa-shopping-cart" /></a>
                        <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="product-button hintT-top" data-hint="Compare" tabIndex={-1}><i className="fas fa-random" /></a>
                      </div>
                    </div>
                  </div>
                </div></div></div></div></div><button className="slick-next slick-arrow" style={{}}><i className="ti-angle-right" /></button></div>
      {/* Products End */}
    </div>
  </div>
  {/* Recommended Products Section End */}
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
                  <img src="/assets/images/product-1.webp" alt="" />
                </div>
                <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-2.webp">
                  <img src="/assets/images/product-2.webp" alt="" />
                </div>
                <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-3.webp">
                  <img src="/assets/images/product-3.webp" alt="" />
                </div>
                <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-4.webp">
                  <img src="/assets/images/product-4.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* Product Images End */}
          {/* Product Summery Start */}
          <div className="col-lg-6 col-12 overflow-hidden position-relative learts-mb-30">
            <div className="product-summery customScroll ps ps--theme_default" data-ps-id="d0ddb54f-7874-191e-1b48-3edb68887749">
              <div className="product-ratings">
                <span className="star-rating">
                  <span className="rating-active" style={{width: '100%'}}>ratings</span>
                </span>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#reviews" className="review-link">(<span className="count">3</span> customer reviews)</a>
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
                          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">Large</a>
                          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">Medium</a>
                          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">Small</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="label"><span>Color</span></td>
                      <td className="value">
                        <div className="product-colors">
                          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" data-bg-color="#000000" style={{backgroundColor: 'rgb(0, 0, 0)'}} />
                          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" data-bg-color="#ffffff" style={{backgroundColor: 'rgb(255, 255, 255)'}} />
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
                <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="btn btn-icon btn-outline-body btn-hover-dark"><i className="far fa-heart" /></a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="btn btn-dark btn-outline-hover-dark"><i className="fas fa-shopping-cart" /> Add to Cart</a>
                <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#" className="btn btn-icon btn-outline-body btn-hover-dark"><i className="fas fa-random" /></a>
              </div>
              <div className="product-brands">
                <span className="title">Brands</span>
                <div className="brands">
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><img src="/assets/images/brand-3.webp" alt="" /></a>
                  <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><img src="/assets/images/brand-8.webp" alt="" /></a>
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
                          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">Kitchen</a></li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="label"><span>Tags</span></td>
                      <td className="value">
                        <ul className="product-tags">
                          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">handmade</a></li>
                          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">learts</a></li>
                          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">mug</a></li>
                          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">product</a></li>
                          <li><a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#">learts</a></li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="label"><span>Share on</span></td>
                      <td className="va">
                        <div className="product-share">
                          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><i className="fab fa-facebook-f" /></a>
                          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><i className="fab fa-twitter" /></a>
                          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><i className="fab fa-google-plus-g" /></a>
                          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><i className="fab fa-pinterest" /></a>
                          <a href="https://html-demo-orcin.vercel.app/premium/learts/product-details.html#"><i className="far fa-envelope" /></a>
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
  {/* Root element of PhotoSwipe. Must have class pswp. */}
  <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
    {/* Background of PhotoSwipe. 
       It's a separate element as animating opacity is faster than rgba(). */}
    <div className="pswp__bg" />
    {/* Slides wrapper with overflow:hidden. */}
    <div className="pswp__scroll-wrap">
      {/* Container that holds slides. 
          PhotoSwipe keeps only 3 of them in the DOM to save memory.
          Don't modify these 3 pswp__item elements, data is added later on. */}
      <div className="pswp__container">
        <div className="pswp__item" />
        <div className="pswp__item" />
        <div className="pswp__item" />
      </div>
      {/* Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. */}
      <div className="pswp__ui pswp__ui--hidden">
        <div className="pswp__top-bar">
          {/*  Controls are self-explanatory. Order can be changed. */}
          <div className="pswp__counter" />
          <button className="pswp__button pswp__button--close" title="Close (Esc)" />
          <button className="pswp__button pswp__button--share" title="Share" />
          <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
          <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
          <div className="pswp__preloader">
            <div className="pswp__preloader__icn">
              <div className="pswp__preloader__cut">
                <div className="pswp__preloader__donut" />
              </div>
            </div>
          </div>
        </div>
        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
          <div className="pswp__share-tooltip" />
        </div>
        <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
        </button>
        <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
        </button>
        <div className="pswp__caption">
          <div className="pswp__caption__center" />
        </div>
      </div>
    </div>
  </div>
  </>
    );
};
export default ProductCard;
