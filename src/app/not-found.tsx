"use client";

import NotFound from "@/components/ui/NotFound";
import { ROUTES_ENUM } from "@/enums/routes";

const NotPageFound = () => {
  return (
    <NotFound
      headerText="Oops! We couldn’t find what you were looking for..."
      linkButtonText="Return to Home"
      redirectTo={ROUTES_ENUM.HOME}
    />
  );
};

export default NotPageFound;
