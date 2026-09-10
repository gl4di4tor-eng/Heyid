/**
 * PREMIUM — pricing plans as shown in the HEYID mobile app.
 * This is the single source of truth for plan names, prices, and features.
 * Every page that renders pricing (home, pricing sections, SEO pages)
 * should pull from PREMIUM_PLANS.
 */
export interface PremiumPlanFeature {
  label: { pl: string; en: string };
  included: boolean;
}

export interface PremiumPlan {
  id: "free" | "basic" | "standard" | "unlimited";
  name: { pl: string; en: string };
  price: { pl: string; en: string }; // e.g. "Za darmo" / "Free"
  priceSuffix?: { pl: string; en: string }; // e.g. "/miesiąc" / "/month"
  isCurrent?: boolean;
  isPopular?: boolean;
  features: PremiumPlanFeature[];
}

export const PREMIUM_PLANS: PremiumPlan[] = [
  {
    id: "free",
    name: { pl: "Darmowy", en: "Free" },
    price: { pl: "Za darmo", en: "Free" },
    isCurrent: true,
    features: [
      { label: { pl: "Czat tekstowy", en: "Text chat" }, included: true },
      { label: { pl: "Wysyłanie wiadomości głosowych", en: "Send voice messages" }, included: true },
      { label: { pl: "Tłumaczenie głosowe", en: "Voice translation" }, included: false },
      { label: { pl: "10 użyć SPARX AI dziennie", en: "10 SPARX AI uses/day" }, included: true },
      { label: { pl: "20 wiadomości dziennie", en: "20 messages/day" }, included: true },
    ],
  },
  {
    id: "basic",
    name: { pl: "Basic", en: "Basic" },
    price: { pl: "$6.99", en: "$6.99" },
    priceSuffix: { pl: "/miesiąc", en: "/month" },
    features: [
      { label: { pl: "100 minut miesięcznie", en: "100 minutes/month" }, included: true },
      { label: { pl: "Tłumaczenie głosowe", en: "Voice translation" }, included: true },
      { label: { pl: "Nielimitowany SPARX AI i wiadomości", en: "Unlimited SPARX AI & messages" }, included: true },
    ],
  },
  {
    id: "standard",
    name: { pl: "Standard", en: "Standard" },
    price: { pl: "$12.99", en: "$12.99" },
    priceSuffix: { pl: "/miesiąc", en: "/month" },
    isPopular: true,
    features: [
      { label: { pl: "300 minut miesięcznie", en: "300 minutes/month" }, included: true },
      { label: { pl: "Tłumaczenie głosowe", en: "Voice translation" }, included: true },
      { label: { pl: "Nielimitowany SPARX AI i wiadomości", en: "Unlimited SPARX AI & messages" }, included: true },
    ],
  },
  {
    id: "unlimited",
    name: { pl: "Unlimited", en: "Unlimited" },
    price: { pl: "$29.99", en: "$29.99" },
    priceSuffix: { pl: "/miesiąc", en: "/month" },
    features: [
      { label: { pl: "500 minut miesięcznie", en: "500 minutes/month" }, included: true },
      { label: { pl: "Tłumaczenie głosowe", en: "Voice translation" }, included: true },
      { label: { pl: "Nielimitowany SPARX AI i wiadomości", en: "Unlimited SPARX AI & messages" }, included: true },
    ],
  },
];

export const PREMIUM_COPY = {
  heading: { pl: "HEYID Premium", en: "HEYID Premium" },
  intro: {
    pl: "Wybierz plan dopasowany do Twoich potrzeb.",
    en: "Choose the plan that fits your needs.",
  },
};
