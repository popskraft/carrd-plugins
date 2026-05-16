## Version

- Version: `0.1.21`
- Build date (UTC): `2026-05-15`
- [View Changelog](CHANGELOG.md)

---

# Carrd Plugins

Ready-to-use plugins for Carrd pages.

## Install Paths

Three ways to install plugins:

| | CDN Bundle | CDN Individual | Inline Embed |
|---|---|---|---|
| **What it is** | Two external links served via jsDelivr | jsDelivr links for selected plugins | Individual HTML blocks pasted into Carrd |
| **When to use** | Primary path — recommended for all new sites | When you need only specific plugins but still want CDN updates | When CDN is not available |
| **Embeds in Carrd** | 3 total | Shared theme links + 1–2 embeds per plugin | 1 per plugin + theme header |
| **Update on new release** | Run `npm run deploy` → purge cache | Run `npm run deploy` → purge cache for changed files | Re-paste updated embed files |

## CDN Bundle (Recommended)

Use one helper file to copy both required snippets quickly: `dist/theme-core-cdn.html`.

### Step 1 — Head embed

In Carrd: `Add Element → Embed → Code → Hidden → Head`

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/popskraft/carrd-plugins@main/dist/theme-core.min.css">
```

### Step 2 — Body End embed

In Carrd: `Add Element → Embed → Code → Hidden → Body End`

```html
<script src="https://cdn.jsdelivr.net/gh/popskraft/carrd-plugins@main/dist/theme-core.min.js"></script>
```

> `theme-core.min.css` includes design tokens, shared UI styles, and all bundle plugin CSS.
> `theme-core.min.js` includes plugin defaults and all bundle plugin JS.
> Bundle composition is controlled by `bundle.config.json`.

## CDN Individual (Per-Plugin)

Use this when you want selected plugins through jsDelivr instead of the full `theme-core` bundle.

### Step 1 — Shared Head embed

In Carrd: `Add Element → Embed → Code → Hidden → Head`

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/popskraft/carrd-plugins@main/dist/theme-design-tokens.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/popskraft/carrd-plugins@main/dist/theme-ui.css">
```

### Step 2 — Plugin CDN file

For each selected plugin, open its folder and use one file: `*-cdn.html`.

Inside that file:
- Paste the `<!-- Head -->` part into `Hidden → Head`.
- Paste the `<!-- Body End -->` part into `Hidden → Body End` when present.

Example (`dist/faq/faq-cdn.html`):

```html
<!-- Head -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/popskraft/carrd-plugins@main/dist/faq/faq.min.css">

<!-- Body End -->
<script src="https://cdn.jsdelivr.net/gh/popskraft/carrd-plugins@main/dist/faq/faq.min.js"></script>
```

> `no-loadwaiting` has only a `Head` script block in `no-loadwaiting-cdn.html`, because it must run before Carrd loader completion.

### Local overrides (per-site)

To change colors, spacing, or plugin behavior on a specific site — add a separate embed, do not edit the CDN embeds:

```html
<!-- Separate Head embed, placed after the CDN link -->
<style>
:root {
  --theme-color-primary: #0055FF;
}
</style>
```

```html
<!-- Separate Body End embed, placed before the CDN script -->
<script>
window.CarrdPluginOptions = {
  slider: { autoplay: true },
  faq: { allowMultipleOpen: true }
};
</script>
```

## Inline Embed (Per-Plugin)

Use when you need only selected plugins or prefer not to use CDN.

### Step 1 — Install theme header

In Carrd: `Add Element → Embed → Code → Hidden → Head`

1. Open `dist/theme-design-system.html`.
2. Copy the full file contents and paste into the Head embed.

### Step 2 — Install each plugin

In Carrd: `Add Element → Embed → Code → Hidden → Body End`

1. Open the plugin folder (e.g. `dist/faq/`).
2. Read `README.md` for that plugin.
3. Open `faq-embed.html`, copy all contents.
4. Paste into a Body End embed.
5. Follow plugin-specific setup steps from its README.

> `Shopping Cart` requires two Body End embeds: `shopping-cart-embed-part1.html` first, then `part2.html`.

## How To Change Styles

Plugin README files include `:root { ... }` examples for optional overrides.

- **CDN path:** add a separate `Head` embed with your `:root` block below the CDN link.
- **Inline path:** add a separate `Head` embed with your `:root` block below `theme-design-system.html`.

## Included Plugins

| Plugin | Path |
|--------|------|
| **Cards** | `dist/cards/` |
| **Cookie Banner** | `dist/cookie-banner/` |
| **FAQ** | `dist/faq/` |
| **Floating CTA** | `dist/floating-cta/` |
| **Grid Cluster** | `dist/grid-cluster/` |
| **Header Nav** | `dist/header-nav/` |
| **Modal** | `dist/modal/` |
| **No-loadwaiting** | `dist/no-loadwaiting/` |
| **Shopping Cart** | `dist/shopping-cart/` |
| **Slider** | `dist/slider/` |
| **Switcher** | `dist/switcher/` |
| **Typography** | `dist/typography/` |


## Quick Carrd Guide

If you have never used Carrd embeds before:

1. In Carrd click `+ Add Element`.
2. Choose `Embed → Code`.
3. Use `Hidden → Head` for CDN stylesheet link or theme files and style overrides.
4. Use `Hidden → Body End` for CDN script tag, plugin embeds, or `window.CarrdPluginOptions`.
5. Publish the page and refresh it.

## Troubleshooting

| Problem | What to check |
|---------|----------------|
| Nothing happens | Check the plugin README and confirm the required class names or IDs match exactly |
| Styles look wrong | Confirm `theme-design-system.html` is installed in Head |
| Controls look plain or missing | Reinstall `theme-design-system.html` in Head |
| Config does not apply | Make sure `window.CarrdPluginOptions` appears above the plugin embed |
| A plugin still does not work | Re-open that plugin folder README and follow its `What You Do in Carrd` section step by step |

