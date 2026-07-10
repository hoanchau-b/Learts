import type { Product } from "../data/products";

interface ShopProductGridProps {
  products: Product[];
  onProductClick?: (productId: number) => void;
  onAddToCart?: (product: Product) => void;
}

const ShopProductGrid = ({ products, onProductClick, onAddToCart }: ShopProductGridProps) => {
  const handleClick = (e: React.MouseEvent, productId: number) => {
    const target = e.target as HTMLElement;
    const link = target.closest<HTMLAnchorElement>(".product .title a, .product .image");
    if (link) {
      e.preventDefault();
      onProductClick?.(productId);
    }
  };

  return (
    <div
      id="shop-products"
      className="products isotope-grid row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1"
    >
      {products.map((product) => (
        <div key={product.id} className="grid-item col">
          <div className="product">
            <div className="product-thumb">
              <a
                href={`/product/${product.id}`}
                className="image"
                onClick={(e) => handleClick(e, product.id)}
              >
                {product.badges && product.badges.length > 0 && (
                  <span className="product-badges">
                    {product.badges.includes("onsale") && (
                      <span className="onsale">
                        {product.oldPrice
                          ? `-${Math.round((1 - product.price / product.oldPrice) * 100)}%`
                          : "Sale"}
                      </span>
                    )}
                    {product.badges.includes("hot") && <span className="hot">hot</span>}
                    {product.badges.includes("outofstock") && (
                      <span className="outofstock">
                        <i className="far fa-frown" />
                      </span>
                    )}
                  </span>
                )}
                <img src={product.image} alt={product.title} />
                {product.imageHover && (
                  <img className="image-hover" src={product.imageHover} alt={product.title} />
                )}
              </a>
              <a href="#" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                <i className="far fa-heart" />
              </a>
              {(product.colors || product.sizes) && (
                <div className="product-options">
                  {product.colors && product.colors.length > 0 && (
                    <ul className="colors">
                      {product.colors.map((color) => (
                        <li key={color} style={{ backgroundColor: color }}>
                          {color}
                        </li>
                      ))}
                    </ul>
                  )}
                  {product.sizes && product.sizes.length > 0 && (
                    <ul className="sizes">
                      {product.sizes.map((size) => (
                        <li key={size}>{size}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
            <div className="product-info">
              <h6 className="title">
                <a
                  href={`/product/${product.id}`}
                  onClick={(e) => handleClick(e, product.id)}
                >
                  {product.title}
                </a>
              </h6>
              <span className="price">
                {product.oldPrice ? (
                  <>
                    <span className="old">${product.oldPrice.toFixed(2)}</span>
                    <span className="new">${product.price.toFixed(2)}</span>
                  </>
                ) : (
                  `$${product.price.toFixed(2)}`
                )}
              </span>
              <div className="product-buttons">
                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View">
                  <i className="fas fa-search" />
                </a>
                <a
                  href="#"
                  className="product-button hintT-top"
                  data-hint="Add to Cart"
                  onClick={(e) => {
                    e.preventDefault();
                    if (product.stock > 0) onAddToCart?.(product);
                  }}
                >
                  <i className="fas fa-shopping-cart" />
                </a>
                <a href="#" className="product-button hintT-top" data-hint="Compare">
                  <i className="fas fa-random" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProductGrid;
