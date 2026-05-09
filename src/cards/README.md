# Cards

Turns a Carrd container into styled card items. Each child of the container becomes a separate card with its own background, border, and padding.

No coding required. Add one class and style the container — the plugin copies styles to each card automatically.

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

1. Open `cards-embed.html` from this folder.
2. Copy the full contents.
3. In Carrd: `Add Element → Embed → Code → Hidden → Body End` and paste.
4. Publish the page and refresh.

---

## Setup

1. Add a **Container** element and place your card content inside it.
2. Open its class panel and add the class `cards`.
3. In **Appearance**, set **Padding** — this becomes the inner spacing of every card.
4. Set background color, border, border-radius, and shadow on the container — the plugin copies these to each card automatically.

Different containers are independent — each reads its own padding and styles.

---

## How to Verify

1. Publish or refresh the page.
2. The items inside `.cards` should appear as separate cards.
3. Resize to mobile and confirm cards stack vertically.

If nothing changes, check that the class is exactly `cards`.

---

## Configuration

No configuration is needed for normal use.

Add a **Code** embed and paste this block **above** the plugin embed if you want to change default behavior:

```html
<script>
window.CarrdPluginOptions = {
    cards: {
        enabled: true,
        cardSelector: '.cards'
    }
};
</script>
```

If you use multiple plugins, create one shared `window.CarrdPluginOptions` block and place it once above all plugin embeds.

### Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `enabled` | `true` | Turns cards processing on or off |
| `cardSelector` | `.cards` | Selector for card containers |
| `defaultCardBg` | CSS variable | Fallback background when container has no background |

---

## Advanced: Per-Card Color

Add these attributes to the container in Carrd's attributes panel:

| Attribute | What it does |
|-----------|--------------|
| `data-color=VALUE` | Background color for all cards in the container |
| `data-color-1=VALUE`, `data-color-2=VALUE`... | Per-card background color override |
| `data-border-color-1=VALUE`, `data-border-color-2=VALUE`... | Per-card border color override |

---

## Design

Add a **Code** embed with a `<style>` tag and override any of these variables:

```html
<style>
:root {
    --theme-card-bg-default: var(--theme-color-primary-light);
    --theme-card-border-radius: 0;
    --theme-card-padding: 2rem;
    --theme-card-padding-mobile: 1rem;
}
</style>
```

| Variable | Default | What it changes |
|----------|---------|-----------------|
| `--theme-card-bg-default` | primary light color | Fallback card background |
| `--theme-card-border-radius` | from container | Card corner radius |
| `--theme-card-padding` | from container | Card inner padding |
| `--theme-card-padding-mobile` | not set | Mobile padding (only when different from desktop) |

`--theme-card-padding` is set automatically from the container padding. Only override it manually if you need a fixed value regardless of what Carrd sets.
