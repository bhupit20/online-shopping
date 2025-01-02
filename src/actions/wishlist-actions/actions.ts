import { getSession } from "@/lib/session";
import { BASE_API_URL } from "@/constants/api";
import { BasicProductInfo } from "@/types/products";

export async function addToFavorites(productItem: BasicProductInfo) {
  const session = await getSession();

  if (!session?.value || !productItem) return;

  const sessionId = session.value;

  try {
    const response = await fetch(`${BASE_API_URL}/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId,
        products: [
          {
            id: productItem.id,
            name: productItem.name,
            imageUrl: productItem.imageUrl[0],
          },
        ],
      }),
    });

    if (!response.ok) {
      console.log("Failed to add product to favorites");
    }
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

export async function removeFromFavorites(wishlistItemId: string) {
  const session = await getSession();

  if (!session?.value || !wishlistItemId) return;

  try {
    const response = await fetch(
      `${BASE_API_URL}/favorites/${wishlistItemId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.log("Failed to remove product");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("An error occurred:", error.message);
      throw new Error(error.message);
    }
  }
}
