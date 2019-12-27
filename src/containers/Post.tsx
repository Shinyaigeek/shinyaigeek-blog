import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";
import { Item } from "../../types";
import parser from "react-html-parser";

export default () => {
  const { post }: { post: Item } = useRouteData();
  return (
    <div>
      <Link to="/blog/">{"<"} Back</Link>
      <br />
      <h3>{post.attributes.name}</h3>
      <div>{parser(post.body)}</div>
    </div>
  );
};
