# Shopping Cart

Adds a floating cart widget that collects product selections and writes the order summary into a Carrd form for checkout.

---

## Installation

### CDN Bundle (recommended)

If your site already has the CDN embeds installed (`theme-core.min.css` in Head and `theme-core.min.js` in Body End), this plugin is already active — no extra steps needed.

To install CDN embeds: see `dist/README.md` → CDN Bundle section.

### Inline Embed (single plugin)

Use this when installing only selected plugins without the CDN bundle.

**Step 1 — Install theme header (once per site)**

1. Open `theme-design-system.html` from the `dist/` folder.
2. Copy the full contents.
3. In Carrd: `Add Element → Embed → Code → Hidden → Head` and paste.

**Step 2 — Install this plugin**

1. Open `shopping-cart-embed.html` from this folder.
2. Copy the full contents.
3. In Carrd: `Add Element → Embed → Code → Hidden → Body End` and paste.
4. Publish the page and refresh.

---

## Setup

1. Add a **Section Break** named `shopping-cart` — this creates the Carrd anchor `#shopping-cart` for the checkout flow.
2. Inside that section, add a **Form** element with ID `form-shopping-cart`.
3. Inside the form, add a **Textarea** field. Keep its name as `order-details`.
4. On each product button, add a click action: `CarrdShoppingCart.add('Product Name', 29.99)`.

---

## How to Verify

1. Publish the page.
2. Click a product button.
3. Confirm the cart widget appears and shows the product.
4. Open the cart and click Checkout.
5. Confirm the order summary appears in the form textarea.

If nothing appears in the form, check that the textarea name is `order-details` and the form ID is `form-shopping-cart`.

---

## Configuration

No configuration is needed for most setups.

Add a **Code** embed and paste this block **above** the plugin embed to change currency, position, or labels:

```html
<script>
window.CarrdPluginOptions = {
    shoppingCart: {
        currency: '$',
        currencyPosition: 'before',
        position: 'top-right'
    }
};
</script>
```

If you use multiple plugins, create one shared `window.CarrdPluginOptions` block and place it once above all plugin embeds.

### Options

For most pages, you only need `currency`, `currencyPosition`, and `position`.

| Option | Default | What it changes |
|--------|---------|-----------------|
| `currency` | `$` | Currency symbol |
| `currencyPosition` | `before` | Shows the symbol before or after the amount |
| `position` | `top-right` | Widget position: `top-right`, `top-left`, `bottom-right`, `bottom-left`, `bottom-center` |
| `storageKey` | `carrd_cart_v1` | LocalStorage key |
| `checkoutTargetId` | `shopping-cart` | Carrd section anchor used during checkout |
| `texts.*` | English | All UI text labels |

---

## Advanced: Localization

```html
<script>
window.CarrdPluginOptions = {
    shoppingCart: {
        currency: '€',
        currencyPosition: 'after',
        texts: {
            title: 'Warenkorb',
            empty: 'Ihr Warenkorb ist leer.',
            checkout: 'Zur Kasse',
            total: 'Gesamt'
        }
    }
};
</script>
```

---

## API

The plugin exposes a JavaScript API for use in **Code** embeds:

```javascript
CarrdShoppingCart.add('Product', 29.99);
CarrdShoppingCart.remove('Product');
CarrdShoppingCart.updateQty('Product', 1);
CarrdShoppingCart.clear();
CarrdShoppingCart.getCart();
CarrdShoppingCart.getTotal();
CarrdShoppingCart.open();
CarrdShoppingCart.close();
CarrdShoppingCart.checkout();
```

---

## Design

Add a **Code** embed with a `<style>` tag and override any of these variables:

```html
<style>
:root {
    --theme-shopcart-bg: var(--theme-color-bg);
    --theme-shopcart-text: var(--theme-color-text);
    --theme-shopcart-accent: var(--theme-color-primary);
    --theme-shopcart-btn-bg: var(--theme-color-success);
    --theme-shopcart-overlay-bg: var(--theme-overlay-bg);
}
</style>
```

| Variable | Default | What it changes |
|----------|---------|-----------------|
| `--theme-shopcart-bg` | page background | Cart panel background |
| `--theme-shopcart-text` | page text color | Cart text color |
| `--theme-shopcart-accent` | primary color | Accent color |
| `--theme-shopcart-btn-bg` | success color | Checkout button background |
| `--theme-shopcart-overlay-bg` | overlay token | Background overlay behind the cart |
