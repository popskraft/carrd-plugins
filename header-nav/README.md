# Header Nav

**Make a Carrd header mobile-friendly with a hamburger menu, without rebuilding its content.** Elements marked with `header-mobile-hide` stay visible in the desktop header but collapse behind a generated hamburger control on smaller screens, while unmarked elements such as a logo remain in place. The menu is built from elements already in Carrd, so links and buttons keep their original behavior. If needed, the header can be fixed from the start or become sticky during scroll. You control grouping through one class and pinning through header attributes; no separate navigation tree is required.

## Carrd Setup

1. Build the header inside the `#header` section.
2. Add the class `header-mobile-hide` to every element that should move into the mobile menu.
3. Leave always-visible elements, such as the logo, without that class.

The hamburger goes into the header's first cell. If the logo is in another cell, give the logo element the ID `header-primary-section` so the hamburger sits next to it.

Enter every `data-*` line in this guide in the element's **Settings → Element → Attributes** field, not in **ID** or **Classes**. The `header-mobile-hide` class and `header-primary-section` ID remain in their respective fields.

## Options

Add to the header container (`#header` or its first container):

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-header-position` | `fixed`, `sticky` | — | `fixed` pins the whole header from the start; `sticky` pins it when the container with the attribute reaches the top |
| `data-header-nav-fixed-offset` | number in rem, or a CSS length | `0` | Gap between the pinned header and the top of the screen |
| `data-header-nav-toggle-top` | number in rem, or a CSS length | `-.2rem` | Stable hamburger distance from the top of the primary header section |

The menu switches to mobile below 737px. Anchor links scroll past a pinned header automatically.

## Styling

Give a pinned header a solid or semi-transparent background in Carrd.

| Token | Default | Controls |
|---|---|---|
| `--theme-header-nav-toggle-size` | `46px` | Hamburger button size |
| `--theme-header-nav-toggle-top` | `-.2rem` | Hamburger distance from the top |
| `--theme-header-nav-toggle-right` | `0` | Hamburger distance from the right |
| `--theme-header-nav-toggle-left` | `auto` | Hamburger distance from the left; set `right` to `auto` when using it |
| `--theme-header-nav-toggle-radius` | `0.5rem` | Hamburger corner radius |
| `--theme-header-nav-toggle-bg` | `rgba(255, 255, 255, 0.4)` | Hamburger background |
| `--theme-header-nav-toggle-backdrop` | `blur(10px)` | Blur behind the hamburger |
| `--theme-header-nav-bar-color` | `var(--theme-nav-color)` | Hamburger line color |
| `--theme-header-nav-bar-width` | `22px` | Line width |
| `--theme-header-nav-bar-height` | `2px` | Line thickness |
| `--theme-header-nav-bar-gap` | `5px` | Space between lines |
| `--theme-header-nav-duration` | `300ms` | Menu open/close speed |
| `--theme-header-nav-fixed-shadow` | `none` | Shadow under a pinned header |
| `--theme-header-nav-fixed-offset` | `0rem` | Gap above a pinned header |
| `--theme-header-nav-fixed-z-index` | `9000` | Stacking of a pinned header |

### Pinned Header Positioning

When `data-header-position="fixed"` or `"sticky"` is enabled, the hamburger uses
fixed token offsets. It does not use vertical centering, so opening the menu cannot
move it when Carrd restores the header's lower padding.

Set the offsets in the `Theme Customizing` embed. The values are relative to the
primary header section that contains the logo and hamburger:

```html
<style>
:root {
  --theme-header-nav-toggle-top: -.2rem;
  --theme-header-nav-toggle-right: 0;
  --theme-header-nav-toggle-left: auto;
}
</style>
```

For a top-left placement, set the right offset to `auto` and provide the left offset:

```html
<style>
:root {
  --theme-header-nav-toggle-top: 1rem;
  --theme-header-nav-toggle-right: auto;
  --theme-header-nav-toggle-left: 1rem;
}
</style>
```

The top value can also be set per header with `data-header-nav-toggle-top`; use the
theme tokens for reusable top/right/left defaults.

Override in the `Theme Customizing` embed:

```html
<style>
:root {
  --theme-header-nav-bar-color: #111111;
  --theme-header-nav-fixed-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
</style>
```

## Works With

- **Stacker**: with a pinned header, set `data-stacker-offset` to the header height so cards pin below it.
- **Floating Cta**: a pinned header does not hide floating copies; place them at the bottom.

## Troubleshooting

- No hamburger on mobile: `#header` needs at least one element with `header-mobile-hide`.
- The hamburger scrolls away with the header: remove background blur from the header container.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
