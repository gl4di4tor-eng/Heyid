/**
 * SEO-PAGES — the data model for programmatic SEO.
 *
 * Every page is defined once here with everything the brief asks for:
 * keyword, search intent, language, optional country, title, description,
 * content, CTA and related pages — then rendered by
 * src/pages/[lang]/[...slug].astro.
 *
 * This file intentionally holds a *small, curated* first batch (not
 * hundreds of thin pages). Scaling up later means adding entries here,
 * not touching templates or routing. Each entry must earn its place:
 * a distinct keyword and a distinct search intent.
 */

export type SearchIntent =
  | "start-random-chat" // wants to jump into a chat right now
  | "learn-anonymous-chat" // researching what anonymous chat is / how it works
  | "meet-strangers" // wants to talk to new people generally
  | "meet-people-general" // broader "meet new people" intent
  | "international-chat" // wants to talk to people from other countries
  | "language-exchange" // wants to practice/learn a language via conversation
  | "country-specific-chat"; // wants to chat with people from one specific country

export interface SeoPageContent {
  title: string;
  description: string; // meta description, ~150-160 chars
  h1: string;
  intro: string; // 1-2 sentence intro paragraph
  body: string[]; // additional paragraphs — real, non-spun content
  faq?: { question: string; answer: string }[];
}

export interface SeoPage {
  /** Stable id, also used to build the URL slug (topic, or topic/country). */
  id: string;
  topic: string; // e.g. "random-chat"
  countrySlug?: string; // e.g. "poland" — omit for the general topic page
  keyword: string; // primary target keyword, English form for reference
  intent: SearchIntent;
  cta: "startRandomChat" | "talkToStrangers" | "meetPeople" | "tryIt" | "noLanguageBarrier";
  relatedTopics: string[]; // other `topic` values to cross-link
  content: { pl: SeoPageContent; en: SeoPageContent };
}

export const SEO_PAGES: SeoPage[] = [
  {
    id: "random-chat",
    topic: "random-chat",
    keyword: "random chat",
    intent: "start-random-chat",
    cta: "startRandomChat",
    relatedTopics: ["talk-to-strangers", "anonymous-chat", "international-chat"],
    content: {
      pl: {
        title: "Losowy czat online — poznawaj nowych ludzi | HEYID",
        description:
          "Rozpocznij losową rozmowę z osobą z dowolnego kraju. HEYID tłumaczy wiadomości automatycznie, więc język nie jest barierą.",
        h1: "Losowy czat z ludźmi z całego świata",
        intro:
          "Losowy czat to najszybszy sposób, żeby porozmawiać z nową, nieznaną wcześniej osobą — bez umawiania się, bez szukania konkretnego kontaktu.",
        body: [
          "W HEYID losowa rozmowa nie kończy się na barierze językowej — wiadomości są automatycznie tłumaczone, więc możesz trafić na osobę z innego kraju i swobodnie pisać w swoim własnym języku.",
          "Jeśli nie wiesz, jak zacząć, w rozmowie pomoże Ci SPARX — wbudowany asystent AI, który podpowiada, co możesz napisać.",
        ],
      },
      en: {
        title: "Random Chat Online — Meet New People | HEYID",
        description:
          "Start a random chat with someone from anywhere in the world. HEYID translates messages automatically, so language isn't a barrier.",
        h1: "Random chat with people from around the world",
        intro:
          "Random chat is the fastest way to talk to someone new — no scheduling, no searching for a specific contact.",
        body: [
          "In HEYID, a random conversation doesn't stop at the language barrier — messages are translated automatically, so you can match with someone from another country and write comfortably in your own language.",
          "Not sure how to start? SPARX, the built-in AI assistant, can suggest what to say.",
        ],
      },
    },
  },
  {
    id: "anonymous-chat",
    topic: "anonymous-chat",
    keyword: "anonymous chat",
    intent: "learn-anonymous-chat",
    cta: "tryIt",
    relatedTopics: ["random-chat", "talk-to-strangers"],
    content: {
      pl: {
        title: "Anonimowy czat — rozmawiaj bez zobowiązań | HEYID",
        description:
          "Poznaj zasady anonimowego czatu w HEYID: rozmawiaj z nowymi osobami z całego świata, a tłumaczenie wiadomości usuwa barierę językową.",
        h1: "Anonimowy czat z ludźmi z całego świata",
        intro:
          "Anonimowy czat pozwala rozpocząć rozmowę z nową osobą bez wcześniejszego umawiania się czy udostępniania dodatkowych danych.",
        body: [
          "HEYID łączy Cię z osobami z różnych krajów, a automatyczne tłumaczenie wiadomości sprawia, że różne języki nie przeszkadzają w rozmowie.",
          "Powiadomienia dają znać, gdy druga osoba odpisze — możesz wrócić do rozmowy, kiedy Ci pasuje (zależnie od ustawień Twojego urządzenia).",
        ],
      },
      en: {
        title: "Anonymous Chat — Talk Without Commitment | HEYID",
        description:
          "See how anonymous chat works in HEYID: talk to new people from around the world, with automatic translation removing the language barrier.",
        h1: "Anonymous chat with people from around the world",
        intro:
          "Anonymous chat lets you start a conversation with someone new without arranging it in advance or sharing extra details.",
        body: [
          "HEYID connects you with people from different countries, and automatic message translation means different languages don't get in the way.",
          "Notifications let you know when the other person replies, so you can pick the conversation back up whenever suits you (subject to your device settings).",
        ],
      },
    },
  },
  {
    id: "talk-to-strangers",
    topic: "talk-to-strangers",
    keyword: "talk to strangers",
    intent: "meet-strangers",
    cta: "talkToStrangers",
    relatedTopics: ["random-chat", "meet-new-people", "language-exchange"],
    content: {
      pl: {
        title: "Rozmawiaj z nieznajomymi online | HEYID",
        description:
          "Chcesz porozmawiać z kimś nowym? HEYID pozwala rozmawiać z nieznajomymi z całego świata, tłumacząc wiadomości w czasie rzeczywistym.",
        h1: "Rozmowy z nieznajomymi z całego świata",
        intro:
          "Czasem najciekawsza rozmowa to ta z osobą, której wcześniej nie znałeś. HEYID ułatwia jej rozpoczęcie.",
        body: [
          "Dzięki automatycznemu tłumaczeniu możesz rozmawiać z nieznajomym z innego kraju, pisząc normalnie w swoim języku.",
          "Jeśli rozmowa utknie w martwym punkcie, SPARX podpowie Ci możliwą odpowiedź.",
        ],
      },
      en: {
        title: "Talk to Strangers Online | HEYID",
        description:
          "Want to talk to someone new? HEYID lets you talk to strangers from around the world, translating messages in real time.",
        h1: "Talk to strangers from around the world",
        intro:
          "Sometimes the most interesting conversation is with someone you didn't know before. HEYID makes it easy to start one.",
        body: [
          "Thanks to automatic translation, you can talk to a stranger from another country while writing normally in your own language.",
          "If the conversation stalls, SPARX can suggest a possible reply.",
        ],
      },
    },
  },
  {
    id: "meet-new-people",
    topic: "meet-new-people",
    keyword: "meet new people",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["talk-to-strangers", "international-chat", "language-exchange"],
    content: {
      pl: {
        title: "Poznawaj nowych ludzi online | HEYID",
        description:
          "HEYID pomaga poznawać nowych ludzi z całego świata — rozmawiaj bez bariery językowej dzięki automatycznemu tłumaczeniu.",
        h1: "Poznawaj nowych ludzi z całego świata",
        intro:
          "HEYID to globalny czat stworzony do poznawania nowych osób — niezależnie od tego, jakim językiem mówią.",
        body: [
          "Zamiast ograniczać się do osób mówiących Twoim językiem, HEYID otwiera rozmowę na cały świat dzięki tłumaczeniu wiadomości.",
          "Powiadomienia pomagają wracać do rozmów, które zaczęły się dobrze, więc nowe znajomości nie giną w tle.",
        ],
      },
      en: {
        title: "Meet New People Online | HEYID",
        description:
          "HEYID helps you meet new people from around the world — chat without a language barrier thanks to automatic translation.",
        h1: "Meet new people from around the world",
        intro:
          "HEYID is a global chat built for meeting new people — no matter what language they speak.",
        body: [
          "Instead of being limited to people who speak your language, HEYID opens the conversation up to the whole world through message translation.",
          "Notifications help you come back to conversations that started well, so new connections don't get lost.",
        ],
      },
    },
  },
  {
    id: "international-chat",
    topic: "international-chat",
    keyword: "international chat",
    intent: "international-chat",
    cta: "noLanguageBarrier",
    relatedTopics: ["random-chat", "meet-new-people", "language-exchange"],
    content: {
      pl: {
        title: "Czat międzynarodowy — rozmawiaj bez granic | HEYID",
        description:
          "HEYID to czat międzynarodowy z automatycznym tłumaczeniem wiadomości — rozmawiaj z ludźmi z innych krajów bez bariery językowej.",
        h1: "Czat międzynarodowy bez bariery językowej",
        intro:
          "Rozmowa z kimś z drugiego końca świata nie musi oznaczać nieporozumień — HEYID tłumaczy wiadomości między językami.",
        body: [
          "Piszesz po polsku, druga osoba czyta w swoim języku — i odwrotnie. To sedno międzynarodowego czatu w HEYID.",
          "Aplikacja wspiera też tłumaczenia głosowe, co ułatwia komunikację, gdy rozmowa wychodzi poza tekst.",
        ],
      },
      en: {
        title: "International Chat — Talk Across Borders | HEYID",
        description:
          "HEYID is an international chat with automatic message translation — talk to people from other countries without a language barrier.",
        h1: "International chat without a language barrier",
        intro:
          "Talking to someone on the other side of the world shouldn't mean misunderstandings — HEYID translates messages between languages.",
        body: [
          "You write in your language, the other person reads in theirs — and vice versa. That's the core of international chat on HEYID.",
          "The app also supports voice translation, making it easier when the conversation goes beyond text.",
        ],
      },
    },
  },
  {
    id: "language-exchange",
    topic: "language-exchange",
    keyword: "language exchange app",
    intent: "language-exchange",
    cta: "tryIt",
    relatedTopics: ["international-chat", "meet-new-people", "talk-to-strangers"],
    content: {
      pl: {
        title: "Wymiana językowa online | HEYID",
        description:
          "Ćwicz języki obce, rozmawiając z native speakerami na HEYID. Automatyczne tłumaczenie pomaga, gdy zabraknie słów.",
        h1: "Wymiana językowa z ludźmi z całego świata",
        intro:
          "Najlepszy sposób na naukę języka to rozmowa z kimś, kto mówi nim na co dzień — HEYID ułatwia znalezienie takiej osoby.",
        body: [
          "Kiedy zabraknie Ci słownictwa, automatyczne tłumaczenie w HEYID pomaga dokończyć myśl, żeby rozmowa mogła płynąć dalej.",
          "SPARX może podpowiedzieć, jak sformułować odpowiedź, gdy ćwiczysz nowy język i brakuje Ci pewności.",
        ],
      },
      en: {
        title: "Language Exchange Online | HEYID",
        description:
          "Practice a foreign language by chatting with native speakers on HEYID. Automatic translation helps when words run out.",
        h1: "Language exchange with people from around the world",
        intro:
          "The best way to learn a language is talking to someone who speaks it every day — HEYID makes it easier to find them.",
        body: [
          "When your vocabulary runs short, HEYID's automatic translation helps you finish the thought so the conversation keeps flowing.",
          "SPARX can suggest how to phrase a reply when you're practicing a new language and not feeling confident yet.",
        ],
      },
    },
  },
  // --- Country variant example (pattern to replicate for other countries) ---
  {
    id: "random-chat-poland",
    topic: "random-chat",
    countrySlug: "poland",
    keyword: "random chat with people from Poland",
    intent: "country-specific-chat",
    cta: "startRandomChat",
    relatedTopics: ["random-chat", "language-exchange"],
    content: {
      pl: {
        title: "Losowy czat z osobami z Polski | HEYID",
        description:
          "Rozmawiaj losowo z osobami z Polski na HEYID. Automatyczne tłumaczenie ułatwia rozmowę, jeśli akurat piszecie różnymi językami.",
        h1: "Losowy czat z osobami z Polski",
        intro:
          "Szukasz rozmowy akurat z kimś z Polski? HEYID pozwala trafić na losową osobę stamtąd i od razu zacząć pisać.",
        body: [
          "Nawet jeśli druga osoba pisze po polsku, a Ty wolisz inny język, tłumaczenie wiadomości w HEYID pozwala rozmawiać bez przeszkód.",
        ],
      },
      en: {
        title: "Random Chat with People from Poland | HEYID",
        description:
          "Chat randomly with people from Poland on HEYID. Automatic translation makes the conversation easy even across languages.",
        h1: "Random chat with people from Poland",
        intro:
          "Looking to talk specifically with someone from Poland? HEYID can match you with a random person from there and get the conversation going right away.",
        body: [
          "Even if the other person writes in Polish and you'd rather use another language, HEYID's message translation keeps the conversation smooth.",
        ],
      },
    },
  },
];

export function getSeoPageBySlug(topic: string, countrySlug?: string): SeoPage | undefined {
  return SEO_PAGES.find(
    (p) => p.topic === topic && (countrySlug ? p.countrySlug === countrySlug : !p.countrySlug)
  );
}

export function getRelatedPages(page: SeoPage): SeoPage[] {
  return page.relatedTopics
    .map((t) => getSeoPageBySlug(t))
    .filter((p): p is SeoPage => Boolean(p));
}
