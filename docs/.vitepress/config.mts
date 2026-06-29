// .vitepress/config.mts
import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

const teekConfig = defineTeekConfig({
  
  author: {
    name: "Teeker",
  },
});

export default defineConfig({
  extends: teekConfig,
});