# Stacker

Turns a group of Carrd containers into scroll-stacking cards: each card pins near the top and the next one slides over it.

## Carrd Setup

1. Place two or more containers one after another in the same section.
2. Add `data-stacker=stack` to every container in the group.
3. Use another name, for example `data-stacker=projects`, for each independent stack.

Keep every container in a group on the same Carrd width setting (content width, `Full`, or `Full Screen`); a mixed group is left unchanged. Content between containers splits the group.

## Options

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-stacker-offset` | pixels, e.g. `80` | `0` | Distance from the top of the screen where cards pin; set on the first container |

To turn stacking off below a screen width for the whole site, add to the `Theme Customizing` embed:

```html
<script>
window.CarrdPluginOptions = Object.assign(window.CarrdPluginOptions || {}, {
  stacker: { minWidth: 737 }
});
</script>
```

## Styling

Style each card container in Carrd; give cards a background so the next card covers the previous one cleanly.

| Token | Default | Controls |
|---|---|---|
| `--theme-stacker-offset` | `0px` | Site-wide pin distance from the top |

## Works With

- **Header Nav**: with a pinned header, set `data-stacker-offset` to the header height.
- **Slider** and **Grid Cluster** also group consecutive containers: give a container only one of `data-stacker`, `data-slider`, `data-grid`.

## Troubleshooting

- Cards do not pin: every container needs the same `data-stacker` name, with nothing between them.
- A group does not stack: check that all its containers use the same Carrd width setting.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
