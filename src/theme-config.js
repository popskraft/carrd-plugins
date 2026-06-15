window.CarrdPluginOptions = window.CarrdPluginOptions || {};

/* Shopping Cart */
window.CarrdPluginOptions.shoppingCart = {
    currency: '$',
    currencyPosition: 'before',
    position: 'top-right',
    storageKey: 'carrd_cart_v1',
    orderInputSelector: '[name="order-details"], .cart-output, [data-cart-output="order-details"]',
    orderInputClass: '.cart-output',
    orderInputId: 'order-details',
    checkoutTargetSelector: '.shopping-cart-target, [data-shopping-cart-target]',
    checkoutTargetId: 'shopping-cart',
    texts: {
        title: 'Shopping Cart',
        empty: 'Your cart is empty.',
        checkout: 'Checkout',
        total: 'Total',
        remove: 'Remove',
        required: 'Required',
        addedToCart: 'Added "${name}" to cart',
        errorName: 'Invalid product name',
        errorPrice: 'Invalid price for ${name}',
        errorForm: 'Error: Could not find the order form. Please contact support.',
        consoleErrorForm: 'Carrd Cart: Could not find "Order Details" field. Please ensure a textarea matching orderInputSelector, .cart-output, #order-details, or [data-cart-output="order-details"] exists.'
    }
};

/* FAQ */
window.CarrdPluginOptions.faq = {
    containerSelector: '.FAQContainer',
    dividerSelector: 'hr.divider-component',
    headerTags: ['H1', 'H2', 'H3'],
    allowMultipleOpen: false,
    defaultOpen: false
};

/* Accordeon */
window.CarrdPluginOptions.accordeon = {
    enabled: true,
    linkPrefix: '#accordeon-',
    linkSelector: 'a[href^="#accordeon-"]',
    targetAttributes: ['data-accordeon', 'data-accorderon'],
    defaultOpen: false,
    scrollOnOpen: true,
    scrollBehavior: 'smooth',
    scrollBlock: 'start'
};

/* Cards */
window.CarrdPluginOptions.cards = {
    enabled: true,
    cardSelector: '.cards',
    defaultCardBg: 'var(--theme-card-bg-default)'
};

/* Grid Cluster */
window.CarrdPluginOptions.gridCluster = {
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

/* Legacy note: the old `columns` plugin is archived and no longer participates in the active plugin contract. */

/* No-loadwaiting */
window.CarrdPluginOptions.noLoadwaiting = {
    animationDuration: 750,
    observerTimeout: 5000,
    scrollPulseInterval: 120,
    scrollPulseCount: 2,
    rafPulseCount: 2
};

/* Slider */
window.CarrdPluginOptions.slider = {
    slideSelector: '.slider',
    showDots: true,
    showArrows: true,
    loop: false,
    autoplay: false,
    autoplayInterval: 5000,
    gap: 16,
    hideOverflow: false,
    slidesPerView: 1,
    peek: 0,
    maxSlideWidth: 400,
    equalHeight: true,
    breakpoints: {
        737: { slidesPerView: 3 },            // Tablet/Mobile
        1280: { slidesPerView: 4, gap: 32 }   // Desktop M
    }
};

/* Modal */
window.CarrdPluginOptions.modal = {
    modalSelector: '.container-component.modal',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    lockBodyScroll: true,
    preventWhenCartOpen: false
};

/* Typography */
window.CarrdPluginOptions.typography = {
    containerSelector: '.txt',
    paragraphSelector: 'span.p'
};

/* Cookie Banner */
window.CarrdPluginOptions.cookieBanner = {
    bannerSelector: '.theme-cookie-banner, .cookie-banner',
    bannerId: 'cookie-baner',
    cookieName: 'cookies_accepted',
    cookieDays: 7,
    fadeOutDuration: 300,
    fadeInDuration: 400,
    showDelay: 1000,
    position: 'bottom-left'
};

/* Header Nav */
window.CarrdPluginOptions.headerNav = {
    breakpoint: 736,
    closeOnLinkClick: true,
    sticky: true,
    hideOnScrollDown: false,
    stickyTop: 0,
    navMaxHeight: '80vh'
};

/* Floating CTA */
window.CarrdPluginOptions.floatingCta = {
    sourceId: 'site-header-cta',
    scrollY: 800
};
