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
     "https://www.betonjayareadymix.com/2021/03/holcim-ready-mix.html": "Holcim Ready Mix",
    "https://www.betonjayareadymix.com/2021/03/ready-mix-terdekat.html": "Ready Mix Terdekat",
    "https://www.betonjayareadymix.com/2021/03/ready-mix-karawang.html": "Ready Mix Karawang",
    "https://www.betonjayareadymix.com/2021/03/ready-mix-sukabumi.html": "Ready Mix Sukabumi",
    "https://www.betonjayareadymix.com/2021/03/ready-mix-purwakarta.html": "Ready Mix Purwakarta",
    "https://www.betonjayareadymix.com/2021/09/harga-jayamix-pati.html": "Harga Jayamix Pati",
    "https://www.betonjayareadymix.com/2021/09/harga-jayamix-klaten.html": "Harga Jayamix Klaten",
    "https://www.betonjayareadymix.com/2021/09/harga-jayamix-gresik.html": "Harga Jayamix Gresik",
    "https://www.betonjayareadymix.com/2021/09/harga-jayamix-sidoarjo.html": "Harga Jayamix Sidoarjo",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-jombang.html": "Harga Jayamix Jombang",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-jawa-timur.html": "Harga Jayamix Jawa Timur",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-tangerang.html": "Harga Jayamix Tangerang",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-bogor.html": "Harga Jayamix Bogor",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-garut.html": "Harga Jayamix Garut",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-bandung.html": "Harga Jayamix Bandung",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-bekasi.html": "Harga Jayamix Bekasi",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cikarang.html": "Harga Jayamix Cikarang",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cibinong.html": "Harga Jayamix Cibinong",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cileungsi.html": "Harga Jayamix Cileungsi",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cilegon.html": "Harga Jayamix Cilegon",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-ciputat.html": "Harga Jayamix Ciputat",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cinere.html": "Harga Jayamix Cinere",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-indramayu.html": "Harga Jayamix Indramayu",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-depok.html": "Harga Jayamix Depok",
    "https://www.betonjayareadymix.com/2018/05/harga-beton-ready-mix-surabaya.html": "Harga Beton Ready Mix Surabaya",
    "https://www.betonjayareadymix.com/2021/08/harga-beton-ready-mix-k350.html": "Harga Beton Ready Mix K350",
    "https://www.betonjayareadymix.com/2021/08/harga-beton-ready-mix-kediri.html": "Harga Beton Ready Mix Kediri",
    "https://www.betonjayareadymix.com/2021/08/harga-beton-ready-mix-semarang.html": "Harga Beton Ready Mix Semarang",
    "https://www.betonjayareadymix.com/2021/08/harga-beton-ready-mix-jogja.html": "Harga Beton Ready Mix Jogja",
    "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-pionir.html": "Harga Beton Ready Mix Pionir",
    "https://www.betonjayareadymix.com/2018/05/harga-beton-ready-mix-adhimix.html": "Harga Beton Ready Mix Adhimix",
    "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-holcim.html": "Harga Beton Ready Mix Holcim",
    "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-jayamix.html": "Harga Beton Ready Mix Jayamix",
    "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-merah-putih.html": "Harga Beton Ready Mix Merah Putih",
    "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-b0.html": "Harga Beton Ready Mix B0",
    "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-per-m3.html": "Harga Beton Ready Mix Per m3",
    "https://www.betonjayareadymix.com/2021/03/cari-harga-beton-ready-mix.html": "Cari Harga Beton Ready Mix",
    "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-bandung.html": "Harga Beton Ready Mix Bandung",
    "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-bogor.html": "Harga Beton Ready Mix Bogor",
     "https://www.betonjayareadymix.com/2021/03/analisa-beton-ready-mix-k250.html": "Analisa Beton Ready Mix K250",
  "https://www.betonjayareadymix.com/2021/03/analisa-beton-ready-mix-k350.html": "Analisa Beton Ready Mix K350",
  "https://www.betonjayareadymix.com/2021/03/fungsi-beton-ready-mix.html": "Fungsi Beton Ready Mix",
  "https://www.betonjayareadymix.com/2021/03/jenis-beton-ready-mix.html": "Jenis Beton Ready Mix",
  "https://www.betonjayareadymix.com/2021/03/jual-beton-ready-mix.html": "Jual Beton Ready Mix",
  "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-terdekat.html": "Beton Ready Mix Terdekat",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-holcim.html": "Harga Ready Mix Holcim",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-gresik.html": "Harga Ready Mix Gresik",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-cikarang.html": "Harga Ready Mix Cikarang",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-depok.html": "Harga Ready Mix Depok",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-bogor.html": "Harga Ready Mix Bogor",
"https://www.betonjayareadymix.com/2021/03/harga-ready-mix-cibinong.html": "Harga Ready Mix Cibinong",
  "https://www.betonjayareadymix.com/2018/04/cara-menghitung-kubikasi-beton.html": "Cara menghitung kubikasi beton",
  "https://www.betonjayareadymix.com/2018/04/analisa-beton-k-225.html": "Analisa Beton K 225",
  "https://www.betonjayareadymix.com/2021/08/cor-beton-murah.html": "Cor Beton Murah",
  "https://www.betonjayareadymix.com/2021/08/ready-mix-cor-bandung.html": "Ready Mix Cor Bandung",
  "https://www.betonjayareadymix.com/2021/08/beton-cor-merah-putih.html": "Beton Cor Merah Putih",
  "https://www.betonjayareadymix.com/2021/08/pionir-beton-cor-bogor.html": "Pionir Beton Cor Bogor",
  "https://www.betonjayareadymix.com/2021/08/batching-plant-terdekat.html": "Batching Plant Terdekat",
  "https://www.betonjayareadymix.com/2021/08/cor-beton-terdekat.html": "Cor Beton Terdekat",
  "https://www.betonjayareadymix.com/2021/08/cor-beton-bekasi.html": "Cor Beton Bekasi",
  "https://www.betonjayareadymix.com/2021/08/cor-beton-bandung.html": "Cor Beton Bandung",
  "https://www.betonjayareadymix.com/2018/04/1-truk-molen-berapa-m3.html": "1 Truk molen berapa m3",
  "https://www.betonjayareadymix.com/2018/04/macam-macam-mutu-beton.html": "Macam macam mutu beton",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-ready-mix-bandung.html": "Harga Cor Beton Ready Mix Bandung",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-di-jakarta.html": "Harga Cor Beton di Jakarta",
  "https://www.betonjayareadymix.com/2021/12/daftar-harga-cor-beton-jayamix.html": "Daftar Harga Cor Beton Jayamix",
  "https://www.betonjayareadymix.com/2021/12/daftar-harga-cor-beton.html": "Daftar Harga Cor Beton",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-300-per-m3.html": "Harga Cor Beton K 300 per m3",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-200.html": "Harga Cor Beton K 200",
  "https://www.betonjayareadymix.com/2018/05/harga-cor-beton-bertulang-per-m3.html": "Harga Cor Beton Bertulang per m3",
  "https://www.betonjayareadymix.com/2018/05/harga-cor-beton-bertulang.html": "Harga Cor Beton Bertulang",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-175.html": "Harga Cor Beton K 175",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-per-kubik.html": "Harga Cor Beton per kubik",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-275.html": "Harga Cor Beton K 275",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-minimix.html": "Harga Cor Beton Minimix",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-jayamix-per-kubik.html": "Harga Cor Beton Jayamix per kubik",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-sloof.html": "Harga Cor Beton Sloof",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-lantai.html": "Harga Cor Beton Lantai",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-jayamix.html": "Harga Cor Beton Jayamix",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-rumah-tinggal-per-m3.html": "Harga Cor Beton Rumah Tinggal per m3",
    "https://www.betonjayareadymix.com/2018/08/harga-jayamix-jayakerta.html": "Harga Jayamix Jayakerta",
    "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-jayakerta.html": "Harga Ready Mix Jayakerta",
    "https://www.betonjayareadymix.com/2018/08/harga-jayamix-kutawaluya.html": "Harga Jayamix Kutawaluya",
    "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-kutawaluya.html": "Harga Ready Mix Kutawaluya",
    "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-lemahabang-kab-karawang.html": "Harga Ready Mix Lemahabang Kab Karawang",
    "https://www.betonjayareadymix.com/2018/08/harga-jayamix-lemahabang-kab-karawang.html": "Harga Jayamix Lemahabang Kab Karawang",
    "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-majalaya-kab-karawang.html": "Harga Ready Mix Majalaya Kab Karawang",
    "https://www.betonjayareadymix.com/2018/08/harga-jayamix-majalaya-kab-karawang.html": "Harga Jayamix Majalaya Kab Karawang",
    "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-pakisjaya-kab-karawang.html": "Harga Ready Mix Pakisjaya Kab Karawang",
    "https://www.betonjayareadymix.com/2018/08/harga-jayamix-pakisjaya-kab-karawang.html": "Harga Jayamix Pakisjaya Kab Karawang",
     "https://www.betonjayareadymix.com/2018/08/harga-jayamix-tirtajaya-kab-karawang.html": "Harga Jayamix Tirtajaya Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-banyusari-kab-karawang.html": "Harga Jayamix Banyusari Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-banyusari-kab-karawang.html": "Harga Ready Mix Banyusari Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-batujaya-kab-karawang.html": "Harga Jayamix Batujaya Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-batujaya-kab-karawang.html": "Harga Ready Mix Batujaya Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-ciampel-kab-karawang.html": "Harga Jayamix Ciampel Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-ciampel-kab-karawang.html": "Harga Ready Mix Ciampel Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-cilamaya-kulon.html": "Harga Jayamix Cimalaya Kulon",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-cilamaya-kulon.html": "Harga Ready Mix Cimalaya Kulon",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-cikampek-karawang.html": "Harga Jayamix Cikampek Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-cikampek-karawang.html": "Harga Ready Mix Cikampek Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-cibuaya-kab-karawang.html": "Harga Jayamix Cibuaya Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-cibuaya-kab-karawang.html": "Harga Ready Mix Cibuaya Kab Karawang",
"https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cikeusal-kab-serang.html": "Harga Ready Mix Cikeusal Kab Serang",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cikeusal-kab-serang.html": "Harga Jayamix Cikeusal Kab Serang",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cinangka-kab-serang.html": "Harga Ready Mix Cinangka Kab Serang",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cinangka-kab-serang.html": "Harga Jayamix Cinangka Kab Serang",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-ciomas-kab-serang.html": "Harga Ready Mix Ciomas Kab Serang",
    "https://www.betonjayareadymix.com/2021/08/harga-cor-beton-dinding.html": "Harga Cor Beton Dinding",
    "https://www.betonjayareadymix.com/2021/03/harga-borongan-cor-beton.html": "Harga Borongan Cor Beton",
    "https://www.betonjayareadymix.com/2021/03/harga-borongan-cor-beton-per-m3.html": "Harga Borongan Cor Beton per m3",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-townhouse.html": "Borongan Cor Beton Townhouse",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-villa.html": "Borongan Cor Beton Villa",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-pabrik.html": "Borongan Cor Beton Pabrik",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-gedung.html": "Borongan Cor Beton Gedung",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-gudang.html": "Borongan Cor Beton Gudang",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-masjid.html": "Borongan Cor Beton Masjid",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-yayasan.html": "Borongan Cor Beton Yayasan",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-mall.html": "Borongan Cor Beton Mall",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-stadion.html": "Borongan Cor Beton Stadion",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-stasiun.html": "Borongan Cor Beton Stasiun",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-sekolah.html": "Borongan Cor Beton Sekolah",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-pelabuhan.html": "Borongan Cor Beton Pelabuhan",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bandara.html": "Borongan Cor Beton Bandara",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-jalan-desa.html": "Borongan Cor Beton Jalan Desa",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-jalan-raya.html": "Borongan Cor Beton Jalan Raya",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-jalan-tol.html": "Borongan Cor Beton Jalan Tol",
  "https://www.betonjayareadymix.com/2018/09/cor-beton-bangunan.html": "Cor Beton Bangunan",
  "https://www.betonjayareadymix.com/2018/08/office-kantor-scg-kalibata.html": "Office Kantor Scg Kalibata",
  "https://www.betonjayareadymix.com/2018/08/scg-batching-plant.html": "Scg Batching Plant",
  "https://www.betonjayareadymix.com/2018/04/scg-readymix.html": "Scg Ready Mix",
  "https://www.betonjayareadymix.com/2018/04/scg-jayamix.html": "Scg Jayamix",
  "https://www.betonjayareadymix.com/2018/08/scg-beton.html": "Scg Beton",
  "https://www.betonjayareadymix.com/2021/03/pt-scg-readymix-indonesia.html": "PT Scg Ready Mix Indonesia",
  "https://www.betonjayareadymix.com/2021/03/scg-readymix-indonesia.html": "Scg Ready Mix Indonesia",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-subang.html": "Batching Plant Scg Subang",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-karawang.html": "Batching Plant Scg Karawang",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-sukabumi.html": "Batching Plant Sukabumi",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-purwakarta.html": "Batching Plant Scg Purwakarta",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-majalengka.html": "Batching Plant Scg Majalengka",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-bandung.html": "Batching Plant Scg Bandung"


};
document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrl = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan ID
      var materialKonstruksiLink = document.getElementById("materialKonstruksi");
     var readyMixLink = document.getElementById("readyMix");
     var pageNameSpan = document.getElementById("pageNameSpan");

     // Default untuk menyembunyikan elemen
     materialKonstruksiLink.style.visibility = 'hidden';
     readyMixLink.style.visibility = 'hidden';
     pageNameSpan.textContent = "";
  
    console.log('Material Konstruksi:', materialKonstruksiLink);
    console.log('Ready Mix:', readyMixLink);
    console.log('Page Name Span:', pageNameSpan);

    if (!materialKonstruksiLink || !readyMixLink || !pageNameSpan) {
        console.error("Salah satu elemen tidak ditemukan!");
        return;
    }

    if (urlMapping[cleanUrl]) {
        materialKonstruksiLink.style.visibility = 'visible';
        readyMixLink.style.visibility = 'visible';
        pageNameSpan.textContent = urlMapping[cleanUrl];
    }

/*if (urlMapping[cleanUrl]) {
        document.getElementById('materialKonstruksiLink').style.visibility = 'visible';
        document.getElementById('readyMixLink').style.visibility = 'visible';
        document.getElementById('pageNameSpan').textContent = urlMapping[cleanUrl];
    }
*/

   });
