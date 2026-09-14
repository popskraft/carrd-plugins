# Switcher

Turns a Carrd Buttons element into tabs that show one group of elements or containers at a time.

## Carrd Setup

1. Add `data-switcher=pricing` to a **Buttons** element.
2. Add `data-switcher-target=pricing` to each element or container that a button should show.
3. Keep targets in button order, or add `data-switcher-index=1`, `2`, and so on.

Give several targets the same index to show them together. Two Buttons elements with the same `data-switcher` name stay in sync.

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

- Nothing switches: the Buttons name, target names, and indexes must match exactly.
- The wrong tab shows first: check `data-switcher-default-index` on the Buttons element.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
