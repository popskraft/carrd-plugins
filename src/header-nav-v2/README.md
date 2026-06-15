# Header Nav v2 (anti-jump test build, simplified)

Experimental variant of `header-nav` with two goals:

1. **Kill the load-time "jump"** where header elements visibly re-flow when the
   page scripts finish loading.
2. **Simplify setup** — no container marker classes. Just flag the elements you
   want to collapse.

This is a TEST build. It is not wired into the CDN/theme bundle. You paste the
embed manually.

---

## Activation model (changed vs v1)

- **No `site-header` / `header-collapsing` classes.** The plugin activates on
  any `#header` that contains at least one `.header-mobile-el-collapsing`
  element.
- On mobile (`<= breakpoint`, default 736px) every flagged element inside
  `#header` collapses behind a hamburger — wherever it sits in the header,
  including elements that are siblings of the main container.
- **No sticky.** The sticky/`header-fixed` behaviour from v1 is removed.

So to set up: add the class `header-mobile-el-collapsing` to each element in
`#header` you want hidden behind the hamburger. Nothing else.

---

## Why it doesn't jump

The collapsed mobile layout is pure CSS:

- A **Head guard** collapses every `#header .header-mobile-el-collapsing` on
  mobile before any JS runs — so the first paint is already correct.
- The full stylesheet keys the collapsed state on `#header.is-header-nav`
  (a marker JS adds) and enables transitions only via `is-header-nav-ready`,
  added after the first paint — so the menu snaps shut on load instead of
  animating open → closed.
- The hamburger is injected by JS but is `display:none` until the mobile media
  query shows it, and it is absolutely positioned — so it never reflows layout.

JS does only: inject hamburger + overlay, toggle `is-nav-open`, close on
Esc/overlay/link-tap.

---

## Install (manual, for testing)

Open `header-nav-v2-embed.html`. It has two blocks:

1. **Head** — the critical CSS guard. Paste into
   `Add Element → Embed → Code → Hidden → Head`.
2. **Body End** — the full style + script. Paste into
   `Add Element → Embed → Code → Hidden → Body End`.

> Run only one header-nav build at a time. Remove the v1 embed while testing v2.

---

## How to verify

1. Add `header-mobile-el-collapsing` to the elements you want collapsed.
2. Publish, open on a narrow viewport (≤736px), hard-reload (disable cache).
3. Throttle network to Slow 3G so JS loads late.
4. Watch the header during load: only the logo + hamburger should show from the
   first frame; the flagged elements must **not** flash before collapsing.
5. Tap the hamburger → flagged elements expand; tap again / overlay / Esc →
   close.

---

## Options

```html
<script>
window.CarrdPluginOptions = {
  headerNav: {
    breakpoint: 736,        // mobile cutoff
    closeOnLinkClick: true, // close menu after tapping a link
    navMaxHeight: '80vh'    // max expanded menu height before it scrolls
  }
};
</script>
```

Place above the Body End embed. Sticky options (`sticky`, `stickyTop`) from v1
no longer apply.
