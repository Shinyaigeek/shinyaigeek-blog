import axios from "axios";
import path from "path";

import * as getItemData from "./src/scripts/getItemData.js";
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  paths: {
    root: process.cwd(), // The root of your project. Don't change this unless you know what you're doing.
    src: "src", // The source directory. Must include an index.js entry file.
    temp: "tmp", // Temp output directory for build files not to be published.
    dist: "public", // The production output directory.
    devDist: "tmp/dev-server", // The development scratch directory.
    public: "assets", // The public directory (files copied to dist during build)
    assets: "public", // The output directory for bundled JS and CSS
    buildArtifacts: "artifacts" // The output directory for generated (internal) resources
  },
  getRoutes: async () => {
    const itemNum = getItemData.getItemNum();
    const items = Array(itemNum).fill(0).map((_,index) => {
      return getItemData.getItemRawString(index + 1);
    })
    return [
      {
        path: "/",
        getData: () => ({
          items
        }),
        children: items.map((post /* : Post */) => ({
          path: `/post${post.attributes.path}`,
          template: "src/containers/Post",
          getData: () => ({
            post
          })
        }))
      }
    ];
  },
  plugins: [
    "react-static-plugin-typescript",
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
    "react-static-plugin-sass"
  ]
};
