/**
 * COUNTRIES — used to generate country-specific pSEO pages like
 * /random-chat/poland/. Add an entry here and it becomes available to
 * any SEO page template that supports a `country` variant.
 *
 * `priority: true` marks countries worth writing dedicated pages for
 * first (bigger population of likely users / clearer search intent).
 * It is not a ranking of the country itself — purely a content-planning flag.
 */
export interface CountryConfig {
  slug: string; // used in URLs: /random-chat/poland/
  name: { pl: string; en: string };
  languageSpoken: { pl: string; en: string };
  priority: boolean;
}

export const COUNTRIES: CountryConfig[] = [
  {
    slug: "poland",
    name: { pl: "Polska", en: "Poland" },
    languageSpoken: { pl: "polski", en: "Polish" },
    priority: true,
  },
  {
    slug: "germany",
    name: { pl: "Niemcy", en: "Germany" },
    languageSpoken: { pl: "niemiecki", en: "German" },
    priority: true,
  },
  {
    slug: "spain",
    name: { pl: "Hiszpania", en: "Spain" },
    languageSpoken: { pl: "hiszpański", en: "Spanish" },
    priority: false,
  },
  {
    slug: "france",
    name: { pl: "Francja", en: "France" },
    languageSpoken: { pl: "francuski", en: "French" },
    priority: false,
  },
  {
    slug: "japan",
    name: { pl: "Japonia", en: "Japan" },
    languageSpoken: { pl: "japoński", en: "Japanese" },
    priority: false,
  },
  {
    slug: "united-states",
    name: { pl: "Stany Zjednoczone", en: "United States" },
    languageSpoken: { pl: "angielski", en: "English" },
    priority: true,
  },
];

export function getCountry(slug: string): CountryConfig | undefined {
  return COUNTRIES.find((c) => c.slug === slug);
}
