# Design Palette

Shows the site's active theme colors as swatches with token names and color values.

## Carrd Setup

1. Keep the `Design Palette` embed where the palette should appear (it is a visible embed, not a hidden one).
2. Publish and review the colors.
3. Delete or hide the embed before handing the site to a client.

## Options

No options.

## Styling

No plugin styles to change. The palette reads the colors defined by the theme and by your `Theme Customizing` embed.

## Works With

- **Theme Customizing**: every color you override there appears in the palette, so it is the quickest check of a client brand. Brand 2–4 appear only when all three shades (`-light`, base, `-dark`) are defined.

## Troubleshooting

- The palette is empty: the `Theme Design System` embed must be in `Hidden → Head`.
- A color did not change: check the token name in `Theme Customizing` against the name shown on the swatch.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
