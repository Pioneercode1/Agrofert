document.addEventListener('DOMContentLoaded', () => {
    // Determine language from document html tag (default 'ar')
    const lang = document.documentElement.lang || 'ar';

    if (typeof products !== 'undefined' && typeof renderProducts === 'function' && typeof setupFilters === 'function') {
        setupFilters(lang);
        filterAndRender(lang);
    }
});
