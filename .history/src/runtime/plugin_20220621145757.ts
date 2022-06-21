import { defineNuxtPlugin, useHead, useRuntimeConfig } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  useHead({
    script: [
      {
        hid: "fathom",
        src: `https://${config.fathom.domain}/script.js`,
        dataSite: config.fathom.siteId,
        async: true,
      },
    ],
  });
});
