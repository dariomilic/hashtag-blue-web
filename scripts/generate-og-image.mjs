import sharp from "sharp";
import { mkdirSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;
const MARGIN_LEFT = 60;
const MARGIN_RIGHT = 60;
const MARGIN_TOP = 50;
const ACCENT = "#205B8C";
const WHITE = "#FFFFFF";

const HERO = join(ROOT, "public/brand/photos/hero-villa.jpg");
const LOGO = join(ROOT, "public/brand/logos/logo-icon-white.png");
const OUTPUT = join(ROOT, "public/brand/og/hashtag-blue-og.jpg");

const FONT_MEDIUM = join(ROOT, "scripts/fonts/Inter-Medium.ttf");
const FONT_REGULAR = join(ROOT, "scripts/fonts/Inter-Regular.ttf");

const LOGO_HEIGHT = 70;
const LOGO_TOP = MARGIN_TOP + 15;
const WORDMARK_SIZE = 28;
const WORDMARK_TRACKING = 3.2;
const SERVICE_SIZE = 25;
const SERVICE_LINE_HEIGHT = 42;
const LINE_WIDTH = 2;
const LINE_GAP = 20;
const SERVICE_BLOCK_WIDTH = 310;
const SERVICE_BLOCK_SHIFT_LEFT = 40;
const ACCENT_BRIGHT_FILTER = "url(#accentBright)";

function toDataUri(fontPath) {
  const base64 = readFileSync(fontPath).toString("base64");
  return `data:font/ttf;base64,${base64}`;
}

async function main() {
  const logoMeta = await sharp(LOGO).metadata();
  const logoWidth = Math.round((logoMeta.width / logoMeta.height) * LOGO_HEIGHT);

  const logoBuffer = await sharp(LOGO).resize(logoWidth, LOGO_HEIGHT).png().toBuffer();

  const overlaySvg = Buffer.from(`<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="overlay" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.42"/>
      <stop offset="45%" stop-color="#000000" stop-opacity="0.38"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.35"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#overlay)"/>
</svg>`);

  const services = [
    "ARHITEKTURA",
    "URBANIZAM",
    "RAZVOJ NEKRETNINA",
    "INVESTICIJSKO",
    "SAVJETOVANJE",
  ];

  const serviceBlockHeight = services.length * SERVICE_LINE_HEIGHT;
  const serviceStartY = Math.round((HEIGHT - serviceBlockHeight) / 2) + 10;
  const serviceTextX = WIDTH - MARGIN_RIGHT - SERVICE_BLOCK_SHIFT_LEFT;
  const lineX = serviceTextX - SERVICE_BLOCK_WIDTH - LINE_GAP - LINE_WIDTH;
  const lineTop = serviceStartY - Math.round(SERVICE_SIZE * 0.75);
  const lineHeight =
    (services.length - 1) * SERVICE_LINE_HEIGHT + Math.round(SERVICE_SIZE * 0.28);

  const wordmarkX = MARGIN_LEFT + logoWidth + 18;
  const wordmarkY =
    LOGO_TOP + Math.round(LOGO_HEIGHT / 2) + Math.round(WORDMARK_SIZE * 0.36);

  const fontMediumUri = toDataUri(FONT_MEDIUM);
  const fontRegularUri = toDataUri(FONT_REGULAR);

  const serviceLines = services
    .map(
      (line, index) =>
        `<text x="${serviceTextX}" y="${serviceStartY + index * SERVICE_LINE_HEIGHT}" text-anchor="end" fill="${WHITE}" font-family="InterRegular" font-size="${SERVICE_SIZE}" letter-spacing="2.2">${line}</text>`,
    )
    .join("\n    ");

  const textSvg = Buffer.from(`<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="accentBright" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="
        1.14 0 0 0 0.03
        0 1.14 0 0 0.03
        0 0 1.14 0 0.03
        0 0 0 1 0"/>
    </filter>
    <style>
      @font-face {
        font-family: 'InterMedium';
        src: url('${fontMediumUri}') format('truetype');
        font-weight: 500;
      }
      @font-face {
        font-family: 'InterRegular';
        src: url('${fontRegularUri}') format('truetype');
        font-weight: 400;
      }
    </style>
  </defs>
  <text x="${wordmarkX}" y="${wordmarkY}" font-family="InterMedium" font-size="${WORDMARK_SIZE}" letter-spacing="${WORDMARK_TRACKING}">
    <tspan fill="${WHITE}">HASHTAG</tspan>
    <tspan fill="${ACCENT}" filter="${ACCENT_BRIGHT_FILTER}" dx="10">BLUE</tspan>
  </text>
  <rect x="${lineX}" y="${lineTop}" width="${LINE_WIDTH}" height="${lineHeight}" fill="${ACCENT}"/>
  ${serviceLines}
</svg>`);

  mkdirSync(dirname(OUTPUT), { recursive: true });

  await sharp(HERO)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "center" })
    .composite([
      { input: overlaySvg, top: 0, left: 0 },
      { input: logoBuffer, top: LOGO_TOP, left: MARGIN_LEFT },
      { input: textSvg, top: 0, left: 0 },
    ])
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(OUTPUT);

  console.log(`Generated ${OUTPUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
