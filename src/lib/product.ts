import { IProduct } from "@/types/products";
import { BASE_API_URL } from "@/constants/api";

export const fetchAllProducts = async (): Promise<IProduct[]> => {
  try {
    const res = await fetch(`${BASE_API_URL}/products`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      console.log("Failed to fetch products");
      return [];
    }

    const data = await res.json();

    if (!data || data.length === 0) return [];

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProduct = async (id: string): Promise<IProduct | null> => {
  try {
    const res = await fetch(`${BASE_API_URL}/products/${id}`);

    if (!res.ok) {
      console.log(`Failed to fetch product with an id: ${id}`);
      return null;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
