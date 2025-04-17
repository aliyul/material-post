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
"https://www.betonjayareadymix.com/p/material-struktur-bangunan.html": "Material Struktur Bangunan",
  "https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html": "Ready Mix",
  "https://www.betonjayareadymix.com/p/semen-portland.html": "Semen Portland",
  "https://www.betonjayareadymix.com/p/besi-beton-ulir.html": "Besi Beton Ulir",
  "https://www.betonjayareadymix.com/p/besi-beton-polos.html": "Besi Beton Polos",
  "https://www.betonjayareadymix.com/p/wiremesh.html": "Wiremesh",
  "https://www.betonjayareadymix.com/p/baja-ringan-struktur.html": "Baja Ringan Struktur",
  "https://www.betonjayareadymix.com/p/baja-tulangan.html": "Baja Tulangan",
  "https://www.betonjayareadymix.com/p/scaffolding.html": "Scaffolding",
  "https://www.betonjayareadymix.com/p/bekisting-baja.html": "Bekisting Baja",
  "https://www.betonjayareadymix.com/p/semen-instan.html": "Semen Instan",
  "https://www.betonjayareadymix.com/p/semen-putih.html": "Semen Putih",
  "https://www.betonjayareadymix.com/p/bekisting-kayu.html": "Bekisting Kayu",
  "https://www.betonjayareadymix.com/p/mortar-struktural.html": "Mortar Struktural",
  "https://www.betonjayareadymix.com/p/perekat-beton-epoxy.html": "Perekat Beton Epoxy"
};

const urlMappingMaterialDindingPenutup = {

};

const urlMappingMaterialPekerjaanTanahJalan = {

};

const urlMappingMaterialPlumbingSaluran = {

};

const urlMappingMaterialAtapPenutup = {

};

const urlMappingMaterialFasadPelapisEksterior = {

};

const urlMappingMaterialFinishingInterior = {

};

const urlMappingMaterialInsulasiAkustik = {

};

const urlMappingMaterialWaterproofingPelapis = {

};
const urlMappingMaterialGeosintetikDrainase = {

};
const urlMappingMaterialKonstruksiKhusus = {

};
const urlMappingMaterialKonstruksiKelistrikan = {

};
const urlMappingMaterialModularPrefabrikasi = {

};

const urlMappingMaterialLainnya = {

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
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
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

 //SUB PAGE MATERIAL KONSTRUKSI
   if (urlMappingMaterialStrukturBangunan[cleanUrlMaterialKons]) {
       restoreCondition('MaterialKons');
       restoreCondition('MaterialStrukturBangunan');
  
    
         // hapus elemen id DIV Lain
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
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
   });
