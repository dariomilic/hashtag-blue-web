const BASE = "/brand/logos";

export const logos = {
  primaryColor: `${BASE}/logo-primary-color.png`,
  primaryWhite: `${BASE}/logo-primary-white.png`,
  primaryBlack: `${BASE}/logo-primary-black.png`,
  black: `${BASE}/logo-icon-black.png`,
  white: `${BASE}/logo-icon-white.png`,
  color: `${BASE}/logo-icon-color.png`,
} as const;

export type LogoVariant = keyof typeof logos;

export const LOGO_ICON_WIDTH = 1305;
export const LOGO_ICON_HEIGHT = 1566;

export const LOGO_ICON_HEIGHT_PX = 52;
