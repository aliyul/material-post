 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingMaterialKons = {
 "https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html": "Ready Mix Beton Cor Jayamix Minimix"
};

// Menyimpan elemen yang dihapus dalam variabel
let removedElements = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElements[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElements[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElements[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElements.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrl = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1
  
     // Menemukan elemen menggunakan ID
     var materialKonsReadymix = document.getElementById("materialKonsReadymix");
    if (!materialKonsReadymix) {
        console.error("elemen Id materialKonsReadymix kondisi terhapus");
        return;
    }
     var materialKonstruksiReadymixLink = document.getElementById("materialKonstruksiReadymix");
     var readyMixLink = document.getElementById("readyMix");
     var pageNameReadymix = document.getElementById("pageNameReadymix");
 
     // Default untuk menyembunyikan elemen
     //JasaKonstruksiPerbaikan.remove(); // Menghapus elemen tersebut
  
     materialKonsReadymix.style.visibility = 'hidden';
     materialKonstruksiReadymixLink.style.visibility = 'hidden';
     readyMixLink.style.visibility = 'hidden';
     pageNameReadymix.textContent = "";
  
    console.log('Material Konstruksi:', materialKonstruksiReadymixLink);
    console.log('Ready Mix:', readyMixLink);
    console.log('Page Name Span:', pageNameReadymix);

    if (!materialKonstruksiReadymixLink || !readyMixLink || !pageNameReadymix) {
        console.error("Salah satu elemen tidak ditemukan!");
        return;
    }

    if (urlMappingReadymix[cleanUrl]) {
     /*
      JasaKons.style.visibility = 'hidden';
      JasaBobokTembokLink.style.visibility = 'hidden';
      JasaBongkarKeramikLink.style.visibility = 'hidden';
      JasaBobokBetonLink.style.visibility = 'hidden';
      JasaChippingBetonLink.style.visibility = 'hidden';
     */
        removeCondition('JasaKonsPerbaikan');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
     
        restoreCondition('materialKonsReadymix');
       
       materialKonsReadymix.style.visibility = 'visible';
        materialKonstruksiReadymixLink.style.visibility = 'visible';
        readyMixLink.style.visibility = 'visible';
        pageNameReadymix.textContent = urlMappingReadymix[cleanUrl];
    }
   });

