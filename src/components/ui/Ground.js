/**
 * Decorative ground: a hairline grid and a single soft warm glow.
 *
 * Purely presentational — hidden from assistive tech, and it never intercepts
 * pointer events. Used sparingly (hero and the closing contact section) so it
 * reads as a signature rather than wallpaper.
 */
export function Ground({ glow = true }) {
  return (
    <div className="ground" aria-hidden="true">
      <div className="ground__grid" />
      {glow ? <div className="ground__glow" /> : null}
    </div>
  );
}
