export interface IProduct {
  id: string;
  name: string;
  price: number;
  imageUrl: string[] | string;
  category: string;
}

export type BasicProductInfo = Pick<
  IProduct,
  "id" | "name" | "imageUrl" | "price"
>;

export interface IWishlistItem {
  id: string;
  sessionId: string;
  products: BasicProductInfo[];
}
