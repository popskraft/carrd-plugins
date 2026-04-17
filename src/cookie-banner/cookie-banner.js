(function() {
  'use strict';

  // ==========================================
  // CONFIGURATION
  // ==========================================

  const DEFAULTS = {
    bannerSelector: '.theme-cookie-banner, .cookie-banner',
    bannerId: 'cookie-baner',       // Banner element ID
    cookieName: 'cookies_accepted', // Cookie name for storing consent
    cookieDays: 7,                  // Cookie lifetime in days
    fadeOutDuration: 300,           // Fade-out animation duration (ms)
    fadeInDuration: 400,            // Fade-in animation duration (ms)
    showDelay: 1000,                // Delay before showing banner (ms) - allows page to fully load
    position: 'bottom-left'         // Position: bottom-left, bottom-right, bottom-center, top-left, top-right, top-center
  };

  // Merge with external options via standard window.CarrdPluginOptions
  const externalOptions =
    (typeof window !== 'undefined' &&
      window.CarrdPluginOptions &&
      window.CarrdPluginOptions.cookieBanner) ||
    {};

  const CONFIG = {};
  for (const key in DEFAULTS) {
    if (Object.prototype.hasOwnProperty.call(DEFAULTS, key)) {
      CONFIG[key] = Object.prototype.hasOwnProperty.call(externalOptions, key)
        ? externalOptions[key]
        : DEFAULTS[key];
    }
  }

  // ==========================================
  // HELPER FUNCTIONS (Cookie utilities)
  // ==========================================

  /**
   * Get cookie value by name
   * @param {string} name - Cookie name
   * @returns {string|null} - Value or null
   */
  function getCookie(name) {
    if (typeof name !== 'string' || name.length === 0) return null;

    const cookies = document.cookie ? document.cookie.split(';') : [];
    for (const entry of cookies) {
      const trimmed = entry.trim();
      if (!trimmed) continue;

      const separatorIndex = trimmed.indexOf('=');
      const rawName = separatorIndex >= 0 ? trimmed.slice(0, separatorIndex) : trimmed;
      if (rawName !== name) continue;

      const rawValue = separatorIndex >= 0 ? trimmed.slice(separatorIndex + 1) : '';
      try {
        return decodeURIComponent(rawValue);
      } catch (e) {
        return rawValue;
      }
    }

    return null;
  }

  /**
   * Set a cookie
   * @param {string} name - Cookie name
   * @param {string} value - Cookie value
   * @param {number} days - Lifetime in days
   */
  function setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/; SameSite=Lax';
  }

  // ==========================================
  // POSITIONING (Styles for different positions)
  // ==========================================

  /**
   * Get positioning styles
   * @param {string} position - Banner position
   * @returns {Object} - CSS properties object
   */
  function getPositionStyles(position) {
    const base = {
      position: 'fixed',
      zIndex: '9999',
      margin: '0',
      maxWidth: 'calc(100vw - 2rem)'
    };

    switch (position) {
      case 'bottom-right':
        base.bottom = '1rem';
        base.right = '1rem';
        base.left = 'auto';
        base.top = 'auto';
        break;
      case 'bottom-center':
        base.bottom = '1rem';
        base.left = '50%';
        base.right = 'auto';
        base.top = 'auto';
        base.transform = 'translateX(-50%)';
        break;
      case 'top-left':
        base.top = '1rem';
        base.left = '1rem';
        base.bottom = 'auto';
        base.right = 'auto';
        break;
      case 'top-right':
        base.top = '1rem';
        base.right = '1rem';
        base.bottom = 'auto';
        base.left = 'auto';
        break;
      case 'top-center':
        base.top = '1rem';
        base.left = '50%';
        base.right = 'auto';
        base.bottom = 'auto';
        base.transform = 'translateX(-50%)';
        break;
      case 'bottom-left':
      default:
        base.bottom = '1rem';
        base.left = '1rem';
        base.right = 'auto';
        base.top = 'auto';
        break;
    }

    return base;
  }

  /**
   * Apply styles object to element
   * @param {HTMLElement} element - DOM element
   * @param {Object} styles - CSS properties object
   */
  function applyStyles(element, styles) {
    for (const prop in styles) {
      if (Object.prototype.hasOwnProperty.call(styles, prop)) {
        element.style[prop] = styles[prop];
      }
    }
  }

  // ==========================================
  // MAIN PLUGIN LOGIC
  // ==========================================

  /**
   * Accept cookies and hide banner
   * @param {HTMLElement} banner - Banner element
   */
  function acceptCookies(banner) {
    // Save consent to cookie
    setCookie(CONFIG.cookieName, '1', CONFIG.cookieDays);

    // Smooth fade-out effect
    banner.style.transition = 'opacity ' + CONFIG.fadeOutDuration + 'ms ease';
    banner.style.opacity = '0';

    // After animation completes — fully hide
    setTimeout(function() {
      banner.style.display = 'none';
    }, CONFIG.fadeOutDuration);
  }

  /**
   * Initialize the banner
   */
  function init() {
    const findBanner = () => {
      const selector = typeof CONFIG.bannerSelector === 'string' ? CONFIG.bannerSelector.trim() : '';
      const bySelector = selector ? document.querySelector(selector) : null;
      if (bySelector) return bySelector;
      return CONFIG.bannerId ? document.getElementById(CONFIG.bannerId) : null;
    };

    // If cookie already set — hide banner and exit
    if (getCookie(CONFIG.cookieName) === '1') {
      const existingBanner = findBanner();
      if (existingBanner) {
        existingBanner.style.display = 'none';
      }
      return;
    }

    // Find banner by selector first, ID second
    const banner = findBanner();
    if (!banner) {
      // Banner not found — do nothing (maybe not needed on this page)
      return;
    }

    if (banner.dataset.cookieBannerInitialized === 'true') return;
    banner.dataset.cookieBannerInitialized = 'true';
    banner.classList.add('theme-cookie-banner');

    // Apply positioning styles
    const positionStyles = getPositionStyles(CONFIG.position);
    applyStyles(banner, positionStyles);

    // Find accept button (priority: role='button', then .icons-component a, then any a)
    const acceptBtn =
      banner.querySelector('a[role="button"]') ||
      banner.querySelector('[data-cookie-accept]') ||
      banner.querySelector('.icons-component a');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function(e) {
        e.preventDefault();
        acceptCookies(banner);
      });
    }

    // Force explicit display mode so we override base CSS hide rule.
    // Carrd "columns" containers are flex-based; other blocks can use block.
    banner.style.display = banner.classList.contains('columns') ? 'flex' : 'block';
    banner.style.visibility = 'visible';
    banner.style.opacity = '0';
    banner.style.transition = 'opacity ' + CONFIG.fadeInDuration + 'ms ease';

    // Show banner after delay to ensure page is fully loaded and animation works
    setTimeout(function() {
      banner.style.opacity = '1';
    }, CONFIG.showDelay);
  }

  // ==========================================
  // RUN (after DOM is loaded)
  // ==========================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
