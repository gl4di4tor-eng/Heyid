/**
 * APP — real HEYID features, described only as the product brief defines
 * them. Nothing here is invented. Where a concrete number (like the daily
 * free-tier limit) hasn't been supplied, it stays as `null` and the UI
 * falls back to a qualitative description instead of a fabricated figure.
 *
 * To change a limit everywhere on the site: edit ONE value here.
 */
export interface Limit {
  /** Concrete number, once known. Keep null rather than guessing. */
  value: number | null;
  unit: { pl: string; en: string };
}

export const LIMITS = {
  dailyFreeMessages: {
    value: null,
    unit: { pl: "wiadomości dziennie", en: "messages per day" },
  } as Limit,
  dailyFreeTranslations: {
    value: null,
    unit: { pl: "tłumaczeń dziennie", en: "translations per day" },
  } as Limit,
};

export const FEATURES = {
  globalChat: {
    id: "global-chat",
    icon: "globe",
    title: { pl: "Globalny czat", en: "Global chat" },
    description: {
      pl: "Rozmawiaj z ludźmi z całego świata — HEYID jest nastawiony na międzynarodowe rozmowy i poznawanie nowych osób.",
      en: "Talk to people from all over the world — HEYID is built for international conversation and meeting new people.",
    },
  },
  autoTranslate: {
    id: "auto-translate",
    icon: "translate",
    title: { pl: "Automatyczne tłumaczenie", en: "Automatic translation" },
    description: {
      pl: "Piszesz w swoim języku, druga osoba czyta w swoim. HEYID tłumaczy wiadomości, żeby bariera językowa przestała mieć znaczenie.",
      en: "Write in your own language, the other person reads in theirs. HEYID translates messages so the language barrier stops mattering.",
    },
  },
  voiceTranslation: {
    id: "voice-translation",
    icon: "mic",
    title: { pl: "Tłumaczenia głosowe", en: "Voice translation" },
    description: {
      pl: "HEYID pomaga też w komunikacji głosowej między osobami mówiącymi różnymi językami.",
      en: "HEYID also helps with voice communication between people who speak different languages.",
    },
  },
  notifications: {
    id: "notifications",
    icon: "bell",
    title: { pl: "Powiadomienia", en: "Notifications" },
    description: {
      pl: "Gdy ktoś do Ciebie napisze, możesz otrzymać powiadomienie i wrócić do rozmowy. Dostarczenie zależy też od ustawień Twojego urządzenia.",
      en: "When someone writes to you, you can get a notification and pick the conversation back up. Delivery also depends on your device settings.",
    },
  },
} as const;

/** Test / demo messages are always translated in the real app — used honestly
 * on the site as a live example of translation, never overstated. */
export const TRANSLATION_DEMO_NOTE = {
  pl: "Tak wygląda tłumaczenie wiadomości w HEYID — wiadomości testowe są zawsze tłumaczone.",
  en: "This is what message translation looks like in HEYID — test messages are always translated.",
};
