/**
 * PREMIUM — deliberately minimal. The brief says not to invent Premium
 * features. This array is the ONLY place Premium perks are listed;
 * add real ones here as they're confirmed and every page that renders
 * Premium (home, pricing sections, SEO pages) updates automatically.
 */
export interface PremiumFeature {
  title: { pl: string; en: string };
  description: { pl: string; en: string };
}

// Intentionally empty until real Premium features are confirmed.
export const PREMIUM_FEATURES: PremiumFeature[] = [];

export const PREMIUM_COPY = {
  heading: { pl: "HEYID Premium", en: "HEYID Premium" },
  intro: {
    pl: "HEYID oferuje plan Premium, który wykracza poza darmowe dzienne limity. Szczegóły funkcji pojawią się tutaj wraz z rozwojem aplikacji.",
    en: "HEYID offers a Premium plan that goes beyond the free daily limits. Feature details will appear here as the app evolves.",
  },
  comingSoonNote: {
    pl: "Lista korzyści Premium jest uzupełniana na bieżąco.",
    en: "The list of Premium benefits is being filled in as it's finalized.",
  },
};
