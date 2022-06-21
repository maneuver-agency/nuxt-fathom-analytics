import { defineNuxtPlugin, useHead, useRuntimeConfig } from "#app";

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
});
