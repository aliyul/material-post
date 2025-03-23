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
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-pangandaran.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Pangandaran";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-bekasi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Bekasi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-depok.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Depok";
     }else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-sumedang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Sumedang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-subang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Subang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-tasikmalaya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Tasikmalaya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-bandung.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Bandung";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-garut.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Garut";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/cara-order-ready-mix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Cara Order Ready Mix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-sidoarjo.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Sidoarjo";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-blitar.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Blitar";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-kediri.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Kediri";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-semarang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Semarang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/holcim-readymix-surabaya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Surabaya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-holcim-sidoarjo.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Holcim Sidoarjo";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-bogor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Kuningan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-murah.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Murah";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-cement.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Cement";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-merah-putih.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Merah Putih";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-tiga-roda.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Tiga Roda";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/holcim-ready-mix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Holcim Ready Mix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-terdekat.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Terdekat";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-sukabumi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Sukabumi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-purwakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Purwakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-majalengka.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Majalengka";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-malang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Malang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-makassar.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Makassar";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-jombang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Jombang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-boyolali.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Boyolali";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-surabaya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Surabaya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-jogja.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Jogja";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-magelang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Magelang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-klaten.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Klaten";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-cilacap.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Cilacap";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-pati.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Pati";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-gresik.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Gresik";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-cikarang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Cikarang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-cileungsi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Cileungsi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/ready-mix-ambon.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Ambon";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-jayamix-pati.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Pati";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-jayamix-klaten.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Klaten";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-jayamix-gresik.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Gresik";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-jayamix-sidoarjo.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Sidoarjo";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-jayamix-magelang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Magelang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-jayamix-malang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Malang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-jayamix-kediri.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Kediri";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-jayamix-cilacap.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Cilacap";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-ciamis.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Ciamis";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-cianjur.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Cianjur";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-cirebon.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Cirebon";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-kuningan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Kuningan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-pangandaran.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Pangandaran";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-purwakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Purwakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-subang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Subang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-sumedang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Sumedang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-sukabumi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Sukabumi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-majalengka.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Majalengka";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-surabaya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Surabaya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-beton-jayamix-jakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Jayamix Jakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-tasikmalaya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Tasikmalaya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-beton-jayamix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Jayamix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-1-molen-jayamix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga 1 Molen Jayamix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-jayamix-paling-murah.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Paling Murah";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-k300.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix K300";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-per-kubik.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Per Kubik";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-per-m3.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Per m3";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-beton.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Beton";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-semarang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Semarang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/harga-jayamix-jogja.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Jogja";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-boyolali.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Boyolali";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-blitar.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Blitar";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-jombang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Jombang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-jawa-timur.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Jawa Timur";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-tangerang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Tangerang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-bogor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Bogor";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-garut.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Garut";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-bandung.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Bandung";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-bekasi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Bekasi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cikarang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Cikarang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cibinong.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Cibinong";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cileungsi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Cileungsi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cilegon.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Cilegon";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-ciputat.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Ciputat";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cinere.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Cinere";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-indramayu.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Indramayu";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-jayamix-depok.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Depok";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/05/harga-beton-ready-mix-surabaya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Surabaya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-beton-ready-mix-k350.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix K350";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-beton-ready-mix-kediri.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Kediri";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-beton-ready-mix-semarang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Semarang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-beton-ready-mix-jogja.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Jogja";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-pionir.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Pionir";
     }
   });
