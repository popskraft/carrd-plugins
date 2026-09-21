# Shopping Cart

**Turn a Carrd element into a product button, then let visitors build an order in one shared cart.** Put the product name and numeric price in its `onclick` action, and the plugin adds that item to the cart. Visitors can review items, quantities, and total, remove products, and send the order details to a native Carrd form. Checkout scrolls to the dedicated shopping-cart section; the form collects customer data and sends the submission. The plugin is a front-end cart, not a payment gateway or inventory system, so fulfilment and order processing stay with the form owner or connected service.

## Carrd Setup

1. Add a **Section Break** named `shopping-cart` where checkout should happen.
2. Add a separate **Container** in that section. Keep it separate from the existing lead/contact form.
3. Inside the new container, add a **Form**, choose **Custom → Send Email**, and set the form element ID to `form-shopping-cart` in its Settings tab.
4. In the form's **Fields** tab, add a required **Text Area** field with label `Order details` and ID `order-details`. Add any customer fields separately; keep their IDs unique.
5. For each product button, set its `onclick` event to `Ecart.add('Product Name', 29.99)`.

`CarrdShoppingCart` remains available for existing buttons; both names use the same cart.

There is no payment gateway, backend, or database: the visitor submits the order through the Carrd form.

Enter every `data-*` line in this guide in the element's **Settings → Element → Attributes** field, not in **ID** or **Classes**. The `shopping-cart` Section Break and form/field IDs are separate Carrd IDs.

## Options

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-shopping-cart-output` | `order-details` | — | Optional explicit output marker for authored HTML; not needed for a native Carrd form field |
| `data-shopping-cart-checkout-target` | section ID/value | `shopping-cart` | Section ID the page scrolls to on checkout |

Currency, cart position, and labels are site-wide settings with no `data-*` equivalent. If you need to change them, use the optional advanced setting at the bottom of this guide.

## Styling

| Token | Default | Controls |
|---|---|---|
| `--theme-shopcart-widget-bg` | `var(--theme-color-dark)` | Floating cart button background |
| `--theme-shopcart-widget-color` | `var(--theme-color-white)` | Floating cart icon color |
| `--theme-shopcart-badge-bg` | `var(--theme-color-brand-red)` | Item count badge |
| `--theme-shopcart-bg` | `var(--theme-color-surface)` | Cart panel background |
| `--theme-shopcart-text` | `var(--theme-color-text)` | Cart panel text |
| `--theme-shopcart-heading-color` | `var(--theme-color-heading)` | Cart title |
| `--theme-shopcart-footer-bg` | `var(--theme-color-surface-muted)` | Total and checkout area |
| `--theme-shopcart-btn-bg` | `var(--theme-button-primary-bg)` | Checkout button background |
| `--theme-shopcart-btn-text` | `var(--theme-button-primary-text)` | Checkout button text |
| `--theme-shopcart-btn-radius` | `0.125rem` | Checkout button radius |
| `--theme-shopcart-accent` | `var(--theme-color-brand-1)` | Accent color |
| `--theme-shopcart-overlay-bg` | `var(--theme-overlay-bg)` | Backdrop behind the panel |
| `--theme-shopcart-toast-bg` | `var(--theme-color-text)` | "Added to cart" message background |

By default the cart follows the theme brand, button, and surface colors.

Override in the `Theme Customizing` embed:

```html
<style>
:root {
  --theme-shopcart-accent: #0055ff;
  --theme-shopcart-btn-radius: 0.5rem;
}
</style>
```

## Works With

- **Modal**: keep the checkout form in the `shopping-cart` section, not inside a modal, because checkout scrolls the page to that section. To block popups while the cart is open, see the Modal guide.
- **Switcher**: product buttons inside switcher panels add items the same way.

## Troubleshooting

- The cart does not appear: check the button's `onclick` text, including quotes and a number price.
- The order does not reach the form: the Section Break ID must be `shopping-cart`, the form ID must be `form-shopping-cart`, and the form must contain a Text Area whose native Carrd field ID is `order-details`.

### Advanced users

Most sites should use the `data-*` options and CSS tokens above. Currency, cart position, and visitor-facing labels are global settings without a `data-*` equivalent:

```html
<script>
window.CarrdPluginOptions = Object.assign(window.CarrdPluginOptions || {}, {
  shoppingCart: {
    currency: '€',
    currencyPosition: 'after',
    position: 'bottom-right',
    texts: {
      title: 'Cart',
      empty: 'Your cart is empty.',
      checkout: 'Checkout',
      total: 'Total',
      remove: 'Remove',
      addedToCart: 'Added "${name}" to cart'
    }
  }
});
</script>
```

| Option | Values | Default |
|---|---|---|
| `currency` | any symbol | `$` |
| `currencyPosition` | `before`, `after` | `before` |
| `position` | `top-right`, `bottom-right`, `bottom-left`, `bottom-center` | `top-right` |
| `texts` | visitor-facing labels; `${name}` inserts the product name | English labels |

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
