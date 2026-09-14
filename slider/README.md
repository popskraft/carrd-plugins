# Slider

Turns consecutive Carrd containers into a swipeable carousel with dots and arrows.

## Carrd Setup

1. Place two or more **Container** elements one after another, with nothing between them.
2. Add the same name to each container, for example `data-slider=gallery`.
3. Use a different name for each independent slider.

All options go on the **first** container; options on later slides are ignored.

## Options

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-slider-mode` | `free`, `center` | `free` | `free` scrolls freely; `center` snaps each slide to the middle |
| `data-slider-spv` | 1–3 numbers, e.g. `1.2 3 4` | `1.2 3 4` | Slides visible on mobile, from 737px, from 1280px |
| `data-slider-gap` | 1–3 numbers in px, e.g. `12 16 24` | `16` | Space between slides at the same sizes |
| `data-slider-autoplay` | milliseconds, e.g. `5000` | off | Advances slides automatically (off for visitors who reduce motion) |
| `data-slider-dots` | `on`, `off` | `on` | Pagination dots |
| `data-slider-arrows` | `on`, `off` | `on` | Previous/next arrows (hidden below 737px) |
| `data-slider-arrows-mobile` | `on`, `off` | `off` | Keeps arrows visible below 737px |

One number applies to all screen sizes; two numbers mean mobile and larger screens. In center mode the first and last slides sit against the edges.

Example on the first container:

```text
data-slider=gallery
data-slider-spv=1 2.5 3
data-slider-gap=12 16 24
```

## Styling

Style the slide containers in Carrd. Dots and arrows follow the theme UI controls by default.

| Token | Default | Controls |
|---|---|---|
| `--theme-slider-dot-size` | `var(--theme-ui-dot-size)` | Dot size |
| `--theme-slider-dot-bg` | `var(--theme-ui-dot-bg)` | Dot color |
| `--theme-slider-dot-active-bg` | `var(--theme-ui-dot-active-bg)` | Active dot color |
| `--theme-slider-dots-margin` | `1rem` | Space above dots |
| `--theme-slider-dots-margin-mobile` | `0.75rem` | Space above dots on mobile |
| `--theme-slider-arrow-size` | `var(--theme-ui-control-size)` | Arrow button size |
| `--theme-slider-arrow-bg` | `var(--theme-ui-control-bg)` | Arrow background |
| `--theme-slider-arrow-color` | `var(--theme-ui-control-color)` | Arrow icon color |
| `--theme-slider-arrow-radius` | `var(--theme-ui-control-radius)` | Arrow corner radius |
| `--theme-slider-arrow-offset` | `0.5rem` | Arrow distance from slider edges |

Override in the `Theme Customizing` embed:

```html
<style>
:root {
  --theme-slider-dot-active-bg: #0055ff;
}
</style>
```

## Works With

- Buttons inside slides, including **Modal** links and **Shopping Cart** product buttons, work on a normal click; a drag does not trigger them.
- **Grid Cluster** and **Stacker** also group consecutive containers: give a container only one of `data-slider`, `data-grid`, `data-stacker`.

## Troubleshooting

- Nothing moves: all slides must be consecutive and share the same `data-slider` name.
- An option is ignored: put it on the first container and check the value format; an invalid value falls back to the default.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
