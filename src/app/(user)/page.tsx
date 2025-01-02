"use client";

import LinkButton from "@/components/ui/LinkButton";

const UserHomePage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Online Store</h1>
      <p className="text-xl mb-6">
        Explore our latest products and find what you love!
      </p>

      <LinkButton href="/products" variant="outline" size="large">
        Go to Products
      </LinkButton>
    </div>
  );
};

export default UserHomePage;
