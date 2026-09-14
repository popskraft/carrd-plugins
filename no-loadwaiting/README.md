# No Loadwaiting

Removes Carrd's loading delay so the page appears immediately, while keeping entry animations.

## Carrd Setup

Nothing to set up on the page. The `No Loadwaiting (HEAD)` embed must stay in `Hidden → Head`, above the other embeds.

## Options

No options.

## Styling

No plugin styles.

## Works With

- Layout plugins such as **Header Nav**, **Faq**, and **Floating Cta** recalculate right after the page appears, so they do not wait for Carrd's delay.

## Troubleshooting

- The Carrd loader still shows: the embed must be `Hidden → Head`, not `Body End`.
- Entry animations are missing: publish again and check that the embed code is complete.

## Get the Code

Copy the current embed code and paste steps from [embed.md](embed.md).
