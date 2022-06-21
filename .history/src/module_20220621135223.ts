import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin } from "@nuxt/kit";

export interface ModuleOptions {
  domain: string;
  siteId: number | string;
  enableDev: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "fathom-nuxt-module",
    configKey: "fathom",
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: "^3.0.0",
    },
  },
  defaults: {
    domain: "cdn.usefathom.com",
    siteId: null,
    enableDev: false,
  },
  setup(options, nuxt) {
    if (!nuxt.options.dev || (nuxt.options.dev && options.enableDev)) {
      if (options.siteId) {
        const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
        nuxt.options.build.transpile.push(runtimeDir);
        addPlugin(resolve(runtimeDir, "plugin"));
      }
    }
  },
});
