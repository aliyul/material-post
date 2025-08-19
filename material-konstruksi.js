 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingMaterialKons = {
 //"https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html": "Ready Mix Beton Cor Jayamix Minimix"
   "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html": "Material Struktur Bangunan",
  "https://www.betonjayareadymix.com/p/material-dinding-penutup.html": "Material Dinding Penutup",
  "https://www.betonjayareadymix.com/p/material-pekerjaan-tanah-jalan.html": "Material Pekerjaan Tanah Jalan",
  "https://www.betonjayareadymix.com/p/material-plumbing-saluran.html": "Material Plumbing Saluran",
  "https://www.betonjayareadymix.com/p/material-atap-penutup.html": "Material Atap Penutup",
  "https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html": "Material Fasad Pelapis Eksterior",
  "https://www.betonjayareadymix.com/p/material-finishing-interior.html": "Material Finishing Interior",
  "https://www.betonjayareadymix.com/p/material-insulasi-akustik.html": "Material Insulasi Akustik",
  "https://www.betonjayareadymix.com/p/material-waterproofing-pelapis.html": "Material Waterproofing Pelapis",
  "https://www.betonjayareadymix.com/p/material-geosintetik-drainase.html": "Material Geosintetik Drainase",
  "https://www.betonjayareadymix.com/p/material-konstruksi-khusus.html": "Material Konstruksi Khusus",
  "https://www.betonjayareadymix.com/p/material-konstruksi-kelistrikan.html": "Material Konstruksi Kelistrikan",
  "https://www.betonjayareadymix.com/p/material-modular-prefabrikasi.html": "Material Modular Prefabrikasi",
  "https://www.betonjayareadymix.com/p/material-lainnya.html": "Material Lainnya"

};
const urlMappingMaterialStrukturBangunan = {
"https://www.betonjayareadymix.com/p/bekisting.html": "Bekisting",
"https://www.betonjayareadymix.com/p/aluminium.html": "Aluminium",
  "https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html": "Ready Mix",
  "https://www.betonjayareadymix.com/p/semen-portland.html": "Semen Portland",
  "https://www.betonjayareadymix.com/p/besi-beton-ulir.html": "Besi Beton Ulir",
  "https://www.betonjayareadymix.com/p/besi-beton-polos.html": "Besi Beton Polos",
  "https://www.betonjayareadymix.com/p/wiremesh.html": "Wiremesh",
  "https://www.betonjayareadymix.com/p/bondex.html": "Bondex",
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

//SUB READY MIX
const urlMappingMaterialReadyMix = {
  "https://www.betonjayareadymix.com/p/ready-mix-lokasi.html": "Ready Mix Lokasi",
  "https://www.betonjayareadymix.com/p/ready-mix-mutu.html": "Ready Mix Mutu",
  "https://www.betonjayareadymix.com/p/ready-mix-kegunaan.html": "Ready Mix Kegunaan",
  "https://www.betonjayareadymix.com/p/ready-mix-plant.html": "Ready Mix Plant",
  "https://www.betonjayareadymix.com/p/ready-mix-panduan.html": "Ready Mix Panduan"
};

const urlMappingMaterialDindingPenutup = {
 "https://www.betonjayareadymix.com/p/bata-merah-tanah-liat.html": "Bata Merah Tanah Liat",
  "https://www.betonjayareadymix.com/p/batako-press-beton.html": "Batako Press / Beton",
  "https://www.betonjayareadymix.com/p/bata-ringan-hebel-aac.html": "Bata Ringan Hebel / AAC Block",
  "https://www.betonjayareadymix.com/p/grc-board.html": "GRC Board (Glassfiber Reinforced Cement)",
  "https://www.betonjayareadymix.com/p/papan-semen.html": "Papan Semen",
  "https://www.betonjayareadymix.com/p/gypsum-board.html": "Gypsum Board",
  "https://www.betonjayareadymix.com/p/papan-fiber-semen.html": "Papan Fiber Semen",
  "https://www.betonjayareadymix.com/p/plesteran-semen.html": "Plesteran Semen"
};

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

const urlMappingMaterialInsulasiAkustik = {
  "https://www.betonjayareadymix.com/p/insulasi-panas.html": "Insulasi Panas",
  "https://www.betonjayareadymix.com/p/insulasi-suara.html": "Insulasi Suara",
  "https://www.betonjayareadymix.com/p/glasswool.html": "Glasswool",
  "https://www.betonjayareadymix.com/p/rockwool.html": "Rockwool",
  "https://www.betonjayareadymix.com/p/peredam-akustik.html": "Peredam Akustik",
  "https://www.betonjayareadymix.com/p/polyurethane-foam.html": "Polyurethane Foam",
  "https://www.betonjayareadymix.com/p/bubble-foil.html": "Bubble Foil"

};

const urlMappingMaterialWaterproofingPelapis = {
"https://www.betonjayareadymix.com/p/pelapis-anti-bocor.html": "Pelapis Anti Bocor",
  "https://www.betonjayareadymix.com/p/membrane-waterproofing.html": "Membrane Waterproofing",
  "https://www.betonjayareadymix.com/p/coating-waterproofing.html": "Coating Waterproofing",
  "https://www.betonjayareadymix.com/p/sika-waterproofing.html": "Sika Waterproofing",
  "https://www.betonjayareadymix.com/p/bentonite-waterproofing.html": "Bentonite Waterproofing",
  "https://www.betonjayareadymix.com/p/sealant.html": "Sealant",
  "https://www.betonjayareadymix.com/p/waterstop.html": "Waterstop"
};
const urlMappingMaterialGeosintetikDrainase = {
"https://www.betonjayareadymix.com/p/geotextile.html": "Geotextile",
  "https://www.betonjayareadymix.com/p/geomembrane.html": "Geomembrane",
  "https://www.betonjayareadymix.com/p/geogrid.html": "Geogrid",
  "https://www.betonjayareadymix.com/p/geocell.html": "Geocell",
  "https://www.betonjayareadymix.com/p/pipa-drainase.html": "Pipa Drainase",
  "https://www.betonjayareadymix.com/p/subdrain.html": "Subdrain",
  "https://www.betonjayareadymix.com/p/biopori-modul.html": "Biopori Modul"

};
const urlMappingMaterialKonstruksiKhusus = {
"https://www.betonjayareadymix.com/p/fiber-optik-ducting.html": "Fiber Optik Ducting",
  "https://www.betonjayareadymix.com/p/baja-konstruksi-tambang.html": "Baja Konstruksi Tambang",
  "https://www.betonjayareadymix.com/p/material-jembatan.html": "Material Jembatan",
  "https://www.betonjayareadymix.com/p/railway-sleeper.html": "Railway Sleeper",
  "https://www.betonjayareadymix.com/p/blast-resistant-material.html": "Blast Resistant Material"
};
const urlMappingMaterialKonstruksiKelistrikan = {
"https://www.betonjayareadymix.com/p/kabel-listrik.html": "Kabel Listrik",
    "https://www.betonjayareadymix.com/p/instalasi-listrik.html": "Instalasi Listrik",
    "https://www.betonjayareadymix.com/p/stopkontak.html": "Stopkontak",
    "https://www.betonjayareadymix.com/p/pipa-kabel.html": "Pipa Kabel",
    "https://www.betonjayareadymix.com/p/panel-listrik.html": "Panel Listrik",
    "https://www.betonjayareadymix.com/p/lampu-proyek.html": "Lampu Proyek"

};
const urlMappingMaterialModularPrefabrikasi = {
"https://www.betonjayareadymix.com/p/rumah-modular.html": "Rumah Modular",
    "https://www.betonjayareadymix.com/p/kantor-container.html": "Kantor Container",
    "https://www.betonjayareadymix.com/p/lantai-modular.html": "Lantai Modular",
    "https://www.betonjayareadymix.com/p/dinding-modular.html": "Dinding Modular",
    "https://www.betonjayareadymix.com/p/atap-modular.html": "Atap Modular",
    "https://www.betonjayareadymix.com/p/kamar-mandi-prefab.html": "Kamar Mandi Prefab"
};

const urlMappingMaterialLainnya = {
"https://www.betonjayareadymix.com/p/perekat-serbaguna.html": "Perekat Serbaguna",
    "https://www.betonjayareadymix.com/p/sealant-serbaguna.html": "Sealant Serbaguna",
    "https://www.betonjayareadymix.com/p/alat-bantu-material.html": "Alat Bantu Material",
    "https://www.betonjayareadymix.com/p/produk-ekstra-konstruksi.html": "Produk Ekstra Konstruksi"

};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsMaterialKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsMaterialKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsMaterialKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsMaterialKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsMaterialKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
        const cleanUrlMaterialKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1
  
     // Menemukan elemen menggunakan ID
     var MaterialKons = document.getElementById("MaterialKons");
    if (!MaterialKons) {
        console.error("elemen Id MaterialKons kondisi terhapus");
        return;
    }
     var MaterialKonstruksiLink = document.getElementById("MaterialKonstruksi");
     //var MaterialStrukturBangunanLink = document.getElementById("MaterialStrukturBangunan");
     var MaterialStrukturBangunanLink = document.getElementById("MaterialStrukturBangunan");
		var MaterialReadyMixLink = document.getElementById("MaterialReadyMix");
		var MaterialBesiBetonUlirLink = document.getElementById("MaterialBesiBetonUlir");
		var MaterialBesiBetonPolosLink = document.getElementById("MaterialBesiBetonPolos");
		var MaterialBesiBangunanLink = document.getElementById("MaterialBesiBangunan");
		var MaterialWiremeshLink = document.getElementById("MaterialWiremesh");
		var MaterialBondexLink = document.getElementById("MaterialBondex");
		var MaterialAluminiumLink = document.getElementById("MaterialAluminium");
		var MaterialBajaKonvensionalLink = document.getElementById("MaterialBajaKonvensional");
		var MaterialBajaRinganStrukturLink = document.getElementById("MaterialBajaRinganStruktur");
		var MaterialBajaTulanganLink = document.getElementById("MaterialBajaTulangan");
		var MaterialBekistingLink = document.getElementById("MaterialBekisting");
		var MaterialBekistingBajaLink = document.getElementById("MaterialBekistingBaja");
		var MaterialBekistingKayuLink = document.getElementById("MaterialBekistingKayu");
		var MaterialSemenPortlandLink = document.getElementById("MaterialSemenPortland");
		var MaterialSemenInstanLink = document.getElementById("MaterialSemenInstan");
		var MaterialSemenPutihLink = document.getElementById("MaterialSemenPutih");
		var MaterialMortarStrukturalLink = document.getElementById("MaterialMortarStruktural");
		var MaterialPerekatBetonEpoxyLink = document.getElementById("MaterialPerekatBetonEpoxy");



     var MaterialDindingPenutupLink = document.getElementById("MaterialDindingPenutup");
     var MaterialPekerjaanTanahJalanLink = document.getElementById("MaterialPekerjaanTanahJalan");
     var MaterialPlumbingSaluranLink = document.getElementById("MaterialPlumbingSaluran");
     var MaterialAtapPenutupLink = document.getElementById("MaterialAtapPenutup");
     var MaterialFasadPelapisEksteriorLink = document.getElementById("MaterialFasadPelapisEksterior");
     var MaterialFinishingInteriorLink = document.getElementById("MaterialFinishingInterior");
     var MaterialInsulasiAkustikLink = document.getElementById("MaterialInsulasiAkustik");
     var MaterialWaterproofingPelapisLink = document.getElementById("MaterialWaterproofingPelapis");
     var MaterialGeosintetikDrainaseLink = document.getElementById("MaterialGeosintetikDrainase");
     var MaterialKonstruksiKhususLink = document.getElementById("MaterialKonstruksiKhusus");
     var MaterialKonstruksiKelistrikanLink = document.getElementById("MaterialKonstruksiKelistrikan");
     var MaterialModularPrefabrikasiLink = document.getElementById("MaterialModularPrefabrikasi");
     var MaterialLainnyaLink = document.getElementById("MaterialLainnya");
 
     var pageNameMaterialKons = document.getElementById("pageNameMaterialKons");
 
     // Default untuk menyembunyikan elemen
     //JasaKonstruksiPerbaikan.remove(); // Menghapus elemen tersebut
  
     MaterialKons.style.visibility = 'hidden';
     MaterialKonstruksiLink.style.visibility = 'hidden';
     MaterialStrukturBangunanLink.style.visibility = 'hidden';
     MaterialDindingPenutupLink.style.visibility = 'hidden';
     MaterialPekerjaanTanahJalanLink.style.visibility = 'hidden';
     MaterialPlumbingSaluranLink.style.visibility = 'hidden';
     MaterialAtapPenutupLink.style.visibility = 'hidden';
     MaterialFasadPelapisEksteriorLink.style.visibility = 'hidden';
     MaterialFinishingInteriorLink.style.visibility = 'hidden';
     MaterialInsulasiAkustikLink.style.visibility = 'hidden';
     MaterialWaterproofingPelapisLink.style.visibility = 'hidden';
     MaterialGeosintetikDrainaseLink.style.visibility = 'hidden';
     MaterialKonstruksiKhususLink.style.visibility = 'hidden';
     MaterialKonstruksiKelistrikanLink.style.visibility = 'hidden';
     MaterialModularPrefabrikasiLink.style.visibility = 'hidden';
     MaterialLainnyaLink.style.visibility = 'hidden';
 
     pageNameMaterialKons.textContent = "";
 

    if (!MaterialKonstruksiLink || !pageNameMaterialKons) {
        console.error("Salah satu elemen tidak ditemukan!");
        return;
    }

   if (urlMappingMaterialKons[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');

         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA 
        removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
     
       pageNameMaterialKons.textContent = urlMappingMaterialKons[cleanUrlMaterialKons];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialKons[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": urlMappingMaterialKons[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 //SUB PAGE MATERIAL KONSTRUKSI
if (urlMappingMaterialStrukturBangunan[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialStrukturBangunan');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialStrukturBangunanLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialStrukturBangunan[cleanUrlMaterialKons];
    }   
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialStrukturBangunan[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialStrukturBangunan[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

 //SUB PILLAR PAGE MATERIAL READY MIX
if (urlMappingMaterialReadyMix[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialStrukturBangunan');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialStrukturBangunanLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialReadyMix[cleanUrlMaterialKons];
    }   
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialReadyMix[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
			    {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Ready Mix",
                   "item": "https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html"
               },
              {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingMaterialReadyMix[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//AKHIR SUB PILLAR READY MIX
if (urlMappingMaterialDindingPenutup[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialDindingPenutup');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialDindingPenutupLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialDindingPenutup[cleanUrlMaterialKons];
    }  
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialDindingPenutup[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Dinding Penutup",
                   "item": "https://www.betonjayareadymix.com/p/material-dinding-penutup.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialDindingPenutup[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 if (urlMappingMaterialPekerjaanTanahJalan[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialPekerjaanTanahJalan');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialPekerjaanTanahJalanLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialPekerjaanTanahJalan[cleanUrlMaterialKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialPekerjaanTanahJalan[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Pekerjaan Tanah Jalan",
                   "item": "https://www.betonjayareadymix.com/p/material-pekerjaan-tanah-jalan.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialPekerjaanTanahJalan[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 if (urlMappingMaterialPlumbingSaluran[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialPlumbingSaluran');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialPlumbingSaluranLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialPlumbingSaluran[cleanUrlMaterialKons];
    }   
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialPlumbingSaluran[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Plumbing Saluran",
                   "item": "https://www.betonjayareadymix.com/p/material-plumbing-saluran.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialPlumbingSaluran[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 if (urlMappingMaterialAtapPenutup[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialAtapPenutup');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialAtapPenutupLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialAtapPenutup[cleanUrlMaterialKons];
    }   
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialAtapPenutup[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Atap Penutup",
                   "item": "https://www.betonjayareadymix.com/p/material-atap-penutup.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialAtapPenutup[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 if (urlMappingMaterialFasadPelapisEksterior[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialFasadPelapisEksterior');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialFasadPelapisEksteriorLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialFasadPelapisEksterior[cleanUrlMaterialKons];
    }   
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialFasadPelapisEksterior[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Fasad Pelapis Eksterior",
                   "item": "https://www.betonjayareadymix.com/p/material-fasad-pelapis-eksterior.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialFasadPelapisEksterior[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 if (urlMappingMaterialFinishingInterior[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialFinishingInterior');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialFinishingInteriorLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialFinishingInterior[cleanUrlMaterialKons];
    }   
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialFinishingInterior[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/material-finishing-interior.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialFinishingInterior[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 if (urlMappingMaterialInsulasiAkustik[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialInsulasiAkustik');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialInsulasiAkustikLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialInsulasiAkustik[cleanUrlMaterialKons];
    }   
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialInsulasiAkustik[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Insulisasi Akustik",
                   "item": "https://www.betonjayareadymix.com/p/material-insulasi-akustik.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialInsulasiAkustik[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 if (urlMappingMaterialWaterproofingPelapis[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialWaterproofingPelapis');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialWaterproofingPelapisLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialWaterproofingPelapis[cleanUrlMaterialKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialWaterproofingPelapis[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Waterproofing Pelapis",
                   "item": "https://www.betonjayareadymix.com/p/material-waterproofing-pelapis.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialWaterproofingPelapis[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 if (urlMappingMaterialGeosintetikDrainase[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialGeosintetikDrainase');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialGeosintetikDrainaseLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialGeosintetikDrainase[cleanUrlMaterialKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialGeosintetikDrainase[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Geosintetik Drainase",
                   "item": "https://www.betonjayareadymix.com/p/material-geosintetik-drainase.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialGeosintetikDrainase[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingMaterialKonstruksiKhusus[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialKonstruksiKhusus');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialKonstruksiKhususLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialKonstruksiKhusus[cleanUrlMaterialKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialKonstruksiKhusus[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Konstruksi Khusus",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi-khusus.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialKonstruksiKhusus[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingMaterialKonstruksiKelistrikan[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialKonstruksiKelistrikan');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialKonstruksiKelistrikanLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialKonstruksiKelistrikan[cleanUrlMaterialKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialKonstruksiKelistrikan[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Konstruksi Kelistrikan",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi-kelistrikan.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialKonstruksiKelistrikan[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingMaterialModularPrefabrikasi[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialModularPrefabrikasi');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialLainnya');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialModularPrefabrikasiLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialModularPrefabrikasi[cleanUrlMaterialKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialModularPrefabrikasi[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Modular Prefabrikasi",
                   "item": "https://www.betonjayareadymix.com/p/material-modular-prefabrikasi.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialModularPrefabrikasi[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingMaterialLainnya[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialLainnya');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukInFur');
        removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       // HAPUS ELEMEN LAIN NYA SEMUA KECUALI MaterialStrukturBangunan
        //removeCondition('MaterialStrukturBangunan');
        removeCondition('MaterialDindingPenutup');
        removeCondition('MaterialPekerjaanTanahJalan');
        removeCondition('MaterialPlumbingSaluran');
        removeCondition('MaterialAtapPenutup');
        removeCondition('MaterialFasadPelapisEksterior');
        removeCondition('MaterialFinishingInterior');
        removeCondition('MaterialInsulasiAkustik');
        removeCondition('MaterialWaterproofingPelapis');
        removeCondition('MaterialGeosintetikDrainase');
        removeCondition('MaterialKonstruksiKhusus');
        removeCondition('MaterialKonstruksiKelistrikan');
        removeCondition('MaterialModularPrefabrikasi');
        removeCondition('MaterialStrukturBangunan');

       MaterialKons.style.visibility = 'visible';
       MaterialKonstruksiLink.style.visibility = 'visible';
       
       MaterialLainnyaLink.style.visibility = 'visible';
       //readyMixPostLink.style.visibility = 'visible';
       pageNameMaterialKons.textContent = urlMappingMaterialLainnya[cleanUrlMaterialKons];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMaterialLainnya[cleanUrlMaterialKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material lainnya",
                   "item": "https://www.betonjayareadymix.com/p/material-lainnya.html"
               },
              {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingMaterialLainnya[cleanUrlMaterialKons],
                   "item": cleanUrlMaterialKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   });
