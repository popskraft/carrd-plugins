# Shopping Cart

Adds a floating cart widget that writes checkout details into a Carrd form.

## What You Do in Carrd

1. Create a section break named `shopping-cart`. This is the standard Carrd target `#shopping-cart`.
2. Inside that section, place a Form element with ID `form-shopping-cart`.
3. Inside that form, add an `Order Details` textarea.
4. Keep the textarea name `order-details`, class `cart-output`, or ID `order-details` for compatibility.
5. On each product button, add this click action: `CarrdShoppingCart.add('Product Name', 29.99)`.

If you only want the basic setup, these five steps are enough.

## How It Works in Carrd

- The cart collects items and writes the order summary into the `Order Details` textarea.
- Checkout uses the standard Carrd section flow by triggering a real anchor click to `#shopping-cart`.
- If `#form-shopping-cart` exists, the cart fills that form first before using global compatibility fallbacks.
- The widget position and labels can be customized.

## How To Check That It Works

1. Publish the page.
2. Click one product button.
3. Confirm the order summary appears in the form textarea.
4. Check that checkout opens the section `#shopping-cart`.
5. If nothing appears in the form, check `#form-shopping-cart` first, then verify the textarea matches `orderInputSelector`, `.cart-output`, `#order-details`, or `[data-cart-output="order-details"]`.

## Configuration

Use this only if you want to change the cart location, currency, target field, or labels.

You can skip this whole section for the default setup.

```html
<script>
window.CarrdPluginOptions = {
    shoppingCart: {
        currency: '$',
        currencyPosition: 'before',
        position: 'top-right',
        storageKey: 'carrd_cart_v1',
        orderInputSelector: '[name="order-details"], .cart-output, [data-cart-output="order-details"]',
        orderInputClass: '.cart-output',
        orderInputId: 'order-details',
        checkoutTargetId: 'shopping-cart',
        texts: {
            title: 'Shopping Cart',
            empty: 'Your cart is empty.',
            checkout: 'Checkout',
            total: 'Total',
            remove: 'Remove'
        }
    }
};
</script>
```

## Options

For most pages, you only need `currency`, `currencyPosition`, and `position`.

| Option | Default | What it changes |
|--------|---------|-----------------|
| `currency` | `$` | Currency symbol |
| `currencyPosition` | `before` | Shows the symbol before or after the amount |
| `position` | `top-right` | Widget position |
| `storageKey` | `carrd_cart_v1` | LocalStorage key |
| `orderInputSelector` | `[name="order-details"], .cart-output, [data-cart-output="order-details"]` | Primary selector for the order field |
| `orderInputClass` | `.cart-output` | Explicit class fallback for the order field |
| `orderInputId` | `order-details` | Legacy ID fallback for the order field |
| `checkoutTargetId` | `shopping-cart` | Carrd section target used during checkout |
| `texts.*` | English | All UI text labels |

## Advanced: Position Values

`top-right`, `top-left`, `bottom-right`, `bottom-left`, `bottom-center`

## Advanced: JavaScript API

Use this only if you want to trigger cart actions from custom buttons or custom code.

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

## Advanced: Localization Example

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

## Advanced: CSS Variables

Use a separate hidden `Head` `<style>` block after `theme-design-system.html` and place your overrides there.

```css
:root {
    --theme-shopcart-bg: var(--theme-color-bg);
    --theme-shopcart-text: var(--theme-color-text);
    --theme-shopcart-accent: var(--theme-color-primary);
    --theme-shopcart-btn-bg: var(--theme-color-success);
    --theme-shopcart-overlay-bg: var(--theme-overlay-bg);
}
```
