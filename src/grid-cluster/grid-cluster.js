(function() {
  'use strict';

  const DEFAULTS = {
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
  };

  const externalOptions = (typeof window !== 'undefined' &&
    window.CarrdPluginOptions &&
    window.CarrdPluginOptions.gridCluster) || {};

  const CONFIG = { ...DEFAULTS, ...externalOptions };
  const SELECTORS = {
    gridContainer: 'theme-grid',
    desktopWidths: 'theme-grid--desktop-widths',
    justify: 'theme-grid-justify',
    constrainWidth: 'theme-grid-constrain',
    imageFrameInGrid: '.theme-grid .image-component > .frame'
  };

  const GRID_CLASSES = CONFIG.gridClasses;
  const WIDTH_CLASS_MAP = { ...DEFAULTS.widthClasses, ...(externalOptions.widthClasses || {}) };
  const GRID_SELECTOR = GRID_CLASSES.map(cls => `.${cls}`).join(',');
  const WIDTH_CLASSES = Object.keys(WIDTH_CLASS_MAP);
  const RESPONSIVE_GRID_CLASS_PATTERN = /^grid-(sm|md|lg)-([1-6])$/;
  const requestFrame = window.requestAnimationFrame || (cb => setTimeout(cb, 16));
  let pendingFrame = null;

  const parseGap = val => {
    if (!val) return null;
    return !isNaN(val) ? val + 'rem' : val;
  };

  const isGridBlock = element =>
    element && GRID_CLASSES.some(cls => element.classList && element.classList.contains(cls));

  const getGridSize = element => {
    if (!element || !element.classList) return null;
    const sizeClass = GRID_CLASSES.find(cls => element.classList.contains(cls));
    if (!sizeClass) return null;
    const numeric = parseInt(sizeClass.split('-')[1], 10);
    return Number.isNaN(numeric) ? null : numeric;
  };

  const widthValueForElement = element => {
    if (!element || !element.classList) return null;
    const widthClass = WIDTH_CLASSES.find(cls => element.classList.contains(cls));
    return widthClass ? WIDTH_CLASS_MAP[widthClass] : null;
  };

  const getResponsiveGridClasses = cluster => {
    const responsiveClasses = new Set();
    cluster.forEach(element => {
      if (!element || !element.classList) return;
      element.classList.forEach(className => {
        if (RESPONSIVE_GRID_CLASS_PATTERN.test(className)) {
          responsiveClasses.add(className);
        }
      });
    });
    return Array.from(responsiveClasses);
  };

  const getDesktopGridSize = (gridSize, responsiveClasses) => {
    const lgClass = responsiveClasses.find(cls => cls.startsWith('grid-lg-'));
    if (!lgClass) return gridSize;

    const numeric = parseInt(lgClass.split('-')[2], 10);
    return Number.isNaN(numeric) ? gridSize : numeric;
  };

  function wrapCluster(cluster, gridSize) {
    if (!cluster.length || !cluster[0].parentNode) return;

    if (cluster[0].classList.contains('justify')) {
      cluster.forEach(node => node.classList.add(SELECTORS.justify));
    }

    const container = document.createElement('div');
    const classList = [SELECTORS.gridContainer];
    const responsiveClasses = getResponsiveGridClasses(cluster);

    if (gridSize && gridSize >= 2) {
      classList.push(`grid-${gridSize}`);
    }

    classList.push(...responsiveClasses);

    container.className = classList.join(' ');
    cluster[0].parentNode.insertBefore(container, cluster[0]);
    cluster.forEach(node => container.appendChild(node));

    const gap = parseGap(cluster[0].dataset.gap);
    const gapMobile = parseGap(cluster[0].dataset.gapMobile);
    if (gap) container.style.setProperty('--gap-override', gap);
    if (gapMobile) container.style.setProperty('--gap-mobile-override', gapMobile);

    applyDesktopWidths(container, cluster, getDesktopGridSize(gridSize, responsiveClasses));
  }

  function applyDesktopWidths(container, cluster, gridSize) {
    if (!gridSize || gridSize < 2 || cluster.length < gridSize) return;

    const initialRow = cluster.slice(0, gridSize);
    const columnWidths = initialRow.map(widthValueForElement);
    if (!columnWidths.some(Boolean)) return;

    const templateParts = columnWidths.map(value => value || 'minmax(0, 1fr)');
    container.classList.add(SELECTORS.desktopWidths);
    container.style.setProperty('--theme-grid-desktop-template', templateParts.join(' '));
  }

  function constrainImageFrames() {
    document.querySelectorAll(SELECTORS.imageFrameInGrid).forEach(frame => {
      const computedWidth = window.getComputedStyle(frame).width;
      const widthInRem = parseFloat(computedWidth) / parseFloat(getComputedStyle(document.documentElement).fontSize);

      if (widthInRem > 20) {
        frame.classList.add(SELECTORS.constrainWidth);
      }
    });
  }

  function scheduleConstrainImageFrames() {
    if (pendingFrame !== null) return;
    pendingFrame = requestFrame(() => {
      pendingFrame = null;
      constrainImageFrames();
    });
  }

  function init() {
    if (CONFIG.enabled === false) return;

    const collected = new Set();
    const gridBlocks = document.querySelectorAll(GRID_SELECTOR);

    gridBlocks.forEach(block => {
      if (collected.has(block)) return;
      if (block.dataset.gridInitialized === 'true') return;
      if (block.classList.contains(SELECTORS.gridContainer)) return;

      const cluster = [block];
      const baseSize = getGridSize(block);
      let sibling = block.nextElementSibling;

      while (isGridBlock(sibling)) {
        const siblingSize = getGridSize(sibling);
        if (baseSize !== null && siblingSize !== baseSize) {
          break;
        }
        cluster.push(sibling);
        collected.add(sibling);
        sibling = sibling.nextElementSibling;
      }

      collected.add(block);
      cluster.forEach(node => node.dataset.gridInitialized = 'true');
      wrapCluster(cluster, baseSize);
    });

    constrainImageFrames();
    window.addEventListener('load', scheduleConstrainImageFrames, { once: true });
    window.addEventListener('resize', scheduleConstrainImageFrames);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
