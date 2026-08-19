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
  {
    id: "random-chat-germany",
    topic: "random-chat",
    countrySlug: "germany",
    keyword: "random chat with people from Germany",
    intent: "country-specific-chat",
    cta: "startRandomChat",
    relatedTopics: ["random-chat", "language-exchange"],
    content: {
      pl: {
        title: "Losowy czat z osobami z Niemiec | HEYID",
        description:
          "Rozmawiaj losowo z osobami z Niemiec na HEYID. Automatyczne tłumaczenie ułatwia rozmowę, nawet jeśli piszecie różnymi językami.",
        h1: "Losowy czat z osobami z Niemiec",
        intro:
          "Chcesz trafić akurat na kogoś z Niemiec? HEYID losuje rozmówcę i od razu tłumaczy wiadomości między językami.",
        body: [
          "Nie musisz znać niemieckiego, żeby swobodnie rozmawiać — piszesz po polsku, druga osoba czyta po niemiecku, i odwrotnie.",
          "To dobry sposób, żeby przy okazji osłuchać się z językiem sąsiada, bez presji mówienia od razu poprawnie.",
        ],
      },
      en: {
        title: "Random Chat with People from Germany | HEYID",
        description:
          "Chat randomly with people from Germany on HEYID. Automatic translation makes the conversation easy even across languages.",
        h1: "Random chat with people from Germany",
        intro:
          "Want to match specifically with someone from Germany? HEYID picks a random partner and translates messages between languages instantly.",
        body: [
          "You don't need to speak German to have a real conversation — you write in your language, they read in theirs, and vice versa.",
          "It's also a low-pressure way to pick up some German along the way, without needing to get it perfect from the start.",
        ],
      },
    },
  },
  {
    id: "random-chat-spain",
    topic: "random-chat",
    countrySlug: "spain",
    keyword: "random chat with people from Spain",
    intent: "country-specific-chat",
    cta: "startRandomChat",
    relatedTopics: ["random-chat", "language-exchange"],
    content: {
      pl: {
        title: "Losowy czat z osobami z Hiszpanii | HEYID",
        description:
          "Rozmawiaj losowo z osobami z Hiszpanii na HEYID. Wiadomości tłumaczą się automatycznie, więc hiszpański nie jest barierą.",
        h1: "Losowy czat z osobami z Hiszpanii",
        intro:
          "Losowa rozmowa z kimś z Hiszpanii to szansa na nową znajomość i kontakt z innym stylem rozmowy — bez potrzeby znajomości hiszpańskiego.",
        body: [
          "HEYID tłumaczy wiadomości w obie strony, więc rozmowa toczy się naturalnie, nawet jeśli żadna ze stron nie zna języka drugiej osoby.",
          "Jeśli akurat uczysz się hiszpańskiego, taka rozmowa to praktyczna okazja, żeby zobaczyć język w codziennym użyciu.",
        ],
      },
      en: {
        title: "Random Chat with People from Spain | HEYID",
        description:
          "Chat randomly with people from Spain on HEYID. Messages are translated automatically, so Spanish isn't a barrier.",
        h1: "Random chat with people from Spain",
        intro:
          "A random chat with someone from Spain is a chance for a new connection and a different conversational style — no Spanish required.",
        body: [
          "HEYID translates messages both ways, so the conversation flows naturally even if neither side speaks the other's language.",
          "If you're learning Spanish, this kind of chat is a practical way to see the language used in everyday context.",
        ],
      },
    },
  },
  {
    id: "random-chat-france",
    topic: "random-chat",
    countrySlug: "france",
    keyword: "random chat with people from France",
    intent: "country-specific-chat",
    cta: "startRandomChat",
    relatedTopics: ["random-chat", "language-exchange"],
    content: {
      pl: {
        title: "Losowy czat z osobami z Francji | HEYID",
        description:
          "Rozmawiaj losowo z osobami z Francji na HEYID. Automatyczne tłumaczenie sprawia, że francuski nie jest przeszkodą w rozmowie.",
        h1: "Losowy czat z osobami z Francji",
        intro:
          "HEYID pozwala trafić na losową osobę z Francji i od razu zacząć rozmowę — bez znajomości francuskiego.",
        body: [
          "Wiadomości tłumaczone są automatycznie w czasie rzeczywistym, więc możesz pisać po polsku, a druga osoba przeczyta wszystko po francusku.",
          "To wygodny sposób na poznanie kogoś nowego bez wcześniejszego researchu, o czym rozmawiać — SPARX podpowie, jeśli zabraknie pomysłów.",
        ],
      },
      en: {
        title: "Random Chat with People from France | HEYID",
        description:
          "Chat randomly with people from France on HEYID. Automatic translation means French isn't a barrier to the conversation.",
        h1: "Random chat with people from France",
        intro:
          "HEYID can match you with a random person from France and get the conversation started right away — no French needed.",
        body: [
          "Messages are translated automatically in real time, so you can write in your language and the other person reads it all in French.",
          "It's a convenient way to meet someone new without prior research on what to talk about — SPARX can help if you run out of ideas.",
        ],
      },
    },
  },
  {
    id: "random-chat-japan",
    topic: "random-chat",
    countrySlug: "japan",
    keyword: "random chat with people from Japan",
    intent: "country-specific-chat",
    cta: "startRandomChat",
    relatedTopics: ["random-chat", "language-exchange"],
    content: {
      pl: {
        title: "Losowy czat z osobami z Japonii | HEYID",
        description:
          "Rozmawiaj losowo z osobami z Japonii na HEYID. Tłumaczenie wiadomości działa automatycznie, więc japoński nie jest przeszkodą.",
        h1: "Losowy czat z osobami z Japonii",
        intro:
          "Rozmowa z kimś z Japonii zwykle oznacza inny alfabet i inny sposób pisania — HEYID tłumaczy to wszystko na bieżąco.",
        body: [
          "Piszesz normalnie po polsku, a druga osoba czyta wiadomość już przetłumaczoną na japoński — i odwrotnie, gdy odpisuje.",
          "To dobra okazja, żeby dowiedzieć się czegoś o codziennym życiu w Japonii bezpośrednio od kogoś stamtąd.",
        ],
      },
      en: {
        title: "Random Chat with People from Japan | HEYID",
        description:
          "Chat randomly with people from Japan on HEYID. Message translation happens automatically, so Japanese isn't a barrier.",
        h1: "Random chat with people from Japan",
        intro:
          "Talking to someone from Japan usually means a different alphabet and writing style — HEYID translates all of it on the fly.",
        body: [
          "You write normally in your language, and the other person reads it already translated into Japanese — and the same when they reply.",
          "It's a good chance to learn something about everyday life in Japan straight from someone who lives it.",
        ],
      },
    },
  },
  {
    id: "random-chat-united-states",
    topic: "random-chat",
    countrySlug: "united-states",
    keyword: "random chat with people from the United States",
    intent: "country-specific-chat",
    cta: "startRandomChat",
    relatedTopics: ["random-chat", "language-exchange"],
    content: {
      pl: {
        title: "Losowy czat z osobami ze Stanów Zjednoczonych | HEYID",
        description:
          "Rozmawiaj losowo z osobami ze Stanów Zjednoczonych na HEYID. Tłumaczenie wiadomości ułatwia rozmowę, nawet jeśli nie znasz angielskiego biegle.",
        h1: "Losowy czat z osobami ze Stanów Zjednoczonych",
        intro:
          "Nawet jeśli Twój angielski nie jest jeszcze na wysokim poziomie, HEYID pozwala swobodnie porozmawiać z kimś z USA.",
        body: [
          "Piszesz po polsku, druga osoba czyta po angielsku — tłumaczenie działa automatycznie w obie strony przez cały czas rozmowy.",
          "To też praktyczny sposób na osłuchanie się z codziennym, potocznym angielskim, jakim rozmawiają rówieśnicy z USA.",
        ],
      },
      en: {
        title: "Random Chat with People from the United States | HEYID",
        description:
          "Chat randomly with people from the United States on HEYID. Message translation makes the conversation easy either way.",
        h1: "Random chat with people from the United States",
        intro:
          "HEYID can match you with a random person from the United States and translate the conversation automatically as you go.",
        body: [
          "You write in your own language, they read it in English — and the same happens in reverse when they reply.",
          "It's also a practical way to pick up everyday, conversational English the way people actually use it.",
        ],
      },
    },
  },
  {
    id: "talk-to-strangers-germany",
    topic: "talk-to-strangers",
    countrySlug: "germany",
    keyword: "talk to strangers from Germany",
    intent: "country-specific-chat",
    cta: "talkToStrangers",
    relatedTopics: ["talk-to-strangers", "random-chat"],
    content: {
      pl: {
        title: "Rozmawiaj z nieznajomymi z Niemiec | HEYID",
        description:
          "Poznaj nieznajomych z Niemiec na HEYID i rozmawiaj bez bariery językowej dzięki automatycznemu tłumaczeniu wiadomości.",
        h1: "Rozmowy z nieznajomymi z Niemiec",
        intro:
          "Nie trzeba znać nikogo wcześniej, żeby zacząć ciekawą rozmowę — HEYID łączy Cię z nieznajomymi z Niemiec w kilka sekund.",
        body: [
          "Automatyczne tłumaczenie sprawia, że różnica języków nie jest problemem — piszesz po swojemu, druga osoba czyta po niemiecku.",
          "Jeśli rozmowa się urwie, SPARX podpowie, jak ją naturalnie kontynuować.",
        ],
      },
      en: {
        title: "Talk to Strangers from Germany | HEYID",
        description:
          "Meet strangers from Germany on HEYID and chat without a language barrier thanks to automatic message translation.",
        h1: "Talk to strangers from Germany",
        intro:
          "You don't need to know anyone in advance to start an interesting conversation — HEYID connects you with strangers from Germany in seconds.",
        body: [
          "Automatic translation means the language difference isn't a problem — you write in your own language, they read it in German.",
          "If the conversation stalls, SPARX can suggest a natural way to keep it going.",
        ],
      },
    },
  },
  {
    id: "talk-to-strangers-spain",
    topic: "talk-to-strangers",
    countrySlug: "spain",
    keyword: "talk to strangers from Spain",
    intent: "country-specific-chat",
    cta: "talkToStrangers",
    relatedTopics: ["talk-to-strangers", "random-chat"],
    content: {
      pl: {
        title: "Rozmawiaj z nieznajomymi z Hiszpanii | HEYID",
        description:
          "Poznaj nieznajomych z Hiszpanii na HEYID i rozmawiaj bez bariery językowej dzięki automatycznemu tłumaczeniu wiadomości.",
        h1: "Rozmowy z nieznajomymi z Hiszpanii",
        intro:
          "Rozmowa z kimś z Hiszpanii, kogo nigdy wcześniej nie znałeś, to jeden klik od Ciebie — reszta idzie sama.",
        body: [
          "Nie musisz znać hiszpańskiego — HEYID tłumaczy wiadomości na bieżąco, więc rozmowa toczy się naturalnie.",
          "Powiadomienia dają znać, gdy druga osoba odpisze, więc łatwo wrócić do dobrze zapowiadającej się rozmowy.",
        ],
      },
      en: {
        title: "Talk to Strangers from Spain | HEYID",
        description:
          "Meet strangers from Spain on HEYID and chat without a language barrier thanks to automatic message translation.",
        h1: "Talk to strangers from Spain",
        intro:
          "Talking to someone from Spain you've never met before is one tap away — the rest takes care of itself.",
        body: [
          "You don't need to speak Spanish — HEYID translates messages on the fly, so the conversation flows naturally.",
          "Notifications let you know when the other person replies, so it's easy to return to a conversation that's off to a good start.",
        ],
      },
    },
  },
  {
    id: "talk-to-strangers-france",
    topic: "talk-to-strangers",
    countrySlug: "france",
    keyword: "talk to strangers from France",
    intent: "country-specific-chat",
    cta: "talkToStrangers",
    relatedTopics: ["talk-to-strangers", "random-chat"],
    content: {
      pl: {
        title: "Rozmawiaj z nieznajomymi z Francji | HEYID",
        description:
          "Poznaj nieznajomych z Francji na HEYID i rozmawiaj bez bariery językowej dzięki automatycznemu tłumaczeniu wiadomości.",
        h1: "Rozmowy z nieznajomymi z Francji",
        intro:
          "HEYID łączy Cię z nieznajomymi z Francji, żeby rozmowa mogła zacząć się od razu, bez formalności.",
        body: [
          "Piszesz w swoim języku, druga osoba czyta po francusku — tłumaczenie dzieje się automatycznie w tle.",
          "To dobry sposób na poznanie nowej perspektywy, bez presji, że trzeba znać język rozmówcy.",
        ],
      },
      en: {
        title: "Talk to Strangers from France | HEYID",
        description:
          "Meet strangers from France on HEYID and chat without a language barrier thanks to automatic message translation.",
        h1: "Talk to strangers from France",
        intro:
          "HEYID connects you with strangers from France so the conversation can start right away, without any formalities.",
        body: [
          "You write in your own language, they read it in French — translation happens automatically in the background.",
          "It's a good way to hear a new perspective, without any pressure to know the other person's language.",
        ],
      },
    },
  },
  {
    id: "talk-to-strangers-japan",
    topic: "talk-to-strangers",
    countrySlug: "japan",
    keyword: "talk to strangers from Japan",
    intent: "country-specific-chat",
    cta: "talkToStrangers",
    relatedTopics: ["talk-to-strangers", "random-chat"],
    content: {
      pl: {
        title: "Rozmawiaj z nieznajomymi z Japonii | HEYID",
        description:
          "Poznaj nieznajomych z Japonii na HEYID i rozmawiaj bez bariery językowej dzięki automatycznemu tłumaczeniu wiadomości.",
        h1: "Rozmowy z nieznajomymi z Japonii",
        intro:
          "Inny alfabet i inna kultura nie muszą oznaczać bariery — HEYID tłumaczy rozmowę z kimś z Japonii na bieżąco.",
        body: [
          "Wiadomości tłumaczą się automatycznie w obie strony, więc możesz spokojnie pisać po polsku.",
          "To okazja, żeby dowiedzieć się czegoś nowego o codziennym życiu w Japonii wprost od nieznajomej osoby stamtąd.",
        ],
      },
      en: {
        title: "Talk to Strangers from Japan | HEYID",
        description:
          "Meet strangers from Japan on HEYID and chat without a language barrier thanks to automatic message translation.",
        h1: "Talk to strangers from Japan",
        intro:
          "A different alphabet and culture don't have to be a barrier — HEYID translates a conversation with someone from Japan as it happens.",
        body: [
          "Messages are translated automatically both ways, so you can write comfortably in your own language.",
          "It's a chance to learn something new about everyday life in Japan straight from a stranger who lives it.",
        ],
      },
    },
  },
  {
    id: "talk-to-strangers-united-states",
    topic: "talk-to-strangers",
    countrySlug: "united-states",
    keyword: "talk to strangers from the United States",
    intent: "country-specific-chat",
    cta: "talkToStrangers",
    relatedTopics: ["talk-to-strangers", "random-chat"],
    content: {
      pl: {
        title: "Rozmawiaj z nieznajomymi ze Stanów Zjednoczonych | HEYID",
        description:
          "Poznaj nieznajomych ze Stanów Zjednoczonych na HEYID i rozmawiaj bez bariery językowej dzięki automatycznemu tłumaczeniu.",
        h1: "Rozmowy z nieznajomymi ze Stanów Zjednoczonych",
        intro:
          "HEYID pozwala rozpocząć rozmowę z nieznajomym ze Stanów Zjednoczonych bez wcześniejszego umawiania się.",
        body: [
          "Nawet jeśli Twój angielski nie jest perfekcyjny, tłumaczenie wiadomości sprawia, że rozmowa toczy się bez zająknięcia.",
          "SPARX podpowie, co napisać, jeśli zabraknie Ci pomysłu na kolejną wiadomość.",
        ],
      },
      en: {
        title: "Talk to Strangers from the United States | HEYID",
        description:
          "Meet strangers from the United States on HEYID and chat without a language barrier thanks to automatic message translation.",
        h1: "Talk to strangers from the United States",
        intro:
          "HEYID lets you start a conversation with a stranger from the United States without arranging it in advance.",
        body: [
          "Even if your English isn't perfect, message translation keeps the conversation flowing smoothly.",
          "SPARX can suggest what to write if you run out of ideas for your next message.",
        ],
      },
    },
  },


// ============================================================
  // BATCH 2 — 20 dating/flirt-angle topics (paste before closing "];")
  // ============================================================
  {
    id: "online-dating-chat",
    topic: "online-dating-chat",
    keyword: "online dating chat",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["flirt-chat-online", "chat-for-singles", "random-dating-chat"],
    content: {
      pl: {
        title: "Czat randkowy online | HEYID",
        description:
          "Poznawaj nowe osoby w luźnej, randkowej atmosferze na HEYID. Rozmowa bez presji spotkania na żywo, w swoim tempie.",
        h1: "Czat randkowy online",
        intro:
          "Zanim dojdzie do spotkania na żywo, warto najpierw po prostu porozmawiać. HEYID daje na to przestrzeń, bez presji i formalności.",
        body: [
          "Losowa rozmowa pozwala zobaczyć, czy jest chemia w rozmowie, zanim zdecydujesz się na cokolwiek więcej.",
          "Automatyczne tłumaczenie otwiera rozmowę też na osoby z innych krajów, więc krąg poznawanych ludzi nie kończy się na Twoim mieście.",
        ],
      },
      en: {
        title: "Online Dating Chat | HEYID",
        description:
          "Meet new people in a relaxed, dating-friendly atmosphere on HEYID. Chat at your own pace, no pressure to meet in person.",
        h1: "Online dating chat",
        intro:
          "Before things get to an in-person meeting, it helps to just talk first. HEYID gives you space for that, without pressure or formality.",
        body: [
          "A random conversation lets you see if there's chemistry before deciding on anything more.",
          "Automatic translation opens things up to people from other countries too, so the pool isn't limited to your own city.",
        ],
      },
    },
  },
  {
    id: "flirt-chat-online",
    topic: "flirt-chat-online",
    keyword: "flirt chat online",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["online-dating-chat", "casual-chat-flirt", "chat-for-singles"],
    content: {
      pl: {
        title: "Czat na flirt online | HEYID",
        description:
          "Lekka, flirciarska rozmowa z kimś nowym? HEYID pozwala pisać swobodnie, a SPARX podpowie, jak utrzymać rozmowę w dobrym tonie.",
        h1: "Czat na flirt online",
        intro:
          "Nie każda rozmowa musi być poważna — czasem chodzi po prostu o lekką, przyjemną wymianę zdań z kimś nowym.",
        body: [
          "HEYID losuje rozmówcę, więc każda rozmowa to inna dynamika i inny styl flirtu, bez wcześniejszego umawiania się.",
          "Jeśli nie wiesz, jak zacząć, SPARX podpowie pierwszą wiadomość, która nie brzmi jak wyuczona formułka.",
        ],
      },
      en: {
        title: "Flirt Chat Online | HEYID",
        description:
          "Looking for a light, flirty conversation with someone new? HEYID lets you chat freely, and SPARX can help keep the tone right.",
        h1: "Flirt chat online",
        intro:
          "Not every conversation needs to be serious — sometimes it's just about a light, fun exchange with someone new.",
        body: [
          "HEYID matches you randomly, so every chat has a different dynamic and a different flirting style, no need to arrange it in advance.",
          "If you're not sure how to open, SPARX can suggest a first line that doesn't sound like a rehearsed script.",
        ],
      },
    },
  },
  {
    id: "random-dating-chat",
    topic: "random-dating-chat",
    keyword: "random dating chat",
    intent: "start-random-chat",
    cta: "startRandomChat",
    relatedTopics: ["online-dating-chat", "flirt-chat-online", "meet-someone-new-tonight"],
    content: {
      pl: {
        title: "Losowy czat randkowy | HEYID",
        description:
          "Zamiast przewijać profile, HEYID od razu łączy Cię z losową osobą do rozmowy — bez swipe'owania, bez algorytmu dopasowań.",
        h1: "Losowy czat randkowy",
        intro:
          "Zwykłe aplikacje randkowe każą Ci przewijać dziesiątki profili. HEYID pomija ten etap i łączy Cię od razu z osobą do rozmowy.",
        body: [
          "Nie ma tu algorytmu, który decyduje, kto pasuje do kogo — trafiasz na losową osobę i sami decydujecie, czy rozmowa się klei.",
          "Jeśli spotkanie akurat okaże się nietrafione, wystarczy zacząć nową rozmowę — bez tłumaczenia się czy niezręcznego kończenia znajomości.",
        ],
      },
      en: {
        title: "Random Dating Chat | HEYID",
        description:
          "Instead of swiping through profiles, HEYID matches you directly with a random person to talk to — no swiping, no matching algorithm.",
        h1: "Random dating chat",
        intro:
          "Typical dating apps make you scroll through dozens of profiles. HEYID skips that step and connects you straight to a person to talk to.",
        body: [
          "There's no algorithm deciding who's a match for who — you get a random person, and you both decide if the conversation clicks.",
          "If a match doesn't work out, you can just start a new conversation — no explaining, no awkward unmatching.",
        ],
      },
    },
  },
  {
    id: "chat-to-find-love",
    topic: "chat-to-find-love",
    keyword: "chat app to find love",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["online-dating-chat", "chat-for-singles", "long-distance-chat"],
    content: {
      pl: {
        title: "Poznaj kogoś przez czat | HEYID",
        description:
          "Nie każda znajomość zaczyna się od aplikacji randkowej. HEYID pozwala poznać kogoś naturalnie, przez zwykłą rozmowę.",
        h1: "Poznaj kogoś przez rozmowę",
        intro:
          "Czasem najlepszy sposób na poznanie kogoś to zwyczajna rozmowa, bez presji, że musi z tego coś od razu wyniknąć.",
        body: [
          "HEYID nie zmusza Cię do deklarowania, czego szukasz — możesz po prostu porozmawiać i zobaczyć, jak się rozwinie znajomość.",
          "Automatyczne tłumaczenie sprawia, że osoba, którą poznasz, wcale nie musi mieszkać w Twoim kraju.",
        ],
      },
      en: {
        title: "Meet Someone Through Chat | HEYID",
        description:
          "Not every connection has to start with a dating app. HEYID lets you meet someone naturally, through an ordinary conversation.",
        h1: "Meet someone through conversation",
        intro:
          "Sometimes the best way to meet someone is just an ordinary chat, without the pressure of it having to lead anywhere specific right away.",
        body: [
          "HEYID doesn't make you declare what you're looking for — you can simply talk and see how the connection develops.",
          "Automatic translation means the person you meet doesn't even have to live in your country.",
        ],
      },
    },
  },
  {
    id: "anonymous-dating-chat",
    topic: "anonymous-dating-chat",
    keyword: "anonymous dating chat",
    intent: "learn-anonymous-chat",
    cta: "tryIt",
    relatedTopics: ["safe-flirt-chat", "online-dating-chat", "anonymous-chat"],
    content: {
      pl: {
        title: "Anonimowy czat randkowy | HEYID",
        description:
          "Chcesz poznać kogoś bez upubliczniania profilu z prawdziwym zdjęciem i imieniem od razu? HEYID pozwala zacząć anonimowo.",
        h1: "Anonimowy czat randkowy",
        intro:
          "Nie każdy chce od razu pokazywać pełny profil z prawdziwym imieniem i zdjęciem. HEYID pozwala zacząć rozmowę bardziej anonimowo.",
        body: [
          "Możesz zdecydować, ile o sobie zdradzić i kiedy — rozmowa nie wymaga natychmiastowego pokazania wszystkiego.",
          "Jeśli w którymś momencie rozmowa przestanie Ci odpowiadać, w każdej chwili możesz ją zakończyć albo zablokować drugą osobę.",
        ],
      },
      en: {
        title: "Anonymous Dating Chat | HEYID",
        description:
          "Want to meet someone without a public profile showing your real photo and name right away? HEYID lets you start anonymously.",
        h1: "Anonymous dating chat",
        intro:
          "Not everyone wants to show a full profile with a real name and photo right off the bat. HEYID lets you start the conversation more anonymously.",
        body: [
          "You decide how much to share and when — the conversation doesn't require showing everything up front.",
          "If a conversation stops working for you at any point, you can end it or block the other person right away.",
        ],
      },
    },
  },
  {
    id: "international-dating-chat",
    topic: "international-dating-chat",
    keyword: "international dating chat",
    intent: "international-chat",
    cta: "noLanguageBarrier",
    relatedTopics: ["online-dating-chat", "international-chat", "long-distance-chat"],
    content: {
      pl: {
        title: "Randki międzynarodowe — czat bez granic | HEYID",
        description:
          "Poznawaj osoby z innych krajów w randkowej atmosferze. HEYID tłumaczy wiadomości automatycznie, więc język nie jest przeszkodą.",
        h1: "Randki międzynarodowe bez bariery językowej",
        intro:
          "Ograniczanie się do osób z własnego kraju znacznie zawęża krąg poznawanych ludzi. HEYID otwiera tę przestrzeń na cały świat.",
        body: [
          "Piszesz w swoim języku, druga osoba czyta w swoim — tłumaczenie działa automatycznie w obie strony przez całą rozmowę.",
          "Międzynarodowa rozmowa to też okazja, żeby zobaczyć inny styl flirtowania i inne podejście do randkowania niż w Twoim kraju.",
        ],
      },
      en: {
        title: "International Dating Chat — Talk Across Borders | HEYID",
        description:
          "Meet people from other countries in a dating-friendly atmosphere. HEYID translates messages automatically, so language isn't a barrier.",
        h1: "International dating chat without a language barrier",
        intro:
          "Limiting yourself to people from your own country narrows the pool a lot. HEYID opens that space up to the whole world.",
        body: [
          "You write in your own language, the other person reads in theirs — translation works automatically both ways throughout the chat.",
          "An international conversation is also a chance to see a different flirting style and a different approach to dating than what you're used to.",
        ],
      },
    },
  },
  {
    id: "chat-for-singles",
    topic: "chat-for-singles",
    keyword: "chat app for singles",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["online-dating-chat", "chat-to-find-love", "flirt-chat-online"],
    content: {
      pl: {
        title: "Czat dla singli | HEYID",
        description:
          "Jesteś singlem i szukasz miejsca, gdzie możesz poznać kogoś nowego bez presji? HEYID daje przestrzeń na luźną rozmowę.",
        h1: "Czat dla singli",
        intro:
          "Bycie singlem nie musi oznaczać ciągłego przeglądania profili w poszukiwaniu idealnego dopasowania. HEYID stawia najpierw na rozmowę.",
        body: [
          "Zamiast oceniać kogoś po zdjęciu profilowym, zaczynasz od zwykłej wymiany zdań — reszta wychodzi w rozmowie.",
          "Nawet jeśli akurat nie szukasz niczego poważnego, luźna rozmowa z kimś nowym bywa po prostu przyjemną odmianą.",
        ],
      },
      en: {
        title: "Chat App for Singles | HEYID",
        description:
          "Single and looking for a place to meet someone new without pressure? HEYID gives you room for a relaxed conversation.",
        h1: "Chat app for singles",
        intro:
          "Being single doesn't have to mean constantly scrolling through profiles looking for the perfect match. HEYID puts the conversation first.",
        body: [
          "Instead of judging someone by a profile photo, you start with an ordinary exchange — the rest comes out through talking.",
          "Even if you're not looking for anything serious right now, a relaxed chat with someone new can just be a nice change of pace.",
        ],
      },
    },
  },
  {
    id: "dating-chat-no-registration",
    topic: "dating-chat-no-registration",
    keyword: "dating chat without registration",
    intent: "start-random-chat",
    cta: "startRandomChat",
    relatedTopics: ["random-dating-chat", "chat-without-registration", "online-dating-chat"],
    content: {
      pl: {
        title: "Czat randkowy bez długiej rejestracji | HEYID",
        description:
          "Nie chcesz wypełniać rozbudowanego kwestionariusza, zanim zaczniesz rozmawiać? HEYID skraca ten etap do minimum.",
        h1: "Czat randkowy bez zbędnej rejestracji",
        intro:
          "Wiele aplikacji randkowych każe najpierw wypełnić długi kwestionariusz o sobie. HEYID pozwala dojść do rozmowy dużo szybciej.",
        body: [
          "Zamiast serii pytań o preferencje, zaczynasz od razu od rozmowy, a szczegóły uzupełniasz w swoim tempie, jeśli w ogóle chcesz.",
          "To podejście lepiej sprawdza się dla osób, które wolą ocenić kogoś po rozmowie niż po odpowiedziach w formularzu.",
        ],
      },
      en: {
        title: "Dating Chat Without Long Registration | HEYID",
        description:
          "Don't want to fill in a long questionnaire before you start chatting? HEYID keeps that step to a minimum.",
        h1: "Dating chat without unnecessary registration",
        intro:
          "Many dating apps make you fill in a long questionnaire about yourself first. HEYID gets you to the actual conversation much faster.",
        body: [
          "Instead of a series of preference questions, you start with the conversation right away and fill in details at your own pace, if at all.",
          "This works better for people who'd rather judge someone by talking to them than by their answers on a form.",
        ],
      },
    },
  },
  {
    id: "text-based-dating",
    topic: "text-based-dating",
    keyword: "text based dating app",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-for-shy-singles", "chat-for-introverts", "online-dating-chat"],
    content: {
      pl: {
        title: "Randki przez tekst, bez wideo | HEYID",
        description:
          "Nie każdemu leży rozmowa wideo z obcą osobą. HEYID pozwala poznawać ludzi w formie tekstowej, we własnym tempie.",
        h1: "Randki przez tekst, bez rozmowy wideo",
        intro:
          "Rozmowa wideo z nieznajomym bywa krępująca, zanim jeszcze się kogoś pozna. HEYID stawia najpierw na tekst.",
        body: [
          "Pisanie daje więcej czasu na przemyślenie odpowiedzi i mniej presji niż rozmowa twarzą w twarz na żywo.",
          "Dopiero kiedy rozmowa naturalnie się rozwinie, sami decydujecie, czy przenieść ją na inną formę kontaktu.",
        ],
      },
      en: {
        title: "Text-Based Dating, No Video | HEYID",
        description:
          "Not everyone is comfortable with a video call to a stranger. HEYID lets you meet people through text, at your own pace.",
        h1: "Text-based dating, no video call required",
        intro:
          "A video call with a stranger can feel awkward before you even get to know them. HEYID puts text first.",
        body: [
          "Writing gives you more time to think through a reply and feels less pressured than a live face-to-face conversation.",
          "Only once the conversation naturally develops do you decide together whether to move it to another form of contact.",
        ],
      },
    },
  },
  {
    id: "chat-for-shy-singles",
    topic: "chat-for-shy-singles",
    keyword: "dating chat for shy people",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["text-based-dating", "chat-for-introverts", "chat-for-singles"],
    content: {
      pl: {
        title: "Czat randkowy dla nieśmiałych | HEYID",
        description:
          "Nieśmiałość nie musi przeszkadzać w poznawaniu ludzi. HEYID pozwala pisać we własnym tempie, a SPARX pomoże, gdy zabraknie słów.",
        h1: "Czat randkowy dla osób nieśmiałych",
        intro:
          "Podejście do obcej osoby na żywo bywa trudne, jeśli jesteś nieśmiały. Pisanie zwykle daje więcej przestrzeni i mniej presji.",
        body: [
          "Nie musisz od razu być błyskotliwy — masz czas, żeby przemyśleć odpowiedź, zanim ją wyślesz.",
          "Jeśli brakuje Ci pomysłu, jak podtrzymać rozmowę, SPARX podpowie kolejne pytanie albo temat.",
        ],
      },
      en: {
        title: "Dating Chat for Shy People | HEYID",
        description:
          "Being shy doesn't have to get in the way of meeting people. HEYID lets you write at your own pace, and SPARX can help when words run out.",
        h1: "Dating chat for shy people",
        intro:
          "Approaching a stranger in person can be hard if you're shy. Writing usually gives you more room and less pressure.",
        body: [
          "You don't have to be witty right away — you have time to think through a reply before sending it.",
          "If you're stuck on how to keep the conversation going, SPARX can suggest the next question or topic.",
        ],
      },
    },
  },
  {
    id: "dating-chat-language-barrier",
    topic: "dating-chat-language-barrier",
    keyword: "dating chat no language barrier",
    intent: "international-chat",
    cta: "noLanguageBarrier",
    relatedTopics: ["international-dating-chat", "voice-translation-chat", "online-dating-chat"],
    content: {
      pl: {
        title: "Randki bez bariery językowej | HEYID",
        description:
          "Nie znasz języka drugiej osoby? W HEYID to nie problem — wiadomości tłumaczą się automatycznie w czasie rzeczywistym.",
        h1: "Randki bez bariery językowej",
        intro:
          "Brak wspólnego języka zwykle kończy rozmowę, zanim się zacznie. HEYID rozwiązuje ten problem od razu, tłumacząc wiadomości na bieżąco.",
        body: [
          "Nie musisz znać języka drugiej osoby, żeby zbudować z nią więź — piszesz po swojemu, ona czyta po swojemu.",
          "To otwiera randkowanie na osoby, których wcześniej nawet byś nie brał pod uwagę tylko z powodu języka.",
        ],
      },
      en: {
        title: "Dating Chat with No Language Barrier | HEYID",
        description:
          "Don't speak the other person's language? On HEYID it's not a problem — messages are translated automatically in real time.",
        h1: "Dating chat with no language barrier",
        intro:
          "Not sharing a language usually ends a conversation before it starts. HEYID solves that right away by translating messages on the fly.",
        body: [
          "You don't need to know the other person's language to build a connection — you write in yours, they read in theirs.",
          "It opens up dating to people you might never have considered before, just because of the language.",
        ],
      },
    },
  },
  {
    id: "long-distance-chat",
    topic: "long-distance-chat",
    keyword: "long distance chat app",
    intent: "international-chat",
    cta: "noLanguageBarrier",
    relatedTopics: ["international-dating-chat", "chat-to-find-love", "international-chat"],
    content: {
      pl: {
        title: "Poznaj kogoś z daleka | HEYID",
        description:
          "Odległość i inny kraj to nie zawsze przeszkoda. HEYID łączy Cię z osobami z całego świata, z automatycznym tłumaczeniem wiadomości.",
        h1: "Poznaj kogoś z drugiego końca świata",
        intro:
          "Niektóre znajomości zaczynają się właśnie od dużej odległości — a mimo to potrafią się rozwinąć w coś więcej niż zwykła rozmowa.",
        body: [
          "HEYID losuje rozmówcę z dowolnego miejsca na świecie, więc odległość geograficzna nie ogranicza tego, kogo możesz poznać.",
          "Regularne powiadomienia pomagają utrzymać kontakt, nawet jeśli druga osoba jest w zupełnie innej strefie czasowej.",
        ],
      },
      en: {
        title: "Meet Someone from Far Away | HEYID",
        description:
          "Distance and a different country aren't always a dealbreaker. HEYID connects you with people around the world, with automatic message translation.",
        h1: "Meet someone from the other side of the world",
        intro:
          "Some connections start with real distance between two people — and still manage to grow into something more than a one-off conversation.",
        body: [
          "HEYID matches you with someone from anywhere in the world, so geography doesn't limit who you can meet.",
          "Notifications help you keep the conversation going, even when the other person is in a completely different time zone.",
        ],
      },
    },
  },
  {
    id: "casual-chat-flirt",
    topic: "casual-chat-flirt",
    keyword: "casual flirt chat",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["flirt-chat-online", "chat-for-singles", "random-dating-chat"],
    content: {
      pl: {
        title: "Luźny flirt online, bez zobowiązań | HEYID",
        description:
          "Chcesz po prostu miło spędzić czas na rozmowie, bez presji, że to musi do czegoś prowadzić? HEYID daje na to przestrzeń.",
        h1: "Luźny flirt online",
        intro:
          "Nie każda rozmowa musi zmierzać do czegoś poważnego. Czasem chodzi po prostu o przyjemną, lekką wymianę zdań.",
        body: [
          "HEYID nie wymaga deklaracji, czego szukasz — rozmowa może zostać dokładnie tym, na co obie strony mają ochotę.",
          "Losowość sprawia, że każda rozmowa ma inny klimat, więc łatwo trafić na kogoś z podobnym poczuciem humoru.",
        ],
      },
      en: {
        title: "Casual Flirt Chat, No Strings Attached | HEYID",
        description:
          "Just want to enjoy a fun conversation, no pressure for it to lead anywhere? HEYID gives you room for exactly that.",
        h1: "Casual flirt chat",
        intro:
          "Not every conversation has to be heading somewhere serious. Sometimes it's just about a fun, light exchange.",
        body: [
          "HEYID doesn't ask you to declare what you're looking for — the conversation can stay exactly what both sides want it to be.",
          "The randomness means every chat has a different vibe, making it easier to match with someone whose humor clicks with yours.",
        ],
      },
    },
  },
  {
    id: "dating-chat-app-alternative",
    topic: "dating-chat-app-alternative",
    keyword: "alternative to dating apps",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["random-dating-chat", "chat-for-singles", "online-dating-chat"],
    content: {
      pl: {
        title: "Alternatywa dla klasycznych aplikacji randkowych | HEYID",
        description:
          "Zmęczony przewijaniem profili? HEYID odwraca kolejność: najpierw rozmowa, dopiero potem decyzja, czy chcesz więcej.",
        h1: "Alternatywa dla aplikacji randkowych opartych na swipe'owaniu",
        intro:
          "Klasyczne aplikacje randkowe zaczynają się od oceny zdjęcia. HEYID zaczyna od razu od rozmowy.",
        body: [
          "Zamiast przewijać dziesiątki profili w poszukiwaniu idealnego zdjęcia, od razu trafiasz do rozmowy z losową osobą.",
          "To podejście lepiej sprawdza się, jeśli zmęczyło Cię ocenianie ludzi po samym wyglądzie, zanim jeszcze cokolwiek powiedzą.",
        ],
      },
      en: {
        title: "An Alternative to Swipe-Based Dating Apps | HEYID",
        description:
          "Tired of scrolling through profiles? HEYID flips the order: conversation first, then you decide if you want more.",
        h1: "An alternative to swipe-based dating apps",
        intro:
          "Classic dating apps start with judging a photo. HEYID starts with the conversation instead.",
        body: [
          "Instead of scrolling through dozens of profiles looking for the perfect picture, you're matched straight into a conversation with a random person.",
          "This works better if you're tired of judging people on looks alone, before they've said a single word.",
        ],
      },
    },
  },
  {
    id: "meet-someone-new-tonight",
    topic: "meet-someone-new-tonight",
    keyword: "meet someone new tonight",
    intent: "start-random-chat",
    cta: "startRandomChat",
    relatedTopics: ["random-dating-chat", "late-night-chat", "flirt-chat-online"],
    content: {
      pl: {
        title: "Poznaj kogoś nowego dziś wieczorem | HEYID",
        description:
          "Nudny wieczór? HEYID pozwala od razu zacząć rozmowę z nową osobą, bez wcześniejszego planowania.",
        h1: "Poznaj kogoś nowego jeszcze dziś wieczorem",
        intro:
          "Czasem najlepszy sposób na spędzenie wieczoru to nieplanowana rozmowa z kimś, kogo wcześniej nie znałeś.",
        body: [
          "Wystarczy kilka sekund, żeby HEYID dobrał losową osobę do rozmowy — bez umawiania się z wyprzedzeniem.",
          "Jeśli rozmowa się nie klei, po prostu zaczynasz kolejną, aż trafisz na kogoś, z kim naprawdę dobrze się rozmawia.",
        ],
      },
      en: {
        title: "Meet Someone New Tonight | HEYID",
        description:
          "Bored tonight? HEYID lets you start a conversation with someone new right away, no planning ahead needed.",
        h1: "Meet someone new tonight",
        intro:
          "Sometimes the best way to spend an evening is an unplanned conversation with someone you didn't know before.",
        body: [
          "It only takes a few seconds for HEYID to match you with a random person to talk to — no advance arrangements needed.",
          "If a conversation doesn't click, you just start another one, until you find someone the conversation really flows with.",
        ],
      },
    },
  },
  {
    id: "safe-flirt-chat",
    topic: "safe-flirt-chat",
    keyword: "safe flirt chat app",
    intent: "learn-anonymous-chat",
    cta: "tryIt",
    relatedTopics: ["anonymous-dating-chat", "flirt-chat-online", "safe-anonymous-chat"],
    content: {
      pl: {
        title: "Bezpieczny flirt online | HEYID",
        description:
          "Flirtuj online bez obaw — HEYID daje kontrolę nad tym, z kim rozmawiasz, z opcją blokowania i zgłaszania w każdej chwili.",
        h1: "Bezpieczny flirt online",
        intro:
          "Lekka rozmowa nie musi oznaczać rezygnacji z bezpieczeństwa. HEYID daje narzędzia, żeby flirt pozostał na Twoich warunkach.",
        body: [
          "W każdej chwili możesz zakończyć rozmowę, zablokować drugą osobę albo zgłosić zachowanie, które Ci nie odpowiada.",
          "Warto zachować zdrowy rozsądek przy dzieleniu się danymi, które pozwoliłyby Cię łatwo zidentyfikować, dopóki sam tego nie zechcesz.",
        ],
      },
      en: {
        title: "Safe Flirt Chat | HEYID",
        description:
          "Flirt online without worry — HEYID gives you control over who you talk to, with blocking and reporting available anytime.",
        h1: "Safe flirt chat",
        intro:
          "A light conversation doesn't mean giving up on safety. HEYID gives you the tools to keep flirting on your own terms.",
        body: [
          "You can end a conversation, block the other person, or report behavior you're not comfortable with at any point.",
          "It's worth using common sense about sharing details that could easily identify you, until you choose to.",
        ],
      },
    },
  },
  {
    id: "chat-first-date-practice",
    topic: "chat-first-date-practice",
    keyword: "practice conversation before a date",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-for-shy-singles", "online-dating-chat", "flirt-chat-online"],
    content: {
      pl: {
        title: "Poćwicz rozmowę przed randką | HEYID",
        description:
          "Stresujesz się przed pierwszą randką? Rozmowa z nową osobą na HEYID to dobry sposób, żeby oswoić się z sytuacją.",
        h1: "Poćwicz rozmowę przed pierwszą randką",
        intro:
          "Rozmowa z zupełnie obcą osobą bywa stresująca, jeśli robisz to rzadko. HEYID daje okazję, żeby się w tym wprawić.",
        body: [
          "Każda losowa rozmowa to trochę jak mała próba generalna — uczysz się, jak naturalnie prowadzić rozmowę z kimś nowym.",
          "Nie ma tu presji, że rozmowa musi zakończyć się spotkaniem — możesz po prostu poćwiczyć swobodę w pisaniu do obcych osób.",
        ],
      },
      en: {
        title: "Practice Conversation Before a Date | HEYID",
        description:
          "Nervous before a first date? Talking to a new person on HEYID is a good way to get comfortable with the situation.",
        h1: "Practice conversation before a first date",
        intro:
          "Talking to a complete stranger can feel stressful if you don't do it often. HEYID gives you a chance to get some practice in.",
        body: [
          "Every random conversation works a bit like a dress rehearsal — you get practice at naturally talking to someone new.",
          "There's no pressure for it to lead to a meetup — you can simply practice feeling comfortable writing to strangers.",
        ],
      },
    },
  },
  {
    id: "meet-people-similar-interests",
    topic: "meet-people-similar-interests",
    keyword: "meet people with similar interests",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-singles", "chat-for-gamers", "chat-for-students"],
    content: {
      pl: {
        title: "Poznaj ludzi o podobnych zainteresowaniach | HEYID",
        description:
          "Znalezienie kogoś, kto podziela Twoje pasje, bywa trudniejsze niż się wydaje. HEYID pozwala na to trafić naturalnie, w rozmowie.",
        h1: "Poznaj ludzi o podobnych zainteresowaniach",
        intro:
          "Wspólne zainteresowanie to zwykle najlepszy punkt wyjścia do rozmowy — łatwiej znaleźć temat, o którym oboje macie coś do powiedzenia.",
        body: [
          "Losowa rozmowa czasem szybciej pokazuje wspólne pasje niż przeglądanie listy zainteresowań w profilu.",
          "Jeśli akurat trafisz na kogoś z zupełnie inną pasją, to też dobra okazja, żeby dowiedzieć się czegoś nowego.",
        ],
      },
      en: {
        title: "Meet People with Similar Interests | HEYID",
        description:
          "Finding someone who shares your passions can be trickier than it sounds. HEYID lets that happen naturally, through conversation.",
        h1: "Meet people with similar interests",
        intro:
          "A shared interest is usually the best starting point for a conversation — it's easier to find something you both have to say.",
        body: [
          "A random conversation can sometimes reveal shared passions faster than scrolling through a list of interests on a profile.",
          "And if you match with someone with a completely different passion, that's a good chance to learn something new too.",
        ],
      },
    },
  },

// ============================================================
  // BATCH 3 — 18 more unique topics (paste before closing "];")
  // ============================================================
  {
    id: "chat-for-loneliness",
    topic: "chat-for-loneliness",
    keyword: "chat app when you feel lonely",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-for-introverts", "late-night-chat", "meet-new-people"],
    content: {
      pl: {
        title: "Z kim porozmawiać, gdy czujesz się samotny | HEYID",
        description:
          "Czasem wystarczy zwykła rozmowa z nową osobą. HEYID pozwala nawiązać kontakt bez umawiania się z wyprzedzeniem.",
        h1: "Rozmowa z kimś nowym, kiedy jest Ci samotnie",
        intro:
          "Nie zawsze trzeba mieć konkretny powód, żeby z kimś porozmawiać — czasem wystarczy chęć zwykłej wymiany zdań z drugim człowiekiem.",
        body: [
          "HEYID losuje rozmówcę w kilka sekund, więc nie musisz nikogo znać ani niczego wcześniej planować, żeby zacząć rozmowę.",
          "Jeśli szukasz stałego wsparcia w trudniejszym okresie, rozmowa z bliską osobą albo specjalistą bywa cenniejsza niż czat z nieznajomym — HEYID to raczej sposób na towarzystwo w danej chwili.",
        ],
      },
      en: {
        title: "Someone to Talk to When You Feel Lonely | HEYID",
        description:
          "Sometimes an ordinary conversation with someone new is enough. HEYID lets you connect without arranging anything in advance.",
        h1: "Talking to someone new when you're feeling lonely",
        intro:
          "You don't always need a specific reason to talk to someone — sometimes an ordinary exchange with another person is enough.",
        body: [
          "HEYID matches you with a random person in seconds, so you don't need to know anyone or plan anything to start talking.",
          "If you're looking for ongoing support during a harder time, talking to someone close to you or a professional matters more than a chat with a stranger — HEYID is more about company in the moment.",
        ],
      },
    },
  },
  {
    id: "chat-for-shift-workers",
    topic: "chat-for-shift-workers",
    keyword: "chat app for night shift workers",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["late-night-chat", "chat-for-introverts"],
    content: {
      pl: {
        title: "Czat dla osób pracujących na nocnej zmianie | HEYID",
        description:
          "Praca na nockach oznacza inny rytm dnia niż u większości znajomych. HEYID pomaga znaleźć rozmówcę o dowolnej porze.",
        h1: "Czat dla osób na nocnej zmianie",
        intro:
          "Kiedy pracujesz na nockach, trudno o rozmowę ze znajomymi żyjącymi w typowym rytmie dnia. HEYID zawsze ma kogoś online.",
        body: [
          "Dzięki globalnej bazie użytkowników zawsze znajdzie się ktoś, kto akurat nie śpi, niezależnie od pory Twojej zmiany.",
          "To krótka przerwa na rozmowę w trakcie nocnej pracy, bez konieczności umawiania się wcześniej.",
        ],
      },
      en: {
        title: "Chat App for Night Shift Workers | HEYID",
        description:
          "Working nights means a different rhythm than most of your friends. HEYID helps you find someone to talk to at any hour.",
        h1: "Chat app for night shift workers",
        intro:
          "When you work nights, it's hard to find friends to talk to who share your schedule. HEYID always has someone online.",
        body: [
          "With a global user base, there's usually someone awake no matter what time your shift falls on.",
          "It's a short break for conversation during a night shift, with no need to arrange it beforehand.",
        ],
      },
    },
  },
  {
    id: "chat-while-traveling-solo",
    topic: "chat-while-traveling-solo",
    keyword: "chat app for solo travelers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-travelers", "digital-nomad-chat", "international-chat"],
    content: {
      pl: {
        title: "Czat dla osób podróżujących solo | HEYID",
        description:
          "Podróżujesz sam i chcesz mieć z kim pogadać wieczorem? HEYID łączy Cię z ludźmi z całego świata, gdziekolwiek akurat jesteś.",
        h1: "Czat dla podróżujących w pojedynkę",
        intro:
          "Podróż solo daje dużo wolności, ale czasem brakuje kogoś do rozmowy po całym dniu zwiedzania. HEYID to wypełnia.",
        body: [
          "Możesz porozmawiać z kimś miejscowym, żeby dowiedzieć się więcej o okolicy, albo z innym podróżnikiem, który rozumie ten styl podróżowania.",
          "Tłumaczenie wiadomości ułatwia rozmowę nawet tam, gdzie nie znasz miejscowego języka.",
        ],
      },
      en: {
        title: "Chat App for Solo Travelers | HEYID",
        description:
          "Traveling alone and want someone to talk to in the evening? HEYID connects you with people from around the world, wherever you are.",
        h1: "Chat app for solo travelers",
        intro:
          "Solo travel gives you a lot of freedom, but sometimes you miss having someone to talk to after a day of sightseeing. HEYID fills that gap.",
        body: [
          "You can talk to a local to learn more about the area, or to another traveler who understands this way of getting around.",
          "Message translation makes the conversation easy even where you don't speak the local language.",
        ],
      },
    },
  },
  {
    id: "chat-for-military-deployed",
    topic: "chat-for-military-deployed",
    keyword: "chat app while deployed abroad",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-expats", "international-chat", "long-distance-chat"],
    content: {
      pl: {
        title: "Czat dla osób przebywających za granicą w oderwaniu od domu | HEYID",
        description:
          "Dłuższy pobyt za granicą, z dala od bliskich, bywa trudny. HEYID pozwala porozmawiać z kimś nowym, kiedy akurat masz na to czas.",
        h1: "Rozmowa, kiedy jesteś daleko od domu",
        intro:
          "Dłuższy wyjazd — zawodowy, wojskowy czy inny — często oznacza oderwanie od codziennych relacji. HEYID daje możliwość rozmowy, kiedy akurat masz chwilę.",
        body: [
          "Rozmowa z kimś nowym może być odskocznią od rutyny, niezależnie od tego, gdzie akurat jesteś na świecie.",
          "Automatyczne tłumaczenie sprawia, że możesz rozmawiać z osobami z różnych krajów, nie tylko z tymi mówiącymi w Twoim języku.",
        ],
      },
      en: {
        title: "Chat App for Being Away from Home Abroad | HEYID",
        description:
          "A long stint abroad, away from the people you know, can be tough. HEYID lets you talk to someone new whenever you have a moment.",
        h1: "A conversation when you're far from home",
        intro:
          "A long assignment abroad — for work, service, or otherwise — often means being cut off from everyday relationships. HEYID gives you a way to talk whenever you have a spare moment.",
        body: [
          "A conversation with someone new can be a break from the routine, no matter where in the world you are.",
          "Automatic translation means you can talk to people from different countries, not just those who speak your language.",
        ],
      },
    },
  },
  {
    id: "practice-french-chat",
    topic: "practice-french-chat",
    keyword: "practice french by chatting",
    intent: "language-exchange",
    cta: "tryIt",
    relatedTopics: ["language-exchange", "find-native-speaker", "talk-to-strangers-france"],
    content: {
      pl: {
        title: "Ćwicz francuski przez rozmowę | HEYID",
        description:
          "Ćwicz francuski w praktyce, rozmawiając z osobami z Francji i innych krajów francuskojęzycznych na HEYID.",
        h1: "Ćwicz francuski, rozmawiając na żywo",
        intro:
          "Francuska wymowa i gramatyka lepiej wchodzą do głowy w praktyce niż w podręczniku. HEYID daje przestrzeń do takiej rozmowy.",
        body: [
          "Piszesz po francusku najlepiej jak potrafisz, a tłumaczenie w HEYID pomaga dokończyć zdanie, gdy zabraknie słownictwa.",
          "Możesz trafić na osobę z Francji, Belgii albo Kanady — każda rozmowa to inny akcent i inny sposób mówienia.",
        ],
      },
      en: {
        title: "Practice French by Chatting | HEYID",
        description:
          "Practice French in real conversation with people from France and other French-speaking countries on HEYID.",
        h1: "Practice French by chatting live",
        intro:
          "French pronunciation and grammar stick better through practice than a textbook. HEYID gives you room for that kind of conversation.",
        body: [
          "You write in French as best you can, and HEYID's translation helps finish the sentence when your vocabulary runs short.",
          "You might match with someone from France, Belgium, or Canada — each conversation brings a different accent and way of speaking.",
        ],
      },
    },
  },
  {
    id: "practice-italian-chat",
    topic: "practice-italian-chat",
    keyword: "practice italian by chatting",
    intent: "language-exchange",
    cta: "tryIt",
    relatedTopics: ["language-exchange", "find-native-speaker", "practice-spanish-chat"],
    content: {
      pl: {
        title: "Ćwicz włoski przez rozmowę | HEYID",
        description:
          "Ćwicz włoski w praktyce, rozmawiając z osobami z Włoch na HEYID. Tłumaczenie pomaga, gdy zabraknie słownictwa.",
        h1: "Ćwicz włoski, rozmawiając na żywo",
        intro:
          "Melodia włoskiego języka najlepiej wchodzi do ucha w rozmowie, nie w podręczniku. HEYID daje przestrzeń na taką praktykę.",
        body: [
          "Piszesz po włosku, jak potrafisz, a tłumaczenie w HEYID pomaga dokończyć myśl, kiedy zabraknie słowa.",
          "SPARX podpowie, jak sformułować odpowiedź, kiedy nie czujesz się jeszcze pewnie z językiem.",
        ],
      },
      en: {
        title: "Practice Italian by Chatting | HEYID",
        description:
          "Practice Italian in real conversation with people from Italy on HEYID. Translation helps when your vocabulary runs short.",
        h1: "Practice Italian by chatting live",
        intro:
          "The rhythm of Italian sticks better through conversation than through a textbook. HEYID gives you room to practice it.",
        body: [
          "You write in Italian as best you can, and HEYID's translation helps finish the thought when a word escapes you.",
          "SPARX can suggest how to phrase a reply when you're not feeling confident with the language yet.",
        ],
      },
    },
  },
  {
    id: "practice-portuguese-chat",
    topic: "practice-portuguese-chat",
    keyword: "practice portuguese by chatting",
    intent: "language-exchange",
    cta: "tryIt",
    relatedTopics: ["language-exchange", "find-native-speaker", "practice-spanish-chat"],
    content: {
      pl: {
        title: "Ćwicz portugalski przez rozmowę | HEYID",
        description:
          "Ćwicz portugalski w praktyce, rozmawiając z osobami z Portugalii i Brazylii na HEYID.",
        h1: "Ćwicz portugalski, rozmawiając na żywo",
        intro:
          "Portugalski z Portugalii i portugalski z Brazylii różnią się na tyle, że warto usłyszeć oba warianty w praktyce. HEYID daje taką możliwość.",
        body: [
          "W zależności z kim trafisz na rozmowę, usłyszysz inny akcent i inne słownictwo — to dobra okazja, żeby poznać różnice.",
          "Tłumaczenie wiadomości pomaga dokończyć rozmowę, gdy zabraknie Ci słów, więc nie musisz przerywać z powodu jednego zwrotu.",
        ],
      },
      en: {
        title: "Practice Portuguese by Chatting | HEYID",
        description:
          "Practice Portuguese in real conversation with people from Portugal and Brazil on HEYID.",
        h1: "Practice Portuguese by chatting live",
        intro:
          "European and Brazilian Portuguese differ enough that it's worth hearing both variants in practice. HEYID gives you that chance.",
        body: [
          "Depending on who you match with, you'll hear a different accent and vocabulary — a good way to learn the differences.",
          "Message translation helps you finish the conversation when words run short, so you don't have to stop over one phrase.",
        ],
      },
    },
  },
  {
    id: "chat-for-remote-workers",
    topic: "chat-for-remote-workers",
    keyword: "chat app for remote workers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["digital-nomad-chat", "chat-for-introverts", "chat-for-students"],
    content: {
      pl: {
        title: "Czat dla osób pracujących zdalnie | HEYID",
        description:
          "Praca zdalna oznacza mniej naturalnych okazji do rozmowy z innymi. HEYID daje krótką przerwę na kontakt z drugą osobą.",
        h1: "Czat dla osób pracujących zdalnie",
        intro:
          "Praca z domu ma swoje plusy, ale też mniej okazji do zwykłej rozmowy, jaka zdarza się przy biurku obok kolegi. HEYID to uzupełnia.",
        body: [
          "Krótka rozmowa w przerwie na kawę może zastąpić tę spontaniczną wymianę zdań, której brakuje przy pracy z domu.",
          "Losowość sprawia, że każda przerwa to inna rozmowa, zamiast wciąż tego samego kręgu znajomych.",
        ],
      },
      en: {
        title: "Chat App for Remote Workers | HEYID",
        description:
          "Remote work means fewer natural chances to talk to others. HEYID gives you a short break for connecting with someone new.",
        h1: "Chat app for remote workers",
        intro:
          "Working from home has its upsides, but fewer chances for the casual chat you'd get at a desk next to a colleague. HEYID fills that gap.",
        body: [
          "A short conversation during a coffee break can replace the spontaneous chat you'd miss working from home.",
          "The randomness means every break is a different conversation, instead of the same circle of people every time.",
        ],
      },
    },
  },
  {
    id: "chat-for-parents",
    topic: "chat-for-parents",
    keyword: "chat app for parents",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-remote-workers", "meet-new-people"],
    content: {
      pl: {
        title: "Czat dla rodziców | HEYID",
        description:
          "Życie z małym dzieckiem potrafi ograniczyć czas na rozmowy z innymi dorosłymi. HEYID pozwala porozmawiać w wolnej chwili.",
        h1: "Czat dla rodziców",
        intro:
          "Opieka nad dzieckiem często zostawia mało miejsca na rozmowę z innym dorosłym. HEYID pozwala nadrobić to w krótkiej wolnej chwili.",
        body: [
          "Nie musisz umawiać się z wyprzedzeniem — wystarczy kilka minut, żeby porozmawiać z kimś nowym, kiedy akurat masz czas.",
          "Możesz trafić na innego rodzica w podobnej sytuacji albo po prostu na kogoś z zupełnie innym dniem niż Twój.",
        ],
      },
      en: {
        title: "Chat App for Parents | HEYID",
        description:
          "Life with a small child can limit time for conversations with other adults. HEYID lets you chat whenever you get a free moment.",
        h1: "Chat app for parents",
        intro:
          "Looking after a child often leaves little room for talking to another adult. HEYID lets you make up for it in a short free moment.",
        body: [
          "You don't need to arrange anything in advance — a few minutes is enough to talk to someone new whenever you have time.",
          "You might match with another parent in a similar situation, or just with someone whose day looks completely different from yours.",
        ],
      },
    },
  },
  {
    id: "chat-to-improve-social-skills",
    topic: "chat-to-improve-social-skills",
    keyword: "chat app to practice social skills",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-for-introverts", "chat-for-shy-singles", "chat-first-date-practice"],
    content: {
      pl: {
        title: "Ćwicz umiejętności rozmowy z nowymi osobami | HEYID",
        description:
          "Rozmowa z obcą osobą to też umiejętność, którą można trenować. HEYID daje bezpieczną przestrzeń do takiej praktyki.",
        h1: "Ćwicz rozmowę z nowymi osobami",
        intro:
          "Swobodna rozmowa z kimś obcym nie każdemu przychodzi naturalnie — ale, jak wiele innych rzeczy, można się jej nauczyć przez praktykę.",
        body: [
          "Każda losowa rozmowa to okazja, żeby przećwiczyć zaczynanie i podtrzymywanie konwersacji, bez presji spotkania na żywo.",
          "Jeśli utkniesz w martwym punkcie, SPARX podpowie kolejne pytanie, żebyś mógł zobaczyć, jak naturalnie prowadzić rozmowę dalej.",
        ],
      },
      en: {
        title: "Practice Talking to New People | HEYID",
        description:
          "Talking to a stranger is also a skill you can train. HEYID gives you a safe space to practice it.",
        h1: "Practice talking to new people",
        intro:
          "Easy conversation with a stranger doesn't come naturally to everyone — but like many things, it can be learned through practice.",
        body: [
          "Every random conversation is a chance to practice starting and keeping a conversation going, without the pressure of meeting in person.",
          "If you get stuck, SPARX can suggest the next question, so you can see how to keep the conversation flowing naturally.",
        ],
      },
    },
  },
  {
    id: "chat-for-hobbyists",
    topic: "chat-for-hobbyists",
    keyword: "chat app to talk about hobbies",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-gamers", "meet-people-similar-interests"],
    content: {
      pl: {
        title: "Czat, żeby pogadać o hobby | HEYID",
        description:
          "Nie zawsze łatwo znaleźć kogoś w pobliżu, kto podziela Twoje hobby. HEYID pozwala porozmawiać o nim z kimś z całego świata.",
        h1: "Porozmawiaj o swoim hobby",
        intro:
          "Niektóre zainteresowania trudno omówić z ludźmi z najbliższego otoczenia — po prostu nikt w pobliżu tego nie rozumie. HEYID poszerza krąg.",
        body: [
          "Losowa rozmowa czasem szybciej trafia na temat wspólnego hobby niż szukanie dedykowanej grupy w internecie.",
          "Nawet jeśli akurat trafisz na kogoś bez tego samego zainteresowania, to dobra okazja, żeby opowiedzieć o nim komuś nowemu.",
        ],
      },
      en: {
        title: "Chat App to Talk About Hobbies | HEYID",
        description:
          "Not always easy to find someone nearby who shares your hobby. HEYID lets you talk about it with someone from around the world.",
        h1: "Talk about your hobby",
        intro:
          "Some interests are hard to discuss with the people around you — nobody nearby just gets it. HEYID widens the circle.",
        body: [
          "A random conversation sometimes lands on a shared hobby faster than searching for a dedicated group online.",
          "Even if you match with someone without the same interest, it's a good chance to tell someone new about it.",
        ],
      },
    },
  },
  {
    id: "chat-for-music-lovers",
    topic: "chat-for-music-lovers",
    keyword: "chat app for music lovers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-hobbyists", "meet-people-similar-interests"],
    content: {
      pl: {
        title: "Czat dla miłośników muzyki | HEYID",
        description:
          "Chcesz porozmawiać o muzyce z kimś z innego kraju, o innym guście muzycznym? HEYID łączy słuchaczy z całego świata.",
        h1: "Czat dla miłośników muzyki",
        intro:
          "Gust muzyczny często różni się w zależności od kraju i pokolenia. HEYID daje okazję, żeby porozmawiać o muzyce z zupełnie inną perspektywą.",
        body: [
          "Możesz trafić na kogoś, kto poleci Ci artystów, o których nigdy wcześniej nie słyszałeś, tylko dlatego że są popularni gdzie indziej.",
          "Tłumaczenie wiadomości sprawia, że różnice językowe nie przeszkadzają w rozmowie o wspólnej pasji.",
        ],
      },
      en: {
        title: "Chat App for Music Lovers | HEYID",
        description:
          "Want to talk about music with someone from another country with a different taste? HEYID connects listeners from around the world.",
        h1: "Chat app for music lovers",
        intro:
          "Musical taste often varies by country and generation. HEYID gives you a chance to talk about music from a completely different angle.",
        body: [
          "You might match with someone who recommends artists you've never heard of, simply because they're big somewhere else.",
          "Message translation means language differences don't get in the way of talking about a shared passion.",
        ],
      },
    },
  },
  {
    id: "chat-for-movie-fans",
    topic: "chat-for-movie-fans",
    keyword: "chat app for movie fans",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-music-lovers", "meet-people-similar-interests"],
    content: {
      pl: {
        title: "Czat dla fanów filmów | HEYID",
        description:
          "Chcesz porozmawiać o filmach z kimś, kto ma dostęp do zupełnie innej kinematografii niż Ty? HEYID łączy widzów z całego świata.",
        h1: "Czat dla fanów filmów",
        intro:
          "Filmowa oferta różni się bardzo między krajami. HEYID pozwala porozmawiać z kimś, kto poleci Ci coś, o czym wcześniej nie słyszałeś.",
        body: [
          "Rozmowa o filmach z kimś z innego kraju to szansa na poznanie kinematografii, do której inaczej byś nie trafił.",
          "Automatyczne tłumaczenie sprawia, że nie musisz znać języka drugiej osoby, żeby wymienić się rekomendacjami.",
        ],
      },
      en: {
        title: "Chat App for Movie Fans | HEYID",
        description:
          "Want to talk about films with someone who has access to a completely different film industry? HEYID connects viewers from around the world.",
        h1: "Chat app for movie fans",
        intro:
          "Film availability varies a lot between countries. HEYID lets you talk to someone who can recommend something you'd never have heard of otherwise.",
        body: [
          "Talking about movies with someone from another country is a chance to discover a film industry you wouldn't otherwise come across.",
          "Automatic translation means you don't need to know the other person's language to swap recommendations.",
        ],
      },
    },
  },
  {
    id: "chat-for-food-lovers",
    topic: "chat-for-food-lovers",
    keyword: "chat app for foodies",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-travelers", "meet-people-similar-interests"],
    content: {
      pl: {
        title: "Czat dla miłośników jedzenia | HEYID",
        description:
          "Chcesz porozmawiać o kuchni z innego kraju wprost z kimś, kto ją zna od podszewki? HEYID łączy foodies z całego świata.",
        h1: "Czat dla miłośników jedzenia",
        intro:
          "Przepisy w internecie to jedno, ale rozmowa z kimś, kto dorastał na danej kuchni, daje zupełnie inną perspektywę.",
        body: [
          "Możesz zapytać o lokalne dania, które nie trafiają do przewodników turystycznych, wprost od osoby, która je zna z domu.",
          "Tłumaczenie wiadomości ułatwia rozmowę o smakach i przepisach, nawet jeśli nie znasz języka rozmówcy.",
        ],
      },
      en: {
        title: "Chat App for Foodies | HEYID",
        description:
          "Want to talk about a country's food with someone who actually knows it inside out? HEYID connects foodies from around the world.",
        h1: "Chat app for foodies",
        intro:
          "Recipes online are one thing, but talking to someone who grew up with a cuisine gives a completely different perspective.",
        body: [
          "You can ask about local dishes that never make it into travel guides, straight from someone who knows them from home.",
          "Message translation makes it easy to talk about flavors and recipes, even if you don't speak the other person's language.",
        ],
      },
    },
  },
  {
    id: "chat-with-korean-speakers",
    topic: "chat-with-korean-speakers",
    keyword: "chat with people from South Korea",
    intent: "country-specific-chat",
    cta: "startRandomChat",
    relatedTopics: ["random-chat", "language-exchange"],
    content: {
      pl: {
        title: "Czat z osobami z Korei Południowej | HEYID",
        description:
          "Rozmawiaj z osobami z Korei Południowej na HEYID. Automatyczne tłumaczenie sprawia, że koreański nie jest barierą.",
        h1: "Czat z osobami z Korei Południowej",
        intro:
          "Zainteresowanie koreańską kulturą rośnie na całym świecie, ale rozmowa bezpośrednio z kimś stamtąd to zupełnie inne doświadczenie niż oglądanie treści o Korei.",
        body: [
          "Piszesz w swoim języku, druga osoba czyta po koreańsku — i odwrotnie, kiedy odpisuje, dzięki automatycznemu tłumaczeniu.",
          "To okazja, żeby zapytać o codzienne życie w Korei wprost od kogoś, kto tam mieszka, a nie tylko z internetowych treści.",
        ],
      },
      en: {
        title: "Chat with People from South Korea | HEYID",
        description:
          "Chat with people from South Korea on HEYID. Automatic translation means Korean isn't a barrier to the conversation.",
        h1: "Chat with people from South Korea",
        intro:
          "Interest in Korean culture is growing worldwide, but talking directly to someone from there is a completely different experience from watching content about Korea.",
        body: [
          "You write in your language, the other person reads it in Korean — and vice versa when they reply, thanks to automatic translation.",
          "It's a chance to ask about everyday life in Korea straight from someone who lives it, rather than just from online content.",
        ],
      },
    },
  },
  {
    id: "chat-with-brazilian-speakers",
    topic: "chat-with-brazilian-speakers",
    keyword: "chat with people from Brazil",
    intent: "country-specific-chat",
    cta: "startRandomChat",
    relatedTopics: ["random-chat", "practice-portuguese-chat"],
    content: {
      pl: {
        title: "Czat z osobami z Brazylii | HEYID",
        description:
          "Rozmawiaj z osobami z Brazylii na HEYID. Automatyczne tłumaczenie sprawia, że portugalski nie jest barierą.",
        h1: "Czat z osobami z Brazylii",
        intro:
          "Brazylia to ogromny kraj z bardzo zróżnicowaną kulturą — rozmowa z kimś stamtąd to szansa, żeby zobaczyć ją z bliska.",
        body: [
          "Nie musisz znać portugalskiego — piszesz po swojemu, druga osoba czyta wszystko już przetłumaczone.",
          "To dobra okazja, żeby dowiedzieć się czegoś o życiu codziennym w Brazylii, poza stereotypowym obrazem z mediów.",
        ],
      },
      en: {
        title: "Chat with People from Brazil | HEYID",
        description:
          "Chat with people from Brazil on HEYID. Automatic translation means Portuguese isn't a barrier to the conversation.",
        h1: "Chat with people from Brazil",
        intro:
          "Brazil is a huge country with a very diverse culture — talking to someone from there is a chance to see it up close.",
        body: [
          "You don't need to speak Portuguese — you write in your own language, and the other person reads it already translated.",
          "It's a good chance to learn about everyday life in Brazil, beyond the stereotypical picture from the media.",
        ],
      },
    },
  },
  {
    id: "chat-for-anime-fans",
    topic: "chat-for-anime-fans",
    keyword: "chat app for anime fans",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-movie-fans", "chat-with-korean-speakers", "meet-people-similar-interests"],
    content: {
      pl: {
        title: "Czat dla fanów anime | HEYID",
        description:
          "Chcesz porozmawiać o anime z kimś z Japonii albo z innego kraju z podobną pasją? HEYID łączy fanów z całego świata.",
        h1: "Czat dla fanów anime",
        intro:
          "Rozmowa o anime z kimś z Japonii to zupełnie inne doświadczenie niż dyskusja na forum — inny kontekst kulturowy, inne skojarzenia.",
        body: [
          "Możesz zapytać o tytuły, które nigdy nie trafiły poza Japonię, albo po prostu porównać ulubione serie z kimś z innego kraju.",
          "Automatyczne tłumaczenie usuwa barierę językową, więc rozmowa toczy się naturalnie niezależnie od tego, skąd jest druga osoba.",
        ],
      },
      en: {
        title: "Chat App for Anime Fans | HEYID",
        description:
          "Want to talk about anime with someone from Japan or another country who shares the passion? HEYID connects fans from around the world.",
        h1: "Chat app for anime fans",
        intro:
          "Talking about anime with someone from Japan is a completely different experience from a forum discussion — different cultural context, different references.",
        body: [
          "You can ask about titles that never made it outside Japan, or simply compare favorite series with someone from another country.",
          "Automatic translation removes the language barrier, so the conversation flows naturally no matter where the other person is from.",
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