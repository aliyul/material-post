document.addEventListener("DOMContentLoaded", function() {
     var currentUrl = window.location.href;

     // Menemukan elemen menggunakan ID
     var materialKonstruksiLink = document.getElementById("materialKonstruksi");
     var readyMixLink = document.getElementById("readyMix");
     var pageNameSpan = document.getElementById("pageNameSpan");

     // Default untuk menyembunyikan elemen
     materialKonstruksiLink.style.visibility = 'hidden';
     readyMixLink.style.visibility = 'hidden';
     pageNameSpan.textContent = "";

     // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
     const urlMapping = {
    "https://www.betonjayareadymix.com/2021/08/jayamix-pangandaran.html": "Jayamix Pangandaran",
    "https://www.betonjayareadymix.com/2021/08/jayamix-sumedang.html": "Jayamix Sumedang",
    "https://www.betonjayareadymix.com/2021/08/jayamix-sukabumi.html": "Jayamix Sukabumi",
    "https://www.betonjayareadymix.com/2021/08/jayamix-karawang.html": "Jayamix Karawang",
    "https://www.betonjayareadymix.com/2021/08/jayamix-kuningan.html": "Jayamix Kuningan",
    "https://www.betonjayareadymix.com/2021/08/jayamix-tasikmalaya.html": "Jayamix Tasikmalaya",
    "https://www.betonjayareadymix.com/2021/08/jayamix-subang.html": "Jayamix Subang",
    "https://www.betonjayareadymix.com/2021/08/jayamix-blitar.html": "Jayamix Blitar",
    "https://www.betonjayareadymix.com/2021/08/jayamix-klaten.html": "Jayamix Klaten",
    "https://www.betonjayareadymix.com/2021/08/jayamix-jakarta.html": "Jayamix Jakarta",
    "https://www.betonjayareadymix.com/2018/04/scg-jayamix.html": "SCG Jayamix",
    "https://www.betonjayareadymix.com/2021/08/jayamix-purwakarta.html": "Jayamix Purwakarta",
    "https://www.betonjayareadymix.com/2021/03/perbedaan-jayamix-dan-readymix.html": "Perbedaan Jayamix dan Ready Mix",
    "https://www.betonjayareadymix.com/2021/03/ukuran-jayamix.html": "Ukuran Jayamix",
    "https://www.betonjayareadymix.com/2021/03/1-mobil-jayamix-berapa-kubik.html": "1 Mobil Jayamix berapa kubik",
    "https://www.betonjayareadymix.com/2021/03/cara-pesan-jayamix.html": "Cara Pesan Jayamix",
    "https://www.betonjayareadymix.com/2021/03/jayamix-terdekat.html": "Jayamix Terdekat",
    "https://www.betonjayareadymix.com/2021/03/jayamix-beton.html": "Jayamix Beton",
    "https://www.betonjayareadymix.com/2021/03/jayamix-bogor.html": "Jayamix Bogor",
    "https://www.betonjayareadymix.com/2021/03/jayamix-bekasi.html": "Jayamix Bekasi",
    "https://www.betonjayareadymix.com/2021/03/jayamix-cikarang.html": "Jayamix Cikarang",
    "https://www.betonjayareadymix.com/2021/03/jayamix-depok.html": "Jayamix Depok",
    "https://www.betonjayareadymix.com/2021/03/jayamix-cibubur.html": "Jayamix Cibubur",
    "https://www.betonjayareadymix.com/2021/03/jayamix-bandung.html": "Jayamix Bandung",
    "https://www.betonjayareadymix.com/2021/03/jayamix-cirebon.html": "Jayamix Cirebon",
    "https://www.betonjayareadymix.com/2021/03/jayamix-cianjur.html": "Jayamix Cianjur",
    "https://www.betonjayareadymix.com/2021/03/jayamix-cikande.html": "Jayamix Cikande",
    "https://www.betonjayareadymix.com/2021/03/jayamix-cilegon.html": "Jayamix Cilegon",
    "https://www.betonjayareadymix.com/2021/03/jayamix-ciamis.html": "Jayamix Ciamis",
    "https://www.betonjayareadymix.com/2021/03/jayamix-garut.html": "Jayamix Garut",
    "https://www.betonjayareadymix.com/2021/03/jayamix-majalengka.html": "Jayamix Majalengka"
};

if (urlMapping[currentUrl]) {
    materialKonstruksiLink.style.visibility = 'visible';
    readyMixLink.style.visibility = 'visible';
    pageNameSpan.textContent = urlMapping[currentUrl];
}

   });
