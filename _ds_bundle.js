/* @ds-bundle: {"format":3,"namespace":"ReviveRefineDesignSystem_38ca5a","components":[{"name":"Badge","sourcePath":"components/actions/Badge.jsx"},{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Radio","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"CardBody","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/actions/Badge.jsx":"58a39c5cf98c","components/actions/Button.jsx":"3a42d221416f","components/forms/Checkbox.jsx":"4f09ef20a890","components/forms/Input.jsx":"6b1ba1105e9d","components/forms/RadioGroup.jsx":"037e3ee793c2","components/forms/Select.jsx":"51a1a3331713","components/forms/Textarea.jsx":"485251398541","components/surfaces/Card.jsx":"4d85bfdf7367","ios-frame.jsx":"be3343be4b51","ui_kits/website/BookingPage.jsx":"eaac447f26d8","ui_kits/website/Footer.jsx":"3612b8f7b005","ui_kits/website/GalleryPage.jsx":"7541c5348435","ui_kits/website/Icons.jsx":"16e6fc30bb80","ui_kits/website/Navbar.jsx":"a05367f7de58","ui_kits/website/Sections.jsx":"6d5431c2bfb8","ui_kits/website/ServicesPage.jsx":"f5efa1d02ae1","ui_kits/website/Shared.jsx":"3ce7574e42ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ReviveRefineDesignSystem_38ca5a = window.ReviveRefineDesignSystem_38ca5a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive & Refine — Badge
 * Small pill label. Outline by default; `solid` (gold) and `inverse` for
 * dark sections. Use for service tags, statuses, and category chips.
 */
function Badge({
  children,
  variant = "outline",
  style = {},
  ...props
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.375rem",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-small)",
    fontWeight: "var(--weight-medium)",
    lineHeight: 1,
    padding: "0.375rem 0.75rem",
    borderRadius: "var(--radius-badge)",
    border: "1px solid transparent",
    whiteSpace: "nowrap"
  };
  const variants = {
    outline: {
      background: "transparent",
      borderColor: "var(--scheme-border, var(--border-subtle))",
      color: "var(--scheme-text, var(--text-strong))"
    },
    solid: {
      background: "var(--accent)",
      color: "var(--accent-contrast)"
    },
    muted: {
      background: "var(--color-mongoose-lighter)",
      color: "var(--color-mongoose-darker)"
    },
    inverse: {
      background: "var(--color-white)",
      color: "var(--color-neutral-darkest)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Badge.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Revive & Refine — Button
 * Full-pill button. Primary = gold (mongoose) on light; use `inverse` (solid
 * white) on dark scheme sections. Secondary is a 1px outline; link is text + icon.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...props
}) {
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: {
      padding: "0.5rem 1.25rem",
      fontSize: "1rem"
    },
    md: {
      padding: "0.625rem 1.5rem",
      fontSize: "1.125rem"
    },
    icon: {
      padding: 0,
      width: "2.5rem",
      height: "2.5rem",
      fontSize: "1.125rem"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-medium)",
    lineHeight: 1,
    borderRadius: "var(--radius-button)",
    border: "1px solid transparent",
    whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)",
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover ? "var(--accent-hover)" : "var(--accent)",
      borderColor: hover ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--accent-contrast)"
    },
    inverse: {
      background: hover ? "var(--color-neutral-lighter)" : "var(--color-white)",
      borderColor: hover ? "var(--color-neutral-lighter)" : "var(--color-white)",
      color: "var(--color-neutral-darkest)"
    },
    secondary: {
      background: hover ? "var(--scheme-bg, transparent)" : "transparent",
      borderColor: "var(--scheme-border, var(--border-subtle))",
      color: "var(--scheme-text, var(--text-strong))",
      filter: hover ? "brightness(0.97)" : "none"
    },
    link: {
      background: "transparent",
      borderColor: "transparent",
      color: "var(--scheme-text, var(--text-strong))",
      padding: 0,
      textDecoration: hover ? "underline" : "none",
      textUnderlineOffset: "3px"
    },
    ghost: {
      background: hover ? "var(--color-ink-5)" : "transparent",
      borderColor: "transparent",
      color: "var(--scheme-text, var(--text-strong))"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, props), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive & Refine — Checkbox
 * 18px square, 4px radius. Checked = ink fill (white on dark scheme).
 * Controlled via `checked` + `onChange`.
 */
function Checkbox({
  checked = false,
  disabled = false,
  onChange,
  id,
  style = {},
  ...props
}) {
  const box = {
    appearance: "none",
    width: "1.125rem",
    height: "1.125rem",
    flex: "none",
    margin: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--radius-checkbox)",
    border: "1px solid",
    borderColor: checked ? "var(--scheme-text, var(--border-strong))" : "var(--scheme-border, var(--border-subtle))",
    background: checked ? "var(--scheme-text, var(--color-neutral-darkest))" : "transparent",
    color: "var(--scheme-bg, var(--color-white))",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": checked,
    id: id,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      ...box,
      ...style
    }
  }, props), checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Revive & Refine — Input
 * Single-line text field. 1px outline, 12px radius, 44px min height.
 * Scheme-aware: inherits border/text from the active section scheme.
 */
function Input({
  type = "text",
  iconLeft = null,
  disabled = false,
  style = {},
  onFocus,
  onBlur,
  ...props
}) {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const wrap = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%"
  };
  const input = {
    width: "100%",
    minHeight: "2.75rem",
    padding: iconLeft ? "0.5rem 0.75rem 0.5rem 2.75rem" : "0.5rem 0.75rem",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-small)",
    color: "var(--scheme-text, var(--text-body))",
    background: hover && !focus ? "var(--color-ink-5)" : "transparent",
    border: "1px solid",
    borderColor: focus ? "var(--scheme-text, var(--border-strong))" : "var(--scheme-border, var(--border-subtle))",
    borderRadius: "var(--radius-input)",
    outline: "none",
    opacity: disabled ? 0.5 : 1,
    transition: "border-color var(--duration-fast) var(--ease-standard), background-color var(--duration-fast) var(--ease-standard)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "0.75rem",
      display: "flex",
      color: "var(--text-muted)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    disabled: disabled,
    style: {
      ...input,
      ...style
    },
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, props)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive & Refine — RadioGroup + Radio
 * 18px round control. Selected = ink fill with a center dot
 * (white fill on dark scheme). Compose Radio inside RadioGroup.
 */
function RadioGroup({
  value,
  onChange,
  children,
  style = {},
  ...props
}) {
  const items = React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, {
    checked: child.props.value === value,
    onSelect: () => onChange && onChange(child.props.value)
  }) : child);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: "grid",
      gap: "var(--space-3)",
      ...style
    }
  }, props), items);
}
function Radio({
  value,
  checked = false,
  disabled = false,
  onSelect,
  label,
  style = {}
}) {
  const dot = {
    appearance: "none",
    width: "1.125rem",
    height: "1.125rem",
    flex: "none",
    margin: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "1px solid",
    borderColor: checked ? "var(--scheme-text, var(--border-strong))" : "var(--scheme-border, var(--border-subtle))",
    background: checked ? "var(--scheme-text, var(--color-neutral-darkest))" : "transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)"
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.625rem",
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-small)",
      color: "var(--scheme-text, var(--text-body))",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "radio",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onSelect && onSelect(),
    style: dot
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "0.5rem",
      height: "0.5rem",
      borderRadius: "50%",
      background: "var(--scheme-bg, var(--color-white))"
    }
  })), label);
}
Object.assign(__ds_scope, { RadioGroup, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect
} = React;
/**
 * Revive & Refine — Select
 * Lightweight custom dropdown matching the Input shell (12px radius, 44px).
 * Controlled via `value` + `onChange`. Options: [{ value, label }].
 */
function Select({
  value,
  onChange,
  options = [],
  placeholder = "Select…",
  disabled = false,
  style = {}
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const selected = options.find(o => o.value === value);
  const trigger = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.5rem",
    width: "100%",
    minHeight: "2.75rem",
    padding: "0.5rem 0.75rem",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-small)",
    textAlign: "left",
    color: selected ? "var(--scheme-text, var(--text-body))" : "var(--text-placeholder)",
    background: "transparent",
    border: "1px solid",
    borderColor: open ? "var(--scheme-text, var(--border-strong))" : "var(--scheme-border, var(--border-subtle))",
    borderRadius: "var(--radius-input)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1
  };
  const menu = {
    position: "absolute",
    top: "calc(100% + 4px)",
    left: 0,
    right: 0,
    zIndex: 50,
    padding: "0.25rem",
    background: "var(--scheme-bg, var(--surface-card))",
    border: "1px solid var(--scheme-border, var(--border-subtle))",
    borderRadius: "var(--radius-input)",
    boxShadow: "var(--shadow-md)",
    maxHeight: "16rem",
    overflowY: "auto"
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: trigger
  }, /*#__PURE__*/React.createElement("span", null, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--duration-fast) var(--ease-standard)",
      color: "var(--scheme-text, var(--text-body))"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: menu
  }, options.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      onClick: () => {
        onChange && onChange(o.value);
        setOpen(false);
      },
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "0.5rem 0.625rem",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-small)",
        textAlign: "left",
        color: "var(--scheme-text, var(--text-body))",
        background: active ? "var(--color-ink-5)" : "transparent",
        border: "none",
        borderRadius: "calc(var(--radius-input) - 4px)",
        cursor: "pointer"
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = "var(--color-ink-5)";
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = "transparent";
      }
    }, o.label, active && /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    })));
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Revive & Refine — Textarea
 * Multi-line text field matching Input styling.
 */
function Textarea({
  rows = 4,
  disabled = false,
  style = {},
  onFocus,
  onBlur,
  ...props
}) {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const ta = {
    width: "100%",
    minHeight: "2.75rem",
    padding: "0.75rem",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-small)",
    lineHeight: "var(--leading-body)",
    color: "var(--scheme-text, var(--text-body))",
    background: hover && !focus ? "var(--color-ink-5)" : "transparent",
    border: "1px solid",
    borderColor: focus ? "var(--scheme-text, var(--border-strong))" : "var(--scheme-border, var(--border-subtle))",
    borderRadius: "var(--radius-input)",
    outline: "none",
    resize: "vertical",
    opacity: disabled ? 0.5 : 1,
    transition: "border-color var(--duration-fast) var(--ease-standard), background-color var(--duration-fast) var(--ease-standard)"
  };
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    style: {
      ...ta,
      ...style
    },
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, props));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive & Refine — Card
 * Outlined surface (1px border, 8px radius) — the brand's default container.
 * `transparent` keeps the border but drops the fill for use over imagery.
 */
function Card({
  children,
  variant = "default",
  style = {},
  ...props
}) {
  const base = {
    borderRadius: "var(--radius-card)",
    border: "1px solid var(--scheme-border, var(--border-subtle))",
    overflow: "hidden"
  };
  const variants = {
    default: {
      background: "var(--scheme-bg, var(--surface-card))",
      color: "var(--scheme-text, var(--text-body))"
    },
    transparent: {
      background: "transparent",
      borderColor: "var(--color-white)",
      color: "var(--color-white)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, props), children);
}
function CardBody({
  children,
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "var(--space-8)",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card, CardBody });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookingPage.jsx
try { (() => {
/* Revive & Refine — Booking / contact page. Matches the Relume sitemap:
   header → "Studio or mobile" options → "Ready to transform" CTA →
   "Get in touch" contact form → "Find us" → "Questions" FAQ → still-have-questions. */

const FAQS = [{
  q: "How long does detailing take?",
  a: "Time depends on your service choice and car condition. Essential packages run shorter, while Signature treatments take longer for thorough work. We'll give you exact timing when you book."
}, {
  q: "What should I prepare?",
  a: "For studio visits, just bring your keys. For mobile appointments, ensure we have clear access to your car and a power source if needed. We handle the rest."
}, {
  q: "Can I cancel or reschedule?",
  a: "Yes. Contact us as soon as possible if plans change. We're flexible and will work with you to find another time that suits."
}, {
  q: "Do you offer same-day appointments?",
  a: "Depending on availability, we sometimes can. Get in touch and we'll see what we can arrange for you."
}, {
  q: "What areas do you service?",
  a: "We're based in Doncaster and cover surrounding areas for mobile appointments. For locations outside our usual range, contact us to discuss options."
}];
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-small)",
      fontWeight: 600,
      marginBottom: "var(--space-2)"
    }
  }, label), children);
}
function ContactForm() {
  const NS = window.ReviveRefineDesignSystem_38ca5a;
  const {
    Button,
    Input,
    Textarea,
    Select,
    RadioGroup,
    Radio,
    Checkbox,
    Card,
    CardBody
  } = NS;
  const Icon = window.RRIcon;
  const [service, setService] = React.useState("");
  const [type, setType] = React.useState("studio");
  const [agree, setAgree] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  const canSubmit = name && email && service && agree;
  if (done) {
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardBody, {
      style: {
        textAlign: "center",
        padding: "var(--space-12)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        width: 64,
        height: 64,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background: "var(--color-mongoose-lighter)",
        marginBottom: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 36,
      style: {
        color: "var(--color-mongoose-darker)"
      }
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        marginBottom: "var(--space-3)"
      }
    }, "Enquiry received"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--text-muted)",
        marginBottom: "var(--space-6)"
      }
    }, "Thanks ", name.split(" ")[0], " \u2014 we'll confirm your ", type, " appointment by email within one working day."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDone(false)
    }, "New enquiry")));
  }
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (canSubmit) setDone(true);
    },
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Jane Doe",
    value: name,
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "jane@email.com",
    value: email,
    onChange: e => setEmail(e.target.value)
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Preferred service"
  }, /*#__PURE__*/React.createElement(Select, {
    value: service,
    onChange: setService,
    placeholder: "Select a service",
    options: [{
      value: "valeting",
      label: "Valeting"
    }, {
      value: "detailing",
      label: "Detailing"
    }, {
      value: "gloss",
      label: "Gloss enhancement"
    }, {
      value: "paint",
      label: "Paint correction"
    }, {
      value: "ceramic",
      label: "Ceramic protection"
    }, {
      value: "interior",
      label: "Interior cleaning"
    }]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Appointment type"
  }, /*#__PURE__*/React.createElement(RadioGroup, {
    value: type,
    onChange: setType,
    style: {
      gridAutoFlow: "column",
      justifyContent: "start",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    value: "studio",
    label: "Studio visit"
  }), /*#__PURE__*/React.createElement(Radio, {
    value: "mobile",
    label: "Mobile service"
  }))), type === "mobile" && /*#__PURE__*/React.createElement(Field, {
    label: "Your location"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Postcode or address"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Message"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "Tell us about your vehicle, its condition, and what you'd like done."
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: agree,
    onChange: setAgree
  }), " I agree to be contacted about my enquiry."), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    disabled: !canSubmit,
    style: {
      width: "100%"
    }
  }, "Send enquiry"))));
}
function BookingPage({
  onNav
}) {
  const {
    Button,
    Card,
    CardBody
  } = window.ReviveRefineDesignSystem_38ca5a;
  const Icon = window.RRIcon;
  const SECTION = window.RR_SECTION,
    CONTAINER = window.RR_CONTAINER;
  const Head = window.RRSectionHead;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: {
      padding: "var(--section-y-lg) 5% var(--section-y-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      maxWidth: "var(--container-md)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Book your appointment"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-medium)",
      color: "var(--text-muted)"
    }
  }, "Choose studio or mobile detailing. We come to you or you come to us."))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: {
      ...CONTAINER,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center",
      padding: "var(--section-y-sm) 5%"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "var(--space-3)",
      fontWeight: 600,
      color: "var(--text-muted)"
    }
  }, "Options"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Studio or mobile, your choice"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-medium)",
      color: "var(--text-muted)",
      marginBottom: "var(--space-8)"
    }
  }, "We work where it suits you. Bring your car to our Doncaster studio or we'll come to your home or workplace in the surrounding area."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "store",
    size: 32,
    style: {
      color: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("h6", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-h6)",
      margin: "var(--space-3) 0 var(--space-2)"
    }
  }, "Studio visit"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-small)"
    }
  }, "Visit us in Doncaster for a full detailing experience.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "directions_car",
    size: 32,
    style: {
      color: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("h6", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-h6)",
      margin: "var(--space-3) 0 var(--space-2)"
    }
  }, "Mobile service"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-small)"
    }
  }, "We arrive at your location with everything we need.")))), /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/gallery-1.jpg",
    alt: "Studio or mobile",
    style: {
      width: "100%",
      borderRadius: "var(--radius-image)",
      objectFit: "cover",
      aspectRatio: "4 / 3"
    }
  })), /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: SECTION,
    id: "enquiry"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      maxWidth: "var(--container-lg)"
    }
  }, /*#__PURE__*/React.createElement(Head, {
    eyebrow: "Enquire",
    title: "Get in touch",
    sub: "Send us a few details and we'll tailor a recommendation for your vehicle."
  }), /*#__PURE__*/React.createElement(ContactForm, null))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: CONTAINER
  }, /*#__PURE__*/React.createElement(Head, {
    eyebrow: "Where",
    title: "Find us",
    sub: "Studio in Doncaster, or we come to you.",
    align: "left",
    max: "var(--container-md)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-12)"
    }
  }, [{
    img: "./assets/images/gallery-0.jpg",
    h: "Studio",
    p: "Unit 4, Refine Works, Doncaster, South Yorkshire DN4",
    link: "Get directions"
  }, {
    img: "./assets/images/benefits.jpg",
    h: "Mobile service",
    p: "Surrounding areas within 15 miles of Doncaster city centre",
    link: "Service area"
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: c.h,
    style: {
      width: "100%",
      aspectRatio: "3 / 2",
      objectFit: "cover",
      borderRadius: "var(--radius-image)",
      marginBottom: "var(--space-6)"
    }
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      marginBottom: "var(--space-3)"
    }
  }, c.h), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, c.p), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron_right",
      size: 20
    })
  }, c.link))))))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      maxWidth: "var(--container-lg)"
    }
  }, /*#__PURE__*/React.createElement(Head, {
    title: "Questions",
    sub: "Everything you need to know about booking with us."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-10)"
    }
  }, FAQS.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.q
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-medium)",
      fontWeight: 700,
      marginBottom: "var(--space-3)"
    }
  }, f.q), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, f.a)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-sm)",
      margin: "var(--space-16) auto 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      marginBottom: "var(--space-3)"
    }
  }, "Still have questions?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-medium)",
      color: "var(--text-muted)",
      marginBottom: "var(--space-6)"
    }
  }, "Reach out and we'll answer anything else."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      const el = document.getElementById("enquiry");
      if (el) window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
  }, "Contact")))));
}
window.RRBookingPage = BookingPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookingPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Revive & Refine — Footer: brand-forward layout */

function Footer({
  onNav
}) {
  const linksLeft = ["Home", "Services", "Contact", "Gallery"];
  const linksRight = ["About us", "FAQ"];
  const legal = ["Privacy policy", "Terms of service", "Cookie settings"];
  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [hoveredContact, setHoveredContact] = React.useState(null);
  const [hoveredSocial, setHoveredSocial] = React.useState(null);
  const socials = [{
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/revive_refine_detailing",
    svg: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5",
      ry: "5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17.5",
      y1: "6.5",
      x2: "17.51",
      y2: "6.5"
    }))
  }, {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/people/Revive-Refine-Auto-Detailing/61576732828915",
    svg: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    }))
  }, {
    key: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/447916308660",
    svg: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
    }))
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "scheme-3",
    style: {
      borderTop: "1px solid var(--scheme-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xxl)",
      margin: "0 auto",
      padding: "var(--space-16) 5% var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav("Home");
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/logo.png",
    alt: "Revive & Refine",
    style: {
      height: 64,
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-medium)",
      color: "var(--text-muted)",
      fontStyle: "italic",
      margin: 0,
      maxWidth: "22rem",
      textAlign: "right"
    }
  }, "Premium car detailing in Doncaster \u2014 studio & mobile.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--scheme-border)",
      marginBottom: "var(--space-10)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gap: "var(--space-8)",
      marginBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0 var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-tiny)",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      margin: "0 0 var(--space-4)"
    }
  }, "Pages"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, linksLeft.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav(l);
    },
    onMouseEnter: () => setHoveredLink(l),
    onMouseLeave: () => setHoveredLink(null),
    style: {
      fontSize: "var(--text-small)",
      textDecoration: "none",
      color: hoveredLink === l ? "var(--text-strong)" : "var(--text-muted)",
      transition: "color 0.15s ease"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-tiny)",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      margin: "0 0 var(--space-4)"
    }
  }, "Company"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, linksRight.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav(l);
    },
    onMouseEnter: () => setHoveredLink(l),
    onMouseLeave: () => setHoveredLink(null),
    style: {
      fontSize: "var(--text-small)",
      textDecoration: "none",
      color: hoveredLink === l ? "var(--text-strong)" : "var(--text-muted)",
      transition: "color 0.15s ease"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-tiny)",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      margin: "0 0 var(--space-4)"
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+447916308660",
    onMouseEnter: () => setHoveredContact('phone'),
    onMouseLeave: () => setHoveredContact(null),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      textDecoration: "none",
      color: hoveredContact === 'phone' ? "var(--text-strong)" : "var(--text-muted)",
      fontSize: "var(--text-small)",
      transition: "color 0.15s ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 15
    }
  }, "call"), "+44 7916 308660"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:rrdetailingglasgow@gmail.com",
    onMouseEnter: () => setHoveredContact('email'),
    onMouseLeave: () => setHoveredContact(null),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      textDecoration: "none",
      color: hoveredContact === 'email' ? "var(--text-strong)" : "var(--text-muted)",
      fontSize: "var(--text-small)",
      transition: "color 0.15s ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 15
    }
  }, "mail"), "rrdetailingglasgow@gmail.com"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-tiny)",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      margin: "0 0 var(--space-4)"
    }
  }, "Follow"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.key,
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer",
    onMouseEnter: () => setHoveredSocial(s.key),
    onMouseLeave: () => setHoveredSocial(null),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      textDecoration: "none",
      color: hoveredSocial === s.key ? "var(--accent)" : "var(--text-muted)",
      fontSize: "var(--text-small)",
      transition: "color 0.15s ease"
    }
  }, s.svg, s.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-tiny)",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      margin: "0 0 var(--space-4)"
    }
  }, "Book now"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav("Contact");
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: "var(--accent)",
      color: "#1a1208",
      fontWeight: 700,
      fontSize: "var(--text-small)",
      padding: "10px 18px",
      borderRadius: 999,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 16
    }
  }, "calendar_month"), "Book a detail"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--scheme-border)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: "var(--space-6)",
      fontSize: "var(--text-small)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--scheme-muted)",
      margin: 0
    }
  }, "\xA9 2026 Revive & Refine Detailing. All rights reserved."), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, legal.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      textDecoration: "underline",
      color: "var(--scheme-muted)"
    }
  }, l)))))));
}
window.RRFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GalleryPage.jsx
try { (() => {
/* Revive & Refine — Gallery page. "Our work speaks" header + "Recent projects" grid. */

function GalleryPage({
  onBook
}) {
  const {
    Button
  } = window.ReviveRefineDesignSystem_38ca5a;
  const SECTION = window.RR_SECTION,
    CONTAINER = window.RR_CONTAINER;
  const Head = window.RRSectionHead;
  const projects = [{
    img: "./assets/images/gallery-0.jpg",
    cap: "Signature ceramic protection · Doncaster"
  }, {
    img: "./assets/images/gallery-1.jpg",
    cap: "Multi-stage paint correction · Audi RS3"
  }, {
    img: "./assets/images/benefits.jpg",
    cap: "Full interior detail · Range Rover"
  }, {
    img: "./assets/images/testimonial.jpg",
    cap: "Gloss enhancement · BMW M4"
  }, {
    img: "./assets/images/hero.jpg",
    cap: "Essential valet · Mobile service"
  }, {
    img: "./assets/images/gallery-0.jpg",
    cap: "Ceramic coating · Mercedes AMG"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: {
      padding: "var(--section-y-lg) 5% var(--section-y-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      maxWidth: "var(--container-md)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "var(--space-3)",
      fontWeight: 600,
      color: "var(--text-muted)"
    }
  }, "Gallery"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Our work speaks"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-medium)",
      color: "var(--text-muted)"
    }
  }, "Attention to detail, refined results. Every project showcases our commitment to excellence."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      justifyContent: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onBook
  }, "Book a detail"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Explore services")))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: CONTAINER
  }, /*#__PURE__*/React.createElement(Head, {
    title: "Recent projects",
    sub: "Each vehicle transformed with precision and care."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)"
    }
  }, projects.map((p, i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.cap,
    style: {
      width: "100%",
      aspectRatio: "1 / 1",
      objectFit: "cover",
      borderRadius: "var(--radius-image)"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-3)",
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, p.cap)))))));
}
window.RRGalleryPage = GalleryPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GalleryPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Revive & Refine — UI kit shared helpers.
   Material Symbols Rounded icon + star row. Exposed on window for sibling
   babel scripts (each <script type="text/babel"> has its own scope). */

function Icon({
  name,
  size = 24,
  weight = 400,
  fill = 0,
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "material-symbols-rounded",
    style: {
      fontSize: size,
      lineHeight: 1,
      fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
      userSelect: "none",
      ...style
    }
  }, props), name);
}
function Stars({
  count = 5,
  size = 18
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      color: "var(--accent)"
    }
  }, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: size,
    fill: 1
  })));
}
window.RRIcon = Icon;
window.RRStars = Stars;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Navbar.jsx
try { (() => {
/* Revive & Refine — Navbar. Desktop: shrinks to floating pill. Mobile: full-screen frosted menu. */

const SERVICE_MENU = [{
  group: "Cleaning",
  items: [{
    icon: "wash",
    label: "Valeting",
    price: "from £60",
    bg: "#FBF5E6",
    iconColor: "#B8902A"
  }, {
    icon: "cleaning_services",
    label: "Interior detail",
    price: "from £80",
    bg: "#FBF5E6",
    iconColor: "#B8902A"
  }]
}, {
  group: "Polish",
  items: [{
    icon: "auto_fix",
    label: "Detailing",
    price: "from £150",
    bg: "#FBF5E6",
    iconColor: "#B8902A"
  }, {
    icon: "lens_blur",
    label: "Gloss enhancement",
    price: "from £120",
    bg: "#FBF5E6",
    iconColor: "#B8902A"
  }, {
    icon: "auto_awesome",
    label: "Paint correction",
    price: "from £350",
    bg: "#FBF5E6",
    iconColor: "#B8902A"
  }]
}, {
  group: "Protection",
  items: [{
    icon: "shield",
    label: "Ceramic coating",
    price: "from £500",
    bg: "#FBF5E6",
    iconColor: "#B8902A"
  }]
}];
const SECONDARY_LINKS = ["Home", "Gallery", "Contact"];
function Navbar({
  onBook,
  onNav,
  active = "Home"
}) {
  const {
    Button
  } = window.ReviveRefineDesignSystem_38ca5a;
  const links = ["Home", "Services", "Contact", "Gallery"];
  const [scrolled, setScrolled] = React.useState(false);
  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [megaOpen, setMegaOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const megaTimeout = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const handleNav = page => {
    setMobileOpen(false);
    onNav && onNav(page);
  };
  const handleBook = () => {
    setMobileOpen(false);
    onBook && onBook();
  };
  const openMega = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 120);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        @keyframes fadeInDown {
          from { opacity:0; transform:translateX(-50%) translateY(-6px); }
          to   { opacity:1; transform:translateX(-50%) translateY(0); }
        }
        @keyframes rrMenuIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        .rr-desktop { display:flex; }
        .rr-desktop-book { display:flex; }
        .rr-hamburger { display:none; }
        @media (max-width:600px) {
          .rr-desktop { display:none !important; }
          .rr-desktop-book { display:none !important; }
          .rr-hamburger { display:flex !important; }
          .rr-nav-inner { display:flex !important; justify-content:space-between !important; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: "flex",
      justifyContent: "center",
      padding: scrolled ? "12px 24px" : "0",
      transition: "padding 0.3s ease",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "scheme-3",
    style: {
      pointerEvents: "all",
      display: "flex",
      alignItems: "center",
      width: "100%",
      maxWidth: scrolled ? "860px" : "100%",
      minHeight: scrolled ? "3.2rem" : "4.5rem",
      padding: scrolled ? "0 20px" : "0 5%",
      borderRadius: scrolled ? 999 : 0,
      border: scrolled ? "1px solid rgba(0,0,0,0.10)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.10)" : "1px solid var(--scheme-border)",
      backdropFilter: "saturate(160%) blur(12px)",
      background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.85)",
      boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.10)" : "none",
      transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rr-nav-inner",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      width: "100%",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      handleNav("Home");
    },
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/logo.png",
    alt: "Revive & Refine",
    style: {
      height: scrolled ? 56 : 90,
      objectFit: "contain",
      transition: "height 0.35s cubic-bezier(0.4,0,0.2,1)"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "rr-desktop",
    style: {
      gap: scrolled ? 20 : 28,
      justifyContent: "center"
    }
  }, links.map(l => l === "Services" ? /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    },
    onMouseEnter: () => {
      setHoveredLink(l);
      openMega();
    },
    onMouseLeave: () => {
      setHoveredLink(null);
      closeMega();
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      handleNav(l);
    },
    style: {
      fontFamily: "var(--font-body)",
      fontSize: scrolled ? 14 : 15,
      fontWeight: 500,
      textDecoration: "none",
      color: active === l || hoveredLink === l ? "var(--text-strong)" : "var(--text-muted)",
      borderBottom: active === l ? "2px solid var(--accent)" : "2px solid transparent",
      paddingBottom: 2,
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      transition: "color 0.15s ease"
    }
  }, l, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      opacity: 0.6,
      marginTop: 1
    }
  }, "\u25BE")), megaOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 24px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#fff",
      borderRadius: 14,
      boxShadow: "0 8px 40px rgba(0,0,0,0.13)",
      border: "1px solid rgba(0,0,0,0.07)",
      padding: "20px 24px 16px",
      display: "grid",
      gridTemplateColumns: "repeat(3,180px)",
      gap: "0 24px",
      minWidth: 580,
      zIndex: 200,
      animation: "fadeInDown 0.15s ease"
    }
  }, SERVICE_MENU.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.group
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      margin: "0 0 10px"
    }
  }, col.group), col.items.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.label,
    href: "#",
    onClick: e => {
      e.preventDefault();
      handleNav("Services");
      setMegaOpen(false);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "7px 8px",
      borderRadius: 8,
      textDecoration: "none",
      marginBottom: 2,
      transition: "background 0.12s ease"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--color-neutral-lightest)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 18,
      color: "var(--accent)"
    }
  }, item.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, item.label))))))) : /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      handleNav(l);
    },
    onMouseEnter: () => setHoveredLink(l),
    onMouseLeave: () => setHoveredLink(null),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: scrolled ? 14 : 15,
      fontWeight: 500,
      textDecoration: "none",
      color: active === l || hoveredLink === l ? "var(--text-strong)" : "var(--text-muted)",
      borderBottom: active === l ? "2px solid var(--accent)" : "2px solid transparent",
      paddingBottom: 2,
      transition: "color 0.15s ease"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "rr-desktop-book",
    style: {
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: handleBook
  }, "Book")), /*#__PURE__*/React.createElement("div", {
    className: "rr-hamburger",
    style: {
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMobileOpen(o => !o),
    "aria-label": "Menu",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 8,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 22,
      height: 2,
      background: "var(--text-strong)",
      borderRadius: 2,
      transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none",
      transition: "transform 0.22s ease"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 22,
      height: 2,
      background: "var(--text-strong)",
      borderRadius: 2,
      opacity: mobileOpen ? 0 : 1,
      transition: "opacity 0.15s ease"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 22,
      height: 2,
      background: "var(--text-strong)",
      borderRadius: 2,
      transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none",
      transition: "transform 0.22s ease"
    }
  })))))), mobileOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 200,
      display: "flex",
      flexDirection: "column",
      animation: "rrMenuIn 0.18s ease",
      backdropFilter: "blur(28px) saturate(160%)",
      WebkitBackdropFilter: "blur(28px) saturate(160%)",
      background: "rgba(235,235,240,0.88)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 20px 16px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/logo.png",
    alt: "Revive & Refine",
    style: {
      height: 44,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMobileOpen(false),
    "aria-label": "Close",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 22,
      color: "#333",
      lineHeight: 1,
      padding: "4px 8px",
      fontWeight: 300
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      paddingBottom: 72
    }
  }, SERVICE_MENU.map(group => /*#__PURE__*/React.createElement("div", {
    key: group.group,
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#888",
      margin: 0,
      padding: "10px 20px 6px"
    }
  }, group.group), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff"
    }
  }, group.items.map((item, i) => /*#__PURE__*/React.createElement("a", {
    key: item.label,
    href: "#",
    onClick: e => {
      e.preventDefault();
      handleNav("Services");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 20px",
      textDecoration: "none",
      borderBottom: i < group.items.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 10,
      background: item.bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 22,
      color: item.iconColor
    }
  }, item.icon)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 16,
      fontWeight: 500,
      color: "#1a1a1a",
      fontFamily: "var(--font-body)"
    }
  }, item.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#999",
      fontWeight: 400,
      whiteSpace: "nowrap"
    }
  }, item.price)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(0,0,0,0.10)",
      margin: "12px 0"
    }
  }), SECONDARY_LINKS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      handleNav(l);
    },
    style: {
      display: "block",
      padding: "13px 20px",
      fontSize: 16,
      fontWeight: 400,
      color: "#444",
      textDecoration: "none",
      fontFamily: "var(--font-body)"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 64,
      display: "flex",
      borderTop: "1px solid rgba(0,0,0,0.10)",
      background: "rgba(235,235,240,0.97)",
      backdropFilter: "blur(12px)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+441234567890",
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      textDecoration: "none",
      color: "#1a1a1a",
      fontSize: 15,
      fontWeight: 500,
      borderRight: "1px solid rgba(0,0,0,0.10)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 19,
      fontVariationSettings: "'FILL' 0"
    }
  }, "call"), "Call us"), /*#__PURE__*/React.createElement("button", {
    onClick: handleBook,
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--accent)",
      fontSize: 15,
      fontWeight: 600,
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 19,
      fontVariationSettings: "'FILL' 0"
    }
  }, "mail"), "Book now"))));
}
window.RRNavbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* Revive & Refine — Home page sections. Responsive for mobile. */

const SECTION = {
  padding: "var(--section-y-md) 5%"
};
const CONTAINER = {
  maxWidth: "var(--container-xxl)",
  margin: "0 auto"
};
function Hero({
  onBook
}) {
  const {
    Button
  } = window.ReviveRefineDesignSystem_38ca5a;
  const isMobile = window.useIsMobile();
  return /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: isMobile ? "8rem 5% 0" : "12rem 5% 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: "52rem",
      marginBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: isMobile ? "clamp(2.8rem, 10vw, 3.5rem)" : "clamp(3.5rem, 6.5vw, 6rem)",
      lineHeight: 1.05,
      marginBottom: "var(--space-5)",
      fontWeight: 800
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)",
      display: "block"
    }
  }, "Detail done"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)",
      display: "block"
    }
  }, "differently.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-medium)",
      color: "var(--text-muted)",
      marginBottom: "var(--space-8)"
    }
  }, "Premium detailing in Doncaster. Studio & mobile."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onBook
  }, "Book a detail"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Our services"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "56rem",
      borderRadius: "var(--radius-image) var(--radius-image) 0 0",
      overflow: "hidden",
      boxShadow: "0 -4px 40px rgba(0,0,0,0.10)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/hero.jpg",
    alt: "Revive & Refine Detailing",
    style: {
      width: "100%",
      aspectRatio: "16 / 9",
      objectFit: "cover",
      objectPosition: "center 30%",
      display: "block"
    }
  })));
}
function FeatureIntro() {
  const Icon = window.RRIcon;
  const isMobile = window.useIsMobile();
  const steps = [{
    icon: "calendar_month",
    num: "01",
    title: "Book",
    body: "Choose studio or mobile and pick a time that suits you."
  }, {
    icon: "directions_car",
    num: "02",
    title: "We arrive",
    body: "Our team shows up fully equipped — no prep needed from you."
  }, {
    icon: "auto_awesome",
    num: "03",
    title: "We work",
    body: "Every surface treated with precision and premium products."
  }, {
    icon: "star",
    num: "04",
    title: "Results delivered",
    body: "You collect a car that looks and feels brand new."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: {
      ...SECTION,
      borderTop: "1px solid var(--scheme-border)",
      borderBottom: "1px solid var(--scheme-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CONTAINER
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      color: "var(--accent)",
      marginBottom: "var(--space-3)"
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", null, "Simple from start to finish")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
      gap: isMobile ? "var(--space-6)" : "var(--space-8)",
      position: "relative"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.num,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-tiny)",
      fontWeight: 700,
      color: "var(--accent)",
      letterSpacing: "0.08em"
    }
  }, s.num), !isMobile && i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--scheme-border)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      width: 44,
      height: 44,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-checkbox)",
      background: "var(--color-mongoose-lighter)",
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    style: {
      marginBottom: "var(--space-2)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-small)"
    }
  }, s.body)))))));
}
const SERVICES = [{
  icon: "wash",
  title: "Valeting",
  body: "A fresh, thorough wash inside and out.",
  price: "from £49"
}, {
  icon: "auto_fix",
  title: "Detailing",
  body: "Precision work on every surface.",
  price: "from £149"
}, {
  icon: "shield",
  title: "Protection",
  body: "Ceramic coatings that keep your finish new.",
  price: "from £299"
}, {
  icon: "airline_seat_recline_extra",
  title: "Interior",
  body: "Cabin cleaned, conditioned and protected.",
  price: "from £89"
}];
function ServicesList() {
  const {
    Card,
    CardBody
  } = window.ReviveRefineDesignSystem_38ca5a;
  const Icon = window.RRIcon;
  const isMobile = window.useIsMobile();
  const [hovered, setHovered] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: CONTAINER
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-md)",
      margin: "0 auto",
      textAlign: "center",
      marginBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "var(--space-3)",
      fontWeight: 600,
      color: "var(--accent)"
    }
  }, "Services"), /*#__PURE__*/React.createElement("h2", null, "Everything your car needs")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "var(--space-8)",
      alignItems: "stretch"
    }
  }, !isMobile && /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/services-feature.jpg",
    alt: "What we offer",
    style: {
      width: "100%",
      height: "100%",
      borderRadius: "var(--radius-image)",
      objectFit: "cover",
      aspectRatio: "4 / 5"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, isMobile && /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/services-feature.jpg",
    alt: "What we offer",
    style: {
      width: "100%",
      borderRadius: "var(--radius-image)",
      objectFit: "contain",
      marginBottom: "var(--space-4)"
    }
  }), SERVICES.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    onMouseEnter: () => setHovered(i),
    onMouseLeave: () => setHovered(null),
    style: {
      borderColor: "var(--color-neutral-lightest)",
      boxShadow: hovered === i ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
      transition: "transform 0.18s ease, box-shadow 0.18s ease",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(CardBody, {
    style: {
      padding: "var(--space-5) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-checkbox)",
      background: "var(--color-mongoose-lighter)",
      color: "var(--accent)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h5", {
    style: {
      fontSize: "var(--text-h6)"
    }
  }, s.title)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 20,
    style: {
      color: "var(--text-muted)",
      flex: "none"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-small)",
      marginTop: "var(--space-3)"
    }
  }, s.body), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--accent)",
      fontSize: "var(--text-small)",
      fontWeight: 600,
      marginTop: "var(--space-2)"
    }
  }, s.price))))))));
}
const BENEFITS = [{
  icon: "verified",
  title: "Premium products",
  body: "We use the best materials available, because your car deserves nothing less."
}, {
  icon: "search_check",
  title: "Meticulous attention",
  body: "Every detail matters. We don't rush. Your finish gets the time it needs."
}, {
  icon: "directions_car",
  title: "Flexible service",
  body: "Studio or mobile — we come to you or you come to us. Your choice, your schedule."
}];
function Benefits() {
  const {
    Button
  } = window.ReviveRefineDesignSystem_38ca5a;
  const Icon = window.RRIcon;
  const isMobile = window.useIsMobile();
  return /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: {
      ...SECTION,
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: CONTAINER
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "var(--space-8)" : "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: isMobile ? "var(--space-6)" : "var(--space-12)"
    }
  }, "Why choose us"), isMobile && /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/benefits.jpg",
    alt: "Detailing in progress",
    style: {
      width: "100%",
      borderRadius: "var(--radius-image)",
      objectFit: "cover",
      aspectRatio: "16 / 7",
      marginBottom: "var(--space-8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-8)"
    }
  }, BENEFITS.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.title,
    style: {
      display: "flex",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.icon,
    size: 44,
    style: {
      flex: "none",
      color: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    style: {
      marginBottom: "var(--space-2)"
    }
  }, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, b.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "More about us ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward",
    size: 18
  })))), !isMobile && /*#__PURE__*/React.createElement("img", {
    src: "./assets/images/benefits.jpg",
    alt: "Detailing in progress",
    style: {
      width: "100%",
      borderRadius: "var(--radius-image)",
      objectFit: "cover",
      aspectRatio: "4 / 5"
    }
  }))));
}
function Gallery({
  onNav
}) {
  const isMobile = window.useIsMobile();
  const [hovered, setHovered] = React.useState(null);
  const [btnHovered, setBtnHovered] = React.useState(false);
  const images = [{
    src: "gallery-full-valet.jpg",
    label: "Full Valet",
    sub: "Interior & exterior deep clean",
    pos: "center center"
  }, {
    src: "gallery-0.jpg",
    label: "Paint Correction",
    sub: "Swirl & scratch removal",
    pos: "center 30%"
  }, {
    src: "gallery-ceramic.jpg",
    label: "Ceramic Coating",
    sub: "Long-term paint protection",
    pos: "center center"
  }, {
    src: "gallery-interior.jpg",
    label: "Interior Detail",
    sub: "Cabin clean & conditioning",
    pos: "center center"
  }];
  const visibleImages = isMobile ? images.slice(0, 2) : images;
  return /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: CONTAINER
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      margin: "0 auto var(--space-12)",
      maxWidth: "var(--container-lg)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "var(--space-4)",
      fontWeight: 600,
      color: "var(--accent)"
    }
  }, "Our work"), /*#__PURE__*/React.createElement("h2", null, "Results that speak for themselves")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, visibleImages.map((img, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onMouseEnter: () => setHovered(i),
    onMouseLeave: () => setHovered(null),
    style: {
      border: "1px solid var(--color-neutral-lightest)",
      borderRadius: "var(--radius-image)",
      boxShadow: hovered === i ? "var(--shadow-md)" : "var(--shadow-sm)",
      overflow: "hidden",
      background: "var(--scheme-bg)",
      transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
      transition: "transform 0.18s ease, box-shadow 0.18s ease",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `./assets/images/${img.src}`,
    alt: img.label,
    style: {
      width: "100%",
      height: isMobile ? "14rem" : "22rem",
      objectFit: "cover",
      objectPosition: img.pos,
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      color: "var(--text-strong)",
      margin: 0
    }
  }, img.label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-muted)",
      margin: "var(--space-1) 0 0",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--accent)",
      flexShrink: 0
    }
  }), img.sub))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav("Gallery"),
    onMouseEnter: () => setBtnHovered(true),
    onMouseLeave: () => setBtnHovered(false),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--accent)",
      fontWeight: 600,
      fontSize: "var(--text-small)",
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: 0,
      opacity: btnHovered ? 0.7 : 1,
      transform: btnHovered ? "translateX(3px)" : "translateX(0)",
      transition: "opacity 0.15s ease, transform 0.15s ease"
    }
  }, "View full gallery ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1em"
    }
  }, "\u203A")))));
}
const QUOTES = [{
  stars: 5,
  quote: "They came to me. No hassle, and the car looked brand new.",
  name: "Sarah Chen",
  meta: "Range Rover Evoque · Mobile"
}, {
  stars: 5,
  quote: "The ceramic coating is unreal. Water just rolls off it now.",
  name: "Marcus Reed",
  meta: "BMW M4 · Studio"
}, {
  stars: 5,
  quote: "Paint correction removed years of swirls. Genuinely flawless.",
  name: "Priya Nair",
  meta: "Audi RS3 · Studio"
}, {
  stars: 5,
  quote: "Booked the full valet and couldn't believe the difference. Absolutely spotless.",
  name: "Jamie Thornton",
  meta: "VW Golf · Studio"
}, {
  stars: 5,
  quote: "Interior detail was brilliant — smells fresh and looks immaculate.",
  name: "Leila Hassan",
  meta: "Mercedes C-Class · Mobile"
}, {
  stars: 5,
  quote: "Professional, on time, and the finish is better than the showroom.",
  name: "Tom Griffiths",
  meta: "Ford Mustang · Studio"
}];
function Testimonials({
  onBook
}) {
  const {
    Card,
    CardBody
  } = window.ReviveRefineDesignSystem_38ca5a;
  const Stars = window.RRStars;
  const isMobile = window.useIsMobile();
  const [linkHovered, setLinkHovered] = React.useState(false);
  const [start, setStart] = React.useState(0);
  const PER_PAGE = isMobile ? 1 : 3;
  const total = QUOTES.length;
  const visible = Array.from({
    length: PER_PAGE
  }, (_, i) => QUOTES[(start + i) % total]);
  const ArrowBtn = ({
    onClick,
    icon
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: "50%",
      border: "1px solid var(--scheme-border)",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 20
    }
  }, icon));
  return /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: CONTAINER
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "var(--space-2)",
      fontWeight: 600,
      color: "var(--accent)"
    }
  }, "Reviews"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "What clients say")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
      gap: "var(--space-6)"
    }
  }, visible.map((q, i) => /*#__PURE__*/React.createElement(Card, {
    key: i
  }, /*#__PURE__*/React.createElement(CardBody, {
    style: {
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    count: q.stars
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-3) 0 var(--space-4)",
      fontSize: "var(--text-medium)",
      color: "var(--text-strong)"
    }
  }, "\"", q.quote, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, q.name), " \xB7 ", q.meta))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: "var(--space-4)",
      marginTop: "var(--space-8)",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(ArrowBtn, {
    icon: "arrow_back",
    onClick: () => setStart(s => (s - PER_PAGE + total) % total)
  }), /*#__PURE__*/React.createElement(ArrowBtn, {
    icon: "arrow_forward",
    onClick: () => setStart(s => (s + PER_PAGE) % total)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.google.com/search?q=Revive+%26+Refine+Detailing+reviews",
    target: "_blank",
    rel: "noopener noreferrer",
    onMouseEnter: () => setLinkHovered(true),
    onMouseLeave: () => setLinkHovered(false),
    style: {
      color: "var(--accent)",
      fontWeight: 600,
      fontSize: "var(--text-small)",
      textDecoration: "none",
      opacity: linkHovered ? 0.7 : 1,
      transition: "opacity 0.15s ease"
    }
  }, "See all on Google \u203A"))));
}
function Newsletter() {
  const {
    Button,
    Input
  } = window.ReviveRefineDesignSystem_38ca5a;
  const isMobile = window.useIsMobile();
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      maxWidth: "var(--container-md)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Stay informed on our packages"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-medium)",
      color: "var(--text-muted)"
    }
  }, "We're finalizing pricing. Be first to know when we launch."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "26rem",
      margin: "var(--space-8) auto 0"
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr max-content",
      gap: "var(--space-3)",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "Enter your email",
    required: true,
    disabled: sent
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary"
  }, sent ? "Added ✓" : "Notify me")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-tiny)",
      color: "var(--text-muted)"
    }
  }, "We'll only contact you about pricing and service updates."))));
}
Object.assign(window, {
  RRHero: Hero,
  RRFeatureIntro: FeatureIntro,
  RRServicesList: ServicesList,
  RRBenefits: Benefits,
  RRGallery: Gallery,
  RRTestimonials: Testimonials,
  RRNewsletter: Newsletter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Revive & Refine — Services page. Matches the Relume Services sitemap:
   "What we offer" grid → 6 alternating feature splits → pricing → "Ready to book?" */

const SERVICE_OFFER = [{
  title: "Valeting",
  body: "Thorough exterior and interior cleaning to restore a fresh, clean finish."
}, {
  title: "Detailing",
  body: "A meticulous, multi-stage process that goes beyond a standard clean to refine every surface."
}, {
  title: "Gloss enhancement",
  body: "A single-stage machine polish that removes light swirls and restores deep, reflective shine."
}, {
  title: "Paint correction",
  body: "Multi-stage machine polishing to eliminate scratches, swirls and oxidation."
}, {
  title: "Ceramic protection",
  body: "A professional-grade coating that bonds to paintwork for long-term, self-cleaning protection."
}, {
  title: "Interior cleaning",
  body: "Deep cleaning of every surface inside your vehicle, leaving it fresh and immaculate."
}];
const SERVICE_FEATURES = [{
  eyebrow: "Essential",
  title: "Valeting that keeps your car looking sharp",
  body: "A thorough clean inside and out, done right. We wash the exterior, vacuum the interior, and leave everything fresh.",
  bullets: ["Full exterior wash with wheel cleaning", "Interior vacuumed and surfaces wiped down", "Glass cleaned and tyres dressed"],
  img: "./assets/images/hero.jpg",
  reverse: false
}, {
  eyebrow: "Refined",
  title: "Multi-stage detailing for the discerning owner",
  body: "We work through every surface methodically. Paint, trim, glass, wheels, and interior all receive the treatment your car deserves.",
  bullets: ["Paint assessed and machine polished in stages", "Interior deep cleaned, conditioned, and protected", "Ceramic coating applied for lasting defence"],
  img: "./assets/images/benefits.jpg",
  reverse: true
}, {
  eyebrow: "Lustrous",
  title: "Bring back the depth and mirror shine",
  body: "Professional polish removes oxidation and swirls. The result is paintwork that catches light the way it should.",
  bullets: ["Removes oxidation and dullness", "Enhances colour depth and clarity", "Lasts months with proper care"],
  img: "./assets/images/gallery-0.jpg",
  reverse: false
}, {
  eyebrow: "Flawless",
  title: "Machine polishing for impeccable paintwork",
  body: "Swirls and scratches disappear under precision work. We restore the finish to what it should have been from the factory.",
  bullets: ["Targets swirls and light scratches", "Multi-stage process for depth", "Prepares surface for ceramic coating"],
  img: "./assets/images/gallery-1.jpg",
  reverse: true
}, {
  eyebrow: "Protected",
  title: "Ceramic coating that lasts",
  body: "Advanced ceramic bonds to your paint for months of protection. Water beads away, dirt slides off, and your finish stays glossy.",
  bullets: ["Professional-grade ceramic bonds permanently", "Water beads away, dirt slides clean", "Protection lasts up to two years"],
  img: "./assets/images/testimonial.jpg",
  reverse: false
}, {
  eyebrow: "Immaculate",
  title: "Every surface cleaned and cared for",
  body: "Fabric, leather, and plastics all receive the attention they need. We clean deep, condition where it matters, and leave your cabin fresh.",
  bullets: ["Fabric and carpet thoroughly cleaned", "Leather conditioned and protected", "Plastics and trim restored to life"],
  img: "./assets/images/hero.jpg",
  reverse: true
}];
const PRICING = [{
  name: "Essential",
  price: "$19",
  year: "or $199 yearly",
  features: ["Full exterior wash", "Interior vacuum", "Glass and tyres"]
}, {
  name: "Premium",
  price: "$29",
  year: "or $299 yearly",
  features: ["Everything in Essential", "Machine gloss enhancement", "Interior deep clean", "Trim restored"]
}, {
  name: "Signature",
  price: "$49",
  year: "or $499 yearly",
  features: ["Everything in Premium", "Multi-stage paint correction", "Ceramic coating", "Leather conditioning", "Two-year protection"]
}];
function PricingTier({
  tier,
  onBook
}) {
  const {
    Card,
    CardBody,
    Button,
    Badge
  } = window.ReviveRefineDesignSystem_38ca5a;
  const Icon = window.RRIcon;
  const featured = tier.name === "Premium";
  return /*#__PURE__*/React.createElement(Card, {
    style: featured ? {
      borderColor: "var(--accent)",
      borderWidth: 2
    } : {}
  }, /*#__PURE__*/React.createElement(CardBody, {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "var(--space-6)"
    }
  }, featured ? /*#__PURE__*/React.createElement(Badge, {
    variant: "solid",
    style: {
      marginBottom: "var(--space-3)"
    }
  }, "Most popular") : null, /*#__PURE__*/React.createElement("h6", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-h6)"
    }
  }, tier.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.1,
      margin: "var(--space-2) 0"
    }
  }, tier.price, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-medium)",
      color: "var(--text-muted)"
    }
  }, "/mo")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-small)"
    }
  }, tier.year)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      marginBottom: "var(--space-8)",
      flex: 1
    }
  }, tier.features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 22,
    style: {
      color: "var(--accent)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)"
    }
  }, f)))), /*#__PURE__*/React.createElement(Button, {
    variant: featured ? "primary" : "secondary",
    style: {
      width: "100%"
    },
    onClick: onBook
  }, "Get started")));
}
function ServicesPage({
  onBook
}) {
  const {
    Button
  } = window.ReviveRefineDesignSystem_38ca5a;
  const SECTION = window.RR_SECTION,
    CONTAINER = window.RR_CONTAINER;
  const FeatureSplit = window.RRFeatureSplit;
  const Head = window.RRSectionHead;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: CONTAINER
  }, /*#__PURE__*/React.createElement(Head, {
    eyebrow: "Services",
    title: "What we offer your car"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-12) var(--space-10)"
    }
  }, SERVICE_OFFER.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      textAlign: "center",
      maxWidth: "22rem",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      marginBottom: "var(--space-4)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, s.body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onBook
  }, "Book")))), SERVICE_FEATURES.map(f => /*#__PURE__*/React.createElement(FeatureSplit, _extends({
    key: f.title
  }, f, {
    cta: "Book",
    onCta: onBook
  }))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: CONTAINER
  }, /*#__PURE__*/React.createElement(Head, {
    eyebrow: "Packages",
    title: "Pricing plan",
    sub: "Simple tiers for every car. No fixed contracts \u2014 pick what suits and book."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-8)",
      alignItems: "stretch"
    }
  }, PRICING.map(t => /*#__PURE__*/React.createElement(PricingTier, {
    key: t.name,
    tier: t,
    onBook: onBook
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      maxWidth: "var(--container-md)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Ready to book?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-medium)",
      color: "var(--text-muted)"
    }
  }, "Choose studio or mobile, pick your package, and let us handle the rest."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      justifyContent: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onBook
  }, "Book appointment"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onBook
  }, "Get in touch")))));
}
window.RRServicesPage = ServicesPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
/* Revive & Refine — shared section building blocks used across pages.
   All white (scheme-3). Exposed on window for sibling babel scripts. */

const RR_SECTION = {
  padding: "var(--section-y-md) 5%"
};
const RR_CONTAINER = {
  maxWidth: "var(--container-xxl)",
  margin: "0 auto"
};

/* Hook: returns true when viewport ≤ 600px (matches navbar breakpoint). */
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth <= 600);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    const handler = e => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

/* Alternating image / text feature row (services + booking pages). */
function FeatureSplit({
  eyebrow,
  title,
  body,
  bullets = [],
  img,
  reverse = false,
  cta = "Book",
  onCta
}) {
  const {
    Button
  } = window.ReviveRefineDesignSystem_38ca5a;
  const Icon = window.RRIcon;
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "32rem"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "var(--space-3)",
      fontWeight: 600,
      color: "var(--text-muted)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: "var(--space-5)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-medium)",
      color: "var(--text-muted)",
      marginBottom: "var(--space-6)"
    }
  }, body), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 22,
    style: {
      color: "var(--accent)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-body)"
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onCta
  }, cta), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron_right",
      size: 20
    })
  }, "Learn more")));
  const image = /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: title,
    style: {
      width: "100%",
      aspectRatio: "4 / 3",
      objectFit: "cover",
      borderRadius: "var(--radius-image)"
    }
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "scheme-3",
    style: {
      padding: "var(--section-y-md) 5%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xxl)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "var(--space-16)"
    }
  }, reverse ? /*#__PURE__*/React.createElement(React.Fragment, null, image, text) : /*#__PURE__*/React.createElement(React.Fragment, null, text, image)));
}

/* Centered eyebrow + heading + optional sub. */
function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
  max = "var(--container-md)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: max,
      margin: align === "center" ? "0 auto" : 0,
      textAlign: align,
      marginBottom: "var(--space-16)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "var(--space-3)",
      fontWeight: 600,
      color: "var(--text-muted)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", null, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      fontSize: "var(--text-medium)",
      color: "var(--text-muted)"
    }
  }, sub));
}
Object.assign(window, {
  RR_SECTION,
  RR_CONTAINER,
  RRFeatureSplit: FeatureSplit,
  RRSectionHead: SectionHead,
  useIsMobile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardBody = __ds_scope.CardBody;

})();
