# Accordeon

**Let visitors reveal exactly the Carrd content they need, while one button opens or closes the whole grouped section.** The link hash identifies the group, so several independent accordions can live on one page without sharing state. A group starts closed unless you choose otherwise; opening it can also bring the content into view. The plugin changes visibility and adds the transition, while the containers themselves remain ordinary Carrd elements, so their text, forms, buttons, and other plugins keep working inside the expanded area.

## Carrd Setup

1. Add `data-accordeon=details` to every container that should open and close together.
2. Add a **Buttons** or **Links** element and set its link to `#data-accordeon-details`.
3. Use a different `data-accordeon` value for each independent group.

Enter every `data-*` line in this guide in the element's **Settings → Element → Attributes** field, not in **ID** or **Classes**. The value after `data-accordeon=` and the value in the link hash must match exactly. Groups start closed.

## Options

Add to any one container of the group:

| Attribute | Values | Default | Result |
|---|---|---|---|
| `data-accordeon-default-open` | `on`, `off` | `off` | Group starts open |
| `data-accordeon-scroll` | `on`, `off` | `on` | Scrolls to the group when it opens |
| `data-accordeon-scroll-behavior` | `smooth`, `auto` | `smooth` | Smooth or instant scroll |
| `data-accordeon-scroll-block` | `start`, `center`, `end`, `nearest` | `start` | Where the opened group lands on screen |

## Styling

Style the containers and the button in Carrd. Animation tokens:

| Token | Default | Controls |
|---|---|---|
| `--theme-accordeon-toggle-duration` | `0.25s` | Open/close transition |
| `--theme-accordeon-animation-duration` | `0.28s` | Content reveal duration |
| `--theme-accordeon-animation-distance` | `0.5rem` | How far content slides in |
| `--theme-accordeon-animation-easing` | `ease-out` | Reveal easing |

Override in the `Theme Customizing` embed:

```html
<style>
:root {
  --theme-accordeon-animation-duration: 0.4s;
}
</style>
```

## Works With

- **Faq**: use Faq for a question list inside one container; use Accordeon to open whole containers from any button.
- Anything placed inside the containers, including buttons that open a **Modal**, opens with the group.

## Troubleshooting

- The button does nothing: the link must be `#data-accordeon-<value>` and match the containers' `data-accordeon` attribute value.
- The group is open on load: check `data-accordeon-default-open`.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
