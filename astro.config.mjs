import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/data/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    tailwind(),
    robotsTxt({
      sitemap: `${SITE_URL}/sitemap.xml`,
    }),
  ],
  site: SITE_URL,
  // Remove base if using custom domain
  // base: '/Portfolio',
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },
});
