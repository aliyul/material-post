window.onload = function() {
  var currentUrl = window.location.href;
  var targetUrl = "https://www.betonjayareadymix.com/2018/08/harga-jayamix-jayakerta.html";

  if (currentUrl === targetUrl) {
    var html = `
      <a href='https://www.betonjayareadymix.com/p/material-konstruksi.html' itemprop='item' title='MATERIAL KONSTRUKSI'>
          <span itemprop='name'>Material Konstruksi</span> &nbsp;&#8250;&nbsp;
      </a>

      <a href='https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html' itemprop='item' title='READY MIX'>
          <span itemprop='name'>Ready Mix</span> &nbsp;&#8250;&nbsp;
      </a>

      <span itemprop='name'>${document.title}</span>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
  }
};
