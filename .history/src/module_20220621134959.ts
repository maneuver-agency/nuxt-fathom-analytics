import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin } from "@nuxt/kit";

export interface ModuleOptions {
  domain: string;
  siteId: number | string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "fathom-nuxt-module",
    configKey: "fathom",
  },
  defaults: {
    domain: "cdn.usefathom.com",
    siteId: null,
  },
  setup(options, nuxt) {
    if (options.siteId) {
      const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
      nuxt.options.build.transpile.push(runtimeDir);
      addPlugin(resolve(runtimeDir, "plugin"));
    }
  },
});
