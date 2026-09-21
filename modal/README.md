# Modal

**Turn any Carrd container into a focused popup that appears on demand without duplicating the content or leaving the page.** Give the container a `data-modal` value, then point a link or button at the matching hash; the plugin moves the visitor’s focus into the dialog, places the content over a backdrop, and restores the page when it closes. Escape, the close control, or a click outside can close it according to the container’s settings, and page scrolling can be locked while it is open. Forms, text, and other compatible elements stay authored in Carrd and work inside the popup.

## Carrd Setup

1. Add `data-modal=contact` to a Carrd container that holds the popup content.
2. Point a button or link to `#data-modal-contact`.
3. For a button without a hash link, add `data-modal-open=contact` in its **Settings → Element → Attributes** field.
4. Set the popup width with the container's own Carrd width controls.

Enter every other `data-*` line in this guide in the same **Settings → Element → Attributes** field, not in **ID** or **Classes**. The popup gets its accessible name from its first heading. Without a heading, add `data-modal-label=Contact form`.

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

- **Shopping Cart**: to stop popups from opening over the open cart, use the optional advanced setting at the bottom of this guide.

- **Floating Cta**: a floating copy of a modal button opens the same popup.
- A Carrd **Form** inside the modal container works as usual.

## Troubleshooting

- The popup does not open: `data-modal=contact` must match the link `#data-modal-contact`.
- The popup content flashes on page load: add `<style>.container-component[data-modal] { display: none !important; }</style>` to the `Theme Customizing` embed.

### Advanced users

Most sites should use the `data-*` options above. To prevent Modal from opening while the Shopping Cart is open, use this site-wide setting; there is no equivalent `data-*` option:

```html
<script>
window.CarrdPluginOptions = Object.assign(window.CarrdPluginOptions || {}, {
  modal: { preventWhenCartOpen: true }
});
</script>
```

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
