"use client";

import { ROUTES_ENUM } from "@/enums/routes";
import NotFound from "@/components/ui/NotFound";

const NotItemFound = () => {
  return (
    <NotFound
      headerText="Oops! We couldn’t find what you were looking for..."
      linkButtonText="Go Back to Products"
      redirectTo={ROUTES_ENUM.PRODUCTS}
    />
  );
};

export default NotItemFound;
