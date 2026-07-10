interface ShopPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ShopPagination = ({ currentPage, totalPages, onPageChange }: ShopPaginationProps) => {
  if (totalPages <= 1) return null;

  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="text-center learts-mt-70">
      <div className="shop-pagination" style={{ display: "inline-flex", gap: "8px" }}>
        <button
          className="btn btn-outline-dark"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          style={{ minWidth: 40 }}
        >
          ←
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={`btn ${page === currentPage ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => onPageChange(page)}
            style={{ minWidth: 40 }}
          >
            {page}
          </button>
        ))}
        <button
          className="btn btn-outline-dark"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          style={{ minWidth: 40 }}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ShopPagination;
