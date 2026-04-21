(function() {
  'use strict';

  const CONFIG = {
    breakpoint: 736,
    closeOnLinkClick: true,
    sticky: true,
    stickyTop: 0,
    navMaxHeight: '80vh',
    ...((window.CarrdPluginOptions && window.CarrdPluginOptions.headerNav) || {})
  };

  const ROOT_SELECTOR = '.container-component.site-header';
  const NAV_SELECTORS = [
    '.header-mobile-el-collapsing',
    '.theme-header-nav-menu',
    '.links-component'
  ];

  const CLASSNAMES = {
    root: 'theme-header-nav',
    shell: 'theme-header-nav-shell',
    stickyRoot: 'theme-header-nav-sticky',
    initialized: 'is-header-nav-initialized',
    mobile: 'is-mobile',
    collapsible: 'is-collapsible',
    stuck: 'is-stuck',
    hidden: 'is-hidden',
    open: 'is-nav-open',
    spacer: 'theme-header-nav-spacer',
    section: 'theme-header-nav-section',
    primarySection: 'theme-header-nav-primary-section',
    collapseSection: 'theme-header-nav-collapse-section',
    toggle: 'theme-header-nav-toggle',
    toggleBar: 'theme-header-nav-toggle-bar',
    menu: 'theme-header-nav-menu',
    overlay: 'theme-header-nav-overlay'
  };

  const CSS_VARS = {
    maxHeight: '--theme-header-nav-max-height',
    stickyTop: '--theme-header-nav-sticky-top',
    fixedLeft: '--theme-header-nav-fixed-left',
    fixedWidth: '--theme-header-nav-fixed-width'
  };

  const INSTANCES = [];
  let globalsBound = false;
  let menuIdCounter = 0;

  function queryAll(root, selectors) {
    for (let i = 0; i < selectors.length; i += 1) {
      const matches = root.querySelectorAll(selectors[i]);
      if (matches.length) return Array.from(matches);
    }
    return [];
  }

  function resolveSectionWrap(root) {
    return (
      root.querySelector('.wrapper > .inner') ||
      root.querySelector('.wrapper .inner') ||
      root.querySelector('.inner') ||
      root.querySelector('.wrapper') ||
      root
    );
  }

  function findTopSection(target, sectionWrap) {
    if (!target || !sectionWrap) return null;
    let current = target;
    while (current && current.parentElement && current.parentElement !== sectionWrap) {
      current = current.parentElement;
    }
    return current && current.parentElement === sectionWrap ? current : null;
  }

  function ensureMenuId(menu, preferredBase) {
    if (menu.id) return menu.id;
    menuIdCounter += 1;
    menu.id = `${preferredBase || 'theme-header-nav-menu'}-${menuIdCounter}`;
    return menu.id;
  }

  function createToggle() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = CLASSNAMES.toggle;
    button.setAttribute('aria-label', 'Toggle navigation');
    button.setAttribute('aria-expanded', 'false');
    for (let i = 0; i < 3; i += 1) {
      const bar = document.createElement('span');
      bar.className = CLASSNAMES.toggleBar;
      button.appendChild(bar);
    }
    return button;
  }

  function ensureOverlay(root) {
    let overlay = root.querySelector(`.${CLASSNAMES.overlay}`);
    const wrapper = root.querySelector('.wrapper');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = CLASSNAMES.overlay;
      overlay.setAttribute('aria-hidden', 'true');
    }
    if (wrapper) {
      root.insertBefore(overlay, wrapper);
    } else if (overlay.parentNode !== root) {
      root.appendChild(overlay);
    }
    return overlay;
  }

  function ensureSpacer(root) {
    let spacer = root.previousElementSibling;
    if (spacer && spacer.classList && spacer.classList.contains(CLASSNAMES.spacer)) {
      return spacer;
    }
    spacer = document.createElement('div');
    spacer.className = CLASSNAMES.spacer;
    root.parentNode.insertBefore(spacer, root);
    return spacer;
  }

  function resolveStickyShell(root) {
    return (root && root.closest && root.closest('header')) || root;
  }

  function bindGlobals() {
    if (globalsBound || !INSTANCES.length) return;
    globalsBound = true;

    let _resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(_resizeTimer);
      _resizeTimer = setTimeout(() => {
        INSTANCES.forEach(instance => instance.onResize());
      }, 60);
    });

    window.addEventListener('scroll', () => {
      INSTANCES.forEach(instance => instance.onScroll());
    });

    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      INSTANCES.forEach(instance => {
        if (instance.isOpen()) instance.close(true);
      });
    });
  }

  function initializeRoot(root) {
    if (!root || root.getAttribute('data-header-nav-bound') === 'true') return;

    const sectionWrap = resolveSectionWrap(root);
    const primarySection = sectionWrap?.firstElementChild || root;
    const overlaySelector = `.${CLASSNAMES.overlay}`;
    const sections = sectionWrap && sectionWrap !== root
      ? Array.from(sectionWrap.children)
      : Array.from(root.children).filter(node => node !== root.querySelector(overlaySelector));
    const navEls = queryAll(root, NAV_SELECTORS);
    const hasNav = navEls.length > 0;
    const stickyShell = resolveStickyShell(root);
    const stickyEnabled = CONFIG.sticky !== false && root.classList.contains('header-fixed');
    const collapsibleEnabled = root.classList.contains('header-collapsing');

    root.setAttribute('data-header-nav-bound', 'true');
    root.classList.add(CLASSNAMES.root, CLASSNAMES.initialized);
    root.classList.toggle(CLASSNAMES.collapsible, collapsibleEnabled && hasNav);
    root.classList.remove(CLASSNAMES.stickyRoot, CLASSNAMES.stuck, CLASSNAMES.hidden);
    root.style.removeProperty(CSS_VARS.fixedLeft);
    root.style.removeProperty(CSS_VARS.fixedWidth);
    root.style.setProperty(CSS_VARS.maxHeight, CONFIG.navMaxHeight);

    sections.forEach(section => {
      section.classList.add(CLASSNAMES.section);
      section.classList.remove(CLASSNAMES.primarySection, CLASSNAMES.collapseSection);
    });
    if (primarySection) primarySection.classList.add(CLASSNAMES.primarySection);

    if (stickyShell) {
      stickyShell.classList.add(CLASSNAMES.shell);
      stickyShell.classList.toggle(CLASSNAMES.stickyRoot, stickyEnabled);
    }

    const collapseSections = [];
    let toggle = root.querySelector(`.${CLASSNAMES.toggle}`);
    let overlay = null;

    if (hasNav && collapsibleEnabled) {
      navEls.forEach(navEl => {
        const section = findTopSection(navEl, sectionWrap) || navEl;
        if (!collapseSections.includes(section)) collapseSections.push(section);
        section.classList.add(CLASSNAMES.collapseSection);
        section.setAttribute('aria-hidden', 'true');
        navEl.classList.add(CLASSNAMES.menu);
        navEl.setAttribute('aria-hidden', 'true');
      });

      toggle = toggle || createToggle();
      toggle.setAttribute('aria-controls', ensureMenuId(navEls[0], `${root.id || 'theme-header'}-nav`));
      if (toggle.parentNode !== primarySection) {
        primarySection.appendChild(toggle);
      }
      overlay = ensureOverlay(root);
    } else {
      root.classList.remove(CLASSNAMES.collapsible, CLASSNAMES.open);
      if (toggle) toggle.remove();
      const existingOverlay = root.querySelector(overlaySelector);
      if (existingOverlay) existingOverlay.remove();
      navEls.forEach(navEl => {
        const staticSection = findTopSection(navEl, sectionWrap) || navEl;
        navEl.setAttribute('aria-hidden', 'false');
        staticSection.setAttribute('aria-hidden', 'false');
      });
      toggle = null;
    }

    const legacySpacer =
      stickyShell && stickyShell !== root &&
      root.previousElementSibling &&
      root.previousElementSibling.classList &&
      root.previousElementSibling.classList.contains(CLASSNAMES.spacer)
        ? root.previousElementSibling
        : null;
    if (legacySpacer) legacySpacer.remove();

    const stickyTarget = stickyEnabled ? stickyShell || root : null;
    const spacer = stickyTarget ? ensureSpacer(stickyTarget) : null;
    const toggleStickyState = (className, enabled) => {
      root.classList.toggle(className, enabled);
      if (stickyShell && stickyShell !== root) {
        stickyShell.classList.toggle(className, enabled);
      }
    };

    const syncMetrics = () => {
      const stickyHeight = (stickyTarget || root).getBoundingClientRect().height;
      if (stickyTarget && spacer) {
        const spacerRect = spacer.getBoundingClientRect();
        stickyTarget.style.setProperty(CSS_VARS.fixedLeft, `${spacerRect.left}px`);
        stickyTarget.style.setProperty(CSS_VARS.fixedWidth, `${spacerRect.width}px`);
      }
      if (spacer) spacer.style.height = stickyHeight > 0 ? `${stickyHeight}px` : '0px';
    };

    const setOpen = (isOpen, options = {}) => {
      const { restoreFocus = false } = options;
      if (!toggle || !collapseSections.length || !root.classList.contains(CLASSNAMES.collapsible)) return;
      root.classList.toggle(CLASSNAMES.open, isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navEls.forEach(navEl => {
        navEl.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      });
      collapseSections.forEach(section => {
        section.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      });
      if (overlay) {
        overlay.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      }
      if (isOpen) toggleStickyState(CLASSNAMES.hidden, false);
      if (!isOpen && restoreFocus) toggle.focus();
    };

    const checkScrollPosition = () => {
      if (!stickyTarget) return;
      const isMobile = root.classList.contains(CLASSNAMES.mobile);
      if (isMobile) {
        toggleStickyState(CLASSNAMES.stuck, false);
        if (spacer) spacer.style.height = '0px';
      } else {
        const rect = stickyTarget.getBoundingClientRect();
        const isStuck = rect.top <= CONFIG.stickyTop;
        toggleStickyState(CLASSNAMES.stuck, isStuck);
        if (isStuck) syncMetrics();
      }
    };

    const updateSticky = () => {
      if (!stickyTarget) return;
      const isMobile = root.classList.contains(CLASSNAMES.mobile);
      if (isMobile) {
        toggleStickyState(CLASSNAMES.stuck, false);
        if (spacer) spacer.style.height = '0px';
      } else {
        checkScrollPosition();
      }
    };

    const updateViewport = () => {
      const isMobile = window.innerWidth <= CONFIG.breakpoint;
      root.classList.toggle(CLASSNAMES.mobile, isMobile);
      const stickyTopTarget = stickyTarget || root;
      if (stickyTopTarget !== root) {
        root.style.removeProperty(CSS_VARS.stickyTop);
      }
      stickyTopTarget.style.setProperty(CSS_VARS.stickyTop, `${CONFIG.stickyTop}px`);
      if (!isMobile) setOpen(false);
      updateSticky();
    };

    if (toggle) {
      toggle.addEventListener('click', () => {
        if (!root.classList.contains(CLASSNAMES.mobile) || !root.classList.contains(CLASSNAMES.collapsible)) return;
        setOpen(!root.classList.contains(CLASSNAMES.open));
      });
    }

    if (overlay) {
      overlay.addEventListener('click', () => setOpen(false, { restoreFocus: true }));
    }

    if (hasNav && CONFIG.closeOnLinkClick) {
      navEls.forEach(navEl => {
        navEl.addEventListener('click', event => {
          const link = event.target.closest('a');
          if (!link) return;
          if (!root.classList.contains(CLASSNAMES.mobile) || !root.classList.contains(CLASSNAMES.collapsible)) return;
          setOpen(false);
        });
      });
    }

    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(() => {
        syncMetrics();
        updateSticky();
      });
      resizeObserver.observe(root);
    }

    INSTANCES.push({
      onResize: updateViewport,
      onScroll: checkScrollPosition,
      isOpen: () => root.classList.contains(CLASSNAMES.open),
      close: (restoreFocus = false) => setOpen(false, { restoreFocus })
    });

    updateViewport();
  }

  function init() {
    document.querySelectorAll(ROOT_SELECTOR).forEach(initializeRoot);
    bindGlobals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
