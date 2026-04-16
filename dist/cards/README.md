# Cards

## Version

- Version: `0.1.21`
- Build date (UTC): `2026-04-16`

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

1. Open `cards-embed.html` from this folder.
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

Turns a `.cards` container into styled card items.

## What You Do in Carrd

1. Add class `cards` to the container.
2. Open **Appearance** for that container and set **Padding** — this becomes the inner spacing of every card.
3. Style the container normally (background color, border, border-radius, shadow) — the plugin copies those styles onto each card automatically.

## How It Works

- Each direct item inside `.cards` becomes a separate card block wrapped in a `div.theme-card-item`.
- The container's padding is read and transferred to `--theme-card-padding` on each card. The original outer padding is then removed so the wrapper itself stays flush.
- Background, border, border-radius, and box-shadow are cloned from the container to each card. The container itself is set to transparent.
- Different containers are independent — each reads its own padding and styles.

## How To Check That It Works

1. Publish or refresh the page.
2. Confirm the items inside `.cards` look like separate cards.
3. If nothing changes, check that the class name is exactly `cards`.

## Configuration

Only needed to change the default selector or fallback card background.

```html
<script>
window.CarrdPluginOptions = {
    cards: {
        enabled: true,
        cardSelector: '.cards',
        defaultCardBg: 'var(--theme-card-bg-default)'
    }
};
</script>
```

## Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `enabled` | `true` | Turns cards processing on or off |
| `cardSelector` | `.cards` | Selector for card containers |
| `defaultCardBg` | CSS variable | Fallback background when container has no background |

## Advanced: Data Attributes

| Attribute | What it does |
|-----------|--------------|
| `data-color` | Background color for all cards in the container |
| `data-color-1`, `data-color-2`... | Per-card background color override |
| `data-border-color-1`, `data-border-color-2`... | Per-card border color override |

## Advanced: CSS Variables

Override in a hidden `Head` `<style>` block placed after `theme-design-system.html`.

```css
:root {
    --theme-card-bg-default: var(--theme-color-primary-light);
    --theme-card-border-radius: 0;
    --theme-card-padding: 2rem;
    --theme-card-padding-mobile: 1rem;
}
```

`--theme-card-padding` is set automatically from the container padding. Only override it manually if you need a fixed value regardless of what Carrd sets.

`--theme-card-padding-mobile` is never set by the plugin — use it only when you need a mobile padding different from desktop.
