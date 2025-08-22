 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan

const urlMappingReadyMixLokasiPost = {
//JAYAMIX ATAU READY MIX ATAU COR BETON TEERDEEKAT
"https://www.betonjayareadymix.com/2021/03/jayamix-terdekat.html": "Jayamix Terdekat",
"https://www.betonjayareadymix.com/2021/03/ready-mix-terdekat.html": "Ready Mix Terdekat",
"https://www.betonjayareadymix.com/2021/03/beton-ready-mix-terdekat.html": "Beton Ready Mix Terdekat",
  "https://www.betonjayareadymix.com/2021/08/cor-beton-terdekat.html": "Cor Beton Terdekat",
	
//JAYAMIX PER KOTA/KABUPATEN
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
"https://www.betonjayareadymix.com/2022/12/jayamix-serang.html": "Jayamix Serang",
"https://www.betonjayareadymix.com/2021/08/jayamix-purwakarta.html": "Jayamix Purwakarta",
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
"https://www.betonjayareadymix.com/2021/08/jayamix-tangerang.html": "Jayamix Tangerang",
"https://www.betonjayareadymix.com/2021/08/jayamix-indramayu.html": "Jayamix Indramayu",
"https://www.betonjayareadymix.com/2021/03/jayamix-jombang.html": "Jayamix Jombang",
"https://www.betonjayareadymix.com/2021/03/jayamix-boyolali.html": "Jayamix Boyolali",
"https://www.betonjayareadymix.com/2021/03/jayamix-cilacap.html": "Jayamix Cilacap",
"https://www.betonjayareadymix.com/2021/03/jayamix-pati.html": "Jayamix Pati",
"https://www.betonjayareadymix.com/2021/03/jayamix-gresik.html": "Jayamix Gresik",
"https://www.betonjayareadymix.com/2021/03/jayamix-jogja.html": "Jayamix Jogja",
"https://www.betonjayareadymix.com/2021/03/jayamix-surabaya.html": "Jayamix Surabaya",
"https://www.betonjayareadymix.com/2021/03/jayamix-semarang.html": "Jayamix Semarang",
"https://www.betonjayareadymix.com/2021/03/jayamix-kediri.html": "Jayamix Kediri",
"https://www.betonjayareadymix.com/2021/03/jayamix-magelang.html": "Jayamix Magelang",
"https://www.betonjayareadymix.com/2021/03/jayamix-cileungsi.html": "Jayamix Cileungsi",
"https://www.betonjayareadymix.com/2018/04/jayamix-sidoarjo.html": "Jayamix Sidoarjo",
"https://www.betonjayareadymix.com/2018/04/jayamix-malang.html": "Jayamix Malang",
"https://www.betonjayareadymix.com/2021/03/jayamix-majalengka.html": "Jayamix Majalengka",

//READY MIX per kota/kabupaten:
"https://www.betonjayareadymix.com/2021/03/ready-mix-karawang.html": "Ready Mix Karawang",
"https://www.betonjayareadymix.com/2021/03/ready-mix-sukabumi.html": "Ready Mix Sukabumi",
"https://www.betonjayareadymix.com/2021/03/ready-mix-purwakarta.html": "Ready Mix Purwakarta",
"https://www.betonjayareadymix.com/2022/12/ready-mix-serang.html": "Ready Mix Serang",
"https://www.betonjayareadymix.com/2021/03/ready-mix-surabaya.html": "Ready Mix Surabaya",
"https://www.betonjayareadymix.com/2021/08/ready-mix-bogor.html": "Ready Mix Bogor",
"https://www.betonjayareadymix.com/2021/08/ready-mix-holcim-sidoarjo.html": "Ready Mix Holcim Sidoarjo",
"https://www.betonjayareadymix.com/2018/04/holcim-readymix-surabaya.html": "Holcim Readymix Surabaya",
"https://www.betonjayareadymix.com/2021/08/ready-mix-blitar.html": "Ready Mix Blitar",
"https://www.betonjayareadymix.com/2021/08/ready-mix-sidoarjo.html": "Ready Mix Sidoarjo",
"https://www.betonjayareadymix.com/2021/08/ready-mix-garut.html": "Ready Mix Garut",
"https://www.betonjayareadymix.com/2021/08/ready-mix-bandung.html": "Ready Mix Bandung",
"https://www.betonjayareadymix.com/2021/08/ready-mix-tasikmalaya.html": "Ready Mix Tasikmalaya",
"https://www.betonjayareadymix.com/2021/08/ready-mix-subang.html": "Ready Mix Subang",
"https://www.betonjayareadymix.com/2021/08/ready-mix-sumedang.html": "Ready Mix Sumedang",
"https://www.betonjayareadymix.com/2021/08/ready-mix-depok.html": "Ready Mix Depok",
"https://www.betonjayareadymix.com/2021/08/ready-mix-bekasi.html": "Ready Mix Bekasi",
"https://www.betonjayareadymix.com/2021/08/ready-mix-pangandaran.html": "Ready Mix Pangandaran",
"https://www.betonjayareadymix.com/2021/08/ready-mix-kuningan.html": "Ready Mix Kuningan",
"https://www.betonjayareadymix.com/2021/08/ready-mix-jakarta.html": "Ready Mix Jakarta",
"https://www.betonjayareadymix.com/2021/08/ready-mix-tangerang.html": "Ready Mix Tangerang",
"https://www.betonjayareadymix.com/2021/08/ready-mix-cirebon.html": "Ready Mix Cirebon",
"https://www.betonjayareadymix.com/2021/08/ready-mix-cianjur.html": "Ready Mix Cianjur",
"https://www.betonjayareadymix.com/2021/08/ready-mix-ciamis.html": "Ready Mix Ciamis",
"https://www.betonjayareadymix.com/2021/08/ready-mix-cilegon.html": "Ready Mix Cilegon",
"https://www.betonjayareadymix.com/2021/08/ready-mix-cikande.html": "Ready Mix Cikande",
"https://www.betonjayareadymix.com/2021/08/ready-mix-indramayu.html": "Ready Mix Indramayu",
"https://www.betonjayareadymix.com/2021/03/ready-mix-malang.html": "Ready Mix Malang",
"https://www.betonjayareadymix.com/2021/03/ready-mix-cileungsi.html": "Ready Mix Cileungsi",
"https://www.betonjayareadymix.com/2021/03/ready-mix-cikarang.html": "Ready Mix Cikarang",
"https://www.betonjayareadymix.com/2021/03/ready-mix-gresik.html": "Ready Mix Gresik",
"https://www.betonjayareadymix.com/2021/03/ready-mix-cilacap.html": "Ready Mix Cilacap",
"https://www.betonjayareadymix.com/2021/03/ready-mix-klaten.html": "Ready Mix Klaten",
"https://www.betonjayareadymix.com/2021/03/ready-mix-magelang.html": "Ready Mix Magelang",
"https://www.betonjayareadymix.com/2021/03/ready-mix-majalengka.html": "Ready Mix Majalengka",

  "https://www.betonjayareadymix.com/2021/03/ready-mix-jombang.html": "Ready Mix Jombang",
  "https://www.betonjayareadymix.com/2021/03/ready-mix-jogja.html": "Ready Mix Jogja",
  "https://www.betonjayareadymix.com/2021/03/ready-mix-pati.html": "Ready Mix Pati",
  "https://www.betonjayareadymix.com/2021/03/ready-mix-ambon.html": "Ready Mix Ambon",
  "https://www.betonjayareadymix.com/2021/03/ready-mix-makassar.html": "Ready Mix Makassar",
  "https://www.betonjayareadymix.com/2021/08/ready-mix-kediri.html": "Ready Mix Kediri",
  "https://www.betonjayareadymix.com/2021/08/ready-mix-semarang.html": "Ready Mix Semarang",


  "https://www.betonjayareadymix.com/2021/08/ready-mix-cor-bandung.html": "Ready Mix Cor Bandung",

//BETON READY MIX
"https://www.betonjayareadymix.com/2021/08/beton-ready-mix-majalengka.html": "Beton Ready Mix Majalengka",
"https://www.betonjayareadymix.com/2021/08/beton-ready-mix-tasikmalaya.html": "Beton Ready Mix Tasikmalaya",
"https://www.betonjayareadymix.com/2021/08/beton-ready-mix-garut.html": "Beton Ready Mix Garut",
"https://www.betonjayareadymix.com/2021/08/beton-ready-mix-sukabumi.html": "Beton Ready Mix Sukabumi",
"https://www.betonjayareadymix.com/2021/08/beton-ready-mix-purwakarta.html": "Beton Ready Mix Purwakarta",
"https://www.betonjayareadymix.com/2021/08/beton-ready-mix-sumedang.html": "Beton Ready Mix Sumedang",
"https://www.betonjayareadymix.com/2021/08/beton-ready-mix-karawang.html": "Beton Ready Mix Karawang",
"https://www.betonjayareadymix.com/2021/08/beton-ready-mix-subang.html": "Beton Ready Mix Subang",
"https://www.betonjayareadymix.com/2021/03/beton-ready-mix-sidoarjo.html": "Beton Ready Mix Sidoarjo",
"https://www.betonjayareadymix.com/2021/03/beton-ready-mix-surabaya.html": "Beton Ready Mix Surabaya",
"https://www.betonjayareadymix.com/2021/03/beton-ready-mix-semarang.html": "Beton Ready Mix Semarang",
"https://www.betonjayareadymix.com/2021/03/beton-ready-mix-jogja.html": "Beton Ready Mix Jogja",
"https://www.betonjayareadymix.com/2021/03/beton-ready-mix-tangerang.html": "Beton Ready Mix Tangerang",
"https://www.betonjayareadymix.com/2021/03/beton-ready-mix-jakarta.html": "Beton Ready Mix Jakarta",
"https://www.betonjayareadymix.com/2021/03/beton-ready-mix-bogor.html": "Beton Ready Mix Bogor",
"https://www.betonjayareadymix.com/2021/03/beton-ready-mix-bandung.html": "Beton Ready Mix Bandung",

//COR BETON
  "https://www.betonjayareadymix.com/2021/08/cor-beton-bekasi.html": "Cor Beton Bekasi",
  "https://www.betonjayareadymix.com/2021/08/cor-beton-bandung.html": "Cor Beton Bandung"
};

const urlMappingReadyMixMutuPost = {
//JAYAMIX BETON MUTU
"https://www.betonjayareadymix.com/2021/03/jayamix-beton.html": "Jayamix Beton",
	
//JENIS MUTU
 "https://www.betonjayareadymix.com/2021/03/jenis-beton-ready-mix.html": "Jenis Beton Ready Mix",
	
//ANALISA MUTU
  "https://www.betonjayareadymix.com/2021/03/analisa-beton-ready-mix-k250.html": "Analisa Beton Ready Mix K250",
  "https://www.betonjayareadymix.com/2021/03/analisa-beton-ready-mix-k350.html": "Analisa Beton Ready Mix K350",
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k100.html": "Analisa Beton Ready Mix K100",
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k125.html": "Analisa Beton Ready Mix K125",
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k175.html": "Analisa Beton Ready Mix K175",
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k225.html": "Analisa Beton Ready Mix K225",
  "https://www.betonjayareadymix.com/2021/03/analisa-beton-ready-mix-k300.html": "Analisa Beton Ready Mix K300",
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k375.html": "Analisa Beton Ready Mix K375",
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k400.html": "Analisa Beton Ready Mix K400",
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k450.html": "Analisa Beton Ready Mix K450",

    "https://www.betonjayareadymix.com/2018/04/analisa-beton-k-225.html": "Analisa Beton K 225",
  "https://www.betonjayareadymix.com/2018/04/macam-macam-mutu-beton.html": "Macam macam mutu beton",

 //HARGA MUTU
 "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-tiga-roda.html": "Harga Ready Mix Tiga Roda",

"https://www.betonjayareadymix.com/2021/08/harga-cor-beton-dinding.html": "Harga Cor Beton Dinding",
	
 "https://www.betonjayareadymix.com/2021/03/ready-mix-murah.html": "Ready Mix Murah",
  "https://www.betonjayareadymix.com/2021/08/cor-beton-murah.html": "Cor Beton Murah",
  "https://www.betonjayareadymix.com/2021/03/jual-beton-ready-mix.html": "Jual Beton Ready Mix",
"https://www.betonjayareadymix.com/2021/03/cari-harga-beton-ready-mix.html": "Cari Harga Beton Ready Mix",


  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-k-200.html": "Harga Ready Mix K 200",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-b0.html": "Harga Beton Ready Mix B0",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-k-350.html": "Harga Ready Mix K 350",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-k-300.html": "Harga Ready Mix K 300",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-k-250.html": "Harga Ready Mix K 250",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-k-225.html": "Harga Ready Mix K 225",
    "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-k-275.html": "Harga Ready Mix K 275",
    "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-250.html": "Harga Cor Beton K 250",
    "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-225.html": "Harga Cor Beton K 225",
    "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-k-175.html": "Harga Ready Mix K 175",

    "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-300-per-m3.html": "Harga Cor Beton K 300 per m3",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-200.html": "Harga Cor Beton K 200",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-175.html": "Harga Cor Beton K 175",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-275.html": "Harga Cor Beton K 275",
  "https://www.betonjayareadymix.com/2021/03/harga-cor-beton-k225-per-m3.html": "Harga Cor Beton K225 Per M3",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k350.html": "Harga Cor Beton K350",
  "https://www.betonjayareadymix.com/2021/08/harga-beton-cor-k300-holcim.html": "Harga Beton Cor K300 Holcim",

   "https://www.betonjayareadymix.com/2021/12/daftar-harga-cor-beton.html": "Daftar Harga Cor Beton",
  "https://www.betonjayareadymix.com/2021/12/daftar-harga-cor-beton-jayamix.html": "Daftar Harga Cor Beton Jayamix",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-per-kubik.html": "Harga Cor Beton per kubik",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-per-truk-molen.html": "Harga Cor Beton Per Truk Molen",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-per-molen.html": "Harga Cor Beton per Molen",
  "https://www.betonjayareadymix.com/2022/12/harga-jayamix-ready-mix-minimix.html": "Harga Jayamix Ready Mix Minimix",

 "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-pionir.html": "Harga Beton Ready Mix Pionir",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-holcim.html": "Harga Beton Ready Mix Holcim",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-jayamix.html": "Harga Beton Ready Mix Jayamix",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-merah-putih.html": "Harga Beton Ready Mix Merah Putih",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-holcim.html": "Harga Ready Mix Holcim",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-jayamix.html": "Harga Ready Mix Jayamix",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-holcim-per-m3.html": "Harga Cor Beton Holcim per m3",

 "https://www.betonjayareadymix.com/2018/05/harga-beton-ready-mix-adhimix.html": "Harga Beton Ready Mix Adhimix",
  "https://www.betonjayareadymix.com/2021/03/harga-cor-beton-adhimix.html": "Harga Cor Beton Adhimix",
  "https://www.betonjayareadymix.com/2018/08/harga-beton-adhimix.html": "Harga Beton Adhimix",
  "https://www.betonjayareadymix.com/2018/08/harga-adhimix-jayamix.html": "Harga Adhimix Jayamix",

  "https://www.betonjayareadymix.com/2018/05/harga-cor-beton-untuk-rumah.html": "Harga Cor Beton Untuk Rumah",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-rumah-tinggal-per-m3.html": "Harga Cor Beton Rumah Tinggal Per M3",

 "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-per-m3.html": "Harga Beton Ready Mix Per M3",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-termurah.html": "Harga Beton Ready Mix Termurah",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-terbaru.html": "Harga Beton Ready Mix Terbaru",
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-per-kubik.html": "Harga Ready Mix Per Kubik",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-murah.html": "Harga Ready Mix Murah",
  "https://www.betonjayareadymix.com/2021/03/harga-readymix-concrete.html": "Harga Readymix Concrete",
"https://www.betonjayareadymix.com/2021/12/harga-cor-beton-ready-mix.html": "Harga Cor Beton Ready Mix",

//HARGA BETON COR
"https://www.betonjayareadymix.com/2021/08/harga-beton-cor-bogor.html": "Harga Beton Cor Bogor",
  "https://www.betonjayareadymix.com/2018/09/harga-cor-beton-ready-mix-jakarta.html": "Harga Cor Beton Ready Mix Jakarta",
  "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-bekasi.html": "Harga Beton Cor Bekasi",
  "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-tangerang.html": "Harga Beton Cor Tangerang",
 "https://www.betonjayareadymix.com/2022/12/harga-beton-cor-serang.html": "Harga Beton Cor Serang",

//HARGA JAYAMIX
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
"https://www.betonjayareadymix.com/2021/09/harga-jayamix-magelang.html": "Harga Jayamix Magelang",
"https://www.betonjayareadymix.com/2021/09/harga-jayamix-malang.html": "Harga Jayamix Malang",
"https://www.betonjayareadymix.com/2021/09/harga-jayamix-kediri.html": "Harga Jayamix Kediri",
"https://www.betonjayareadymix.com/2021/09/harga-jayamix-cilacap.html": "Harga Jayamix Cilacap",
"https://www.betonjayareadymix.com/2021/08/harga-jayamix-kuningan.html": "Harga Jayamix Kuningan",
"https://www.betonjayareadymix.com/2021/08/harga-jayamix-surabaya.html": "Harga Jayamix Surabaya",
"https://www.betonjayareadymix.com/2021/08/harga-jayamix-paling-murah.html": "Harga Jayamix Paling Murah",
"https://www.betonjayareadymix.com/2021/03/harga-jayamix-blitar.html": "Harga Jayamix Blitar",
"https://www.betonjayareadymix.com/2021/03/harga-jayamix-boyolali.html": "Harga Jayamix Boyolali",
"https://www.betonjayareadymix.com/2021/03/harga-jayamix-semarang.html": "Harga Jayamix Semarang",
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-cianjur.html": "Harga Jayamix Cianjur",
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-cirebon.html": "Harga Jayamix Cirebon",
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-pangandaran.html": "Harga Jayamix Pangandaran",
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-karawang.html": "Harga Jayamix Karawang",
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-ciamis.html": "Harga Jayamix Ciamis",
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-purwakarta.html": "Harga Jayamix Purwakarta",
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-subang.html": "Harga Jayamix Subang",
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-sumedang.html": "Harga Jayamix Sumedang",
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-sukabumi.html": "Harga Jayamix Sukabumi",
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-majalengka.html": "Harga Jayamix Majalengka",
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-tasikmalaya.html": "Harga Jayamix Tasikmalaya",
  "https://www.betonjayareadymix.com/2022/12/harga-jayamix-bogor.html": "Harga Jayamix Bogor",

//HARGA READY MIX
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-gresik.html": "Harga Ready Mix Gresik",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-cikarang.html": "Harga Ready Mix Cikarang",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-depok.html": "Harga Ready Mix Depok",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-bogor.html": "Harga Ready Mix Bogor",
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-cibinong.html": "Harga Ready Mix Cibinong",
  "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-pati.html": "Harga Ready Mix Pati",
  "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-klaten.html": "Harga Ready Mix Klaten",
  "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-magelang.html": "Harga Ready Mix Magelang",
  "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-boyolali.html": "Harga Ready Mix Boyolali",
  "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-jogja.html": "Harga Ready Mix Jogja",
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-surabaya.html": "Harga Ready Mix Surabaya",
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-cilegon.html": "Harga Ready Mix Cilegon",
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-sumedang.html": "Harga Ready Mix Sumedang",
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-tasikmalaya.html": "Harga Ready Mix Tasikmalaya",
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-karawang.html": "Harga Ready Mix Karawang",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-cileungsi.html": "Harga Ready Mix Cileungsi",
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-cilacap.html": "Harga Ready Mix Cilacap",
  "https://www.betonjayareadymix.com/2018/04/harga-readymix-bandung.html": "Harga Readymix Bandung",

 //HARGA BETON READY MIX
  "https://www.betonjayareadymix.com/2018/05/harga-beton-ready-mix-surabaya.html": "Harga Beton Ready Mix Surabaya",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-bandung.html": "Harga Beton Ready Mix Bandung",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-bogor.html": "Harga Beton Ready Mix Bogor",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-karawang.html": "Harga Beton Ready Mix Karawang",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-depok.html": "Harga Beton Ready Mix Depok",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-cikarang.html": "Harga Beton Ready Mix Cikarang",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-cirebon.html": "Harga Beton Ready Mix Cirebon",

    "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-garut.html": "Harga Beton Ready Mix Garut",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-majalengka.html": "Harga Beton Ready Mix Majalengka",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-subang.html": "Harga Beton Ready Mix Subang",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-sukabumi.html": "Harga Beton Ready Mix Sukabumi",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-ciamis.html": "Harga Beton Ready Mix Ciamis",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-cianjur.html": "Harga Beton Ready Mix Cianjur",
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-indramayu.html": "Harga Beton Ready Mix Indramayu",

  //HARGA BETON JAYAMIX
  "https://www.betonjayareadymix.com/2021/08/harga-beton-jayamix-jakarta.html": "Harga Beton Jayamix Jakarta",

  //HARGA COR BETON
   "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-ready-mix-bandung.html": "Harga Cor Beton Ready Mix Bandung",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-di-jakarta.html": "Harga Cor Beton di Jakarta",
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-bandung.html": "Harga Cor Beton Bandung",
  "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-depok.html": "Harga Cor Beton Depok",

//HARGA PER KECAMATAN
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-tegalwaru-kab-karawang.html": "Harga Jayamix Tegalwaru Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-tegalwaru-kab-karawang.html": "Harga Ready Mix Tegalwaru Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-talagasari-kab-karawang.html": "Harga Jayamix Talagasari Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-talagasari-kab-karawang.html": "Harga Ready Mix Talagasari Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-telukjambe-timur-karawang.html": "Harga Jayamix Telukjambe Timur Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-telukjambe-timur.html": "Harga Ready Mix Telukjambe Timur",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-karawang-timur.html": "Harga Jayamix Karawang Timur",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-karawang-timur.html": "Harga Ready Mix Karawang Timur",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-klari-karawang.html": "Harga Ready Mix Klari Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-kota-baru-karawang.html": "Harga Jayamix Kota Baru Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-kota-baru-karawang.html": "Harga Ready Mix Kota Baru Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-karawang-barat.html": "Harga Jayamix Karawang Barat",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-karawang-barat.html": "Harga Ready Mix Karawang Barat",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-jatisari-kab-karawang.html": "Harga Jayamix Jatisari Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-jatisari-kab-karawang.html": "Harga Ready Mix Jatisari Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-cilebar-kab-karawang.html": "Harga Jayamix Cilebar Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-cilebar-kab-karawang.html": "Harga Ready Mix Cilebar Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-cilamaya-wetan.html": "Harga Ready Mix Cilamaya Wetan",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-cilamaya-wetan.html": "Harga Jayamix Cilamaya Wetan",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-tirtajaya-kab-karawang.html": "Harga Ready Mix Tirtajaya Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-tirtamulya-kab-karawang.html": "Harga Ready Mix Tirtamulya Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-tirtamulya-kab-karawang.html": "Harga Jayamix Tirtamulya Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-tempuran-kab-karawang.html": "Harga Ready Mix Tempuran Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-tempuran-kab-karawang.html": "Harga Jayamix Tempuran Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-telukjambe-barat.html": "Harga Jayamix Telukjambe Barat",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-telukjambe-barat.html": "Harga Ready Mix Telukjambe Barat",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-rengasdengklok.html": "Harga Jayamix Rengasdengklok",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-rengasdengklok.html": "Harga Ready Mix Rengasdengklok",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-rawamerta-kab-karawang.html": "Harga Jayamix Rawamerta Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-rawamerta-kab-karawang.html": "Harga Ready Mix Rawamerta Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-purwasari-karawang.html": "Harga Jayamix Purwasari Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-pedes-kab-karawang.html": "Harga Jayamix Pedes Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-pedes-kab-karawang.html": "Harga Ready Mix Pedes Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-pangkalan-kab-karawang.html": "Harga Jayamix Pangkalan Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-pangkalan-kab-karawang.html": "Harga Ready Mix Pangkalan Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-jayakerta.html": "Harga Jayamix Jayakerta",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-jayakerta.html": "Harga Ready Mix Jayakerta",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-kutawaluya.html": "Harga Jayamix Kutawaluya",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-kutawaluya.html": "Harga Ready Mix Kutawaluya",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-klari-karawang.html": "Harga Jayamix Klari Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-lemahabang-kab-karawang.html": "Harga Ready Mix Lemahabang Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-lemahabang-kab-karawang.html": "Harga Jayamix Lemahabang Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-majalaya-kab-karawang.html": "Harga Ready Mix Majalaya Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-majalaya-kab-karawang.html": "Harga Jayamix Majalaya Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-pakisjaya-kab-karawang.html": "Harga Ready Mix Pakisjaya Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-pakisjaya-kab-karawang.html": "Harga Jayamix Pakisjaya Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-banyusari-kab-karawang.html": "Harga Jayamix Banyusari Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-banyusari-kab-karawang.html": "Harga Ready Mix Banyusari Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-batujaya-kab-karawang.html": "Harga Jayamix Batujaya Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-batujaya-kab-karawang.html": "Harga Ready Mix Batujaya Kab Karawang",

  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-balaraja-kab-tangerang.html": "Harga Ready Mix Balaraja Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-gunung-kaler-kab-tangerang.html": "Harga Ready Mix Gunung Kaler Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sindang-jaya-kab-tangerang.html": "Harga Ready Mix Sindang Jaya Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kronjo-kab-tangerang.html": "Harga Ready Mix Kronjo Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kosambi-kab-tangerang.html": "Harga Ready Mix Kosambi Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kresek-kab-tangerang.html": "Harga Ready Mix Kresek Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kemiri-kab-tangerang.html": "Harga Ready Mix Kemiri Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kelapa-dua-kab-tangerang.html": "Harga Ready Mix Kelapa Dua Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-mauk-kab-tangerang.html": "Harga Ready Mix Mauk Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-legok-kab-tangerang.html": "Harga Ready Mix Legok Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-mekarbaru-kab-tangerang.html": "Harga Ready Mix Mekarbaru Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pasar-kemis-kab-tangerang.html": "Harga Ready Mix Pasar Kemis Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-panongan-kab-tangerang.html": "Harga Ready Mix Panongan Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tigaraksa-kab-tangerang.html": "Harga Ready Mix Tigaraksa Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-serpong.html": "Harga Ready Mix Serpong",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-serpong-utara.html": "Harga Ready Mix Serpong Utara",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-teluknaga.html": "Harga Ready Mix Teluknaga",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jayanti.html": "Harga Ready Mix Jayanti",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cikupa.html": "Harga Ready Mix Cikupa",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sukamulya.html": "Harga Ready Mix Sukamulya",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sukadiri.html": "Harga Ready Mix Sukadiri",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-solear.html": "Harga Ready Mix Solear",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sepatan-timur.html": "Harga Ready Mix Sepatan Timur",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sepatan.html": "Harga Ready Mix Sepatan",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cisoka.html": "Harga Ready Mix Cisoka",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-batu-ceper.html": "Harga Ready Mix Batu Ceper",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-benda-kota-tangerang.html": "Harga Ready Mix Benda Kota Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cibodas-kota-tangerang.html": "Harga Ready Mix Cibodas Kota Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-setu-tangerang-selatan.html": "Harga Ready Mix Setu Tangerang Selatan",

    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jayanti-kab-tangerang.html": "Harga Jayamix Jayanti Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cikupa-kab-tangerang.html": "Harga Jayamix Cikupa Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-balaraja-kab-tangerang.html": "Harga Jayamix Balaraja Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-gunung-kaler-kab-tangerang.html": "Harga Jayamix Gunung Kaler Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kosambi-kab-tangerang.html": "Harga Jayamix Kosambi Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kronjo-kab-tangerang.html": "Harga Jayamix Kronjo Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kresek-kab-tangerang.html": "Harga Jayamix Kresek Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kemiri-kab-tangerang.html": "Harga Jayamix Kemiri Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kelapa-dua-kab-tangerang.html": "Harga Jayamix Kelapa Dua Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-mauk-kab-tangerang.html": "Harga Jayamix Mauk Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-legok-kab-tangerang.html": "Harga Jayamix Legok Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pasar-kemis-kab-tangerang.html": "Harga Jayamix Pasar Kemis Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-panongan-kab-tangerang.html": "Harga Jayamix Panongan Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-mekarbaru-kab-tangerang.html": "Harga Jayamix Mekarbaru Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tigaraksa-kab-tangerang.html": "Harga Jayamix Tigaraksa Kab Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sindang-jaya.html": "Harga Jayamix Sindang Jaya",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-serpong.html": "Harga Jayamix Serpong",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-serpong-utara.html": "Harga Jayamix Serpong Utara",
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-ciputat.html": "Harga Jayamix Ciputat",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sukamulya.html": "Harga Jayamix Sukamulya",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sukadiri.html": "Harga Jayamix Sukadiri",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-solear.html": "Harga Jayamix Solear",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sepatan.html": "Harga Jayamix Sepatan",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cisoka.html": "Harga Jayamix Cisoka",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-batu-ceper.html": "Harga Jayamix Batu Ceper",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sepatan-timur.html": "Harga Jayamix Sepatan Timur",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cibodas-kota-tangerang.html": "Harga Jayamix Cibodas Kota Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-ciledug-kota-tangerang.html": "Harga Jayamix Ciledug Kota Tangerang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-setu-tangerang-selatan.html": "Harga Jayamix Setu Tangerang Selatan",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-benda-kota-tangerang.html": "Harga Jayamix Benda Kota Tangerang",
	  
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-ciomas-kab-bogor.html": "Harga Jayamix Ciomas Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-ciomas-kab-bogor.html": "Harga Ready Mix Ciomas Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cisarua-kab-bogor.html": "Harga Jayamix Cisarua Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cisarua-kab-bogor.html": "Harga Ready Mix Cisarua Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-ciseeng-kab-bogor.html": "Harga Jayamix Ciseeng Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-ciseeng-kab-bogor.html": "Harga Ready Mix Ciseeng Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tenjolaya-kab-bogor.html": "Harga Jayamix Tenjolaya Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tenjolaya-kab-bogor.html": "Harga Ready Mix Tenjolaya Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tenjo-kab-bogor.html": "Harga Jayamix Tenjo Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tenjo-kab-bogor.html": "Harga Ready Mix Tenjo Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tanjungsari-kab-bogor.html": "Harga Jayamix Tanjungsari Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tanjungsari-kab-bogor.html": "Harga Ready Mix Tanjungsari Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tamansari-kab-bogor.html": "Harga Jayamix Tamansari Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tamansari-kab-bogor.html": "Harga Ready Mix Tamansari Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tajur-halang-kab-bogor.html": "Harga Jayamix Tajur Halang Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tajur-halang-kab-bogor.html": "Harga Ready Mix Tajur Halang Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sukaraja-kab-bogor.html": "Harga Jayamix Sukaraja Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sukaraja-kab-bogor.html": "Harga Ready Mix Sukaraja Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sukamakmur-kab-bogor.html": "Harga Jayamix Sukamakmur Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sukamakmur-kab-bogor.html": "Harga Ready Mix Sukamakmur Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-parung-panjang-kab-bogor.html": "Harga Jayamix Parung Panjang Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-parung-panjang-kab-bogor.html": "Harga Ready Mix Parung Panjang Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-parung-kab-bogor.html": "Harga Jayamix Parung Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-parung-kab-bogor.html": "Harga Ready Mix Parung Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pamijahan-kab-bogor.html": "Harga Jayamix Pamijahan Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pamijahan-kab-bogor.html": "Harga Ready Mix Pamijahan Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-nanggung-kab-bogor.html": "Harga Jayamix Nanggung Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-nanggung-kab-bogor.html": "Harga Ready Mix Nanggung Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-megamendung-kab-bogor.html": "Harga Jayamix Megamendung Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-megamendung-kab-bogor.html": "Harga Ready Mix Megamendung Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-leuwisadeng-kab-bogor.html": "Harga Jayamix Leuwisadeng Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-leuwisadeng-kab-bogor.html": "Harga Ready Mix Leuwisadeng Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-leuwiliang-kab-bogor.html": "Harga Jayamix Leuwiliang Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-leuwiliang-kab-bogor.html": "Harga Ready Mix Leuwiliang Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-klapanunggal-kab-bogor.html": "Harga Jayamix Klapanunggal Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-klapanunggal-kab-bogor.html": "Harga Ready Mix Klapanunggal Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kemang-kab-bogor.html": "Harga Jayamix Kemang Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kemang-kab-bogor.html": "Harga Ready Mix Kemang Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jonggol-kab-bogor.html": "Harga Jayamix Jonggol Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jonggol-kab-bogor.html": "Harga Ready Mix Jonggol Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jasinga-kab-bogor.html": "Harga Jayamix Jasinga Kab Bogor",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jasinga-kab-bogor.html": "Harga Ready Mix Jasinga Kab Bogor",

  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-cikarang-utara.html": "Harga Jayamix Cikarang Utara",
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-cikarang-utara.html": "Harga Ready Mix Cikarang Utara",
  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-cikarang-selatan.html": "Harga Jayamix Cikarang Selatan",
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-cikarang-selatan-bekasi.html": "Harga Ready Mix Cikarang Selatan Bekasi",
  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-cikarang-timur.html": "Harga Jayamix Cikarang Timur",
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-cikarang-timur.html": "Harga Ready Mix Cikarang Timur",
  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-cikarang-pusat.html": "Harga Jayamix Cikarang Pusat",
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-cikarang-pusat-bekasi.html": "Harga Ready Mix Cikarang Pusat Bekasi",
  "https://www.betonjayareadymix.com/2018/06/harga-jayamix-cikarang-barat.html": "Harga Jayamix Cikarang Barat",
  "https://www.betonjayareadymix.com/2018/05/harga-ready-mix-cikarang-barat-bekasi.html": "Harga Ready Mix Cikarang Barat Bekasi",
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-babelan.html": "Harga Jayamix Babelan",
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-babelan.html": "Harga Ready Mix Babelan",
  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-bojongmangu.html": "Harga Jayamix Bojongmangu",
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-bojongmangu-bekasi.html": "Harga Ready Mix Bojongmangu Bekasi",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cabangbungin-bekasi.html": "Harga Ready Mix Cabangbungin Bekasi",
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-cabangbungin-bekasi.html": "Harga Jayamix Cabangbungin Bekasi",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cibitung-bekasi.html": "Harga Jayamix Cibitung Bekasi",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cibitung.html": "Harga Ready Mix Cibitung",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tarumajaya.html": "Harga Ready Mix Tarumajaya",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tarumajaya-bekasi.html": "Harga Jayamix Tarumajaya Bekasi",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tambun-utara-bekasi.html": "Harga Jayamix Tambun Utara Bekasi",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tambun-utara-bekasi.html": "Harga Ready Mix Tambun Utara Bekasi",
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cibarusah.html": "Harga Jayamix Cibarusah",
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-cibarusah.html": "Harga Ready Mix Cibarusah",
  "https://www.betonjayareadymix.com/2021/02/harga-jayamix-tambun-selatan.html": "Harga Jayamix Tambun Selatan",
  "https://www.betonjayareadymix.com/2018/05/harga-ready-mix-tambun-selatan.html": "Harga Ready Mix Tambun Selatan",
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-tambelang.html": "Harga Jayamix Tambelang",
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-tambelang.html": "Harga Ready Mix Tambelang",
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-sukawangi-bekasi.html": "Harga Jayamix Sukawangi Bekasi",
  "https://www.betonjayareadymix.com/2018/05/harga-ready-mix-sukawangi-bekasi.html": "Harga Ready Mix Sukawangi Bekasi",
  "https://www.betonjayareadymix.com/2018/05/harga-ready-mix-pebayuran.html": "Harga Ready Mix Pebayuran",
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-pebayuran-bekasi.html": "Harga Jayamix Pebayuran Bekasi",
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-muara-gembong-bekasi.html": "Harga Jayamix Muara Gembong Bekasi",
  "https://www.betonjayareadymix.com/2018/05/harga-ready-mix-muara-gembong-bekasi.html": "Harga Ready Mix Muara Gembong Bekasi",
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-kedungwaringin-bekasi.html": "Harga Ready Mix Kedungwaringin Bekasi",
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-kedungwaringin-bekasi.html": "Harga Jayamix Kedungwaringin Bekasi",
  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-karangbahagia.html": "Harga Jayamix Karangbahagia",
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-karangbahagia.html": "Harga Ready Mix Karangbahagia",
  "https://www.betonjayareadymix.com/2022/02/harga-ready-mix-sukatani-bekasi.html": "Harga Ready Mix Sukatani Bekasi",
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-sukatani-bekasi.html": "Harga Jayamix Sukatani Bekasi",
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-sukakarya-bekasi.html": "Harga Jayamix Sukakarya Bekasi",
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-sukakarya-bekasi.html": "Harga Ready Mix Sukakarya Bekasi",
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-setu-bekasi.html": "Harga Jayamix Setu Bekasi",
  "https://www.betonjayareadymix.com/2018/05/harga-ready-mix-setu-bekasi.html": "Harga Ready Mix Setu Bekasi",
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-serang-baru-bekasi.html": "Harga Jayamix Serang Baru Bekasi",
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-serang-baru-bekasi.html": "Harga Ready Mix Serang Baru Bekasi",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-bantar-gebang.html": "Harga Ready Mix Bantar Gebang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-bantar-gebang.html": "Harga Jayamix Kecamatan Bantar Gebang",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-bekasi-barat.html": "Harga Jayamix Kecamatan Bekasi Barat",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-bekasi-barat.html": "Harga Ready Mix Kecamatan Bekasi Barat",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-bekasi-selatan.html": "Harga Ready Mix Bekasi Selatan",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-bekasi-selatan.html": "Harga Jayamix Kecamatan Bekasi Selatan",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-bekasi-timur.html": "Harga Ready Mix Kecamatan Bekasi Timur",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-bekasi-timur.html": "Harga Jayamix Kecamatan Bekasi Timur",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-bekasi-utara.html": "Harga Ready Mix Kecamatan Bekasi Utara",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-bekasi-utara.html": "Harga Jayamix Kecamatan Bekasi Utara",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jatiasih-kota-bekasi.html": "Harga Ready Mix Jatiasih Kota Bekasi",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jatiasih-kota-bekasi.html": "Harga Jayamix Jatiasih Kota Bekasi",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-jatisampurna.html": "Harga Jayamix Kecamatan Jatisampurna",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-jatisampurna.html": "Harga Ready Mix Kecamatan Jatisampurna",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-medan-satria.html": "Harga Ready Mix Kecamatan Medan Satria",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-medan-satria.html": "Harga Jayamix Kecamatan Medan Satria",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-mustika-jaya.html": "Harga Ready Mix Kecamatan Mustika Jaya",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-mustika-jaya.html": "Harga Jayamix Kecamatan Mustika Jaya",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-pondok-gede.html": "Harga Ready Mix Kecamatan Pondok Gede",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-pondok-gede.html": "Harga Jayamix Kecamatan Pondok Gede",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-pondok-melati.html": "Harga Ready Mix Kecamatan Pondok Melati",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-pondok-melati.html": "Harga Jayamix Kecamatan Pondok Melati",
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-rawa-lumbu.html": "Harga Ready Mix Kecamatan Rawa Lumbu",
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-rawa-lumbu-kota-bekasi.html": "Harga Jayamix Rawa Lumbu Kota Bekasi",

    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jakarta-timur.html": "Harga Ready Mix Jakarta Timur",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jakarta-timur.html": "Harga Jayamix Jakarta Timur",
    "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-kepulauan-seribu.html": "Harga Ready Mix Kepulauan Seribu",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kepulauan-seribu.html": "Harga Jayamix Kepulauan Seribu",
    "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-jakarta-selatan.html": "Harga Ready Mix Jakarta Selatan",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jakarta-selatan.html": "Harga Jayamix Jakarta Selatan",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jakarta-pusat.html": "Harga Ready Mix Jakarta Pusat",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jakarta-pusat.html": "Harga Jayamix Jakarta Pusat",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jakarta-barat.html": "Harga Jayamix Jakarta Barat",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jakarta-barat.html": "Harga Ready Mix Jakarta Barat",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jakarta-utara.html": "Harga Jayamix Jakarta Utara",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jakarta-utara.html": "Harga Ready Mix Jakarta Utara",

    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-beji-depok.html": "Harga Jayamix Beji Depok",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-beji-depok.html": "Harga Ready Mix Beji Depok",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-tapos.html": "Harga Jayamix Tapos",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tapos-depok.html": "Harga Ready Mix Tapos Depok",
    "https://www.betonjayareadymix.com/2021/04/harga-readymix-cinere.html": "Harga Readymix Cinere",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cinere-depok.html": "Harga Jayamix Cinere Depok",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-sukmajaya.html": "Harga Jayamix Sukmajaya",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sukmajaya-depok.html": "Harga Ready Mix Sukmajaya Depok",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-limo.html": "Harga Jayamix Limo",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-limo-depok.html": "Harga Ready Mix Limo Depok",
    "https://www.betonjayareadymix.com/2021/03/harga-jayamix-bojongsari-depok.html": "Harga Jayamix Bojongsari Depok",
    "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-bojongsari-depok.html": "Harga Ready Mix Bojongsari Depok",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pancoran-mas-depok.html": "Harga Jayamix Pancoran Mas Depok",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pancoran-mas-depok.html": "Harga Ready Mix Pancoran Mas Depok",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cipayung-depok.html": "Harga Jayamix Cipayung Depok",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cipayung-depok.html": "Harga Ready Mix Cipayung Depok",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cilodong-depok.html": "Harga Jayamix Cilodong Depok",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cilodong-depok.html": "Harga Ready Mix Cilodong Depok",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sawangan-depok.html": "Harga Jayamix Sawangan Depok",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sawangan-depok.html": "Harga Ready Mix Sawangan Depok",
    "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cimanggis-depok.html": "Harga Jayamix Cimanggis Depok",
    "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cimanggis-depok.html": "Harga Ready Mix Cimanggis Depok"

};

const urlMappingReadyMixKegunaanPost = {
"https://www.betonjayareadymix.com/2021/03/fungsi-beton-ready-mix.html": "Fungsi Beton Ready Mix",
 
  "https://www.betonjayareadymix.com/2018/09/cor-slipform.html": "Cor Slipform",
  "https://www.betonjayareadymix.com/2018/09/cor-beton-rumah.html": "Cor Beton Rumah",

 "https://www.betonjayareadymix.com/2018/09/cor-beton-bangunan.html": "Cor Beton Bangunan"

};

const urlMappingReadyMixPlantPost = {
  "https://www.betonjayareadymix.com/2021/08/batching-plant-terdekat.html": "Batching Plant Terdekat",
"https://www.betonjayareadymix.com/2018/08/batching-plant-depok.html": "Batching Plant Depok",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-tangerang.html": "Batching Plant Tangerang",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-prov-dki-jakarta.html": "Batching Plant Prov DKI Jakarta",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-bekasi.html": "Batching Plant Bekasi",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-bogor.html": "Batching Plant Bogor",
  
  "https://www.betonjayareadymix.com/2018/04/scg-jayamix.html": "SCG Jayamix",
  "https://www.betonjayareadymix.com/2021/03/holcim-ready-mix.html": "Holcim Ready Mix",
  "https://www.betonjayareadymix.com/2021/03/ready-mix-merah-putih.html": "Ready Mix Merah Putih",
  "https://www.betonjayareadymix.com/2021/03/ready-mix-tiga-roda.html": "Ready Mix Tiga Roda",

  "https://www.betonjayareadymix.com/2018/04/scg-readymix.html": "SCG Ready Mix",
  "https://www.betonjayareadymix.com/2018/04/scg-jayamix.html": "SCG Jayamix",
  "https://www.betonjayareadymix.com/2018/08/scg-beton.html": "SCG Beton",
  "https://www.betonjayareadymix.com/2021/03/pt-scg-readymix-indonesia.html": "PT SCG Ready Mix Indonesia",
  "https://www.betonjayareadymix.com/2021/03/scg-readymix-indonesia.html": "SCG Ready Mix Indonesia",
  "https://www.betonjayareadymix.com/2018/08/scg-batching-plant.html": "SCG Batching Plant",
  "https://www.betonjayareadymix.com/2018/08/office-kantor-scg-kalibata.html": "Office Kantor SCG Kalibata",
  // Lokasi / Distribusi Plant
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-subang.html": "Batching Plant SCG Subang",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-karawang.html": "Batching Plant SCG Karawang",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-sukabumi.html": "Batching Plant Sukabumi",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-purwakarta.html": "Batching Plant SCG Purwakarta",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-majalengka.html": "Batching Plant SCG Majalengka",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-bandung.html": "Batching Plant SCG Bandung",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-cirebon.html": "Batching Plant SCG Cirebon",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-cianjur.html": "Batching Plant SCG Cianjur",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-bogor.html": "Batching Plant SCG Bogor",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-bekasi.html": "Batching Plant SCG Bekasi",
  "https://www.betonjayareadymix.com/2018/08/scg-jakarta.html": "SCG Jakarta",
  "https://www.betonjayareadymix.com/2018/08/scg-jayamix-dki-jakarta.html": "SCG Jayamix DKI Jakarta",
  "https://www.betonjayareadymix.com/2018/04/scg-readymix-jakarta.html": "SCG Ready Mix Jakarta",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-kota-jakarta-utara.html": "SCG Ready Mix Kota Jakarta Utara",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-kota-jakarta-selatan.html": "SCG Ready Mix Jakarta Selatan",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-kota-jakarta-barat.html": "SCG Ready Mix Kota Jakarta Barat",
  "https://www.betonjayareadymix.com/2018/08/plant-scg-jelambar.html": "Plant SCG Jelambar",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-kota-jakarta-timur.html": "SCG Ready Mix Kota Jakarta Timur",
  "https://www.betonjayareadymix.com/2018/08/plant-scg-kampung-rambutan.html": "Plant SCG Kampung Rambutan",
  "https://www.betonjayareadymix.com/2018/08/plant-scg-kebon-nanas-jakarta-timur.html": "Plant SCG Kebon Nanas Jakarta Timur",
  "https://www.betonjayareadymix.com/2018/08/scg-jayamix-depok.html": "SCG Jayamix Depok",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-depok.html": "SCG Ready Mix Depok",
  "https://www.betonjayareadymix.com/2018/08/scg-jayamix-bekasi.html": "SCG Jayamix Bekasi",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-bekasi.html": "SCG Ready Mix Bekasi",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-cikarang-selatan.html": "SCG Ready Mix Cikarang Selatan",
  "https://www.betonjayareadymix.com/2018/08/scg-jayamix-bogor.html": "SCG Jayamix Bogor",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-bogor.html": "SCG Ready Mix Bogor",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-babakan-madang-kab-bogor.html": "SCG Ready Mix Babakan Madang Kab Bogor",
  "https://www.betonjayareadymix.com/2018/08/scg-jayamix-tangerang.html": "SCG Jayamix Tangerang",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-tangerang.html": "SCG Ready Mix Tangerang",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-kota-bandung.html": "SCG Ready Mix Kota Bandung",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-kab-bandung.html": "SCG Ready Mix Kab Bandung",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-gedebage-kota-bandung.html": "SCG Ready Mix Gedebage Kota Bandung",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-subang.html": "SCG Ready Mix Subang",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-kalijati-kab-subang.html": "SCG Ready Mix Kalijati Kab Subang",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-karawang.html": "SCG Ready Mix Karawang",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-ciampel-kab-karawang.html": "SCG Ready Mix Ciampel Kab Karawang",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-sukabumi.html": "SCG Ready Mix Sukabumi",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-gunungguruh-kab-sukabumi.html": "SCG Ready Mix Gunungguruh Kab Sukabumi",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-purwakarta.html": "SCG Ready Mix Purwakarta",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-majalengka.html": "SCG Ready Mix Majalengka",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-jatiwangi-kab-majalengka.html": "SCG Ready Mix Jatiwangi Kab Majalengka",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-cirebon.html": "SCG Ready Mix Cirebon",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-cianjur.html": "SCG Ready Mix Cianjur",
  "https://www.betonjayareadymix.com/2018/08/scg-ready-mix-karangtengah-kab-cianjur.html": "SCG Ready Mix Karangtengah Kab Cianjur",

  // Adhimix
  "https://www.betonjayareadymix.com/2018/08/batching-plant-adhimix.html": "Batching Plant Adhimix",
  "https://www.betonjayareadymix.com/2018/08/adhimix-ready-mix.html": "Adhimix Ready Mix",
  "https://www.betonjayareadymix.com/2018/08/adhimix-rmc.html": "Adhimix RMC",
  "https://www.betonjayareadymix.com/2018/08/adhimix-retail.html": "Adhimix Retail",
  "https://www.betonjayareadymix.com/2018/08/adhimix-group.html": "Adhimix Group",
  "https://www.betonjayareadymix.com/2018/08/adhimix-terdekat.html": "Adhimix Terdekat",
  "https://www.betonjayareadymix.com/2018/08/adhimix-beton.html": "Adhimix Beton",
  "https://www.betonjayareadymix.com/2018/08/adhimix-bogor.html": "Adhimix Bogor",
  "https://www.betonjayareadymix.com/2018/08/adhimix-bekasi.html": "Adhimix Bekasi",
  "https://www.betonjayareadymix.com/2018/08/adhimix-jakarta.html": "Adhimix Jakarta",
  "https://www.betonjayareadymix.com/2018/08/adhimix-tangerang.html": "Adhimix Tangerang",
  "https://www.betonjayareadymix.com/2018/08/adhimix-depok.html": "Adhimix Depok",
  "https://www.betonjayareadymix.com/2018/08/adhimix-bandung.html": "Adhimix Bandung",
  "https://www.betonjayareadymix.com/2018/08/adhimix-cirebon.html": "Adhimix Cirebon",
  "https://www.betonjayareadymix.com/2018/08/adhimix-karawang.html": "Adhimix Karawang",
  "https://www.betonjayareadymix.com/2018/08/adhimix-subang.html": "Adhimix Subang",
  "https://www.betonjayareadymix.com/2018/08/adhimix-majalengka.html": "Adhimix Majalengka",
  "https://www.betonjayareadymix.com/2018/08/adhimix-sukabumi.html": "Adhimix Sukabumi",
  "https://www.betonjayareadymix.com/2018/08/adhimix-purwakarta.html": "Adhimix Purwakarta",
  "https://www.betonjayareadymix.com/2018/08/adhimix-sumedang.html": "Adhimix Sumedang",
  "https://www.betonjayareadymix.com/2018/08/adhimix-indramayu.html": "Adhimix Indramayu",
  "https://www.betonjayareadymix.com/2018/08/adhimix-kuningan.html": "Adhimix Kuningan",
  "https://www.betonjayareadymix.com/2018/08/adhimix-cianjur.html": "Adhimix Cianjur",
  "https://www.betonjayareadymix.com/2018/08/adhimix-ciamis.html": "Adhimix Ciamis",
  "https://www.betonjayareadymix.com/2018/08/adhimix-serang.html": "Adhimix Serang",
  "https://www.betonjayareadymix.com/2018/08/adhimix-cilegon.html": "Adhimix Cilegon",
  "https://www.betonjayareadymix.com/2018/08/adhimix-lebak.html": "Adhimix Lebak",
  "https://www.betonjayareadymix.com/2018/08/adhimix-pandeglang.html": "Adhimix Pandeglang",
  "https://www.betonjayareadymix.com/2018/08/adhimix-kendal.html": "Adhimix Kendal",
  "https://www.betonjayareadymix.com/2018/08/adhimix-semarang.html": "Adhimix Semarang",
  "https://www.betonjayareadymix.com/2018/08/adhimix-surabaya.html": "Adhimix Surabaya",
  "https://www.betonjayareadymix.com/2018/08/adhimix-gresik.html": "Adhimix Gresik",
  "https://www.betonjayareadymix.com/2018/08/adhimix-sidoarjo.html": "Adhimix Sidoarjo",

  // Pionir
  "https://www.betonjayareadymix.com/2018/08/pionir-beton-terdekat.html": "Pionir Beton Terdekat",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-pionirbeton.html": "Batching Plant Pionirbeton",
  "https://www.betonjayareadymix.com/2018/08/pionir-beton-jakarta.html": "Pionir Beton Jakarta",
  "https://www.betonjayareadymix.com/2018/08/pionir-beton-tangerang.html": "Pionir Beton Tangerang",
  "https://www.betonjayareadymix.com/2018/08/pionir-beton-bekasi.html": "Pionir Beton Bekasi",
  "https://www.betonjayareadymix.com/2018/08/pionir-beton-depok.html": "Pionir Beton Depok",
  "https://www.betonjayareadymix.com/2018/08/pionir-beton-bogor.html": "Pionir Beton Bogor",
 "https://www.betonjayareadymix.com/2021/08/pionir-beton-cor-bogor.html": "Pionir Beton Cor Bogor",

  // Fresh Beton
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-batching-plant.html": "Fresh Beton Batching Plant",
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-terdekat.html": "Fresh Beton Terdekat",
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-bogor.html": "Fresh Beton Bogor",
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-bekasi.html": "Fresh Beton Bekasi",
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-jakarta.html": "Fresh Beton Jakarta",
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-tangerang.html": "Fresh Beton Tangerang",
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-depok.html": "Fresh Beton Depok",
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-sukabumi.html": "Fresh Beton Sukabumi",
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-cianjur.html": "Fresh Beton Cianjur",

  // Karya Beton
  "https://www.betonjayareadymix.com/2018/08/karya-beton-terdekat.html": "Karya Beton Terdekat",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-sudhira.html": "Karya Beton Sudhira",
  "https://www.betonjayareadymix.com/2018/08/batching-plant-karya-beton.html": "Batching Plant Karya Beton",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-readymix.html": "Karya Beton Readymix",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-bekasi.html": "Karya Beton Bekasi",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-cikarang.html": "Karya Beton Cikarang",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-cikarang-utara-kab-bekasi.html": "Karya Beton Cikarang Utara Kab Bekasi",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-jatiasih-kota-bekasi.html": "Karya Beton Jatiasih Kota Bekasi",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-bogor.html": "Karya Beton Bogor",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-depok.html": "Karya Beton Depok",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-jakarta.html": "Karya Beton Jakarta",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-kota-jakarta-utara.html": "Karya Beton Kota Jakarta Utara",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-tanjung-priok.html": "Karya Beton Tanjung Priok",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-penjaringan.html": "Karya Beton Penjaringan",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-tangerang.html": "Karya Beton Tangerang",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-serpong.html": "Karya Beton Serpong",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-kec-legok-kab-tangerang.html": "Karya Beton Kec. Legok Kab. Tangerang",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-kosambi-kab-tangerang.html": "Karya Beton Kosambi Kab. Tangerang",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-kec-balaraja-kab-tangerang.html": "Karya Beton Kec. Balaraja Kab. Tangerang",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-karawang.html": "Karya Beton Karawang",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-kec-karawang-timur.html": "Karya Beton Kec. Karawang Timur",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-kec-karawang-barat.html": "Karya Beton Kec. Karawang Barat",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-kec-klari-kab-karawang.html": "Karya Beton Kec. Klari Kab. Karawang",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-jogja.html": "Karya Beton Jogja",
  "https://www.betonjayareadymix.com/2018/08/karya-beton-bali.html": "Karya Beton Bali",

  // Farika Beton
  "https://www.betonjayareadymix.com/2018/08/plant-farika-beton.html": "Plant Farika Beton",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-terdekat.html": "Farika Beton Terdekat",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-jakarta.html": "Farika Beton Jakarta",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-cengkareng-jakarta-barat.html": "Farika Beton Cengkareng Jakarta Barat",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-kemayoran-jakarta-pusat.html": "Farika Beton Kemayoran Jakarta Pusat",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-cakung-jakarta-timur.html": "Farika Beton Cakung Jakarta Timur",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-bogor.html": "Farika Beton Bogor",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-bekasi.html": "Farika Beton Bekasi",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-cikarang-kab-bekasi.html": "Farika Beton Cikarang Kab Bekasi",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-depok.html": "Farika Beton Depok",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-tangerang.html": "Farika Beton Tangerang",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-cilegon-prov-banten.html": "Farika Beton Cilegon Prov Banten",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-serang.html": "Farika Beton Serang",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-cikande-kab-serang.html": "Farika Beton Cikande Kab Serang",
  "https://www.betonjayareadymix.com/2018/08/farika-beton-kota-dumai-prov-riau.html": "Farika Beton Kota Dumai Prov Riau",

   "https://www.betonjayareadymix.com/2021/08/beton-cor-merah-putih.html": "Beton Cor Merah Putih"
	
};

const urlMappingReadyMixPanduanPost = {
  "https://www.betonjayareadymix.com/2021/03/perbedaan-jayamix-dan-readymix.html": "Perbedaan Jayamix dan Ready Mix",
  "https://www.betonjayareadymix.com/2021/03/ukuran-jayamix.html": "Ukuran Jayamix",
  "https://www.betonjayareadymix.com/2021/03/1-mobil-jayamix-berapa-kubik.html": "1 Mobil Jayamix Berapa Kubik",
  "https://www.betonjayareadymix.com/2021/03/cara-pesan-jayamix.html": "Cara Pesan Jayamix",
  "https://www.betonjayareadymix.com/2021/03/cara-order-ready-mix.html": "Cara Order Ready Mix",
 
  "https://www.betonjayareadymix.com/2018/04/cara-menghitung-kubikasi-beton.html": "Cara menghitung kubikasi beton",
  "https://www.betonjayareadymix.com/2018/04/1-truk-molen-berapa-m3.html": "1 Truk molen berapa m3"



};


const urlMappingDakBetonPost = {

};

const urlMappingPondasiPost = {

};
const urlMappingSloofPost = {
	
};
const urlMappingRingBalokPost = {


};

const urlMappingSemenPortlandPost = {


};

const urlMappingSemenInstanPost = {


};
const urlMappingBesiBangunanPost = {
"https://www.betonjayareadymix.com/2019/04/harga-besi-bangunan.html": "Harga Besi Bangunan"
 
};
const urlMappingBajaKonvensionalPost = {
  "https://www.betonjayareadymix.com/2019/04/harga-besi-h-beam.html": "Harga Besi H Beam",
  "https://www.betonjayareadymix.com/2019/04/harga-besi-pipa.html": "Harga Besi Pipa",
  "https://www.betonjayareadymix.com/2019/04/harga-besi-plat.html": "Harga Besi Plat",
  "https://www.betonjayareadymix.com/2019/04/harga-besi-behel.html": "Harga Besi Behel",
  "https://www.betonjayareadymix.com/2019/04/harga-besi-siku.html": "Harga Besi Siku",
  "https://www.betonjayareadymix.com/2019/04/harga-besi-unp.html": "Harga Besi UNP",
  "https://www.betonjayareadymix.com/2019/04/harga-besi-cnp.html": "Harga Besi CNP",
  "https://www.betonjayareadymix.com/2019/04/harga-besi-hollow.html": "Harga Besi Hollow"

};
const urlMappingBajaRinganStrukturPost = {
"https://www.betonjayareadymix.com/2019/04/baja-ringan-harga.html": "Baja Ringan Harga",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan.html": "Harga Baja Ringan",
  "https://www.betonjayareadymix.com/2019/04/reng-baja-ringan-harga.html": "Reng Baja Ringan Harga",
  "https://www.betonjayareadymix.com/2019/04/harga-reng-baja-ringan-6-meter.html": "Harga Reng Baja Ringan 6 Meter",
  "https://www.betonjayareadymix.com/2019/04/harga-reng-baja-ringan-per-batang.html": "Harga Reng Baja Ringan Per Batang",
  "https://www.betonjayareadymix.com/2019/04/harga-reng-baja-ringan.html": "Harga Reng Baja Ringan",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-reng.html": "Harga Baja Ringan Reng",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-kaso.html": "Harga Baja Ringan Kaso",
  "https://www.betonjayareadymix.com/2019/04/baja-ringan-reng.html": "Baja Ringan Reng",
  "https://www.betonjayareadymix.com/2019/04/baja-ringan-kaso.html": "Baja Ringan Kaso",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-per-kilogram.html": "Harga Baja Ringan Per Kilogram",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-per-lembar.html": "Harga Baja Ringan Per Lembar",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-per-lonjor.html": "Harga Baja Ringan Per Lonjor",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-per-meter.html": "Harga Baja Ringan Per Meter",
  "https://www.betonjayareadymix.com/2019/04/baja-ringan-per-meter.html": "Baja Ringan Per Meter",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-per-batang.html": "Harga Baja Ringan Per Batang",
  "https://www.betonjayareadymix.com/2019/04/baja-ringan-per-batang.html": "Baja Ringan Per Batang",
	
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-murah.html": "Harga Baja Ringan Murah",
  "https://www.betonjayareadymix.com/2019/04/baja-ringan.html": "Baja Ringan",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan.html": "Harga Baja Ringan",
"https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-termurah.html": "Harga Baja Ringan Termurah",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-kaso.html": "Harga Baja Ringan Kaso",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-lembaran.html": "Harga Baja Ringan Lembaran",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-saat-ini.html": "Harga Baja Ringan Saat Ini",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-lengkap.html": "Harga Baja Ringan Lengkap",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-075-full.html": "Harga Baja Ringan 0.75 Full",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-full.html": "Harga Baja Ringan Full",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-untuk-eternit.html": "Harga Baja Ringan Untuk Eternit",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-segi-empat.html": "Harga Baja Ringan Segi Empat",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-dan-reng.html": "Harga Baja Ringan dan Reng",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-cnp.html": "Harga Baja Ringan CNP",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-canal-c-75.html": "Harga Baja Ringan Canal C75",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-cnp-075.html": "Harga Baja Ringan CNP 0.75",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-c75.html": "Harga Baja Ringan C75",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-buat-kanopi.html": "Harga Baja Ringan Buat Kanopi",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-buat-atap-rumah.html": "Harga Baja Ringan Buat Atap Rumah",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-bekas-per-kilo.html": "Harga Baja Ringan Bekas per Kilo",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-bekas.html": "Harga Baja Ringan Bekas",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-batangan.html": "Harga Baja Ringan Batangan",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-atap-rumah.html": "Harga Baja Ringan Atap Rumah",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-atap-genteng.html": "Harga Baja Ringan Atap Genteng",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-atap-spandek-per-meter.html": "Harga Baja Ringan Atap Spandek per Meter",
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-atap-spandek.html": "Harga Baja Ringan Atap Spandek",
	
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-di-jakarta.html": "Harga Baja Ringan di Jakarta",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-bogor.html": "Harga Baja Ringan Bogor",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-depok.html": "Harga Baja Ringan Depok",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-tangerang.html": "Harga Baja Ringan Tangerang",
	
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-bekasi.html": "Harga Baja Ringan Bekasi",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-kota-bekasi.html": "Harga Baja Ringan Kota Bekasi",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cikarang.html": "Harga Baja Ringan Cikarang",
	
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-karawang.html": "Harga Baja Ringan Karawang",
	
"https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-sumedang-utara.html": "Harga Baja Ringan Sumedang Utara",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cileunyi.html": "Harga Baja Ringan Cileunyi",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cimahi.html": "Harga Baja Ringan Cimahi",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-caringin.html": "Harga Baja Ringan Caringin",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-karawang-barat.html": "Harga Baja Ringan Karawang Barat",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-gunung-putri.html": "Harga Baja Ringan Gunung Putri",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-sukaraja.html": "Harga Baja Ringan Sukaraja",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-karawang-timur.html": "Harga Baja Ringan Karawang Timur",

"https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-bandung.html": "Harga Baja Ringan Bandung",

    "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-garut.html": "Harga Baja Ringan Garut",
	
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-purwakarta.html": "Harga Baja Ringan Purwakarta",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cikampek.html": "Harga Baja Ringan Cikampek",
	
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cirebon.html": "Harga Baja Ringan Cirebon",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-telukjambe-timur.html": "Harga Baja Ringan Telukjambe Timur",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-jatibarang.html": "Harga Baja Ringan Jatibarang",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-parung-panjang.html": "Harga Baja Ringan Parung Panjang",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cibinong.html": "Harga Baja Ringan Cibinong",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cileungsi.html": "Harga Baja Ringan Cileungsi",
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-bojong-gede.html": "Harga Baja Ringan Bojong Gede",
	
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-karawang-timur.html": "Baja Ringan Harga Karawang Timur",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-gunung-putri.html": "Baja Ringan Harga Gunung Putri",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-ciomas.html": "Baja Ringan Harga Ciomas",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-kota-bekasi.html": "Baja Ringan Harga Kota Bekasi",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-cikampek.html": "Baja Ringan Harga Cikampek",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-lembang.html": "Baja Ringan Harga Lembang",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-cianjur.html": "Baja Ringan Harga Cianjur",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-caringin.html": "Baja Ringan Harga Caringin",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-purwakarta.html": "Baja Ringan Harga Purwakarta",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-cirebon.html": "Baja Ringan Harga Cirebon",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-cimahi.html": "Baja Ringan Harga Cimahi",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-bogor.html": "Baja Ringan Harga Bogor",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-dramaga.html": "Baja Ringan Harga Dramaga",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-cibinong.html": "Baja Ringan Harga Cibinong",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-cileungsi.html": "Baja Ringan Harga Cileungsi",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-telukjambe-timur.html": "Baja Ringan Harga Telukjambe Timur",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-bojong-gede.html": "Baja Ringan Harga Bojong Gede",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-parung-panjang.html": "Baja Ringan Harga Parung Panjang",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-kemang.html": "Baja Ringan Harga Kemang",
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-tajur-halang.html": "Baja Ringan Harga Tajur Halang",

	
  "https://www.betonjayareadymix.com/2019/05/reng-baja-ringan-harga-bandung.html": "Reng Baja Ringan Harga Bandung",
  "https://www.betonjayareadymix.com/2019/05/reng-baja-ringan-harga-bogor.html": "Reng Baja Ringan Harga Bogor",
  "https://www.betonjayareadymix.com/2019/05/reng-baja-ringan-harga-depok.html": "Reng Baja Ringan Harga Depok",
  "https://www.betonjayareadymix.com/2019/05/reng-baja-ringan-harga-kota-bekasi.html": "Reng Baja Ringan Harga Kota Bekasi",
  "https://www.betonjayareadymix.com/2019/05/reng-baja-ringan-harga-bekasi.html": "Reng Baja Ringan Harga Bekasi",
  "https://www.betonjayareadymix.com/2019/05/reng-baja-ringan-harga-sukabumi.html": "Reng Baja Ringan Harga Sukabumi"

  };
const urlMappingBekistingPost = {
 // "https://www.betonjayareadymix.com/2019/04/harga-besi-aluminium.html": "Harga Besi Aluminium"

};
const urlMappingAluminiumPost = {
  "https://www.betonjayareadymix.com/2019/04/harga-besi-aluminium.html": "Harga Besi Aluminium"

};

const urlMappingBajaTulanganPost = {
  "https://www.betonjayareadymix.com/2019/04/harga-besi-beton.html": "Harga Besi Beton",
    "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-per-kg.html": "Harga Besi Beton per Kg",
  "https://www.betonjayareadymix.com/2019/05/daftar-harga-besi-beton.html": "Daftar Harga Besi Beton",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-12mm-per-batang.html": "Harga Besi Beton 12mm per Batang",
    "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-garut.html": "Harga Besi Beton Garut",
    "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-bandung.html": "Harga Besi Beton Bandung",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-karawang.html": "Harga Besi Beton Karawang",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-bekasi.html": "Harga Besi Beton Bekasi",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-tangerang.html": "Harga Besi Beton Tangerang",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-depok.html": "Harga Besi Beton Depok",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-bogor.html": "Harga Besi Beton Bogor",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-jakarta.html": "Harga Besi Beton Jakarta",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-10mm.html": "Harga Besi Beton 10mm",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-12mm.html": "Harga Besi Beton 12mm",

	  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-per-kg.html": "Harga Besi Beton Ulir per Kg",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-10-mm.html": "Harga Besi Beton Ulir 10 mm",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-12-mm.html": "Harga Besi Beton Ulir 12 mm",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-13-mm.html": "Harga Besi Beton Ulir 13 mm",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-16-mm.html": "Harga Besi Beton Ulir 16 mm",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-per-batang.html": "Harga Besi Beton Ulir per Batang",
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-12-mm-per-batang.html": "Harga Besi Beton Ulir 12 mm per Batang"

};

const urlMappingWiremeshPost = {
  "https://www.betonjayareadymix.com/2019/04/harga-besi-wiremesh.html": "Harga Besi Wiremesh"

};
const urlMappingBondexPost = {


};
const urlMappingBesiBetonUlirPost = {

};
const urlMappingBesiBetonPolosPost = {


};
const urlMappingBekistingBajaPost = {


};
const urlMappingBekistingKayuPost = {


};
const urlMappingScaffoldingPost = {


};
const urlMappingPerekatBetonEpoxyPost = {

};

const urlMappingMortarStrukturalPost = {

};

const urlMappingSemenPutihPost = {

};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsMaterialKonsStukturPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsMaterialKonsStukturPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsMaterialKonsStukturPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsMaterialKonsStukturPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsMaterialKonsStukturPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrl = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1
  
     // Menemukan elemen menggunakan ID
     var MaterialKonsStukturPost = document.getElementById("MaterialKonsStukturPost");
    if (!MaterialKonsStukturPost) {
        console.error("elemen Id MaterialKonsStukturPost kondisi terhapus");
        return;
    }
     var MaterialKonstruksiStukturPostLink = document.getElementById("MaterialKonstruksiStukturPost");
     var MaterialStrukturBangunanPostLink = document.getElementById("MaterialStrukturBangunanPost");

     var DakBetonLink = document.getElementById("DakBeton");
     var PondasiLink = document.getElementById("Pondasi");
     var BekistingLink = document.getElementById("Bekisting");
     var AluminiumLink = document.getElementById("Aluminium");
     var RingBalokLink = document.getElementById("RingBalok");
     var SloofLink = document.getElementById("Sloof");
     var readyMixLink = document.getElementById("readyMix");
		//sub ready mix
		var ReadyMixLokasiPostLink = document.getElementById("ReadyMixLokasiPost");
	    var ReadyMixMutuPostLink = document.getElementById("ReadyMixMutuPost");
	    var ReadyMixPlantPostLink = document.getElementById("ReadyMixPlantPost");
	    var ReadyMixKegunaanPostLink = document.getElementById("ReadyMixKegunaanPost");
	    var ReadyMixPanduanPostLink = document.getElementById("ReadyMixPanduanPost");
	
     var SemenPortlandLink = document.getElementById("SemenPortland");
     var BesiBetonUlirLink = document.getElementById("BesiBetonUlir");
     var BesiBetonPolosLink = document.getElementById("BesiBetonPolos");
     var WiremeshLink = document.getElementById("Wiremesh");
     var BondexLink = document.getElementById("Bondex");
     var BesiBangunanLink = document.getElementById("BesiBangunan");
     var BajaKonvensionalLink = document.getElementById("BajaKonvensional");
     var BajaRinganStrukturLink = document.getElementById("BajaRinganStruktur");
     var BajaTulanganLink = document.getElementById("BajaTulangan");
     var ScaffoldingLink = document.getElementById("Scaffolding");
     var BekistingBajaLink = document.getElementById("BekistingBaja");
     var SemenInstanLink = document.getElementById("SemenInstan");
     var SemenPutihLink = document.getElementById("SemenPutih");
     var BekistingKayuLink = document.getElementById("BekistingKayu");
     var MortarStrukturalLink = document.getElementById("MortarStruktural");
     var PerekatBetonEpoxyLink = document.getElementById("PerekatBetonEpoxy");
     var pageNameMaterialKonsStukturPost = document.getElementById("pageNameMaterialKonsStukturPost");
 
     // Default untuk menyembunyikan elemen
     //JasaKonstruksiPerbaikan.remove(); // Menghapus elemen tersebut
  
     MaterialKonsStukturPost.style.visibility = 'hidden';
     MaterialKonstruksiStukturPostLink.style.visibility = 'hidden';
     MaterialStrukturBangunanPostLink.style.visibility = 'hidden';
     DakBetonLink.style.visibility = 'hidden';
     PondasiLink.style.visibility = 'hidden';
     BekistingLink.style.visibility = 'hidden';
     AluminiumLink.style.visibility = 'hidden';
     RingBalokLink.style.visibility = 'hidden';
     SloofLink.style.visibility = 'hidden';
     readyMixLink.style.visibility = 'hidden';
		ReadyMixLokasiPostLink.style.visibility = 'hidden';
		ReadyMixMutuPostLink.style.visibility = 'hidden';
		ReadyMixPlantPostLink.style.visibility = 'hidden';
		ReadyMixKegunaanPostLink.style.visibility = 'hidden';
		ReadyMixPanduanPostLink.style.visibility = 'hidden';

     SemenPortlandLink.style.visibility = 'hidden';
     BesiBetonUlirLink.style.visibility = 'hidden';
     BesiBetonPolosLink.style.visibility = 'hidden';
     WiremeshLink.style.visibility = 'hidden';
     BondexLink.style.visibility = 'hidden';
     BesiBangunanLink.style.visibility = 'hidden';
     BajaKonvensionalLink.style.visibility = 'hidden';
     BajaRinganStrukturLink.style.visibility = 'hidden';
     BajaTulanganLink.style.visibility = 'hidden';
     ScaffoldingLink.style.visibility = 'hidden';
     BekistingBajaLink.style.visibility = 'hidden';
     SemenInstanLink.style.visibility = 'hidden';
     SemenPutihLink.style.visibility = 'hidden';
     BekistingKayuLink.style.visibility = 'hidden';
     MortarStrukturalLink.style.visibility = 'hidden';
     PerekatBetonEpoxyLink.style.visibility = 'hidden';
     pageNameMaterialKonsStukturPost.textContent = "";
  
    console.log('Material Konstruksi:', MaterialKonstruksiStukturPostLink);
    console.log('Ready Mix:', readyMixLink);
    console.log('Page Name Span:', pageNameMaterialKonsStukturPost);

    if (!MaterialKonstruksiStukturPostLink || !readyMixLink || !pageNameMaterialKonsStukturPost) {
        console.error("Salah satu elemen tidak ditemukan!");
        return;
    }
	
if (urlMappingDakBetonPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('DakBeton');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
	
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	  
   
    //hapus elemen lain nya selain RingBalok
     removeCondition('Bekisting');
     removeCondition('Pondasi');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        DakBetonLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingDakBetonPost[cleanUrl];
    }
if (urlMappingBekistingPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('Bekisting');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	  
   
    //hapus elemen lain nya selain RingBalok
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BekistingLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBekistingPost[cleanUrl];
    }
if (urlMappingAluminiumPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('Aluminium');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	  
   
    //hapus elemen lain nya selain RingBalok
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        AluminiumLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingAluminiumPost[cleanUrl];
    }
if (urlMappingRingBalokPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('RingBalok');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	  
   
    //hapus elemen lain nya selain RingBalok
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('Sloof');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        RingBalokLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingRingBalokPost[cleanUrl];
    }
if (urlMappingSloofPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('Sloof');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	  
   
    //hapus elemen lain nya selain SLOOF
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        SloofLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingSloofPost[cleanUrl];
    }
//SUB PILLAR READY MIX
if (urlMappingReadyMixLokasiPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('readyMix');
	
       restoreCondition('ReadyMixLokasiPost');
       
	
	
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	  
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');

	   //hapus semua elemen sub readymix kecuali ready mix lokasi
     	//removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        readyMixLink.style.visibility = 'visible';
        ReadyMixLokasiPostLink.style.visibility = 'visible';
	
        pageNameMaterialKonsStukturPost.textContent = urlMappingReadyMixLokasiPost[cleanUrl];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingReadyMixLokasiPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Ready Mix Beton Cor Jayamix Minimix",
                   "item": "https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Ready Mix Lokasi",
                   "item": "https://www.betonjayareadymix.com/p/ready-mix-lokasi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingReadyMixLokasiPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingReadyMixMutuPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('readyMix');
	
       restoreCondition('ReadyMixMutuPost');
       
	
	
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	  
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');

	   //hapus semua elemen sub readymix kecuali ready mix lokasi
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        readyMixLink.style.visibility = 'visible';
        ReadyMixMutuPostLink.style.visibility = 'visible';
	
        pageNameMaterialKonsStukturPost.textContent = urlMappingReadyMixMutuPost[cleanUrl];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingReadyMixMutuPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Ready Mix Beton Cor Jayamix Minimix",
                   "item": "https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Ready Mix Mutu",
                   "item": "https://www.betonjayareadymix.com/p/ready-mix-mutu.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingReadyMixMutuPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingReadyMixPlantPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('readyMix');
	
       restoreCondition('ReadyMixPlantPost');
       
	
	
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	  
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');

	   //hapus semua elemen sub readymix kecuali ready mix lokasi
     	//removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        readyMixLink.style.visibility = 'visible';
        ReadyMixPlantPostLink.style.visibility = 'visible';
	
        pageNameMaterialKonsStukturPost.textContent = urlMappingReadyMixPlantPost[cleanUrl];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingReadyMixPlantPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Ready Mix Beton Cor Jayamix Minimix",
                   "item": "https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Ready Mix Plant",
                   "item": "https://www.betonjayareadymix.com/p/ready-mix-plant.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingReadyMixPlantPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingReadyMixKegunaanPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('readyMix');
	
       restoreCondition('ReadyMixKegunaanPost');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	  
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');

	   //hapus semua elemen sub readymix kecuali ready mix lokasi
     	//removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixPanduanPost');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        readyMixLink.style.visibility = 'visible';
        ReadyMixKegunaanPostLink.style.visibility = 'visible';
	
        pageNameMaterialKonsStukturPost.textContent = urlMappingReadyMixKegunaanPost[cleanUrl];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingReadyMixKegunaanPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Ready Mix Beton Cor Jayamix Minimix",
                   "item": "https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Ready Mix Kegunaan",
                   "item": "https://www.betonjayareadymix.com/p/ready-mix-kegunaan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingReadyMixKegunaanPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingReadyMixPanduanPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('readyMix');
	
       restoreCondition('ReadyMixPanduanPost');
       

    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	  
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');

	   //hapus semua elemen sub readymix kecuali ready mix lokasi
     	//removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixLokasiPost');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        readyMixLink.style.visibility = 'visible';
        ReadyMixPanduanPostLink.style.visibility = 'visible';
	
        pageNameMaterialKonsStukturPost.textContent = urlMappingReadyMixPanduanPost[cleanUrl];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingReadyMixPanduanPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Ready Mix Beton Cor Jayamix Minimix",
                   "item": "https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Ready Mix Panduan",
                   "item": "https://www.betonjayareadymix.com/p/ready-mix-panduan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingReadyMixPanduanPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

//AKHIR SUB PILLAR READY MIX
 if (urlMappingSemenPortlandPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('SemenPortland');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        SemenPortlandLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingSemenPortlandPost[cleanUrl];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingSemenPortlandPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Semen Portland",
                   "item": "https://www.betonjayareadymix.com/p/semen-portland.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingSemenPortlandPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingSemenInstanPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('SemenInstan');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        SemenInstanLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingSemenInstanPost[cleanUrl];
    }

 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingSemenInstanPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Semen Instan",
                   "item": "https://www.betonjayareadymix.com/p/semen-instan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingSemenInstanPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingBajaKonvensionalPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BajaKonvensional');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('BesiBangunan');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BajaKonvensionalLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBajaKonvensionalPost[cleanUrl];
    } 

 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBajaKonvensionalPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Baja Konvensional",
                   "item": "https://www.betonjayareadymix.com/p/baja-konvensional.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBajaKonvensionalPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingBajaRinganStrukturPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BajaRinganStruktur');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BajaRinganStrukturLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBajaRinganStrukturPost[cleanUrl];
    }

 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBajaRinganStrukturPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Baja Ringan Struktur",
                   "item": "https://www.betonjayareadymix.com/p/baja-ringan-struktur.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBajaRinganStrukturPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingBajaTulanganPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BajaTulangan');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('BesiBangunan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BajaTulanganLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBajaTulanganPost[cleanUrl];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBajaTulanganPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Baja Tulangan",
                   "item": "https://www.betonjayareadymix.com/p/baja-tulangan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBajaTulanganPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingWiremeshPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('Wiremesh');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Bondex');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        WiremeshLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingWiremeshPost[cleanUrl];
    }

 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingWiremeshPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Wiremesh",
                   "item": "https://www.betonjayareadymix.com/p/wiremesh.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingWiremeshPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingBondexPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('Bondex');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BondexLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBondexPost[cleanUrl];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBondexPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Bondex",
                   "item": "https://www.betonjayareadymix.com/p/bondex.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBondexPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingBesiBetonUlirPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BesiBetonUlir');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BesiBetonUlirLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBesiBetonUlirPost[cleanUrl];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBesiBetonUlirPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Besi Beton Ulir",
                   "item": "https://www.betonjayareadymix.com/p/besi-beton-ulir.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBesiBetonUlirPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingBesiBetonPolosPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BesiBetonPolos');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BesiBetonPolosLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBesiBetonPolosPost[cleanUrl];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBesiBetonPolosPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Besi Beton Polos",
                   "item": "https://www.betonjayareadymix.com/p/besi-beton-polos.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBesiBetonPolosPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingBekistingBajaPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BekistingBaja');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BekistingBajaLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBekistingBajaPost[cleanUrl];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBekistingBajaPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Bekisting",
                   "item": "https://www.betonjayareadymix.com/p/bekisting.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBekistingBajaPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingBekistingKayuPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BekistingKayu');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BekistingKayuLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBekistingKayuPost[cleanUrl];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBekistingKayuPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Bekisting Kayu",
                   "item": "https://www.betonjayareadymix.com/p/bekisting-kayu.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBekistingKayuPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingScaffoldingPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('Scaffolding');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        ScaffoldingLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingScaffoldingPost[cleanUrl];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingScaffoldingPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Scaffolding",
                   "item": "https://www.betonjayareadymix.com/p/scaffolding.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingScaffoldingPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingPerekatBetonEpoxyPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('PerekatBetonEpoxy');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        PerekatBetonEpoxyLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingPerekatBetonEpoxyPost[cleanUrl];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerekatBetonEpoxyPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Perekat Beton Epoxy",
                   "item": "https://www.betonjayareadymix.com/p/perekat-beton-epoxy.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingPerekatBetonEpoxyPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingMortarStrukturalPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('MortarStruktural');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('SemenPutih');
     removeCondition('BekistingKayu');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        MortarStrukturalLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingMortarStrukturalPost[cleanUrl];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingMortarStrukturalPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Mortar Struktural",
                   "item": "https://betonjayareadymix.com/p/mortar-struktural.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingMortarStrukturalPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingSemenPutihPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('SemenPutih');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('BesiBangunan');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        SemenPutihLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingSemenPutihPost[cleanUrl];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingSemenPutihPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Semen Putih",
                   "item": "https://www.betonjayareadymix.com/p/semen-putih.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingSemenPutihPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingBesiBangunanPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('BesiBangunan');
      
    // hapus ID DIV Lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	   removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
   
    //hapus elemen lain nya selain READY MIX
     removeCondition('DakBeton');
     removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     removeCondition('RingBalok');
     removeCondition('Sloof');
     removeCondition('SemenPortland');
     removeCondition('BesiBetonUlir');
     removeCondition('BesiBetonPolos');
     removeCondition('Wiremesh');
     removeCondition('Bondex');
     removeCondition('SemenPutih');
     removeCondition('BajaKonvensional');
     removeCondition('BajaRinganStruktur');
     removeCondition('BajaTulangan');
     removeCondition('Scaffolding');
     removeCondition('BekistingBaja');
     removeCondition('SemenInstan');
     removeCondition('readyMix');
	   //hapus semua elemen sub readymix
     	removeCondition('ReadyMixLokasiPost');
     	removeCondition('ReadyMixMutuPost');
     	removeCondition('ReadyMixPlantPost');
     	removeCondition('ReadyMixKegunaanPost');
     	removeCondition('ReadyMixPanduanPost');
     removeCondition('BekistingKayu');
     removeCondition('MortarStruktural');
     removeCondition('PerekatBetonEpoxy');
    
       // restoreCondition('MaterialKonsStukturPost');
       
       MaterialKonsStukturPost.style.visibility = 'visible';
       MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
       
        MaterialStrukturBangunanPostLink.style.visibility = 'visible';
        BesiBangunanLink.style.visibility = 'visible';
        pageNameMaterialKonsStukturPost.textContent = urlMappingBesiBangunanPost[cleanUrl];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBesiBangunanPost[cleanUrl]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
	       {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Material Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/material-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Material Struktur Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/material-struktur-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Besi Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/besi-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBesiBangunanPost[cleanUrl],
                   "item": cleanUrl
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   });
