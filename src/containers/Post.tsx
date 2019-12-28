import React from "react";
import { useRouteData } from "react-static";
import { Item } from "../../types";
import parser from "react-html-parser";

import "../style/post.scss";

export default () => {
  const { post }: { post: Item } = useRouteData();
  return (
    <div>
      <div className="post--content">
        <h1>{post.attributes.name}</h1>
        {parser(post.body)}
      </div>
    </div>
  );
};
