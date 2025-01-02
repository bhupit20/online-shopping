import React from "react";
import Link from "next/link";
import List from "./ui/List";

export type BreadCrumbsListItem = {
  path?: string;
  title: string;
  activePage?: boolean;
};

interface IBreadCrumbsProps {
  items: BreadCrumbsListItem[];
}

const BreadCrumbs = ({ items }: IBreadCrumbsProps) => {
  return (
    <nav className="bg-white px-4 h-[20px]">
      <List
        items={items}
        renderItems={(item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <li key={`${item.title}-${index}`} className="flex items-center">
              {item.path ? (
                <Link
                  href={item.path}
                  rel="canonical"
                  scroll={true}
                  className={`${
                    item.activePage
                      ? "black font-semibold"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {item.title}
                </Link>
              ) : (
                <span
                  className={`${
                    item.activePage ? "black font-semibold" : "text-gray-700"
                  }`}
                >
                  {item.title}
                </span>
              )}
              {!isLastItem && (
                <span className="mx-2 text-gray-700"> &gt; </span>
              )}
            </li>
          );
        }}
        listItemsClassName="flex space-x-2"
        listType="ol"
      />
    </nav>
  );
};

export default BreadCrumbs;
