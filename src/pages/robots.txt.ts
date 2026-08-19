import type { APIRoute } from "astro";
import { SITE } from "../config/site";

export const GET: APIRoute = () => {
  const sitemapUrl = `${SITE.url}${SITE.base}sitemap-index.xml`;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
