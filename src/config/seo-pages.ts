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