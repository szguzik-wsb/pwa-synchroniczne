// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  modules: ["nuxt-svgo"],
  svgo: {
    componentPrefix: "i",
  },
  devtools: { enabled: true },
  alias: {"@": resolve(__dirname, '/')},
  css: ["~/assets/main.scss"]
})
