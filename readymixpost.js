document.addEventListener("DOMContentLoaded", function() {
     var currentUrl = window.location.href;

     // Menemukan elemen menggunakan ID
     var materialKonstruksiLink = document.getElementById("materialKonstruksi");
     var readyMixLink = document.getElementById("readyMix");
     var pageNameSpan = document.getElementById("pageNameSpan");

     // Default untuk menyembunyikan elemen
     materialKonstruksiLink.style.visibility = 'hidden';
     readyMixLink.style.visibility = 'hidden';
     pageNameSpan.textContent = "Default Page";

     // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
     if (currentUrl === "https://www.betonjayareadymix.com/2021/08/jayamix-pangandaran.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Pangandaran";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/jayamix-sumedang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Sumedang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/jayamix-sukabumi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Sukabumi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/jayamix-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/jayamix-kuningan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Kuningan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/jayamix-tasikmalaya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Tasikmalaya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/jayamix-subang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Subang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/jayamix-blitar.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Blitar";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/jayamix-klaten.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Klaten";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/jayamix-jakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Jakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/scg-jayamix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "SCG Jayamix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/jayamix-purwakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Purwakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/perbedaan-jayamix-dan-readymix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Perbedaan Jayamix dan Ready Mix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ukuran-jayamix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ukuran Jayamix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/1-mobil-jayamix-berapa-kubik.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "1 Mobil Jayamix berapa kubik";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/cara-pesan-jayamix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Cara Pesan Jayamix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-terdekat.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Terdekat";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-beton.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Beton";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-bogor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Bogor";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-bekasi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Bekasi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-cikarang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Cikarang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-depok.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Depok";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-cibubur.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Cibubur";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-bandung.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Bandung";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-cirebon.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Cirebon";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-cianjur.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Cianjur";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-cikande.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Cikande";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-cilegon.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Cilegon";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-ciamis.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Ciamis";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-garut.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Garut";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-majalengka.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Majalengka";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/jayamix-malang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Malang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-kediri.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Kediri";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-semarang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Semarang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-surabaya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Surabaya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-jogja.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Jogja";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-cileungsi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Cileungsi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/jayamix-sidoarjo.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Sidoarjo";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-jombang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Jombang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-boyolali.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Boyolali";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-cilacap.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Cilacap";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-pati.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Pati";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-gresik.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Gresik";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jayamix-magelang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jayamix Magelang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2022/12/ready-mix-serang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Serang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-indramayu.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Indramayu";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-cikande.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Cikande";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-cilegon.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Cikande";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-ciamis.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Ciamis";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-cianjur.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Cianjur";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-cirebon.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Cirebon";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-tangerang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Tangerang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-jakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Jakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-kuningan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Kuningan";
     }
   });
