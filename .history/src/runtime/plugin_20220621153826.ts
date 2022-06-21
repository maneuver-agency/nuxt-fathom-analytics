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

  addRouteMiddleware(
    "fathom-pageview",
    () => {
      const fathom = useFathom();
      fathom.trackPageview();
    },
    { global: true }
  );
});
