/**
 * SITE — the one place that knows where this site is deployed.
 *
 * No domain yet: we deploy as a GitHub Pages *project* site
 * (username.github.io/heyid/). When a real domain is bought, change
 * `url` and `base` here and every canonical, sitemap, hreflang and
 * OG tag updates automatically. Nothing else in the repo should ever
 * hardcode a URL.
 *
 * IMPORTANT: replace GITHUB_USERNAME below with the real GitHub username
 * before the first deploy — GitHub Pages project URLs are
 * https://<username>.github.io/<repo>/
 */
const GITHUB_USERNAME = "gl4di4tor-eng";
const REPO_NAME = "Heyid";
// --- Custom domain switch -------------------------------------------------
// Leave null while there is no domain. Once you buy one, set it here
// (e.g. "heyid.app") and set `base` to "/" — that's the ONLY change needed.
const CUSTOM_DOMAIN: string | null = "heyid.online";
const usingCustomDomain = Boolean(CUSTOM_DOMAIN);
export const SITE = {
  /** Root URL, no trailing slash. */
  url: usingCustomDomain
    ? `https://${CUSTOM_DOMAIN}`
    : `https://${GITHUB_USERNAME}.github.io`,
  /** Astro "base" path — "/" for a custom domain, "/repo/" for project pages. */
  base: usingCustomDomain ? "/" : `/${REPO_NAME}/`,
  name: "HEYID",
  tagline: {
    en: "Chat with the world. No language barrier.",
    pl: "Rozmawiaj ze światem. Bez bariery językowej.",
  },
  /**
   * Single CTA destination for the entire site. During closed testing this
   * route shows a "coming soon" waitlist. The day the app is public on
   * Google Play, only APP_STORE_URL below needs to change — every one of
   * the 100+ pages already links to /download and needs zero edits.
   */
  downloadPath: "/download",
  /** Set this the day the app goes live publicly. Leave null during closed testing. */
  appStoreUrl: null as string | null,
  defaultLang: "pl",
  enabledLangs: ["pl", "en"] as const,
  social: {
    // Filled in from social.ts — kept here only as a type anchor.
  },
} as const;
export type EnabledLang = (typeof SITE.enabledLangs)[number];
