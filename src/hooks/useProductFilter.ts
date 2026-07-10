import { useState, useMemo } from "react";
import { products, PRODUCTS_PER_PAGE } from "../data/products";
import type { Product } from "../data/products";

export type SortOrder = "default" | "price-asc" | "price-desc";

export interface FilterState {
  category: string;
  sortOrder: SortOrder;
  currentPage: number;
}

export interface FilterResult {
  filteredProducts: Product[];
  totalPages: number;
  displayedProducts: Product[];
  filterState: FilterState;
  setCategory: (category: string) => void;
  setSortOrder: (order: SortOrder) => void;
  setCurrentPage: (page: number) => void;
}

export function useProductFilter(): FilterResult {
  const [category, setCategory] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    // Sort
    if (sortOrder === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [category, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));

  // Clamp currentPage when filtered results change
  const safePage = Math.min(currentPage, totalPages);

  const displayedProducts = useMemo(() => {
    const start = (safePage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, safePage]);

  // Reset to page 1 when category or sort changes
  const setCategorySafe = (cat: string) => {
    setCategory(cat);
    setCurrentPage(1);
  };

  const setSortOrderSafe = (order: SortOrder) => {
    setSortOrder(order);
    setCurrentPage(1);
  };

  return {
    filteredProducts,
    totalPages,
    displayedProducts,
    filterState: { category, sortOrder, currentPage: safePage },
    setCategory: setCategorySafe,
    setSortOrder: setSortOrderSafe,
    setCurrentPage,
  };
}
