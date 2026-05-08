# Switcher

Switches Carrd elements with a normal Carrd buttons list.

## What You Do in Carrd

Default mode uses target classes. There are two ways to assign them.

**Option A — shared class (simpler):**

1. Create a Carrd Buttons element.
2. Add a custom attribute to that buttons list: `data-switcher="pricing"`.
3. Create the elements that should be switched.
4. Add the same class `pricing` to every target.
5. DOM order decides which button controls which target: first element → first button, second element → second button.

**Option B — numbered classes (when one button must control several elements at once):**

1. Create a Carrd Buttons element.
2. Add a custom attribute to that buttons list: `data-switcher="pricing"`.
3. Create the elements that should be switched.
4. Add class `pricing-1` to every element shown by the first button.
5. Add class `pricing-2` to every element shown by the second button.
6. Continue with `pricing-3`, `pricing-4`, and so on if you add more buttons.

You can replace `pricing` with any simple name.

## How It Works in Carrd

- The buttons list is the controller.
- The `data-switcher` value is the switcher name.
- Button order decides the target index.
- The plugin maps by button order, not by Carrd's `n01` or `n02` classes.
- If numbered classes (`name-1`, `name-2`) exist, they are used and shared class is ignored.
- If no numbered classes exist, all elements with the shared class (`name`) are used in DOM order.

**Shared class example:**

```html
<ul class="buttons-component" data-switcher="pricing">
    <li><a href="#" role="button">Monthly</a></li>
    <li><a href="#" role="button">Yearly</a></li>
</ul>

<p class="text-component pricing">Monthly content</p>
<p class="text-component pricing">Yearly content</p>
```

**Numbered class example** (use when one button must show several elements at once):

```html
<ul class="buttons-component" data-switcher="pricing">
    <li><a href="#" role="button">Monthly</a></li>
    <li><a href="#" role="button">Yearly</a></li>
</ul>

<p class="text-component pricing-1">Monthly price</p>
<p class="text-component pricing-1">Monthly note</p>
<p class="text-component pricing-2">Yearly price</p>
<p class="text-component pricing-2">Yearly note</p>
```

Targets can be text, images, lists, icons, buttons, containers, or other Carrd elements. The plugin hides and shows the whole element that has the target class.

If you remove the button URL in Carrd with `Browser: None`, the plugin still keeps the cursor as a clickable pointer.

## How To Check That It Works

1. Publish or refresh the page.
2. The first target should be visible by default.
3. Click the second button.
4. The first target should hide and the second target should appear.
5. The active button should become dark with white text.

If nothing switches, check that the `data-switcher` value and target class prefix match exactly.

## Configuration

You do not need configuration for normal use.

Only add this block if you want to change the default behavior.

```html
<script>
window.CarrdPluginOptions = {
    switcher: {
        defaultIndex: 1,
        warnOnMismatch: true
    }
};
</script>
```

Place the options block above the plugin code.

If you use multiple plugins, create one shared `window.CarrdPluginOptions` block and place it once above all plugin embeds at the bottom of the page.

## Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `enabled` | `true` | Turns the plugin on or off |
| `controllerSelector` | `[data-switcher]` | Selector used to find switcher button lists |
| `defaultIndex` | `1` | Button and target shown on page load |
| `warnOnMismatch` | `true` | Shows console warnings for missing targets |
| `scopeSelector` | `section` | Preferred parent scope used to find targets |
| `modeAttribute` | `data-switcher-mode` | Attribute used to select the switcher mode |
| `clusterTargetAttribute` | `data-switcher-cluster` | Attribute used by cluster mode targets |
| `clusterScopeSelector` | `.site-main` | Preferred parent scope for cluster mode |

## Design Settings

Use a separate hidden `Head` `<style>` block after `theme-design-system.html` and place your overrides there.

```css
:root {
    --theme-switcher-active-bg: var(--theme-color-primary-dark);
    --theme-switcher-active-border: var(--theme-color-primary-dark);
    --theme-switcher-active-color: var(--theme-btn-text);

    --theme-switcher-animation-duration: 1s;
    --theme-switcher-animation-distance: 0.75rem;
    --theme-switcher-animation-easing: ease-out;
}
```

| Variable | Default | What it changes |
|----------|---------|-----------------|
| `--theme-switcher-active-bg` | `var(--theme-color-primary-dark)` | Active button background |
| `--theme-switcher-active-border` | active background | Active button border |
| `--theme-switcher-active-color` | `var(--theme-btn-text)` | Active button text color |
| `--theme-switcher-inactive-bg` | `inherit` | Inactive button background |
| `--theme-switcher-animation-duration` | `1s` | Show animation duration |
| `--theme-switcher-animation-distance` | `0.75rem` | Fade-down movement distance |
| `--theme-switcher-animation-easing` | `ease-out` | Animation easing |

## Advanced: What Can Be Switched

Switcher can hide and show any normal Carrd element:

- text;
- images;
- lists;
- icons;
- buttons;
- containers;
- forms;
- embeds;
- whole sections.

For whole sections, use cluster mode.

## Advanced: Section Cluster Mode

Use cluster mode when you want one switcher to hide and show whole sections or a group of same-type blocks by order.

Controller:

```html
<ul class="buttons-component" data-switcher="cases" data-switcher-mode="cluster">
    <li><a role="button">Case 1</a></li>
    <li><a role="button">Case 2</a></li>
    <li><a role="button">Case 3</a></li>
</ul>
```

Targets:

```html
<section data-switcher-cluster="cases">Case 1 content</section>
<section data-switcher-cluster="cases">Case 2 content</section>
<section data-switcher-cluster="cases">Case 3 content</section>
```

For Carrd containers, put `data-switcher-cluster` on the outer `container-component`, not only on the text or image inside it:

```html
<div class="container-component" data-switcher-cluster="cases">
    <div class="wrapper">
        <div class="inner">
            <h2>Case 1 content</h2>
        </div>
    </div>
</div>
```

If Carrd stores the attribute value as `"cases"` with quotes, the plugin still treats it as `cases`. If the same cluster attribute appears on both the outer container and inner elements, the plugin switches the outer container and ignores the nested matches.

Mapping:

- first button shows the first `data-switcher-cluster="cases"` target;
- second button shows the second target;
- third button shows the third target.

The targets do not need numbered classes in cluster mode.

Place the switcher controller outside the sections you are switching. If the controller is inside a section that becomes hidden, the buttons will disappear too.

If your controller and target sections do not share `.site-main` as a parent, configure `clusterScopeSelector`:

```html
<script>
window.CarrdPluginOptions = {
    switcher: {
        clusterScopeSelector: '#page-wrapper'
    }
};
</script>
```

## Advanced: Whole Sections With Class-Index Mode

You can also switch sections with numbered classes. Use shared class when each button controls exactly one section; use numbered classes when one button must show several elements at once.

Shared class (one section per button):

```html
<ul class="buttons-component" data-switcher="page-mode">...</ul>

<section class="page-mode">...</section>
<section class="page-mode">...</section>
```

Numbered classes (one button controls a section plus an extra note):

```html
<ul class="buttons-component" data-switcher="page-mode">...</ul>

<section class="page-mode-1">...</section>
<p class="page-mode-1">Extra note for mode 1</p>
<section class="page-mode-2">...</section>
```

## Advanced: Multiple Switchers

Use a unique `data-switcher` name for each independent switcher on the same page.

```html
<ul class="buttons-component" data-switcher="pricing">...</ul>
<p class="pricing-1">Monthly price</p>
<p class="pricing-2">Yearly price</p>

<ul class="buttons-component" data-switcher="features">...</ul>
<p class="features-1">Basic features</p>
<p class="features-2">Advanced features</p>
```

Use the same `data-switcher` name when two or more button lists should control the same state from different places on the page. For example, a top tab bar and a bottom tab bar can both use `data-switcher="switcher"`. Clicking either one updates all button lists with that name and switches the matching targets in each local section.

```html
<ul class="buttons-component" data-switcher="switcher">...</ul>
<p class="switcher-1">Top state 1</p>
<p class="switcher-2">Top state 2</p>

<ul class="buttons-component" data-switcher="switcher">...</ul>
<p class="switcher-1">Bottom state 1</p>
<p class="switcher-2">Bottom state 2</p>
```

## Advanced: API

The plugin exposes:

```javascript
window.CarrdSwitcher.show('switcher', 2);
window.CarrdSwitcher.next('switcher');
window.CarrdSwitcher.prev('switcher');
window.CarrdSwitcher.refresh();
```

Indexes are one-based. `1` activates the first button and its target, `2` the second, and so on.
