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

		/* ==========================================================
   🧩 HybridDateModified v2.4 — StableHash + Flexible Mapping
   Fitur:
   - Update <meta dateModified> hanya jika URL terdaftar di urlMappingGabungan
   - Gunakan stable hash agar nilai dateModified tidak berubah selamanya
   - Aman walau jumlah URL bertambah (urutan tidak pengaruh)
   ========================================================== */
(function runHybridDateModified() {
  try {
    // --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},  
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
	);


    // --- cek apakah URL termasuk dalam mapping gabungan ---
    if (!urlMappingGabungan[cleanUrlMaterialFasadPelapisEksteriorPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlMaterialFasadPelapisEksteriorPost}`);
      return;
    }
     // === Tanggal nextUpdate1 global ===
	const globalNextUpdate1 = "2026-02-19T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected material-FasadPelapisEksterior-post: ${cleanUrlMaterialFasadPelapisEksteriorPost}`);

    // Cek apakah meta sudah ada
    let metaNextUpdate1 = document.querySelector('meta[name="nextUpdate1"]');

    // Jika belum ada, buat meta baru
    if (!metaNextUpdate1) {
      metaNextUpdate1 = document.createElement("meta");
      metaNextUpdate1.setAttribute("name", "nextUpdate1");
      metaNextUpdate1.setAttribute("content", globalNextUpdate1);
      document.head.appendChild(metaNextUpdate1);

      console.log(`🆕 [AutoMeta] Meta nextUpdate1 ditambahkan → ${globalNextUpdate1}`);
    } else {
      console.log("✅ [AutoMeta] Meta nextUpdate1 sudah ada, tidak dibuat ulang.");
    }

	loadExternalJS("https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js");

    // --- pastikan AEDMetaDates tersedia ---
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan.");
      return;
    }

    const { dateModified, datePublished, nextUpdate, type } = window.AEDMetaDates;

    // ======================================================
    // 🔒 STABLE HASH GENERATOR
    // ======================================================
    function stableHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // ubah jadi 32-bit integer
      }
      return Math.abs(hash);
    }

    const hash = stableHash(cleanUrl);
    const offsetSeconds = (hash % 86400); // offset stabil ≤ 24 jam
    const baseDate = new Date(dateModified);
    const finalDate = new Date(baseDate.getTime() + offsetSeconds * 1000);
    const isoDate = finalDate.toISOString();

    // ======================================================
    // 🧱 UPDATE META TAG
    // ======================================================
    const metas = [
      ['meta[itemprop="dateModified"]', 'itemprop', 'dateModified'],
      ['meta[name="dateModified"]', 'name', 'dateModified'],
      ['meta[property="article:modified_time"]', 'property', 'article:modified_time']
    ];

    metas.forEach(([selector, attrName, attrValue]) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", isoDate);
    });

    console.log(
      `✅ [HybridDateModified v2.4] ${cleanUrl} → ${isoDate} (stable) | type=${type || "-"}`
    );

    // ======================================================
    // 🧩 UPDATE SCHEMA MAINTENANCE (opsional)
    // ======================================================
    const schemaEl = document.querySelector('script[data-schema="evergreen-maintenance"]');
    if (schemaEl) {
      try {
        const schemaData = JSON.parse(schemaEl.textContent.trim());
        schemaData.dateModified = isoDate;
        if (schemaData.maintenanceSchedule) {
          schemaData.maintenanceSchedule.scheduledTime = nextUpdate;
        }
        schemaEl.textContent = JSON.stringify(schemaData, null, 2);
        console.log(`✅ [AED] Schema maintenance diperbarui: dateModified → ${isoDate}`);
      } catch (err) {
        console.error("❌ Gagal memperbarui schema maintenance:", err);
      }
    }

  } catch (err) {
    console.error("[HybridDateModified] Error:", err);
  }
})();

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
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('MaterialKonsStukturPost');        
	removeCondition('MaterialKonsAtapPenutupPost');
	
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
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
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPanelFasadPost[cleanUrlMaterialFasadPelapisEksteriorPost]) {
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
                   "name": "Panel Fasad",
                   "item": "https://www.betonjayareadymix.com/p/panel-fasad.html"
               },
		   
              {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingPanelFasadPost[cleanUrlMaterialFasadPelapisEksteriorPost],
                   "item": cleanUrlMaterialFasadPelapisEksteriorPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingExpandedMetalPost[cleanUrlMaterialFasadPelapisEksteriorPost]) {
       restoreCondition('MaterialKonsFasadPelapisEksteriorPost');
       restoreCondition('ExpandedMetal');
      
    // hapus ID DIV Lain KECUALI MaterialKonsFasadPelapisEksteriorPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('MaterialKonsStukturPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
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

 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingExpandedMetalPost[cleanUrlMaterialFasadPelapisEksteriorPost]) {
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
                   "name": "Expanded Metal",
                   "item": "https://www.betonjayareadymix.com/p/expanded-metal.html"
               },
		   
              {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingExpandedMetalPost[cleanUrlMaterialFasadPelapisEksteriorPost],
                   "item": cleanUrlMaterialFasadPelapisEksteriorPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   });
