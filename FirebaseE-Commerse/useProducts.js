import { useQuery } from "@tanstack/react-query";
import {
  getProducts,
  getProductsByCategory
} from "../services/productService";

export const useProducts = category => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () =>
      category
        ? getProductsByCategory(category)
        : getProducts()
  });
};