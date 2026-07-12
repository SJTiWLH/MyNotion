// .vitepress/config.mts
import { defineConfig } from "vitepress";
// import { teekConfig } from "./teekConfig";
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { teekConfig } from "./teek-config.mts";

// const teekConfig = defineTeekConfig({
  
//   author: {
//     name: "Teeker",
//   },
// });

export default defineConfig({
  extends: teekConfig,
  title: "松香接地走 | 首页",
  srcDir: "./",
});