# No Loadwaiting

**Make the page feel instant by removing Carrd’s waiting screen before visitors have time to notice it.** It runs from the Head embed, clears the waiting state before Carrd’s default delay becomes noticeable, and leaves the page’s regular entry animations available. There are no page attributes, controls, or per-element settings: the plugin is a small foundation layer that changes when the site becomes visible, not what the site contains. Other plugins can then initialize their layout, navigation, FAQ, or floating actions immediately against the visible page.

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
