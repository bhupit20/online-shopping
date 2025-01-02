import { IWishlistItem } from "@/types/products";
import { BASE_API_URL } from "@/constants/api";
import { getSession } from "./session";

export const fetchWishlistItems = async (): Promise<IWishlistItem[]> => {
  const session = await getSession();

  if (!session?.value) return [];

  const sessionId = session.value;

  try {
    const res = await fetch(`${BASE_API_URL}/favorites`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      console.log("Failed to fetch favorites");
      return [];
    }

    const data = await res.json();

    if (!data || data.length === 0) return [];

    const filteredFavorites = data.filter(
      (favorite: IWishlistItem) => favorite.sessionId === sessionId
    );

    return filteredFavorites;
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw error;
  }
};
