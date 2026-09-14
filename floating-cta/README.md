# Floating Cta

Shows a fixed copy of a Carrd button or element in a screen corner after the visitor scrolls.

## Carrd Setup

1. Build the call-to-action element in Carrd, for example a **Buttons** element.
2. Add `data-floating=contact` and `data-floating-position=bottom-right`.
3. Use another name for each independent floating element.

The original element stays in place; the floating copy appears after scrolling.

## Options

Add to the source element:

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-floating-position` | `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` | `bottom-right` | Position on desktop |
| `data-floating-position-mobile` | same values | desktop position | Position on mobile |
| `data-floating-hide` | `mobile`, `desktop` | — | Hides the copy on that screen size |

The copy appears after 800px of scrolling. To change that for the whole site, add to the `Theme Customizing` embed:

```html
<script>
window.CarrdPluginOptions = Object.assign(window.CarrdPluginOptions || {}, {
  floatingCta: { scrollY: 400 }
});
</script>
```

## Styling

The copy keeps the Carrd style of the source element.

| Token | Default | Controls |
|---|---|---|
| `--theme-floating-cta-edge` | `1.25rem` | Distance from screen edges on desktop |
| `--theme-floating-cta-mobile-edge` | `1rem` | Distance from screen edges on mobile |
| `--theme-floating-cta-offset` | `24px` | Slide-in distance when the copy appears |
| `--theme-floating-cta-fade-duration` | `0.3s` | Fade duration |
| `--theme-floating-cta-move-duration` | `0.45s` | Slide duration |
| `--theme-floating-cta-z-index` | `99999` | Stacking above page content |

## Works With

- **Modal**: a floating button with the link `#data-modal-contact` opens the modal like the original.
- **Header Nav**: a pinned header does not hide floating copies; use bottom positions so they do not overlap it.
- **Cookie Banner**: keep the two in different corners.

## Troubleshooting

- No copy appears: scroll further than the threshold and check `data-floating` and `data-floating-hide`.
- The copy covers content on mobile: set `data-floating-position-mobile=bottom-center` or `data-floating-hide=mobile`.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
