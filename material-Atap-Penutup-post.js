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
const urlMappingGentengPost = {

};

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

	
	/* ==========================================================
   🧩 HybridDateModified v2.5 — StableHash + Safe Load Order
   Fitur:
   - Menjamin detect-evergreen.js dimuat lebih dulu
   - Update <meta dateModified> hanya jika URL terdaftar
   - Stable hash → hasil dateModified konsisten
   ========================================================== */
(async function runHybridDateModified() {
  try {
    // --- helper untuk load eksternal JS secara promise ---
    function loadExternalJSAsync(src) {
      return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve(src);
        s.onerror = () => reject(new Error("Gagal load " + src));
        document.head.appendChild(s);
      });
    }

    // --- loader evergreen JS dengan sessionStorage (anti 429) ---
    async function loadEvergreenScript() {
      const KEY = "evergreenScriptLoaded";

      const needReload =
        !sessionStorage.getItem(KEY) ||
        !window.AEDMetaDates ||
        !window.detectEvergreenReady;

      if (!needReload) {
        console.log("⚡ detect-evergreen.js sudah aktif & variable ready — SKIP load");
      } else {
        console.log("⏳ load detect-evergreen.js dari GitHack…");
        try {
          await loadExternalJSAsync(
            "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
          );
          window.detectEvergreenReady = true;
          sessionStorage.setItem(KEY, "true");
          console.log("✅ detect-evergreen.js LOADED & READY");
        } catch (err) {
          console.error("❌ Gagal load detect-evergreen.js", err);
          sessionStorage.removeItem(KEY);
        }
      }

      // --- ALWAYS run evergreen check tiap halaman ---
      if (typeof window.runEvergreenCheck === "function") {
        console.log("🔁 Running evergreen check for this page...");
        window.runEvergreenCheck();
      } else if (typeof window.detectEvergreen === "function") {
        // fallback jika runEvergreenCheck tidak ada
        console.log("🔁 fallback: running detectEvergreen() directly...");
        window.detectEvergreen();
      } else {
        console.warn("⚠️ runEvergreenCheck / detectEvergreen tidak ditemukan!");
      }
    }

    // === PANGGIL LOADER ===
    await loadEvergreenScript();

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();


/*
(async function runHybridDateModified() {
  try {
    // --- helper untuk load eksternal JS secara promise ---
    function loadExternalJSAsync(src) {
      return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve(src);
        s.onerror = () => reject(new Error("Gagal load " + src));
        document.head.appendChild(s);
      });
    }

	
     // --- loader evergreen JS dengan sessionStorage (anti 429) ---
    async function loadEvergreenScript() {
      const KEY = "evergreenScriptLoaded";

      const needReload =
        !sessionStorage.getItem(KEY) ||
        !window.AEDMetaDates ||
        !window.detectEvergreenReady;

      if (!needReload) {
        console.log("⚡ detect-evergreen.js sudah aktif & variable ready — SKIP load");
      } else {
        console.log("⏳ load detect-evergreen.js dari GitHack…");
        try {
          await loadExternalJSAsync(
            "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
          );
          window.detectEvergreenReady = true;
          sessionStorage.setItem(KEY, "true");
          console.log("✅ detect-evergreen.js LOADED & READY");
        } catch (err) {
          console.error("❌ Gagal load detect-evergreen.js", err);
          sessionStorage.removeItem(KEY);
        }
      }

      // --- ALWAYS run evergreen check tiap halaman ---
      if (typeof window.runEvergreenCheck === "function") {
        console.log("🔁 Running evergreen check for this page...");
        window.runEvergreenCheck();
      } else {
        console.warn("⚠️ runEvergreenCheck tidak ditemukan!");
      }
    }
	  
    // --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},
		urlMappingGentengPost,
		urlMappingGentengTanahLiatPost,
		urlMappingGentengBetonPost,
		urlMappingGentengKeramikPost,
		urlMappingAtapSpandekPost,
		urlMappingAtapZincalumePost,
		urlMappingAtapBitumenPost,
		urlMappingTalangAtapPost,
		urlMappingSekrupAtapPost
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlMaterialAtapPenutupPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlMaterialAtapPenutupPost}`);
      return;
    }
  

  // === Tanggal nextUpdate1 global ===
	const globalNextUpdate1 = "2026-02-20T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected material-Atap-Penutup-post: ${cleanUrlMaterialAtapPenutupPost}`);

    // --- pastikan meta nextUpdate1 ada ---
    let metaNextUpdate1 = document.querySelector('meta[name="nextUpdate1"]');
    if (!metaNextUpdate1) {
      metaNextUpdate1 = document.createElement("meta");
      metaNextUpdate1.setAttribute("name", "nextUpdate1");
      metaNextUpdate1.setAttribute("content", globalNextUpdate1);
      document.head.appendChild(metaNextUpdate1);
      console.log(`🆕 [AutoMeta] Meta nextUpdate1 ditambahkan → ${globalNextUpdate1}`);
    } else {
      console.log("✅ [AutoMeta] Meta nextUpdate1 sudah ada, tidak dibuat ulang.");
    }

    // --- pastikan detect-evergreen.js selesai dimuat ---
    await loadEvergreenScript();
    console.log("✅ detect-evergreen.js selesai dimuat.");

    // --- pastikan AEDMetaDates sudah tersedia ---
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
      return;
    }

    const { dateModified, nextUpdate, type } = window.AEDMetaDates;

    // 🔒 Stable hash untuk variasi waktu stabil
    function stableHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    }

    const hash = stableHash(cleanUrlMaterialAtapPenutupPost);
    const offsetSeconds = hash % 86400;
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = finalDate.toISOString();

    // 🧱 Update meta dateModified
    [
      ['meta[itemprop="dateModified"]', 'itemprop', 'dateModified'],
      ['meta[name="dateModified"]', 'name', 'dateModified'],
      ['meta[property="article:modified_time"]', 'property', 'article:modified_time']
    ].forEach(([selector, attr, val]) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, val);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", isoDate);
    });
	
				// Pastikan AEDMetaDates sudah ada minimal sebagai objek kosong
	window.AEDMetaDates = window.AEDMetaDates || {};
	
	// Update hanya properti dateModified tanpa menghapus lainnya
	window.AEDMetaDates = {
	  ...window.AEDMetaDates,
	  dateModified: isoDate
	};
	
	console.log("✅ AEDMetaDates updated material-Atap-Penutup-post.:", window.AEDMetaDates); 
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlMaterialAtapPenutupPost} → ${isoDate} | type=${type || "-"}`);

    // 🧩 Perbarui schema jika ada
    const schemaEl = document.querySelector('script[data-schema="evergreen-maintenance"]');
    if (schemaEl) {
      try {
        const data = JSON.parse(schemaEl.textContent.trim());
        data.dateModified = isoDate;
        if (data.maintenanceSchedule) data.maintenanceSchedule.scheduledTime = nextUpdate;
        schemaEl.textContent = JSON.stringify(data, null, 2);
        console.log(`🔄 Schema maintenance diperbarui → dateModified: ${isoDate}`);
      } catch (err) {
        console.error("❌ Gagal update schema:", err);
      }
    }

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();
*/
	
     // Menemukan elemen menggunakan ID
     var MaterialAtapPenutupPost = document.getElementById("MaterialAtapPenutupPost");
    if (!MaterialAtapPenutupPost) {
        console.error("elemen Id MaterialAtapPenutupPost kondisi terhapus");
        return;
    }
     var MaterialKonstruksiAtapPenutupPostLink = document.getElementById("MaterialKonstruksiAtapPenutupPost");
     var MaterialAtapPenutupPostLink = document.getElementById("MaterialAtapPenutupPost");
    // var MaterialKonsFasadPelapisEksteriorPostLink = document.getElementById("MaterialKonsFasadPelapisEksteriorPost");

	
	
     var GentengLink = document.getElementById("Genteng");
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
    // MaterialKonsFasadPelapisEksteriorPostLink.style.visibility = 'hidden';
     MaterialAtapPenutupPostLink.style.visibility = 'hidden';
     
     GentengLink.style.visibility = 'hidden';
     GentengTanahLiatLink.style.visibility = 'hidden';
     GentengBetonLink.style.visibility = 'hidden';
     GentengKeramikLink.style.visibility = 'hidden';
     AtapSpandekLink.style.visibility = 'hidden';
     AtapZincalumeLink.style.visibility = 'hidden';
     AtapBitumenLink.style.visibility = 'hidden';
     TalangAtapLink.style.visibility = 'hidden';
     SekrupAtapLink.style.visibility = 'hidden';
     pageNameMaterialKonsAtapPenutupPost.textContent = ""; 
 
    if (!MaterialKonstruksiAtapPenutupPostLink || !pageNameMaterialKonsAtapPenutupPost) {
        console.error("Salah satu elemen MaterialAtapPenutupPost tidak ditemukan!");
        return;
    }
if (urlMappingGentengPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('Genteng');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     removeCondition('GentengTanahLiat');
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
        GentengLink.style.visibility = 'visible';
        pageNameMaterialKonsAtapPenutupPost.textContent = urlMappingGentengPost[cleanUrlMaterialAtapPenutupPost];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingGentengPost[cleanUrlMaterialAtapPenutupPost]) {
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
                   "name": "Genteng",
                   "item": "https://www.betonjayareadymix.com/p/genteng.html"
               },
              {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingGentengPost[cleanUrlMaterialAtapPenutupPost],
                   "item": cleanUrlMaterialAtapPenutupPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

if (urlMappingGentengTanahLiatPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('GentengTanahLiat');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     removeCondition('Genteng');
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
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingGentengTanahLiatPost[cleanUrlMaterialAtapPenutupPost]) {
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
                   "name": "Genteng",
                   "item": "https://www.betonjayareadymix.com/p/genteng.html"
               },
              {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingGentengTanahLiatPost[cleanUrlMaterialAtapPenutupPost],
                   "item": cleanUrlMaterialAtapPenutupPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingGentengBetonPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('GentengBeton');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     removeCondition('Genteng');
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
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingGentengBetonPost[cleanUrlMaterialAtapPenutupPost]) {
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
                   "name": "Genteng Beton",
                   "item": "https://www.betonjayareadymix.com/p/genteng-beton.html"
               },
              {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingGentengBetonPost[cleanUrlMaterialAtapPenutupPost],
                   "item": cleanUrlMaterialAtapPenutupPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  if (urlMappingGentengKeramikPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('GentengKeramik');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     //removeCondition('GentengBeton');
     removeCondition('Genteng');
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
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingGentengKeramikPost[cleanUrlMaterialAtapPenutupPost]) {
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
                   "name": "Genteng Beton",
                   "item": "https://www.betonjayareadymix.com/p/genteng-keramik.html"
               },
              {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingGentengKeramikPost[cleanUrlMaterialAtapPenutupPost],
                   "item": cleanUrlMaterialAtapPenutupPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  if (urlMappingAtapSpandekPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('AtapSpandek');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     //removeCondition('GentengBeton');
     removeCondition('Genteng');
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
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingAtapSpandekPost[cleanUrlMaterialAtapPenutupPost]) {
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
                   "name": "Atap Spandek",
                   "item": "https://www.betonjayareadymix.com/p/atap-spandek.html"
               },
              {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingAtapSpandekPost[cleanUrlMaterialAtapPenutupPost],
                   "item": cleanUrlMaterialAtapPenutupPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  if (urlMappingAtapZincalumePost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('AtapZincalume');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     //removeCondition('GentengBeton');
     removeCondition('Genteng');
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
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingAtapZincalumePost[cleanUrlMaterialAtapPenutupPost]) {
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
                   "name": "Atap Zincalume",
                   "item": "https://www.betonjayareadymix.com/p/atap-zincalume.html"
               },
              {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingAtapZincalumePost[cleanUrlMaterialAtapPenutupPost],
                   "item": cleanUrlMaterialAtapPenutupPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

  if (urlMappingAtapBitumenPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('AtapBitumen');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     //removeCondition('GentengBeton');
     removeCondition('Genteng');
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
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingAtapBitumenPost[cleanUrlMaterialAtapPenutupPost]) {
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
                   "name": "Atap Bitumen",
                   "item": "https://www.betonjayareadymix.com/p/atap-bitumen.html"
               },
              {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingAtapBitumenPost[cleanUrlMaterialAtapPenutupPost],
                   "item": cleanUrlMaterialAtapPenutupPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  if (urlMappingTalangAtapPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('TalangAtap');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
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

    //hapus elemen lain nya selain GentengBeton
     //removeCondition('GentengBeton');
     removeCondition('Genteng');
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
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingTalangAtapPost[cleanUrlMaterialAtapPenutupPost]) {
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
                   "name": "Talang Atap",
                   "item": "https://www.betonjayareadymix.com/p/talang-atap.html"
               },
              {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingTalangAtapPost[cleanUrlMaterialAtapPenutupPost],
                   "item": cleanUrlMaterialAtapPenutupPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  if (urlMappingSekrupAtapPost[cleanUrlMaterialAtapPenutupPost]) {
       restoreCondition('MaterialAtapPenutupPost');
       restoreCondition('SekrupAtap');
  
    // hapus ID DIV Lain KECUALI MaterialAtapPenutupPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
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

    //hapus elemen lain nya selain GentengBeton
     //removeCondition('GentengBeton');
     removeCondition('Genteng');
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
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingSekrupAtapPost[cleanUrlMaterialAtapPenutupPost]) {
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
                   "name": "Sekrup Atap",
                   "item": "https://www.betonjayareadymix.com/p/sekrup-atap.html"
               },
              {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingSekrupAtapPost[cleanUrlMaterialAtapPenutupPost],
                   "item": cleanUrlMaterialAtapPenutupPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
});

