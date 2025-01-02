import React from "react";

interface ListProps<T> {
  items: T[];
  listItemsClassName?: string;
  renderItems: (item: T, index?: number) => React.ReactNode;
  containerProps?: React.HTMLAttributes<HTMLUListElement>;
  listType?: "ol" | "ul";
}

const List = <T,>({
  items,
  renderItems,
  listItemsClassName,
  containerProps,
  listType = "ul",
}: ListProps<T>) => {
  const ListTag: React.ElementType = listType;
  return (
    <ListTag className={listItemsClassName} {...containerProps}>
      {items?.map((item, index) => renderItems(item, index))}
    </ListTag>
  );
};

export default List;
