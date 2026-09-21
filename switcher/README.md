# Switcher

**Let one set of buttons switch the page between views, from pricing plans to product variants.** The Buttons element declares a shared `data-switcher` value; each target receives the matching `data-switcher-target`, and its position or explicit index maps it to a button. On load the first or configured tab is shown while other targets are hidden; clicking a button changes the group without navigating away. Several targets can share an index, and two button rows can stay synchronized with the same switcher value. Cards, grids, sliders, product buttons, and forms can live inside the targets.

## Carrd Setup

1. Add `data-switcher=pricing` to a **Buttons** element.
2. Add `data-switcher-target=pricing` to each element or container that a button should show.
3. Keep targets in button order, or add `data-switcher-index=1`, `2`, and so on.

Enter every `data-*` line in this guide in the element's **Settings → Element → Attributes** field, not in **ID** or **Classes**. Give several targets the same index to show them together. Two Buttons elements with the same `data-switcher` value stay in sync.

## Options

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-switcher-default-index` | button number, from `1` | `1` | Tab shown before any click; set on the Buttons element |
| `data-switcher-index` | number, from `1` | order on the page | Which button shows this target |

## Styling

Style the buttons in Carrd; the active button uses the tokens below.

| Token | Default | Controls |
|---|---|---|
| `--theme-switcher-active-bg` | `var(--theme-button-primary-bg)` | Active button background |
| `--theme-switcher-active-color` | `var(--theme-button-primary-text)` | Active button text |
| `--theme-switcher-active-border` | same as active background | Active button border |
| `--theme-switcher-inactive-bg` | `inherit` | Inactive button background |
| `--theme-switcher-animation-duration` | `1s` | Content reveal duration |
| `--theme-switcher-animation-distance` | `0.75rem` | How far content slides in |
| `--theme-switcher-animation-easing` | `ease-out` | Reveal easing |

Override in the `Theme Customizing` embed. Scope to `[data-switcher="pricing"]` to style one switcher only:

```html
<style>
[data-switcher="pricing"] {
  --theme-switcher-active-bg: #111111;
}
</style>
```

## Works With

- **Grid Cluster**, **Slider**: whole containers can be switcher targets, for example monthly and yearly pricing.
- **Shopping Cart**: product buttons inside switcher panels add items as usual.

## Troubleshooting

- Nothing switches: the `data-switcher` value on the Buttons element, target attribute values, and indexes must match exactly.
- The wrong tab shows first: check `data-switcher-default-index` on the Buttons element.
- `data-switcher-default-index` higher than the number of buttons: clamps silently to the last tab.
- A target's `data-switcher-index` has no matching button: it stays hidden permanently; check the browser console for a warning.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
