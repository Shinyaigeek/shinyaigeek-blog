import React from "react";
import { useRouteData } from "react-static";
import { Item } from "types";
import Welcome from "components/Welcome";
import Items from "components/Items";
import { Pagination } from "antd";

export default () => {
  const {
    items
  }: {
    items: {
      headers: Item[];
      totalItem: number;
    };
  } = useRouteData();

  function pageChange(page: number) {
    // let params = "/?page=" + page;
    // router.query.tag && (params += "&tag=" + router.query.tag);
    // router.query.sort && (params += "&sort=" + router.query.sort);
    scrollTo(page, 0);
  }

  return (
    <div>
      <Welcome />
      <Items {...items} />
      <Pagination
        defaultCurrent={1}
        total={items.totalItem}
        onChange={page => pageChange(page)}
      />
    </div>
  );
};
