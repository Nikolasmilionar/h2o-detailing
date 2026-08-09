/* H2O Mobile Detailing — Footer: brand-forward layout */

const INSTAGRAM_URL_FOOTER = "https://www.instagram.com/h20mobiledetailingnw/";

function Footer({ onNav }) {
  const linksLeft = ["Home", "Services", "Contact", "Gallery"];
  const linksRight = ["About us", "FAQ"];
  const legal = ["Privacy policy", "Terms of service", "Cookie settings"];
  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [hoveredContact, setHoveredContact] = React.useState(null);
  const [hoveredSocial, setHoveredSocial] = React.useState(null);
  const [hoveredBook, setHoveredBook] = React.useState(false);

  const socials = [
    {
      key: "instagram", label: "Instagram",
      href: INSTAGRAM_URL_FOOTER,
      svg: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>),
    },
    {
      key: "facebook", label: "Facebook",
      href: "https://www.facebook.com/share/1Hr99pz1Q9/",
      svg: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>),
    },
    {
      key: "whatsapp", label: "WhatsApp",
      href: "https://wa.me/447591975194",
      svg: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>),
    },
  ];

  return (
    <footer className="scheme-3" style={{ borderTop: "1px solid var(--scheme-border)" }}>
      <div style={{ maxWidth: "var(--container-xxl)", margin: "0 auto", padding: "var(--space-16) 5% var(--space-8)" }}>

        {/* Top: logo + tagline full width */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-12)" }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNav && onNav("Home"); }}>
            <img src="./assets/images/logo.png" alt="H2O Mobile Detailing" style={{ height: 64, objectFit: "contain" }} />
          </a>
          <p style={{ fontSize: "var(--text-medium)", color: "var(--text-muted)", fontStyle: "italic", margin: 0, maxWidth: "22rem", textAlign: "right" }}>
            Mobile car detailing across Rhyl &amp; North Wales — we come to you.
          </p>
        </div>

        <div style={{ height: 1, background: "var(--scheme-border)", marginBottom: "var(--space-10)" }} />

        {/* Middle: 4 columns — Pages, Contact, Follow, Book */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "var(--space-8)", marginBottom: "var(--space-12)" }}>

          {/* Pages */}
          <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 var(--space-8)", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "var(--text-tiny)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-strong)", margin: "0 0 var(--space-4)" }}>Pages</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  {linksLeft.map((l) => (
                    <li key={l}>
                      <a href="#" onClick={(e) => { e.preventDefault(); onNav && onNav(l); }}
                        onMouseEnter={() => setHoveredLink(l)}
                        onMouseLeave={() => setHoveredLink(null)}
                        style={{ fontSize: "var(--text-small)", textDecoration: "none", color: hoveredLink === l ? "var(--text-strong)" : "var(--text-muted)", transition: "color 0.15s ease" }}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: "var(--text-tiny)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-strong)", margin: "0 0 var(--space-4)" }}>Company</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  {linksRight.map((l) => (
                    <li key={l}>
                      <a href="#" onClick={(e) => { e.preventDefault(); onNav && onNav(l); }}
                        onMouseEnter={() => setHoveredLink(l)}
                        onMouseLeave={() => setHoveredLink(null)}
                        style={{ fontSize: "var(--text-small)", textDecoration: "none", color: hoveredLink === l ? "var(--text-strong)" : "var(--text-muted)", transition: "color 0.15s ease" }}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "var(--text-tiny)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-strong)", margin: "0 0 var(--space-4)" }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <a href="tel:+447591975194"
                onMouseEnter={() => setHoveredContact('phone')}
                onMouseLeave={() => setHoveredContact(null)}
                style={{ display: "flex", alignItems: "center", gap: 6, textDecoration: "none", color: hoveredContact === 'phone' ? "var(--text-strong)" : "var(--text-muted)", fontSize: "var(--text-small)", transition: "color 0.15s ease" }}>
                <span className="material-symbols-rounded" style={{ fontSize: 15 }}>call</span>07591 975194
              </a>
              <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: "var(--text-small)" }}>
                <span className="material-symbols-rounded" style={{ fontSize: 15 }}>mail</span>[EMAIL ADDRESS]
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: "var(--text-small)" }}>
                <span className="material-symbols-rounded" style={{ fontSize: 15 }}>location_on</span>Rhyl, North Wales
              </span>
            </div>
          </div>

          {/* Follow */}
          <div>
            <p style={{ fontSize: "var(--text-tiny)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-strong)", margin: "0 0 var(--space-4)" }}>Follow</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {socials.map((s) => (
                <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial(s.key)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: hoveredSocial === s.key ? "var(--accent)" : "var(--text-muted)", fontSize: "var(--text-small)", transition: "color 0.15s ease" }}>
                  {s.svg}{s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Book CTA */}
          <div>
            <p style={{ fontSize: "var(--text-tiny)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-strong)", margin: "0 0 var(--space-4)" }}>Book now</p>
            <a href={INSTAGRAM_URL_FOOTER} target="_blank" rel="noopener noreferrer"
              onMouseEnter={() => setHoveredBook(true)}
              onMouseLeave={() => setHoveredBook(false)}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: hoveredBook ? "var(--accent-hover)" : "var(--accent)", color: "var(--accent-contrast)", fontWeight: 700, fontSize: "var(--text-small)", padding: "10px 18px", borderRadius: "var(--radius-button)", textDecoration: "none", transition: "background 0.15s" }}>
              <span className="material-symbols-rounded" style={{ fontSize: 16 }}>chat</span>
              DM to book
            </a>
          </div>
        </div>

        <div style={{ height: 1, background: "var(--scheme-border)" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "var(--space-6)", fontSize: "var(--text-small)" }}>
          <p style={{ color: "var(--scheme-muted)", margin: 0 }}>© 2026 H2O Mobile Detailing. All rights reserved.</p>
          <ul style={{ display: "flex", gap: "var(--space-6)", listStyle: "none", margin: 0, padding: 0 }}>
            {legal.map((l) => (
              <li key={l}><a href="#" style={{ textDecoration: "underline", color: "var(--scheme-muted)" }}>{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

window.RRFooter = Footer;
