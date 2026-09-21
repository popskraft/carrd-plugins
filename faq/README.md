# Faq

**Turn a Carrd content block into an FAQ where answers open exactly when a visitor wants them.** A divider marks the start of each item, the following heading becomes the clickable question, and the content after it becomes the answer. Visitors can open and close answers without leaving the page; by default several answers may remain open, or you can switch to one-at-a-time accordion behavior. The plugin adds the toggle state, icon, and animation while leaving the actual question and answer content in Carrd, where you can style it with normal headings, text, and other compatible elements.

## Carrd Setup

1. Add a **Container** and set `data-faq=main`.
2. Inside it, build each question as **Divider → Heading → answer content**.
3. Start the list with a **Divider** and repeat the same structure for every question.

Enter every `data-*` line in this guide in the element's **Settings → Element → Attributes** field, not in **ID** or **Classes**.

## Options

Add to the FAQ container:

Questions use independent open/close behavior by default. To use a traditional accordion that closes the other answers when one opens, add `data-faq-allow-multiple=false`.

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-faq-allow-multiple` | `true`, `false` | `true` | Several answers can stay open; `false` enables accordion behavior |
| `data-faq-default-open` | `true`, `false` | `false` | The first answer starts open without changing the multi-open behavior |

## Styling

Question text uses the Carrd heading style; answers use your Carrd text styles.

| Token | Default | Controls |
|---|---|---|
| `--theme-faq-spacing` | `0.75rem` | Space around each question |
| `--theme-faq-icon-size` | `2rem` | Open/close icon size |
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
