(function() {
  'use strict';

  if (window.__themeFloatingCtaInitialized === true) {
    return;
  }
  window.__themeFloatingCtaInitialized = true;

  const CONFIG = {
    sourceId: 'site-header-cta',
    scrollY: 800,
    breakpoint: 736,
    ...((window.CarrdPluginOptions && window.CarrdPluginOptions.floatingCta) || {})
  };

  const hasFixedHeader = () => !!document.querySelector('.site-header.header-fixed');
  const isMobile = () => window.innerWidth <= CONFIG.breakpoint;

  const CLASSNAMES = {
    root: 'theme-floating-cta',
    visible: 'is-visible'
  };

  function applyVisibility(sticky, isVisible) {
    sticky.classList.toggle(CLASSNAMES.visible, isVisible);
    sticky.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
  }

  function init() {
    const sourceId = typeof CONFIG.sourceId === 'string' ? CONFIG.sourceId.trim() : '';
    if (!sourceId) return;

    const source = document.getElementById(sourceId);
    if (!source) return;

    const cloneId = `${sourceId}-sticky`;
    if (document.getElementById(cloneId)) return;

    const sticky = source.cloneNode(true);
    const sourceLinks = Array.from(source.querySelectorAll('a'));
    const stickyLinks = Array.from(sticky.querySelectorAll('a'));

    sticky.id = cloneId;
    sticky.classList.add(CLASSNAMES.root);
    sticky.setAttribute('aria-hidden', 'true');

    sticky.querySelectorAll('[id]').forEach(node => {
      if (node !== sticky) node.removeAttribute('id');
    });

    stickyLinks.forEach((link, index) => {
      link.addEventListener('click', event => {
        const href = link.getAttribute('href') || '';
        if (href.charAt(0) !== '#') return;
        if (!sourceLinks[index]) return;
        event.preventDefault();
        sourceLinks[index].click();
      });
    });

    const updateSticky = () => {
      if (hasFixedHeader() && !isMobile()) {
        applyVisibility(sticky, false);
        return;
      }
      const y = window.scrollY || window.pageYOffset || 0;
      applyVisibility(sticky, y >= CONFIG.scrollY);
    };

    document.body.appendChild(sticky);
    window.addEventListener('scroll', updateSticky, { passive: true });
    window.addEventListener('resize', updateSticky);
    updateSticky();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
