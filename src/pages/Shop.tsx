import { useNavigate } from "react-router-dom";
import { useProductFilter } from "../hooks/useProductFilter";
import { CATEGORIES } from "../data/products";
import type { Product } from "../data/products";
import type { SortOrder } from "../hooks/useProductFilter";
import ShopProductGrid from "../components/ShopProductGrid";
import ShopPagination from "../components/ShopPagination";
import { useCartStore } from "../store/cartStore";
import toast from "react-hot-toast";

const SORT_OPTIONS: { value: SortOrder; label: string }[] = [
  { value: "default", label: "Default sorting" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
];

const Shop = () => {
  const navigate = useNavigate();
  const {
    displayedProducts,
    totalPages,
    filterState,
    setCategory,
    setSortOrder,
    setCurrentPage,
  } = useProductFilter();

  const addItem = useCartStore((s) => s.addItem);

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (product: Product) => {
    addItem(product, 1);
    toast.success(`Added "${product.title}" to cart!`);
  };

  return (
    <>
      {/* Page Title/Header Start */}
      <div
        className="page-title-section section"
        data-bg-image="assets/images/bg/page-title-1.webp"
        style={{ backgroundImage: 'url("assets/images/bg/page-title-1.webp")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-title">
                <h1 className="title">Shop</h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
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
              {/* Category Filter */}
              <div className="col-md col-12 align-self-center learts-mb-20">
                <div className="isotope-filter shop-product-filter">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      className={filterState.category === cat ? "active" : ""}
                      onClick={() => setCategory(cat)}
                    >
                      {cat === "All" ? "all" : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Controls */}
              <div className="col-md-auto col-12 learts-mb-20">
                <ul className="shop-toolbar-controls">
                  <li>
                    <div className="product-sorting">
                      <select
                        className="nice-select"
                        value={filterState.sortOrder}
                        onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                        style={{ display: "block" }}
                      >
                        {SORT_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Shop Toolbar End */}

        {/* Product Grid */}
        <div className="section learts-mt-70">
          <div className="container">
            <ShopProductGrid
              products={displayedProducts}
              onProductClick={handleProductClick}
              onAddToCart={handleAddToCart}
            />

            {displayedProducts.length === 0 && (
              <p className="text-center text-body-light learts-mt-40">
                No products found in this category.
              </p>
            )}

            <ShopPagination
              currentPage={filterState.currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
      {/* Shop Products Section End */}
    </>
  );
};

export default Shop;
