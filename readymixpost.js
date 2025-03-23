// Mendapatkan URL halaman saat ini
var currentPageUrl = window.location.href;

// Mendefinisikan URL target untuk breadcrumbs
var targetUrl = "https://www.betonjayareadymix.com/2019/06/harga-chipping-beton-per-m2.html";

// Mendefinisikan struktur breadcrumbs
var breadcrumbs = [
  { title: "BJR", url: "https://www.betonjayareadymix.com/" },
  { title: "Jasa Konstruksi", url: "https://www.betonjayareadymix.com/p/jasa-konstruksi.html" },
  { title: "Jasa Renovasi Perbaikan", url: "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan.html" },
   { title: "Jasa Chipping Beton", url: "https://www.betonjayareadymix.com/p/jasa-chipping-beton.html" }
];

// Memeriksa apakah URL halaman saat ini sama dengan URL target
if (currentPageUrl === targetUrl) {
  console.log();
  // Menampilkan struktur breadcrumbs
  document.write("<div class='breadcrumbs'>");
  for (var i = 0; i < breadcrumbs.length; i++) {
    if (i < breadcrumbs.length - 1) {
      document.write("<a href='" + breadcrumbs[i].url + "'>" + breadcrumbs[i].title + "</a> &gt; ");
    } else {
      document.write(breadcrumbs[i].title);
    }
  }
  document.write("</div>");
}
