# Header Nav

## Version

- Version: `0.1.21`
- Build date (UTC): `2026-04-17`

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

1. Open `header-nav-embed.html` from this folder.
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

Turns a Carrd header into a class-driven navigation block with two behaviors:

1. Desktop sticky header
2. Mobile collapsing menu with a hamburger toggle

Floating CTA behavior is no longer part of this plugin. If you want a cloned CTA that appears after scroll, use the separate `Floating CTA` plugin.

## What You Do in Carrd

1. Build your header as a normal Carrd header row.
2. Find the main header container that holds your logo, nav links, and optional CTA.
3. Add class `site-header` to that container. This is the required opt-in class.
4. Add class `header-fixed` if you want the header to stick on desktop.
5. Add class `header-collapsing` if you want the nav to collapse behind a hamburger on mobile.
6. Add class `header-mobile-el-collapsing` to every element that should hide behind the hamburger on mobile.

If the container does not have class `site-header`, the plugin does nothing.

## Embed Placement

Use the standard install flow:

1. `theme-design-system.html` goes in `Head`
2. `header-nav-embed.html` goes in `Body End`

The anti-flash mobile hide rule already ships inside `theme-design-system.html`, so `header-nav` itself does not need a special Head placement anymore.

## Tutorial

### 1. Build the header structure

Your Carrd header should contain:

1. a brand block or logo
2. a navigation block
3. optional CTA buttons or extra content

### 2. Mark the root container

Add class `site-header` to the main container.

- `site-header` means this container is managed by Header Nav
- without it, the plugin ignores that block completely

### 3. Choose the behavior you want

Use one of these class combinations on the same root container:

| Goal | Classes on the root container |
|------|-------------------------------|
| Regular header, no sticky, no hamburger | `site-header` |
| Sticky on desktop only | `site-header header-fixed` |
| Hamburger on mobile only | `site-header header-collapsing` |
| Sticky on desktop and hamburger on mobile | `site-header header-fixed header-collapsing` |

### 4. Mark the collapsible elements

If you use `header-collapsing`, add class `header-mobile-el-collapsing` to every element that should collapse into the hamburger menu.

You can mark multiple elements. All of them will hide on mobile and appear when the hamburger is tapped.

Elements without `header-mobile-el-collapsing` stay visible on mobile.

### 5. How sticky works

The plugin fixes the outer Carrd header shell (`<header id="header">`) rather than the inner `.container-component`.

This keeps Carrd width modes working correctly:

1. `columns`
2. `columns full`
3. `columns full screen`

If you use `header-fixed`, Carrd usually behaves most predictably when the container width is set to `Edge to Edge` or `Full Bleed`.

### 6. How the toggle is positioned

On mobile, the hamburger is inserted into the first visible header cell and vertically centered inside that cell.

That makes it align more reliably with the logo row instead of sitting on a hardcoded top offset.

## Class Reference

| Class | Where to add | What it does |
|-------|-------------|--------------|
| `site-header` | root container | Enables the plugin |
| `header-fixed` | root container | Enables desktop sticky |
| `header-collapsing` | root container | Enables mobile hamburger mode |
| `header-mobile-el-collapsing` | any child element | Hides that element behind the hamburger on mobile |

## How To Check That It Works

1. Publish the page.
2. Confirm the header container has class `site-header`.
3. Resize below `736px`.
4. If the root has `header-collapsing`, confirm the hamburger appears and is vertically centered in the first visible header cell.
5. Open the mobile menu and confirm all marked elements expand.
6. Resize back above `736px`.
7. If the root has `header-fixed`, scroll and confirm the header shell stays fixed at the top.

## Troubleshooting

If the plugin seems inactive:

1. check that the root container has class `site-header`
2. check that the root has `header-collapsing` if you expect a hamburger
3. check that each collapsible element has class `header-mobile-el-collapsing`
4. check that the root has `header-fixed` if you expect desktop sticky
5. check that the embed code is placed in `Body End`

If the menu flashes on load:

1. check that `theme-design-system.html` is installed in `Head`
2. keep `header-nav-embed.html` in `Body End`
3. if using a config script, place it before the embed code

If the header sticks but the width looks wrong:

1. verify that the visible width is controlled by the inner Carrd container classes (`columns`, `full`, `screen`)
2. verify that you did not manually force width on the wrong wrapper
3. if the root uses `header-fixed`, prefer Carrd width `Edge to Edge` or `Full Bleed`

## Configuration

Most sites can use the default behavior and skip configuration completely.

```html
<script>
window.CarrdPluginOptions = {
    headerNav: {
        breakpoint: 736,
        sticky: true,
        stickyTop: 0,
        navMaxHeight: '80vh'
    }
};
</script>
```

If using a config script, place it in `Body End` above the plugin embed.

## Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `breakpoint` | `736` | Mobile cutoff for hamburger behavior |
| `sticky` | `true` | Extra on/off switch for sticky after `header-fixed` is present |
| `stickyTop` | `0` | Top offset for the fixed desktop header shell |
| `closeOnLinkClick` | `true` | Closes the mobile menu after tapping a link |
| `navMaxHeight` | `'80vh'` | Maximum mobile menu height before it becomes scrollable |

## CSS Variables

```css
:root {
    --theme-header-nav-toggle-top: 50%;
    --theme-header-nav-toggle-right: 0.75rem;
    --theme-header-nav-toggle-translate-y: -50%;
    --theme-header-nav-toggle-size: 2.5rem;
    --theme-header-nav-toggle-radius: 0.5rem;
    --theme-header-nav-toggle-bg: transparent;
    --theme-header-nav-toggle-outline: 2px solid currentColor;
    --theme-header-nav-toggle-outline-offset: 2px;

    --theme-header-nav-bar-width: 22px;
    --theme-header-nav-bar-height: 2px;
    --theme-header-nav-bar-gap: 5px;
    --theme-header-nav-bar-radius: 999px;
    --theme-header-nav-bar-color: currentColor;

    --theme-header-nav-duration: 300ms;
    --theme-header-nav-max-height: 80vh;
    --theme-header-nav-sticky-top: 0;
    --theme-header-nav-sticky-z-index: 1000;
}
```
