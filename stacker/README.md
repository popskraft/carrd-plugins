# Stacker

**Turn a sequence of Carrd sections into a layered scroll story where each card gets the spotlight.** Containers with the same `data-stacker` value and compatible width become cards: as the visitor scrolls, each card pins near a chosen top offset and the next slides over it without duplicating content. The first card can define the group’s offset, while a theme token provides a site-wide baseline. The effect depends on uninterrupted order, matching widths, and opaque card backgrounds; content between cards or mixed widths breaks the group. A pinned header can be included in the offset.

## Carrd Setup

1. Place two or more containers one after another in the same section.
2. Add `data-stacker=stack` to every container in the group.
3. Use another `data-stacker` value, for example `data-stacker=projects`, for each independent stack.

Enter every `data-*` line in this guide in the element's **Settings → Element → Attributes** field, not in **ID** or **Classes**.

Keep every container in a group on the same Carrd width setting (content width, `Full`, or `Full Screen`); a mixed group is left unchanged. Content between containers splits the group.

## Options

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-stacker-offset` | pixels, e.g. `80` | `0` | Distance from the top of the screen where cards pin; set on the first container |

To turn stacking off below a screen width for the whole site, use the optional advanced setting at the bottom of this guide. There is no per-group `data-*` equivalent for this breakpoint.

## Styling

Style each card container in Carrd; give cards a background so the next card covers the previous one cleanly.

| Token | Default | Controls |
|---|---|---|
| `--theme-stacker-offset` | `0px` | Site-wide pin distance from the top |

Override in the `Theme Customizing` embed:

```html
<style>
:root {
  --theme-stacker-offset: 4rem;
}
</style>
```

## Works With

- **Header Nav**: with a pinned header, set `data-stacker-offset` to the header height.
- **Slider** and **Grid Cluster** also group consecutive containers: give a container only one of `data-stacker`, `data-slider`, `data-grid`.

## Troubleshooting

- Cards do not pin: every container needs the same `data-stacker` attribute value, with nothing between them.
- A group does not stack: check that all its containers use the same Carrd width setting.

### Advanced users

Most sites should use `data-stacker-offset` or the token above. To disable stacking below a site-wide breakpoint, use the `Theme Customizing` embed:

```html
<script>
window.CarrdPluginOptions = Object.assign(window.CarrdPluginOptions || {}, {
  stacker: { minWidth: 737 }
});
</script>
```

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
