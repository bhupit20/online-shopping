import { fetchAllProducts } from "@/lib/product";
import React from "react";
import ProductItem from "@/components/ProductItem";
import { fetchWishlistItems } from "@/lib/wishlist";
import List from "@/components/ui/List";
import BreadCrumbs, { BreadCrumbsListItem } from "@/components/BreadCrumbs";
import { ROUTES_ENUM } from "@/enums/routes";
import NotFound from "@/components/ui/NotFound";

const breadCrumbsItems: BreadCrumbsListItem[] = [
  { path: ROUTES_ENUM.HOME, title: "Home" },
  {
    title: "Products",
    activePage: true,
  },
  { path: ROUTES_ENUM.FAVORITES, title: "Favorites" },
];

const ProductsPage = async () => {
  const [productItems, wishlistItems] = await Promise.all([
    fetchAllProducts(),
    fetchWishlistItems(),
  ]);

  return productItems.length > 0 ? (
    <section className="min-h-[calc(100%-40px-20px)] flex flex-col mt-[40px]">
      <List
        items={productItems}
        renderItems={productItem => (
          <ProductItem
            key={productItem.id}
            productItem={productItem}
            wishlistItems={wishlistItems}
          />
        )}
        listItemsClassName={"custom-products-grid"}
      />

      <div className="mt-auto">
        <BreadCrumbs items={breadCrumbsItems} />
      </div>
    </section>
  ) : (
    <NotFound
      headerText="It looks like there are no products available at the moment."
      linkButtonText="Return to Home"
      redirectTo={ROUTES_ENUM.HOME}
    />
  );
};

export default ProductsPage;
