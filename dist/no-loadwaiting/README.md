# No-loadwaiting

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

1. Open `no-loadwaiting-embed.html` from this folder.
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

Removes Carrd's loading delay so the page appears immediately.

## What You Do in Carrd

No extra Carrd setup is required after you install the plugin embed.

## How It Works in Carrd

- The page becomes ready immediately instead of waiting on Carrd's default loading delay.
- Entry animations still work.
- The plugin keeps watching briefly for late changes, then stops.
- It also sends an initial resize and scroll pulse, then follow-up resize-only pulses, so layout-sensitive plugins can wake up.

## How To Check That It Works

1. Publish and open the page.
2. Confirm content appears without the usual wait.
3. If the loader still shows, check that the plugin code is present.

## Configuration

Use this only if you want to change timing behavior.

```html
<script>
window.CarrdPluginOptions = {
    noLoadwaiting: {
        animationDuration: 750,
        observerTimeout: 5000,
        scrollPulseInterval: 120,
        scrollPulseCount: 2,
        rafPulseCount: 2
    }
};
</script>
```

## Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `animationDuration` | `750` | Duration for the `is-playing` class in ms |
| `observerTimeout` | `5000` | How long the plugin watches for changes |
| `scrollPulseInterval` | `120` | Interval between follow-up resize pulses in ms |
| `scrollPulseCount` | `2` | Number of delayed resize pulses |
| `rafPulseCount` | `2` | Number of animation frame resize pulses |
