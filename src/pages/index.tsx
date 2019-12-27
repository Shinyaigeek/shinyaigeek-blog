import React from "react";
import { useRouteData } from "react-static";
import { Item } from "types";
import Welcome from "components/Welcome";
import Items from "components/Items";

export default () => {
  const {
    items
  }: {
    items: {
      headers: Item[];
      totalItem: number;
    };
  } = useRouteData();

  return (
    <div>
      <Welcome />
      <Items {...items} />
    </div>
  );
};
