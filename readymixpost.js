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
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/05/harga-beton-ready-mix-adhimix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Adhimix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-holcim.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Holcim";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-jayamix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Jayamix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-merah-putih.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Merah Putih";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-b0.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix B0";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-per-m3.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Per m3";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/cari-harga-beton-ready-mix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Cari Harga Beton Ready Mix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-bandung.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Bandung";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-bogor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Bogor";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-cirebon.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Cirebon";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-cikarang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Cikarang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-depok.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Depok";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-terbaru.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Terbaru";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-garut.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Garut";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-majalengka.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Majalengka";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-subang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Subang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-sukabumi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Sukabumi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-ciamis.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Ciamis";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-cianjur.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Cianjur";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-indramayu.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Indramayu";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-termurah.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Ready Mix Termurah";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-majalengka.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Majalengka";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-tasikmalaya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Tasikmalaya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-garut.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Garut";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-sukabumi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Sukabumi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-purwakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Purwakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-sumedang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Sumedang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-subang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Subang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/mutu-beton-ready-mix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Sumedang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/analisa-beton-ready-mix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Analisa Beton Ready Mix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/analisa-beton-ready-mix-k300.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Analisa Beton Ready Mix K300";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/analisa-beton-ready-mix-k250.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Analisa Beton Ready Mix K250";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/analisa-beton-ready-mix-k350.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Analisa Beton Ready Mix K350";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/fungsi-beton-ready-mix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Fungsi Beton Ready Mix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jenis-beton-ready-mix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jenis Beton Ready Mix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/jual-beton-ready-mix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Jual Beton Ready Mix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-terdekat.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Terdekat";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-bandung.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Bandung";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-bogor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Bogor";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-jakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Jakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-tangerang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Tangerang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-jogja.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Jogja";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-semarang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Semarang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-surabaya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Surabaya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-sidoarjo.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Ready Mix Sidoajo";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-readymix-concrete.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Concrete";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-holcim.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Holcim";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-gresik.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Gresik";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-cikarang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Cikarang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/harga-readymix-bandung.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Bandung";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-garut.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Garut";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-depok.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Depok";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-cileungsi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Cileungsi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-cilacap.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Cilacap";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-k-350.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix K350";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-k-300.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix K300";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-k-250.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix K 250";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-k-225.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix K 225";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-murah.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Murah";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-jayamix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Jayamix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-bogor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Bogor";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-bekasi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Bekasi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-tangerang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Tangerang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-k-175.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix K 175";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-jakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Jakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-purwakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Purwakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-semarang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Semarang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-malang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Malang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-sidoarjo.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Sidoarjo";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-kediri.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Kediri";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-blitar.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Blitar";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-tiga-roda.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Tiga Roda";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-majalengka.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Majalengka";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-subang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Subang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-sukabumi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Sukabumi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-ciamis.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Cirebon";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-cianjur.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Cirebon";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-cirebon.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Cirebon";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-indramayu.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Indramayu";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-pangandaran.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Pangandaran";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-kuningan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Kuningan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-tasikmalaya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Tasikmalaya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-sumedang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Sumedang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-cilegon.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Cilegon";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-per-kubik.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Per Kubik";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-surabaya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Surabaya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-jogja.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Boyolali";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-boyolali.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Boyolali";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-magelang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Magelang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-klaten.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Klaten";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-pati.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Pati";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-jombang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Jombang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-cibinong.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Cibinong";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/cara-menghitung-kubikasi-beton.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Cara menghitung kubikasi beton";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/analisa-beton-k-225.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Analisa Beton K 225";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/cor-beton-murah.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Cor Beton Murah";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/ready-mix-cor-bandung.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Ready Mix Cor Bandung";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/beton-cor-merah-putih.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Beton Cor Merah Putih";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/pionir-beton-cor-bogor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Pionir Beton Cor Bogor";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/batching-plant-terdekat.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Batching Plant Terdekat";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/cor-beton-terdekat.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Cor Beton Terdekat";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/cor-beton-bekasi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Cor Beton Bekasi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/cor-beton-bandung.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Cor Beton Bandung";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/1-truk-molen-berapa-m3.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "1 Truk molen berapa m3";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/macam-macam-mutu-beton.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Macam macam mutu beton";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-ready-mix-bandung.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Ready Mix Bandung";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-di-jakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton di Jakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/daftar-harga-cor-beton-jayamix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Daftar Harga Cor Beton Jayamix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/daftar-harga-cor-beton.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Daftar Harga Cor Beton";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-300-per-m3.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton K 300 per m3";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-200.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton K 200";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/05/harga-cor-beton-bertulang-per-m3.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Bertulang per m3";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/05/harga-cor-beton-bertulang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Bertulang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-175.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton K 175";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-per-kubik.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton per kubik";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-275.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton K 275";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-minimix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Minimix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-jayamix-per-kubik.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Jayamix per kubik";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-sloof.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Sloof";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-lantai.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Lantai";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-jayamix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Jayamix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-rumah-tinggal-per-m3.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Rumah Tinggal per m3";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-ready-mix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Ready Mix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-holcim-per-m3.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Holcim per m3";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-untuk-jalan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton untuk Jalan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-untuk-rumah.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton untuk Rumah";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-per-truk-molen.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton per truk molen";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-per-molen.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton per molen";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-jalan-per-m3.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton jalan per m3";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-250.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton K 250";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-250-per-m3.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton K 250 per m3";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-225.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton K 225";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-jabodetabek.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Cor Jabodetabek";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-instan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Cor Instan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-bandung.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Bandung";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-depok.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton K Depok";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k350.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton K 350";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-dak.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Cor Dak ";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-tangerang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Cor Tangerang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-di-jakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton di Jakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-bekasi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Cor Bekasi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-beton-cor-pionir.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Cor Pionir";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-cor-dynamix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Dynamix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-cor-jayamix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Jayamix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-beton-cor-k300-holcim.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Cor K300 holcim";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-beton-cor-tiga-roda.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Cor Tiga Roda";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-beton-cor-bogor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Cor Bogor";
      } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/harga-beton-cor-murah.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Cor Murah";
      } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/harga-beton-cor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Cor";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/harga-cor-beton-ready-mix-jakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Ready Mix Jakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2022/12/harga-beton-cor-serang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Beton Cor Serang";
     // KARAWANG KECAMATAN
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/harga-jayamix-jayakerta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Jayakerta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-jayakerta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Jayakerta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/harga-jayamix-kutawaluya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Kutawaluya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-kutawaluya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Kutawaluya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-lemahabang-kab-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Lemahabang Kab Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/harga-jayamix-lemahabang-kab-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Lemahabang Kab Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-majalaya-kab-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Majalaya Kab Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/harga-jayamix-majalaya-kab-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Majalaya Kab Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-pakisjaya-kab-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Pakisjaya Kab Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/harga-jayamix-pakisjaya-kab-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Pakisjaya Kab Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-pangkalan-kab-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Ready Mix Pangkalan Kab Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/harga-jayamix-pangkalan-kab-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Jayamix Pangkalan Kab Karawang";
     // akhir kecamatan karawang
          
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/08/harga-cor-beton-dinding.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Dinding";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/05/harga-cor-beton-jalan-per-meter.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton Jalan per meter";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-borongan-cor-beton.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Borongan Cor Beton";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-borongan-cor-beton-per-m3.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Borongan Cor Beton per m3";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-cor-beton-per-m2.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton per m2";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/harga-cor-beton-k225-per-m3.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Beton K225 per m3";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/harga-cor-jayamix-kediri.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Harga Cor Jayamix Kediri";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bangunan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Bangunan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-terdekat.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Terdekat";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bogor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Bogor";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bekasi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Bekasi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-depok.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Depok";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-jakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Jakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-tangerang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Tangerang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-rumah.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Rumah";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-kontrakan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Kontrakan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-ruko-toko.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Ruko Toko";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-rukan-kantor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Rukan Kantor";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-apartemen.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Apartemen";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-hotel.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Hotel";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-townhouse.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Townhouse";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-villa.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Villa";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-pabrik.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Pabrik";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-gedung.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Gedung";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-gudang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Gudang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-masjid.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Masjid";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-yayasan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Yayasan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-mall.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Mall";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-stadion.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Stadion";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-stasiun.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Stasiun";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-sekolah.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Sekolah";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-pelabuhan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Pelabuhan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bandara.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Bandara";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-jalan-desa.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Jalan desa";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-jalan-raya.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Jalan raya";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-jalan-tol.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Borongan Cor Beton Jalan tol";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/09/cor-beton-bangunan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Cor Beton Bangunan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/office-kantor-scg-kalibata.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Office Kantor Scg Kalibata";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-batching-plant.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Batching plant";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/scg-readymix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Ready Mix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/scg-jayamix.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Jayamix";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-beton.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Beton";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/pt-scg-readymix-indonesia.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "PT Scg Ready Mix Indonesia";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2021/03/scg-readymix-indonesia.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Ready Mix Indonesia";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-subang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Batching plant Scg Subang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-karawang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Batching plant Scg Karawang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/batching-plant-sukabumi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Batching plant Sukabumi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-purwakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Batching plant Scg Purwakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-majalengka.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Batching plant Scg Majalengka";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-bandung.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Batching plant Scg Bandung";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-cirebon.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Batching plant Scg Cirebon";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-cianjur.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Batching plant Scg Cianjur";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-bogor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Batching plant Scg Bogor";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-bekasi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Batching plant Scg Bekasi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-jakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Jakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-jayamix-dki-jakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Jayamix DKI Jakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/04/scg-readymix-jakarta.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Ready Mix Jakarta";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-kota-jakarta-utara.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Ready Mix Kota Jakarta utara";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-kota-jakarta-selatan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Ready Mix Jakarta selatan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-kota-jakarta-barat.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Ready Mix Kota Jakarta barat";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/plant-scg-jelambar.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Plant Scg Jelambar";
     } else if (currentUrl === "hhttps://www.betonjayareadymix.com/2018/08/scg-ready-mix-kota-jakarta-timur.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Ready Mix Kota Jakarta timur";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/plant-scg-kampung-rambutan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Plant Scg Kampung rambutan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/plant-scg-kebon-nanas-jakarta-timur.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Plant Scg Kebon nanas Jakarta timur";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-jayamix-depok.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Jayamix Depok";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-depok.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Ready Mix Depok";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-jayamix-bekasi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Jayamix Bekasi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-bekasi.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Ready Mix Bekasi";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-cikarang-selatan.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Ready Mix Cikarang Selatan";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-jayamix-bogor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Jayamix Bogor";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-bogor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Ready Mix Bogor";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-babakan-madang-kab-bogor.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Ready Mix babakan madang kab bogor";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-jayamix-tangerang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Jayamix Tangerang";
     } else if (currentUrl === "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-tangerang.html") {
       materialKonstruksiLink.style.visibility = 'visible';
       readyMixLink.style.visibility = 'visible';
       pageNameSpan.textContent = "Scg Ready Mix Tangerang";
     } 
   });
