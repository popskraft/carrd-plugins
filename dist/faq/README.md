# FAQ

## Version

- Version: `0.1.21`
- Build date (UTC): `2026-06-15`

## Installation

### CDN Bundle (recommended)

If your site already has the CDN embeds installed (`theme-core.min.css` in Head and `theme-core.min.js` in Body End), this plugin is already active — no extra steps needed.

To install CDN embeds: see the root `README.md` → **CDN Bundle** section.

### CDN Individual (single plugin)

Use this when you want jsDelivr links for selected plugins instead of the full bundle.

**Step 1 — Install shared theme header (once per site)**

In Carrd add `Embed → Code → Hidden → Head` and paste:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/popskraft/carrd-plugins@main/dist/theme-design-tokens.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/popskraft/carrd-plugins@main/dist/theme-ui.css">
```

**Step 2 — Install this plugin through CDN**

1. Open `faq-cdn.html` from this folder.
2. Paste the `<!-- Head -->` part into `Hidden → Head`.
3. Paste the `<!-- Body End -->` part into `Hidden → Body End` when present.
4. Publish the page and refresh.

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

Turns a Carrd container into an accordion. Visitors click a question to expand the answer.

No coding required. Add one class and structure your content with standard Carrd elements.

---

## Setup

1. Add a **Container** element to hold all your FAQ questions.
2. Open its class panel and add the class `FAQContainer`.
3. Inside the container, build each question with this structure: **Divider** → **Heading** → answer content.
4. Add a **Divider** before the first question too.
5. Use H1, H2, or H3 for the question heading.
6. Repeat the pattern for each new question.

If no heading is found between two dividers, the plugin falls back to the first paragraph in that block.

---

## How to Verify

1. Publish or refresh the page.
2. The questions should be visible with answers collapsed.
3. Click a question — the answer should expand.
4. Click again — it should collapse.

If nothing opens, check that the class is exactly `FAQContainer` and that a **Divider** exists before the first question.

---

## Configuration

No configuration is needed for normal use.

Add a **Code** embed and paste this block **above** the plugin embed if you want to change default behavior:

```html
<script>
window.CarrdPluginOptions = {
    faq: {
        allowMultipleOpen: false,
        defaultOpen: false
    }
};
</script>
```

If you use multiple plugins, create one shared `window.CarrdPluginOptions` block and place it once above all plugin embeds.

### Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `containerSelector` | `.FAQContainer` | FAQ container selector |
| `dividerSelector` | `hr.divider-component` | Divider that starts each question |
| `headerTags` | `['H1','H2','H3']` | Heading tags treated as questions |
| `allowMultipleOpen` | `false` | Lets more than one answer stay open |
| `defaultOpen` | `false` | Opens the first question automatically |

---

## Design

Add a **Code** embed with a `<style>` tag and override any of these variables:

```html
<style>
:root {
    --theme-faq-spacing: 0.75rem;
    --theme-faq-icon-size: 1.75rem;
    --theme-faq-icon-color: var(--theme-color-primary);
}
</style>
```

| Variable | Default | What it changes |
|----------|---------|-----------------|
| `--theme-faq-spacing` | `0.75rem` | Space between question and answer |
| `--theme-faq-icon-size` | `1.75rem` | Toggle icon size |
| `--theme-faq-icon-color` | primary color | Toggle icon color |

---

## Advanced: State Classes

- Open questions receive `.is-open`
- Closed questions receive `.is-closed`
- Generated answers receive IDs like `faq-answer-1`
