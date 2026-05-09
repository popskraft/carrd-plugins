# Cookie Banner

Shows a fixed cookie consent banner and remembers the visitor's choice. The banner hides automatically once accepted.

No coding required. Add one class to a container and style it like any other Carrd block.

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

1. Open `cookie-banner-embed.html` from this folder.
2. Copy the full contents.
3. In Carrd: `Add Element → Embed → Code → Hidden → Body End` and paste.
4. Publish the page and refresh.

---

## Setup

1. Add a **Container** element for the banner.
2. Open its class panel and add the class `cookie-banner`.
3. Add your cookie policy text inside the container.
4. Add an accept link or button inside the container.
5. To make the accept button reliable, open the link's settings and add a custom attribute `role=button` — or use a Carrd **Buttons** element.
6. Style the container like any other Carrd block.

---

## How to Verify

1. Publish the page.
2. Open it in a private or incognito window.
3. Confirm the banner appears in the configured corner.
4. Click Accept.
5. Refresh the page — the banner should stay hidden.

---

## Configuration

No configuration is needed for normal use.

Add a **Code** embed and paste this block **above** the plugin embed if you want to change timing or placement:

```html
<script>
window.CarrdPluginOptions = {
    cookieBanner: {
        position: "bottom-left",
        cookieDays: 7,
        showDelay: 1000
    }
};
</script>
```

If you use multiple plugins, create one shared `window.CarrdPluginOptions` block and place it once above all plugin embeds.

### Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `cookieDays` | `7` | How long the consent lasts in days |
| `showDelay` | `1000` | Delay before showing the banner in ms |
| `fadeInDuration` | `400` | Fade-in animation time in ms |
| `fadeOutDuration` | `300` | Fade-out animation time in ms |
| `position` | `bottom-left` | Banner position: `bottom-left`, `bottom-right`, `bottom-center`, `top-left`, `top-right`, `top-center` |
| `cookieName` | `cookies_accepted` | Cookie name used to store consent |
