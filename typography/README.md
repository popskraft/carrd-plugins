# Typography

Turns simple Markdown-like text inside Carrd text blocks into styled headings, lists, and rules.

## Carrd Setup

1. Add a **Text** element, or a **Container** with text elements.
2. Add the class `txt`.
3. Write the content with this syntax:

| Type | Result |
|---|---|
| `# Heading` … `#### Heading` | Heading levels 1–4 |
| `---` | Horizontal rule |
| `- Item` | Bulleted list item |
| `1. Item` | Numbered list item |

HTML tables inside `.txt` get the theme table styles.

## Options

No options.

## Styling

| Token | Default | Controls |
|---|---|---|
| `--theme-typography-heading-color` | `var(--theme-color-heading)` | Heading color |
| `--theme-typography-font-weight` | `500` | Heading weight |
| `--theme-typography-border-color` | `var(--theme-color-border)` | Rules and table lines |

Override in the `Theme Customizing` embed:

```html
<style>
:root {
  --theme-typography-heading-color: #19355a;
}
</style>
```

## Works With

- **Faq** and **Modal**: `.txt` text blocks inside answers or popups are styled the same way.

## Troubleshooting

- Nothing changes: the class must be exactly `txt`.
- A line is not converted: start it with the marker and a space, for example `- Item`.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
