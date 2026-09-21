# Grid Cluster

**Turn a row of Carrd containers into a responsive grid that keeps cards balanced on every screen.** The shared `data-grid` value defines the group, the first container supplies column and gap settings, and each container can optionally span more than one column. The same group can use different column counts and spans at mobile, regular, and large breakpoints; items that do not fit wrap to the next row automatically. The plugin leaves the content inside each container intact, so cards, text, buttons, and other plugins remain normal Carrd elements while their outer arrangement becomes a grid.

## Carrd Setup

1. Place the containers one after another, with nothing between them.
2. Add the same custom attribute and value to every container, for example `data-grid=features`.
3. On the **first** container, add `data-grid-cols=3` to set the number of columns.

Enter every `data-*` line in this guide in the element's **Settings → Element → Attributes** field, not in **ID** or **Classes**.

Equal columns need nothing more: the other containers carry only `data-grid=features`.

```text
1st container
data-grid=features
data-grid-cols=3

2nd and 3rd container
data-grid=features
```

## Options

On the first container (whole grid):

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-grid-cols` | `1`–`6` | `1` | Columns from 737px |
| `data-grid-cols-sm` | `1`–`6` | `1` | Columns up to 736px |
| `data-grid-cols-lg` | `1`–`6` | same as `data-grid-cols` | Columns from 1280px |
| `data-grid-gap` | number in rem, e.g. `1.5` | theme gap | Space between items |
| `data-grid-gap-mobile` | number in rem | same as `data-grid-gap` | Space between items up to 736px |
| `data-grid-justify` | `true` | — | Stretches container content edge to edge in each cell |

On any container (one item):

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-grid-span` | `1`–`6` | `1` | Columns the item takes from 737px |
| `data-grid-span-sm` | `1`–`6` | `1` | Columns the item takes up to 736px |
| `data-grid-span-lg` | `1`–`6` | same as `data-grid-span` | Columns the item takes from 1280px |

A span larger than the column count fills the row; items that do not fit move to the next row. More containers than columns works the same way: extra items wrap onto a new row automatically, left-aligned, without stretching to fill any empty columns in that row.

Example: three columns on desktop, one column on mobile.

```text
1st container
data-grid=features
data-grid-cols=3
data-grid-cols-sm=1

2nd and 3rd container
data-grid=features
```

Example: two columns on mobile and tablet; on large screens one wide and two narrow items.

```text
1st container
data-grid=features
data-grid-cols=2
data-grid-cols-sm=2
data-grid-cols-lg=6
data-grid-span-lg=4

2nd and 3rd container
data-grid=features
```

Example: a container with a narrower Content Width should still fill its grid cell edge to edge.

```text
1st container
data-grid=features
data-grid-cols=3
data-grid-justify=true

2nd and 3rd container
data-grid=features
```

## Styling

Style each item container in Carrd. Default gaps when `data-grid-gap` is not set:

| Token | Default | Controls |
|---|---|---|
| `--theme-grid-row-gap` | `1rem` | Row gap up to 1024px |
| `--theme-grid-column-gap-sm` | `0.5rem` | Column gap up to 736px |
| `--theme-grid-column-gap` | `1rem` | Column gap from 737px |
| `--theme-grid-row-gap-desktop` | `2rem` | Row gap from 1025px |
| `--theme-grid-column-gap-desktop` | `1.5rem` | Column gap from 1025px |
| `--theme-grid-column-gap-desktop-large` | `2rem` | Column gap from 1280px |

Override in the `Theme Customizing` embed:

```html
<style>
:root {
  --theme-grid-column-gap-desktop: 2rem;
}
</style>
```

## Works With

- **Slider** and **Stacker** also group consecutive containers: give a container only one of `data-grid`, `data-slider`, `data-stacker`.
- **Switcher**: grid items can be switcher targets.

## Troubleshooting

- No grid: every container needs the same non-empty `data-grid` attribute value and must directly follow the previous one.
- Wrong column count: column settings are read only from the first container.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
