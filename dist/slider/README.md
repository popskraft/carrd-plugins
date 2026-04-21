# Slider

## Version

- Version: `0.1.21`
- Build date (UTC): `2026-04-21`

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

1. Open `slider-embed.html` from this folder.
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

Turns consecutive Carrd containers into one responsive slider.

## What You Do in Carrd

1. Create 2 or more Carrd containers that should become slides.
2. Place those containers one after another with no unrelated blocks between them.
3. Open each container and go to `Element Settings -> Style -> Classes`.
4. Add class `slider` to every container in that slider group.

That is enough for the default slider to work.

## How It Works in Carrd

- One `.slider` container = one slide.
- Consecutive `.slider` containers are grouped into one slider automatically.
- On mobile, the default layout shows 1 slide.
- On wider screens, the default layout shows more slides.

Example structure:

```text
Container 1  class="slider"
Container 2  class="slider"
Container 3  class="slider"
Container 4  class="slider"
```

## How To Check That It Works

1. Publish or refresh the page.
2. On mobile, swipe the slider left or right.
3. On desktop, drag the slider with the mouse.
4. If arrows and dots are enabled, check that they appear and can be clicked.

If nothing moves, the most common reason is that one of the intended slides is missing the `slider` class or the slider containers are not consecutive.

## Configuration

You do not need configuration for normal use. The slider should work with default settings.

Only add this block if you want to change the default behavior.

```html
<script>
window.CarrdPluginOptions = {
    slider: {
        autoplay: true,
        breakpoints: {
            737: { slidesPerView: 2, peek: 0 },
            1280: { slidesPerView: 3, peek: 0 }
        }
    }
};
</script>
```

Place the options block above the plugin code.

If you use multiple plugins, create one shared `window.CarrdPluginOptions` block and place it once above all plugin embeds at the bottom of the page.

## Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `showDots` | `true` | Shows dot navigation |
| `showArrows` | `true` | Shows previous/next arrows |
| `slideSelector` | `.slider` | Selector used to collect consecutive slide containers |
| `slidesPerView` | `1` | Base number of visible slides |
| `gap` | `16` | Space between slides in px |
| `peek` | `0.1` | Shows part of the next slide |
| `maxSlideWidth` | `400` | Maximum desktop width for one slide in px |
| `equalHeight` | `true` | Stretches slide wrappers to the same height |
| `loop` | `false` | Returns to the first slide after the last |
| `autoplay` | `false` | Auto-advances slides |
| `autoplayInterval` | `5000` | Delay between autoplay moves |
| `hideOverflow` | `false` | Clips content outside the slider area |
| `freeScroll` | `true` | Keeps the dragged position instead of snapping immediately |
| `wheelScroll` | `false` | Lets horizontal mouse wheel or trackpad gestures move the slider |
| `breakpoints` | `{}` | Changes settings at larger screen widths |
| `instances` | `{}` | Per-slider overrides using `data-slider-id` |

## Advanced: Per-Instance Settings

If one slider on the page needs different behavior, give the first slide in that cluster a `data-slider-id`.

In Carrd, add it as a custom attribute on the first slider container only.

Carrd example:

```html
<div class="slider" data-slider-id="reviews">...</div>
<div class="slider">...</div>
<div class="slider">...</div>
```

```html
<script>
window.CarrdPluginOptions = {
    slider: {
        slidesPerView: 1,
        gap: 16,
        instances: {
            reviews: {
                showArrows: false,
                slidesPerView: 1,
                breakpoints: {
                    737: { slidesPerView: 2 },
                    1280: { slidesPerView: 3 }
                }
            }
        }
    }
};
</script>
```

### Breakpoints

Use breakpoints when the same slider should show more cards on larger screens:

```javascript
breakpoints: {
    737: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4, peek: 0 }
}
```

Notes:

- Breakpoint keys are minimum screen widths in px.
- `737` and `1280` mean screen width in pixels.
- `peek: 0` is useful when you want a clean grid-like layout on larger screens.
- `maxSlideWidth` can also be overridden inside a breakpoint if you want tighter desktop cards.
- `slidesPerView` can be fractional if you want part of the next slide to stay visible.

## Advanced: CSS Variables

Use this only if you want to restyle the slider arrows and dots.

Do not paste these variables into the plugin code block itself.

Create a separate hidden `Head` `<style>` block below `theme-design-system.html` and place your `:root` overrides there.

```css
:root {
    --theme-slider-dot-size: var(--theme-ui-dot-size);
    --theme-slider-dot-bg: var(--theme-ui-dot-bg);
    --theme-slider-dot-hover-bg: var(--theme-ui-dot-hover-bg);
    --theme-slider-dot-active-bg: var(--theme-ui-dot-active-bg);
    --theme-slider-dots-margin: 1rem;

    --theme-slider-arrow-size: var(--theme-ui-control-size);
    --theme-slider-arrow-bg: var(--theme-ui-control-bg);
    --theme-slider-arrow-color: var(--theme-ui-control-color);
    --theme-slider-arrow-shadow: var(--theme-ui-control-shadow);
    --theme-slider-arrow-radius: var(--theme-ui-control-radius);
    --theme-slider-arrow-icon-size: var(--theme-ui-icon-size);
    --theme-slider-arrow-offset: 0.5rem;
}
```

## Troubleshooting

- The slider does not start: the `.slider` containers are not consecutive.
- Only one block moves: one of the intended slides is missing the `.slider` class.
- Config does not apply: `window.CarrdPluginOptions` was pasted after the plugin code.
- Instance settings do not work: `data-slider-id` is missing or was added to the wrong slide.
- Slide content is visibly cut off: try `hideOverflow: false`.
