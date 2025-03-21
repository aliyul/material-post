 document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan URL halaman saat ini
    var currentUrl = window.location.href;

    // Menentukan URL yang ingin Anda periksa
    var targetUrl = "https://www.betonjayareadymix.com/2018/08/harga-jayamix-jayakerta.html";

    // Jika URL halaman saat ini cocok dengan target URL
    if (currentUrl === targetUrl) {
      // HTML yang ingin ditambahkan
      var html = `
        <a href='https://www.betonjayareadymix.com/p/material-konstruksi.html' itemprop='item' title='MATERIAL KONSTRUKSI'>
            <span itemprop='name'>Material Konstruksi</span> &nbsp;&#8250;&nbsp;
        </a>

        <a href='https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html' itemprop='item' title='READY MIX'>
            <span itemprop='name'>Ready Mix</span> &nbsp;&#8250;&nbsp;
        </a>

        <span itemprop='name'>${document.title}</span>
      `;

      // Menambahkan HTML ke body halaman
      document.body.insertAdjacentHTML('beforeend', html);
    }
  });
