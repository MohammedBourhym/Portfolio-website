import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/data/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://bourhym.pages.dev",
  integrations: [
    icon(),
    tailwind(),
    robotsTxt({
      sitemap: ["https://bourhym.pages.dev/sitemap.xml"],
    }),
  ],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },
});
