# FAQ

## Version

- Version: `0.1.21`
- Build date (UTC): `2026-04-21`

## Installation

### CDN Bundle (recommended)

If your site already has the CDN embeds installed (`theme-core.min.css` in Head and `theme-core.min.js` in Body End), this plugin is already active — no extra steps needed.

To install CDN embeds: see the root `README.md` → **CDN Bundle** section.

### Inline Embed (single plugin)

Use this when installing only selected plugins without the CDN bundle.

**Step 1 — Install theme header (once per site)**

1. Open `theme-design-system.html` from the `dist/` folder.
2. Copy the full contents.
3. In Carrd add `Embed → Code → Hidden → Head` and paste.

**Step 2 — Install this plugin**

1. Open `faq-embed.html` from this folder.
2. Copy the full contents.
3. In Carrd add `Embed → Code → Hidden → Body End` and paste.
4. Publish the page and refresh.

## How To Change Styles

If this README contains a `:root { ... }` block later, do not paste it into the plugin code block itself.

Create a separate hidden `Head` style block below `theme-design-system.html` and place the overrides there.

Example of a separate settings block:

```html
<style>
:root {
  /* Put your overrides here */
}
</style>
```

Place that style block below `theme-design-system.html`.

---

Turns a `.FAQContainer` into an accordion FAQ.

## What You Do in Carrd

1. Add class `FAQContainer` to the Carrd container that holds your questions.
2. Build each question in this order: Divider, Heading, Answer.
3. Add a Divider before the first question.
4. Repeat the same pattern for each new FAQ item.
5. Use H1, H2, or H3 for the question heading.

If no heading is found between two dividers, the plugin falls back to the first paragraph in that block.

## How It Works in Carrd

- The divider starts each question block.
- The heading becomes the clickable question.
- The content below the heading becomes the answer.
- Without the divider before the first question, the parser does not start.

## How To Check That It Works

1. Publish or refresh the page.
2. Click a question.
3. If nothing opens, check that the divider exists and the class name is exactly `FAQContainer`.

## Configuration

Use this only if you want to change the selectors or open behavior.

```html
<script>
window.CarrdPluginOptions = {
    faq: {
        containerSelector: '.FAQContainer',
        dividerSelector: 'hr.divider-component',
        headerTags: ['H1', 'H2', 'H3'],
        allowMultipleOpen: false,
        defaultOpen: false
    }
};
</script>
```

## Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `containerSelector` | `.FAQContainer` | FAQ container selector |
| `dividerSelector` | `hr.divider-component` | Divider that starts each question |
| `headerTags` | `['H1','H2','H3']` | Heading tags treated as questions |
| `allowMultipleOpen` | `false` | Lets more than one answer stay open |
| `defaultOpen` | `false` | Opens the first question automatically |

## Advanced: Structure Reference

```text
.FAQContainer
  hr.divider-component
  h2 Question 1
  p Answer 1 line 1
  p Answer 1 line 2
  hr.divider-component
  h2 Question 2
  p Answer 2
```

## Advanced: State Hooks

- Open questions receive `.is-open`
- Closed questions receive `.is-closed`
- Generated answers receive IDs like `faq-answer-1`

## Advanced: CSS Variables

Use a separate hidden `Head` `<style>` block after `theme-design-system.html` and place your overrides there.

```css
:root {
    --theme-faq-spacing: 0.75rem;
    --theme-faq-icon-size: 1.75rem;
    --theme-faq-icon-color: var(--theme-color-primary);
}
```
