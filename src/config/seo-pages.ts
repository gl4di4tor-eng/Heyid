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

// ============================================================
  // BATCH 4 — 20 more dating/flirt-angle topics (paste before closing "];")
  // ============================================================
  {
    id: "flirty-conversation-starters",
    topic: "flirty-conversation-starters",
    keyword: "flirty conversation starters",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["flirt-chat-online", "chat-first-date-practice"],
    content: {
      pl: {
        title: "Jak zacząć flirtującą rozmowę online | HEYID",
        description:
          "Nie wiesz, jak zacząć rozmowę z kimś, kto Ci się spodobał? Na HEYID SPARX podpowie pierwszą wiadomość, żeby przełamać lody.",
        h1: "Jak zacząć flirtującą rozmowę online",
        intro:
          "Pierwsza wiadomość bywa najtrudniejsza — łatwo przeanalizować ją na sto sposobów, zanim się w ogóle ją wyśle.",
        body: [
          "Zamiast wymyślać idealne otwarcie od zera, SPARX w HEYID podpowie pierwszą wiadomość dopasowaną do kontekstu rozmowy.",
          "Losowa rozmowa daje też mniej presji niż pisanie do kogoś, kogo już znasz — nikt niczego się po Tobie nie spodziewa.",
        ],
      },
      en: {
        title: "How to Start a Flirty Conversation Online | HEYID",
        description:
          "Not sure how to open a conversation with someone you like? On HEYID, SPARX can suggest a first message to break the ice.",
        h1: "How to start a flirty conversation online",
        intro:
          "The first message is often the hardest part — it's easy to overthink it a dozen ways before you even send it.",
        body: [
          "Instead of coming up with the perfect opener from scratch, SPARX in HEYID can suggest a first line based on the conversation's context.",
          "A random conversation also carries less pressure than messaging someone you already know — no one has expectations of you yet.",
        ],
      },
    },
  },
  {
    id: "random-video-free-dating",
    topic: "video-free-dating-chat",
    keyword: "dating chat without video call",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["text-based-dating", "chat-for-shy-singles"],
    content: {
      pl: {
        title: "Randki bez rozmowy wideo | HEYID",
        description:
          "Nie musisz włączać kamerki, żeby kogoś poznać. HEYID pozwala budować znajomość przez tekst, w swoim tempie.",
        h1: "Randki bez konieczności rozmowy wideo",
        intro:
          "Kamerka od razu podnosi stawkę pierwszej rozmowy. HEYID pozwala zacząć bez niej, tekstem, i przejść do wideo dopiero, kiedy oboje tego zechcecie.",
        body: [
          "Rozmowa tekstowa daje więcej czasu na przemyślaną odpowiedź, bez presji, żeby wyglądać i brzmieć idealnie na żywo.",
          "Jeśli po pewnym czasie rozmowa dobrze się układa, to Wy decydujecie, czy i kiedy przenieść ją na inną formę kontaktu.",
        ],
      },
      en: {
        title: "Dating Chat Without a Video Call | HEYID",
        description:
          "You don't need to turn your camera on to get to know someone. HEYID lets you build a connection through text, at your own pace.",
        h1: "Dating without a video call requirement",
        intro:
          "A camera immediately raises the stakes of a first conversation. HEYID lets you start without one, in text, and move to video only when you both want to.",
        body: [
          "A text conversation gives you more time to think through a reply, without the pressure of looking and sounding perfect live.",
          "If the conversation is going well after a while, it's up to both of you to decide whether and when to move it to another format.",
        ],
      },
    },
  },
  {
    id: "chat-with-foreigners-dating",
    topic: "chat-with-foreigners-dating",
    keyword: "meet a foreigner to date",
    intent: "international-chat",
    cta: "noLanguageBarrier",
    relatedTopics: ["international-dating-chat", "long-distance-chat"],
    content: {
      pl: {
        title: "Poznaj obcokrajowca — czat randkowy | HEYID",
        description:
          "Ciekawi Cię randkowanie z kimś z innego kraju? HEYID pozwala poznać obcokrajowca bez bariery językowej.",
        h1: "Poznaj obcokrajowca w luźnej, randkowej atmosferze",
        intro:
          "Osoba z innego kraju może wnieść zupełnie inną perspektywę do rozmowy — inny sposób flirtowania, inne poczucie humoru, inne priorytety.",
        body: [
          "HEYID losuje rozmówcę z całego świata, a automatyczne tłumaczenie sprawia, że różnica języków nie stoi na drodze do poznania kogoś.",
          "To dobra okazja, żeby zobaczyć, jak wygląda randkowanie w innej kulturze, zanim jeszcze cokolwiek zdecydujecie na dłuższą metę.",
        ],
      },
      en: {
        title: "Meet a Foreigner — Dating Chat | HEYID",
        description:
          "Curious about dating someone from another country? HEYID lets you meet a foreigner without a language barrier standing in the way.",
        h1: "Meet a foreigner in a relaxed, dating-friendly setting",
        intro:
          "Someone from another country can bring a completely different perspective to a conversation — different flirting style, different humor, different priorities.",
        body: [
          "HEYID matches you with someone from anywhere in the world, and automatic translation means the language gap doesn't stand in the way of getting to know them.",
          "It's a good chance to see what dating looks like in another culture, before deciding anything long-term.",
        ],
      },
    },
  },
  {
    id: "weekend-flirt-chat",
    topic: "weekend-flirt-chat",
    keyword: "weekend flirt chat",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["casual-chat-flirt", "meet-someone-new-tonight"],
    content: {
      pl: {
        title: "Flirt na weekend, bez zobowiązań | HEYID",
        description:
          "Nudny weekend? HEYID pozwala szybko zacząć luźną, flirciarską rozmowę z kimś nowym, bez planowania z wyprzedzeniem.",
        h1: "Flirt na weekend",
        intro:
          "Weekend to dobry moment na coś spontanicznego — a rozmowa z nową, losową osobą jest jednym kliknięciem od Ciebie.",
        body: [
          "Nie musisz nic planować z wyprzedzeniem — wystarczy otworzyć aplikację, a HEYID od razu dobierze rozmówcę.",
          "Jeśli akurat trafisz na kogoś, z kim dobrze się rozmawia, nic nie stoi na przeszkodzie, żeby ta rozmowa trwała dłużej niż jeden weekend.",
        ],
      },
      en: {
        title: "Weekend Flirt Chat, No Strings Attached | HEYID",
        description:
          "Bored this weekend? HEYID lets you quickly start a light, flirty conversation with someone new, no planning ahead needed.",
        h1: "Weekend flirt chat",
        intro:
          "A weekend is a good time for something spontaneous — and a conversation with a new, random person is just one tap away.",
        body: [
          "You don't need to plan anything in advance — just open the app and HEYID matches you with someone right away.",
          "If you happen to match with someone the conversation flows well with, there's nothing stopping it from lasting longer than one weekend.",
        ],
      },
    },
  },
  {
    id: "chat-to-boost-confidence-dating",
    topic: "chat-to-boost-confidence-dating",
    keyword: "build confidence talking to new people",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-for-shy-singles", "chat-first-date-practice"],
    content: {
      pl: {
        title: "Zbuduj pewność siebie w rozmowach z nowymi osobami | HEYID",
        description:
          "Im więcej rozmawiasz z nowymi ludźmi, tym łatwiej to przychodzi. HEYID daje bezpieczną przestrzeń, żeby to ćwiczyć.",
        h1: "Zbuduj pewność siebie, rozmawiając z nowymi osobami",
        intro:
          "Pewność siebie w rozmowie z kimś nowym to głównie kwestia praktyki, nie talentu. HEYID pozwala tę praktykę zdobywać bez presji.",
        body: [
          "Każda kolejna rozmowa to trochę mniej stresu niż poprzednia — z czasem naturalnie łatwiej Ci będzie zacząć nową znajomość.",
          "Jeśli akurat rozmowa się nie klei, po prostu zaczynasz kolejną — bez presji, że musisz zrobić dobre pierwsze wrażenie za każdym razem.",
        ],
      },
      en: {
        title: "Build Confidence Talking to New People | HEYID",
        description:
          "The more you talk to new people, the easier it gets. HEYID gives you a safe space to practice exactly that.",
        h1: "Build confidence by talking to new people",
        intro:
          "Confidence talking to someone new is mostly a matter of practice, not talent. HEYID lets you get that practice without pressure.",
        body: [
          "Every new conversation feels a bit less stressful than the last — over time, starting a new connection naturally gets easier.",
          "If a conversation doesn't click, you just start another one, without the pressure of having to make a great first impression every single time.",
        ],
      },
    },
  },
  {
    id: "chat-for-second-chance-dating",
    topic: "chat-for-fresh-start-dating",
    keyword: "meet new people after a breakup",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-singles", "meet-someone-new-tonight"],
    content: {
      pl: {
        title: "Poznaj nowych ludzi po zakończonym związku | HEYID",
        description:
          "Nie musisz od razu szukać czegoś poważnego. HEYID pozwala po prostu porozmawiać z kimś nowym, bez presji i bez pośpiechu.",
        h1: "Poznaj nowych ludzi we własnym tempie",
        intro:
          "Po zakończeniu związku niektórzy wolą od razu wrócić do randkowania, inni potrzebują czasu — HEYID pasuje do obu podejść.",
        body: [
          "Nic nie musisz deklarować z góry — możesz po prostu porozmawiać z kimś nowym i zobaczyć, jak się poczujesz.",
          "Losowość rozmówcy sprawia, że nie ma presji porównywania od razu do poprzedniej relacji — każda rozmowa zaczyna się od zera.",
        ],
      },
      en: {
        title: "Meet New People After a Breakup | HEYID",
        description:
          "You don't have to jump straight into something serious. HEYID lets you simply talk to someone new, with no pressure or rush.",
        h1: "Meet new people at your own pace",
        intro:
          "After a relationship ends, some people want to start dating again right away, others need time — HEYID works for either approach.",
        body: [
          "You don't have to declare anything upfront — you can just talk to someone new and see how it feels.",
          "The randomness means there's no pressure to immediately compare it to a past relationship — every conversation starts fresh.",
        ],
      },
    },
  },
  {
    id: "chat-for-summer-flirt",
    topic: "chat-for-summer-flirt",
    keyword: "summer flirt chat app",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["casual-chat-flirt", "chat-for-travelers"],
    content: {
      pl: {
        title: "Letni flirt online | HEYID",
        description:
          "Lato sprzyja lżejszym rozmowom i nowym znajomościom. HEYID pozwala poznać kogoś nowego z całego świata w wakacyjnym klimacie.",
        h1: "Letni flirt online",
        intro:
          "Latem łatwiej o luźniejsze podejście do rozmów — mniej planów, więcej spontaniczności. HEYID pasuje do tego nastroju.",
        body: [
          "Możesz trafić na kogoś, kto akurat jest na wakacjach w zupełnie innej części świata, i porównać, jak wygląda lato po drugiej stronie globu.",
          "Automatyczne tłumaczenie sprawia, że wakacyjna rozmowa nie kończy się na pierwszej barierze językowej.",
        ],
      },
      en: {
        title: "Summer Flirt Chat Online | HEYID",
        description:
          "Summer brings lighter conversations and new connections. HEYID lets you meet someone new from anywhere in the world in that vacation mood.",
        h1: "Summer flirt chat online",
        intro:
          "Summer makes it easier to approach conversations more casually — fewer plans, more spontaneity. HEYID fits that mood.",
        body: [
          "You might match with someone who's currently on vacation somewhere completely different, and compare what summer looks like on the other side of the world.",
          "Automatic translation means a summer conversation doesn't stop at the first language barrier.",
        ],
      },
    },
  },
  {
    id: "chat-for-slow-dating",
    topic: "chat-for-slow-dating",
    keyword: "slow dating app",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-to-find-love", "pen-pal-online"],
    content: {
      pl: {
        title: "Randkowanie bez pośpiechu | HEYID",
        description:
          "Nie każda znajomość musi rozwijać się błyskawicznie. HEYID pozwala budować relację w tempie, które Ci odpowiada.",
        h1: "Randkowanie w swoim tempie",
        intro:
          "Zamiast presji szybkiego dopasowania i natychmiastowej decyzji, HEYID pozwala po prostu rozmawiać tak długo, jak potrzebujesz.",
        body: [
          "Nie ma tu limitu czasu ani presji przejścia do kolejnego etapu — rozmowa toczy się tak, jak obu stronom odpowiada.",
          "To podejście lepiej sprawdza się, jeśli wolisz najpierw naprawdę kogoś poznać, zanim zdecydujesz o czymkolwiek więcej.",
        ],
      },
      en: {
        title: "Slow Dating, No Rush | HEYID",
        description:
          "Not every connection needs to move fast. HEYID lets you build a relationship at a pace that actually works for you.",
        h1: "Dating at your own pace",
        intro:
          "Instead of the pressure to match quickly and decide right away, HEYID lets you simply talk for as long as you need to.",
        body: [
          "There's no time limit or pressure to move to the next stage — the conversation goes at whatever pace works for both sides.",
          "This works better if you'd rather really get to know someone before deciding on anything more.",
        ],
      },
    },
  },
  {
    id: "chat-for-genuine-connection",
    topic: "chat-for-genuine-connection",
    keyword: "chat app for genuine connection",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-slow-dating", "chat-to-find-love"],
    content: {
      pl: {
        title: "Szukasz prawdziwej rozmowy, nie tylko przewijania profili | HEYID",
        description:
          "Zmęczony powierzchownymi rozmowami w aplikacjach randkowych? HEYID stawia na treść rozmowy, nie na liczbę dopasowań.",
        h1: "Prawdziwa rozmowa zamiast przewijania profili",
        intro:
          "Ilość dopasowań rzadko przekłada się na jakość rozmowy. HEYID zaczyna od razu od rozmowy, więc łatwiej ocenić, czy jest w niej coś więcej.",
        body: [
          "Zamiast oceniać dziesiątki profili, poświęcasz czas jednej rozmowie naraz — łatwiej wtedy zauważyć, czy faktycznie się dogadujecie.",
          "Jeśli rozmowa nie idzie dobrze, po prostu zaczynasz nową — bez poczucia, że coś przegapiłeś, przewijając kolejne zdjęcia.",
        ],
      },
      en: {
        title: "Looking for a Real Conversation, Not Endless Swiping | HEYID",
        description:
          "Tired of shallow small talk on dating apps? HEYID focuses on the conversation itself, not the number of matches.",
        h1: "A real conversation instead of endless swiping",
        intro:
          "A high match count rarely translates into a good conversation. HEYID starts with the conversation right away, making it easier to tell if there's something real there.",
        body: [
          "Instead of judging dozens of profiles, you spend time on one conversation at a time — making it easier to notice if you actually click.",
          "If a conversation isn't going well, you just start a new one — without the feeling of missing out from scrolling through more photos.",
        ],
      },
    },
  },
  {
    id: "chat-for-holiday-flirt",
    topic: "chat-for-holiday-flirt",
    keyword: "holiday flirt chat app",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-for-summer-flirt", "chat-for-travelers"],
    content: {
      pl: {
        title: "Wakacyjny flirt online | HEYID",
        description:
          "Planujesz wakacje i chcesz poznać kogoś z miejsca, do którego jedziesz? HEYID pozwala zacząć rozmowę jeszcze przed wyjazdem.",
        h1: "Wakacyjny flirt online",
        intro:
          "Rozmowa z kimś z kraju, do którego się wybierasz, to fajny sposób na oswojenie miejsca, zanim jeszcze wsiądziesz w samolot.",
        body: [
          "Możesz zapytać o miejsca, które warto zobaczyć, ale rozmowa równie dobrze może zostać po prostu miłą wymianą zdań przed wyjazdem.",
          "Automatyczne tłumaczenie sprawia, że lokalny język nie jest przeszkodą, nawet jeśli sam go nie znasz.",
        ],
      },
      en: {
        title: "Holiday Flirt Chat Online | HEYID",
        description:
          "Planning a trip and want to meet someone from the place you're heading to? HEYID lets you start the conversation before you even leave.",
        h1: "Holiday flirt chat online",
        intro:
          "Talking to someone from the country you're visiting is a fun way to get a feel for the place before you even board a plane.",
        body: [
          "You can ask about places worth seeing, but the conversation can just as easily stay a nice exchange before your trip.",
          "Automatic translation means the local language isn't a barrier, even if you don't speak it yourself.",
        ],
      },
    },
  },
  {
    id: "chat-for-adventurous-singles",
    topic: "chat-for-adventurous-singles",
    keyword: "dating chat for adventurous people",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-singles", "long-distance-chat"],
    content: {
      pl: {
        title: "Czat randkowy dla osób lubiących nowe doświadczenia | HEYID",
        description:
          "Zamiast ograniczać się do znajomych ze swojej okolicy, HEYID otwiera randkowanie na cały świat — z automatycznym tłumaczeniem.",
        h1: "Dla osób, które lubią nowe doświadczenia w rozmowie",
        intro:
          "Jeśli lubisz nieprzewidywalność bardziej niż rutynę, losowa rozmowa z kimś z drugiego końca świata to naturalne przedłużenie tego podejścia.",
        body: [
          "Nigdy nie wiesz z góry, na kogo trafisz — inny kraj, inna kultura, inny sposób patrzenia na randkowanie.",
          "Automatyczne tłumaczenie sprawia, że ta nieprzewidywalność nie ogranicza się tylko do osób mówiących Twoim językiem.",
        ],
      },
      en: {
        title: "Dating Chat for People Who Love New Experiences | HEYID",
        description:
          "Instead of limiting yourself to people nearby, HEYID opens dating up to the whole world — with automatic translation.",
        h1: "For people who enjoy new experiences in conversation",
        intro:
          "If you prefer unpredictability over routine, a random conversation with someone on the other side of the world is a natural extension of that.",
        body: [
          "You never know in advance who you'll match with — a different country, a different culture, a different take on dating.",
          "Automatic translation means that unpredictability isn't limited to people who speak your language.",
        ],
      },
    },
  },
  {
    id: "chat-for-witty-banter",
    topic: "chat-for-witty-banter",
    keyword: "chat app for witty banter",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["flirt-chat-online", "casual-chat-flirt"],
    content: {
      pl: {
        title: "Czat na dowcipną wymianę zdań | HEYID",
        description:
          "Szukasz kogoś, kto dorówna Ci w riposcie? HEYID losuje rozmówcę, więc każda rozmowa to inna dynamika i inny styl humoru.",
        h1: "Czat na dowcipną wymianę zdań",
        intro:
          "Nic tak nie napędza rozmowy jak dobry, szybki żart — a znalezienie kogoś z podobnym poczuciem humoru bywa trudniejsze, niż się wydaje.",
        body: [
          "Losowa rozmowa daje szansę na trafienie na kogoś, kto naprawdę nadąża za Twoim stylem żartowania, bez wcześniejszej selekcji po zdjęciu.",
          "Jeśli akurat trafisz na osobę na innej fali humoru, po prostu zaczynasz kolejną rozmowę i próbujesz dalej.",
        ],
      },
      en: {
        title: "Chat App for Witty Banter | HEYID",
        description:
          "Looking for someone who can keep up with a good comeback? HEYID matches you randomly, so every chat has a different dynamic and sense of humor.",
        h1: "Chat for witty banter",
        intro:
          "Nothing drives a conversation forward like a good, quick joke — and finding someone with matching humor is trickier than it sounds.",
        body: [
          "A random conversation gives you a shot at matching with someone who genuinely keeps up with your style of joking, without pre-screening by photo.",
          "If you match with someone on a different wavelength, you just start another conversation and try again.",
        ],
      },
    },
  },
  {
    id: "chat-for-mature-singles",
    topic: "chat-for-mature-singles",
    keyword: "dating chat for adults 30 plus",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-singles", "chat-for-genuine-connection"],
    content: {
      pl: {
        title: "Czat randkowy dla dojrzalszych singli | HEYID",
        description:
          "Nie każdy chce zaczynać od aplikacji pełnej filtrów i quizów osobowości. HEYID stawia na zwykłą rozmowę, bez zbędnych formalności.",
        h1: "Czat randkowy dla dojrzalszych singli",
        intro:
          "Im dłużej jest się singlem po trzydziestce, tym trudniej o cierpliwość do typowych rytuałów randkowania online. HEYID upraszcza ten proces.",
        body: [
          "Zamiast długiego kwestionariusza o oczekiwaniach, HEYID zaczyna od rozmowy — reszta wychodzi naturalnie.",
          "Rozmowa z kimś z innego kraju czy pokolenia doświadczeń to też szansa na zupełnie inną perspektywę na randkowanie.",
        ],
      },
      en: {
        title: "Dating Chat for Mature Singles | HEYID",
        description:
          "Not everyone wants to start with an app full of filters and personality quizzes. HEYID focuses on the conversation, without extra formalities.",
        h1: "Dating chat for mature singles",
        intro:
          "The longer you've been single past your 30s, the less patience you have for typical online dating rituals. HEYID simplifies that process.",
        body: [
          "Instead of a long questionnaire about expectations, HEYID starts with the conversation — the rest comes out naturally.",
          "Talking to someone from another country or a different generation of experiences is also a chance for a completely different take on dating.",
        ],
      },
    },
  },
  {
    id: "chat-for-cultural-exchange-dating",
    topic: "chat-for-cultural-exchange-dating",
    keyword: "dating chat for cultural exchange",
    intent: "international-chat",
    cta: "noLanguageBarrier",
    relatedTopics: ["international-dating-chat", "chat-with-foreigners-dating"],
    content: {
      pl: {
        title: "Randki i wymiana kulturowa | HEYID",
        description:
          "Chcesz poznać nie tylko drugą osobę, ale i inną kulturę? HEYID łączy randkowanie z prawdziwą wymianą doświadczeń.",
        h1: "Randki jako wymiana kulturowa",
        intro:
          "Poznawanie kogoś z innego kraju to zwykle znacznie więcej niż randka — to okazja, żeby zobaczyć świat z zupełnie innej perspektywy.",
        body: [
          "Rozmowa naturalnie schodzi na tematy, o których nie pomyślałbyś, rozmawiając z kimś z własnego kraju — od codziennych zwyczajów po święta i tradycje.",
          "Automatyczne tłumaczenie sprawia, że różnice językowe nie stają na przeszkodzie tej wymianie.",
        ],
      },
      en: {
        title: "Dating and Cultural Exchange | HEYID",
        description:
          "Want to get to know not just a person, but a different culture too? HEYID combines dating with real cultural exchange.",
        h1: "Dating as cultural exchange",
        intro:
          "Getting to know someone from another country is usually about much more than a date — it's a chance to see the world from a completely different angle.",
        body: [
          "The conversation naturally drifts into topics you wouldn't think of talking to someone from your own country — from daily habits to holidays and traditions.",
          "Automatic translation means language differences don't get in the way of that exchange.",
        ],
      },
    },
  },
  {
    id: "chat-for-quick-connection",
    topic: "chat-for-quick-connection",
    keyword: "quick dating chat app",
    intent: "start-random-chat",
    cta: "startRandomChat",
    relatedTopics: ["random-dating-chat", "dating-chat-no-registration"],
    content: {
      pl: {
        title: "Szybkie poznanie kogoś nowego | HEYID",
        description:
          "Nie masz czasu na długie budowanie profilu i przewijanie kandydatów? HEYID w kilka sekund łączy Cię z osobą do rozmowy.",
        h1: "Szybkie poznanie kogoś nowego",
        intro:
          "Czasem nie chodzi o skomplikowany proces, tylko o to, żeby po prostu zacząć rozmawiać z kimś nowym, i to szybko.",
        body: [
          "Bez wypełniania długich formularzy, bez przewijania profili — HEYID w kilka sekund dobiera losową osobę do rozmowy.",
          "To wygodna opcja, gdy masz chwilę wolnego czasu i ochotę na rozmowę, bez wcześniejszego planowania.",
        ],
      },
      en: {
        title: "Quickly Meet Someone New | HEYID",
        description:
          "No time for building a long profile and scrolling through candidates? HEYID matches you with someone to talk to in seconds.",
        h1: "Quickly meet someone new",
        intro:
          "Sometimes it's not about a complicated process — it's about simply starting a conversation with someone new, fast.",
        body: [
          "No long forms to fill in, no scrolling through profiles — HEYID matches you with a random person in seconds.",
          "It's a convenient option when you have a spare moment and feel like talking, with no advance planning.",
        ],
      },
    },
  },
  {
    id: "chat-for-thoughtful-conversation",
    topic: "chat-for-thoughtful-conversation",
    keyword: "chat app for deep conversation",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-genuine-connection", "chat-for-slow-dating"],
    content: {
      pl: {
        title: "Czat na głębszą rozmowę | HEYID",
        description:
          "Zmęczony powierzchownym small talkiem? HEYID pozwala trafić na rozmowę, która może zejść na poważniejsze tematy, jeśli oboje tego chcecie.",
        h1: "Przestrzeń na głębszą rozmowę",
        intro:
          "Nie każda rozmowa musi kończyć się na pogodzie i pracy — czasem najciekawsza wymiana zdań zaczyna się od zupełnie przypadkowego pytania.",
        body: [
          "Losowość rozmówcy sprawia, że rozmowa może pójść w zupełnie nieoczekiwanym kierunku, którego nie dałoby się zaplanować.",
          "Jeśli chemia w rozmowie się pojawi, nic nie stoi na przeszkodzie, żeby wrócić do niej później i kontynuować.",
        ],
      },
      en: {
        title: "Chat App for Deeper Conversation | HEYID",
        description:
          "Tired of surface-level small talk? HEYID can lead to a conversation that goes deeper, if you both want it to.",
        h1: "Room for a deeper conversation",
        intro:
          "Not every conversation has to stay on the weather and work — sometimes the most interesting exchange starts from a completely random question.",
        body: [
          "The randomness of who you match with means the conversation can head in a direction you couldn't have planned.",
          "If there's real chemistry in the conversation, nothing stops you from coming back to it later and picking up where you left off.",
        ],
      },
    },
  },
  {
    id: "chat-for-honest-dating",
    topic: "chat-for-honest-dating",
    keyword: "honest dating chat app",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-genuine-connection", "anonymous-dating-chat"],
    content: {
      pl: {
        title: "Szczera rozmowa zamiast wyidealizowanego profilu | HEYID",
        description:
          "Zdjęcia profilowe łatwo wyidealizować, rozmowę trudniej. HEYID zaczyna od tego, co naprawdę pokazuje charakter drugiej osoby.",
        h1: "Szczerość zaczyna się od rozmowy",
        intro:
          "Zdjęcie w idealnym świetle nie pokaże, czy z kimś dobrze się rozmawia. HEYID zaczyna dokładnie od tego elementu, który trudniej podrasować.",
        body: [
          "Rozmowa w czasie rzeczywistym pokazuje więcej niż starannie dobrany zestaw zdjęć — sposób, w jaki ktoś reaguje i pisze, mówi sporo o tym, jak faktycznie się z nim rozmawia.",
          "Automatyczne tłumaczenie sprawia, że ta szczerość rozmowy nie jest ograniczona wyłącznie do osób mówiących Twoim językiem.",
        ],
      },
      en: {
        title: "An Honest Conversation Instead of a Curated Profile | HEYID",
        description:
          "Profile photos are easy to idealize, conversation is harder to fake. HEYID starts with the part that's actually hard to curate.",
        h1: "Honesty starts with conversation",
        intro:
          "A perfectly lit photo won't tell you if you actually click with someone. HEYID starts with exactly the part that's harder to dress up.",
        body: [
          "A real-time conversation shows more than a carefully picked set of photos — how someone reacts and writes says a lot about what talking to them is actually like.",
          "Automatic translation means that honesty in conversation isn't limited to people who speak your language.",
        ],
      },
    },
  },
  {
    id: "chat-for-second-language-flirting",
    topic: "chat-for-second-language-flirting",
    keyword: "flirt in a foreign language",
    intent: "language-exchange",
    cta: "noLanguageBarrier",
    relatedTopics: ["flirt-chat-online", "practice-english-chat"],
    content: {
      pl: {
        title: "Flirtuj w obcym języku | HEYID",
        description:
          "Chcesz spróbować flirtować w innym języku niż ojczysty? HEYID tłumaczy wiadomości, więc możesz ćwiczyć bez obaw o błędy.",
        h1: "Flirtuj w obcym języku, bez presji perfekcji",
        intro:
          "Flirtowanie w obcym języku to zupełnie inne doświadczenie niż zwykła lekcja gramatyki — a HEYID daje przestrzeń, żeby to przećwiczyć bez presji.",
        body: [
          "Jeśli zabraknie Ci słowa albo zdanie wyjdzie niezgrabnie, tłumaczenie w HEYID i tak pozwoli drugiej osobie zrozumieć, o co Ci chodziło.",
          "Z czasem, im więcej takich rozmów przeprowadzisz, tym łatwiej przyjdzie Ci naturalny flirt w tym języku, bez tłumaczenia.",
        ],
      },
      en: {
        title: "Flirt in a Foreign Language | HEYID",
        description:
          "Want to try flirting in a language that isn't your first? HEYID translates messages, so you can practice without worrying about mistakes.",
        h1: "Flirt in a foreign language, without the pressure of perfection",
        intro:
          "Flirting in a foreign language is a completely different experience from a grammar lesson — HEYID gives you room to try it without pressure.",
        body: [
          "If a word escapes you or a sentence comes out clumsy, HEYID's translation still lets the other person understand what you meant.",
          "The more conversations like this you have, the easier natural flirting in that language becomes, translation or not.",
        ],
      },
    },
  },


// ============================================================
  // BATCH 5 — 30 more dating/flirt-angle topics (paste before closing "];")
  // ============================================================
  {
    id: "dating-chat-no-swiping",
    topic: "dating-chat-no-swiping",
    keyword: "dating app without swiping",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["dating-chat-app-alternative", "random-dating-chat"],
    content: {
      pl: {
        title: "Randkowanie bez swipe'owania | HEYID",
        description:
          "Zmęczony przesuwaniem palcem po dziesiątkach zdjęć? HEYID pomija ten etap i od razu łączy Cię z osobą do rozmowy.",
        h1: "Randkowanie bez swipe'owania",
        intro:
          "Gest przesuwania w lewo lub prawo sprowadza pierwsze wrażenie do ułamka sekundy. HEYID rezygnuje z tego mechanizmu na rzecz rozmowy.",
        body: [
          "Zamiast oceniać kogoś po jednym zdjęciu, od razu zaczynasz z nim rozmowę — reszta wychodzi w trakcie.",
          "To podejście lepiej sprawdza się, jeśli chcesz dać komuś szansę, zanim jeszcze zdążysz go ocenić wizualnie.",
        ],
      },
      en: {
        title: "Dating Without Swiping | HEYID",
        description:
          "Tired of swiping through dozens of photos? HEYID skips that step and connects you directly to a person to talk to.",
        h1: "Dating without swiping",
        intro:
          "The left-or-right swipe reduces a first impression to a split second. HEYID drops that mechanic in favor of conversation.",
        body: [
          "Instead of judging someone by a single photo, you start talking to them right away — the rest comes out along the way.",
          "This works better if you'd rather give someone a chance before judging them visually.",
        ],
      },
    },
  },
  {
    id: "dating-chat-busy-professionals",
    topic: "dating-chat-busy-professionals",
    keyword: "dating chat for busy professionals",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-quick-connection", "chat-for-remote-workers"],
    content: {
      pl: {
        title: "Randki dla zapracowanych | HEYID",
        description:
          "Nie masz czasu na wielogodzinne przewijanie aplikacji randkowych? HEYID pozwala poznać kogoś w kilkuminutowej przerwie.",
        h1: "Randki dla osób z napiętym grafikiem",
        intro:
          "Kiedy dzień jest wypełniony po brzegi, klasyczne randkowanie łatwo spada na sam koniec listy priorytetów. HEYID nie wymaga dużo czasu.",
        body: [
          "Krótka, kilkuminutowa rozmowa między spotkaniami wystarczy, żeby poznać kogoś nowego, bez konieczności planowania wieczoru.",
          "Powiadomienia pozwalają wrócić do rozmowy dokładnie wtedy, kiedy masz na to chwilę, a nie na sztywno wyznaczonych zasadach.",
        ],
      },
      en: {
        title: "Dating Chat for Busy Professionals | HEYID",
        description:
          "No time for hours of swiping through dating apps? HEYID lets you meet someone in a spare few minutes.",
        h1: "Dating for people with packed schedules",
        intro:
          "When your day is fully booked, traditional dating easily falls to the bottom of the priority list. HEYID doesn't demand much time.",
        body: [
          "A short, few-minute chat between meetings is enough to meet someone new, without having to plan out an entire evening.",
          "Notifications let you pick the conversation back up exactly when you have a moment, not on a fixed schedule.",
        ],
      },
    },
  },
  {
    id: "dating-chat-coffee-lovers",
    topic: "dating-chat-coffee-lovers",
    keyword: "dating chat for coffee lovers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-cooking-lovers", "chat-for-singles"],
    content: {
      pl: {
        title: "Randki dla fanów kawy | HEYID",
        description:
          "Poranna kawa to dobry temat na pierwszą rozmowę. HEYID łączy Cię z osobami, które doceniają tę samą codzienną rytuał.",
        h1: "Randki dla miłośników kawy",
        intro:
          "Rozmowa o ulubionym sposobie parzenia kawy to prosty, ale zaskakująco skuteczny sposób na przełamanie pierwszych lodów.",
        body: [
          "Możesz dowiedzieć się, jak wygląda kawowy rytuał kogoś z zupełnie innego kraju — czasem to więcej mówi o stylu życia niż długi opis w profilu.",
          "Automatyczne tłumaczenie sprawia, że nawet drobna rozmowa o codzienności nie kończy się na barierze językowej.",
        ],
      },
      en: {
        title: "Dating Chat for Coffee Lovers | HEYID",
        description:
          "Morning coffee makes a great first conversation topic. HEYID connects you with people who share that same daily ritual.",
        h1: "Dating chat for coffee lovers",
        intro:
          "Talking about someone's favorite way to brew coffee is a simple but surprisingly effective icebreaker.",
        body: [
          "You might learn what the coffee ritual looks like for someone from a completely different country — sometimes that says more about a lifestyle than a long profile bio.",
          "Automatic translation means even a small talk topic like this doesn't stop at the language barrier.",
        ],
      },
    },
  },
  {
    id: "dating-chat-night-owls",
    topic: "dating-chat-night-owls",
    keyword: "dating chat for night owls",
    intent: "meet-people-general",
    cta: "startRandomChat",
    relatedTopics: ["late-night-chat", "meet-someone-new-tonight"],
    content: {
      pl: {
        title: "Randki dla nocnych marków | HEYID",
        description:
          "Aktywność do późna to nie problem — HEYID zawsze ma kogoś online, niezależnie od strefy czasowej i pory dnia.",
        h1: "Randki dla nocnych marków",
        intro:
          "Kiedy większość znajomych już śpi, HEYID pozwala trafić na kogoś, kto akurat też nie zamierza kłaść się wcześnie.",
        body: [
          "Dzięki globalnej bazie użytkowników zawsze ktoś jest dostępny, niezależnie od tego, jak późno jest u Ciebie.",
          "Rozmowa o północy ma zupełnie inny klimat niż ta w środku dnia — czasem właśnie wtedy ludzie są bardziej otwarci.",
        ],
      },
      en: {
        title: "Dating Chat for Night Owls | HEYID",
        description:
          "Being up late isn't a problem — HEYID always has someone online, no matter the time zone or time of day.",
        h1: "Dating chat for night owls",
        intro:
          "When most people you know are already asleep, HEYID can match you with someone who isn't planning on turning in early either.",
        body: [
          "Thanks to a global user base, someone is almost always available, no matter how late it is where you are.",
          "A conversation at midnight has a completely different vibe than one during the day — sometimes that's exactly when people open up more.",
        ],
      },
    },
  },
  {
    id: "dating-chat-humor-match",
    topic: "dating-chat-humor-match",
    keyword: "find someone with the same sense of humor",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-for-witty-banter", "casual-chat-flirt"],
    content: {
      pl: {
        title: "Znajdź kogoś z podobnym poczuciem humoru | HEYID",
        description:
          "Wspólny sens humoru bywa ważniejszy niż lista wspólnych zainteresowań. HEYID pozwala to sprawdzić od razu, w rozmowie.",
        h1: "Znajdź kogoś, kto śmieje się z tego co Ty",
        intro:
          "Trudno przewidzieć z profilu, czy ktoś ma podobne poczucie humoru do Twojego — to widać dopiero w rozmowie.",
        body: [
          "Losowa rozmowa daje szybką odpowiedź: albo się razem śmiejecie, albo nie — bez zgadywania na podstawie zdjęć czy opisu.",
          "Jeśli akurat trafisz na kogoś na zupełnie innej fali humoru, po prostu zaczynasz kolejną rozmowę.",
        ],
      },
      en: {
        title: "Find Someone with a Matching Sense of Humor | HEYID",
        description:
          "A shared sense of humor can matter more than a list of common interests. HEYID lets you test that right away, in conversation.",
        h1: "Find someone who laughs at the same things you do",
        intro:
          "It's hard to tell from a profile whether someone shares your sense of humor — that only shows up in actual conversation.",
        body: [
          "A random conversation gives you a quick answer: either you're laughing together or you're not, no guessing from photos or bios.",
          "If you match with someone on a completely different wavelength, you just start another conversation.",
        ],
      },
    },
  },
  {
    id: "dating-chat-foodies",
    topic: "dating-chat-foodies",
    keyword: "dating chat for foodies",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-cooking-lovers", "dating-chat-coffee-lovers"],
    content: {
      pl: {
        title: "Randki dla fanów jedzenia | HEYID",
        description:
          "Jeśli planowanie wieczoru zaczyna się od pytania \"co zjemy\", HEYID pomoże Ci poznać kogoś, kto myśli podobnie.",
        h1: "Randki dla osób, dla których jedzenie to temat numer jeden",
        intro:
          "Rozmowa o jedzeniu to naturalny, łatwy temat na start — a przy okazji szybko widać, czy ktoś podchodzi do niego równie entuzjastycznie jak Ty.",
        body: [
          "Możesz wymienić się poleceniami kuchni z innego kraju albo po prostu podyskutować, które danie jest przereklamowane.",
          "Automatyczne tłumaczenie ułatwia rozmowę o potrawach, które nawet nie mają dokładnego odpowiednika w Twoim języku.",
        ],
      },
      en: {
        title: "Dating Chat for Foodies | HEYID",
        description:
          "If planning an evening starts with \"what should we eat,\" HEYID can help you meet someone who thinks the same way.",
        h1: "Dating chat for people who put food first",
        intro:
          "Talking about food is a natural, easy conversation starter — and it quickly shows whether someone's as enthusiastic about it as you are.",
        body: [
          "You can swap recommendations from another country's cuisine or just debate which dish is overrated.",
          "Automatic translation makes it easier to talk about dishes that don't even have an exact equivalent in your language.",
        ],
      },
    },
  },
  {
    id: "dating-chat-pet-lovers",
    topic: "dating-chat-pet-lovers",
    keyword: "dating chat for pet lovers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-singles", "meet-people-similar-interests"],
    content: {
      pl: {
        title: "Randki dla miłośników zwierząt | HEYID",
        description:
          "Zdjęcie z psem w profilu to jedno, ale prawdziwa rozmowa o zwierzętach to zupełnie inna sprawa. HEYID pozwala ją zacząć.",
        h1: "Randki dla osób kochających zwierzęta",
        intro:
          "Historie o własnym zwierzaku potrafią przełamać pierwsze lody lepiej niż niejeden wyuczony temat na start.",
        body: [
          "Możesz porównać, jak wygląda posiadanie zwierzaka w innym kraju, albo po prostu podzielić się anegdotą, która rozśmieszy drugą osobę.",
          "Automatyczne tłumaczenie sprawia, że taka rozmowa toczy się naturalnie, nawet jeśli druga osoba mieszka na innym kontynencie.",
        ],
      },
      en: {
        title: "Dating Chat for Pet Lovers | HEYID",
        description:
          "A profile photo with a dog is one thing, but an actual conversation about pets is something else. HEYID lets you start it.",
        h1: "Dating chat for animal lovers",
        intro:
          "Stories about your own pet break the ice better than plenty of rehearsed conversation starters.",
        body: [
          "You can compare what having a pet looks like in another country, or just swap an anecdote that makes the other person laugh.",
          "Automatic translation means the conversation flows naturally, even if the other person lives on a different continent.",
        ],
      },
    },
  },
  {
    id: "dating-chat-outdoorsy",
    topic: "dating-chat-outdoorsy",
    keyword: "dating chat for outdoorsy people",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-fitness-motivation", "chat-for-adventurous-singles"],
    content: {
      pl: {
        title: "Randki dla osób lubiących naturę | HEYID",
        description:
          "Jeśli wolisz szlak górski od kanapy, HEYID pomoże Ci znaleźć kogoś, kto myśli podobnie o spędzaniu wolnego czasu.",
        h1: "Randki dla miłośników spędzania czasu na świeżym powietrzu",
        intro:
          "Nie każdy dzieli entuzjazm do wczesnych wyjść na szlak czy weekendów pod namiotem — rozmowa szybko to zweryfikuje.",
        body: [
          "Możesz porównać ulubione trasy albo dowiedzieć się, jak wyglądają wędrówki w zupełnie innym krajobrazie niż ten, który znasz.",
          "Automatyczne tłumaczenie sprawia, że nawet szczegółowa rozmowa o konkretnym szlaku nie utyka na barierze językowej.",
        ],
      },
      en: {
        title: "Dating Chat for Outdoorsy People | HEYID",
        description:
          "If you'd rather be on a trail than on the couch, HEYID can help you find someone who feels the same about free time.",
        h1: "Dating chat for people who love the outdoors",
        intro:
          "Not everyone shares the enthusiasm for early hikes or weekends camping — conversation quickly reveals who does.",
        body: [
          "You can compare favorite trails or find out what hiking looks like in a landscape completely different from the one you know.",
          "Automatic translation means even a detailed conversation about a specific trail doesn't get stuck on the language barrier.",
        ],
      },
    },
  },
  {
    id: "dating-chat-homebodies",
    topic: "dating-chat-homebodies",
    keyword: "dating chat for homebodies",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-introverts", "text-based-dating"],
    content: {
      pl: {
        title: "Randki dla osób lubiących zostać w domu | HEYID",
        description:
          "Nie musisz udawać, że szukasz partnera do wspinaczki, jeśli wolisz wieczór z serialem. HEYID pozwala poznać kogoś na Twoich warunkach.",
        h1: "Randki dla domatorów",
        intro:
          "Idealny wieczór to niekoniecznie impreza — dla wielu osób to spokojny wieczór w domu, i to też jest w porządku.",
        body: [
          "Rozmowa na HEYID nie wymaga wychodzenia z domu, więc pasuje do stylu życia, w którym najlepsze plany to brak planów.",
          "Możesz poznać kogoś, kto ma dokładnie taki sam pomysł na spędzanie wolnego czasu jak Ty, niezależnie od tego, gdzie mieszka.",
        ],
      },
      en: {
        title: "Dating Chat for Homebodies | HEYID",
        description:
          "You don't have to pretend you're looking for a climbing partner if you'd rather have a night in with a show. HEYID lets you meet people on your own terms.",
        h1: "Dating chat for homebodies",
        intro:
          "The perfect evening isn't necessarily a party — for plenty of people it's a quiet night in, and that's fine too.",
        body: [
          "A conversation on HEYID doesn't require leaving the house, which fits a lifestyle where the best plan is no plan at all.",
          "You might meet someone with exactly the same idea of a good evening as you, no matter where they live.",
        ],
      },
    },
  },
  {
    id: "dating-chat-icebreaker-questions",
    topic: "dating-chat-icebreaker-questions",
    keyword: "dating icebreaker questions chat",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["flirty-conversation-starters", "chat-first-date-practice"],
    content: {
      pl: {
        title: "Pytania na dobry początek rozmowy randkowej | HEYID",
        description:
          "Nie wiesz, o co zapytać na początku? SPARX w HEYID podpowie pytanie dopasowane do kontekstu, żeby rozmowa ruszyła z miejsca.",
        h1: "Dobre pytania na początek rozmowy",
        intro:
          "Pierwsze pytanie potrafi zdecydować, czy rozmowa w ogóle się rozkręci. Dobre pytanie to takie, na które nie da się odpowiedzieć jednym słowem.",
        body: [
          "Zamiast standardowego \"co słychać\", SPARX może podpowiedzieć pytanie, które faktycznie zachęca do dłuższej odpowiedzi.",
          "Jeśli rozmowa utknie w martwym punkcie w dowolnym momencie, zawsze możesz wrócić do tej samej podpowiedzi, żeby ją odblokować.",
        ],
      },
      en: {
        title: "Good Dating Icebreaker Questions | HEYID",
        description:
          "Not sure what to ask first? SPARX in HEYID suggests a question tailored to the context, so the conversation actually gets moving.",
        h1: "Good questions to start a conversation",
        intro:
          "The first question can decide whether a conversation ever really gets going. A good one is something that can't be answered in a single word.",
        body: [
          "Instead of the usual \"how's it going,\" SPARX can suggest a question that genuinely invites a longer answer.",
          "If the conversation stalls at any point, you can always lean on the same kind of prompt to get it moving again.",
        ],
      },
    },
  },
  {
    id: "dating-chat-long-term",
    topic: "dating-chat-long-term",
    keyword: "chat app looking for long term relationship",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-to-find-love", "chat-for-genuine-connection"],
    content: {
      pl: {
        title: "Szukasz czegoś na dłużej — HEYID | HEYID",
        description:
          "Nie każda rozmowa musi być tylko na chwilę. HEYID pozwala poznać kogoś od zwykłej rozmowy, bez presji szybkiej decyzji.",
        h1: "Kiedy szukasz czegoś poważniejszego",
        intro:
          "Jeśli zależy Ci na czymś trwałym, warto zacząć od tego, co faktycznie buduje relację — od rozmowy, a nie od pierwszego wrażenia ze zdjęcia.",
        body: [
          "HEYID nie zmusza do deklarowania na starcie, czego szukasz — możesz po prostu poznawać ludzi i zobaczyć, która znajomość naturalnie się rozwinie.",
          "Automatyczne tłumaczenie otwiera ten proces na cały świat, więc osoba, z którą zbudujesz coś trwałego, wcale nie musi mieszkać w Twoim kraju.",
        ],
      },
      en: {
        title: "Looking for Something Long Term | HEYID",
        description:
          "Not every conversation has to be short-lived. HEYID lets you meet someone through an ordinary conversation, no pressure to decide fast.",
        h1: "When you're looking for something more serious",
        intro:
          "If you care about something lasting, it helps to start with what actually builds a relationship — conversation, not a first impression from a photo.",
        body: [
          "HEYID doesn't make you declare what you're looking for upfront — you can simply meet people and see which connection naturally develops.",
          "Automatic translation opens that process up to the whole world, so the person you build something lasting with doesn't have to live in your country.",
        ],
      },
    },
  },
  {
    id: "dating-chat-casual-fun",
    topic: "dating-chat-casual-fun",
    keyword: "casual chat no commitment",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["casual-chat-flirt", "chat-for-singles"],
    content: {
      pl: {
        title: "Luźna rozmowa bez zobowiązań | HEYID",
        description:
          "Nie każda rozmowa musi prowadzić do czegoś poważnego. HEYID daje przestrzeń na przyjemną wymianę zdań, bez presji.",
        h1: "Luźna rozmowa, bez presji na przyszłość",
        intro:
          "Czasem najlepsza rozmowa to taka, która nie musi niczego oznaczać — po prostu miła chwila z kimś nowym.",
        body: [
          "HEYID nie wymaga deklarowania intencji z góry — rozmowa może zostać dokładnie tym, na co masz ochotę w danej chwili.",
          "Jeśli w pewnym momencie zechcesz, żeby stało się czymś więcej, to Ty decydujesz — nikt nie zakłada tego za Ciebie.",
        ],
      },
      en: {
        title: "Casual Chat, No Commitment | HEYID",
        description:
          "Not every conversation has to lead somewhere serious. HEYID gives you room for a fun exchange, no pressure attached.",
        h1: "A casual conversation, no pressure about the future",
        intro:
          "Sometimes the best conversation is one that doesn't have to mean anything — just a nice moment with someone new.",
        body: [
          "HEYID doesn't ask you to declare your intentions upfront — the conversation can stay exactly what you feel like at the moment.",
          "If at some point you want it to become something more, that's your call — nothing assumes it for you.",
        ],
      },
    },
  },
  {
    id: "dating-chat-social-skills",
    topic: "dating-chat-social-skills",
    keyword: "practice social skills chat app",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-to-boost-confidence-dating", "chat-for-shy-singles"],
    content: {
      pl: {
        title: "Poćwicz rozmowę z nowymi ludźmi | HEYID",
        description:
          "Jeśli dawno nie rozmawiałeś z kimś nowym, łatwo stracić wprawę. HEYID daje bezpieczną przestrzeń, żeby to odbudować.",
        h1: "Poćwicz rozmowę z nowymi ludźmi",
        intro:
          "Umiejętność swobodnej rozmowy z obcą osobą, jak każda inna, wymaga praktyki — a jej brak łatwo zauważyć po dłuższej przerwie.",
        body: [
          "Każda rozmowa na HEYID to okazja, żeby przećwiczyć naturalne prowadzenie dialogu, bez presji, że musi wypaść idealnie.",
          "Jeśli w danym momencie zabraknie Ci pomysłu, SPARX podpowie, jak kontynuować rozmowę, żebyś nie utknął w ciszy.",
        ],
      },
      en: {
        title: "Practice Talking to New People | HEYID",
        description:
          "If it's been a while since you talked to someone new, it's easy to feel rusty. HEYID gives you a safe space to rebuild that.",
        h1: "Practice talking to new people",
        intro:
          "The ability to talk comfortably with a stranger, like any skill, needs practice — and it's easy to notice its absence after a long break.",
        body: [
          "Every conversation on HEYID is a chance to practice keeping a natural dialogue going, without the pressure of it being perfect.",
          "If you run out of ideas at any point, SPARX can suggest how to keep the conversation moving so you don't get stuck in silence.",
        ],
      },
    },
  },
  {
    id: "dating-chat-college-students",
    topic: "dating-chat-college-students",
    keyword: "dating chat for college students",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-students", "chat-for-shy-singles"],
    content: {
      pl: {
        title: "Randki dla studentów | HEYID",
        description:
          "Studenckie życie to nie zawsze łatwy czas na randkowanie. HEYID pozwala poznać kogoś nowego bez wychodzenia z akademika.",
        h1: "Randki dla studentów",
        intro:
          "Między zajęciami, sesją i pracą dorywczą, na klasyczne randkowanie często brakuje czasu. HEYID nie wymaga go wiele.",
        body: [
          "Krótka rozmowa między zajęciami wystarczy, żeby poznać kogoś nowego, bez konieczności umawiania się na konkretny wieczór.",
          "Możesz trafić na studenta z zupełnie innej uczelni albo kraju, co samo w sobie bywa ciekawszą rozmową niż z kimś z tego samego wydziału.",
        ],
      },
      en: {
        title: "Dating Chat for College Students | HEYID",
        description:
          "College life isn't always the easiest time to date. HEYID lets you meet someone new without leaving your dorm room.",
        h1: "Dating chat for college students",
        intro:
          "Between classes, exams, and a part-time job, there's often little time left for traditional dating. HEYID doesn't ask for much of it.",
        body: [
          "A short chat between classes is enough to meet someone new, without having to plan an entire evening around it.",
          "You might match with a student from a completely different school or country, which alone can make for a more interesting conversation than someone from your own department.",
        ],
      },
    },
  },
  {
    id: "dating-chat-relocating-singles",
    topic: "dating-chat-relocating-singles",
    keyword: "dating chat before moving abroad",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-expats", "chat-for-new-city"],
    content: {
      pl: {
        title: "Randki przed przeprowadzką za granicę | HEYID",
        description:
          "Planujesz przeprowadzkę i chcesz poznać kogoś z nowego miejsca, zanim tam dotrzesz? HEYID pozwala zacząć wcześniej.",
        h1: "Poznaj kogoś przed przeprowadzką za granicę",
        intro:
          "Rozmowa z kimś z miejsca, do którego się wybierasz, to dobry sposób, żeby oswoić się z nowym otoczeniem, zanim jeszcze tam zamieszkasz.",
        body: [
          "Możesz zapytać o codzienne życie w nowym miejscu, albo po prostu zacząć budować pierwszą znajomość, zanim jeszcze się przeprowadzisz.",
          "Automatyczne tłumaczenie sprawia, że nie musisz znać lokalnego języka, żeby zacząć tę rozmowę.",
        ],
      },
      en: {
        title: "Dating Chat Before Moving Abroad | HEYID",
        description:
          "Planning a move and want to meet someone from your new home before you get there? HEYID lets you start early.",
        h1: "Meet someone before moving abroad",
        intro:
          "Talking to someone from the place you're moving to is a good way to get comfortable with your new surroundings before you even arrive.",
        body: [
          "You can ask about everyday life in your new home, or simply start building a first connection before the move happens.",
          "Automatic translation means you don't need to know the local language to start that conversation.",
        ],
      },
    },
  },
  {
    id: "dating-chat-cross-cultural-romance",
    topic: "dating-chat-cross-cultural-romance",
    keyword: "cross cultural dating chat",
    intent: "international-chat",
    cta: "noLanguageBarrier",
    relatedTopics: ["chat-for-cultural-exchange-dating", "international-dating-chat"],
    content: {
      pl: {
        title: "Związek międzykulturowy — zacznij od rozmowy | HEYID",
        description:
          "Różnice kulturowe potrafią być fascynujące, nie tylko przeszkodą. HEYID pozwala poznać kogoś z zupełnie innej kultury.",
        h1: "Poznaj kogoś z innej kultury",
        intro:
          "Związek z kimś z innej kultury zaczyna się od tej samej rzeczy co każdy inny — od rozmowy, w której poznajecie swoje różnice i podobieństwa.",
        body: [
          "Różnice w podejściu do randkowania, rodziny czy codziennych zwyczajów mogą być ciekawym tematem rozmowy, a nie tylko wyzwaniem.",
          "Automatyczne tłumaczenie usuwa pierwszą i najbardziej oczywistą barierę, jaką jest język, zostawiając miejsce na poznanie reszty.",
        ],
      },
      en: {
        title: "Cross-Cultural Romance — Start with Conversation | HEYID",
        description:
          "Cultural differences can be fascinating, not just an obstacle. HEYID lets you meet someone from a completely different culture.",
        h1: "Meet someone from a different culture",
        intro:
          "A relationship with someone from another culture starts the same way any other does — with a conversation where you learn each other's differences and similarities.",
        body: [
          "Differences in how you approach dating, family, or daily habits can make for an interesting conversation topic, not just a challenge.",
          "Automatic translation removes the first and most obvious barrier — language — leaving room to get to know the rest.",
        ],
      },
    },
  },
  {
    id: "dating-chat-language-learners-romance",
    topic: "dating-chat-language-learners-romance",
    keyword: "dating chat for language learners",
    intent: "language-exchange",
    cta: "noLanguageBarrier",
    relatedTopics: ["chat-for-second-language-flirting", "language-exchange"],
    content: {
      pl: {
        title: "Randki dla osób uczących się języków | HEYID",
        description:
          "Uczysz się nowego języka i chcesz przy okazji poznać kogoś, kto mówi nim natywnie? HEYID łączy naukę z randkowaniem.",
        h1: "Randki dla osób uczących się nowego języka",
        intro:
          "Rozmowa z kimś, w kogo się chcesz zainteresować, to jedna z najskuteczniejszych motywacji, żeby faktycznie ćwiczyć nowy język.",
        body: [
          "Automatyczne tłumaczenie zapewnia, że nawet jeśli Twój poziom języka nie jest jeszcze wysoki, rozmowa i tak będzie płynna.",
          "Z czasem, im więcej takich rozmów przeprowadzisz, tym mniej będziesz polegać na tłumaczeniu, a bardziej na własnej znajomości języka.",
        ],
      },
      en: {
        title: "Dating Chat for Language Learners | HEYID",
        description:
          "Learning a new language and want to meet a native speaker along the way? HEYID combines learning with dating.",
        h1: "Dating chat for people learning a new language",
        intro:
          "Talking to someone you're genuinely interested in is one of the most effective motivations to actually practice a new language.",
        body: [
          "Automatic translation makes sure that even if your level isn't high yet, the conversation still flows.",
          "The more conversations like this you have, the less you'll rely on translation and the more on your own growing fluency.",
        ],
      },
    },
  },
  {
    id: "dating-chat-anonymous-crush",
    topic: "dating-chat-anonymous-crush",
    keyword: "talk to someone you like anonymously",
    intent: "learn-anonymous-chat",
    cta: "tryIt",
    relatedTopics: ["anonymous-dating-chat", "safe-flirt-chat"],
    content: {
      pl: {
        title: "Porozmawiaj o swoich uczuciach anonimowo | HEYID",
        description:
          "Czasem łatwiej najpierw przegadać coś z kimś zupełnie obcym niż od razu z osobą, którą lubisz. HEYID daje na to przestrzeń.",
        h1: "Porozmawiaj anonimowo, zanim zrobisz pierwszy krok",
        intro:
          "Rozmowa z nieznajomym o tym, co czujesz, bywa łatwiejsza niż rozmowa z osobą, na której faktycznie Ci zależy.",
        body: [
          "Anonimowość HEYID pozwala uporządkować myśli albo po prostu przećwiczyć rozmowę, zanim zdecydujesz się na realny krok.",
          "Nikt nie zna Twojej tożsamości, więc możesz rozmawiać szczerze, bez obawy, że wróci to do kogoś, kogo znasz.",
        ],
      },
      en: {
        title: "Talk Through Your Feelings Anonymously | HEYID",
        description:
          "Sometimes it's easier to talk something through with a complete stranger before talking to the person you actually like. HEYID gives you that space.",
        h1: "Talk it out anonymously before taking the first step",
        intro:
          "Talking to a stranger about what you're feeling can be easier than talking to the person you actually care about.",
        body: [
          "HEYID's anonymity lets you sort out your thoughts, or just practice the conversation, before deciding to take a real step.",
          "No one knows who you are, so you can talk honestly without worrying it'll get back to someone you know.",
        ],
      },
    },
  },
  {
    id: "dating-chat-friendship-first",
    topic: "dating-chat-friendship-first",
    keyword: "meet someone as friends first",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-slow-dating", "chat-for-genuine-connection"],
    content: {
      pl: {
        title: "Poznaj kogoś najpierw jako znajomego | HEYID",
        description:
          "Nie każda znajomość musi od razu być zaklasyfikowana. HEYID pozwala po prostu rozmawiać, bez etykietowania relacji z góry.",
        h1: "Zacznij od zwykłej znajomości, reszta może przyjść sama",
        intro:
          "Niektóre z najlepszych relacji zaczynają się bez etykiety — po prostu od dobrej rozmowy, która z czasem przeradza się w coś więcej.",
        body: [
          "HEYID nie wymaga deklarowania, czy szukasz przyjaźni, czy czegoś więcej — możesz po prostu poznać kogoś i zobaczyć, co się wydarzy.",
          "Brak presji na szybką klasyfikację relacji często sprawia, że rozmowa jest bardziej szczera i naturalna.",
        ],
      },
      en: {
        title: "Meet Someone as Friends First | HEYID",
        description:
          "Not every connection needs to be labeled right away. HEYID lets you simply talk, without categorizing the relationship upfront.",
        h1: "Start as friends, the rest can follow naturally",
        intro:
          "Some of the best relationships start without a label — just a good conversation that grows into something more over time.",
        body: [
          "HEYID doesn't ask you to declare whether you're looking for friendship or something more — you can just meet someone and see what happens.",
          "Without the pressure to quickly categorize the relationship, the conversation often ends up more honest and natural.",
        ],
      },
    },
  },
  {
    id: "dating-chat-creative-people",
    topic: "dating-chat-creative-people",
    keyword: "dating chat for creative people",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-hobby-photography", "chat-for-music-lovers"],
    content: {
      pl: {
        title: "Randki dla osób kreatywnych | HEYID",
        description:
          "Chcesz porozmawiać z kimś, kto myśli podobnie kreatywnie? HEYID łączy Cię z osobami zajmującymi się sztuką i twórczością z całego świata.",
        h1: "Randki dla twórczych dusz",
        intro:
          "Rozmowa z kimś kreatywnym rzadko idzie utartymi torami — trudniej przewidzieć, w jakim kierunku pójdzie.",
        body: [
          "Możesz porozmawiać o projekcie, nad którym akurat pracujesz, albo po prostu wymienić się inspiracjami z kimś z zupełnie innej dziedziny sztuki.",
          "Automatyczne tłumaczenie sprawia, że nawet niuanse artystycznego słownictwa nie giną w rozmowie.",
        ],
      },
      en: {
        title: "Dating Chat for Creative People | HEYID",
        description:
          "Want to talk to someone with a similarly creative mind? HEYID connects you with artists and creators from around the world.",
        h1: "Dating chat for creative souls",
        intro:
          "A conversation with a creative person rarely goes down predictable paths — it's harder to guess where it'll head.",
        body: [
          "You can talk about a project you're currently working on, or simply swap inspiration with someone from a completely different creative field.",
          "Automatic translation means even the nuances of artistic vocabulary don't get lost in the conversation.",
        ],
      },
    },
  },
  {
    id: "dating-chat-tech-people",
    topic: "dating-chat-tech-people",
    keyword: "dating chat for tech people",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-remote-workers", "chat-for-gamers"],
    content: {
      pl: {
        title: "Randki dla osób z branży technologicznej | HEYID",
        description:
          "Chcesz porozmawiać z kimś, kto rozumie Twoje żarty o deploymencie w piątek? HEYID łączy Cię z osobami z branży IT z całego świata.",
        h1: "Randki dla ludzi z branży tech",
        intro:
          "Rozmowa z kimś z podobnej branży bywa łatwiejsza — nie trzeba tłumaczyć kontekstu, który dla innych brzmi jak żargon.",
        body: [
          "Możesz trafić na kogoś z kraju o zupełnie innej kulturze pracy w IT, co samo w sobie bywa ciekawym tematem do rozmowy.",
          "Automatyczne tłumaczenie sprawia, że różnice językowe nie przeszkadzają, nawet jeśli rozmowa zejdzie na techniczne szczegóły.",
        ],
      },
      en: {
        title: "Dating Chat for Tech People | HEYID",
        description:
          "Want to talk to someone who actually gets your Friday deployment jokes? HEYID connects you with people in tech from around the world.",
        h1: "Dating chat for people in tech",
        intro:
          "Talking to someone from a similar field can be easier — no need to explain context that sounds like jargon to anyone else.",
        body: [
          "You might match with someone from a country with a completely different tech work culture, which alone makes for an interesting conversation.",
          "Automatic translation means language differences don't get in the way, even if the conversation drifts into technical details.",
        ],
      },
    },
  },
  {
    id: "dating-chat-spontaneous-plans",
    topic: "dating-chat-spontaneous-plans",
    keyword: "spontaneous chat app dating",
    intent: "start-random-chat",
    cta: "startRandomChat",
    relatedTopics: ["meet-someone-new-tonight", "weekend-flirt-chat"],
    content: {
      pl: {
        title: "Spontaniczne poznawanie ludzi | HEYID",
        description:
          "Nie lubisz planować z wyprzedzeniem? HEYID pozwala poznać kogoś nowego dokładnie wtedy, kiedy masz na to ochotę.",
        h1: "Spontaniczne rozmowy, bez planowania",
        intro:
          "Niektórzy planują randki tydzień naprzód, inni wolą działać spontanicznie — HEYID pasuje do tego drugiego podejścia.",
        body: [
          "Wystarczy chwila wolnego czasu i ochota na rozmowę — HEYID od razu dobierze losową osobę, bez wcześniejszego umawiania się.",
          "Ta spontaniczność sprawia, że każda rozmowa jest inna, bo nie ma czasu, żeby wcześniej ją sobie wyobrazić.",
        ],
      },
      en: {
        title: "Spontaneous Way to Meet People | HEYID",
        description:
          "Not a fan of planning ahead? HEYID lets you meet someone new exactly when you feel like it.",
        h1: "Spontaneous conversations, no planning required",
        intro:
          "Some people plan dates a week in advance, others prefer to act spontaneously — HEYID fits that second approach.",
        body: [
          "All it takes is a spare moment and the urge to talk — HEYID matches you with a random person instantly, no arrangements needed.",
          "That spontaneity means every conversation is different, since there's no time to picture it in advance.",
        ],
      },
    },
  },
  {
    id: "dating-chat-solo-travelers",
    topic: "dating-chat-solo-travelers",
    keyword: "dating chat for solo travelers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-travelers", "long-distance-chat"],
    content: {
      pl: {
        title: "Randki dla osób podróżujących solo | HEYID",
        description:
          "Podróżujesz sam i chcesz poznać kogoś po drodze? HEYID łączy Cię z osobami z całego świata, gdziekolwiek akurat jesteś.",
        h1: "Randki dla podróżujących solo",
        intro:
          "Samotna podróż nie musi oznaczać samotności w każdym sensie — HEYID pozwala poznać kogoś, nawet jeśli akurat jesteś w drodze.",
        body: [
          "Możesz porozmawiać z osobą z miejsca, w którym akurat jesteś, albo z innym podróżnikiem, który rozumie ten styl życia równie dobrze jak Ty.",
          "Automatyczne tłumaczenie ułatwia poznawanie ludzi w krajach, których języka nie znasz.",
        ],
      },
      en: {
        title: "Dating Chat for Solo Travelers | HEYID",
        description:
          "Traveling alone and want to meet someone along the way? HEYID connects you with people from around the world, wherever you happen to be.",
        h1: "Dating chat for solo travelers",
        intro:
          "Traveling alone doesn't have to mean being lonely — HEYID lets you meet someone even while you're on the move.",
        body: [
          "You can talk to someone local to where you currently are, or to another traveler who understands the lifestyle just as well as you do.",
          "Automatic translation makes it easier to meet people in countries whose language you don't speak.",
        ],
      },
    },
  },
  {
    id: "dating-chat-rainy-day",
    topic: "dating-chat-rainy-day",
    keyword: "chat app for a rainy day",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["dating-chat-homebodies", "chat-for-loneliness"],
    content: {
      pl: {
        title: "Coś do zrobienia w deszczowy dzień | HEYID",
        description:
          "Zamiast kolejnego serialu na telefonie, spróbuj porozmawiać z kimś nowym. HEYID to dobry sposób na spędzenie deszczowego popołudnia.",
        h1: "Rozmowa na deszczowy dzień",
        intro:
          "Deszczowy dzień w domu to dobra okazja, żeby poświęcić czas na rozmowę, zamiast bezmyślnego przewijania telefonu.",
        body: [
          "Losowa rozmowa nie wymaga wychodzenia z domu ani zmiany planów — pasuje idealnie do dnia, w którym i tak nigdzie się nie wybierasz.",
          "Może się okazać, że akurat trafisz na kogoś, kto ma za oknem słoneczną pogodę, i to też będzie ciekawy temat na start.",
        ],
      },
      en: {
        title: "Something to Do on a Rainy Day | HEYID",
        description:
          "Instead of another show on your phone, try talking to someone new. HEYID is a good way to spend a rainy afternoon.",
        h1: "A conversation for a rainy day",
        intro:
          "A rainy day at home is a good chance to spend time on a conversation instead of mindlessly scrolling your phone.",
        body: [
          "A random conversation doesn't require leaving the house or changing plans — it fits perfectly into a day when you're not going anywhere anyway.",
          "You might match with someone looking at sunny weather outside their window, which makes for an interesting opener too.",
        ],
      },
    },
  },
  {
    id: "dating-chat-first-message-help",
    topic: "dating-chat-first-message-help",
    keyword: "what to say in first message dating",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["flirty-conversation-starters", "dating-chat-icebreaker-questions"],
    content: {
      pl: {
        title: "Co napisać w pierwszej wiadomości | HEYID",
        description:
          "Pusta strona i migający kursor przed pierwszą wiadomością? SPARX w HEYID podpowie, jak zacząć, bez wyuczonych formułek.",
        h1: "Co napisać w pierwszej wiadomości",
        intro:
          "Pierwsza wiadomość nie musi być idealna — musi po prostu skłonić drugą osobę do odpowiedzi.",
        body: [
          "SPARX analizuje kontekst rozmowy i podpowiada wiadomość, która brzmi naturalnie, a nie jak gotowa formułka wysyłana do każdego.",
          "Jeśli pierwsza próba nie zadziała, zawsze możesz zacząć nową rozmowę i spróbować innego podejścia.",
        ],
      },
      en: {
        title: "What to Say in a First Message | HEYID",
        description:
          "Blank page and a blinking cursor before your first message? SPARX in HEYID suggests how to open, without sounding like a template.",
        h1: "What to say in a first message",
        intro:
          "A first message doesn't have to be perfect — it just has to make the other person want to reply.",
        body: [
          "SPARX looks at the context of the conversation and suggests a message that sounds natural, not like a script sent to everyone.",
          "If the first attempt doesn't land, you can always start a new conversation and try a different approach.",
        ],
      },
    },
  },
  {
    id: "dating-chat-emotional-support",
    topic: "dating-chat-listener",
    keyword: "chat app to just talk and be heard",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-for-loneliness", "chat-for-thoughtful-conversation"],
    content: {
      pl: {
        title: "Ktoś, kto Cię wysłucha | HEYID",
        description:
          "Czasem potrzeba po prostu kogoś, kto wysłucha. HEYID pozwala porozmawiać z nową osobą, kiedy masz na to ochotę.",
        h1: "Rozmowa z kimś, kto wysłucha",
        intro:
          "Nie każda rozmowa musi prowadzić do randki czy znajomości — czasem chodzi po prostu o to, żeby ktoś wysłuchał.",
        body: [
          "Rozmowa z osobą, która nie zna Twojej historii ani znajomych, czasem daje więcej przestrzeni niż rozmowa z kimś bliskim.",
          "Jeśli potrzebujesz wsparcia w trudniejszym momencie, taka rozmowa to dobry początek, ale nie zastąpi pomocy bliskiej osoby lub specjalisty, kiedy jest potrzebna.",
        ],
      },
      en: {
        title: "Someone Who Will Listen | HEYID",
        description:
          "Sometimes you just need someone to listen. HEYID lets you talk to someone new whenever you feel like it.",
        h1: "A conversation with someone who listens",
        intro:
          "Not every conversation has to lead to a date or a relationship — sometimes it's simply about having someone listen.",
        body: [
          "Talking to someone who doesn't know your history or your friends can sometimes give you more room than talking to someone close to you.",
          "If you're looking for support during a hard time, a conversation like this is a good start, but it isn't a substitute for a trusted person or a professional when that's what's needed.",
        ],
      },
    },
  },
  {
    id: "dating-chat-morning-person",
    topic: "dating-chat-morning-person",
    keyword: "dating chat for early risers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["dating-chat-coffee-lovers", "dating-chat-night-owls"],
    content: {
      pl: {
        title: "Randki dla rannych ptaszków | HEYID",
        description:
          "Wolisz poranki od nocnych wyjść? HEYID pozwala poznać kogoś o dowolnej porze, także zaraz po przebudzeniu z kawą w ręku.",
        h1: "Randki dla osób wstających wcześnie",
        intro:
          "Nie każda ciekawa rozmowa musi zdarzyć się wieczorem — poranna rozmowa z kubkiem kawy ma swój własny klimat.",
        body: [
          "HEYID działa o każdej porze, więc możesz zacząć rozmowę zaraz po przebudzeniu, zanim jeszcze zacznie się reszta dnia.",
          "Możesz trafić na kogoś, kto akurat kończy dzień, podczas gdy Ty dopiero go zaczynasz — to samo w sobie ciekawy temat na start.",
        ],
      },
      en: {
        title: "Dating Chat for Early Risers | HEYID",
        description:
          "Prefer mornings to late nights out? HEYID lets you meet someone any time of day, including right after waking up, coffee in hand.",
        h1: "Dating chat for early risers",
        intro:
          "Not every interesting conversation has to happen at night — a morning chat over coffee has its own kind of charm.",
        body: [
          "HEYID works any time of day, so you can start a conversation right after waking up, before the rest of your day even begins.",
          "You might match with someone just wrapping up their day while yours is only starting — that alone makes for an interesting opener.",
        ],
      },
    },
  },
  {
    id: "dating-chat-shared-values",
    topic: "dating-chat-shared-values",
    keyword: "find someone who shares your values chat",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-genuine-connection", "chat-for-thoughtful-conversation"],
    content: {
      pl: {
        title: "Znajdź kogoś o podobnych wartościach | HEYID",
        description:
          "Wspólne wartości trudno ocenić po zdjęciu profilowym — łatwiej po prostu porozmawiać. HEYID zaczyna właśnie od tego.",
        h1: "Znajdź kogoś, kto patrzy na życie podobnie",
        intro:
          "To, co dla kogoś ważne w życiu, zwykle wychodzi w rozmowie, a nie w liście zainteresowań w profilu.",
        body: [
          "Losowa rozmowa daje szansę zobaczyć, jak ktoś myśli, zanim jeszcze zdążysz go ocenić po innych kryteriach.",
          "Automatyczne tłumaczenie sprawia, że ta rozmowa może się odbyć z kimś z zupełnie innej kultury, o innym spojrzeniu na świat.",
        ],
      },
      en: {
        title: "Find Someone Who Shares Your Values | HEYID",
        description:
          "Shared values are hard to judge from a profile photo — easier to just talk. HEYID starts with exactly that.",
        h1: "Find someone who sees life the way you do",
        intro:
          "What matters to someone in life usually comes out in conversation, not in a list of interests on a profile.",
        body: [
          "A random conversation gives you a chance to see how someone thinks, before you've judged them by any other criteria.",
          "Automatic translation means that conversation can happen with someone from a completely different culture and worldview.",
        ],
      },
    },
  },
  {
    id: "dating-chat-post-work-unwind",
    topic: "dating-chat-post-work-unwind",
    keyword: "chat app to unwind after work",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["dating-chat-busy-professionals", "chat-for-loneliness"],
    content: {
      pl: {
        title: "Rozmowa na odstresowanie po pracy | HEYID",
        description:
          "Po długim dniu w pracy czasem lepiej pomaga rozmowa z kimś nowym niż kolejny odcinek serialu. HEYID daje na to miejsce.",
        h1: "Rozmowa po pracy, na odprężenie",
        intro:
          "Rozmowa z kimś, kto nie zna Twojego dnia pracy ani jego szczegółów, potrafi być zaskakująco odprężająca.",
        body: [
          "Nie musisz opowiadać o pracy wcale, jeśli akurat nie masz ochoty — rozmowa może pójść w zupełnie inną stronę.",
          "Losowość rozmówcy sprawia, że każdy wieczór po pracy wygląda inaczej, zamiast wracać do tego samego schematu.",
        ],
      },
      en: {
        title: "A Chat to Unwind After Work | HEYID",
        description:
          "After a long day, a conversation with someone new can help more than another episode of a show. HEYID gives you that space.",
        h1: "A conversation after work, to unwind",
        intro:
          "Talking to someone who doesn't know a thing about your workday can be surprisingly relaxing.",
        body: [
          "You don't have to talk about work at all if you're not in the mood — the conversation can head in a completely different direction.",
          "The randomness of who you talk to means every after-work evening looks different, instead of falling into the same routine.",
        ],
      },
    },
  },
  {
    id: "dating-chat-open-minded",
    topic: "dating-chat-open-minded",
    keyword: "dating chat for open minded people",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-adventurous-singles", "chat-for-cultural-exchange-dating"],
    content: {
      pl: {
        title: "Randki dla osób otwartych na nowe doświadczenia | HEYID",
        description:
          "Jeśli lubisz poznawać różne perspektywy, HEYID otwiera rozmowy na cały świat — z automatycznym tłumaczeniem wiadomości.",
        h1: "Dla osób ciekawych innych perspektyw",
        intro:
          "Otwartość na nowe doświadczenia to coś, co trudno pokazać w profilu — łatwiej udowodnić to w rozmowie z kimś zupełnie innym niż Ty.",
        body: [
          "Losowa rozmowa nie daje Ci wyboru — trafiasz na osobę, której nie dobrałbyś sam, i to jest jej największa wartość.",
          "Automatyczne tłumaczenie sprawia, że ta ciekawość świata nie kończy się na osobach mówiących Twoim językiem.",
        ],
      },
      en: {
        title: "Dating Chat for Open-Minded People | HEYID",
        description:
          "If you enjoy hearing different perspectives, HEYID opens conversations up to the whole world, with automatic message translation.",
        h1: "For people curious about other perspectives",
        intro:
          "Openness to new experiences is hard to show in a profile — easier to prove it in a conversation with someone completely different from you.",
        body: [
          "A random conversation doesn't give you a choice — you match with someone you wouldn't have picked yourself, and that's exactly its value.",
          "Automatic translation means that curiosity about the world isn't limited to people who speak your language.",
        ],
      },
    },
  },

// ============================================================
  // BATCH 6 — final 30 dating/flirt-angle topics (paste before closing "];")
  // ============================================================
  {
    id: "dating-chat-good-listener",
    topic: "dating-chat-good-listener",
    keyword: "meet someone who is a good listener",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["dating-chat-listener", "chat-for-thoughtful-conversation"],
    content: {
      pl: {
        title: "Znajdź kogoś, kto naprawdę słucha | HEYID",
        description:
          "Nie każdy dobrze słucha, ale w rozmowie szybko to widać. HEYID pozwala znaleźć osobę, z którą rozmowa faktycznie płynie w obie strony.",
        h1: "Znajdź kogoś, kto naprawdę słucha",
        intro:
          "To, czy ktoś naprawdę słucha, a nie tylko czeka na swoją kolej, widać dopiero w rozmowie — nie da się tego wyczytać z profilu.",
        body: [
          "Losowa rozmowa pokazuje od razu, czy druga osoba faktycznie angażuje się w to, co piszesz, czy tylko odpowiada zdawkowo.",
          "Jeśli akurat trafisz na kogoś, z kim rozmowa nie płynie w obie strony, po prostu zaczynasz kolejną.",
        ],
      },
      en: {
        title: "Find Someone Who Actually Listens | HEYID",
        description:
          "Not everyone is a good listener, but conversation reveals it fast. HEYID helps you find someone the conversation genuinely flows both ways with.",
        h1: "Find someone who actually listens",
        intro:
          "Whether someone truly listens, rather than just waiting for their turn, only shows up in conversation — you can't read it off a profile.",
        body: [
          "A random conversation quickly reveals whether the other person is genuinely engaging with what you write, or just replying on autopilot.",
          "If you match with someone the conversation doesn't flow both ways with, you just start another one.",
        ],
      },
    },
  },
  {
    id: "dating-chat-second-language-practice-romance",
    topic: "dating-chat-bilingual",
    keyword: "dating chat for bilingual people",
    intent: "language-exchange",
    cta: "noLanguageBarrier",
    relatedTopics: ["dating-chat-language-learners-romance", "international-dating-chat"],
    content: {
      pl: {
        title: "Randki dla osób dwujęzycznych | HEYID",
        description:
          "Mówisz płynnie kilkoma językami i chcesz to wykorzystać w rozmowie? HEYID pozwala poznawać ludzi z całego świata bez ograniczeń językowych.",
        h1: "Randki dla osób znających więcej niż jeden język",
        intro:
          "Znajomość kilku języków otwiera znacznie szerszy krąg osób, z którymi możesz naturalnie porozmawiać — HEYID dodatkowo poszerza go jeszcze bardziej.",
        body: [
          "Możesz zdecydować, w jakim języku chcesz akurat rozmawiać, a tłumaczenie zajmie się resztą, gdy druga osoba mówi czymś innym.",
          "To dobra okazja, żeby przełączać się między językami w rozmowie, zależnie od tego, na co masz ochotę danego dnia.",
        ],
      },
      en: {
        title: "Dating Chat for Bilingual People | HEYID",
        description:
          "Fluent in more than one language and want to put that to use? HEYID lets you meet people from around the world without language limits.",
        h1: "Dating chat for people who speak more than one language",
        intro:
          "Knowing multiple languages already opens up a wider circle of people you can naturally talk to — HEYID widens it even further.",
        body: [
          "You can decide which language you feel like using, and translation handles the rest when the other person speaks something different.",
          "It's a good chance to switch between languages in conversation, depending on what you're in the mood for that day.",
        ],
      },
    },
  },
  {
    id: "dating-chat-museum-culture",
    topic: "dating-chat-culture-lovers",
    keyword: "dating chat for museum and culture lovers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-book-lovers", "chat-for-movie-fans"],
    content: {
      pl: {
        title: "Randki dla miłośników sztuki i kultury | HEYID",
        description:
          "Chcesz porozmawiać o wystawie, którą właśnie widziałeś, z kimś, kto to doceni? HEYID łączy Cię z fanami kultury z całego świata.",
        h1: "Randki dla osób lubiących sztukę i kulturę",
        intro:
          "Nie każdemu w bliskim otoczeniu chce się rozmawiać o wystawie w muzeum czy najnowszej premierze teatralnej — HEYID poszerza ten krąg.",
        body: [
          "Możesz poznać kogoś z kraju o zupełnie innej tradycji artystycznej i zobaczyć sztukę z jego perspektywy.",
          "Automatyczne tłumaczenie ułatwia rozmowę nawet o niuansach, których nie da się prosto przetłumaczyć dosłownie.",
        ],
      },
      en: {
        title: "Dating Chat for Museum and Culture Lovers | HEYID",
        description:
          "Want to talk about an exhibit you just saw with someone who'll appreciate it? HEYID connects you with culture fans worldwide.",
        h1: "Dating chat for people who love art and culture",
        intro:
          "Not everyone around you wants to talk about a museum exhibit or the latest theatre premiere — HEYID widens that circle.",
        body: [
          "You might meet someone from a country with a completely different artistic tradition and see art from their perspective.",
          "Automatic translation makes it easier to talk even about nuances that don't translate literally.",
        ],
      },
    },
  },
  {
    id: "dating-chat-plant-lovers",
    topic: "dating-chat-plant-lovers",
    keyword: "dating chat for plant lovers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["dating-chat-pet-lovers", "dating-chat-homebodies"],
    content: {
      pl: {
        title: "Randki dla miłośników roślin | HEYID",
        description:
          "Twój parapet wygląda jak mała dżungla? HEYID pomoże Ci poznać kogoś, kto rozumie ten entuzjazm do roślin doniczkowych.",
        h1: "Randki dla osób kochających rośliny",
        intro:
          "Rozmowa o tym, jak uratować kolejną monsterę przed przelaniem, to zaskakująco dobry temat na przełamanie pierwszych lodów.",
        body: [
          "Możesz wymienić się poradami pielęgnacyjnymi z kimś, kto ma zupełnie inny klimat za oknem, a więc i inne wyzwania.",
          "Automatyczne tłumaczenie sprawia, że nawet specyficzne nazwy roślin nie są problemem w rozmowie.",
        ],
      },
      en: {
        title: "Dating Chat for Plant Lovers | HEYID",
        description:
          "Is your windowsill basically a small jungle? HEYID can help you meet someone who gets the houseplant obsession.",
        h1: "Dating chat for plant lovers",
        intro:
          "Talking about how to save your monstera from overwatering is a surprisingly good icebreaker.",
        body: [
          "You can swap care tips with someone who has a completely different climate outside their window, and different challenges as a result.",
          "Automatic translation means even specific plant names aren't a problem in conversation.",
        ],
      },
    },
  },
  {
    id: "dating-chat-anime-fans",
    topic: "dating-chat-anime-fans",
    keyword: "dating chat for anime fans",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-movie-fans", "chat-for-gamers"],
    content: {
      pl: {
        title: "Randki dla fanów anime | HEYID",
        description:
          "Chcesz porozmawiać o anime z kimś, kto naprawdę je zna, niekoniecznie tylko o najpopularniejszych tytułach? HEYID łączy fanów z całego świata.",
        h1: "Randki dla fanów anime",
        intro:
          "Rozmowa z kimś z Japonii albo z innego fana anime spoza mainstreamu potrafi otworzyć zupełnie nową listę tytułów do obejrzenia.",
        body: [
          "Możesz dostać polecenia, które nigdy nie trafiły do szerokiej dystrybucji poza krajem pochodzenia.",
          "Automatyczne tłumaczenie ułatwia rozmowę o szczegółach fabuły, nawet jeśli druga osoba ogląda w zupełnie innym języku.",
        ],
      },
      en: {
        title: "Dating Chat for Anime Fans | HEYID",
        description:
          "Want to talk anime with someone who actually knows it beyond the mainstream titles? HEYID connects fans from around the world.",
        h1: "Dating chat for anime fans",
        intro:
          "Talking to someone from Japan or another anime fan outside the mainstream can open up a whole new watchlist.",
        body: [
          "You might get recommendations that never got wide release outside their country of origin.",
          "Automatic translation makes it easier to discuss plot details, even if the other person watches in a completely different language.",
        ],
      },
    },
  },
  {
    id: "dating-chat-sports-fans",
    topic: "dating-chat-sports-fans",
    keyword: "dating chat for sports fans",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["dating-chat-tech-people", "chat-for-fitness-motivation"],
    content: {
      pl: {
        title: "Randki dla fanów sportu | HEYID",
        description:
          "Chcesz podyskutować o meczu z kimś, kto kibicuje zupełnie innej drużynie i z innego kraju? HEYID łączy fanów sportu z całego świata.",
        h1: "Randki dla fanów sportu",
        intro:
          "Kibicowanie w innym kraju często wygląda zupełnie inaczej — inne rytuały, inna atmosfera, inne podejście do rywalizacji.",
        body: [
          "Rozmowa z kimś, kto kibicuje innej drużynie czy dyscyplinie, to szansa, żeby zobaczyć sport z zupełnie nowej perspektywy.",
          "Automatyczne tłumaczenie sprawia, że nawet żarty i nazwy specyficzne dla danego sportu nie giną w tłumaczeniu.",
        ],
      },
      en: {
        title: "Dating Chat for Sports Fans | HEYID",
        description:
          "Want to talk about a match with someone who roots for a completely different team from another country? HEYID connects sports fans worldwide.",
        h1: "Dating chat for sports fans",
        intro:
          "Being a fan looks completely different in another country — different rituals, different atmosphere, different approach to rivalry.",
        body: [
          "Talking to someone who supports a different team or sport is a chance to see it from a completely new angle.",
          "Automatic translation means even sport-specific jokes and terms don't get lost in translation.",
        ],
      },
    },
  },
  {
    id: "dating-chat-writers-poets",
    topic: "dating-chat-writers",
    keyword: "dating chat for writers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-book-lovers", "dating-chat-creative-people"],
    content: {
      pl: {
        title: "Randki dla piszących | HEYID",
        description:
          "Chcesz porozmawiać z kimś, kto rozumie, czym jest blokada twórcza? HEYID łączy Cię z osobami piszącymi z całego świata.",
        h1: "Randki dla osób, które piszą",
        intro:
          "Rozmowa z kimś, kto też pisze — teksty, wiersze, cokolwiek — rzadko sprowadza się do zwykłego small talku.",
        body: [
          "Możecie porównać, jak wygląda proces twórczy w innym języku, albo po prostu podzielić się frustracją związaną z pustą stroną.",
          "Automatyczne tłumaczenie pozwala rozmawiać o niuansach słowa, nawet jeśli piszecie w zupełnie różnych językach.",
        ],
      },
      en: {
        title: "Dating Chat for Writers | HEYID",
        description:
          "Want to talk to someone who actually understands writer's block? HEYID connects you with writers from around the world.",
        h1: "Dating chat for people who write",
        intro:
          "A conversation with someone who also writes — texts, poems, anything — rarely stays at the level of ordinary small talk.",
        body: [
          "You can compare what the creative process looks like in a different language, or just share the frustration of a blank page.",
          "Automatic translation lets you talk about the nuances of language, even when you write in completely different ones.",
        ],
      },
    },
  },
  {
    id: "dating-chat-space-science-fans",
    topic: "dating-chat-science-fans",
    keyword: "dating chat for science and space fans",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["dating-chat-tech-people", "chat-for-book-lovers"],
    content: {
      pl: {
        title: "Randki dla fanów nauki i kosmosu | HEYID",
        description:
          "Chcesz podyskutować o najnowszej misji kosmicznej z kimś, kto naprawdę to śledzi? HEYID łączy pasjonatów nauki z całego świata.",
        h1: "Randki dla fanów nauki i kosmosu",
        intro:
          "Rozmowa o kosmosie czy najnowszych odkryciach naukowych szybko pokazuje, czy ktoś dzieli Twoją ciekawość świata.",
        body: [
          "Możesz porozmawiać o tym, jak dane wydarzenie naukowe relacjonowane jest w innym kraju — czasem różnice w narracji są zaskakujące.",
          "Automatyczne tłumaczenie ułatwia rozmowę nawet o specjalistycznym słownictwie naukowym.",
        ],
      },
      en: {
        title: "Dating Chat for Science and Space Fans | HEYID",
        description:
          "Want to talk about the latest space mission with someone who actually follows it? HEYID connects science enthusiasts worldwide.",
        h1: "Dating chat for science and space fans",
        intro:
          "Talking about space or the latest scientific discovery quickly shows whether someone shares your curiosity about the world.",
        body: [
          "You can compare how a given scientific event is covered in another country — sometimes the differences in the narrative are surprising.",
          "Automatic translation makes it easier to talk even about specialized scientific vocabulary.",
        ],
      },
    },
  },
  {
    id: "dating-chat-fashion-lovers",
    topic: "dating-chat-fashion-lovers",
    keyword: "dating chat for fashion lovers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["dating-chat-creative-people", "chat-for-music-lovers"],
    content: {
      pl: {
        title: "Randki dla fanów mody | HEYID",
        description:
          "Chcesz porozmawiać o modzie z kimś, kto naprawdę ją śledzi, nie tylko na poziomie trendów z social mediów? HEYID łączy fanów mody z całego świata.",
        h1: "Randki dla osób interesujących się modą",
        intro:
          "Moda wygląda zupełnie inaczej w różnych częściach świata — rozmowa z kimś stamtąd to szybki sposób, żeby to zobaczyć z bliska.",
        body: [
          "Możesz dowiedzieć się, jakie marki i style są popularne w kraju, o którym wcześniej nie miałeś pojęcia.",
          "Automatyczne tłumaczenie sprawia, że rozmowa o konkretnych trendach nie gubi się w przekładzie.",
        ],
      },
      en: {
        title: "Dating Chat for Fashion Lovers | HEYID",
        description:
          "Want to talk fashion with someone who actually follows it beyond social media trends? HEYID connects fashion fans from around the world.",
        h1: "Dating chat for people into fashion",
        intro:
          "Fashion looks completely different in different parts of the world — talking to someone from there is a quick way to see it up close.",
        body: [
          "You might learn about brands and styles popular in a country you had no idea about before.",
          "Automatic translation means a conversation about specific trends doesn't get lost in translation.",
        ],
      },
    },
  },
  {
    id: "dating-chat-board-games",
    topic: "dating-chat-board-games",
    keyword: "dating chat for board game lovers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-gamers", "dating-chat-anime-fans"],
    content: {
      pl: {
        title: "Randki dla fanów gier planszowych | HEYID",
        description:
          "Chcesz porozmawiać o ulubionej planszówce z kimś, kto zna więcej niż tylko klasyki? HEYID łączy fanów gier planszowych z całego świata.",
        h1: "Randki dla fanów gier planszowych",
        intro:
          "Scena planszówkowa w innym kraju często wygląda inaczej — inne popularne tytuły, inny styl grania.",
        body: [
          "Możesz dostać polecenia gier, które nigdy nie trafiły do sklepów w Twoim kraju.",
          "Automatyczne tłumaczenie ułatwia rozmowę o zasadach i strategiach, nawet jeśli druga osoba gra w zupełnie innym języku.",
        ],
      },
      en: {
        title: "Dating Chat for Board Game Lovers | HEYID",
        description:
          "Want to talk about your favorite board game with someone who knows more than just the classics? HEYID connects board game fans worldwide.",
        h1: "Dating chat for board game fans",
        intro:
          "The board game scene looks different in another country — different popular titles, a different playing style.",
        body: [
          "You might get recommendations for games that never made it to stores in your country.",
          "Automatic translation makes it easier to talk about rules and strategies, even if the other person plays in a completely different language.",
        ],
      },
    },
  },
  {
    id: "dating-chat-astrology",
    topic: "dating-chat-astrology",
    keyword: "dating chat astrology icebreaker",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["dating-chat-icebreaker-questions", "casual-chat-flirt"],
    content: {
      pl: {
        title: "Randki z pytaniem o znak zodiaku na start | HEYID",
        description:
          "Znak zodiaku to prosty, lekki temat na pierwszą rozmowę. HEYID pozwala zacząć od czegoś niezobowiązującego i zobaczyć, dokąd to zaprowadzi.",
        h1: "Lekki temat na start: znak zodiaku",
        intro:
          "Nie każda pierwsza wiadomość musi być głęboka — czasem lekkie pytanie o znak zodiaku wystarczy, żeby przełamać ciszę.",
        body: [
          "To temat, który łatwo rozwinąć w żartobliwą rozmowę, niezależnie od tego, czy ktoś traktuje astrologię poważnie, czy z przymrużeniem oka.",
          "Jeśli rozmowa się rozkręci, temat naturalnie zejdzie na coś głębszego — znak zodiaku to tylko punkt wyjścia.",
        ],
      },
      en: {
        title: "Dating Chat with a Zodiac Sign Icebreaker | HEYID",
        description:
          "A zodiac sign is a simple, light topic for a first conversation. HEYID lets you start with something casual and see where it goes.",
        h1: "A light opener: your zodiac sign",
        intro:
          "Not every first message has to be deep — sometimes a light question about a zodiac sign is enough to break the silence.",
        body: [
          "It's an easy topic to turn into a playful conversation, whether someone takes astrology seriously or with a grain of salt.",
          "If the conversation picks up, it'll naturally move on to something deeper — the zodiac sign is just a starting point.",
        ],
      },
    },
  },
  {
    id: "dating-chat-diy-crafts",
    topic: "dating-chat-diy-crafts",
    keyword: "dating chat for diy and crafts lovers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["dating-chat-creative-people", "dating-chat-plant-lovers"],
    content: {
      pl: {
        title: "Randki dla fanów majsterkowania i rękodzieła | HEYID",
        description:
          "Chcesz pochwalić się ostatnim projektem DIY komuś, kto to doceni? HEYID łączy Cię z fanami rękodzieła z całego świata.",
        h1: "Randki dla osób lubiących majsterkować",
        intro:
          "Rozmowa o ostatnim projekcie — czy to remont, czy robótki ręczne — potrafi być zaskakująco wciągająca, kiedy trafisz na kogoś z podobną pasją.",
        body: [
          "Możesz wymienić się pomysłami albo dowiedzieć, jak wygląda dostęp do materiałów rzemieślniczych w zupełnie innym kraju.",
          "Automatyczne tłumaczenie pomaga, gdy nazwy konkretnych technik czy narzędzi nie mają prostego odpowiednika w innym języku.",
        ],
      },
      en: {
        title: "Dating Chat for DIY and Craft Lovers | HEYID",
        description:
          "Want to show off your latest DIY project to someone who'll actually appreciate it? HEYID connects you with craft lovers worldwide.",
        h1: "Dating chat for people who love making things",
        intro:
          "Talking about your latest project — whether it's a renovation or a craft — can be surprisingly engaging when you find someone with a similar passion.",
        body: [
          "You can swap ideas or find out what access to craft materials looks like in a completely different country.",
          "Automatic translation helps when the names of specific techniques or tools don't have a simple equivalent in another language.",
        ],
      },
    },
  },
  {
    id: "dating-chat-history-buffs",
    topic: "dating-chat-history-buffs",
    keyword: "dating chat for history lovers",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["dating-chat-museum-culture", "chat-for-book-lovers"],
    content: {
      pl: {
        title: "Randki dla fanów historii | HEYID",
        description:
          "Chcesz porozmawiać o historii z kimś, kto naprawdę się w niej rozczytuje? HEYID łączy pasjonatów historii z całego świata.",
        h1: "Randki dla miłośników historii",
        intro:
          "Historia wygląda inaczej w zależności od tego, po której stronie granicy się jej uczyłeś — rozmowa z kimś z innego kraju to szansa, żeby to zobaczyć.",
        body: [
          "Możesz dowiedzieć się, jak to samo wydarzenie historyczne jest przedstawiane w podręcznikach zupełnie innego kraju.",
          "Automatyczne tłumaczenie ułatwia rozmowę o szczegółach, których nie znajdziesz w skróconej wersji na Wikipedii.",
        ],
      },
      en: {
        title: "Dating Chat for History Lovers | HEYID",
        description:
          "Want to talk history with someone who actually reads about it? HEYID connects history enthusiasts from around the world.",
        h1: "Dating chat for history buffs",
        intro:
          "History looks different depending on which side of a border you learned it on — talking to someone from elsewhere is a chance to see that.",
        body: [
          "You might learn how the same historical event is taught in the textbooks of a completely different country.",
          "Automatic translation makes it easier to talk about details you won't find in a shortened Wikipedia summary.",
        ],
      },
    },
  },
  {
    id: "dating-chat-podcast-fans",
    topic: "dating-chat-podcast-fans",
    keyword: "dating chat for podcast fans",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-music-lovers", "chat-for-book-lovers"],
    content: {
      pl: {
        title: "Randki dla fanów podcastów | HEYID",
        description:
          "Chcesz polecić komuś podcast, którego akurat słuchasz? HEYID łączy Cię z fanami podcastów z całego świata.",
        h1: "Randki dla fanów podcastów",
        intro:
          "Lista ulubionych podcastów potrafi powiedzieć o kimś więcej niż standardowe pytania na start rozmowy.",
        body: [
          "Możesz dostać polecenia podcastów w zupełnie innym języku niż Twój, o których nigdy byś się nie dowiedział z algorytmu.",
          "Automatyczne tłumaczenie ułatwia rozmowę o konkretnych odcinkach, nawet jeśli oryginalnie są w innym języku.",
        ],
      },
      en: {
        title: "Dating Chat for Podcast Fans | HEYID",
        description:
          "Want to recommend a podcast you're currently into? HEYID connects you with podcast fans from around the world.",
        h1: "Dating chat for podcast fans",
        intro:
          "A list of favorite podcasts can say more about someone than the usual small-talk questions.",
        body: [
          "You might get recommendations for podcasts in a completely different language, ones you'd never discover through an algorithm.",
          "Automatic translation makes it easier to talk about specific episodes, even if they're originally in another language.",
        ],
      },
    },
  },
  {
    id: "dating-chat-vegan-vegetarian",
    topic: "dating-chat-vegan-vegetarian",
    keyword: "dating chat for vegan and vegetarian people",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["dating-chat-foodies", "chat-for-cooking-lovers"],
    content: {
      pl: {
        title: "Randki dla wegan i wegetarian | HEYID",
        description:
          "Chcesz porozmawiać z kimś, kto rozumie roślinny styl życia? HEYID łączy Cię z osobami o podobnym podejściu do jedzenia z całego świata.",
        h1: "Randki dla osób na diecie roślinnej",
        intro:
          "Wspólne podejście do jedzenia potrafi być zaskakująco solidnym fundamentem rozmowy, szczególnie z kimś, kto podchodzi do tego równie świadomie.",
        body: [
          "Możesz wymienić się przepisami albo dowiedzieć, jak wygląda dostępność roślinnych produktów w zupełnie innym kraju.",
          "Automatyczne tłumaczenie pomaga, gdy nazwy konkretnych składników nie mają prostego odpowiednika w innym języku.",
        ],
      },
      en: {
        title: "Dating Chat for Vegan and Vegetarian People | HEYID",
        description:
          "Want to talk to someone who gets a plant-based lifestyle? HEYID connects you with people with a similar approach to food worldwide.",
        h1: "Dating chat for people on a plant-based diet",
        intro:
          "A shared approach to food can be a surprisingly solid foundation for a conversation, especially with someone equally thoughtful about it.",
        body: [
          "You can swap recipes or find out what access to plant-based products looks like in a completely different country.",
          "Automatic translation helps when specific ingredient names don't have a simple equivalent in another language.",
        ],
      },
    },
  },
  {
    id: "dating-chat-single-parents",
    topic: "dating-chat-single-parents",
    keyword: "dating chat for single parents",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-mature-singles", "chat-for-quick-connection"],
    content: {
      pl: {
        title: "Randki dla samotnych rodziców | HEYID",
        description:
          "Wolny czas bywa ograniczony, więc HEYID pozwala poznać kogoś w krótkiej rozmowie, bez konieczności planowania całego wieczoru.",
        h1: "Randki dla rodziców wychowujących dzieci samodzielnie",
        intro:
          "Kiedy większość czasu pochłania opieka nad dzieckiem, na klasyczne randkowanie zwyczajnie brakuje przestrzeni. HEYID nie wymaga jej wiele.",
        body: [
          "Krótka rozmowa w wolnej chwili wystarczy, żeby poznać kogoś nowego, bez presji długiego wieczornego spotkania.",
          "Rozmowa na HEYID nie wymaga deklarowania sytuacji rodzinnej z góry — możesz podzielić się tym wtedy, kiedy sam zdecydujesz.",
        ],
      },
      en: {
        title: "Dating Chat for Single Parents | HEYID",
        description:
          "Free time is often limited, so HEYID lets you meet someone in a short conversation, no need to plan an entire evening.",
        h1: "Dating chat for parents raising kids solo",
        intro:
          "When most of your time goes to childcare, there's simply no room left for traditional dating. HEYID doesn't ask for much of it.",
        body: [
          "A short chat in a spare moment is enough to meet someone new, without the pressure of a long evening meetup.",
          "A conversation on HEYID doesn't require declaring your family situation upfront — you can share it whenever you decide to.",
        ],
      },
    },
  },
  {
    id: "dating-chat-second-chance-love",
    topic: "dating-chat-starting-over",
    keyword: "dating chat starting over",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-fresh-start-dating", "chat-for-genuine-connection"],
    content: {
      pl: {
        title: "Randkowanie od nowa | HEYID",
        description:
          "Wracasz do randkowania po dłuższej przerwie? HEYID pozwala zacząć od prostej rozmowy, bez presji nadrabiania zaległości.",
        h1: "Randkowanie od nowa, bez pośpiechu",
        intro:
          "Po dłuższej przerwie randkowanie potrafi wydawać się zupełnie inne niż kiedyś. HEYID upraszcza pierwszy krok do samej rozmowy.",
        body: [
          "Nie musisz nadrabiać niczego na starcie — po prostu zaczynasz rozmowę i uczysz się na nowo, co Ci w niej odpowiada.",
          "Losowość rozmówcy sprawia, że każda kolejna rozmowa to świeży start, bez porównywania do poprzednich doświadczeń.",
        ],
      },
      en: {
        title: "Dating, Starting Over | HEYID",
        description:
          "Getting back into dating after a long break? HEYID lets you start with a simple conversation, no pressure to catch up on lost time.",
        h1: "Dating again, at your own pace",
        intro:
          "After a long break, dating can feel completely different from how you remember it. HEYID simplifies the first step down to just a conversation.",
        body: [
          "You don't have to catch up on anything right away — you just start talking and relearn what works for you along the way.",
          "The randomness of who you match with means every conversation is a fresh start, without comparing it to past experiences.",
        ],
      },
    },
  },
  {
    id: "dating-chat-thoughtful-questions",
    topic: "dating-chat-deep-questions",
    keyword: "deep questions to ask someone new",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["dating-chat-icebreaker-questions", "chat-for-thoughtful-conversation"],
    content: {
      pl: {
        title: "Głębsze pytania na dobrą rozmowę | HEYID",
        description:
          "Zmęczony pytaniami typu \"co robisz w wolnym czasie\"? SPARX w HEYID podpowie pytanie, które faktycznie prowadzi do ciekawszej rozmowy.",
        h1: "Pytania, które prowadzą do czegoś więcej",
        intro:
          "Dobre pytanie potrafi zmienić zwykłą wymianę zdań w rozmowę, którą zapamiętasz na dłużej.",
        body: [
          "Zamiast standardowych pytań na start, SPARX może zaproponować coś, co skłania do dłuższej, bardziej osobistej odpowiedzi.",
          "Nie każda rozmowa musi od razu iść w tym kierunku — ale jeśli chemia się pojawi, warto mieć pod ręką lepsze pytanie niż tylko \"skąd jesteś\".",
        ],
      },
      en: {
        title: "Deeper Questions for a Good Conversation | HEYID",
        description:
          "Tired of \"what do you do for fun\"? SPARX in HEYID can suggest a question that actually leads to a more interesting conversation.",
        h1: "Questions that lead to something more",
        intro:
          "A good question can turn an ordinary exchange into a conversation you'll actually remember.",
        body: [
          "Instead of the usual opener, SPARX can suggest something that invites a longer, more personal answer.",
          "Not every conversation needs to go there right away — but if there's chemistry, it helps to have something better than \"where are you from\" on hand.",
        ],
      },
    },
  },
  {
    id: "dating-chat-empathetic-people",
    topic: "dating-chat-kind-people",
    keyword: "meet kind and empathetic people chat",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["dating-chat-good-listener", "chat-for-genuine-connection"],
    content: {
      pl: {
        title: "Poznaj empatycznych rozmówców | HEYID",
        description:
          "Empatia trudno przekłada się na profil, łatwiej na rozmowę. HEYID pozwala od razu sprawdzić, jak ktoś reaguje na to, co piszesz.",
        h1: "Poznaj kogoś, kto naprawdę zwraca uwagę na to, co mówisz",
        intro:
          "Sposób, w jaki ktoś reaguje na Twoje słowa — z uwagą czy pobieżnie — mówi więcej o jego charakterze niż jakikolwiek opis w profilu.",
        body: [
          "Rozmowa w czasie rzeczywistym szybko pokazuje, czy druga osoba faktycznie się angażuje, czy tylko odpowiada zdawkowo.",
          "Automatyczne tłumaczenie sprawia, że ta obserwacja jest możliwa niezależnie od tego, jakim językiem mówi druga osoba.",
        ],
      },
      en: {
        title: "Meet Kind and Empathetic People | HEYID",
        description:
          "Empathy is hard to show in a profile, easier to spot in conversation. HEYID lets you see right away how someone reacts to what you write.",
        h1: "Meet someone who actually pays attention to what you say",
        intro:
          "The way someone responds to your words — attentively or dismissively — says more about their character than any profile description.",
        body: [
          "A real-time conversation quickly shows whether the other person is genuinely engaging or just replying on autopilot.",
          "Automatic translation makes that observation possible regardless of what language the other person speaks.",
        ],
      },
    },
  },
  {
    id: "dating-chat-language-swap-flirty",
    topic: "dating-chat-teach-your-language",
    keyword: "meet someone and teach them your language",
    intent: "language-exchange",
    cta: "noLanguageBarrier",
    relatedTopics: ["dating-chat-language-learners-romance", "language-exchange"],
    content: {
      pl: {
        title: "Poznaj kogoś i naucz go swojego języka | HEYID",
        description:
          "Chcesz podzielić się swoim językiem z kimś ciekawym świata? HEYID łączy naukę języka z poznawaniem nowych ludzi.",
        h1: "Naucz kogoś swojego języka, przy okazji poznając go bliżej",
        intro:
          "Bycie tym, kto uczy, a nie tylko uczy się, daje zupełnie inną dynamikę rozmowy — i często sprawia, że jest ona bardziej wyrównana.",
        body: [
          "Możesz tłumaczyć drugiej osobie zwroty, których nie znajdzie w żadnym kursie, a przy okazji dowiedzieć się czegoś o jej kraju.",
          "Automatyczne tłumaczenie działa jako siatka bezpieczeństwa, gdyby druga osoba czegoś nie zrozumiała za pierwszym razem.",
        ],
      },
      en: {
        title: "Meet Someone and Teach Them Your Language | HEYID",
        description:
          "Want to share your language with someone curious about the world? HEYID combines language learning with meeting new people.",
        h1: "Teach someone your language while getting to know them",
        intro:
          "Being the one who teaches, not just learns, gives the conversation a completely different dynamic — and often makes it feel more balanced.",
        body: [
          "You can explain phrases the other person won't find in any course, and learn something about their country along the way.",
          "Automatic translation acts as a safety net in case the other person doesn't catch something the first time.",
        ],
      },
    },
  },
  {
    id: "dating-chat-hopeless-romantic",
    topic: "dating-chat-hopeless-romantic",
    keyword: "dating chat for hopeless romantics",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-to-find-love", "dating-chat-thoughtful-questions"],
    content: {
      pl: {
        title: "Randki dla nieuleczalnych romantyków | HEYID",
        description:
          "Wierzysz, że dobra rozmowa może zaskoczyć w najmniej spodziewanym momencie? HEYID daje na to okazję, i to z kimś z całego świata.",
        h1: "Dla osób, które wciąż wierzą w dobrą rozmowę",
        intro:
          "Nieprzewidywalność losowej rozmowy pasuje do podejścia, w którym najlepsze historie zaczynają się przypadkiem, nie od zaplanowanego swipe'a.",
        body: [
          "Nigdy nie wiesz, kto będzie po drugiej stronie — a to właśnie ta niepewność sprawia, że rozmowa ma w sobie coś ekscytującego.",
          "Automatyczne tłumaczenie sprawia, że ta historia może zacząć się z kimś z zupełnie innej części świata.",
        ],
      },
      en: {
        title: "Dating Chat for Hopeless Romantics | HEYID",
        description:
          "Still believe a good conversation can catch you off guard at the least expected moment? HEYID gives you that chance, with someone from anywhere in the world.",
        h1: "For people who still believe in a good conversation",
        intro:
          "The unpredictability of a random conversation fits an approach where the best stories start by chance, not from a planned swipe.",
        body: [
          "You never know who'll be on the other end — and that uncertainty is exactly what makes the conversation exciting.",
          "Automatic translation means that story could start with someone from a completely different part of the world.",
        ],
      },
    },
  },
  {
    id: "dating-chat-realistic-expectations",
    topic: "dating-chat-no-games",
    keyword: "dating chat no games no drama",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-honest-dating", "chat-for-genuine-connection"],
    content: {
      pl: {
        title: "Randkowanie bez gierek | HEYID",
        description:
          "Zmęczony niejasnymi sygnałami i grami w aplikacjach randkowych? HEYID stawia na prostą, bezpośrednią rozmowę.",
        h1: "Randkowanie bez gierek i niedomówień",
        intro:
          "Rozmowa nie musi być skomplikowana — czasem najlepiej sprawdza się po prostu bezpośrednie, szczere podejście.",
        body: [
          "HEYID nie ma mechanizmów, które premiują granie na zwłokę czy udawanie mniejszego zainteresowania niż faktycznie masz.",
          "Jeśli rozmowa Ci nie odpowiada, po prostu ją kończysz — bez potrzeby tłumaczenia się czy przeciągania niejasnej sytuacji.",
        ],
      },
      en: {
        title: "Dating Without the Games | HEYID",
        description:
          "Tired of mixed signals and games on dating apps? HEYID focuses on simple, direct conversation.",
        h1: "Dating without games or mixed signals",
        intro:
          "A conversation doesn't have to be complicated — sometimes a direct, honest approach simply works best.",
        body: [
          "HEYID has no mechanics that reward playing it cool or pretending to be less interested than you actually are.",
          "If a conversation isn't working for you, you just end it — no need to explain yourself or drag out an unclear situation.",
        ],
      },
    },
  },
  {
    id: "dating-chat-shared-playlist",
    topic: "dating-chat-music-taste-match",
    keyword: "match with someone based on music taste",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-music-lovers", "dating-chat-humor-match"],
    content: {
      pl: {
        title: "Poznaj kogoś o podobnym guście muzycznym | HEYID",
        description:
          "Gust muzyczny mówi o kimś zaskakująco dużo. HEYID pozwala poznać kogoś, z kim rozmowa o playliście może przerodzić się w coś więcej.",
        h1: "Poznaj kogoś, kto słucha podobnej muzyki",
        intro:
          "Zamiast pytać o ulubiony gatunek w formularzu, HEYID pozwala po prostu porozmawiać o muzyce i zobaczyć, czy gust się pokrywa.",
        body: [
          "Rozmowa o konkretnym albumie czy koncercie potrafi ujawnić więcej niż lista ulubionych gatunków w profilu.",
          "Automatyczne tłumaczenie sprawia, że możesz odkryć wykonawcę z zupełnie innej sceny muzycznej niż ta, którą znasz.",
        ],
      },
      en: {
        title: "Meet Someone with Similar Music Taste | HEYID",
        description:
          "Music taste says a surprising amount about someone. HEYID lets you meet someone a playlist conversation might turn into something more.",
        h1: "Meet someone who listens to similar music",
        intro:
          "Instead of picking a favorite genre from a dropdown, HEYID lets you actually talk about music and see if your tastes line up.",
        body: [
          "A conversation about a specific album or concert can reveal more than a list of favorite genres on a profile.",
          "Automatic translation means you might discover an artist from a completely different music scene than the one you know.",
        ],
      },
    },
  },
  {
    id: "dating-chat-body-positive",
    topic: "dating-chat-body-positive-conversation",
    keyword: "dating chat focused on personality not looks",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-for-honest-dating", "chat-for-genuine-connection"],
    content: {
      pl: {
        title: "Rozmowa, w której liczy się charakter, nie zdjęcie | HEYID",
        description:
          "Zmęczony ocenianiem ludzi po jednym zdjęciu profilowym? HEYID zaczyna od rozmowy, gdzie liczy się przede wszystkim to, jak ktoś pisze i myśli.",
        h1: "Kiedy liczy się rozmowa, nie zdjęcie",
        intro:
          "Pierwsze wrażenie z jednego zdjęcia rzadko oddaje pełny obraz osoby. HEYID przesuwa ten punkt startowy na rozmowę.",
        body: [
          "Zamiast oceniać kogoś po wyglądzie w ułamku sekundy, poznajesz go stopniowo, poprzez to, co i jak pisze.",
          "To podejście lepiej sprawdza się, jeśli zależy Ci na kimś, kto docenia rozmowę bardziej niż samą estetykę profilu.",
        ],
      },
      en: {
        title: "A Conversation Where Personality Matters, Not the Photo | HEYID",
        description:
          "Tired of being judged by a single profile photo? HEYID starts with conversation, where how someone writes and thinks matters most.",
        h1: "When the conversation matters more than the photo",
        intro:
          "A first impression from one photo rarely captures the whole person. HEYID moves that starting point to conversation instead.",
        body: [
          "Instead of judging someone by their looks in a split second, you get to know them gradually, through what and how they write.",
          "This works better if you're looking for someone who values the conversation more than a curated profile.",
        ],
      },
    },
  },
  {
    id: "dating-chat-online-first-then-meet",
    topic: "dating-chat-before-meeting-irl",
    keyword: "chat before meeting in person dating",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-first-date-practice", "text-based-dating"],
    content: {
      pl: {
        title: "Poznaj kogoś w rozmowie, zanim spotkacie się na żywo | HEYID",
        description:
          "Wolisz najpierw dobrze kogoś poznać, zanim zdecydujesz się na spotkanie na żywo? HEYID pozwala budować tę znajomość stopniowo.",
        h1: "Rozmowa jako pierwszy krok przed spotkaniem na żywo",
        intro:
          "Spotkanie na żywo z kimś, kogo w ogóle nie znasz, bywa stresujące. Rozmowa online to naturalny, mniej ryzykowny pierwszy krok.",
        body: [
          "Możesz poznać sposób myślenia i poczucie humoru drugiej osoby, zanim jeszcze zdecydujecie się na spotkanie w realu.",
          "Nie ma tu presji czasowej — spotkanie na żywo to Wasza wspólna decyzja, podjęta wtedy, kiedy oboje poczujecie się gotowi.",
        ],
      },
      en: {
        title: "Get to Know Someone in Conversation Before Meeting in Person | HEYID",
        description:
          "Prefer to really get to know someone before deciding to meet in person? HEYID lets you build that connection gradually.",
        h1: "Conversation as a first step before meeting in person",
        intro:
          "Meeting in person with someone you don't know at all can feel stressful. An online conversation is a natural, lower-risk first step.",
        body: [
          "You can get a feel for how someone thinks and their sense of humor before deciding to meet in person.",
          "There's no time pressure — meeting in person is a decision you both make, whenever you both feel ready.",
        ],
      },
    },
  },
  {
    id: "dating-chat-authentic-self",
    topic: "dating-chat-authentic-self",
    keyword: "be yourself dating chat",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-for-honest-dating", "dating-chat-no-games"],
    content: {
      pl: {
        title: "Bądź sobą — bez presji idealnego profilu | HEYID",
        description:
          "Nie musisz mieć idealnie dobranego zestawu zdjęć, żeby zacząć rozmawiać. HEYID zaczyna od tego, kim naprawdę jesteś w rozmowie.",
        h1: "Bądź sobą, bez presji perfekcyjnego profilu",
        intro:
          "Presja stworzenia idealnego profilu potrafi zniechęcić, zanim jeszcze zacznie się jakakolwiek rozmowa. HEYID pomija ten etap.",
        body: [
          "Nie musisz spędzać godzin na dobieraniu zdjęć czy pisaniu opisu — po prostu zaczynasz rozmawiać takim, jakim jesteś.",
          "To, co naprawdę Cię wyróżnia, i tak wyjdzie w rozmowie — nie trzeba tego upychać w trzech linijkach bio.",
        ],
      },
      en: {
        title: "Be Yourself — No Pressure for a Perfect Profile | HEYID",
        description:
          "You don't need a perfectly curated photo set to start talking. HEYID starts with who you actually are in conversation.",
        h1: "Be yourself, no pressure for a perfect profile",
        intro:
          "The pressure of building a perfect profile can put you off before any conversation even starts. HEYID skips that step.",
        body: [
          "You don't need to spend hours picking photos or writing a bio — you just start talking as you are.",
          "What actually makes you interesting comes through in conversation anyway — no need to squeeze it into a three-line bio.",
        ],
      },
    },
  },
  {
    id: "dating-chat-second-time-around",
    topic: "dating-chat-comeback-dating",
    keyword: "getting back into dating chat app",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["dating-chat-starting-over", "chat-to-boost-confidence-dating"],
    content: {
      pl: {
        title: "Wracasz do randkowania? Zacznij od rozmowy | HEYID",
        description:
          "Powrót do randkowania po dłuższej przerwie bywa onieśmielający. HEYID pozwala zacząć delikatnie, od zwykłej rozmowy.",
        h1: "Wracasz do randkowania — zacznij powoli",
        intro:
          "Nie musisz od razu rzucać się na głęboką wodę. Zwykła rozmowa to dobry, niewymagający pierwszy krok z powrotem.",
        body: [
          "Losowa rozmowa daje Ci przestrzeń, żeby na nowo poczuć, jak to jest rozmawiać z kimś nowym, bez presji, że to musi zaraz przerodzić się w randkę.",
          "Jeśli rozmowa nie wypali, po prostu zaczynasz kolejną — praktyka z czasem robi swoje.",
        ],
      },
      en: {
        title: "Getting Back into Dating? Start with Conversation | HEYID",
        description:
          "Getting back into dating after a long break can feel intimidating. HEYID lets you ease in with a simple conversation.",
        h1: "Getting back into dating — start slow",
        intro:
          "You don't have to jump straight into the deep end. An ordinary conversation is a good, low-stakes first step back in.",
        body: [
          "A random conversation gives you space to relearn what it feels like to talk to someone new, without the pressure of it turning into a date right away.",
          "If a conversation doesn't go anywhere, you just start another — practice does the rest over time.",
        ],
      },
    },
  },
  {
    id: "dating-chat-genuine-curiosity",
    topic: "dating-chat-curious-people",
    keyword: "dating chat for genuinely curious people",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["dating-chat-open-minded", "chat-for-cultural-exchange-dating"],
    content: {
      pl: {
        title: "Randki dla ludzi ciekawych świata | HEYID",
        description:
          "Lubisz zadawać pytania i naprawdę słuchać odpowiedzi? HEYID daje Ci nieograniczoną liczbę osób, o które możesz zapytać, skąd są i jak żyją.",
        h1: "Randki dla osób, które lubią zadawać pytania",
        intro:
          "Ciekawość drugiego człowieka to jedna z najbardziej niedocenianych cech w randkowaniu — a HEYID daje jej mnóstwo pola do popisu.",
        body: [
          "Każda rozmowa to inna historia, inny kraj, inne doświadczenia — wystarczy zadawać pytania i słuchać.",
          "Automatyczne tłumaczenie sprawia, że ta ciekawość nie jest ograniczona do osób mówiących Twoim językiem.",
        ],
      },
      en: {
        title: "Dating Chat for Genuinely Curious People | HEYID",
        description:
          "Love asking questions and actually listening to the answers? HEYID gives you an endless supply of people to ask about their life and world.",
        h1: "Dating chat for people who love asking questions",
        intro:
          "Curiosity about other people is one of the most underrated traits in dating — and HEYID gives it plenty of room to shine.",
        body: [
          "Every conversation is a different story, a different country, different experiences — all it takes is asking and listening.",
          "Automatic translation means that curiosity isn't limited to people who speak your language.",
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