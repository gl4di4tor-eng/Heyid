/**
 * BRANDING — palette and type extracted from the HEYID logo (globe +
 * chat bubble). Mirrors the CSS custom properties in
 * src/styles/tokens.css — kept here too so JS/Astro components (charts,
 * inline styles, meta theme-color) can reference the same values without
 * parsing CSS.
 */
export const COLORS = {
  blueDeep: "#0D47A1",
  bluePrimary: "#1E88E5",
  teal: "#2DD4BF",
  green: "#4CAF7D",
  amber: "#FFB020",
  ink: "#0B1220", // dark-mode background, deep navy (not pure black)
  paper: "#F7FAFC", // light-mode background
} as const;

export const FONTS = {
  display: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
};

export const THEME_COLOR = {
  light: COLORS.paper,
  dark: COLORS.ink,
};
