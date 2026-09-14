# Faq

Turns a marked Carrd container into a question list where answers open on click.

## Carrd Setup

1. Add a **Container** and set `data-faq=main`.
2. Inside it, build each question as **Divider → Heading → answer content**.
3. Start the list with a **Divider** and repeat the same structure for every question.

## Options

Add to the FAQ container:

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-faq-allow-multiple` | `true`, `false` | `false` | Several answers can stay open |
| `data-faq-default-open` | `true`, `false` | `false` | The first answer starts open |

## Styling

Question text uses the Carrd heading style; answers use your Carrd text styles.

| Token | Default | Controls |
|---|---|---|
| `--theme-faq-spacing` | `0.75rem` | Space around each question |
| `--theme-faq-icon-size` | `1.75rem` | Open/close icon size |
| `--theme-faq-icon-color` | `var(--theme-color-brand-1)` | Icon color |
| `--theme-faq-heading-color` | `var(--theme-color-heading)` | Question color |
| `--theme-faq-focus-color` | `var(--theme-focus-ring-color)` | Keyboard focus outline |

Override in the `Theme Customizing` embed:

```html
<style>
:root {
  --theme-faq-icon-color: #0055ff;
}
</style>
```

## Works With

- **Accordeon**: use Accordeon when a button must open whole containers; use Faq for question lists.
- **Typography**: answers can use `.txt` text blocks for lists and headings.

## Troubleshooting

- Nothing opens: the container needs `data-faq`, and a divider must come before the first question.
- A question is not detected: its title must be a Heading element (H1–H3) right after a divider.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
