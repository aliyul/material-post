window.onload = function() {
    var currentUrl = window.location.href;

    // Tentukan elemen yang akan diubah
    var materialKonstruksiLink = document.querySelector("a[title='MATERIAL KONSTRUKSI']");
    var readyMixLink = document.querySelector("a[title='READY MIX']");
    var pageNameSpan = document.querySelector("span[itemprop='name']");

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
    }
  };
