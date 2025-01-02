"use client";

import { ROUTES_ENUM } from "@/enums/routes";
import { BasicProductInfo, IWishlistItem } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import WishlistButton from "./WishlsitButton";

type ProductItemProps = {
  productItem: BasicProductInfo;
  wishlistItems: IWishlistItem[];
};

const ProductItem = ({ productItem, wishlistItems }: ProductItemProps) => {
  return (
    <li className="relative flex flex-col gap-2 w-full max-w-[320px] h-[auto]">
      <article className="relative flex flex-col gap-2 w-full h-full z-[222]">
        <h2 className="sr-only">{productItem?.name}</h2>

        <div className="relative">
          <WishlistButton
            wishlistItems={wishlistItems}
            productItem={productItem}
            width={22}
            height={22}
          />
        </div>

        <div className="relative aspect-square">
          <Image
            src={
              Array.isArray(productItem.imageUrl)
                ? productItem.imageUrl[0]
                : productItem.imageUrl
            }
            alt={productItem.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            quality={100}
            priority
          />
        </div>

        <div>
          <Link
            href={`${ROUTES_ENUM.PRODUCTS}/${productItem.id}`}
            target="_blank"
            className="text-black after:content-[''] after:absolute after:inset-0"
          >
            <span>{productItem?.name}</span>
          </Link>

          {productItem.price && (
            <p className="mt-2 text-xl font-bold text-gray-900 relative">{`${productItem.price} \u0024`}</p>
          )}
        </div>
      </article>
    </li>
  );
};

export default ProductItem;
