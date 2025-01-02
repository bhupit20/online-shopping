"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IProduct } from "@/types/products";
import List from "./ui/List";

const ProductItemGallery = ({ productItem }: { productItem: IProduct }) => {
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    if (productItem.imageUrl && productItem.imageUrl.length > 0) {
      setMainImage(productItem.imageUrl[0]);
    }
  }, [productItem]);

  const handleSetMainImage = (imageURL: string) => {
    setMainImage(imageURL);
  };

  if (!mainImage) return null;

  return (
    <div className="flex flex-col items-center gap-4 w-full h-full">
      <div className="relative  w-full max-w-[550px] aspect-square ">
        <Image
          src={mainImage}
          alt={productItem.name}
          layout="responsive"
          width={550}
          height={310}
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {Array.isArray(productItem.imageUrl) &&
        productItem.imageUrl.length > 1 && (
          <div className="flex flex-col items-center gap-2 w-full">
            <List
              items={productItem.imageUrl}
              renderItems={imageURL => (
                <li
                  key={imageURL}
                  className="relative w-[50px] h-[80px] sm:w-[80px] sm:h-[100px] md:w-[120px] md:h-[120px] cursor-pointer"
                  onClick={() => handleSetMainImage(imageURL)}
                >
                  <Image
                    src={imageURL}
                    alt="Coat"
                    layout="intrinsic"
                    width={120}
                    height={120}
                    className="object-cover"
                    quality={100}
                    priority
                  />
                </li>
              )}
              listItemsClassName="flex gap-2 flex-row justify-center overflow-x-auto"
              listType="ul"
            />
          </div>
        )}
    </div>
  );
};

export default ProductItemGallery;
