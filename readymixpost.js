var htmlContent = var html = `
<b:if cond='data:blog.url == "https://www.betonjayareadymix.com/2018/08/harga-jayamix-jayakerta.html"'>
    <a href='https://www.betonjayareadymix.com/p/material-konstruksi.html' itemprop='item' title='MATERIAL KONSTRUKSI'>
        <span itemprop='name'>Material Konstruksi</span> &nbsp;&#8250;&nbsp;
    </a>

    <a href='https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html' itemprop='item' title='READY MIX'>
        <span itemprop='name'>Ready Mix</span> &nbsp;&#8250;&nbsp;
    </a>

    <span itemprop='name'>${document.title}</span>
</b:if>
`;

        document.getElementById('popupContainer').innerHTML = htmlContent;
