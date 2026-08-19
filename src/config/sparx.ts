/**
 * SPARX — the in-chat AI assistant. Framed strictly as a helper for
 * carrying a conversation, never as a replacement for the other person.
 */
export const SPARX = {
  name: "SPARX",
  positioning: {
    pl: "SPARX to Twój asystent AI w czacie — pomaga prowadzić rozmowę, nie zastępuje drugiej osoby.",
    en: "SPARX is your in-chat AI assistant — it helps you keep the conversation going, it doesn't replace the other person.",
  },
  useCases: [
    {
      title: { pl: "Sugerowane odpowiedzi", en: "Suggested replies" },
      description: {
        pl: "Nie wiesz, co napisać? SPARX podpowiada, jak możesz odpowiedzieć.",
        en: "Not sure what to say? SPARX suggests how you could reply.",
      },
    },
    {
      title: { pl: "Pomoc w rozmowie", en: "Help during the conversation" },
      description: {
        pl: "SPARX pomaga podtrzymać rozmowę, kiedy utknie.",
        en: "SPARX helps keep a conversation moving when it stalls.",
      },
    },
    {
      title: { pl: "Luźna rozmowa z AI", en: "A casual chat with AI" },
      description: {
        pl: "Możesz też po prostu porozmawiać ze SPARX-em.",
        en: "You can also just chat with SPARX directly.",
      },
    },
  ],
} as const;
