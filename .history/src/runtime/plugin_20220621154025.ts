import {
  defineNuxtPlugin,
  useHead,
  useRuntimeConfig,
  addRouteMiddleware,
} from "#app";
import { useFathom } from "./composables/useFathom";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const { domain, siteId } = config.public.fathom;

  // Add public script.
  useHead({
    script: [
      {
        hid: "fathom",
        src: `https://${domain}/script.js`,
        "data-site": siteId,
        async: true,
      },
    ],
  });

  // Track page view on each route change.
  addRouteMiddleware(
    "fathom-pageview",
    () => {
      const fathom = useFathom();
      fathom?.trackPageview();
    },
    { global: true }
  );
});
