# Cookie Banner

Shows a cookie consent banner that remembers the visitor's choice.

## What You Do in Carrd

1. Create a Columns element for the banner content.
2. Add class `cookie-banner` to that element.
3. Add your cookie policy text.
4. Add an accept link or button inside the banner.
5. Style the block like any other Carrd section.

Legacy fallback still works with the old ID `cookie-baner`, but the preferred contract is now class-first.

The accept button is detected in this order: first `a[role="button"]` → then `[data-cookie-accept]` → then the first link inside `.icons-component`. The most reliable approach is to add `role="button"` to your accept link.

## How It Works in Carrd

- The banner appears in the chosen corner or centered position.
- Accepting the banner hides it for the chosen number of days.
- The banner stays hidden when the consent cookie already exists.

## How To Check That It Works

1. Publish the page.
2. Open it in a private or incognito window.
3. Accept the banner.
4. Refresh the page and confirm it stays hidden.

## Configuration

Only change this if you want different timing or placement.

```html
<script>
window.CarrdPluginOptions = {
    cookieBanner: {
        position: "bottom-left",
        cookieDays: 7,
        showDelay: 1000,
        fadeInDuration: 400,
        fadeOutDuration: 300
    }
};
</script>
```

## Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `bannerSelector` | `".theme-cookie-banner, .cookie-banner"` | Preferred selector for the banner element |
| `bannerId` | `"cookie-baner"` | Legacy ID fallback |
| `cookieName` | `"cookies_accepted"` | Cookie name used to store consent |
| `cookieDays` | `7` | How long the consent lasts in days |
| `showDelay` | `1000` | Delay before showing the banner in ms |
| `fadeInDuration` | `400` | Fade-in animation time in ms |
| `fadeOutDuration` | `300` | Fade-out animation time in ms |
| `position` | `"bottom-left"` | Banner position |

## Advanced: Position Values

`bottom-left`, `bottom-right`, `bottom-center`, `top-left`, `top-right`, `top-center`

## Advanced: HTML Structure

You usually do not need raw HTML for Carrd. Use this only as a reference for the structure the plugin expects.

Use a simple Columns layout with the message on one side and the accept action on the other:

```html
<div class="container-component columns cookie-banner">
  <div class="wrapper">
    <div class="inner">
      <div>
        <p>We use cookies according to our <a href="#rules">Privacy Policy</a></p>
      </div>
      <div>
        <ul class="icons-component">
          <li>
            <a href="#" role="button">
              <span class="label">Accept</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
```
