import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin } from "@nuxt/kit";

export interface ModuleOptions {
  subdomain: string;
  siteId: number | string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "fathom-nuxt-module",
    configKey: "fathom",
  },
  defaults: {
    subdomain: "",
    siteId: null,
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);
    addPlugin(resolve(runtimeDir, "plugin"));
  },
});
