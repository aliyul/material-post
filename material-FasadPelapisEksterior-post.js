// ============================================================
// MATERIAL FASAD PELAPIS EKSTERIOR — POST
// v3.0.0 — Clean Refactor: generateBreadcrumbShared Only
// ============================================================

console.log('[material-fasad-post] 📄 File loaded, waiting for DOM...');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

const urlMappingPanelFasadPost = {
    // "https://www.betonjayareadymix.com/2019/04/harga-panel-fasad.html": "Harga Panel Fasad",
    // "https://www.betonjayareadymix.com/2019/04/jenis-panel-fasad.html": "Jenis Panel Fasad",
    // "https://www.betonjayareadymix.com/2019/04/cara-pasang-panel-fasad.html": "Cara Pasang Panel Fasad"
};

const urlMappingExpandedMetalPost = {
    "https://www.betonjayareadymix.com/2019/04/harga-besi-expanded-metal.html": "Harga Besi Expanded Metal"
};

const urlMappingGranitExteriorPost = {
    // "https://www.betonjayareadymix.com/2019/04/harga-granit-exterior.html": "Harga Granit Exterior",
    // "https://www.betonjayareadymix.com/2019/04/ukuran-granit-exterior.html": "Ukuran Granit Exterior"
};

const urlMappingCladdingFasadPost = {
    // "https://www.betonjayareadymix.com/2019/04/harga-cladding-fasad.html": "Harga Cladding Fasad",
    // "https://www.betonjayareadymix.com/2019/04/jenis-cladding-fasad.html": "Jenis Cladding Fasad"
};

const urlMappingGrcFasadPost = {
    // "https://www.betonjayareadymix.com/2019/04/harga-grc-fasad.html": "Harga GRC Fasad",
    // "https://www.betonjayareadymix.com/2019/04/ukuran-grc-fasad.html": "Ukuran GRC Fasad"
};

const urlMappingLouversPost = {
    // "https://www.betonjayareadymix.com/2019/04/harga-louvers.html": "Harga Louvers",
    // "https://www.betonjayareadymix.com/2019/04/jenis-louvers-ventilasi.html": "Jenis Louvers Ventilasi"
};

const urlMappingSunShadingPost = {
    // "https://www.betonjayareadymix.com/2019/04/harga-sun-shading.html": "Harga Sun Shading",
    // "https://www.betonjayareadymix.com/2019/04/jenis-sun-shading-fasad.html": "Jenis Sun Shading Fasad"
};

const urlMappingCatEksteriorPost = {
    // "https://www.betonjayareadymix.com/2019/04/harga-cat-eksterior.html": "Harga Cat Eksterior",
    // "https://www.betonjayareadymix.com/2019/04/merk-cat-eksterior-terbaik.html": "Merk Cat Eksterior Terbaik"
};

const urlMappingCatTembokLuarPost = {
    // "https://www.betonjayareadymix.com/2019/04/harga-cat-tembok-luar.html": "Harga Cat Tembok Luar",
    // "https://www.betonjayareadymix.com/2019/04/cara-memilih-cat-tembok-luar.html": "Cara Memilih Cat Tembok Luar"
};

const urlMappingPlesterEksteriorPost = {
    // "https://www.betonjayareadymix.com/2019/04/harga-plester-eksterior.html": "Harga Plester Eksterior",
    // "https://www.betonjayareadymix.com/2019/04/cara-plester-eksterior.html": "Cara Plester Eksterior"
};

const urlMappingBatuAlamDindingPost = {
    // "https://www.betonjayareadymix.com/2019/04/harga-batu-alam-dinding.html": "Harga Batu Alam Dinding",
    // "https://www.betonjayareadymix.com/2019/04/jenis-batu-alam-dinding.html": "Jenis Batu Alam Dinding"
};

const urlMappingKeramikEksteriorPost = {
    // "https://www.betonjayareadymix.com/2019/04/harga-keramik-eksterior.html": "Harga Keramik Eksterior",
    // "https://www.betonjayareadymix.com/2019/04/ukuran-keramik-eksterior.html": "Ukuran Keramik Eksterior"
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT GUARD
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[material-fasad-post] 🔍 Check URL: ' + cleanUrl);

    var ALL_MAPPINGS = [
        urlMappingPanelFasadPost,
        urlMappingExpandedMetalPost,
        urlMappingGranitExteriorPost,
        urlMappingCladdingFasadPost,
        urlMappingGrcFasadPost,
        urlMappingLouversPost,
        urlMappingSunShadingPost,
        urlMappingCatEksteriorPost,
        urlMappingCatTembokLuarPost,
        urlMappingPlesterEksteriorPost,
        urlMappingBatuAlamDindingPost,
        urlMappingKeramikEksteriorPost
    ];

    var foundIndex = -1;
    var foundMappingName = '';

    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') continue;
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }

    if (foundIndex === -1) {
        console.log('[material-fasad-post] ⏭️ SKIP — URL tidak cocok');
        window.__materialFasadPostActive = false;
        return;
    }

    window.__materialFasadPostActive = true;
    window.__materialFasadPostMatchIndex = foundIndex;
    window.__materialFasadPostMatchMappingName = foundMappingName;

    console.log('[material-fasad-post] ✅ Match #' + (foundIndex + 1) + ' — "' + foundMappingName + '"');
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA
// ═══════════════════════════════════════════════════════════

function initMaterialFasadPost() {
    // ⚡ Guard flag
    if (!window.__materialFasadPostActive) {
        console.log('[material-fasad-post] ⏭️ Execute SKIP');
        return;
    }

    console.log('[material-fasad-post] 🚀 Execute');

    var cleanUrl = window.location.href.split(/[?#]/)[0];

    // ═══════════════════════════════════════════════════════
    // [BLOK 1] PANEL FASAD
    // ═══════════════════════════════════════════════════════
    if (urlMappingPanelFasadPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingPanelFasadPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html' },
                { name: 'Panel Fasad', url: 'https://www.betonjayareadymix.com/p/panel-fasad.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 2] EXPANDED METAL
    // ═══════════════════════════════════════════════════════
    if (urlMappingExpandedMetalPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingExpandedMetalPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html' },
                { name: 'Expanded Metal', url: 'https://www.betonjayareadymix.com/p/expanded-metal.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 3] GRANIT EXTERIOR
    // ═══════════════════════════════════════════════════════
    if (urlMappingGranitExteriorPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingGranitExteriorPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html' },
                { name: 'Granit Exterior', url: 'https://www.betonjayareadymix.com/p/granit-exterior.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 4] CLADDING FASAD
    // ═══════════════════════════════════════════════════════
    if (urlMappingCladdingFasadPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingCladdingFasadPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html' },
                { name: 'Cladding Fasad', url: 'https://www.betonjayareadymix.com/p/cladding-fasad.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 5] GRC FASAD
    // ═══════════════════════════════════════════════════════
    if (urlMappingGrcFasadPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingGrcFasadPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html' },
                { name: 'GRC Fasad', url: 'https://www.betonjayareadymix.com/p/grc-fasad.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 6] LOUVERS
    // ═══════════════════════════════════════════════════════
    if (urlMappingLouversPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingLouversPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html' },
                { name: 'Louvers', url: 'https://www.betonjayareadymix.com/p/louvers.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 7] SUN SHADING
    // ═══════════════════════════════════════════════════════
    if (urlMappingSunShadingPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingSunShadingPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html' },
                { name: 'Sun Shading', url: 'https://www.betonjayareadymix.com/p/sun-shading.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 8] CAT EKSTERIOR
    // ═══════════════════════════════════════════════════════
    if (urlMappingCatEksteriorPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingCatEksteriorPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html' },
                { name: 'Cat Eksterior', url: 'https://www.betonjayareadymix.com/p/cat-eksterior.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 9] CAT TEMBOK LUAR
    // ═══════════════════════════════════════════════════════
    if (urlMappingCatTembokLuarPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingCatTembokLuarPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html' },
                { name: 'Cat Tembok Luar', url: 'https://www.betonjayareadymix.com/p/cat-tembok-luar.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 10] PLESTER EKSTERIOR
    // ═══════════════════════════════════════════════════════
    if (urlMappingPlesterEksteriorPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingPlesterEksteriorPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html' },
                { name: 'Plester Eksterior', url: 'https://www.betonjayareadymix.com/p/plester-eksterior.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 11] BATU ALAM DINDING
    // ═══════════════════════════════════════════════════════
    if (urlMappingBatuAlamDindingPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingBatuAlamDindingPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html' },
                { name: 'Batu Alam Dinding', url: 'https://www.betonjayareadymix.com/p/batu-alam-dinding.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 12] KERAMIK EKSTERIOR
    // ═══════════════════════════════════════════════════════
    if (urlMappingKeramikEksteriorPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingKeramikEksteriorPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html' },
                { name: 'Keramik Eksterior', url: 'https://www.betonjayareadymix.com/p/keramik-eksterior.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

} // <-- penutup fungsi initMaterialFasadPost

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] AUTO-INIT
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMaterialFasadPost);
} else {
    initMaterialFasadPost();
}
