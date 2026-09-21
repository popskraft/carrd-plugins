# Typography

**Write structured, editorial-looking content in a Carrd text block using a few familiar Markdown-like marks.** Add the `txt` class to a Text element or text container, and the plugin interprets a limited Markdown-like syntax: leading `#` markers become heading levels, `-` and numbered lines become lists, and `---` becomes a rule. Existing HTML tables inside the block receive the shared table styling. Unrecognized text is left alone, so ordinary copy remains safe; the plugin only changes marked text within `.txt` and lets the theme control its colors and borders.

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
