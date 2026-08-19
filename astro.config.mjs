import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config/site.ts";

// Central switch: everything about where this site lives comes from SITE.
// Add a custom domain later by changing SITE.url + SITE.base in site.ts —
// nothing else in the codebase needs to change.
export default defineConfig({
  site: SITE.url,
  base: SITE.base,
  trailingSlash: "always",
  integrations: [sitemap()],
});
