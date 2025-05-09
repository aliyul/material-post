 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
//SUB MaterialFasadPelapisEksteriorPost
const urlMappingPanelFasadPost = {

};

const urlMappingExpandedMetalPost = {
"https://www.betonjayareadymix.com/2019/04/harga-besi-expanded-metal.html": "Harga Besi Expanded Metal"
};

const urlMappingGranitExteriorPost = {


};
const urlMappingCladdingFasadPost = {

};
const urlMappingGrcFasadPost = {

};
const urlMappingLouversPost = {


};
const urlMappingSunShadingPost = {

};
const urlMappingCatEksteriorPost = {


};
const urlMappingCatTembokLuarPost = {


};
const urlMappingPlesterEksteriorPost = {


};
const urlMappingBatuAlamDindingPost = {


};
const urlMappingKeramikEksteriorPost = {


};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsMaterialKonsFasadPelapisEksteriorPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsMaterialKonsFasadPelapisEksteriorPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsMaterialKonsFasadPelapisEksteriorPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsMaterialKonsFasadPelapisEksteriorPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsMaterialKonsFasadPelapisEksteriorPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrlMaterialFasadPelapisEksteriorPost = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlMaterialFasadPelapisEksteriorPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1
  
     // Menemukan elemen menggunakan ID
     var MaterialKonsFasadPelapisEksteriorPost = document.getElementById("MaterialKonsFasadPelapisEksteriorPost");
    if (!MaterialKonsFasadPelapisEksteriorPost) {
        console.error("elemen Id MaterialKonsFasadPelapisEksteriorPost kondisi terhapus");
        return;
    }
     var MaterialKonstruksiFasadPelapisEksteriorPostLink = document.getElementById("MaterialKonstruksiFasadPelapisEksteriorPost");
     var MaterialFasadPelapisEksteriorPostLink = document.getElementById("MaterialFasadPelapisEksteriorPost");
     
     var PanelFasadLink = document.getElementById("PanelFasad");
     var ExpandedMetalLink = document.getElementById("ExpandedMetal");
     var GranitExteriorLink = document.getElementById("GranitExterior");
     var CladdingFasadLink = document.getElementById("CladdingFasad");
     var GrcFasadLink = document.getElementById("GrcFasad");
     var LouversLink = document.getElementById("Louvers");
     var SunShadingLink = document.getElementById("SunShading");
     var CatEksteriorLink = document.getElementById("CatEksterior");
     var CatTembokLuarLink = document.getElementById("CatTembokLuar");
     var PlesterEksteriorLink = document.getElementById("PlesterEksterior");
     var BatuAlamDindingLink = document.getElementById("BatuAlamDinding");
     var KeramikEksteriorLink = document.getElementById("KeramikEksterior");
	
     var pageNameMaterialKonsFasadPelapisEksteriorPost = document.getElementById("pageNameMaterialKonsFasadPelapisEksteriorPost");
 
     // Default untuk menyembunyikan elemen
     //JasaKonstruksiPerbaikan.remove(); // Menghapus elemen tersebut
  
     MaterialKonsFasadPelapisEksteriorPost.style.visibility = 'hidden';
     MaterialKonstruksiFasadPelapisEksteriorPostLink.style.visibility = 'hidden';
     MaterialFasadPelapisEksteriorPostLink.style.visibility = 'hidden';
	
     PanelFasadLink.style.visibility = 'hidden';
     ExpandedMetalLink.style.visibility = 'hidden';
     GranitExteriorLink.style.visibility = 'hidden';
     CladdingFasadLink.style.visibility = 'hidden';
     GrcFasadLink.style.visibility = 'hidden';
     LouversLink.style.visibility = 'hidden';
     SunShadingLink.style.visibility = 'hidden';
     CatEksteriorLink.style.visibility = 'hidden';
     CatTembokLuarLink.style.visibility = 'hidden';
     PlesterEksteriorLink.style.visibility = 'hidden';
     BatuAlamDindingLink.style.visibility = 'hidden';
     KeramikEksteriorLink.style.visibility = 'hidden';
	
     pageNameMaterialKonsFasadPelapisEksteriorPost.textContent = ""; 
 
    if (!MaterialKonstruksiFasadPelapisEksteriorPostLink || !pageNameMaterialKonsFasadPelapisEksteriorPost) {
        console.error("Salah satu elemen MaterialKonsFasadPelapisEksteriorPost tidak ditemukan!");
        return;
    }

if (urlMappingPanelFasadPost[cleanUrlMaterialFasadPelapisEksteriorPost]) {
       restoreCondition('MaterialKonsFasadPelapisEksteriorPost');
       restoreCondition('PanelFasad');
      
    // hapus ID DIV Lain KECUALI MaterialKonsFasadPelapisEksteriorPost
        removeCondition('MaterialKonsStukturPost');        
	removeCondition('MaterialKonsAtapPenutupPost');
	
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
        //removeCondition('MaterialKonsFasadPelapisEksteriorPost');

    //hapus elemen lain nya selain PanelFasad
     removeCondition('ExpandedMetal');
     removeCondition('GranitExterior');
     removeCondition('CladdingFasad');
     removeCondition('GrcFasad');
     removeCondition('Louvers');
     removeCondition('SunShading');
     removeCondition('CatEksterior');
     removeCondition('CatTembokLuar');
     removeCondition('PlesterEksterior');
     removeCondition('BatuAlamDinding');
     removeCondition('KeramikEksterior');
	  
       // restoreCondition('MaterialKonsFasadPelapisEksteriorPost');
       
       MaterialKonsFasadPelapisEksteriorPost.style.visibility = 'visible';
       MaterialKonstruksiFasadPelapisEksteriorPostLink.style.visibility = 'visible';
       
        MaterialFasadPelapisEksteriorPostLink.style.visibility = 'visible';
        PanelFasadLink.style.visibility = 'visible';
        pageNameMaterialKonsFasadPelapisEksteriorPost.textContent = urlMappingPanelFasadPost[cleanUrlMaterialFasadPelapisEksteriorPost];
    }
if (urlMappingExpandedMetalPost[cleanUrlMaterialFasadPelapisEksteriorPost]) {
       restoreCondition('MaterialKonsFasadPelapisEksteriorPost');
       restoreCondition('ExpandedMetal');
      
    // hapus ID DIV Lain KECUALI MaterialKonsFasadPelapisEksteriorPost
        removeCondition('MaterialKonsStukturPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
       /// removeCondition('MaterialKonsFasadPelapisEksteriorPost');

    //hapus elemen lain nya selain PanelFasad
     removeCondition('PanelFasad');
     removeCondition('GranitExterior');
     removeCondition('CladdingFasad');
     removeCondition('GrcFasad');
     removeCondition('Louvers');
     removeCondition('SunShading');
     removeCondition('CatEksterior');
     removeCondition('CatTembokLuar');
     removeCondition('PlesterEksterior');
     removeCondition('BatuAlamDinding');
     removeCondition('KeramikEksterior');
	  
       // restoreCondition('MaterialKonsFasadPelapisEksteriorPost');
       
       MaterialKonsFasadPelapisEksteriorPost.style.visibility = 'visible';
       MaterialKonstruksiFasadPelapisEksteriorPostLink.style.visibility = 'visible';
       
        MaterialFasadPelapisEksteriorPostLink.style.visibility = 'visible';
        ExpandedMetalLink.style.visibility = 'visible';
        pageNameMaterialKonsFasadPelapisEksteriorPost.textContent = urlMappingExpandedMetalPost[cleanUrlMaterialFasadPelapisEksteriorPost];
    }

   });
