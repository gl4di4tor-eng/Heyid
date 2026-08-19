/**
 * CTA — every call-to-action label used across the site, in one place.
 * All of them point at SITE.downloadPath (see site.ts) — never a raw
 * store URL. Pick the variant that fits the context; don't invent new
 * inline strings elsewhere.
 */
export const CTA = {
  primary: { pl: "Pobierz HEYID", en: "Download HEYID" },
  tryIt: { pl: "Wypróbuj HEYID", en: "Try HEYID" },
  startChatting: { pl: "Zacznij rozmawiać", en: "Start chatting" },
  startRandomChat: { pl: "Rozpocznij losową rozmowę", en: "Start a random chat" },
  talkToStrangers: { pl: "Porozmawiaj z nieznajomymi", en: "Talk to strangers" },
  meetPeople: {
    pl: "Poznawaj ludzi z całego świata",
    en: "Meet people from around the world",
  },
  noLanguageBarrier: {
    pl: "Rozmawiaj bez bariery językowej",
    en: "Chat without language barriers",
  },
  notifyMe: { pl: "Powiadom mnie o starcie", en: "Notify me at launch" },
} as const;

export type CtaKey = keyof typeof CTA;
