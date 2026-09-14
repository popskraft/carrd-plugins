# Modal

Opens a Carrd container as a popup dialog from any link or button.

## Carrd Setup

1. Add `data-modal=contact` to a Carrd container that holds the popup content.
2. Point a button or link to `#data-modal-contact`.
3. Set the popup width with the container's own Carrd width controls.

The popup gets its accessible name from its first heading. Without a heading, add `data-modal-label=Contact form`.

## Options

Add to the modal container:

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-modal-close-on-overlay` | `on`, `off` | `on` | Clicking outside closes the popup |
| `data-modal-close-on-escape` | `on`, `off` | `on` | `Escape` closes the popup |
| `data-modal-show-close` | `on`, `off` | `on` | Shows the close button |
| `data-modal-lock-scroll` | `on`, `off` | `on` | Page does not scroll while the popup is open |
| `data-modal-label` | text | — | Name read by screen readers when the popup has no heading |

## Styling

Style the popup box in Carrd (background, padding, radius).

| Token | Default | Controls |
|---|---|---|
| `--theme-modal-overlay-bg` | `var(--theme-overlay-bg)` | Backdrop color |
| `--theme-modal-padding` | `1rem` | Space around the popup |
| `--theme-modal-padding-mobile` | `1rem` | Space around the popup on mobile |
| `--theme-modal-max-height` | `90vh` | Maximum popup height |
| `--theme-modal-max-height-mobile` | `90vh` | Maximum popup height on mobile |
| `--theme-modal-border-radius-mobile` | `1rem` | Popup corner radius on mobile |
| `--theme-modal-close-top` | `1rem` | Close button distance from the top |
| `--theme-modal-close-right` | `1rem` | Close button distance from the right |
| `--theme-modal-close-size` | `var(--theme-ui-control-size)` | Close button size |
| `--theme-modal-close-bg` | `var(--theme-ui-control-bg)` | Close button background |
| `--theme-modal-close-color` | `var(--theme-ui-control-color)` | Close icon color |

Override in the `Theme Customizing` embed:

```html
<style>
:root {
  --theme-modal-overlay-bg: rgba(0, 0, 0, 0.7);
}
</style>
```

## Works With

- **Shopping Cart**: to stop popups from opening over the open cart, add to the `Theme Customizing` embed:

```html
<script>
window.CarrdPluginOptions = Object.assign(window.CarrdPluginOptions || {}, {
  modal: { preventWhenCartOpen: true }
});
</script>
```

- **Floating Cta**: a floating copy of a modal button opens the same popup.
- A Carrd **Form** inside the modal container works as usual.

## Troubleshooting

- The popup does not open: `data-modal=contact` must match the link `#data-modal-contact`.
- The popup content flashes on page load: add `<style>.container-component[data-modal] { display: none !important; }</style>` to the `Theme Customizing` embed.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
