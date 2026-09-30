import { luminance } from "@/lib/contrast";

/**
 * Header fills for a reference tile in the builder grid.
 *
 * The tile shows the reference's primary colour. A near-white primary vanishes into
 * the light card, and a near-black one into the dark card. Lemonbase's white actions
 * (2026-09-30) were the first case. The owner's rule is to fix this in the card and
 * leave the data alone: primary_color stays the colour the product renders.
 *
 * In the theme where the primary would vanish, the tile shows the reference's own
 * canvas instead, when that canvas contrasts. Otherwise it shows a neutral surface.
 * The caller keeps the primary visible as a swatch.
 */
export function cardHeaderFills(primary: string, background: string): { light: string; dark: string; substituted: boolean } {
  const p = luminance(primary);
  const b = luminance(background);
  const light = p > 0.85 ? (b < 0.2 ? background : "#e4e4e7") : primary;
  const dark = p < 0.02 ? (b > 0.6 ? background : "#3f3f46") : primary;
  return { light, dark, substituted: light !== primary || dark !== primary };
}
