// ============================================================
// MATERIAL ATAP PENUTUP — POST
// v3.0.0 — Clean Refactor: generateBreadcrumbShared Only
// ============================================================

console.log('[material-atap-penutup-post] 📄 File loaded, waiting for DOM...');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

// ============================================================
// [VARIANT] - GENTENG
// ============================================================
const urlMappingGentengPost = {
    // "https://www.betonjayareadymix.com/p/genteng.html": "Genteng",
    // "https://www.betonjayareadymix.com/2021/06/harga-genteng-terbaru.html": "Harga Genteng Terbaru",
    // "https://www.betonjayareadymix.com/2021/06/jenis-genteng-rumah.html": "Jenis Genteng Rumah"
};

// ============================================================
// [SUB-VARIANT] - GENTENG TANAH LIAT
// ============================================================
const urlMappingGentengTanahLiatPost = {
    "https://www.betonjayareadymix.com/2021/06/genteng-karang-pilang-asli.html": "Genteng Karang Pilang Asli",
    "https://www.betonjayareadymix.com/2021/06/genteng-karang-pilang-jakarta.html": "Genteng Karang Pilang Jakarta",
    "https://www.betonjayareadymix.com/2021/06/genteng-karang-pilang-di-bogor.html": "Genteng Karang Pilang Di Bogor",
    "https://www.betonjayareadymix.com/2021/06/genteng-karang-pilang-anti-lumut.html": "Genteng Karang Pilang Anti Lumut",
    "https://www.betonjayareadymix.com/2021/06/genteng-karang-pilang-ambulu.html": "Genteng Karang Pilang Ambulu"
};

// ============================================================
// [SUB-VARIANT] - GENTENG BETON
// ============================================================
const urlMappingGentengBetonPost = {
    // "https://www.betonjayareadymix.com/2021/06/harga-genteng-beton.html": "Harga Genteng Beton",
    // "https://www.betonjayareadymix.com/2021/06/genteng-beton-murah.html": "Genteng Beton Murah",
    // "https://www.betonjayareadymix.com/2021/06/genteng-beton-pasir.html": "Genteng Beton Pasir"
};

// ============================================================
// [SUB-VARIANT] - GENTENG KERAMIK
// ============================================================
const urlMappingGentengKeramikPost = {
    // "https://www.betonjayareadymix.com/2021/06/harga-genteng-keramik.html": "Harga Genteng Keramik",
    // "https://www.betonjayareadymix.com/2021/06/genteng-keramik-roman.html": "Genteng Keramik Roman",
    // "https://www.betonjayareadymix.com/2021/06/genteng-keramik-malaysia.html": "Genteng Keramik Malaysia"
};

// ============================================================
// [SUB-VARIANT] - ATAP SPANDEK
// ============================================================
const urlMappingAtapSpandekPost = {
    // "https://www.betonjayareadymix.com/2021/06/harga-atap-spandek.html": "Harga Atap Spandek",
    // "https://www.betonjayareadymix.com/2021/06/atap-spandek-per-meter.html": "Atap Spandek Per Meter",
    // "https://www.betonjayareadymix.com/2021/06/atap-spandek-warna.html": "Atap Spandek Warna"
};

// ============================================================
// [SUB-VARIANT] - ATAP ZINCALUME
// ============================================================
const urlMappingAtapZincalumePost = {
    // "https://www.betonjayareadymix.com/2021/06/harga-atap-zincalume.html": "Harga Atap Zincalume",
    // "https://www.betonjayareadymix.com/2021/06/atap-zincalume-per-meter.html": "Atap Zincalume Per Meter",
    // "https://www.betonjayareadymix.com/2021/06/zincalume-vs-spandek.html": "Zincalume vs Spandek"
};

// ============================================================
// [SUB-VARIANT] - ATAP BITUMEN
// ============================================================
const urlMappingAtapBitumenPost = {
    // "https://www.betonjayareadymix.com/2021/06/harga-atap-bitumen.html": "Harga Atap Bitumen",
    // "https://www.betonjayareadymix.com/2021/06/atap-bitumen-onduline.html": "Atap Bitumen Onduline",
    // "https://www.betonjayareadymix.com/2021/06/kelebihan-atap-bitumen.html": "Kelebihan Atap Bitumen"
};

// ============================================================
// [SUB-VARIANT] - TALANG ATAP
// ============================================================
const urlMappingTalangAtapPost = {
    // "https://www.betonjayareadymix.com/2021/06/harga-talang-atap.html": "Harga Talang Atap",
    // "https://www.betonjayareadymix.com/2021/06/talang-atap-seng.html": "Talang Atap Seng",
    // "https://www.betonjayareadymix.com/2021/06/talang-atap-pvc.html": "Talang Atap PVC"
};

// ============================================================
// [SUB-VARIANT] - SEKRUP ATAP
// ============================================================
const urlMappingSekrupAtapPost = {
    // "https://www.betonjayareadymix.com/2021/06/harga-sekrup-atap.html": "Harga Sekrup Atap",
    // "https://www.betonjayareadymix.com/2021/06/sekrup-atap-galvanis.html": "Sekrup Atap Galvanis",
    // "https://www.betonjayareadymix.com/2021/06/sekrup-atap-baja-ringan.html": "Sekrup Atap Baja Ringan"
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT GUARD
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[material-atap-penutup-post] 🔍 Check URL: ' + cleanUrl);

    var ALL_MAPPINGS = [
        urlMappingGentengPost,
        urlMappingGentengTanahLiatPost,
        urlMappingGentengBetonPost,
        urlMappingGentengKeramikPost,
        urlMappingAtapSpandekPost,
        urlMappingAtapZincalumePost,
        urlMappingAtapBitumenPost,
        urlMappingTalangAtapPost,
        urlMappingSekrupAtapPost
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
        console.log('[material-atap-penutup-post] ⏭️ SKIP — URL tidak cocok');
        window.__materialAtapPenutupPostActive = false;
        return;
    }

    window.__materialAtapPenutupPostActive = true;
    window.__materialAtapPenutupPostMatchIndex = foundIndex;
    window.__materialAtapPenutupPostMatchMappingName = foundMappingName;

    console.log('[material-atap-penutup-post] ✅ Match #' + (foundIndex + 1) + ' — "' + foundMappingName + '"');
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA
// ═══════════════════════════════════════════════════════════

function initMaterialAtapPenutupPost() {
    // ⚡ Guard flag
    if (!window.__materialAtapPenutupPostActive) {
        console.log('[material-atap-penutup-post] ⏭️ Execute SKIP');
        return;
    }

    console.log('[material-atap-penutup-post] 🚀 Execute');

    var cleanUrl = window.location.href.split(/[?#]/)[0];

    // ✅ Guard elemen DOM
    var MaterialAtapPenutupPost = document.getElementById("MaterialAtapPenutupPost");
    if (!MaterialAtapPenutupPost) {
        console.error("[material-atap-penutup-post] ❌ elemen Id MaterialAtapPenutupPost terhapus");
        return;
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 1] VARIANT — GENTENG
    // ═══════════════════════════════════════════════════════
    if (urlMappingGentengPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingGentengPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Atap Penutup', url: 'https://www.betonjayareadymix.com/p/material-atap-penutup.html' },
                { name: 'Genteng', url: 'https://www.betonjayareadymix.com/p/genteng.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 2] SUB-VARIANT — GENTENG TANAH LIAT
    // ═══════════════════════════════════════════════════════
    if (urlMappingGentengTanahLiatPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingGentengTanahLiatPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Atap Penutup', url: 'https://www.betonjayareadymix.com/p/material-atap-penutup.html' },
                { name: 'Genteng', url: 'https://www.betonjayareadymix.com/p/genteng.html' },
                { name: 'Genteng Tanah Liat', url: 'https://www.betonjayareadymix.com/p/genteng-tanah-liat.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 3] SUB-VARIANT — GENTENG BETON
    // ═══════════════════════════════════════════════════════
    if (urlMappingGentengBetonPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingGentengBetonPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Atap Penutup', url: 'https://www.betonjayareadymix.com/p/material-atap-penutup.html' },
                { name: 'Genteng', url: 'https://www.betonjayareadymix.com/p/genteng.html' },
                { name: 'Genteng Beton', url: 'https://www.betonjayareadymix.com/p/genteng-beton.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 4] SUB-VARIANT — GENTENG KERAMIK
    // ═══════════════════════════════════════════════════════
    if (urlMappingGentengKeramikPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingGentengKeramikPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Atap Penutup', url: 'https://www.betonjayareadymix.com/p/material-atap-penutup.html' },
                { name: 'Genteng', url: 'https://www.betonjayareadymix.com/p/genteng.html' },
                { name: 'Genteng Keramik', url: 'https://www.betonjayareadymix.com/p/genteng-keramik.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 5] SUB-VARIANT — ATAP SPANDEK
    // ═══════════════════════════════════════════════════════
    if (urlMappingAtapSpandekPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingAtapSpandekPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Atap Penutup', url: 'https://www.betonjayareadymix.com/p/material-atap-penutup.html' },
                { name: 'Atap Spandek', url: 'https://www.betonjayareadymix.com/p/atap-spandek.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 6] SUB-VARIANT — ATAP ZINCALUME
    // ═══════════════════════════════════════════════════════
    if (urlMappingAtapZincalumePost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingAtapZincalumePost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Atap Penutup', url: 'https://www.betonjayareadymix.com/p/material-atap-penutup.html' },
                { name: 'Atap Zincalume', url: 'https://www.betonjayareadymix.com/p/atap-zincalume.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 7] SUB-VARIANT — ATAP BITUMEN
    // ═══════════════════════════════════════════════════════
    if (urlMappingAtapBitumenPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingAtapBitumenPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Atap Penutup', url: 'https://www.betonjayareadymix.com/p/material-atap-penutup.html' },
                { name: 'Atap Bitumen', url: 'https://www.betonjayareadymix.com/p/atap-bitumen.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 8] SUB-VARIANT — TALANG ATAP
    // ═══════════════════════════════════════════════════════
    if (urlMappingTalangAtapPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingTalangAtapPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Atap Penutup', url: 'https://www.betonjayareadymix.com/p/material-atap-penutup.html' },
                { name: 'Talang Atap', url: 'https://www.betonjayareadymix.com/p/talang-atap.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 9] SUB-VARIANT — SEKRUP ATAP
    // ═══════════════════════════════════════════════════════
    if (urlMappingSekrupAtapPost[cleanUrl]) {
        generateBreadcrumbShared(
            urlMappingSekrupAtapPost,
            cleanUrl,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Atap Penutup', url: 'https://www.betonjayareadymix.com/p/material-atap-penutup.html' },
                { name: 'Sekrup Atap', url: 'https://www.betonjayareadymix.com/p/sekrup-atap.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

} // <-- penutup fungsi initMaterialAtapPenutupPost

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] AUTO-INIT
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMaterialAtapPenutupPost);
} else {
    initMaterialAtapPenutupPost();
}
