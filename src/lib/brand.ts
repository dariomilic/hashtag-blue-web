const BASE = "/brand/logos";

export const logos = {
  black: `${BASE}/logo-icon-black.png`,
  white: `${BASE}/logo-icon-white.png`,
  color: `${BASE}/logo-icon-color.png`,
  card: "/brand/logo-icon-card.png",
} as const;

export type LogoVariant = keyof typeof logos;

export const LOGO_ICON_WIDTH = 4364;
export const LOGO_ICON_HEIGHT = 2922;

export const LOGO_ICON_HEIGHT_PX = 52;
