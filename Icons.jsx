/* Revive & Refine — UI kit shared helpers.
   Material Symbols Rounded icon + star row. Exposed on window for sibling
   babel scripts (each <script type="text/babel"> has its own scope). */

function Icon({ name, size = 24, weight = 400, fill = 0, style = {}, ...props }) {
  return (
    <span
      className="material-symbols-rounded"
      style={{
        fontSize: size,
        lineHeight: 1,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
        userSelect: "none",
        ...style,
      }}
      {...props}
    >
      {name}
    </span>
  );
}

function Stars({ count = 5, size = 18 }) {
  return (
    <div style={{ display: "flex", gap: 2, color: "var(--accent)" }}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" size={size} fill={1} />
      ))}
    </div>
  );
}

window.RRIcon = Icon;
window.RRStars = Stars;
