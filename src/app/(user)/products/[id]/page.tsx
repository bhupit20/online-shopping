import { fetchProduct, fetchAllProducts } from "@/lib/product";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import React from "react";
import ProductItemGallery from "@/components/ProductItemGallery";
import { ROUTES_ENUM } from "@/enums/routes";
import BreadCrumbs, { BreadCrumbsListItem } from "@/components/BreadCrumbs";

type ProductItemPageProps = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: ProductItemPageProps): Promise<Metadata> {
  const { id } = params;
  const productItem = await fetchProduct(id);

  return {
    title: `${productItem?.name}`,
    description: `${productItem?.name}. ${productItem?.category}`,
  };
}

const ProductItem = async ({ params }: ProductItemPageProps) => {
  const { id } = params;

  const [productItems, productItem] = await Promise.all([
    fetchAllProducts(),
    fetchProduct(id),
  ]);

  if (parseInt(id) > productItems.length) {
    return notFound();
  }

  const breadCrumbsItems: BreadCrumbsListItem[] = [
    { path: ROUTES_ENUM.HOME, title: "Home" },
    {
      path: ROUTES_ENUM.PRODUCTS,
      title: "Products",
    },
    { title: `${productItem?.name}`, activePage: true },
  ];

  return (
    <div className="h-full flex flex-col w-full gap-10">
      <div className="pt-[20px] ">
        <BreadCrumbs items={breadCrumbsItems} />
      </div>
      <div className="flex flex-col justify-center gap-8 h-full select-none text-wrap">
        <section className="font-medium text-[1rem] flex justify-center items-center gap-4 ">
          <h2 className="text-2xl font-bold">{productItem?.name}</h2>

          <span className="text-xl text-green-600">
            {`${productItem?.price} \u0024`}
          </span>
        </section>
        <div className="flex flex-1 gap-2.5 max-h-[850px] mb-[40px]">
          <ProductItemGallery productItem={productItem!} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
