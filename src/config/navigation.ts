/**
 * NAVIGATION — header and footer links. `href` is relative to the
 * language root and gets prefixed with /{lang}/ (and the site base)
 * by the components that render it.
 */
export const HEADER_NAV = [
  { key: "features", href: "", label: { pl: "Funkcje", en: "Features" }, hash: "#features" },
  { key: "sparx", href: "", label: { pl: "SPARX AI", en: "SPARX AI" }, hash: "#sparx" },
  { key: "premium", href: "", label: { pl: "Premium", en: "Premium" }, hash: "#premium" },
  { key: "blog", href: "blog", label: { pl: "Blog", en: "Blog" } },
];

export const FOOTER_NAV = {
  explore: {
    title: { pl: "Odkrywaj", en: "Explore" },
    links: [
      { href: "random-chat", label: { pl: "Losowy czat", en: "Random chat" } },
      { href: "anonymous-chat", label: { pl: "Anonimowy czat", en: "Anonymous chat" } },
      { href: "talk-to-strangers", label: { pl: "Rozmowy z nieznajomymi", en: "Talk to strangers" } },
      { href: "meet-new-people", label: { pl: "Poznawaj nowych ludzi", en: "Meet new people" } },
      { href: "international-chat", label: { pl: "Czat międzynarodowy", en: "International chat" } },
      { href: "language-exchange", label: { pl: "Wymiana językowa", en: "Language exchange" } },
    ],
  },
  company: {
    title: { pl: "HEYID", en: "HEYID" },
    links: [
      { href: "blog", label: { pl: "Blog", en: "Blog" } },
      { href: "download", label: { pl: "Pobierz", en: "Download" } },
    ],
  },
  legal: {
    title: { pl: "Informacje prawne", en: "Legal" },
    links: [
      { href: "privacy", label: { pl: "Polityka prywatności", en: "Privacy Policy" } },
      { href: "terms", label: { pl: "Regulamin", en: "Terms of Service" } },
    ],
  },
};
