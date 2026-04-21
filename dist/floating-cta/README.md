# Floating CTA

## Version

- Version: `0.1.21`
- Build date (UTC): `2026-04-21`

## Installation

### CDN Bundle (recommended)

If your site already has the CDN embeds installed (`theme-core.min.css` in Head and `theme-core.min.js` in Body End), this plugin is already active — no extra steps needed.

To install CDN embeds: see the root `README.md` → **CDN Bundle** section.

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

Creates a fixed CTA clone that appears after the page is scrolled past a threshold.

Use this plugin only on pages where that extra CTA should appear independently. If your main header already stays visible with `header-fixed`, do not use the same CTA here or you will intentionally see both versions.

## What You Do in Carrd

1. Create the original CTA block you want to clone.
2. Give that block a unique ID.
3. Use `site-header-cta` if you want the default setup with no extra config.
4. Add the plugin embed to `Body End`.
5. Publish the page and scroll down to test the reveal.

## How It Works in Carrd

- The plugin clones one CTA block by ID.
- The clone is appended to `body`.
- It stays hidden until the page reaches the configured scroll threshold.
- On mobile, the clone is centered across the screen.

## How To Check That It Works

1. Publish the page.
2. Confirm the source CTA has the expected ID.
3. Scroll below the configured threshold.
4. Confirm the floating CTA appears.
5. If the CTA contains hash links, confirm the clone still triggers the original target correctly.

## Troubleshooting

If nothing appears:

1. check that the source CTA has the expected ID
2. check that the embed code is present in `Body End`
3. check that the page has been scrolled past the configured threshold

If you see two copies of the same CTA:

1. remove this plugin from pages where the original CTA already remains visible
2. or use a different source CTA for the floating version

## Configuration

Most pages can use the default setup:

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

If using a config script, place it in `Body End` above the plugin embed.

## Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `sourceId` | `'site-header-cta'` | ID of the source CTA element to clone |
| `scrollY` | `800` | Scroll position in px where the floating CTA becomes visible |

## CSS Variables

```css
:root {
    --theme-floating-cta-top: 0rem;
    --theme-floating-cta-right: 1.25rem;
    --theme-floating-cta-z-index: 99999;
    --theme-floating-cta-offset: 24px;
    --theme-floating-cta-fade-duration: 0.3s;
    --theme-floating-cta-move-duration: 0.45s;
}
```
