import { defineNuxtConfig } from "nuxt";
import MyModule from "..";

export default defineNuxtConfig({
  modules: [MyModule],
  fathom: {
    siteId: "TETTEN",
    enableDev: true,
  },
});
