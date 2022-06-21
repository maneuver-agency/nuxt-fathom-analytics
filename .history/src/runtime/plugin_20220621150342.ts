import { defineNuxtPlugin, useHead, useRuntimeConfig } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  console.log(config);

  useHead({
    script: [
      {
        hid: "fathom",
        src: `https://${config.public.fathom.domain}/script.js`,
        dataSite: config.public.fathom.siteId,
        async: true,
      },
    ],
  });
});
