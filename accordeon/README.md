# Accordeon

Opens and closes a group of Carrd containers when a visitor clicks a button.

## Carrd Setup

1. Add `data-accordeon=details` to every container that should open and close together.
2. Add a **Buttons** or **Links** element and set its link to `#data-accordeon-details`.
3. Use a different name for each independent group.

The name in the link and in the attribute must match exactly. Groups start closed.

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

- The button does nothing: the link must be `#data-accordeon-<name>` with the same name as the containers.
- The group is open on load: check `data-accordeon-default-open`.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
