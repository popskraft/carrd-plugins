# Floating Cta

**Keep your most important action within reach even after the visitor has scrolled past its original place.** The copy inherits the source element’s Carrd appearance and remains a live button or link, so a modal link, form action, or other supported interaction works the same way. You choose its desktop and mobile corner independently, or hide it at one breakpoint. This makes an important action available without forcing it into the initial layout; the page content does not move, and the source element is not replaced.

## Carrd Setup

1. Build the call-to-action element in Carrd, for example a **Buttons** element.
2. Add `data-floating=contact` and `data-floating-position=bottom-right`.
3. Use a different `data-floating` value for each independent floating element.

Enter every `data-*` line in this guide in the element's **Settings → Element → Attributes** field, not in **ID** or **Classes**.

The original element stays in place; the floating copy appears after scrolling.

## Options

Add to the source element:

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-floating-position` | `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` | `bottom-right` | Position on desktop |
| `data-floating-position-mobile` | same values | desktop position | Position on mobile |
| `data-floating-hide` | `mobile`, `desktop` | — | Hides the copy on that screen size |

Example: bottom-right on desktop, bottom-center on mobile so the copy does not sit under a thumb at the screen edge.

```text
data-floating=contact
data-floating-position=bottom-right
data-floating-position-mobile=bottom-center
```

The copy appears after 800px of scrolling. The site-wide threshold has no `data-*` equivalent; the optional advanced setting is at the bottom of this guide.

## Styling

The copy keeps the Carrd style of the source element.

| Token | Default | Controls |
|---|---|---|
| `--theme-floating-cta-edge` | `1.25rem` | Distance from screen edges on desktop |
| `--theme-floating-cta-mobile-edge` | `0` | Distance from screen edges on mobile; `0` places the copy flush with the edge |
| `--theme-floating-cta-offset` | `24px` | Initial slide distance: top copies start above, bottom copies start below; it does not change the final edge gap |
| `--theme-floating-cta-fade-duration` | `0.3s` | Fade duration |
| `--theme-floating-cta-move-duration` | `0.45s` | Slide duration |
| `--theme-floating-cta-z-index` | `99999` | Stacking above page content |

`--theme-floating-cta-offset` controls only the hidden-to-visible animation. It is not the distance from the viewport edge:

- Use `--theme-floating-cta-edge` or `--theme-floating-cta-mobile-edge` to change the copy's final gap from the edge.
- Set `--theme-floating-cta-offset: 0px` to remove the slide and keep only the fade.
- Increase the value to make the copy travel farther; `--theme-floating-cta-move-duration` controls how long that travel takes.

For example, this keeps a larger final desktop gap while disabling the slide:

```html
<style>
:root {
  --theme-floating-cta-edge: 2rem;
  --theme-floating-cta-offset: 0px;
}
</style>
```

## Works With

- **Modal**: a floating button with the link `#data-modal-contact` opens the modal like the original.
- **Header Nav**: a pinned header does not hide floating copies; use bottom positions so they do not overlap it. If the pinned header already shows the same button, add `data-floating-hide=desktop` to the source element.
- **Cookie Banner**: keep the two in different corners.

## Troubleshooting

- No copy appears: scroll further than the threshold and check `data-floating` and `data-floating-hide`.
- The copy covers content on mobile: set `data-floating-position-mobile=bottom-center` or `data-floating-hide=mobile`.

### Advanced users

Most sites should use the `data-*` options above. The scroll threshold is global and has no `data-*` equivalent. To show the copy earlier, set it in the `Theme Customizing` embed:

```html
<script>
window.CarrdPluginOptions = Object.assign(window.CarrdPluginOptions || {}, {
  floatingCta: { scrollY: 400 }
});
</script>
```

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
