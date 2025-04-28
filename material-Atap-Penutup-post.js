/*const urlMappingMaterialAtapPenutup = {
"https://www.betonjayareadymix.com/p/genteng-beton.html": "Genteng Beton",
  "https://www.betonjayareadymix.com/p/genteng-keramik.html": "Genteng Keramik",
  "https://www.betonjayareadymix.com/p/atap-spandek.html": "Atap Spandek",
  "https://www.betonjayareadymix.com/p/atap-zincalume.html": "Atap Zincalume",
  "https://www.betonjayareadymix.com/p/atap-bitumen.html": "Atap Bitumen",
  "https://www.betonjayareadymix.com/p/talang-atap.html": "Talang Atap",
  "https://www.betonjayareadymix.com/p/sekrup-atap.html": "Sekrup Atap"
};
*/

//SUB MaterialAtapPenutupPost

const urlMappingGentengTanahLiatPost = {
    "https://www.betonjayareadymix.com/2021/06/genteng-karang-pilang-asli.html": "Genteng Karang Pilang Asli",
    "https://www.betonjayareadymix.com/2021/06/genteng-karang-pilang-jakarta.html": "Genteng Karang Pilang Jakarta",
    "https://www.betonjayareadymix.com/2021/06/genteng-karang-pilang-di-bogor.html": "Genteng Karang Pilang Di Bogor",
    "https://www.betonjayareadymix.com/2021/06/genteng-karang-pilang-anti-lumut.html": "Genteng Karang Pilang Anti Lumut",
    "https://www.betonjayareadymix.com/2021/06/genteng-karang-pilang-ambulu.html": "Genteng Karang Pilang Ambulu"

};

const urlMappingGentengBetonPost = {

};

const urlMappingGentengKeramikPost = {
  
};

const urlMappingAtapSpandekPost = {


};
const urlMappingAtapZincalumePost = {

};
const urlMappingAtapBitumenPost = {

};
const urlMappingTalangAtapPost = {


};
const urlMappingSekrupAtapPost = {

};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsMaterialAtapPenutupPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsMaterialAtapPenutupPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsMaterialAtapPenutupPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsMaterialAtapPenutupPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsMaterialAtapPenutupPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrlMaterialAtapPenutupPost = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlMaterialAtapPenutupPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1
  
     // Menemukan elemen menggunakan ID
     var MaterialAtapPenutupPost = document.getElementById("MaterialAtapPenutupPost");
    if (!MaterialAtapPenutupPost) {
        console.error("elemen Id MaterialAtapPenutupPost kondisi terhapus");
        return;
    }
     var MaterialKonstruksiAtapPenutupPostLink = document.getElementById("MaterialKonstruksiAtapPenutupPost");
     var MaterialAtapPenutupPostLink = document.getElementById("MaterialAtapPenutupPost");

     var GentengTanahLiatLink = document.getElementById("GentengTanahLiat");
     var GentengBetonLink = document.getElementById("GentengBeton");
     var GentengKeramikLink = document.getElementById("GentengKeramik");
     var AtapSpandekLink = document.getElementById("AtapSpandek");
     var AtapZincalumeLink = document.getElementById("AtapZincalume");
     var AtapBitumenLink = document.getElementById("AtapBitumen");
     var TalangAtapLink = document.getElementById("TalangAtap");
     var SekrupAtapLink = document.getElementById("SekrupAtap");
  
     var pageNameMaterialKonsAtapPenutupPost = document.getElementById("pageNameMaterialKonsAtapPenutupPost");
 
     // Default untuk menyembunyikan elemen
     //JasaKonstruksiPerbaikan.remove(); // Menghapus elemen tersebut
  
     MaterialAtapPenutupPost.style.visibility = 'hidden';
     MaterialKonstruksiFasadPelapisEksteriorPostLink.style.visibility = 'hidden';
     MaterialAtapPenutupPostLink.style.visibility = 'hidden';
  
     GentengTanahLiatLink.style.visibility = 'hidden';
     GentengBetonLink.style.visibility = 'hidden';
     GentengKeramikLink.style.visibility = 'hidden';
     AtapSpandekLink.style.visibility = 'hidden';
     AtapZincalumeLink.style.visibility = 'hidden';
     AtapBitumenLink.style.visibility = 'hidden';
     TalangAtapLink.style.visibility = 'hidden';
     SekrupAtapLink.style.visibility = 'hidden';
     CatEksteriorLink.style.visibility = 'hidden';
     CatTembokLuarLink.style.visibility = 'hidden';
     PlesterEksteriorLink.style.visibility = 'hidden';
     BatuAlamDindingLink.style.visibility = 'hidden';
     KeramikEksteriorLink.style.visibility = 'hidden';
	
     pageNameMaterialKonsAtapPenutupPost.textContent = ""; 
 
    if (!MaterialKonstruksiAtapPenutupPostLink || !pageNameMaterialKonsAtapPenutupPost) {
        console.error("Salah satu elemen MaterialAtapPenutupPost tidak ditemukan!");
        return;
    }
if (urlMappingGentengTanahLiatPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('GentengTanahLiat');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     removeCondition('GentengBeton');
     removeCondition('GentengKeramik');
     removeCondition('AtapSpandek');
     removeCondition('AtapZincalume');
     removeCondition('AtapBitumen');
     removeCondition('TalangAtap');
     removeCondition('SekrupAtap');

       MaterialAtapPenutupPost.style.visibility = 'visible';
       MaterialKonstruksiAtapPenutupPostLink.style.visibility = 'visible';
       
        MaterialAtapPenutupPostLink.style.visibility = 'visible';
        GentengTanahLiatLink.style.visibility = 'visible';
        pageNameMaterialKonsAtapPenutupPost.textContent = urlMappingGentengTanahLiatPost[cleanUrlMaterialAtapPenutupPost];
    }

if (urlMappingGentengBetonPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('GentengBeton');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     removeCondition('GentengTanahLiat');
     removeCondition('GentengKeramik');
     removeCondition('AtapSpandek');
     removeCondition('AtapZincalume');
     removeCondition('AtapBitumen');
     removeCondition('TalangAtap');
     removeCondition('SekrupAtap');

       MaterialAtapPenutupPost.style.visibility = 'visible';
       MaterialKonstruksiAtapPenutupPostLink.style.visibility = 'visible';
       
        MaterialAtapPenutupPostLink.style.visibility = 'visible';
        GentengBetonLink.style.visibility = 'visible';
        pageNameMaterialKonsAtapPenutupPost.textContent = urlMappingGentengBetonPost[cleanUrlMaterialAtapPenutupPost];
    }
  if (urlMappingGentengKeramikPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('GentengKeramik');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     //removeCondition('GentengBeton');
     removeCondition('GentengTanahLiat');
     removeCondition('GentengBeton');
     removeCondition('AtapSpandek');
     removeCondition('AtapZincalume');
     removeCondition('AtapBitumen');
     removeCondition('TalangAtap');
     removeCondition('SekrupAtap');

       MaterialAtapPenutupPost.style.visibility = 'visible';
       MaterialKonstruksiAtapPenutupPostLink.style.visibility = 'visible';
       
        MaterialAtapPenutupPostLink.style.visibility = 'visible';
        GentengKeramikLink.style.visibility = 'visible';
        pageNameMaterialKonsAtapPenutupPost.textContent = urlMappingGentengKeramikPost[cleanUrlMaterialAtapPenutupPost];
    }
  if (urlMappingAtapSpandekPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('AtapSpandek');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     //removeCondition('GentengBeton');
     removeCondition('GentengTanahLiat');
     removeCondition('GentengKeramik');
     removeCondition('GentengBeton');
     removeCondition('AtapZincalume');
     removeCondition('AtapBitumen');
     removeCondition('TalangAtap');
     removeCondition('SekrupAtap');

       MaterialAtapPenutupPost.style.visibility = 'visible';
       MaterialKonstruksiAtapPenutupPostLink.style.visibility = 'visible';
       
        MaterialAtapPenutupPostLink.style.visibility = 'visible';
        AtapSpandekLink.style.visibility = 'visible';
        pageNameMaterialKonsAtapPenutupPost.textContent = urlMappingAtapSpandekPost[cleanUrlMaterialAtapPenutupPost];
    }
  if (urlMappingAtapZincalumePost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('AtapZincalume');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     //removeCondition('GentengBeton');
     removeCondition('GentengTanahLiat');
     removeCondition('GentengKeramik');
     removeCondition('AtapSpandek');
     removeCondition('GentengBeton');
     removeCondition('AtapBitumen');
     removeCondition('TalangAtap');
     removeCondition('SekrupAtap');

       MaterialAtapPenutupPost.style.visibility = 'visible';
       MaterialKonstruksiAtapPenutupPostLink.style.visibility = 'visible';
       
        MaterialAtapPenutupPostLink.style.visibility = 'visible';
        AtapZincalumeLink.style.visibility = 'visible';
        pageNameMaterialKonsAtapPenutupPost.textContent = urlMappingAtapZincalumePost[cleanUrlMaterialAtapPenutupPost];
    }
  if (urlMappingAtapBitumenPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('AtapBitumen');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     //removeCondition('GentengBeton');
     removeCondition('GentengTanahLiat');
     removeCondition('GentengKeramik');
     removeCondition('AtapSpandek');
     removeCondition('AtapZincalume');
     removeCondition('GentengBeton');
     removeCondition('TalangAtap');
     removeCondition('SekrupAtap');

       MaterialAtapPenutupPost.style.visibility = 'visible';
       MaterialKonstruksiAtapPenutupPostLink.style.visibility = 'visible';
       
        MaterialAtapPenutupPostLink.style.visibility = 'visible';
        AtapBitumenLink.style.visibility = 'visible';
        pageNameMaterialKonsAtapPenutupPost.textContent = urlMappingAtapBitumenPost[cleanUrlMaterialAtapPenutupPost];
    }
  if (urlMappingTalangAtapPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('TalangAtap');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     //removeCondition('GentengBeton');
     removeCondition('GentengTanahLiat');
     removeCondition('GentengKeramik');
     removeCondition('AtapSpandek');
     removeCondition('AtapZincalume');
     removeCondition('AtapBitumen');
     removeCondition('GentengBeton');
     removeCondition('SekrupAtap');

       MaterialAtapPenutupPost.style.visibility = 'visible';
       MaterialKonstruksiAtapPenutupPostLink.style.visibility = 'visible';
       
        MaterialAtapPenutupPostLink.style.visibility = 'visible';
        TalangAtapLink.style.visibility = 'visible';
        pageNameMaterialKonsAtapPenutupPost.textContent = urlMappingTalangAtapPost[cleanUrlMaterialAtapPenutupPost];
    }
  if (urlMappingSekrupAtapPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('SekrupAtap');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     //removeCondition('GentengBeton');
     removeCondition('GentengTanahLiat');
     removeCondition('GentengKeramik');
     removeCondition('AtapSpandek');
     removeCondition('AtapZincalume');
     removeCondition('AtapBitumen');
     removeCondition('TalangAtap');
     removeCondition('GentengBeton');

       MaterialAtapPenutupPost.style.visibility = 'visible';
       MaterialKonstruksiAtapPenutupPostLink.style.visibility = 'visible';
       
        MaterialAtapPenutupPostLink.style.visibility = 'visible';
        SekrupAtapLink.style.visibility = 'visible';
        pageNameMaterialKonsAtapPenutupPost.textContent = urlMappingSekrupAtapPost[cleanUrlMaterialAtapPenutupPost];
    }
});

