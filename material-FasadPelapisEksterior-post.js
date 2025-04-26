 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingReadymixPost = {
       
};

const urlMappingSemenPortlandPost = {


};

const urlMappingSemenInstanPost = {


};
const urlMappingBajaKonvensionalPost = {

};
const urlMappingBajaRinganStrukturPost = {

};
const urlMappingBajaTulanganPost = {


};
const urlMappingWiremeshPost = {


};
const urlMappingBondexPost = {


};
const urlMappingBesiBetonUlirPost = {


};
const urlMappingBesiBetonPolosPost = {


};
const urlMappingBekistingBajaPost = {


};
const urlMappingBekistingKayuPost = {


};
const urlMappingScaffoldingPost = {


};
const urlMappingPerekatBetonEpoxyPost = {

};

const urlMappingMortarStrukturalPost = {

};

const urlMappingSemenPutihPost = {

};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsMaterialKonsStukturPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsMaterialKonsStukturPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsMaterialKonsStukturPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsMaterialKonsStukturPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsMaterialKonsStukturPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrl = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1
  
     // Menemukan elemen menggunakan ID
     var MaterialKonsStukturPost = document.getElementById("MaterialKonsStukturPost");
    if (!MaterialKonsStukturPost) {
        console.error("elemen Id MaterialKonsStukturPost kondisi terhapus");
        return;
    }
     var MaterialKonstruksiStukturPostLink = document.getElementById("MaterialKonstruksiStukturPost");
     var MaterialStrukturBangunanPostLink = document.getElementById("MaterialStrukturBangunanPost");
     
     var readyMixLink = document.getElementById("readyMix");
     var SemenPortlandLink = document.getElementById("SemenPortland");
     var BesiBetonUlirLink = document.getElementById("BesiBetonUlir");
     var BesiBetonPolosLink = document.getElementById("BesiBetonPolos");
     var WiremeshLink = document.getElementById("Wiremesh");
     var BondexLink = document.getElementById("Bondex");
     var BajaKonvensionalLink = document.getElementById("BajaKonvensional");
     var BajaRinganStrukturLink = document.getElementById("BajaRinganStruktur");
     var BajaTulanganLink = document.getElementById("BajaTulangan");
     var ScaffoldingLink = document.getElementById("Scaffolding");
     var BekistingBajaLink = document.getElementById("BekistingBaja");
     var SemenInstanLink = document.getElementById("SemenInstan");
     var SemenPutihLink = document.getElementById("SemenPutih");
     var BekistingKayuLink = document.getElementById("BekistingKayu");
     var MortarStrukturalLink = document.getElementById("MortarStruktural");
     var PerekatBetonEpoxyLink = document.getElementById("PerekatBetonEpoxy");
     var pageNameMaterialKonsStukturPost = document.getElementById("pageNameMaterialKonsStukturPost");
 
     // Default untuk menyembunyikan elemen
     //JasaKonstruksiPerbaikan.remove(); // Menghapus elemen tersebut
  
     MaterialKonsStukturPost.style.visibility = 'hidden';
     MaterialKonstruksiStukturPostLink.style.visibility = 'hidden';
     MaterialStrukturBangunanPostLink.style.visibility = 'hidden';
     readyMixLink.style.visibility = 'hidden';
     SemenPortlandLink.style.visibility = 'hidden';
     BesiBetonUlirLink.style.visibility = 'hidden';
     BesiBetonPolosLink.style.visibility = 'hidden';
     WiremeshLink.style.visibility = 'hidden';
     BondexLink.style.visibility = 'hidden';
     BajaKonvensionalLink.style.visibility = 'hidden';
     BajaRinganStrukturLink.style.visibility = 'hidden';
     BajaTulanganLink.style.visibility = 'hidden';
     ScaffoldingLink.style.visibility = 'hidden';
     BekistingBajaLink.style.visibility = 'hidden';
     SemenInstanLink.style.visibility = 'hidden';
     SemenPutihLink.style.visibility = 'hidden';
     BekistingKayuLink.style.visibility = 'hidden';
     MortarStrukturalLink.style.visibility = 'hidden';
     PerekatBetonEpoxyLink.style.visibility = 'hidden';
     pageNameMaterialKonsStukturPost.textContent = "";
  
    console.log('Material Konstruksi:', MaterialKonstruksiStukturPostLink);
    console.log('Ready Mix:', readyMixLink);
    console.log('Page Name Span:', pageNameMaterialKonsStukturPost);

    if (!MaterialKonstruksiStukturPostLink || !readyMixLink || !pageNameMaterialKonsStukturPost) {
        console.error("Salah satu elemen tidak ditemukan!");
        return;
    }

  if (urlMappingReadymixPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('readyMix');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	  
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        readyMixLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingReadymixPost[cleanUrl];
    }

 if (urlMappingSemenPortlandPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('SemenPortland');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');

   
    //hapus elemen lain nya selain READY MIX
     removeCondition('readyMix');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        SemenPortlandLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingSemenPortlandPost[cleanUrl];
    }
if (urlMappingSemenInstanPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('SemenInstan');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');

   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('readyMix');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        SemenInstanLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingSemenInstanPost[cleanUrl];
    }
if (urlMappingBajaKonvensionalPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BajaKonvensional');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('readyMix');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BajaKonvensionalLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBajaKonvensionalPost[cleanUrl];
    }
if (urlMappingBajaRinganStrukturPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BajaRinganStruktur');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('readyMix');
     removeCondition('BajaKonvensional');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BajaRinganStrukturLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBajaRinganStrukturPost[cleanUrl];
    }
if (urlMappingBajaTulanganPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BajaTulangan');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('readyMix');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BajaTulanganLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBajaTulanganPost[cleanUrl];
    }
if (urlMappingWiremeshPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('Wiremesh');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Bondex');
     removeCondition('readyMix');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        WiremeshLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingWiremeshPost[cleanUrl];
    }
if (urlMappingBondexPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('Bondex');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('readyMix');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BondexLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBondexPost[cleanUrl];
    }
if (urlMappingBesiBetonUlirPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BesiBetonUlir');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('readyMix');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BesiBetonUlirLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBesiBetonUlirPost[cleanUrl];
    }
if (urlMappingBesiBetonPolosPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BesiBetonPolos');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('readyMix');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BesiBetonPolosLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBesiBetonPolosPost[cleanUrl];
    }
if (urlMappingBekistingBajaPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BekistingBaja');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('readyMix');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BekistingBajaLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBekistingBajaPost[cleanUrl];
    }
if (urlMappingBekistingKayuPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BekistingKayu');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('readyMix');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BekistingKayuLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBekistingKayuPost[cleanUrl];
    }
if (urlMappingScaffoldingPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('Scaffolding');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('readyMix');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        ScaffoldingLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingScaffoldingPost[cleanUrl];
    }
if (urlMappingPerekatBetonEpoxyPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('PerekatBetonEpoxy');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('readyMix');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        PerekatBetonEpoxyLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingPerekatBetonEpoxyPost[cleanUrl];
    }
if (urlMappingMortarStrukturalPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('MortarStruktural');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('readyMix');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        MortarStrukturalLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingMortarStrukturalPost[cleanUrl];
    }
if (urlMappingSemenPutihPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('SemenPutih');
      
    // hapus ID DIV Lain
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('readyMix');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        SemenPutihLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingSemenPutihPost[cleanUrl];
    }

   });
