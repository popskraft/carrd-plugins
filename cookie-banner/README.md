# Cookie Banner

Shows a fixed consent banner and remembers the visitor's choice.

## Carrd Setup

1. Add a **Container** for the banner with the policy text and an accept button.
2. Add `data-cookie=consent` to the container.
3. Use a **Buttons** element for the accept button, or add `data-cookie-accept` to the element that should accept.

## Options

Add to the banner container:

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-cookie-position` | `bottom-left`, `bottom-center`, `bottom-right`, `top-left`, `top-center`, `top-right` | `bottom-left` | Screen position |
| `data-cookie-delay` | milliseconds | `1000` | Delay before the banner appears |
| `data-cookie-days` | days | `7` | How long the choice is remembered |
| `data-cookie-indent` | rem, `1` or `0-1` (vertical-horizontal) | `1` | Distance from screen edges on desktop |
| `data-cookie-indent-mobile` | rem, same format | `1-0.5` | Distance from screen edges on mobile |

## Styling

No plugin tokens. Style the container in Carrd: background, padding, radius, shadow, width.

## Works With

- **Floating Cta**: both sit in screen corners. Keep them in different corners (Cookie Banner defaults to bottom left, Floating Cta to bottom right).

## Troubleshooting

- The banner does not appear: test in a private window; a remembered choice hides it.
- Accept does not close it: use a **Buttons** element or add `data-cookie-accept` to the exact accept element.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
