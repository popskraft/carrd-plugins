# Design Palette

**See your live theme as a clear palette while you design, without guessing which color token is active.** It reads CSS color tokens from the page, resolves their current values, and displays them as named swatches so you can check the real palette while building. The numbered Brand slots, named colors, neutrals, and semantic roles come from the registries and tokens exposed by the theme; undefined optional values stay hidden. Change colors in Theme Customizing, refresh the page, and use the palette to verify the result. Hide or remove the visible embed before handing the site to a client.

## Carrd Setup

1. Keep the `Design Palette` embed where the palette should appear (it is a visible embed, not a hidden one).
2. Publish and review the colors.
3. Delete or hide the embed before handing the site to a client.

## Options

No options.

## Styling

The palette is a read-only view of the global theme colors. Set them in the `Theme Customizing` Embed (`Hidden → Head`), after `Theme Design System`:

```html
<style>
:root {
  --theme-color-brand-1-light: #E6EEFF;
  --theme-color-brand-1: #0055FF;
  --theme-color-brand-1-dark: #003FCC;
  --theme-color-brand-2-light: #F3E8FF;
  --theme-color-brand-2: #9333EA;
  --theme-color-brand-2-dark: #6B21A8;
  --theme-color-heading: #111827;
  --theme-color-text: #4B5563;
}
</style>
```

- Brand 1 is the required light/base/dark triplet. Brand 2–4 are optional slots for additional project colors; define all three shades for every slot you use.
- Named colors and Neutrals are read from the explicit `--theme-palette-named-colors` and `--theme-palette-neutrals` registries; numbered Brand 1–4 slots remain in the separate Brand colors group.
- Semantic roles such as `--theme-color-heading`, `--theme-color-text`, `--theme-color-surface`, and `--theme-color-border` apply the palette consistently across the site.
- The palette shows resolved values and hides undefined optional tokens.

### Palette registries and safe fallback

The two automatic groups use comma-separated token registries from the `Theme Design System` layer. Registry order controls display order and is independent of CSS declaration order. If you add or rename a color in either group, update the matching registry in the same `Theme Customizing` embed:

```html
<style>
:root {
  --theme-color-ink: #16181D;
  --theme-palette-neutrals: --theme-color-black, --theme-color-darker, --theme-color-dark, --theme-color-gray, --theme-color-light, --theme-color-lighter, --theme-color-white, --theme-color-ink;
}
</style>
```

The palette accepts only unique `--theme-color-*` names that are defined in the active root. If a registry is missing, malformed, duplicated, or references an undefined token, that group uses its built-in canonical list. Missing values are still hidden, so a changed theme cannot create broken swatches or stop the rest of the palette from rendering. Semantic and component tokens must stay out of these registries.

### Container colors

Select a container, open **Settings → Element → Classes**, and add a class. The built-in background classes are:

`bg-brand-1`, `bg-red`, `bg-red-light`, `bg-green`, `bg-green-light`, `bg-yellow`, `bg-yellow-light`, `bg-blue`, `bg-blue-light`, `bg-dark`, `bg-gray`, `bg-light`, `bg-lighter`, `bg-white`.

The equivalent explicit container aliases use the `container-bg-*` prefix, for example `container-bg-brand-1` or `container-bg-blue`.

### Text colors

Add a text class in the **Classes** field of a Text element, or add it to a container to color the text and lists inside it. The built-in text classes are:

`text-brand-1`, `text-red`, `text-green`, `text-yellow`, `text-blue`, `text-dark`, `text-gray`, `text-light`, `text-lighter`, `text-white`.

### Additional palette colors

Brand 2–4 let you choose arbitrary extra colors that still appear in the Design Palette. The shared theme cannot infer a new utility class from a token name, so add the class rule once in the same `Theme Customizing` embed:

This is especially useful for repeated elements such as cards: assign the same class to many containers, then change one token or rule instead of editing each card individually. You keep a consistent style system while still allowing controlled color variation.

```html
<style>
:root {
  --theme-color-brand-2-light: #F3E8FF;
  --theme-color-brand-2: #9333EA;
  --theme-color-brand-2-dark: #6B21A8;
}

.container-component.bg-brand-2,
.container-component.bg-brand-2 > .wrapper {
  background-color: var(--theme-color-brand-2) !important;
}

.text-brand-2.text-component,
.text-brand-2 .text-component,
.text-brand-2.list-component,
.text-brand-2 .list-component {
  color: var(--theme-color-brand-2) !important;
}
</style>
```

After that, use `bg-brand-2` on containers and `text-brand-2` on text elements or their parent containers. Repeat the same pattern for Brand 3 or Brand 4.

## Works With

- **Theme Customizing**: define the tokens and any additional class rules there; the palette is the visual check for the result.
- **Theme Design System**: must load before this plugin so the shared tokens and utility classes exist.

## Troubleshooting

- The palette is empty: the `Theme Design System` embed must be in `Hidden → Head`.
- A color did not change: check the token name in `Theme Customizing` against the name shown on the swatch.
- A Brand 2–4 swatch is missing: define its complete `-light`, base, and `-dark` triplet.
- A custom class has no effect: check the element's **Classes** field and place the custom CSS in `Theme Customizing` after the theme embed.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
