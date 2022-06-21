import { defineNuxtPlugin, useHead, useRuntimeConfig } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  useHead({
    script: [
      {
        hid: "fathom",
        src: `https://${options.domain}/script.js`,
        dataSite: options.siteId,
        async: true,
      },
    ],
  });
});
