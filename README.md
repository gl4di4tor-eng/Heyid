# HEYID — strona internetowa

Strona HEYID zbudowana w [Astro](https://astro.build), zaprojektowana jako
duży, wielojęzyczny system SEO (nie tylko wizytówka aplikacji), hostowana
za darmo na GitHub Pages i gotowa na późniejsze podłączenie własnej domeny.

## Szybki start

```bash
npm install
npm run dev       # podgląd lokalny, http://localhost:4321
npm run build     # build produkcyjny do ./dist
npm run preview   # podgląd builda produkcyjnego
```

## Zanim wystartujesz na GitHubie

1. Utwórz repo o nazwie `heyid` na swoim koncie GitHub.
2. W pliku `src/config/site.ts` ustaw `GITHUB_USERNAME` na swoją prawdziwą
   nazwę użytkownika GitHub (obecnie jest tam placeholder `example-user`).
3. W ustawieniach repo: **Settings → Pages → Source: GitHub Actions**.
4. Wypchnij kod na branch `main` — workflow `.github/workflows/deploy.yml`
   zbuduje stronę i wystawi ją pod `https://<username>.github.io/heyid/`.

## Jedna rzecz do zrobienia od razu po starcie testów zamkniętych

Strona `/download` (i `/[lang]/download`) pokazuje teraz tryb
"Coming soon" z formularzem zapisu. Formularz **nie wysyła jeszcze nigdzie
danych** — trzeba podpiąć prawdziwy endpoint (np. Formspree, Google Forms,
Buttondown, własny worker) w `src/config/waitlist.ts`
(`WAITLIST_FORM_ENDPOINT`). Dopóki jest `null`, formularz jest wyłączony i
pokazuje neutralny komunikat zamiast się wysyłać donikąd.

Gdy aplikacja będzie publicznie dostępna w Google Play: ustaw
`SITE.appStoreUrl` w `src/config/site.ts` na prawdziwy link. Wszystkie
100+ stron linkuje do jednego `/download` — nic więcej nie trzeba zmieniać.

## Jak dodać domenę w przyszłości

W `src/config/site.ts` ustaw stałą `CUSTOM_DOMAIN` (np. `"heyid.app"`).
To jedyna zmiana — canonical, sitemap, hreflang, OG i routing przestawią
się automatycznie z trybu "GitHub Pages project site" na "własna domena".

## Struktura projektu i gdzie co zmienić

Wszystkie treści i ustawienia, które mogą się zmieniać, siedzą w jednym
miejscu w `src/config/`:

| Plik | Co kontroluje |
|---|---|
| `site.ts` | URL, base path, link `/download`, link do Google Play, domyślny język |
| `languages.ts` | Które języki są aktywne (`enabled: true`) i jakie są zarezerwowane na przyszłość |
| `countries.ts` | Kraje używane w stronach pSEO typu `/random-chat/poland/` |
| `app.ts` | Prawdziwe funkcje aplikacji + limity darmowego planu (limity są `null`, dopóki nie podasz konkretnej liczby — nigdy nie są zmyślane) |
| `sparx.ts` | Opis asystenta AI SPARX i jego zastosowań |
| `premium.ts` | Lista funkcji Premium — celowo pusta, dopóki nie potwierdzisz realnych funkcji |
| `cta.ts` | Wszystkie teksty przycisków CTA używane na stronie |
| `navigation.ts` | Linki w nagłówku i stopce |
| `social.ts` | Linki do social mediów (na razie `null`) |
| `branding.ts` | Kolory i fonty (zsynchronizowane z `src/styles/tokens.css`) |
| `seo-pages.ts` | **Dane dla stron pSEO** — tu dodajesz nowe strony (patrz niżej) |
| `waitlist.ts` | Endpoint formularza zapisów na `/download` |

## Jak dodać nową stronę SEO

Każda strona pSEO (np. `/pl/random-chat/`, `/en/random-chat/poland/`) jest
jednym obiektem w tablicy `SEO_PAGES` w `src/config/seo-pages.ts`. Nie ma
osobnych plików `.astro` na stronę — routing (`src/pages/[lang]/[...slug].astro`)
generuje je automatycznie z tych danych.

Żeby dodać nową stronę, dopisz obiekt zawierający:

- `id`, `topic` (i opcjonalnie `countrySlug` dla wariantu krajowego),
- `keyword` — słowo kluczowe, na które celuje strona,
- `intent` — jaką intencję wyszukiwania zaspokaja,
- `cta` — który wariant z `cta.ts` ma być użyty,
- `relatedTopics` — z jakimi innymi tematami się linkuje,
- `content.pl` i `content.en` — title, description, H1, wstęp, treść, opcjonalnie FAQ.

Zgodnie z briefem: **nie generujemy stron hurtowo**. Każda ma mieć realną
wartość i własną intencję wyszukiwania — dodawaj je świadomie, partiami.

## Jak dodać kraj do wariantów typu `/random-chat/poland/`

Dodaj wpis w `src/config/countries.ts`, a potem stwórz odpowiadający wpis
w `seo-pages.ts` z `countrySlug` ustawionym na ten sam `slug` (wzorzec:
istniejący wpis `random-chat-poland`).

## Jak dodać język

1. W `src/config/languages.ts` zmień `enabled: false` na `enabled: true`
   przy wybranym języku.
2. Dodaj tłumaczenia treści (`content.pl`/`content.en` → dodaj klucz
   nowego języka) tam, gdzie funkcja/strona tego wymaga — TypeScript
   podpowie, czego brakuje.
3. Nawigacja, przełącznik języka, hreflang i sitemap podłączą nowy język
   automatycznie.

## Jak dodać artykuł na blog

Dodaj plik `.md` w `src/content/blog/`, np. `moj-artykul-pl.md`, z
frontmatterem:

```yaml
---
lang: "pl"
pageSlug: "moj-artykul"      # ten sam pageSlug dla wersji PL i EN łączy tłumaczenia
title: "Tytuł artykułu"
description: "Krótki opis pod SEO, ~150-160 znaków."
date: 2026-08-19
draft: false
---
```

Strona listy (`/[lang]/blog/`) i strona artykułu
(`/[lang]/blog/[pageSlug]/`) wygenerują się same.

## SEO — co już jest zrobione

- `title`, `meta description`, `canonical`, Open Graph, Twitter Card na
  każdej stronie (`MetaTags.astro`)
- `hreflang` między wersjami językowymi tej samej strony + `x-default`
  (`Hreflang.astro`)
- `Schema.org` JSON-LD: `WebSite` na stronie głównej, `WebPage` na
  stronach pSEO, `Article` na wpisach blogowych, `FAQPage` tam, gdzie
  strona ma sekcję FAQ (`SchemaOrg.astro`)
- `sitemap-index.xml` generowany automatycznie przy buildzie
  (`@astrojs/sitemap`)
- `robots.txt` generowany dynamicznie z configu (`src/pages/robots.txt.ts`)
- Semantyczny HTML, mobile-first, minimalny JS (animacja tłumaczenia na
  stronie głównej to czysty CSS, bez JS)
- Tryb ciemny bez migotania (blocking inline script w `BaseLayout.astro`)

## Uwaga o logo

Plik `public/logo.png` to wycięta z Twojego zrzutu ekranu ikona (globus +
dymek) z usuniętym białym tłem — używana w nagłówku, stopce i jako favicon.
`public/logo-full.png` to oryginalny plik. Gdy będziesz mieć docelowe pliki
logo (najlepiej SVG lub PNG z natywnie przezroczystym tłem, wariant jasny
i ciemny), podmień pliki w `public/` — nic więcej nie trzeba zmieniać.
