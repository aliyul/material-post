// ============================================================
// MATERIAL KONSTRUKSI — PILLAR + SUB2 + SUB1 + VARIANT
// v2.0.0 — Early Exit + generateBreadcrumbMaterialKonstruksi + Fix Bug
// ============================================================

console.log('[material-konstruksi] 📄 File loaded, waiting for DOM...');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

// ============================================================
// [PILLAR] - MATERIAL KONSTRUKSI
// ============================================================
const urlMappingMaterialKonstruksiPillar = {
    "https://www.betonjayareadymix.com/p/material-konstruksi.html": "Material Konstruksi"
};

// ============================================================
// [SUB2] - DAFTAR MATERIAL (LANGSUNG DI BAWAH PILLAR)
// ============================================================
const urlMappingMaterialKonsFromPillarSub2 = {
    "https://www.betonjayareadymix.com/p/daftar-material-struktur-bangunan.html": "Daftar Material Struktur Bangunan",
    "https://www.betonjayareadymix.com/p/daftar-material-dinding-penutup.html": "Daftar Material Dinding Penutup",
    "https://www.betonjayareadymix.com/p/daftar-material-pekerjaan-tanah-jalan.html": "Daftar Material Pekerjaan Tanah Jalan",
    "https://www.betonjayareadymix.com/p/daftar-material-plumbing-saluran.html": "Daftar Material Plumbing Saluran",
    "https://www.betonjayareadymix.com/p/daftar-material-atap-penutup.html": "Daftar Material Atap Penutup",
    "https://www.betonjayareadymix.com/p/daftar-material-fasad-pelapis-eksterior.html": "Daftar Material Fasad Pelapis Eksterior",
    "https://www.betonjayareadymix.com/p/daftar-material-finishing-interior.html": "Daftar Material Finishing Interior",
    "https://www.betonjayareadymix.com/p/daftar-material-insulasi-akustik.html": "Daftar Material Insulasi Akustik",
    "https://www.betonjayareadymix.com/p/daftar-material-waterproofing-pelapis.html": "Daftar Material Waterproofing Pelapis",
    "https://www.betonjayareadymix.com/p/daftar-material-geosintetik-drainase.html": "Daftar Material Geosintetik Drainase",
    "https://www.betonjayareadymix.com/p/daftar-material-konstruksi-khusus.html": "Daftar Material Konstruksi Khusus",
    "https://www.betonjayareadymix.com/p/daftar-material-konstruksi-kelistrikan.html": "Daftar Material Konstruksi Kelistrikan",
    "https://www.betonjayareadymix.com/p/daftar-material-modular-prefabrikasi.html": "Daftar Material Modular Prefabrikasi"
};

// ============================================================
// [SUB1] - PERBANDINGAN (BRIDGE KE MONEY)
// ============================================================
const urlMappingMaterialStrukturBangunanFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-material-struktur-bangunan.html": "Perbandingan Material Struktur Bangunan"
};
const urlMappingMaterialDindingPenutupFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-material-dinding-penutup.html": "Perbandingan Material Dinding Penutup"
};
const urlMappingMaterialPekerjaanTanahJalanFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-material-tanah-jalan.html": "Perbandingan Material Pekerjaan Tanah Jalan"
};
const urlMappingMaterialPlumbingSaluranFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-material-plumbing-saluran.html": "Perbandingan Material Plumbing Saluran"
};
const urlMappingMaterialAtapPenutupFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-material-atap-penutup.html": "Perbandingan Material Atap Penutup"
};
const urlMappingMaterialFasadPelapisEksteriorFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-material-fasad.html": "Perbandingan Material Fasad Pelapis Eksterior"
};
const urlMappingMaterialFinishingInteriorFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-material-finishing-interior.html": "Perbandingan Material Finishing Interior"
};
const urlMappingMaterialInsulasiAkustikFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-material-insulasi-akustik.html": "Perbandingan Material Insulasi Akustik"
};
const urlMappingMaterialWaterproofingPelapisFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-waterproofing-pelapis.html": "Perbandingan Material Waterproofing Pelapis"
};
const urlMappingMaterialGeosintetikDrainaseFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-geosintetik-drainase.html": "Perbandingan Material Geosintetik Drainase"
};
const urlMappingMaterialKonstruksiKhususFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-material-konstruksi-khusus.html": "Perbandingan Material Konstruksi Khusus"
};
const urlMappingMaterialKelistrikanFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-material-kelistrikan.html": "Perbandingan Material Kelistrikan"
};
const urlMappingMaterialModularPrefabrikasiFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-modular-prefabrikasi.html": "Perbandingan Material Modular Prefabrikasi"
};

// ============================================================
// [VARIANT] - MATERIAL STRUKTUR BANGUNAN
// ============================================================
const urlMappingMaterialStrukturBangunan = {
    "https://www.betonjayareadymix.com/p/bekisting.html": "Harga Bekisting",
    "https://www.betonjayareadymix.com/p/aluminium.html": "Aluminium",
    "https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html": "Ready Mix",
    "https://www.betonjayareadymix.com/p/semen-portland.html": "Semen Portland",
    "https://www.betonjayareadymix.com/p/wiremesh.html": "Wiremesh",
    "https://www.betonjayareadymix.com/p/bondex.html": "Bondex",
    "https://www.betonjayareadymix.com/p/scaffolding.html": "Scaffolding",
    "https://www.betonjayareadymix.com/p/besi-bangunan.html": "Besi Bangunan",
    "https://www.betonjayareadymix.com/p/baja-konvensional.html": "Baja Konvensional",
    "https://www.betonjayareadymix.com/p/baja-ringan-struktur.html": "Baja Ringan Struktur",
    "https://www.betonjayareadymix.com/p/baja-tulangan.html": "Baja Tulangan",
    "https://www.betonjayareadymix.com/p/bekisting-baja.html": "Bekisting Baja",
    "https://www.betonjayareadymix.com/p/semen-instan.html": "Semen Instan",
    "https://www.betonjayareadymix.com/p/semen-putih.html": "Semen Putih",
    "https://www.betonjayareadymix.com/p/bekisting-kayu.html": "Bekisting Kayu",
    "https://www.betonjayareadymix.com/p/mortar-struktural.html": "Mortar Struktural",
    "https://www.betonjayareadymix.com/p/perekat-beton-epoxy.html": "Perekat Beton Epoxy"
};

// ============================================================
// [SUB1] - BRIDGE MATERIAL STRUKTUR BANGUNAN
// ============================================================
const urlMappingMaterialStrukturBangunanBridge = {
    "https://www.betonjayareadymix.com/p/cara-memilih-material-struktur-bangunan.html": "Cara Memilih Material Struktur Bangunan"
};

// ============================================================
// [MONEY_MASTER] - HARGA MATERIAL STRUKTUR BANGUNAN
// ============================================================
const urlMappingMaterialStrukturBangunanBridgeToMoneyMaster = {
    "https://www.betonjayareadymix.com/p/harga-material-struktur-bangunan.html": "Harga Material Struktur Bangunan"
};

// ============================================================
// [SUB2] - MATERIAL READY MIX
// ============================================================
const urlMappingMaterialReadyMix = {
    "https://www.betonjayareadymix.com/p/ready-mix-lokasi.html": "Ready Mix Lokasi",
    "https://www.betonjayareadymix.com/p/ready-mix-mutu.html": "Ready Mix Mutu",
    "https://www.betonjayareadymix.com/p/ready-mix-kegunaan.html": "Ready Mix Kegunaan",
    "https://www.betonjayareadymix.com/p/ready-mix-plant.html": "Ready Mix Plant",
    "https://www.betonjayareadymix.com/p/ready-mix-panduan.html": "Ready Mix Panduan"
};

// ============================================================
// [VARIANT] - MATERIAL DINDING PENUTUP
// ============================================================
const urlMappingMaterialDindingPenutup = {
    "https://www.betonjayareadymix.com/p/bata-merah-tanah-liat.html": "Bata Merah Tanah Liat",
    "https://www.betonjayareadymix.com/p/batako-press-beton.html": "Batako Press / Beton",
    "https://www.betonjayareadymix.com/p/bata-ringan-hebel-aac.html": "Bata Ringan Hebel / AAC Block",
    "https://www.betonjayareadymix.com/p/grc-board.html": "GRC Board",
    "https://www.betonjayareadymix.com/p/papan-semen.html": "Papan Semen",
    "https://www.betonjayareadymix.com/p/gypsum-board.html": "Gypsum Board",
    "https://www.betonjayareadymix.com/p/papan-fiber-semen.html": "Papan Fiber Semen",
    "https://www.betonjayareadymix.com/p/plesteran-semen.html": "Plesteran Semen"
};

// ============================================================
// [VARIANT] - MATERIAL PEKERJAAN TANAH JALAN
// ============================================================
const urlMappingMaterialPekerjaanTanahJalan = {
    "https://www.betonjayareadymix.com/p/tanah-urug-padat.html": "Tanah Urug Padat",
    "https://www.betonjayareadymix.com/p/tanah-merah-urugan.html": "Tanah Merah",
    "https://www.betonjayareadymix.com/p/pasir-urug.html": "Pasir Urug",
    "https://www.betonjayareadymix.com/p/pasir-beton.html": "Pasir Beton",
    "https://www.betonjayareadymix.com/p/pasir-pasang.html": "Pasir Pasang",
    "https://www.betonjayareadymix.com/p/sirtu-pasir-batu.html": "Sirtu (Pasir Batu)",
    "https://www.betonjayareadymix.com/p/batu-kali.html": "Batu Kali",
    "https://www.betonjayareadymix.com/p/batu-split.html": "Batu Split",
    "https://www.betonjayareadymix.com/p/kerikil.html": "Kerikil",
    "https://www.betonjayareadymix.com/p/abu-batu.html": "Abu Batu",
    "https://www.betonjayareadymix.com/p/base-course-jalan.html": "Base Course (Lapis Pondasi Jalan)",
    "https://www.betonjayareadymix.com/p/sub-base-course.html": "Sub Base Course (Lapis Bawah Base Course)",
    "https://www.betonjayareadymix.com/p/aspal-curah.html": "Aspal Curah",
    "https://www.betonjayareadymix.com/p/aspal-emulsi.html": "Aspal Emulsi"
};

// ============================================================
// [SUB2 + VARIANT] - MATERIAL PLUMBING SALURAN
// ============================================================
const urlMappingMaterialPlumbingSaluran = {
    "https://www.betonjayareadymix.com/p/pipa-pvc.html": "Pipa PVC",
    "https://www.betonjayareadymix.com/p/pipa-hdpe.html": "Pipa HDPE (High-Density Polyethylene)",
    "https://www.betonjayareadymix.com/p/pipa-ppr.html": "Pipa PPR (Polypropylene Random)",
    "https://www.betonjayareadymix.com/p/pipa-galvanis.html": "Pipa Galvanis",
    "https://www.betonjayareadymix.com/p/fitting-pipa.html": "Fitting Pipa",
    "https://www.betonjayareadymix.com/p/kran-air.html": "Kran Air",
    "https://www.betonjayareadymix.com/p/floor-drain.html": "Floor Drain",
    "https://www.betonjayareadymix.com/p/bak-kontrol-saluran.html": "Bak Kontrol Saluran Air",
    "https://www.betonjayareadymix.com/p/talang-air.html": "Talang Air"
};

// ============================================================
// [SUB2 + VARIANT] - MATERIAL ATAP PENUTUP
// ============================================================
const urlMappingMaterialAtapPenutup = {
    "https://www.betonjayareadymix.com/p/genteng.html": "Genteng",
    "https://www.betonjayareadymix.com/p/genteng-tanah-liat.html": "Genteng Tanah Liat",
    "https://www.betonjayareadymix.com/p/genteng-beton.html": "Genteng Beton",
    "https://www.betonjayareadymix.com/p/genteng-keramik.html": "Genteng Keramik",
    "https://www.betonjayareadymix.com/p/atap-spandek.html": "Atap Spandek",
    "https://www.betonjayareadymix.com/p/atap-zincalume.html": "Atap Zincalume",
    "https://www.betonjayareadymix.com/p/atap-bitumen.html": "Atap Bitumen",
    "https://www.betonjayareadymix.com/p/talang-atap.html": "Talang Atap",
    "https://www.betonjayareadymix.com/p/sekrup-atap.html": "Sekrup Atap"
};

// ============================================================
// [SUB2] - MATERIAL FASAD PELAPIS EKSTERIOR
// ============================================================
const urlMappingMaterialFasadPelapisEksterior = {
    "https://www.betonjayareadymix.com/p/beton-ekspos-eksterior.html": "Beton Ekspos Eksterior",
    "https://www.betonjayareadymix.com/p/panel-fasad.html": "Panel Fasad",
    "https://www.betonjayareadymix.com/p/expanded-metal.html": "Expanded Metal",
    "https://www.betonjayareadymix.com/p/granit-exterior.html": "Granit Exterior",
    "https://www.betonjayareadymix.com/p/cladding-fasad.html": "Cladding Fasad",
    "https://www.betonjayareadymix.com/p/grc-fasad.html": "Grc Fasad",
    "https://www.betonjayareadymix.com/p/louvers.html": "Louvers",
    "https://www.betonjayareadymix.com/p/sun-shading.html": "Sun Shading",
    "https://www.betonjayareadymix.com/p/cat-eksterior.html": "Cat Eksterior",
    "https://www.betonjayareadymix.com/p/cat-tembok-luar.html": "Cat Tembok Luar",
    "https://www.betonjayareadymix.com/p/plester-eksterior.html": "Plester Eksterior",
    "https://www.betonjayareadymix.com/p/batu-alam-dinding.html": "Batu Alam Dinding",
    "https://www.betonjayareadymix.com/p/keramik-eksterior.html": "Keramik Eksterior"
};

// ============================================================
// [SUB2] - MATERIAL FINISHING INTERIOR
// ============================================================
const urlMappingMaterialFinishingInterior = {
    "https://www.betonjayareadymix.com/p/beton-ekspos-interior.html": "Beton Ekspos Interior",
    "https://www.betonjayareadymix.com/p/keramik-lantai.html": "Keramik Lantai",
    "https://www.betonjayareadymix.com/p/keramik-dinding.html": "Keramik Dinding",
    "https://www.betonjayareadymix.com/p/granit-interior.html": "Granit Interior",
    "https://www.betonjayareadymix.com/p/vinyl-lantai.html": "Vinyl Lantai",
    "https://www.betonjayareadymix.com/p/parket-kayu.html": "Parket Kayu",
    "https://www.betonjayareadymix.com/p/karpet-interior.html": "Karpet Interior",
    "https://www.betonjayareadymix.com/p/cat-interior.html": "Cat Interior",
    "https://www.betonjayareadymix.com/p/plafon-gypsum.html": "Plafon Gypsum",
    "https://www.betonjayareadymix.com/p/plafon-pvc.html": "Plafon PVC",
    "https://www.betonjayareadymix.com/p/wallpaper.html": "Wallpaper"
};

// ============================================================
// [SUB2] - MATERIAL INSULASI AKUSTIK
// ============================================================
const urlMappingMaterialInsulasiAkustik = {
    "https://www.betonjayareadymix.com/p/insulasi-panas.html": "Insulasi Panas",
    "https://www.betonjayareadymix.com/p/insulasi-suara.html": "Insulasi Suara",
    "https://www.betonjayareadymix.com/p/glasswool.html": "Glasswool",
    "https://www.betonjayareadymix.com/p/rockwool.html": "Rockwool",
    "https://www.betonjayareadymix.com/p/peredam-akustik.html": "Peredam Akustik",
    "https://www.betonjayareadymix.com/p/polyurethane-foam.html": "Polyurethane Foam",
    "https://www.betonjayareadymix.com/p/bubble-foil.html": "Bubble Foil"
};

// ============================================================
// [SUB2] - MATERIAL WATERPROOFING PELAPIS
// ============================================================
const urlMappingMaterialWaterproofingPelapis = {
    "https://www.betonjayareadymix.com/p/pelapis-anti-bocor.html": "Pelapis Anti Bocor",
    "https://www.betonjayareadymix.com/p/membrane-waterproofing.html": "Membrane Waterproofing",
    "https://www.betonjayareadymix.com/p/coating-waterproofing.html": "Coating Waterproofing",
    "https://www.betonjayareadymix.com/p/sika-waterproofing.html": "Sika Waterproofing",
    "https://www.betonjayareadymix.com/p/bentonite-waterproofing.html": "Bentonite Waterproofing",
    "https://www.betonjayareadymix.com/p/sealant.html": "Sealant",
    "https://www.betonjayareadymix.com/p/waterstop.html": "Waterstop"
};

// ============================================================
// [SUB2] - MATERIAL GEOSINTETIK DRAINASE
// ============================================================
const urlMappingMaterialGeosintetikDrainase = {
    "https://www.betonjayareadymix.com/p/geotextile.html": "Geotextile",
    "https://www.betonjayareadymix.com/p/geomembrane.html": "Geomembrane",
    "https://www.betonjayareadymix.com/p/geogrid.html": "Geogrid",
    "https://www.betonjayareadymix.com/p/geocell.html": "Geocell",
    "https://www.betonjayareadymix.com/p/pipa-drainase.html": "Pipa Drainase",
    "https://www.betonjayareadymix.com/p/subdrain.html": "Subdrain",
    "https://www.betonjayareadymix.com/p/biopori-modul.html": "Biopori Modul"
};

// ============================================================
// [SUB2] - MATERIAL KONSTRUKSI KHUSUS
// ============================================================
const urlMappingMaterialKonstruksiKhusus = {
    "https://www.betonjayareadymix.com/p/fiber-optik-ducting.html": "Fiber Optik Ducting",
    "https://www.betonjayareadymix.com/p/baja-konstruksi-tambang.html": "Baja Konstruksi Tambang",
    "https://www.betonjayareadymix.com/p/material-jembatan.html": "Material Jembatan",
    "https://www.betonjayareadymix.com/p/railway-sleeper.html": "Railway Sleeper",
    "https://www.betonjayareadymix.com/p/blast-resistant-material.html": "Blast Resistant Material"
};

// ============================================================
// [SUB2] - MATERIAL KONSTRUKSI KELISTRIKAN
// ============================================================
const urlMappingMaterialKonstruksiKelistrikan = {
    "https://www.betonjayareadymix.com/p/kabel-listrik.html": "Kabel Listrik",
    "https://www.betonjayareadymix.com/p/stopkontak.html": "Stopkontak",
    "https://www.betonjayareadymix.com/p/pipa-kabel.html": "Pipa Kabel",
    "https://www.betonjayareadymix.com/p/panel-listrik.html": "Panel Listrik",
    "https://www.betonjayareadymix.com/p/lampu-proyek.html": "Lampu Proyek"
};

// ============================================================
// [SUB2] - MATERIAL MODULAR PREFABRIKASI
// ============================================================
const urlMappingMaterialModularPrefabrikasi = {
    "https://www.betonjayareadymix.com/p/rumah-modular.html": "Rumah Modular",
    "https://www.betonjayareadymix.com/p/kantor-container.html": "Kantor Container",
    "https://www.betonjayareadymix.com/p/lantai-modular.html": "Lantai Modular",
    "https://www.betonjayareadymix.com/p/dinding-modular.html": "Dinding Modular",
    "https://www.betonjayareadymix.com/p/atap-modular.html": "Atap Modular",
    "https://www.betonjayareadymix.com/p/kamar-mandi-prefab.html": "Kamar Mandi Prefab"
};

// ============================================================
// [SUB2] - MATERIAL LAINNYA
// ============================================================
const urlMappingMaterialLainnya = {
    "https://www.betonjayareadymix.com/p/perekat-serbaguna.html": "Perekat Serbaguna",
    "https://www.betonjayareadymix.com/p/sealant-serbaguna.html": "Sealant Serbaguna",
    "https://www.betonjayareadymix.com/p/alat-bantu-material.html": "Alat Bantu Material",
    "https://www.betonjayareadymix.com/p/produk-ekstra-konstruksi.html": "Produk Ekstra Konstruksi"
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT — PENDEKATAN C
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[material-konstruksi] 🔍 Check URL: ' + cleanUrl);

    var ALL_MAPPINGS = [
        // ✅ FIX: PILLAR dimasukkan
        urlMappingMaterialKonstruksiPillar,
        urlMappingMaterialKonsFromPillarSub2,
        urlMappingMaterialStrukturBangunanFromSub2Sub1,
        urlMappingMaterialDindingPenutupFromSub2Sub1,
        urlMappingMaterialPekerjaanTanahJalanFromSub2Sub1,
        urlMappingMaterialPlumbingSaluranFromSub2Sub1,
        urlMappingMaterialAtapPenutupFromSub2Sub1,
        urlMappingMaterialFasadPelapisEksteriorFromSub2Sub1,
        urlMappingMaterialFinishingInteriorFromSub2Sub1,
        urlMappingMaterialInsulasiAkustikFromSub2Sub1,
        urlMappingMaterialWaterproofingPelapisFromSub2Sub1,
        urlMappingMaterialGeosintetikDrainaseFromSub2Sub1,
        urlMappingMaterialKonstruksiKhususFromSub2Sub1,
        urlMappingMaterialKelistrikanFromSub2Sub1,
        urlMappingMaterialModularPrefabrikasiFromSub2Sub1,
        urlMappingMaterialStrukturBangunan,
        // ✅ FIX: Bridge & Money Master dimasukkan
        urlMappingMaterialStrukturBangunanBridge,
        urlMappingMaterialStrukturBangunanBridgeToMoneyMaster,
        urlMappingMaterialReadyMix,
        urlMappingMaterialDindingPenutup,
        urlMappingMaterialPekerjaanTanahJalan,
        urlMappingMaterialPlumbingSaluran,
        urlMappingMaterialAtapPenutup,
        urlMappingMaterialFasadPelapisEksterior,
        urlMappingMaterialFinishingInterior,
        urlMappingMaterialInsulasiAkustik,
        urlMappingMaterialWaterproofingPelapis,
        urlMappingMaterialGeosintetikDrainase,
        urlMappingMaterialKonstruksiKhusus,
        urlMappingMaterialKonstruksiKelistrikan,
        urlMappingMaterialModularPrefabrikasi,
        urlMappingMaterialLainnya
    ];

    var foundIndex = -1;
    var foundMappingName = '';

    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[material-konstruksi] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }

    if (foundIndex === -1) {
        console.log('[material-konstruksi] ⏭️ SKIP — URL tidak cocok di semua cluster');
        window.__materialKonsActive = false;
        return;
    }

    window.__materialKonsActive = true;
    window.__materialKonsMatchIndex = foundIndex;
    window.__materialKonsMatchMappingName = foundMappingName;

    console.log(
        '[material-konstruksi] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '" — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA
// ═══════════════════════════════════════════════════════════

function initMaterialKons() {
    // ⚡ Guard flag
    if (!window.__materialKonsActive) {
        console.log('[material-konstruksi] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }

    console.log('[material-konstruksi] 🚀 Execute — URL cocok');

    var cleanUrlMaterialKons = window.location.href.split(/[?#]/)[0];

    // ✅ Guard elemen DOM
    var MaterialKons = document.getElementById("MaterialKons");
    if (!MaterialKons) {
        console.error("[material-konstruksi] ❌ elemen Id MaterialKons kondisi terhapus");
        return;
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 0] PILLAR — MATERIAL KONSTRUKSI (2 level)
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialKonstruksiPillar[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialKonstruksiPillar,
            cleanUrlMaterialKons,
            [],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 1] SUB2 — DAFTAR MATERIAL (3 level)
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialKonsFromPillarSub2[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialKonsFromPillarSub2,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 2] SUB1 — PERBANDINGAN (4 level)
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialStrukturBangunanFromSub2Sub1[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialStrukturBangunanFromSub2Sub1,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-material-struktur-bangunan.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    if (urlMappingMaterialDindingPenutupFromSub2Sub1[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialDindingPenutupFromSub2Sub1,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Dinding Penutup', url: 'https://www.betonjayareadymix.com/p/daftar-material-dinding-penutup.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    if (urlMappingMaterialPekerjaanTanahJalanFromSub2Sub1[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialPekerjaanTanahJalanFromSub2Sub1,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Pekerjaan Tanah Jalan', url: 'https://www.betonjayareadymix.com/p/daftar-material-pekerjaan-tanah-jalan.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    if (urlMappingMaterialPlumbingSaluranFromSub2Sub1[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialPlumbingSaluranFromSub2Sub1,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Plumbing Saluran', url: 'https://www.betonjayareadymix.com/p/daftar-material-plumbing-saluran.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    if (urlMappingMaterialAtapPenutupFromSub2Sub1[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialAtapPenutupFromSub2Sub1,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Atap Penutup', url: 'https://www.betonjayareadymix.com/p/daftar-material-atap-penutup.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    if (urlMappingMaterialFasadPelapisEksteriorFromSub2Sub1[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialFasadPelapisEksteriorFromSub2Sub1,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/daftar-material-fasad-pelapis-eksterior.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    if (urlMappingMaterialFinishingInteriorFromSub2Sub1[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialFinishingInteriorFromSub2Sub1,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Finishing Interior', url: 'https://www.betonjayareadymix.com/p/daftar-material-finishing-interior.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    if (urlMappingMaterialInsulasiAkustikFromSub2Sub1[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialInsulasiAkustikFromSub2Sub1,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Insulasi Akustik', url: 'https://www.betonjayareadymix.com/p/daftar-material-insulasi-akustik.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    if (urlMappingMaterialWaterproofingPelapisFromSub2Sub1[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialWaterproofingPelapisFromSub2Sub1,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Waterproofing Pelapis', url: 'https://www.betonjayareadymix.com/p/daftar-material-waterproofing-pelapis.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    if (urlMappingMaterialGeosintetikDrainaseFromSub2Sub1[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialGeosintetikDrainaseFromSub2Sub1,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Geosintetik Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-material-geosintetik-drainase.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    if (urlMappingMaterialKonstruksiKhususFromSub2Sub1[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialKonstruksiKhususFromSub2Sub1,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Konstruksi Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-material-konstruksi-khusus.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    if (urlMappingMaterialKelistrikanFromSub2Sub1[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialKelistrikanFromSub2Sub1,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Konstruksi Kelistrikan', url: 'https://www.betonjayareadymix.com/p/daftar-material-konstruksi-kelistrikan.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    if (urlMappingMaterialModularPrefabrikasiFromSub2Sub1[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialModularPrefabrikasiFromSub2Sub1,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Modular Prefabrikasi', url: 'https://www.betonjayareadymix.com/p/daftar-material-modular-prefabrikasi.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 3] BRIDGE + MONEY_MASTER — MATERIAL STRUKTUR BANGUNAN
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialStrukturBangunanBridge[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialStrukturBangunanBridge,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-material-struktur-bangunan.html' },
                { name: 'Perbandingan Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-material-struktur-bangunan.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    if (urlMappingMaterialStrukturBangunanBridgeToMoneyMaster[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialStrukturBangunanBridgeToMoneyMaster,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Daftar Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-material-struktur-bangunan.html' },
                { name: 'Perbandingan Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-material-struktur-bangunan.html' },
                { name: 'Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/material-struktur-bangunan.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 4] VARIANT — MATERIAL STRUKTUR BANGUNAN (4 level)
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialStrukturBangunan[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialStrukturBangunan,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/material-struktur-bangunan.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 5] SUB2/VARIANT — MATERIAL READY MIX (5 level)
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialReadyMix[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialReadyMix,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/material-struktur-bangunan.html' },
                { name: 'Ready Mix', url: 'https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 6] VARIANT — DINDING PENUTUP
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialDindingPenutup[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialDindingPenutup,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Dinding Penutup', url: 'https://www.betonjayareadymix.com/p/material-dinding-penutup.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 7] VARIANT — PEKERJAAN TANAH JALAN
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialPekerjaanTanahJalan[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialPekerjaanTanahJalan,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Pekerjaan Tanah Jalan', url: 'https://www.betonjayareadymix.com/p/material-pekerjaan-tanah-jalan.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 8] SUB2/VARIANT — PLUMBING SALURAN
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialPlumbingSaluran[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialPlumbingSaluran,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Plumbing Saluran', url: 'https://www.betonjayareadymix.com/p/material-plumbing-saluran.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 9] SUB2/VARIANT — ATAP PENUTUP
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialAtapPenutup[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialAtapPenutup,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Atap Penutup', url: 'https://www.betonjayareadymix.com/p/material-atap-penutup.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 10] SUB2 — FASAD PELAPIS EKSTERIOR
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialFasadPelapisEksterior[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialFasadPelapisEksterior,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Fasad Pelapis Eksterior', url: 'https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 11] SUB2 — FINISHING INTERIOR
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialFinishingInterior[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialFinishingInterior,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Finishing Interior', url: 'https://www.betonjayareadymix.com/p/material-finishing-interior.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 12] SUB2 — INSULASI AKUSTIK
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialInsulasiAkustik[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialInsulasiAkustik,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Insulasi Akustik', url: 'https://www.betonjayareadymix.com/p/material-insulasi-akustik.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 13] SUB2 — WATERPROOFING PELAPIS
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialWaterproofingPelapis[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialWaterproofingPelapis,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Waterproofing Pelapis', url: 'https://www.betonjayareadymix.com/p/material-waterproofing-pelapis.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 14] SUB2 — GEOSINTETIK DRAINASE
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialGeosintetikDrainase[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialGeosintetikDrainase,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Geosintetik Drainase', url: 'https://www.betonjayareadymix.com/p/material-geosintetik-drainase.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 15] SUB2 — KONSTRUKSI KHUSUS
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialKonstruksiKhusus[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialKonstruksiKhusus,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Konstruksi Khusus', url: 'https://www.betonjayareadymix.com/p/material-konstruksi-khusus.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 16] SUB2 — KONSTRUKSI KELISTRIKAN
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialKonstruksiKelistrikan[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialKonstruksiKelistrikan,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Konstruksi Kelistrikan', url: 'https://www.betonjayareadymix.com/p/material-konstruksi-kelistrikan.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 17] SUB2 — MODULAR PREFABRIKASI
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialModularPrefabrikasi[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialModularPrefabrikasi,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Modular Prefabrikasi', url: 'https://www.betonjayareadymix.com/p/material-modular-prefabrikasi.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 18] SUB2 — MATERIAL LAINNYA
    // ───────────────────────────────────────────────────────
    if (urlMappingMaterialLainnya[cleanUrlMaterialKons]) {
        generateBreadcrumbMaterialKonstruksi(
            urlMappingMaterialLainnya,
            cleanUrlMaterialKons,
            [
                { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
                { name: 'Material Lainnya', url: 'https://www.betonjayareadymix.com/p/material-lainnya.html' }
            ],
            'MATERIAL_KONSTRUKSI'
        );
    }
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] AUTO-INIT
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMaterialKons);
} else {
    initMaterialKons();
}
