# Floating CTA

## Version

- Version: `0.1.21`
- Build date (UTC): `2026-05-15`

## Installation

### CDN Bundle (recommended)

If your site already has the CDN embeds installed (`theme-core.min.css` in Head and `theme-core.min.js` in Body End), this plugin is already active — no extra steps needed.

To install CDN embeds: see the root `README.md` → **CDN Bundle** section.

### CDN Individual (single plugin)

Use this when you want jsDelivr links for selected plugins instead of the full bundle.

**Step 1 — Install shared theme header (once per site)**

In Carrd add `Embed → Code → Hidden → Head` and paste:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/popskraft/carrd-plugins@main/dist/theme-design-tokens.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/popskraft/carrd-plugins@main/dist/theme-ui.css">
```

**Step 2 — Install this plugin through CDN**

1. Open `floating-cta-cdn.html` from this folder.
2. Paste the `<!-- Head -->` part into `Hidden → Head`.
3. Paste the `<!-- Body End -->` part into `Hidden → Body End` when present.
4. Publish the page and refresh.

### Inline Embed (single plugin)

Use this when installing only selected plugins without the CDN bundle.

**Step 1 — Install theme header (once per site)**

1. Open `theme-design-system.html` from the `dist/` folder.
2. Copy the full contents.
3. In Carrd add `Embed → Code → Hidden → Head` and paste.

**Step 2 — Install this plugin**

1. Open `floating-cta-embed.html` from this folder.
2. Copy the full contents.
3. In Carrd add `Embed → Code → Hidden → Body End` and paste.
4. Publish the page and refresh.

## How To Change Styles

If this README contains a `:root { ... }` block later, do not paste it into the plugin code block itself.

Create a separate hidden `Head` style block below `theme-design-system.html` and place the overrides there.

Example of a separate settings block:

```html
<style>
:root {
  /* Put your overrides here */
}
</style>
```

Place that style block below `theme-design-system.html`.

---

Clones an existing CTA element and shows the clone as a fixed overlay after the visitor scrolls past a threshold.

Use this plugin only on pages where the original CTA scrolls away. If your header already stays fixed with `header-fixed`, do not add the same CTA here — both versions will appear at the same time.

---

## Setup

1. Create the original CTA element on the page.
2. Open its settings and assign a unique ID — use `site-header-cta` for the default setup with no extra config.
3. The plugin clones this element automatically and shows the clone as a fixed overlay on scroll.

---

## How to Verify

1. Publish the page.
2. Scroll past the configured threshold.
3. The floating CTA should appear.

If nothing appears:
- check that the source element has the expected ID
- check that the embed is placed in **Body End**
- check that the page has been scrolled past the threshold

If two copies appear, remove this plugin from pages where the original CTA already stays visible.

---

## Configuration

Most pages can use the default setup with no changes.

Add a **Code** embed and paste this block **above** the plugin embed to change the source ID or scroll threshold:

```html
<script>
window.CarrdPluginOptions = {
    floatingCta: {
        sourceId: 'site-header-cta',
        scrollY: 800
    }
};
</script>
```

If you use multiple plugins, create one shared `window.CarrdPluginOptions` block and place it once above all plugin embeds.

### Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `sourceId` | `site-header-cta` | ID of the source element to clone |
| `scrollY` | `800` | Scroll position in px where the floating CTA appears |

---

## Design

Add a **Code** embed with a `<style>` tag and override any of these variables:

```html
<style>
:root {
    --theme-floating-cta-top: 0rem;
    --theme-floating-cta-right: 1.25rem;
    --theme-floating-cta-z-index: 99999;
    --theme-floating-cta-offset: 24px;
    --theme-floating-cta-fade-duration: 0.3s;
    --theme-floating-cta-move-duration: 0.45s;
}
</style>
```

| Variable | Default | What it changes |
|----------|---------|-----------------|
| `--theme-floating-cta-top` | `0rem` | Distance from the top edge |
| `--theme-floating-cta-right` | `1.25rem` | Distance from the right edge |
| `--theme-floating-cta-z-index` | `99999` | Stack order |
| `--theme-floating-cta-offset` | `24px` | Offset from the viewport edge on mobile |
| `--theme-floating-cta-fade-duration` | `0.3s` | Fade animation duration |
| `--theme-floating-cta-move-duration` | `0.45s` | Slide animation duration |
