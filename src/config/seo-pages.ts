/**
 * SEO-PAGES — the data model for programmatic SEO.
 *
 * Every page is defined once here with everything the brief asks for:
 * keyword, search intent, language, optional country, title, description,
 * content, CTA and related pages — then rendered by
 * src/pages/[lang]/[...slug].astro.
 *
 * CLEANED UP (2026-09-24): cut from ~150 near-duplicate pages down to 12.
 * Google Search Console showed most of those pages were never indexed
 * ("Strona wykryta – obecnie niezindeksowana") and AdSense flagged the
 * site for "treści o niskiej wartości" — a textbook thin/duplicate
 * content pattern (same 2 paragraphs, keyword swapped). Keeping only
 * pages with a genuinely distinct search intent. Do not re-add bulk
 * keyword-variant pages here — write real, unique content instead
 * (e.g. as blog posts).
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
  {
    id: "online-dating-chat",
    topic: "online-dating-chat",
    keyword: "online dating chat",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["chat-for-singles", "random-chat"],
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
    id: "chat-for-singles",
    topic: "chat-for-singles",
    keyword: "chat app for singles",
    intent: "meet-people-general",
    cta: "meetPeople",
    relatedTopics: ["online-dating-chat", "chat-for-shy-singles"],
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
    id: "chat-for-shy-singles",
    topic: "chat-for-shy-singles",
    keyword: "dating chat for shy people",
    intent: "meet-people-general",
    cta: "tryIt",
    relatedTopics: ["chat-for-singles", "online-dating-chat"],
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
    id: "long-distance-chat",
    topic: "long-distance-chat",
    keyword: "long distance chat app",
    intent: "international-chat",
    cta: "noLanguageBarrier",
    relatedTopics: ["international-chat", "online-dating-chat"],
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
