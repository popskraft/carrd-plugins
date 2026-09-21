# Cookie Banner

**Turn a Carrd container into a quiet, persistent consent notice that appears only when it is needed.** It appears after a short delay only when the visitor has not already made a choice, then hides the banner and remembers acceptance for the configured number of days. By default clicking anywhere in the banner is enough, but you can require an explicit accept element. The plugin handles only its own consent marker, not the site’s other cookies: it presents the notice while the policy text and the actual cookie behavior remain your responsibility.

## Carrd Setup

1. Add a **Container** for the banner with the policy text and an accept button.
2. Add `data-cookie=consent` to the container.
3. The whole container accepts cookies on click by default. Use a **Buttons** element for an explicit accept control, or add `data-cookie-accept` to the element that should accept.

Enter every `data-*` line in this guide in the element's **Settings → Element → Attributes** field, not in **ID** or **Classes**.

## Options

Add to the banner container:

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-cookie-position` | `bottom-left`, `bottom-center`, `bottom-right`, `top-left`, `top-center`, `top-right` | `bottom-left` | Screen position |
| `data-cookie-delay` | milliseconds | `1000` | Delay before the banner appears |
| `data-cookie-days` | days | `7` | How long the choice is remembered |
| `data-cookie-indent` | rem, `1` or `0-1` (vertical-horizontal) | `1` | Distance from screen edges on desktop |
| `data-cookie-indent-mobile` | rem, same format | `1-0.5` | Distance from screen edges on mobile |
| `data-cookie-click` | `on`, `off` | `on` | Clicking the whole banner accepts cookies |

## Styling

No plugin tokens. Style the container in Carrd: background, padding, radius, shadow, width.

## Works With

- **Floating Cta**: both sit in screen corners. Keep them in different corners (Cookie Banner defaults to bottom left, Floating Cta to bottom right).

## Troubleshooting

- The banner does not appear: test in a private window; a remembered choice hides it.
- To require an explicit control, add `data-cookie-click=off` to the banner and use a **Buttons** element or `data-cookie-accept` on the accept element.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
