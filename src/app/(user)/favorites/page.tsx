import { fetchWishlistItems } from "@/lib/wishlist";
import { ROUTES_ENUM } from "@/enums/routes";
import ProductItem from "@/components/ProductItem";
import List from "@/components/ui/List";
import NotFound from "@/components/ui/NotFound";
import BreadCrumbs, { BreadCrumbsListItem } from "@/components/BreadCrumbs";

const breadCrumbsItems: BreadCrumbsListItem[] = [
  { path: ROUTES_ENUM.HOME, title: "Home" },
  {
    path: ROUTES_ENUM.PRODUCTS,
    title: "Products",
  },
  { title: "Favorites", activePage: true },
];

const FavoritesPage = async () => {
  const wishlistItems = await fetchWishlistItems();

  return !wishlistItems?.length ? (
    <NotFound
      headerText="Looks like it’s empty here..."
      linkButtonText="Browse Products"
      redirectTo={ROUTES_ENUM.PRODUCTS}
    />
  ) : (
    <section className="min-h-[calc(100%-40px-20px)] flex flex-col mt-[40px]">
      <header className="flex justify-between mb-[40px]">
        <p>Your favorites:</p>
        <p>Favorites ({wishlistItems.length})</p>
      </header>
      <List
        items={wishlistItems}
        renderItems={wishlistItemData => {
          const wishlistProductItem = wishlistItemData.products[0];
          return (
            <ProductItem
              key={wishlistItemData.id}
              productItem={wishlistProductItem}
              wishlistItems={wishlistItems}
            />
          );
        }}
        listItemsClassName={"custom-products-grid"}
      />
      <div className="mt-auto">
        <BreadCrumbs items={breadCrumbsItems} />
      </div>
    </section>
  );
};

export default FavoritesPage;
