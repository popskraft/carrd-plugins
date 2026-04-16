# Grid Cluster

Turns consecutive Carrd containers into a responsive grid.

## What You Do in Carrd

1. Add class `grid-2`, `grid-3`, `grid-4`, `grid-5`, or `grid-6` to consecutive containers.
2. Keep those containers next to each other — no unrelated blocks between them.
3. Publish and check the result before adding helper classes.

## How It Works

- The plugin scans the page for containers with `grid-*` classes and groups consecutive ones with the same size into a `.theme-grid` wrapper.
- The wrapper becomes a CSS Grid — columns and gaps follow the global tokens by default.
- All gap and width controls live on the **first container** in the cluster.

## How To Check That It Works

1. Publish or refresh the page.
2. Confirm the containers line up as a grid.
3. Resize to mobile and confirm the layout collapses as expected.
4. If it stays single-column, check that the containers are consecutive and the class matches a valid grid size.

## Configuration

Use only to change grid detection or width helpers.

```html
<script>
window.CarrdPluginOptions = {
    gridCluster: {
        enabled: true,
        gridClasses: ['grid-2', 'grid-3', 'grid-4', 'grid-5', 'grid-6'],
        widthClasses: {
            'w-20': '20%',
            'w-25': '25%',
            'w-30': '33%',
            'w-40': '40%',
            'w-50': '50%',
            'w-60': '60%',
            'w-70': '67%',
            'w-75': '75%',
            'w-80': '80%'
        }
    }
};
</script>
```

## Options

| Option | Default | What it changes |
|--------|---------|-----------------|
| `enabled` | `true` | Turns grid cluster processing on or off |
| `gridClasses` | `['grid-2'...'grid-6']` | Classes used to detect clusters |
| `widthClasses` | `{ 'w-20': '20%' ... }` | Width helpers for desktop column sizing. Custom entries are **merged** with the defaults, not replaced |

## Advanced: Helper Classes

Add to **any container** in the cluster:

| Class | What it does |
|-------|--------------|
| `.grid-sm-2` | Forces 2-column layout on mobile (detected on any cluster member) |
| `.justify` | Stretches the cluster edge-to-edge |
| `.w-50`, `.w-33`, etc. | Sets custom desktop column widths (applied per first-row item) |

## Advanced: Data Attributes

Add to the **first container** in a cluster to control the gap for that cluster only.

| Attribute | What it does |
|-----------|--------------|
| `data-gap` | Column gap for all breakpoints. Plain number = rem, or any CSS value |
| `data-gap-mobile` | Column gap on mobile only (≤736px). Falls back to `data-gap` if not set |

Examples:
- `data-gap="1.5"` → `1.5rem` gap on all breakpoints
- `data-gap="2" data-gap-mobile="0.75"` → `2rem` desktop, `0.75rem` mobile
- `data-gap="0"` → no gap

## Advanced: CSS Variables

Global gap and row spacing. Override in a hidden `Head` `<style>` block after `theme-design-system.html`.

```css
:root {
    --theme-grid-column-gap: 1rem;
    --theme-grid-column-gap-sm: 0.5rem;
    --theme-grid-column-gap-desktop: 1.5rem;
    --theme-grid-column-gap-desktop-large: 2rem;
    --theme-grid-row-gap: 1rem;
    --theme-grid-row-gap-desktop: 2rem;
}
```

`data-gap` overrides these tokens for a specific cluster. The global tokens still apply to all clusters that have no `data-gap`.

## Advanced: Notes

- Clusters group only consecutive siblings with the same `grid-*` size.
- Width overrides from `w-*` classes use only the first row of the cluster.
- Processed elements are marked with `data-grid-initialized="true"` to prevent duplicate wrapping.
- Image frames inside a grid cluster are automatically constrained: if a computed image width exceeds `20rem`, the plugin adds `.theme-grid-constrain` to limit it to `100%` width within the cell. This is silent behavior — no class needed from you.
