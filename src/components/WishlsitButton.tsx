"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TransparentHeart from "../../public/wishlist-icons/transparent-heart-icon.png";
import RedHeart from "../../public/wishlist-icons/red-heart-icon.png";
import {
  removeFromFavorites,
  addToFavorites,
} from "@/actions/wishlist-actions/actions";
import Button from "./ui/Button";

import { IWishlistItem, BasicProductInfo } from "../types/products";

import Image from "next/image";

interface IWishlistButtonProps {
  wishlistItems: IWishlistItem[];
  productItem: BasicProductInfo;
  width: number;
  height: number;
}

const WishlistButton = ({
  wishlistItems,
  productItem,
  width,
  height,
}: IWishlistButtonProps) => {
  const router = useRouter();
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);

  useEffect(() => {
    const isInWishlst = wishlistItems?.some(({ products }) =>
      products?.some(product => product.id === productItem?.id)
    );

    setIsInWishlist(isInWishlst);
  }, [wishlistItems, productItem.id]);

  const handleToggleWishlist = async () => {
    if (isInWishlist && productItem?.id) {
      const wishlsitItemToRemove = wishlistItems?.filter(({ products }) =>
        products?.some(product => product.id === productItem?.id)
      );

      await removeFromFavorites(wishlsitItemToRemove[0].id);
    } else {
      await addToFavorites(productItem);
    }
    router.refresh();
  };

  return (
    <Button
      onClick={handleToggleWishlist}
      variant="transparent"
      className="absolute top-2 right-2 z-20"
    >
      <Image
        src={isInWishlist ? RedHeart : TransparentHeart}
        alt="Favorites"
        width={width}
        height={height}
      />
    </Button>
  );
};

export default WishlistButton;
