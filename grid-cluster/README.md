# Grid Cluster

**Turn a row of Carrd containers into a responsive grid that keeps cards balanced on every screen.** The shared `data-grid` value defines the group, the first container supplies column and gap settings, and each container can optionally span more than one column. The same group can use different column counts and spans at mobile, regular, desktop, and large breakpoints; items that do not fit wrap to the next row automatically. The plugin leaves the content inside each container intact, so cards, text, buttons, and other plugins remain normal Carrd elements while their outer arrangement becomes a grid.

## Carrd Setup

1. Place the containers one after another, with nothing between them.
2. Add the same custom attribute and value to every container, for example `data-grid=features`.
3. The default layout is one column up to 736px, two columns from 737px, three columns from 1025px, and four columns from 1280px. Add `data-grid-cols*` attributes on the **first** container only when a group needs different counts.
4. To make one container wider, add a `data-grid-span*` attribute to that **specific container**. A span is the number of grid columns that one container occupies; it does not change the total number of columns in the grid. For example, `data-grid-span=2` makes that item fill two columns from 737px through 1279px.

Enter every `data-*` line in this guide in the element's **Settings → Element → Attributes** field, not in **ID** or **Classes**.

Equal columns need nothing more: the other containers carry only `data-grid=features`.

```text
1st container
data-grid=features
data-grid-cols=3

2nd and 3rd container
data-grid=features
```

### Default state

If a group has only `data-grid=<name>` attributes, it starts with this state:

| Property | Default |
|---|---|
| Columns | `1` up to 736px, `2` from 737px, `3` from 1025px, `4` from 1280px; never more than the number of grouped containers |
| Item span | `1` at every breakpoint, so each container occupies one grid column |
| Justify | On: each container fills the width of its grid cell |
| Gaps | Theme grid gap tokens |

These defaults are changed only by explicit grid attributes: `data-grid-cols*` changes the whole-grid column count, `data-grid-span*` changes one container's width, `data-grid-justify=false` turns justify off, and `data-grid-gap*` changes the gaps.

## Options

On the first container (whole grid):

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-grid-cols` | `1`–`6` | `2` (capped by group length) | Columns from 737px |
| `data-grid-cols-sm` | `1`–`6` | `1` | Columns up to 736px |
| `data-grid-cols-md` | `1`–`6` | `3` (capped by group length) | Columns from 1025px to 1279px |
| `data-grid-cols-lg` | `1`–`6` | `4` (capped by group length) | Columns from 1280px |
| `data-grid-gap` | number in rem, e.g. `1.5` | theme gap | Space between items |
| `data-grid-gap-mobile` | number in rem | same as `data-grid-gap` | Space between items up to 736px |
| `data-grid-justify` | `true` or `false` | `true` | Stretches container content edge to edge in each cell; set `false` to opt out |

On any container (one item; use the first container too if that item should be wide):

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-grid-span` | `1`–`6` | `1` | Number of grid columns this item occupies from 737px through 1279px |
| `data-grid-span-sm` | `1`–`6` | `1` | Number of grid columns this item occupies up to 736px |
| `data-grid-span-lg` | `1`–`6` | same as `data-grid-span` | Number of grid columns this item occupies from 1280px |

`data-grid-cols*` controls how many columns the whole grid has. `data-grid-span*` controls how many of those columns one item occupies. A span larger than the current column count fills the row; items that do not fit move to the next row. More containers than columns works the same way: extra items wrap onto a new row automatically, left-aligned, without stretching to fill any empty columns in that row.

Example: a three-column grid with a featured first item that spans two columns on regular and desktop widths.

```text
1st container
data-grid=features
data-grid-cols=3
data-grid-span=2

2nd and 3rd container
data-grid=features
```

Example: three columns from 737px through large desktop, one column on mobile.

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
