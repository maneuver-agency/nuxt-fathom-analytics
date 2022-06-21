import {
  defineNuxtPlugin,
  useHead,
  useRuntimeConfig,
  addRouteMiddleware,
} from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const { domain, siteId } = config.public.fathom;

  useHead({
    script: [
      {
        hid: "fathom",
        src: `https://${domain}/script.js`,
        dataSite: siteId,
        async: true,
      },
    ],
  });

  addRouteMiddleware(
    "fathom-pageview",
    () => {
      console.log("track pageview");
    },
    { global: true }
  );
});
