// --- 1. THE PRODUCT DATABASE ---
// This central file holds the data for both English and Arabic pages.
const products = [
    {
        id: 1,
        title: "AgroGold Liquid",
        title_ar: "أجروغولد السائل",
        image: "assets/product_liquid.png",
        badges: ["Liquid", "High Conc"],
        badges_ar: ["سائل", "تركيز عالٍ"],
        crops: ["Cereals", "Fruits"],
        crops_ar: ["حبوب", "فواكه"],
        shortDesc: "Premium foliar fertilizer for rapid absorption.",
        shortDesc_ar: "سماد ورقي ممتاز لامتصاص سريع.",
        fullDesc: "AgroGold is our flagship liquid formulation designed for immediate nutrient uptake during critical growth stages. It features advanced chelation technology to ensure stability.",
        fullDesc_ar: "أجروغولد هو تركيبة سائلة رائدة مصممة لامتصاص المغذيات الفوري خلال مراحل النمو الحرجة. يتميز بتقنية التخليب المتقدمة لضمان الاستقرار.",
        composition: [
            { element: "Nitrogen (N)", value: "20% w/v", element_ar: "نيتروجين (ن)", value_ar: "20% و/ح" },
            { element: "Phosphorus (P2O5)", value: "20% w/v", element_ar: "فوسفور (P2O5)", value_ar: "20% و/ح" },
            { element: "Potassium (K2O)", value: "20% w/v", element_ar: "بوتاسيوم (K2O)", value_ar: "20% و/ح" },
            { element: "Amino Acids", value: "2%", element_ar: "أحماض أمينية", value_ar: "2%" }
        ],
        application: {
            foliar: "2-3 L/ha",
            fertigation: "5-10 L/ha"
        }
    },
    {
        id: 2,
        title: "Emerald Grow",
        title_ar: "إيميرالد جرو",
        image: "assets/product_granular.png",
        badges: ["Granular", "Slow Release"],
        badges_ar: ["حبوب", "إطلاق بطيء"],
        crops: ["Ornamentals", "Fruits"],
        crops_ar: ["نباتات الزينة", "فواكه"],
        shortDesc: "Balanced NPK complex for soil application.",
        shortDesc_ar: "مركب NPK متوازن لتطبيقات التربة.",
        fullDesc: "Emerald Grow utilizes polymer-coating technology to release nutrients over 3 months, reducing leaching and ensuring consistent feeding.",
        fullDesc_ar: "يستخدم إيميرالد جرو تقنية الطلاء بالبوليمر لإطلاق العناصر الغذائية على مدى 3 أشهر، مما يقلل من الغسيل ويضمن تغذية متسقة.",
        composition: [
            { element: "Nitrogen (N)", value: "12%", element_ar: "نيتروجين (ن)", value_ar: "12%" },
            { element: "Phosphorus (P)", value: "12%", element_ar: "فوسفور (ف)", value_ar: "12%" },
            { element: "Potassium (K)", value: "17%", element_ar: "بوتاسيوم (ب)", value_ar: "17%" },
            { element: "Magnesium (MgO)", value: "2%", element_ar: "ماغنيسيوم (MgO)", value_ar: "2%" }
        ],
        application: {
            soil: "200-300 kg/ha"
        }
    },
    {
        id: 3,
        title: "BioVital Boost",
        title_ar: "بايوفيتال بوست",
        image: "assets/product_liquid.png",
        badges: ["Organic", "Eco-Friendly"],
        badges_ar: ["عضوي", "صديق للبيئة"],
        crops: ["Cereals", "Fruits", "Ornamentals"],
        crops_ar: ["حبوب", "فواكه", "نباتات الزينة"],
        shortDesc: "Organic biostimulant for stress resistance.",
        shortDesc_ar: "محفز حيوي عضوي لمقاومة الإجهاد.",
        fullDesc: "Derived from Ascophyllum nodosum seaweed, BioVital enhances the plant's natural immune system against drought and heat stress.",
        fullDesc_ar: "مشتق من الأعشاب البحرية (Ascophyllum nodosum)، يعزز BioVital جهاز المناعة الطبيعي للنبات ضد إجهاد الجفاف والحرارة.",
        composition: [
            { element: "Organic Matter", value: "45%", element_ar: "المادة العضوية", value_ar: "45%" },
            { element: "Alginic Acid", value: "15%", element_ar: "حمض الألجنيك", value_ar: "15%" },
            { element: "Cytokinins", value: "300 ppm", element_ar: "السيتوكينات", value_ar: "300 جزء في المليون" }
        ],
        application: { foliar: "1-2 L/ha", fertigation: "3-5 L/ha" }
    },
    {
        id: 4,
        title: "Agromen",
        title_ar: "أجرومين",
        image: "assets/agro_men.jpg",
        badges: ["chemical", "Eco-Friendly"],
        badges_ar: ["عضوي", "سائل", "صديق للبيئة"],
        crops: ["Cereals", "Fruits", "Ornamentals"],
        crops_ar: ["حبوب", "فواكه", "خضروات","نباتات الزينة"],
        shortDesc: "Balanced elements for plant nutrition and stress resistance.",
        shortDesc_ar: "عناصر متوازنة لتغذية النبات ومقاومة الإجهاد.",
        fullDesc: "Various nutrients are needed by plants, increasing vegetative growth and fruit set.",
        fullDesc_ar: "عناصر غذائية متنوعة يحتاجها النبات، يعزز من نمو النبات وزيادة النمو الخضري وعقد الثمار.",
        composition: [
            { element: "Amino acids", value: "25%", element_ar: "أحماض أمينية", value_ar: "25%" },
            { element: "Nitrogen", value: "10%", element_ar: "نيتروجين", value_ar: "10%" },
            { element: "iron", value: "1%", element_ar: "حديد", value_ar: "1%" },
            // 
            { element: "Manganese", value: "0.5%", element_ar: "منجنيز", value_ar: "0.5%" },
            { element: "zinc", value: "0.5%", element_ar: "زنك", value_ar: "0.5%" },
            { element: "Polysaccharide", value: "10%", element_ar: "بولي سكاريد", value_ar: "10%" }
        ],
        application: { foliar: "1-2 L/ha", fertigation: "3-5 L/ha" }
    },
    {
        id: 5,
        title: "Moly X",
        title_ar: "مولي إكس",
        image: "assets/moly_x.jpg",
        badges: ["chemical", "Eco-Friendly"],
        badges_ar: ["كميائي", "سائل", "صديق للبيئة"],
        crops: ["Cereals", "Fruits", "Ornamentals"],
        crops_ar: ["حبوب", "فواكه", "خضروات","نباتات الزينة"],
        shortDesc: "Rare elements for plant nutrition and fruit firmness.",
        shortDesc_ar: "عناصر نادرة لتغذية النبات وصلابة الثمار.",
        fullDesc: "Important nutrients needed by the plant, promoting the firmness of leaves and fruits.",
        fullDesc_ar: "عناصر غذائية هامة يحتاجها النبات، يعزز من  صلابة الأوراق والثمار.",
        composition: [
            { element: "Boron", value: "14%", element_ar: "بورون", value_ar: "14%" },
            { element: "Molybdenum", value: "0.1%", element_ar: "مولبيدنوم", value_ar: "0.1%" }
        ],
        application: { foliar: "1-2 L/ha", fertigation: "3-5 L/ha" }
    },
    {
        id: 6,
        title: "Humic Acid",
        title_ar: "هيومك أسيد",
        image: "assets/humic_acid.jpg",
        badges: ["chemical", "Eco-Friendly"],
        badges_ar: ["عالي التركيز", "ناعم"],
        crops: ["Cereals", "Fruits", "Ornamentals"],
        crops_ar: ["حبوب", "فواكه", "خضروات","نباتات الزينة"],
        shortDesc: "Humic acid is a natural organic fertilizer that improves soil fertility and plant health.",
        shortDesc_ar: "سماد عضوي طبيعي يحسن خصوبة التربة وصحة النباتات.",
        fullDesc: "A natural organic fertilizer that improves soil fertility and plant health. It increases the soil's ability to retain water and nutrients, promotes beneficial microbial activity, helps improve soil structure and reduce salinity, and stimulates root growth and seed germination. It can be added to the soil or used in solutions to increase nutrient absorption efficiency.",
        fullDesc_ar: "سماد عضوي طبيعي يحسن خصوبة التربة وصحة النباتات. يعمل على زيادة قدرة التربة على الاحتفاظ بالماء والمغذيات، يعزز النشاط الميكروبي المفيد، يساعد في تحسين بنية التربة وتخفيف ملوحتها، ويحفز نمو الجذور وإنبات البذور. يمكن إضافته للتربة أو استخدامه في محاليل لزيادة كفاءة امتصاص العناصر الغذائية.",
        composition: [
            { element: "Humic Acid", value: "100%", element_ar: "هيومك أسيد", value_ar: "100%" }
        ],
        application: { foliar: "3-5 L/ha", fertigation: "1-2 L/ha" }
    }

];

// --- 2. COMMON FUNCTIONS (Language Agnostic) ---

const getProduct = (id) => products.find(p => p.id === id);

// Helper to get the correct translated text
function getLocalizedText(item, key, lang) {
    return lang === 'ar' ? item[`${key}_ar`] || item[key] : item[key];
}

// Function to find the translation for fixed UI strings
function getUIText(key, lang) {
    const uiStrings = {
        'en': {
            'products_h1': 'Nutritional Solutions',
            'products_p': 'Advanced formulas for every crop and growth stage.',
            'view_details': 'View Details',
            'no_products': 'No products found',
            'adjust_filters': 'Try adjusting your filters or search query.',
            'type_title': 'Product Type',
            'app_title': 'Application',
            'crop_title': 'Crop Focus',
            'search_title': 'Search Products',
            'search_placeholder': 'Search by name or element (e.g. Boron, NPK)...',
            'element': 'Element',
            'conc': 'Concentration',
            'comp_title': 'Technical Composition',
            'app_guide': 'Application Guide',
            'request_quote': 'Request Quote',
            'sds_sheet': 'SDS Sheet',
            'reset_filters': 'Reset Filters',
            'showing_results': 'Showing {count} of {total} products',
            'active_filters': '{count} active',
            // Filter options (must match value attribute)
            'Liquid': 'Liquid Fertilizers',
            'Granular': 'Granular',
            'Powder': 'Water Soluble Powder',
            'Organic': 'Biostimulants',
            'foliar': 'Foliar',
            'soil': 'Soil Application',
            'fertigation': 'Fertigation',
            'Cereals': 'Cereals',
            'Fruits': 'Fruits & Vegetables',
            'Ornamentals': 'Ornamentals'
        },
        'ar': {
            'products_h1': 'حلول التغذية',
            'products_p': 'تركيبات متقدمة لكل محصول ومرحلة نمو.',
            'view_details': 'عرض التفاصيل',
            'no_products': 'لا يوجد منتجات',
            'adjust_filters': 'يرجى تعديل الفلاتر أو نص البحث.',
            'type_title': 'نوع المنتج',
            'app_title': 'التطبيق',
            'crop_title': 'تركيز المحصول',
            'search_title': 'بحث عن منتج',
            'search_placeholder': 'ابحث باسم المنتج أو العنصر (مثل بورون، NPK)...',
            'element': 'العنصر',
            'conc': 'التركيز',
            'comp_title': 'التركيبة الفنية',
            'app_guide': 'دليل التطبيق',
            'request_quote': 'طلب عرض سعر',
            'sds_sheet': 'ورقة بيانات السلامة',
            'reset_filters': 'إعادة ضبط',
            'showing_results': 'عرض {count} من {total} منتجات',
            'active_filters': '{count} نشط',
            // Filter options
            'Liquid': 'الأسمدة السائلة',
            'Granular': 'الحبيبية',
            'Powder': 'مسحوق قابل للذوبان',
            'Organic': 'المحفزات الحيوية',
            'foliar': 'ورقي',
            'soil': 'تطبيق التربة',
            'fertigation': 'تسميد',
            'Cereals': 'الحبوب',
            'Fruits': 'الفواكه والخضروات',
            'Ornamentals': 'نباتات الزينة'
        }
    };
    return uiStrings[lang][key] || uiStrings['en'][key] || key;
}

// --- 3. FILTER & SEARCH LOGIC ---
let searchDebounceTimer = null;

function setupFilters(lang) {
    // 1. Checkboxes change listener
    const checkboxes = document.querySelectorAll('.filter-option input');
    checkboxes.forEach(box => {
        box.addEventListener('change', () => filterAndRender(lang));
    });

    // 2. Text Search Input with 150ms debounce
    const searchInput = document.getElementById('productSearch');
    const searchBox = document.querySelector('.search-box');
    const clearSearchBtn = document.getElementById('clearSearch');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (searchBox) {
                searchBox.classList.toggle('has-text', query.length > 0);
            }
            clearTimeout(searchDebounceTimer);
            searchDebounceTimer = setTimeout(() => {
                filterAndRender(lang);
            }, 150);
        });
    }

    // 3. Clear Search Button
    if (clearSearchBtn && searchInput) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            if (searchBox) searchBox.classList.remove('has-text');
            filterAndRender(lang);
            searchInput.focus();
        });
    }

    // 4. Reset All Filters Button
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            checkboxes.forEach(cb => { cb.checked = false; });
            if (searchInput) {
                searchInput.value = '';
                if (searchBox) searchBox.classList.remove('has-text');
            }
            filterAndRender(lang);
        });
    }
}

function filterAndRender(lang) {
    const activeTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);
    const activeApps = Array.from(document.querySelectorAll('input[name="app"]:checked')).map(cb => cb.value);
    const activeCrops = Array.from(document.querySelectorAll('input[name="crop"]:checked')).map(cb => cb.value);

    const searchInput = document.getElementById('productSearch');
    const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const filtered = products.filter(product => {
        // Filter by Types
        const matchesType = activeTypes.length === 0 || activeTypes.some(type => product.badges.includes(type));
        
        // Filter by Applications
        const productAppKeys = Object.keys(product.application);
        const matchesApp = activeApps.length === 0 || activeApps.some(app => productAppKeys.includes(app));
        
        // Filter by Crops
        const matchesCrop = activeCrops.length === 0 || activeCrops.some(crop => product.crops.includes(crop));

        // Search text matching (title, desc, composition elements)
        let matchesSearch = true;
        if (searchQuery.length > 0) {
            const titleMatch = (product.title && product.title.toLowerCase().includes(searchQuery)) ||
                               (product.title_ar && product.title_ar.toLowerCase().includes(searchQuery));
            const shortDescMatch = (product.shortDesc && product.shortDesc.toLowerCase().includes(searchQuery)) ||
                                  (product.shortDesc_ar && product.shortDesc_ar.toLowerCase().includes(searchQuery));
            const fullDescMatch = (product.fullDesc && product.fullDesc.toLowerCase().includes(searchQuery)) ||
                                 (product.fullDesc_ar && product.fullDesc_ar.toLowerCase().includes(searchQuery));
            const compositionMatch = product.composition && product.composition.some(item => 
                (item.element && item.element.toLowerCase().includes(searchQuery)) ||
                (item.element_ar && item.element_ar.toLowerCase().includes(searchQuery))
            );

            matchesSearch = titleMatch || shortDescMatch || fullDescMatch || compositionMatch;
        }

        return matchesType && matchesApp && matchesCrop && matchesSearch;
    });

    // Update UI counters and reset button states
    updateFilterUI(filtered.length, products.length, activeTypes.length + activeApps.length + activeCrops.length + (searchQuery.length > 0 ? 1 : 0), lang);

    // Render filtered results
    renderProducts(filtered, lang);
}

function updateFilterUI(count, total, activeFilterCount, lang) {
    // 1. Results counter
    const counterEl = document.getElementById('resultsCounter');
    if (counterEl) {
        const textTemplate = getUIText('showing_results', lang);
        counterEl.innerText = textTemplate.replace('{count}', count).replace('{total}', total);
    }

    // 2. Active filter count badge
    const badgeEl = document.getElementById('activeFilterBadge');
    if (badgeEl) {
        if (activeFilterCount > 0) {
            const badgeTemplate = getUIText('active_filters', lang);
            badgeEl.innerText = badgeTemplate.replace('{count}', activeFilterCount);
            badgeEl.style.display = 'inline-block';
        } else {
            badgeEl.style.display = 'none';
        }
    }

    // 3. Reset button visibility toggle
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.style.visibility = activeFilterCount > 0 ? 'visible' : 'hidden';
    }
}


// --- 4. RENDER AND MODAL LOGIC ---

function renderProducts(list, lang) {
    const container = document.getElementById('product-container');
    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = `<div class="no-products-msg">
            <h3>${getUIText('no_products', lang)}</h3>
            <p>${getUIText('adjust_filters', lang)}</p>
        </div>`;
        return;
    }

    container.innerHTML = list.map(product => {
        const title = getLocalizedText(product, 'title', lang);
        const shortDesc = getLocalizedText(product, 'shortDesc', lang);
        const badges = lang === 'ar' ? product.badges_ar : product.badges;
        const detailsText = getUIText('view_details', lang);

        return `
            <div class="product-card product-card-animating" data-id="${product.id}" data-lang="${lang}">
                <img src="${product.image}" alt="${title}" class="product-img" loading="lazy">
                <div class="product-info">
                    <div class="product-badges">
                        ${badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
                    </div>
                    <h3 class="product-title">${title}</h3>
                    <p class="mb-sm">${shortDesc}</p>
                    <button class="btn btn-outline product-card-btn">${detailsText}</button>
                </div>
            </div>
        `;
    }).join('');

    // Attach click event listeners dynamically (no inline onclick)
    container.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.getAttribute('data-id'), 10);
            const cardLang = card.getAttribute('data-lang');
            openProductModal(id, cardLang);
        });
    });
}


function openProductModal(id, lang) {
    const product = getProduct(id);
    if (!product) return;

    // 1. Text & Image
    document.getElementById('modalImg').src = product.image;
    document.getElementById('modalTitle').innerText = getLocalizedText(product, 'title', lang);
    document.getElementById('modalDesc').innerText = getLocalizedText(product, 'fullDesc', lang);
    document.getElementById('modalCompositionTitle').innerText = getUIText('comp_title', lang);
    document.getElementById('modalApplicationTitle').innerText = getUIText('app_guide', lang);
    document.getElementById('modalRequestQuote').innerText = getUIText('request_quote', lang);
    document.getElementById('modalSDS').innerHTML = `<i class="fas fa-file-pdf"></i> ${getUIText('sds_sheet', lang)}`;
    const closeBtn = document.getElementById('modalCloseButton');
    if (closeBtn) {
        closeBtn.setAttribute('aria-label', lang === 'ar' ? 'إغلاق' : 'Close');
    }

    // 2. Badges
    const badgeContainer = document.getElementById('modalBadges');
    const badges = lang === 'ar' ? product.badges_ar : product.badges;
    badgeContainer.innerHTML = badges.map(b => `<span class="badge">${b}</span>`).join('');

    // 3. Composition Table
    const tableBody = document.getElementById('modalCompositionBody');
    document.getElementById('compositionHeader').innerHTML = `<th>${getUIText('element', lang)}</th><th>${getUIText('conc', lang)}</th>`;

    tableBody.innerHTML = product.composition.map(row => `
        <tr>
            <td>${getLocalizedText(row, 'element', lang)}</td>
            <td>${getLocalizedText(row, 'value', lang)}</td>
        </tr>
    `).join('');

    // 4. Application Rates
    const appContainer = document.getElementById('modalApplication');
    let appHTML = '';

    const renderAppIcon = (key, rate) => {
        let iconClass = '';
        let label = getUIText(key, lang);

        if (key === 'foliar') { iconClass = 'fa-spray-can'; }
        if (key === 'fertigation') { iconClass = 'fa-tint'; }
        if (key === 'soil') { iconClass = 'fa-seedling'; }

        return `
            <div class="text-center">
                <i class="fas ${iconClass} app-rate-icon"></i>
                <p class="app-rate-text">${label}<br><strong>${rate}</strong></p>
            </div>`;
    };

    for (const key in product.application) {
        if (product.application[key]) {
            appHTML += renderAppIcon(key, product.application[key]);
        }
    }
    appContainer.innerHTML = appHTML;

    // 5. Show Modal
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

window.addEventListener('click', (event) => {
    const modal = document.getElementById('productModal');
    if (event.target === modal) closeModal();
});