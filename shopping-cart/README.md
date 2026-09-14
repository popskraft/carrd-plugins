# Shopping Cart

Adds a floating cart and sends the order summary into a Carrd form; payment, stock, and order handling stay with that form and its owner.

## Carrd Setup

1. Add a **Section Break** named `shopping-cart` where checkout should happen.
2. Inside that section, add a **Form** with the ID `form-shopping-cart`.
3. In the form, add a textarea field with the ID `order-details`.
4. For each product button, set its `onclick` event to `CarrdShoppingCart.add('Product Name', 29.99)`.

There is no payment gateway, backend, or database: the visitor submits the order through the Carrd form.

## Options

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-shopping-cart-checkout-target` | section name | `shopping-cart` | Section the page scrolls to on checkout |

Currency, cart position, and labels are set for the whole site in the `Theme Customizing` embed:

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

## Works With

- **Modal**: keep the checkout form in the `shopping-cart` section, not inside a modal, because checkout scrolls the page to that section. To block popups while the cart is open, see the Modal guide.
- **Switcher**: product buttons inside switcher panels add items the same way.

## Troubleshooting

- The cart does not appear: check the button's `onclick` text, including quotes and a number price.
- The order does not reach the form: the section must be named `shopping-cart`, the form ID `form-shopping-cart`, and the textarea ID `order-details`.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
