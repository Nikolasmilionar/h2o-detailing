/* Revive & Refine — shared section building blocks.
   Exports useIsMobile hook + layout primitives. */

const RR_SECTION = { padding: "var(--section-y-md) 5%" };
const RR_CONTAINER = { maxWidth: "var(--container-xxl)", margin: "0 auto" };

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth <= 600);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

function FeatureSplit({ eyebrow, title, body, bullets = [], img, reverse = false, cta = "Book", onCta }) {
  const { Button } = window.ReviveRefineDesignSystem_38ca5a;
  const Icon = window.RRIcon;
  const text = (
    <div style={{ maxWidth: "32rem" }}>
      {eyebrow && <p style={{ marginBottom: "var(--space-3)", fontWeight: 600, color: "var(--text-muted)" }}>{eyebrow}</p>}
      <h2 style={{ marginBottom: "var(--space-5)" }}>{title}</h2>
      <p style={{ fontSize: "var(--text-medium)", color: "var(--text-muted)", marginBottom: "var(--space-6)" }}>{body}</p>
      <ul style={{ display: "grid", gap: "var(--space-3)", listStyle: "none", margin: 0, padding: 0 }}>
        {bullets.map((b) => (
          <li key={b} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
            <Icon name="check" size={22} style={{ color: "var(--accent)", flex: "none" }} />
            <span style={{ color: "var(--text-body)" }}>{b}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "var(--space-8)", display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
        <Button variant="secondary" onClick={onCta}>{cta}</Button>
        <Button variant="link" iconRight={<Icon name="chevron_right" size={20} />}>Learn more</Button>
      </div>
    </div>
  );
  const image = (
    <img src={img} alt={title} style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: "var(--radius-image)" }} />
  );
  return (
    <section className="scheme-3" style={{ padding: "var(--section-y-md) 5%" }}>
      <div style={{ maxWidth: "var(--container-xxl)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "var(--space-16)" }}>
        {reverse ? <>{image}{text}</> : <>{text}{image}</>}
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub, align = "center", max = "var(--container-md)" }) {
  return (
    <div style={{ maxWidth: max, margin: align === "center" ? "0 auto" : 0, textAlign: align, marginBottom: "var(--space-16)" }}>
      {eyebrow && <p style={{ marginBottom: "var(--space-3)", fontWeight: 600, color: "var(--text-muted)" }}>{eyebrow}</p>}
      <h2>{title}</h2>
      {sub && <p style={{ marginTop: "var(--space-4)", fontSize: "var(--text-medium)", color: "var(--text-muted)" }}>{sub}</p>}
    </div>
  );
}

Object.assign(window, { RR_SECTION, RR_CONTAINER, RRFeatureSplit: FeatureSplit, RRSectionHead: SectionHead, useIsMobile });
