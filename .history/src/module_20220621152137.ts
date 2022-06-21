import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin } from "@nuxt/kit";

export interface ModuleOptions {
  domain?: string;
  siteId: string | null;
  enableDev?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-fathom-analytics",
    configKey: "fathom",
    compatibility: {
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
      if (!options.siteId) {
        throw new Error("SiteId is required to activate Fathom Analytics");
      } else {
        nuxt.options.runtimeConfig.public.fathom = {
          domain: options.domain,
          siteId: options.siteId,
        };

        // Transpile runtime
        const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
        nuxt.options.build.transpile.push(runtimeDir);

        // Add plugin
        addPlugin({
          src: resolve(runtimeDir, "plugin"),
          mode: "client",
        });

        console.log(resolve(runtimeDir, "plugin"));

        // Add composables
        nuxt.hook("autoImports:dirs", (dirs) => {
          dirs.push(resolve(runtimeDir, "composables"));
        });
      }
    }
  },
});
