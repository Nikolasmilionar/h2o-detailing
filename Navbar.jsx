/* H2O Mobile Detailing — Navbar. Desktop: floating pill on scroll + mega-menu. Mobile: full-screen dark menu. */

const INSTAGRAM_URL_NAV = "https://www.instagram.com/h20mobiledetailingnw/";

const SERVICE_MENU = [
  {
    group: "Exterior",
    items: [
      { icon: "wash",                       label: "Basic Wash",         price: "£25", bg: "#0F1B33", iconColor: "#1E90FF" },
      { icon: "local_car_wash",             label: "Standard Detail",    price: "£40", bg: "#0F1B33", iconColor: "#1E90FF" },
      { icon: "auto_fix",                   label: "Premium Detail",     price: "£70", bg: "#0F1B33", iconColor: "#1E90FF" },
    ],
  },
  {
    group: "Interior",
    items: [
      { icon: "cleaning_services",          label: "Quick Clean",        price: "£30",  bg: "#0F1B33", iconColor: "#1E90FF" },
      { icon: "airline_seat_recline_extra", label: "Full Interior",      price: "£60",  bg: "#0F1B33", iconColor: "#1E90FF" },
      { icon: "sanitizer",                  label: "Deep Restoration",   price: "£90+", bg: "#0F1B33", iconColor: "#1E90FF" },
    ],
  },
  {
    group: "Full Valets",
    items: [
      { icon: "local_car_wash",             label: "Mini Valet",         price: "£55",   bg: "#0F1B33", iconColor: "#1E90FF" },
      { icon: "auto_awesome",               label: "Full Valet",         price: "£95",   bg: "#0F1B33", iconColor: "#1E90FF" },
      { icon: "workspace_premium",          label: "Ultimate Detail",    price: "£140+", bg: "#0F1B33", iconColor: "#1E90FF" },
    ],
  },
];

const SECONDARY_LINKS = ["Home", "Gallery", "Contact"];

function Navbar({ onBook, onNav, active = "Home" }) {
  const { Button } = window.ReviveRefineDesignSystem_38ca5a;
  const links = ["Home", "Services", "Contact", "Gallery"];
  const [scrolled, setScrolled]       = React.useState(false);
  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [megaOpen, setMegaOpen]       = React.useState(false);
  const [mobileOpen, setMobileOpen]   = React.useState(false);
  const megaTimeout = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNav = (page) => { setMobileOpen(false); onNav && onNav(page); };
  const handleBook = () => { setMobileOpen(false); window.open(INSTAGRAM_URL_NAV, "_blank"); };
  const openMega = () => { clearTimeout(megaTimeout.current); setMegaOpen(true); };
  const closeMega = () => { megaTimeout.current = setTimeout(() => setMegaOpen(false), 120); };

  return (
    <>
      <style>{`
        @keyframes fadeInDown { from{opacity:0;transform:translateX(-50%) translateY(-6px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
        @keyframes rrMenuIn { from{opacity:0} to{opacity:1} }
        .rr-desktop{display:flex}.rr-desktop-book{display:flex}.rr-hamburger{display:none}
        @media(max-width:600px){
          .rr-desktop{display:none!important}.rr-desktop-book{display:none!important}.rr-hamburger{display:flex!important}
          .rr-nav-inner{display:flex!important;justify-content:space-between!important}
        }
      `}</style>

      <div style={{ position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",justifyContent:"center",padding:scrolled?"12px 24px":"0",transition:"padding 0.3s ease",pointerEvents:"none" }}>
        <header className="scheme-3" style={{ pointerEvents:"all",display:"flex",alignItems:"center",width:"100%",maxWidth:scrolled?"860px":"100%",minHeight:scrolled?"3.2rem":"4.5rem",padding:scrolled?"0 20px":"0 5%",borderRadius:scrolled?999:0,border:scrolled?"1px solid rgba(255,255,255,0.10)":"none",borderBottom:scrolled?"1px solid rgba(255,255,255,0.10)":"1px solid var(--scheme-border)",background:"#050B18",boxShadow:scrolled?"0 4px 24px rgba(0,0,0,0.45)":"none",transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",overflow:"visible" }}>
          <div className="rr-nav-inner" style={{ display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",width:"100%",position:"relative" }}>

            <a href="#" onClick={(e)=>{ e.preventDefault(); handleNav("Home"); }} style={{ display:"flex",alignItems:"center" }}>
              <img src="./assets/images/logo.png" alt="H2O Mobile Detailing" style={{ height:scrolled?56:90,objectFit:"contain",transition:"height 0.35s cubic-bezier(0.4,0,0.2,1)" }} />
            </a>

            <nav className="rr-desktop" style={{ gap:scrolled?20:28,justifyContent:"center" }}>
              {links.map((l) => l === "Services" ? (
                <div key={l} style={{ position:"relative",display:"flex",alignItems:"center" }} onMouseEnter={()=>{ setHoveredLink(l); openMega(); }} onMouseLeave={()=>{ setHoveredLink(null); closeMega(); }}>
                  <a href="#" onClick={(e)=>{ e.preventDefault(); handleNav(l); }} style={{ fontFamily:"var(--font-body)",fontSize:scrolled?14:15,fontWeight:500,textDecoration:"none",color:active===l||hoveredLink===l?"#FFFFFF":"#93A1B8",borderBottom:active===l?"2px solid var(--accent)":"2px solid transparent",paddingBottom:2,display:"inline-flex",alignItems:"center",gap:4,transition:"color 0.15s ease" }}>
                    {l} <span style={{ fontSize:10,opacity:0.6,marginTop:1 }}>▾</span>
                  </a>
                  {megaOpen && (
                    <div style={{ position:"absolute",top:"calc(100% + 24px)",left:"50%",transform:"translateX(-50%)",background:"#0A0F1E",borderRadius:14,boxShadow:"0 8px 40px rgba(0,0,0,0.55)",border:"1px solid #16233D",padding:"20px 24px 16px",display:"grid",gridTemplateColumns:"repeat(3,190px)",gap:"0 24px",minWidth:600,zIndex:200,animation:"fadeInDown 0.15s ease" }}>
                      {SERVICE_MENU.map((col) => (
                        <div key={col.group}>
                          <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#93A1B8",margin:"0 0 10px" }}>{col.group}</p>
                          {col.items.map((item) => (
                            <a key={item.label} href="#" onClick={(e)=>{ e.preventDefault(); handleNav("Services"); setMegaOpen(false); }} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,padding:"7px 8px",borderRadius:8,textDecoration:"none",marginBottom:2,transition:"background 0.12s ease" }} onMouseEnter={(e)=>e.currentTarget.style.background="#16233D"} onMouseLeave={(e)=>e.currentTarget.style.background="transparent"}>
                              <span style={{ display:"flex",alignItems:"center",gap:10 }}>
                                <span className="material-symbols-rounded" style={{ fontSize:18,color:"var(--accent)" }}>{item.icon}</span>
                                <span style={{ fontSize:14,fontWeight:600,color:"#FFFFFF" }}>{item.label}</span>
                              </span>
                              <span style={{ fontSize:12,color:"#93A1B8",whiteSpace:"nowrap" }}>{item.price}</span>
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={l} href="#" onClick={(e)=>{ e.preventDefault(); handleNav(l); }} onMouseEnter={()=>setHoveredLink(l)} onMouseLeave={()=>setHoveredLink(null)} style={{ fontFamily:"var(--font-body)",fontSize:scrolled?14:15,fontWeight:500,textDecoration:"none",color:active===l||hoveredLink===l?"#FFFFFF":"#93A1B8",borderBottom:active===l?"2px solid var(--accent)":"2px solid transparent",paddingBottom:2,transition:"color 0.15s ease" }}>
                  {l}
                </a>
              ))}
            </nav>

            <div className="rr-desktop-book" style={{ justifyContent:"flex-end" }}>
              <Button variant="primary" size="sm" onClick={handleBook}>Book</Button>
            </div>

            <div className="rr-hamburger" style={{ alignItems:"center" }}>
              <button onClick={()=>setMobileOpen(o=>!o)} aria-label="Menu" style={{ background:"none",border:"none",cursor:"pointer",padding:8,display:"flex",flexDirection:"column",gap:5,alignItems:"center",justifyContent:"center" }}>
                <span style={{ display:"block",width:22,height:2,background:"#FFFFFF",borderRadius:2,transform:mobileOpen?"translateY(7px) rotate(45deg)":"none",transition:"transform 0.22s ease" }} />
                <span style={{ display:"block",width:22,height:2,background:"#FFFFFF",borderRadius:2,opacity:mobileOpen?0:1,transition:"opacity 0.15s ease" }} />
                <span style={{ display:"block",width:22,height:2,background:"#FFFFFF",borderRadius:2,transform:mobileOpen?"translateY(-7px) rotate(-45deg)":"none",transition:"transform 0.22s ease" }} />
              </button>
            </div>
          </div>
        </header>
      </div>

      {mobileOpen && (
        <div data-mobile-menu style={{ position:"fixed",inset:0,zIndex:200,display:"flex",flexDirection:"column",animation:"rrMenuIn 0.18s ease",background:"#050B18" }}>
          <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 20px 16px" }}>
            <img src="./assets/images/logo.png" alt="H2O Mobile Detailing" style={{ height:44,objectFit:"contain" }} />
            <button onClick={()=>setMobileOpen(false)} aria-label="Close" style={{ background:"none",border:"none",cursor:"pointer",fontSize:22,color:"#FFFFFF",lineHeight:1,padding:"4px 8px",fontWeight:300 }}>✕</button>
          </div>

          <div style={{ flex:1,overflowY:"auto",paddingBottom:72 }}>
            {SERVICE_MENU.map((group) => (
              <div key={group.group} style={{ marginBottom:8 }}>
                <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",margin:0,padding:"10px 20px 6px" }}>{group.group}</p>
                <div style={{ background:"#0A0F1E" }}>
                  {group.items.map((item, i) => (
                    <a key={item.label} href="#" onClick={(e)=>{ e.preventDefault(); handleNav("Services"); }} style={{ display:"flex",alignItems:"center",gap:14,padding:"12px 20px",textDecoration:"none",borderBottom:i<group.items.length-1?"1px solid rgba(255,255,255,0.07)":"none" }}>
                      <div style={{ width:42,height:42,borderRadius:10,background:item.bg,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                        <span className="material-symbols-rounded" style={{ fontSize:22,color:item.iconColor }}>{item.icon}</span>
                      </div>
                      <span style={{ flex:1,fontSize:16,fontWeight:500,color:"#FFFFFF",fontFamily:"var(--font-body)" }}>{item.label}</span>
                      <span style={{ fontSize:13,color:"#93A1B8",fontWeight:400,whiteSpace:"nowrap" }}>{item.price}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ height:1,background:"rgba(255,255,255,0.12)",margin:"12px 0" }} />
            {SECONDARY_LINKS.map((l) => (
              <a key={l} href="#" onClick={(e)=>{ e.preventDefault(); handleNav(l); }} style={{ display:"block",padding:"13px 20px",fontSize:16,fontWeight:400,color:"#FFFFFF",textDecoration:"none",fontFamily:"var(--font-body)" }}>{l}</a>
            ))}
          </div>

          <div style={{ position:"absolute",bottom:0,left:0,right:0,height:64,display:"flex",borderTop:"1px solid rgba(255,255,255,0.12)",background:"#050B18" }}>
            <a href="tel:+447591975194" style={{ flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:8,textDecoration:"none",color:"#FFFFFF",fontSize:15,fontWeight:500,borderRight:"1px solid rgba(255,255,255,0.12)",fontFamily:"var(--font-body)" }}>
              <span className="material-symbols-rounded" style={{ fontSize:19 }}>call</span>
              Call us
            </a>
            <button onClick={handleBook} style={{ flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"none",border:"none",cursor:"pointer",color:"var(--accent)",fontSize:15,fontWeight:600,fontFamily:"var(--font-body)" }}>
              <span className="material-symbols-rounded" style={{ fontSize:19 }}>chat</span>
              DM to book
            </button>
          </div>
        </div>
      )}
    </>
  );
}

window.RRNavbar = Navbar;
