"use client";

import { useCallback, useMemo, useState } from "react";
import LinkButton from "./ui/LinkButton";
import { usePathname } from "next/navigation";

import { NAVIGATION_ITEMS } from "@/constants/sidebar";
const UserNavBar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => setIsBurgerMenuOpen(prev => !prev);

  const closeMobileMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  const getLinkClassNames = useCallback(
    (href: string) => {
      const isActive = pathName === href;
      return `${isActive ? "underline underline-offset-4 z-50" : ""}`;
    },
    [pathName]
  );

  const navigationItems = useMemo(() => {
    return NAVIGATION_ITEMS.map(item => {
      return (
        <LinkButton
          key={item.path}
          href={item.path}
          variant="transparent"
          className={`text-black ${getLinkClassNames(item.path)}`}
        >
          {item.title}
        </LinkButton>
      );
    });
  }, [getLinkClassNames]);

  const burgerNavigationItems = useMemo(() => {
    return NAVIGATION_ITEMS.map(item => {
      return (
        <LinkButton
          key={`burger-${item.path}`}
          href={item.path}
          variant="transparent"
          className={`text-black ${getLinkClassNames(item.path)}`}
          onClick={closeMobileMenu}
        >
          {item.title}
        </LinkButton>
      );
    });
  }, [getLinkClassNames]);

  return (
    <header className="h-[80px] bg-white text-black py-4 shadow-md px-16">
      <nav className="flex items-center justify-between mx-auto relative">
        <LinkButton
          href="/"
          variant="transparent"
          className="text-2xl font-semibold"
        >
          Logo
        </LinkButton>

        <div className="hidden md:flex items-center gap-6">
          {navigationItems}
        </div>

        <button className="md:hidden p-2 text-black" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {isBurgerMenuOpen && (
        <div className="flex flex-col items-center justify-center gap-4 py-4 bg-white text-black absolute top-[82px] right-0 left-0 bottom-0 z-50">
          {burgerNavigationItems}
        </div>
      )}
    </header>
  );
};

export default UserNavBar;
