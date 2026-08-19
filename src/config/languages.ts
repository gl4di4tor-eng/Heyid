/**
 * LANGUAGES — every language HEYID's site could ever ship in.
 *
 * `enabled: true`  → has real content, appears in nav/switcher/sitemap.
 * `enabled: false` → reserved slot (hreflang-ready structure) but no pages
 *                    yet. Flip to true and add content when it's time —
 *                    no routing or component changes required.
 */
export interface LanguageConfig {
  code: string; // BCP-47 / ISO 639-1, also the URL prefix: /pl/, /en/...
  label: string; // shown in the language switcher, in its own language
  dir: "ltr" | "rtl";
  enabled: boolean;
}

export const LANGUAGES: LanguageConfig[] = [
  { code: "pl", label: "Polski", dir: "ltr", enabled: true },
  { code: "en", label: "English", dir: "ltr", enabled: true },
  { code: "de", label: "Deutsch", dir: "ltr", enabled: false },
  { code: "es", label: "Español", dir: "ltr", enabled: false },
  { code: "fr", label: "Français", dir: "ltr", enabled: false },
  { code: "pt", label: "Português", dir: "ltr", enabled: false },
  { code: "it", label: "Italiano", dir: "ltr", enabled: false },
  { code: "nl", label: "Nederlands", dir: "ltr", enabled: false },
  { code: "ja", label: "日本語", dir: "ltr", enabled: false },
  { code: "ko", label: "한국어", dir: "ltr", enabled: false },
];

export const ENABLED_LANGUAGES = LANGUAGES.filter((l) => l.enabled);
export const DEFAULT_LANG = "pl";

export function isEnabledLang(code: string): boolean {
  return ENABLED_LANGUAGES.some((l) => l.code === code);
}

export function getLanguage(code: string): LanguageConfig | undefined {
  return LANGUAGES.find((l) => l.code === code);
}
