# Typography

Turns `.txt` content into cleaner typography with Markdown-like parsing.

## What You Do in Carrd

1. Add class `txt` to a Text element or text container.
2. Write headings, lists, and horizontal rules using simple Markdown-like syntax.
3. Keep the content inside Carrd paragraph spans, which are `span.p` by default.

## How It Works in Carrd

- `#`, `##`, `###`, and `####` become headings.
- `-` and `1.` become lists.
- `---` becomes a horizontal rule.
- The plugin applies the matching theme classes to the parsed content.

## How To Check That It Works

1. Publish or refresh the page.
2. Confirm headings and lists render with the intended styles.
3. If nothing changes, check that the class is exactly `txt`.

## Example Content

Paste text like this into your `.txt` block:

```text
# Main Heading

## Section Heading

- First item
- Second item

1. Step one
2. Step two

---
```

## Syntax Reference

| Markdown Syntax | HTML Output |
|-----------------|-------------|
| `# Heading` | `<h1>Heading</h1>` |
| `## Heading` | `<h2>Heading</h2>` |
| `### Heading` | `<h3>Heading</h3>` |
| `#### Heading` | `<h4>Heading</h4>` |
| `---` | `<hr>` |
| `- Item` | `<ul><li>Item</li></ul>` |
| `1. Item` | `<ol><li>Item</li></ol>` |

## Configuration

Use this only if you want to change the selectors or class names.

```html
<script>
window.CarrdPluginOptions = {
    typography: {
        containerSelector: '.txt',
        paragraphSelector: 'span.p',
        headingClasses: { h1: 'theme-typography-h1', h2: 'theme-typography-h2', h3: 'theme-typography-h3', h4: 'theme-typography-h4' },
        listClasses: { ul: 'theme-typography-ul', ol: 'theme-typography-ol', li: 'theme-typography-li' },
        hrClass: 'theme-typography-hr'
    }
};
</script>
```

## Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `containerSelector` | `.txt` | Selector for text containers |
| `paragraphSelector` | `span.p` | Selector for paragraph spans |
| `headingClasses` | `{ h1: 'theme-typography-h1', ... }` | CSS classes for headings |
| `listClasses` | `{ ul: 'theme-typography-ul', ... }` | CSS classes for lists |
| `hrClass` | `'theme-typography-hr'` | CSS class for horizontal rules |

## Advanced: JavaScript API

You can ignore this unless you are re-initializing text blocks from custom code.

```javascript
CarrdTypography.init();

const el = document.querySelector('.txt');
CarrdTypography.process(el);
```

## Advanced: CSS Variables

Use a separate hidden `Head` `<style>` block after `theme-design-system.html` and place your overrides there.

```css
:root {
    --theme-color-headlines: #19355A;
    --theme-color-border: #efefef;
}
```

Typography uses shared theme tokens from `theme-design-system.html`. Headings inherit `--theme-color-headlines`, and horizontal rules use `--theme-color-border`.
