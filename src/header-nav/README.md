# Header Nav

Turns a Carrd header into a sticky desktop bar with an optional collapsing hamburger menu on mobile.

---

## Installation

### CDN Bundle (recommended)

If your site already has the CDN embeds installed (`theme-core.min.css` in Head and `theme-core.min.js` in Body End), this plugin is already active — no extra steps needed.

To install CDN embeds: see `dist/README.md` → CDN Bundle section.

### Inline Embed (single plugin)

Use this when installing only selected plugins without the CDN bundle.

**Step 1 — Install theme header (once per site)**

1. Open `theme-design-system.html` from the `dist/` folder.
2. Copy the full contents.
3. In Carrd: `Add Element → Embed → Code → Hidden → Head` and paste.

**Step 2 — Install this plugin**

1. Open `header-nav-embed.html` from this folder.
2. Copy the full contents.
3. In Carrd: `Add Element → Embed → Code → Hidden → Body End` and paste.
4. Publish the page and refresh.

---

## Setup

1. Build your header as a normal Carrd row with a logo, nav links, and an optional CTA.
2. Open the main header container's class panel and add `site-header` — this enables the plugin.
3. Add the behavior classes you want to the same container:

| Goal | Classes to add |
|------|---------------|
| Regular header | `site-header` |
| Sticky on desktop | `site-header header-fixed` |
| Hamburger on mobile | `site-header header-collapsing` |
| Sticky and hamburger | `site-header header-fixed header-collapsing` |

4. If using `header-collapsing`, add class `header-mobile-el-collapsing` to every element inside `#header` that should collapse into the hamburger menu. Elements without this class stay visible on mobile.

If you use `header-fixed`, set the container width to **Edge to Edge** or **Full Bleed** in Carrd for the most predictable layout.

---

## Class Reference

| Class | Where | What it does |
|-------|-------|-------------|
| `site-header` | root container | Enables the plugin |
| `header-fixed` | root container | Sticky on desktop |
| `header-collapsing` | root container | Hamburger mode on mobile |
| `header-mobile-el-collapsing` | any child element | Hides that element behind the hamburger |

---

## How to Verify

1. Publish the page.
2. Resize below 736px — if `header-collapsing` is set, confirm the hamburger appears.
3. Tap the hamburger — confirm all marked elements expand.
4. Resize above 736px — if `header-fixed` is set, scroll and confirm the header stays at the top.

If the plugin seems inactive:
- check that the root container has class `site-header`
- check that collapsible elements have `header-mobile-el-collapsing`
- check that the embed is placed in **Body End**

If the menu flashes on load, add this small guard in **Head** above other plugin embeds:

```html
<style>
@media (max-width: 736px) {
  #header:has(.site-header.header-collapsing:not(.is-header-nav-initialized)) .header-mobile-el-collapsing {
    display: none !important;
  }
}
</style>
```

If the header sticks but the width looks wrong, set the container width to **Edge to Edge** or **Full Bleed**.

---

## Configuration

Most sites can use the default behavior and skip configuration.

Add a **Code** embed and paste this block **above** the plugin embed if you want to change the breakpoint or nav height:

```html
<script>
window.CarrdPluginOptions = {
    headerNav: {
        breakpoint: 736,
        navMaxHeight: '80vh'
    }
};
</script>
```

If you use multiple plugins, create one shared `window.CarrdPluginOptions` block and place it once above all plugin embeds.

### Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `breakpoint` | `736` | Mobile cutoff for hamburger behavior |
| `sticky` | `true` | Extra on/off switch for sticky when `header-fixed` is present |
| `stickyTop` | `0` | Top offset for the fixed header in px |
| `closeOnLinkClick` | `true` | Closes the mobile menu after tapping a link |
| `navMaxHeight` | `80vh` | Maximum mobile menu height before it scrolls |

---

## Design

Add a **Code** embed with a `<style>` tag and override any of these variables:

```html
<style>
:root {
    --theme-header-nav-toggle-size: 2.5rem;
    --theme-header-nav-toggle-bg: transparent;
    --theme-header-nav-bar-color: currentColor;
    --theme-header-nav-bar-width: 22px;
    --theme-header-nav-bar-height: 2px;
    --theme-header-nav-bar-gap: 5px;
    --theme-header-nav-duration: 300ms;
    --theme-header-nav-max-height: 80vh;
    --theme-header-nav-sticky-top: 0;
    --theme-header-nav-sticky-z-index: 1000;
}
</style>
```

| Variable | Default | What it changes |
|----------|---------|-----------------|
| `--theme-header-nav-toggle-size` | `2.5rem` | Hamburger button size |
| `--theme-header-nav-toggle-bg` | `transparent` | Hamburger button background |
| `--theme-header-nav-bar-color` | `currentColor` | Hamburger bar color |
| `--theme-header-nav-bar-width` | `22px` | Hamburger bar width |
| `--theme-header-nav-bar-height` | `2px` | Hamburger bar thickness |
| `--theme-header-nav-bar-gap` | `5px` | Space between hamburger bars |
| `--theme-header-nav-duration` | `300ms` | Menu open/close animation speed |
| `--theme-header-nav-max-height` | `80vh` | Maximum expanded menu height |
| `--theme-header-nav-sticky-top` | `0` | Top offset when header is sticky |
| `--theme-header-nav-sticky-z-index` | `1000` | Stack order for sticky header |
