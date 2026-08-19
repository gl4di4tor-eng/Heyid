import { SITE } from "../config/site";

/**
 * Build a site-internal href: prefixes with the Astro base path and the
 * language code, and guarantees a trailing slash (matches
 * `trailingSlash: "always"` in astro.config.mjs). This is the ONLY place
 * that should assemble internal links — components must not concatenate
 * base/lang manually.
 */
export function localePath(lang: string, segment: string = ""): string {
  const base = SITE.base.replace(/\/$/, "");
  const clean = segment.replace(/^\/+|\/+$/g, "");
  const parts = [base, lang, clean].filter(Boolean);
  return "/" + parts.join("/") + "/";
}

/** Absolute URL (for canonical/OG/sitemap), built from the same SITE.url. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).toString();
}

export function downloadPath(lang: string): string {
  return localePath(lang, "download");
}
