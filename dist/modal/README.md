# Modal

## Version

- Version: `0.1.21`
- Build date (UTC): `2026-04-16`

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

1. Open `modal-embed.html` from this folder.
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

Shows modal dialogs from Carrd container components.

## What You Do in Carrd

1. Create a Carrd container and add the class `modal`.
2. Give the modal a unique ID, for example `modalContact`.
3. Add a link or button that points to that ID with `href="#modalContact"` or `data-modal="modalContact"`.
4. Set modal width with Carrd's container width controls.

## How It Works in Carrd

- Clicking the trigger opens the matching modal.
- Overlay click, Escape, and the close button can close it.
- The page can lock body scroll while the modal is open.
- The accessible label comes from the first heading inside the modal, then `data-modal-label`, then `aria-label`.

## How To Check That It Works

1. Publish the page.
2. Click the trigger.
3. Confirm the modal opens and closes with overlay click or Escape.
4. If it does not open, check the modal ID and trigger target.

## Configuration

Use this only if you want to change close behavior or body scroll locking.

```html
<script>
window.CarrdPluginOptions = {
    modal: {
        modalSelector: '.container-component.modal',
        closeOnOverlay: true,
        closeOnEscape: true,
        showCloseButton: true,
        lockBodyScroll: true,
        preventWhenCartOpen: false
    }
};
</script>
```

## Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `modalSelector` | `'.container-component.modal'` | Selector used to find modal containers |
| `closeOnOverlay` | `true` | Closes the modal when clicking the overlay |
| `closeOnEscape` | `true` | Closes the modal when pressing Escape |
| `showCloseButton` | `true` | Auto-injects an SVG close button (×) inside the modal, positioned top-right |
| `lockBodyScroll` | `true` | Prevents background scrolling while open |
| `preventWhenCartOpen` | `false` | Blocks opening while the Shopping Cart panel is already open |

## Advanced: Trigger Elements

Any link with `href` pointing to the modal ID can open it:

```html
<a href="#modalContact">Open Contact Modal</a>
<button data-modal="modalContact">Open Modal</button>
```

## Advanced: Accessible Label

The modal label is resolved in this order:

1. the first heading inside the modal
2. `data-modal-label`
3. `aria-label`
4. the modal ID as a fallback

## Advanced: Instant Hide

To prevent the modal from flashing before CSS loads, add this to a hidden Head embed:

```html
<style>.container-component.modal { display: none !important; }</style>
```

## Advanced: JavaScript API

```javascript
CarrdModal.open('modalContact');
CarrdModal.close();
CarrdModal.toggle('modalContact');
CarrdModal.isOpen();
CarrdModal.isOpen('modalContact');
```

## Advanced: CSS Variables

Use a separate hidden `Head` `<style>` block after `theme-design-system.html` and place your overrides there.

```css
:root {
    --theme-modal-overlay-bg: var(--theme-overlay-bg);
    --theme-modal-max-height: 90vh;
    --theme-modal-padding: 1rem;
    --theme-modal-close-top: 1rem;
    --theme-modal-close-right: 1rem;
    --theme-modal-padding-mobile: 0.5rem;
    --theme-modal-max-height-mobile: 90vh;
    --theme-modal-border-radius-mobile: 1rem;
}
```
