 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan

// ============================================================
// MAPPING - READY MIX LOKASI (MONEY_CHILD)
// ============================================================

const urlMappingReadyMixLokasiPost = {
  // ============================================================
  // [MONEY_MASTER] - LAYANAN TERDEKAT (GENERAL)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Ready Mix > [Halaman]
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/jayamix-terdekat.html": "Jayamix Terdekat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2021/03/ready-mix-terdekat.html": "Ready Mix Terdekat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-terdekat.html": "Beton Ready Mix Terdekat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2021/08/cor-beton-terdekat.html": "Cor Beton Terdekat",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_CHILD] - JAYAMIX PER KOTA/KABUPATEN
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Ready Mix > Jayamix [Kota]
  // ============================================================
  "https://www.betonjayareadymix.com/2021/08/jayamix-pangandaran.html": "Jayamix Pangandaran",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/jayamix-sumedang.html": "Jayamix Sumedang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/jayamix-sukabumi.html": "Jayamix Sukabumi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/jayamix-karawang.html": "Jayamix Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/jayamix-kuningan.html": "Jayamix Kuningan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/jayamix-tasikmalaya.html": "Jayamix Tasikmalaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/jayamix-subang.html": "Jayamix Subang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/jayamix-blitar.html": "Jayamix Blitar",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/jayamix-klaten.html": "Jayamix Klaten",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/jayamix-jakarta.html": "Jayamix Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/12/jayamix-serang.html": "Jayamix Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/jayamix-purwakarta.html": "Jayamix Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-bogor.html": "Jayamix Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-bekasi.html": "Jayamix Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-cikarang.html": "Jayamix Cikarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-depok.html": "Jayamix Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-cibubur.html": "Jayamix Cibubur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-bandung.html": "Jayamix Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-cirebon.html": "Jayamix Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-cianjur.html": "Jayamix Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-cikande.html": "Jayamix Cikande",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-cilegon.html": "Jayamix Cilegon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-ciamis.html": "Jayamix Ciamis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-garut.html": "Jayamix Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/jayamix-tangerang.html": "Jayamix Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/jayamix-indramayu.html": "Jayamix Indramayu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-jombang.html": "Jayamix Jombang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-boyolali.html": "Jayamix Boyolali",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-cilacap.html": "Jayamix Cilacap",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-pati.html": "Jayamix Pati",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-gresik.html": "Jayamix Gresik",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-jogja.html": "Jayamix Jogja",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-surabaya.html": "Jayamix Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-semarang.html": "Jayamix Semarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-kediri.html": "Jayamix Kediri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-magelang.html": "Jayamix Magelang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-cileungsi.html": "Jayamix Cileungsi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/jayamix-sidoarjo.html": "Jayamix Sidoarjo",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/jayamix-malang.html": "Jayamix Malang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/jayamix-majalengka.html": "Jayamix Majalengka",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - READY MIX PER KOTA/KABUPATEN
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil di breadcrumb)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/ready-mix-karawang.html": "Ready Mix Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-sukabumi.html": "Ready Mix Sukabumi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-purwakarta.html": "Ready Mix Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/12/ready-mix-serang.html": "Ready Mix Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-surabaya.html": "Ready Mix Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-bogor.html": "Ready Mix Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-holcim-sidoarjo.html": "Ready Mix Holcim Sidoarjo",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/holcim-readymix-surabaya.html": "Holcim Readymix Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-blitar.html": "Ready Mix Blitar",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-sidoarjo.html": "Ready Mix Sidoarjo",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-garut.html": "Ready Mix Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-bandung.html": "Ready Mix Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-tasikmalaya.html": "Ready Mix Tasikmalaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-subang.html": "Ready Mix Subang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-sumedang.html": "Ready Mix Sumedang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-depok.html": "Ready Mix Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-bekasi.html": "Ready Mix Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-pangandaran.html": "Ready Mix Pangandaran",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-kuningan.html": "Ready Mix Kuningan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-jakarta.html": "Ready Mix Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-tangerang.html": "Ready Mix Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-cirebon.html": "Ready Mix Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-cianjur.html": "Ready Mix Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-ciamis.html": "Ready Mix Ciamis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-cilegon.html": "Ready Mix Cilegon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-cikande.html": "Ready Mix Cikande",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-indramayu.html": "Ready Mix Indramayu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-malang.html": "Ready Mix Malang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-cileungsi.html": "Ready Mix Cileungsi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-cikarang.html": "Ready Mix Cikarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-gresik.html": "Ready Mix Gresik",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-cilacap.html": "Ready Mix Cilacap",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-klaten.html": "Ready Mix Klaten",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-magelang.html": "Ready Mix Magelang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-majalengka.html": "Ready Mix Majalengka",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-jombang.html": "Ready Mix Jombang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-jogja.html": "Ready Mix Jogja",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-pati.html": "Ready Mix Pati",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-ambon.html": "Ready Mix Ambon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-makassar.html": "Ready Mix Makassar",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-kediri.html": "Ready Mix Kediri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-semarang.html": "Ready Mix Semarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/ready-mix-cor-bandung.html": "Ready Mix Cor Bandung",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - BETON READY MIX PER KOTA
  // 🧠 TYPE: MONEY_CHILD
  // ============================================================
  "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-majalengka.html": "Beton Ready Mix Majalengka",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-tasikmalaya.html": "Beton Ready Mix Tasikmalaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-garut.html": "Beton Ready Mix Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-sukabumi.html": "Beton Ready Mix Sukabumi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-purwakarta.html": "Beton Ready Mix Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-sumedang.html": "Beton Ready Mix Sumedang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-karawang.html": "Beton Ready Mix Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/beton-ready-mix-subang.html": "Beton Ready Mix Subang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-sidoarjo.html": "Beton Ready Mix Sidoarjo",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-surabaya.html": "Beton Ready Mix Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-semarang.html": "Beton Ready Mix Semarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-jogja.html": "Beton Ready Mix Jogja",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-tangerang.html": "Beton Ready Mix Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-jakarta.html": "Beton Ready Mix Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-bogor.html": "Beton Ready Mix Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/beton-ready-mix-bandung.html": "Beton Ready Mix Bandung",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - COR BETON PER KOTA
  // 🧠 TYPE: MONEY_CHILD
  // ============================================================
  "https://www.betonjayareadymix.com/2021/08/cor-beton-bekasi.html": "Cor Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/cor-beton-bandung.html": "Cor Beton Bandung",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - HARGA BETON COR PER KOTA
  // 🧠 TYPE: MONEY_CHILD
  // ============================================================
  "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-jabodetabek.html": "Harga Beton Cor Jabodetabek",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-beton-cor-bogor.html": "Harga Beton Cor Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/harga-cor-beton-ready-mix-jakarta.html": "Harga Cor Beton Ready Mix Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-bekasi.html": "Harga Beton Cor Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-tangerang.html": "Harga Beton Cor Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/12/harga-beton-cor-serang.html": "Harga Beton Cor Serang",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - HARGA JAYAMIX PER KOTA/KECAMATAN
  // 🧠 TYPE: MONEY_CHILD
  // ============================================================
  "https://www.betonjayareadymix.com/2021/09/harga-jayamix-pati.html": "Harga Jayamix Pati",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/09/harga-jayamix-klaten.html": "Harga Jayamix Klaten",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/09/harga-jayamix-gresik.html": "Harga Jayamix Gresik",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/09/harga-jayamix-sidoarjo.html": "Harga Jayamix Sidoarjo",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-jombang.html": "Harga Jayamix Jombang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-jawa-timur.html": "Harga Jayamix Jawa Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-tangerang.html": "Harga Jayamix Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-bogor.html": "Harga Jayamix Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-garut.html": "Harga Jayamix Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-bandung.html": "Harga Jayamix Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-bekasi.html": "Harga Jayamix Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cikarang.html": "Harga Jayamix Cikarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cibinong.html": "Harga Jayamix Cibinong",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-beton-jayamix-cibinong.html": "Harga Beton Jayamix Cibinong",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cileungsi.html": "Harga Jayamix Cileungsi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cilegon.html": "Harga Jayamix Cilegon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-ciputat.html": "Harga Jayamix Ciputat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cinere.html": "Harga Jayamix Cinere",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-indramayu.html": "Harga Jayamix Indramayu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-depok.html": "Harga Jayamix Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/09/harga-jayamix-magelang.html": "Harga Jayamix Magelang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/09/harga-jayamix-malang.html": "Harga Jayamix Malang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/09/harga-jayamix-kediri.html": "Harga Jayamix Kediri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/09/harga-jayamix-cilacap.html": "Harga Jayamix Cilacap",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-kuningan.html": "Harga Jayamix Kuningan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-surabaya.html": "Harga Jayamix Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-blitar.html": "Harga Jayamix Blitar",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-boyolali.html": "Harga Jayamix Boyolali",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-semarang.html": "Harga Jayamix Semarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-cianjur.html": "Harga Jayamix Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-cirebon.html": "Harga Jayamix Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-pangandaran.html": "Harga Jayamix Pangandaran",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-karawang.html": "Harga Jayamix Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-ciamis.html": "Harga Jayamix Ciamis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-purwakarta.html": "Harga Jayamix Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-subang.html": "Harga Jayamix Subang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-sumedang.html": "Harga Jayamix Sumedang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-sukabumi.html": "Harga Jayamix Sukabumi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-majalengka.html": "Harga Jayamix Majalengka",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-tasikmalaya.html": "Harga Jayamix Tasikmalaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/12/harga-jayamix-bogor.html": "Harga Jayamix Bogor",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - HARGA READY MIX PER KOTA/KECAMATAN
  // 🧠 TYPE: MONEY_CHILD
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-gresik.html": "Harga Ready Mix Gresik",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-cikarang.html": "Harga Ready Mix Cikarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-jakarta.html": "Harga Ready Mix Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-tangerang.html": "Harga Ready Mix Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-bekasi.html": "Harga Ready Mix Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-depok.html": "Harga Ready Mix Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-bogor.html": "Harga Ready Mix Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-cibinong.html": "Harga Ready Mix Cibinong",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-pati.html": "Harga Ready Mix Pati",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-klaten.html": "Harga Ready Mix Klaten",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-magelang.html": "Harga Ready Mix Magelang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-boyolali.html": "Harga Ready Mix Boyolali",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-jogja.html": "Harga Ready Mix Jogja",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-surabaya.html": "Harga Ready Mix Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-cilegon.html": "Harga Ready Mix Cilegon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-sumedang.html": "Harga Ready Mix Sumedang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-tasikmalaya.html": "Harga Ready Mix Tasikmalaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-karawang.html": "Harga Ready Mix Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-cileungsi.html": "Harga Ready Mix Cileungsi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-cilacap.html": "Harga Ready Mix Cilacap",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-readymix-bandung.html": "Harga Readymix Bandung",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - HARGA BETON READY MIX PER KOTA
  // 🧠 TYPE: MONEY_CHILD
  // ============================================================
  "https://www.betonjayareadymix.com/2018/05/harga-beton-ready-mix-surabaya.html": "Harga Beton Ready Mix Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-bandung.html": "Harga Beton Ready Mix Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-bogor.html": "Harga Beton Ready Mix Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-karawang.html": "Harga Beton Ready Mix Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-depok.html": "Harga Beton Ready Mix Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-cikarang.html": "Harga Beton Ready Mix Cikarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-cirebon.html": "Harga Beton Ready Mix Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-garut.html": "Harga Beton Ready Mix Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-majalengka.html": "Harga Beton Ready Mix Majalengka",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-subang.html": "Harga Beton Ready Mix Subang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-sukabumi.html": "Harga Beton Ready Mix Sukabumi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-ciamis.html": "Harga Beton Ready Mix Ciamis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-cianjur.html": "Harga Beton Ready Mix Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-indramayu.html": "Harga Beton Ready Mix Indramayu",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - HARGA BETON JAYAMIX
  // 🧠 TYPE: MONEY_CHILD
  // ============================================================
  "https://www.betonjayareadymix.com/2021/08/harga-beton-jayamix-jakarta.html": "Harga Beton Jayamix Jakarta",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - HARGA COR BETON
  // 🧠 TYPE: MONEY_CHILD
  // ============================================================
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-ready-mix-bandung.html": "Harga Cor Beton Ready Mix Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-di-jakarta.html": "Harga Cor Beton di Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-bandung.html": "Harga Cor Beton Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-depok.html": "Harga Cor Beton Depok",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - HARGA READY MIX (LANJUTAN)
  // 🧠 TYPE: MONEY_CHILD
  // ============================================================
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-kuningan.html": "Harga Ready Mix Kuningan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-pangandaran.html": "Harga Ready Mix Pangandaran",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-indramayu.html": "Harga Ready Mix Indramayu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-cirebon.html": "Harga Ready Mix Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-cianjur.html": "Harga Ready Mix Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-ciamis.html": "Harga Ready Mix Ciamis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-sukabumi.html": "Harga Ready Mix Sukabumi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-subang.html": "Harga Ready Mix Subang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-majalengka.html": "Harga Ready Mix Majalengka",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-purwakarta.html": "Harga Ready Mix Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-garut.html": "Harga Ready Mix Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-blitar.html": "Harga Ready Mix Blitar",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-kediri.html": "Harga Ready Mix Kediri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-sidoarjo.html": "Harga Ready Mix Sidoarjo",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-malang.html": "Harga Ready Mix Malang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-semarang.html": "Harga Ready Mix Semarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/09/harga-ready-mix-jombang.html": "Harga Ready Mix Jombang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-jogja.html": "Harga Jayamix Jogja",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/ready-mix-boyolali.html": "Ready Mix Boyolali",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - HARGA PER KECAMATAN (KARAWANG, TANGERANG, BEKASI, BOGOR, JAKARTA, DEPOK, SERANG)
  // 🧠 TYPE: MONEY_CHILD (SEMUA)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-tegalwaru-kab-karawang.html": "Harga Jayamix Tegalwaru Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-tegalwaru-kab-karawang.html": "Harga Ready Mix Tegalwaru Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-talagasari-kab-karawang.html": "Harga Jayamix Talagasari Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-talagasari-kab-karawang.html": "Harga Ready Mix Talagasari Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-telukjambe-timur-karawang.html": "Harga Jayamix Telukjambe Timur Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-telukjambe-timur.html": "Harga Ready Mix Telukjambe Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-karawang-timur.html": "Harga Jayamix Karawang Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-karawang-timur.html": "Harga Ready Mix Karawang Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-klari-karawang.html": "Harga Ready Mix Klari Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-kota-baru-karawang.html": "Harga Jayamix Kota Baru Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-kota-baru-karawang.html": "Harga Ready Mix Kota Baru Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-karawang-barat.html": "Harga Jayamix Karawang Barat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-karawang-barat.html": "Harga Ready Mix Karawang Barat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-jatisari-kab-karawang.html": "Harga Jayamix Jatisari Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-jatisari-kab-karawang.html": "Harga Ready Mix Jatisari Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-cilebar-kab-karawang.html": "Harga Jayamix Cilebar Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-cilebar-kab-karawang.html": "Harga Ready Mix Cilebar Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-cilamaya-wetan.html": "Harga Ready Mix Cilamaya Wetan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-cilamaya-wetan.html": "Harga Jayamix Cilamaya Wetan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-tirtajaya-kab-karawang.html": "Harga Ready Mix Tirtajaya Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-tirtamulya-kab-karawang.html": "Harga Ready Mix Tirtamulya Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-tirtamulya-kab-karawang.html": "Harga Jayamix Tirtamulya Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-tempuran-kab-karawang.html": "Harga Ready Mix Tempuran Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-tempuran-kab-karawang.html": "Harga Jayamix Tempuran Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-telukjambe-barat.html": "Harga Jayamix Telukjambe Barat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-telukjambe-barat.html": "Harga Ready Mix Telukjambe Barat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-rengasdengklok.html": "Harga Jayamix Rengasdengklok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-rengasdengklok.html": "Harga Ready Mix Rengasdengklok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-rawamerta-kab-karawang.html": "Harga Jayamix Rawamerta Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-rawamerta-kab-karawang.html": "Harga Ready Mix Rawamerta Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-purwasari-karawang.html": "Harga Jayamix Purwasari Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-pedes-kab-karawang.html": "Harga Jayamix Pedes Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-pedes-kab-karawang.html": "Harga Ready Mix Pedes Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-pangkalan-kab-karawang.html": "Harga Jayamix Pangkalan Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-pangkalan-kab-karawang.html": "Harga Ready Mix Pangkalan Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-jayakerta.html": "Harga Jayamix Jayakerta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-jayakerta.html": "Harga Ready Mix Jayakerta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-kutawaluya.html": "Harga Jayamix Kutawaluya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-kutawaluya.html": "Harga Ready Mix Kutawaluya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-klari-karawang.html": "Harga Jayamix Klari Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-lemahabang-kab-karawang.html": "Harga Ready Mix Lemahabang Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-lemahabang-kab-karawang.html": "Harga Jayamix Lemahabang Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-majalaya-kab-karawang.html": "Harga Ready Mix Majalaya Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-majalaya-kab-karawang.html": "Harga Jayamix Majalaya Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-pakisjaya-kab-karawang.html": "Harga Ready Mix Pakisjaya Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-pakisjaya-kab-karawang.html": "Harga Jayamix Pakisjaya Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-banyusari-kab-karawang.html": "Harga Jayamix Banyusari Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-banyusari-kab-karawang.html": "Harga Ready Mix Banyusari Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-jayamix-batujaya-kab-karawang.html": "Harga Jayamix Batujaya Kab Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-ready-mix-batujaya-kab-karawang.html": "Harga Ready Mix Batujaya Kab Karawang",  // TYPE: MONEY_CHILD

  // TANGERANG
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-balaraja-kab-tangerang.html": "Harga Ready Mix Balaraja Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-gunung-kaler-kab-tangerang.html": "Harga Ready Mix Gunung Kaler Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sindang-jaya-kab-tangerang.html": "Harga Ready Mix Sindang Jaya Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kronjo-kab-tangerang.html": "Harga Ready Mix Kronjo Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kosambi-kab-tangerang.html": "Harga Ready Mix Kosambi Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kresek-kab-tangerang.html": "Harga Ready Mix Kresek Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kemiri-kab-tangerang.html": "Harga Ready Mix Kemiri Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kelapa-dua-kab-tangerang.html": "Harga Ready Mix Kelapa Dua Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-mauk-kab-tangerang.html": "Harga Ready Mix Mauk Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-legok-kab-tangerang.html": "Harga Ready Mix Legok Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-mekarbaru-kab-tangerang.html": "Harga Ready Mix Mekarbaru Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pasar-kemis-kab-tangerang.html": "Harga Ready Mix Pasar Kemis Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-panongan-kab-tangerang.html": "Harga Ready Mix Panongan Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tigaraksa-kab-tangerang.html": "Harga Ready Mix Tigaraksa Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pakuhaji.html": "Harga Ready Mix Pakuhaji",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-serpong.html": "Harga Ready Mix Serpong",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-serpong-utara.html": "Harga Ready Mix Serpong Utara",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-teluknaga.html": "Harga Ready Mix Teluknaga",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jayanti.html": "Harga Ready Mix Jayanti",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cikupa.html": "Harga Ready Mix Cikupa",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sukamulya.html": "Harga Ready Mix Sukamulya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sukadiri.html": "Harga Ready Mix Sukadiri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-solear.html": "Harga Ready Mix Solear",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sepatan-timur.html": "Harga Ready Mix Sepatan Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sepatan.html": "Harga Ready Mix Sepatan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cisoka.html": "Harga Ready Mix Cisoka",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-batu-ceper.html": "Harga Ready Mix Batu Ceper",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-neglasari-kota-tangerang.html": "Harga Ready Mix Neglasari Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-benda-kota-tangerang.html": "Harga Ready Mix Benda Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cibodas-kota-tangerang.html": "Harga Ready Mix Cibodas Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-setu-tangerang-selatan.html": "Harga Ready Mix Setu Tangerang Selatan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jayanti-kab-tangerang.html": "Harga Jayamix Jayanti Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cikupa-kab-tangerang.html": "Harga Jayamix Cikupa Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-balaraja-kab-tangerang.html": "Harga Jayamix Balaraja Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-gunung-kaler-kab-tangerang.html": "Harga Jayamix Gunung Kaler Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kosambi-kab-tangerang.html": "Harga Jayamix Kosambi Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kronjo-kab-tangerang.html": "Harga Jayamix Kronjo Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kresek-kab-tangerang.html": "Harga Jayamix Kresek Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kemiri-kab-tangerang.html": "Harga Jayamix Kemiri Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kelapa-dua-kab-tangerang.html": "Harga Jayamix Kelapa Dua Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-mauk-kab-tangerang.html": "Harga Jayamix Mauk Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-legok-kab-tangerang.html": "Harga Jayamix Legok Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pasar-kemis-kab-tangerang.html": "Harga Jayamix Pasar Kemis Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-panongan-kab-tangerang.html": "Harga Jayamix Panongan Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-mekarbaru-kab-tangerang.html": "Harga Jayamix Mekarbaru Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tigaraksa-kab-tangerang.html": "Harga Jayamix Tigaraksa Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sindang-jaya.html": "Harga Jayamix Sindang Jaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-serpong.html": "Harga Jayamix Serpong",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-serpong-utara.html": "Harga Jayamix Serpong Utara",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-ciputat.html": "Harga Jayamix Ciputat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sukamulya.html": "Harga Jayamix Sukamulya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sukadiri.html": "Harga Jayamix Sukadiri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-solear.html": "Harga Jayamix Solear",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sepatan.html": "Harga Jayamix Sepatan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cisoka.html": "Harga Jayamix Cisoka",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-batu-ceper.html": "Harga Jayamix Batu Ceper",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sepatan-timur.html": "Harga Jayamix Sepatan Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cibodas-kota-tangerang.html": "Harga Jayamix Cibodas Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-ciledug-kota-tangerang.html": "Harga Jayamix Ciledug Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-setu-tangerang-selatan.html": "Harga Jayamix Setu Tangerang Selatan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-benda-kota-tangerang.html": "Harga Jayamix Benda Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-curug-kab-tangerang.html": "Harga Ready Mix Curug Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jambe-kab-tangerang.html": "Harga Ready Mix Jambe Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cisauk.html": "Harga Ready Mix Cisauk",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-rajeg-kab-tangerang.html": "Harga Ready Mix Rajeg Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pagedangan.html": "Harga Ready Mix Pagedangan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-curug-kab-tangerang.html": "Harga Jayamix Curug Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jambe-kab-tangerang.html": "Harga Jayamix Jambe Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cisauk.html": "Harga Jayamix Cisauk",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-teluknaga.html": "Harga Jayamix Teluknaga",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-rajeg-kab-tangerang.html": "Harga Jayamix Rajeg Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pagedangan.html": "Harga Jayamix Pagedangan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pakuhaji-kab-tangerang.html": "Harga Jayamix Pakuhaji Kab Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-panongan.html": "Harga Jayamix Panongan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-tangerang.html": "Harga Ready Mix Kecamatan Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pinang-kota-tangerang.html": "Harga Ready Mix Pinang Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-periuk-kota-tangerang.html": "Harga Ready Mix Periuk Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-larangan-kota-tangerang.html": "Harga Ready Mix Larangan Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-karawaci.html": "Harga Ready Mix Karawaci",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-karangtengah-kota-tangerang.html": "Harga Ready Mix Karangtengah Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jatiuwung.html": "Harga Ready Mix Jatiuwung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cipondoh-kota-tangerang.html": "Harga Ready Mix Cipondoh Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-ciledug-kota-tangerang.html": "Harga Ready Mix Ciledug Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-tangerang.html": "Harga Jayamix Kecamatan Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pinang-kota-tangerang.html": "Harga Jayamix Pinang Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-periuk-kota-tangerang.html": "Harga Jayamix Periuk Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-neglasari-kota-tangerang.html": "Harga Jayamix Neglasari Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-larangan-kota-tangerang.html": "Harga Jayamix Larangan Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-karawaci-kota-tangerang.html": "Harga Jayamix Karawaci Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-karangtengah-kota-tangerang.html": "Harga Jayamix Karangtengah Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jatiuwung-kota-tangerang.html": "Harga Jayamix Jatiuwung Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cipondoh-kota-tangerang.html": "Harga Jayamix Cipondoh Kota Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-ciputat-timur.html": "Harga Jayamix Ciputat Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pamulang.html": "Harga Jayamix Pamulang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pondok-aren.html": "Harga Jayamix Pondok Aren",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-ciputat.html": "Harga Ready Mix Ciputat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pondok-aren.html": "Harga Ready Mix Pondok Aren",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pamulang.html": "Harga Ready Mix Pamulang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-ciputat-timur.html": "Harga Ready Mix Ciputat Timur",  // TYPE: MONEY_CHILD

  // BOGOR
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-ciomas-kab-bogor.html": "Harga Jayamix Ciomas Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-ciomas-kab-bogor.html": "Harga Ready Mix Ciomas Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cisarua-kab-bogor.html": "Harga Jayamix Cisarua Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cisarua-kab-bogor.html": "Harga Ready Mix Cisarua Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-ciseeng-kab-bogor.html": "Harga Jayamix Ciseeng Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-ciseeng-kab-bogor.html": "Harga Ready Mix Ciseeng Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tenjolaya-kab-bogor.html": "Harga Jayamix Tenjolaya Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tenjolaya-kab-bogor.html": "Harga Ready Mix Tenjolaya Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tenjo-kab-bogor.html": "Harga Jayamix Tenjo Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tenjo-kab-bogor.html": "Harga Ready Mix Tenjo Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tanjungsari-kab-bogor.html": "Harga Jayamix Tanjungsari Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tanjungsari-kab-bogor.html": "Harga Ready Mix Tanjungsari Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tamansari-kab-bogor.html": "Harga Jayamix Tamansari Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tamansari-kab-bogor.html": "Harga Ready Mix Tamansari Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tajur-halang-kab-bogor.html": "Harga Jayamix Tajur Halang Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tajur-halang-kab-bogor.html": "Harga Ready Mix Tajur Halang Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sukaraja-kab-bogor.html": "Harga Jayamix Sukaraja Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sukaraja-kab-bogor.html": "Harga Ready Mix Sukaraja Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sukamakmur-kab-bogor.html": "Harga Jayamix Sukamakmur Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sukamakmur-kab-bogor.html": "Harga Ready Mix Sukamakmur Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-parung-panjang-kab-bogor.html": "Harga Jayamix Parung Panjang Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-parung-panjang-kab-bogor.html": "Harga Ready Mix Parung Panjang Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-parung-kab-bogor.html": "Harga Jayamix Parung Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-parung-kab-bogor.html": "Harga Ready Mix Parung Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pamijahan-kab-bogor.html": "Harga Jayamix Pamijahan Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pamijahan-kab-bogor.html": "Harga Ready Mix Pamijahan Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-nanggung-kab-bogor.html": "Harga Jayamix Nanggung Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-nanggung-kab-bogor.html": "Harga Ready Mix Nanggung Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-megamendung-kab-bogor.html": "Harga Jayamix Megamendung Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-megamendung-kab-bogor.html": "Harga Ready Mix Megamendung Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-leuwisadeng-kab-bogor.html": "Harga Jayamix Leuwisadeng Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-leuwisadeng-kab-bogor.html": "Harga Ready Mix Leuwisadeng Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-leuwiliang-kab-bogor.html": "Harga Jayamix Leuwiliang Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-leuwiliang-kab-bogor.html": "Harga Ready Mix Leuwiliang Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-klapanunggal-kab-bogor.html": "Harga Jayamix Klapanunggal Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-klapanunggal-kab-bogor.html": "Harga Ready Mix Klapanunggal Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kemang-kab-bogor.html": "Harga Jayamix Kemang Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kemang-kab-bogor.html": "Harga Ready Mix Kemang Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jonggol-kab-bogor.html": "Harga Jayamix Jonggol Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jonggol-kab-bogor.html": "Harga Ready Mix Jonggol Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jasinga-kab-bogor.html": "Harga Jayamix Jasinga Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jasinga-kab-bogor.html": "Harga Ready Mix Jasinga Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/08/harga-beton-ready-mix-cibinong.html": "Harga Beton Ready Mix Cibinong",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cijeruk-kab-bogor.html": "Harga Ready Mix Cijeruk Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cibinong-kab-bogor.html": "Harga Ready Mix Cibinong Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cigudeg-kab-bogor.html": "Harga Ready Mix Cigudeg Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cigombong-kab-bogor.html": "Harga Ready Mix Cigombong Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cigombong-kab-bogor.html": "Harga Jayamix Cigombong Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cibungbulang-kab-bogor.html": "Harga Ready Mix Cibungbulang Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-ciawi-kab-bogor.html": "Harga Ready Mix Ciawi Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-ciampea-kab-bogor.html": "Harga Ready Mix Ciampea Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cariu-kab-bogor.html": "Harga Ready Mix Cariu Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-caringin-kab-bogor.html": "Harga Ready Mix Caringin Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-bojonggede-kab-bogor.html": "Harga Ready Mix Bojonggede Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-babakan-madang.html": "Harga Ready Mix Babakan Madang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-citeureup-kab-bogor.html": "Harga Ready Mix Citeureup Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-dramaga-kab-bogor.html": "Harga Ready Mix Dramaga Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-gunung-putri-kab-bogor.html": "Harga Ready Mix Gunung Putri Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-gunung-sindur-kab-bogor.html": "Harga Ready Mix Gunung Sindur Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-ranca-bungur-kab-bogor.html": "Harga Ready Mix Ranca Bungur Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-rumpin-kab-bogor.html": "Harga Ready Mix Rumpin Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sukajaya-kab-bogor.html": "Harga Ready Mix Sukajaya Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cijeruk-kab-bogor.html": "Harga Jayamix Cijeruk Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cibinong-kab-bogor.html": "Harga Jayamix Cibinong Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cigudeg-kab-bogor.html": "Harga Jayamix Cigudeg Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cibungbulang-kab-bogor.html": "Harga Jayamix Cibungbulang Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-ciawi-kab-bogor.html": "Harga Jayamix Ciawi Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-ciampea-kab-bogor.html": "Harga Jayamix Ciampea Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cariu-kab-bogor.html": "Harga Jayamix Cariu Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-caringin-kab-bogor.html": "Harga Jayamix Caringin Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-bojonggede-kab-bogor.html": "Harga Jayamix Bojonggede Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-babakan-madang-kab-bogor.html": "Harga Jayamix Babakan Madang Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-citeureup-kab-bogor.html": "Harga Jayamix Citeureup Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-dramaga-kab-bogor.html": "Harga Jayamix Dramaga Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-gunung-putri-kab-bogor.html": "Harga Jayamix Gunung Putri Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-gunung-sindur-kab-bogor.html": "Harga Jayamix Gunung Sindur Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-ranca-bungur-kab-bogor.html": "Harga Jayamix Ranca Bungur Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-rumpin-kab-bogor.html": "Harga Jayamix Rumpin Kab Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sukajaya-kab-bogor.html": "Harga Jayamix Sukajaya Kab Bogor",  // TYPE: MONEY_CHILD

  // BEKASI
  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-cikarang-utara.html": "Harga Jayamix Cikarang Utara",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-cikarang-utara.html": "Harga Ready Mix Cikarang Utara",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-cikarang-selatan.html": "Harga Jayamix Cikarang Selatan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-cikarang-selatan-bekasi.html": "Harga Ready Mix Cikarang Selatan Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-cikarang-timur.html": "Harga Jayamix Cikarang Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-cikarang-timur.html": "Harga Ready Mix Cikarang Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-cikarang-pusat.html": "Harga Jayamix Cikarang Pusat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-cikarang-pusat-bekasi.html": "Harga Ready Mix Cikarang Pusat Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/06/harga-jayamix-cikarang-barat.html": "Harga Jayamix Cikarang Barat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/05/harga-ready-mix-cikarang-barat-bekasi.html": "Harga Ready Mix Cikarang Barat Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-babelan.html": "Harga Jayamix Babelan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-babelan.html": "Harga Ready Mix Babelan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-bojongmangu.html": "Harga Jayamix Bojongmangu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-bojongmangu-bekasi.html": "Harga Ready Mix Bojongmangu Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cabangbungin-bekasi.html": "Harga Ready Mix Cabangbungin Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-cabangbungin-bekasi.html": "Harga Jayamix Cabangbungin Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cibitung-bekasi.html": "Harga Jayamix Cibitung Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cibitung.html": "Harga Ready Mix Cibitung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tarumajaya.html": "Harga Ready Mix Tarumajaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tarumajaya-bekasi.html": "Harga Jayamix Tarumajaya Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tambun-utara-bekasi.html": "Harga Jayamix Tambun Utara Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tambun-utara-bekasi.html": "Harga Ready Mix Tambun Utara Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-cibarusah.html": "Harga Jayamix Cibarusah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-cibarusah.html": "Harga Ready Mix Cibarusah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/02/harga-jayamix-tambun-selatan.html": "Harga Jayamix Tambun Selatan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/05/harga-ready-mix-tambun-selatan.html": "Harga Ready Mix Tambun Selatan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-tambelang.html": "Harga Jayamix Tambelang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-tambelang.html": "Harga Ready Mix Tambelang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-sukawangi-bekasi.html": "Harga Jayamix Sukawangi Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/05/harga-ready-mix-sukawangi-bekasi.html": "Harga Ready Mix Sukawangi Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/05/harga-ready-mix-pebayuran.html": "Harga Ready Mix Pebayuran",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-pebayuran-bekasi.html": "Harga Jayamix Pebayuran Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-muara-gembong-bekasi.html": "Harga Jayamix Muara Gembong Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/05/harga-ready-mix-muara-gembong-bekasi.html": "Harga Ready Mix Muara Gembong Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-kedungwaringin-bekasi.html": "Harga Ready Mix Kedungwaringin Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-kedungwaringin-bekasi.html": "Harga Jayamix Kedungwaringin Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-karangbahagia.html": "Harga Jayamix Karangbahagia",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-karangbahagia.html": "Harga Ready Mix Karangbahagia",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/harga-ready-mix-sukatani-bekasi.html": "Harga Ready Mix Sukatani Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-sukatani-bekasi.html": "Harga Jayamix Sukatani Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-sukakarya-bekasi.html": "Harga Jayamix Sukakarya Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-sukakarya-bekasi.html": "Harga Ready Mix Sukakarya Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/05/harga-jayamix-setu-bekasi.html": "Harga Jayamix Setu Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/05/harga-ready-mix-setu-bekasi.html": "Harga Ready Mix Setu Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-serang-baru-bekasi.html": "Harga Jayamix Serang Baru Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-serang-baru-bekasi.html": "Harga Ready Mix Serang Baru Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-bantar-gebang.html": "Harga Ready Mix Bantar Gebang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-bantar-gebang.html": "Harga Jayamix Kecamatan Bantar Gebang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-bekasi-barat.html": "Harga Jayamix Kecamatan Bekasi Barat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-bekasi-barat.html": "Harga Ready Mix Kecamatan Bekasi Barat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-bekasi-selatan.html": "Harga Ready Mix Bekasi Selatan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-bekasi-selatan.html": "Harga Jayamix Kecamatan Bekasi Selatan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-bekasi-timur.html": "Harga Ready Mix Kecamatan Bekasi Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-bekasi-timur.html": "Harga Jayamix Kecamatan Bekasi Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-bekasi-utara.html": "Harga Ready Mix Kecamatan Bekasi Utara",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-bekasi-utara.html": "Harga Jayamix Kecamatan Bekasi Utara",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jatiasih-kota-bekasi.html": "Harga Ready Mix Jatiasih Kota Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jatiasih-kota-bekasi.html": "Harga Jayamix Jatiasih Kota Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-jatisampurna.html": "Harga Jayamix Kecamatan Jatisampurna",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-jatisampurna.html": "Harga Ready Mix Kecamatan Jatisampurna",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-medan-satria.html": "Harga Ready Mix Kecamatan Medan Satria",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-medan-satria.html": "Harga Jayamix Kecamatan Medan Satria",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-mustika-jaya.html": "Harga Ready Mix Kecamatan Mustika Jaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-mustika-jaya.html": "Harga Jayamix Kecamatan Mustika Jaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-pondok-gede.html": "Harga Ready Mix Kecamatan Pondok Gede",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-pondok-gede.html": "Harga Jayamix Kecamatan Pondok Gede",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-pondok-melati.html": "Harga Ready Mix Kecamatan Pondok Melati",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kecamatan-pondok-melati.html": "Harga Jayamix Kecamatan Pondok Melati",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kecamatan-rawa-lumbu.html": "Harga Ready Mix Kecamatan Rawa Lumbu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-rawa-lumbu-kota-bekasi.html": "Harga Jayamix Rawa Lumbu Kota Bekasi",  // TYPE: MONEY_CHILD

  // JAKARTA
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jakarta-timur.html": "Harga Ready Mix Jakarta Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jakarta-timur.html": "Harga Jayamix Jakarta Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-kepulauan-seribu.html": "Harga Ready Mix Kepulauan Seribu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kepulauan-seribu.html": "Harga Jayamix Kepulauan Seribu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-jakarta-selatan.html": "Harga Ready Mix Jakarta Selatan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jakarta-selatan.html": "Harga Jayamix Jakarta Selatan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jakarta-pusat.html": "Harga Ready Mix Jakarta Pusat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jakarta-pusat.html": "Harga Jayamix Jakarta Pusat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jakarta-barat.html": "Harga Jayamix Jakarta Barat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jakarta-barat.html": "Harga Ready Mix Jakarta Barat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jakarta-utara.html": "Harga Jayamix Jakarta Utara",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jakarta-utara.html": "Harga Ready Mix Jakarta Utara",  // TYPE: MONEY_CHILD

  // DEPOK
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-beji-depok.html": "Harga Jayamix Beji Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-beji-depok.html": "Harga Ready Mix Beji Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-tapos.html": "Harga Jayamix Tapos",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tapos-depok.html": "Harga Ready Mix Tapos Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-readymix-cinere.html": "Harga Readymix Cinere",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cinere-depok.html": "Harga Jayamix Cinere Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-sukmajaya.html": "Harga Jayamix Sukmajaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sukmajaya-depok.html": "Harga Ready Mix Sukmajaya Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-limo.html": "Harga Jayamix Limo",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-limo-depok.html": "Harga Ready Mix Limo Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-bojongsari-depok.html": "Harga Jayamix Bojongsari Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-bojongsari-depok.html": "Harga Ready Mix Bojongsari Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pancoran-mas-depok.html": "Harga Jayamix Pancoran Mas Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pancoran-mas-depok.html": "Harga Ready Mix Pancoran Mas Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cipayung-depok.html": "Harga Jayamix Cipayung Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cipayung-depok.html": "Harga Ready Mix Cipayung Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cilodong-depok.html": "Harga Jayamix Cilodong Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cilodong-depok.html": "Harga Ready Mix Cilodong Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-sawangan-depok.html": "Harga Jayamix Sawangan Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-sawangan-depok.html": "Harga Ready Mix Sawangan Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cimanggis-depok.html": "Harga Jayamix Cimanggis Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cimanggis-depok.html": "Harga Ready Mix Cimanggis Depok",  // TYPE: MONEY_CHILD

  // SERANG
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tirtayasa-kab-serang.html": "Harga Jayamix Tirtayasa Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-waringinkurung-kab-serang.html": "Harga Jayamix Waringinkurung Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pamarayan-kab-serang.html": "Harga Jayamix Pamarayan Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tunjung-teja-kab-serang.html": "Harga Jayamix Tunjung Teja Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-tanara-kab-serang.html": "Harga Jayamix Tanara Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pulo-ampel-kab-serang.html": "Harga Jayamix Pulo Ampel Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pontang-kab-serang.html": "Harga Jayamix Pontang Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-petir-kab-serang.html": "Harga Jayamix Petir Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-padarincang-kab-serang.html": "Harga Jayamix Padarincang Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-pabuaran-kab-serang.html": "Harga Jayamix Pabuaran Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-mancak-kab-serang.html": "Harga Jayamix Mancak Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-lebak-wangi-kab-serang.html": "Harga Jayamix Lebak Wangi Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kramatwatu-kab-serang.html": "Harga Jayamix Kramatwatu Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kragilan-kab-serang.html": "Harga Jayamix Kragilan Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kopo-kab-serang.html": "Harga Jayamix Kopo Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-kibin-kab-serang.html": "Harga Jayamix Kibin Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-jawilan-kab-serang.html": "Harga Jayamix Jawilan Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-gunungsari-kab-serang.html": "Harga Jayamix Gunungsari Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-ciruas-kab-serang.html": "Harga Jayamix Ciruas Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-ciomas-kab-serang.html": "Harga Jayamix Ciomas Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cinangka-kab-serang.html": "Harga Jayamix Cinangka Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-cikeusal-kab-serang.html": "Harga Jayamix Cikeusal Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-carenang-kab-serang.html": "Harga Jayamix Carenang Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-bojonegara-kab-serang.html": "Harga Jayamix Bojonegara Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-binuang-kab-serang.html": "Harga Jayamix Binuang Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-baros-kab-serang.html": "Harga Jayamix Baros Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-bandung-kab-serang.html": "Harga Jayamix Bandung Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-jayamix-anyar-kab-serang.html": "Harga Jayamix Anyar Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tunjung-teja-kab-serang.html": "Harga Ready Mix Tunjung Teja Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-tanara-kab-serang.html": "Harga Ready Mix Tanara Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pulo-ampel-kab-serang.html": "Harga Ready Mix Pulo Ampel Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pontang-kab-serang.html": "Harga Ready Mix Pontang Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-petir-kab-serang.html": "Harga Ready Mix Petir Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-padarincang-kab-serang.html": "Harga Ready Mix Padarincang Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-pabuaran-kab-serang.html": "Harga Ready Mix Pabuaran Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-mancak-kab-serang.html": "Harga Ready Mix Mancak Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-lebak-wangi-kab-serang.html": "Harga Ready Mix Lebak Wangi Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kramatwatu-kab-serang.html": "Harga Ready Mix Kramatwatu Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kragilan-kab-serang.html": "Harga Ready Mix Kragilan Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kopo-kab-serang.html": "Harga Ready Mix Kopo Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-kibin-kab-serang.html": "Harga Ready Mix Kibin Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-jawilan-kab-serang.html": "Harga Ready Mix Jawilan Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-gunungsari-kab-serang.html": "Harga Ready Mix Gunungsari Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-ciruas-kab-serang.html": "Harga Ready Mix Ciruas Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-ciomas-kab-serang.html": "Harga Ready Mix Ciomas Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cinangka-kab-serang.html": "Harga Ready Mix Cinangka Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-cikeusal-kab-serang.html": "Harga Ready Mix Cikeusal Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-carenang-kab-serang.html": "Harga Ready Mix Carenang Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-bojonegara-kab-serang.html": "Harga Ready Mix Bojonegara Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-binuang-kab-serang.html": "Harga Ready Mix Binuang Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-baros-kab-serang.html": "Harga Ready Mix Baros Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-bandung-kab-serang.html": "Harga Ready Mix Bandung Kab Serang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/07/harga-ready-mix-anyar-kab-serang.html": "Harga Ready Mix Anyar Kab Serang"  // TYPE: MONEY_CHILD
};

// ============================================================
// READY MIX PILLAR POST - MONEY PAGE (UMUM)
// Parent: Ready Mix (/p/ready-mix-beton-cor-jayamix-minimix.html)
// 🧠 SEO NOTE: Semua URL di bawah ini adalah [MONEY PAGE] untuk target keyword umum.
// Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Ready Mix > [Nama Post]
// ============================================================

const urlMappingReadyMixPillarPost = {
  // [MONEY PAGE] - HARGA COR BETON
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-per-truk-molen.html": "Harga Cor Beton Per Truk Molen",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-per-molen.html": "Harga Cor Beton per Molen",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-minimix.html": "Harga Cor Beton Minimix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/05/harga-cor-beton-bertulang.html": "Harga Cor Beton Bertulang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/05/harga-cor-beton-bertulang-per-m3.html": "Harga Cor Beton Bertulang Per M3",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/daftar-harga-cor-beton.html": "Daftar Harga Cor Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-per-kubik.html": "Harga Cor Beton per Kubik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/04/harga-beton-cor.html": "Harga Beton Cor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/08/harga-jayamix-paling-murah.html": "Harga Jayamix Paling Murah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/jual-beton-ready-mix.html": "Jual Beton Ready Mix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/cari-harga-beton-ready-mix.html": "Cari Harga Beton Ready Mix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-per-m3.html": "Harga Beton Ready Mix Per M3",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-termurah.html": "Harga Beton Ready Mix Termurah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-terbaru.html": "Harga Beton Ready Mix Terbaru",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-per-kubik.html": "Harga Ready Mix Per Kubik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-murah.html": "Harga Ready Mix Murah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-readymix-concrete.html": "Harga Readymix Concrete",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-ready-mix.html": "Harga Cor Beton Ready Mix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/ready-mix-murah.html": "Ready Mix Murah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/08/cor-beton-murah.html": "Cor Beton Murah"  // TYPE: MONEY_PAGE
};

// ============================================================
// READY MIX MUTU POST - MONEY PAGE & SUB1 (ANALISA)
// Parent: Ready Mix Mutu (/p/ready-mix-mutu.html)
// 🧠 SEO NOTE: Analisa mutu adalah [SUB1] (bridge), harga mutu adalah [MONEY PAGE]
// ============================================================

const urlMappingReadyMixMutuPost = {
  // ============================================================
  // [SUB1] - ANALISA MUTU (INFORMASIONAL, PRE-COMMERCIAL)
  // WAJIB tampil di breadcrumb (tidak boleh skip)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/analisa-beton-ready-mix-k250.html": "Analisa Beton Ready Mix K250",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2021/03/analisa-beton-ready-mix-k350.html": "Analisa Beton Ready Mix K350",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k100.html": "Analisa Beton Ready Mix K100",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k125.html": "Analisa Beton Ready Mix K125",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k175.html": "Analisa Beton Ready Mix K175",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k225.html": "Analisa Beton Ready Mix K225",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2021/03/analisa-beton-ready-mix-k300.html": "Analisa Beton Ready Mix K300",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k375.html": "Analisa Beton Ready Mix K375",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k400.html": "Analisa Beton Ready Mix K400",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2022/02/analisa-beton-ready-mix-k450.html": "Analisa Beton Ready Mix K450",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/04/analisa-beton-k-225.html": "Analisa Beton K 225",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/04/macam-macam-mutu-beton.html": "Macam macam mutu beton",  // TYPE: SUB1

  // ============================================================
  // [MONEY PAGE] - HARGA MUTU
  // WAJIB tampil di breadcrumb (halaman transaksi)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/04/harga-ready-mix-k-200.html": "Harga Ready Mix K 200",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-b0.html": "Harga Beton Ready Mix B0",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-k-350.html": "Harga Ready Mix K 350",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-k-300.html": "Harga Ready Mix K 300",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-k-250.html": "Harga Ready Mix K 250",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-k-225.html": "Harga Ready Mix K 225",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-ready-mix-k-275.html": "Harga Ready Mix K 275",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-250.html": "Harga Cor Beton K 250",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-225.html": "Harga Cor Beton K 225",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-k-175.html": "Harga Ready Mix K 175",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-300-per-m3.html": "Harga Cor Beton K 300 per m3",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-200.html": "Harga Cor Beton K 200",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-175.html": "Harga Cor Beton K 175",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k-275.html": "Harga Cor Beton K 275",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-cor-beton-k225-per-m3.html": "Harga Cor Beton K225 Per M3",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-k350.html": "Harga Cor Beton K350",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/08/harga-beton-cor-k300-holcim.html": "Harga Beton Cor K300 Holcim",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-k300.html": "Harga Jayamix K300"  // TYPE: MONEY_PAGE
};

// ============================================================
// READY MIX KEGUNAAN POST - SUB1 & MONEY PAGE
// Parent: Ready Mix Kegunaan (/p/ready-mix-kegunaan.html)
// ============================================================

const urlMappingReadyMixKegunaanPost = {
  // ============================================================
  // [SUB1] - JENIS & FUNGSI (INFORMASIONAL)
  // WAJIB tampil di breadcrumb (tidak boleh skip)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/jenis-beton-ready-mix.html": "Jenis Beton Ready Mix",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2021/03/fungsi-beton-ready-mix.html": "Fungsi Beton Ready Mix",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2021/03/ready-mix-asphalt.html": "Ready Mix Asphalt",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/cor-slipform.html": "Cor Slipform",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/cor-beton-rumah.html": "Cor Beton Rumah",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/cor-beton-bangunan.html": "Cor Beton Bangunan",  // TYPE: SUB1

  // ============================================================
  // [MONEY PAGE] - HARGA COR PER APLIKASI
  // WAJIB tampil di breadcrumb (halaman transaksi)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-jalan-per-m3.html": "Harga Cor Beton Jalan Per M3",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/08/harga-cor-beton-dinding.html": "Harga Cor Beton Dinding",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/05/harga-cor-beton-untuk-rumah.html": "Harga Cor Beton Untuk Rumah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-rumah-tinggal-per-m3.html": "Harga Cor Beton Rumah Tinggal Per M3"  // TYPE: MONEY_PAGE
};

// ============================================================
// READY MIX PLANT POST - MONEY PAGE (BRAND & LOKASI PLANT)
// Parent: Ready Mix Plant (/p/ready-mix-plant.html)
// ============================================================

const urlMappingReadyMixPlantPost = {
  // ============================================================
  // [MONEY PAGE] - JAYAMIX & READY MIX BRAND
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/jayamix-beton.html": "Jayamix Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-beton.html": "Harga Jayamix Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/04/harga-jayamix-murah.html": "Harga Jayamix Murah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-per-m3.html": "Harga Jayamix Per M3",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-jayamix-per-kubik.html": "Harga Jayamix Per Kubik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/08/harga-ready-mix-tiga-roda.html": "Harga Ready Mix Tiga Roda",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-jayamix-per-kubik.html": "Harga Cor Beton Jayamix Per Kubik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-jayamix.html": "Harga Cor Beton Jayamix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-1-molen-jayamix.html": "Harga 1 Molen Jayamix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/daftar-harga-cor-beton-jayamix.html": "Daftar Harga Cor Beton Jayamix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2022/12/harga-jayamix-ready-mix-minimix.html": "Harga Jayamix Ready Mix Minimix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-pionir.html": "Harga Beton Ready Mix Pionir",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-holcim.html": "Harga Beton Ready Mix Holcim",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-jayamix.html": "Harga Beton Ready Mix Jayamix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-beton-ready-mix-merah-putih.html": "Harga Beton Ready Mix Merah Putih",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-holcim.html": "Harga Ready Mix Holcim",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/04/harga-ready-mix-jayamix.html": "Harga Ready Mix Jayamix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-holcim-per-m3.html": "Harga Cor Beton Holcim per m3",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/05/harga-beton-ready-mix-adhimix.html": "Harga Beton Ready Mix Adhimix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-cor-beton-adhimix.html": "Harga Cor Beton Adhimix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/harga-beton-adhimix.html": "Harga Beton Adhimix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/harga-adhimix-jayamix.html": "Harga Adhimix Jayamix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/08/batching-plant-terdekat.html": "Batching Plant Terdekat",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-depok.html": "Batching Plant Depok",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-tangerang.html": "Batching Plant Tangerang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-prov-dki-jakarta.html": "Batching Plant Prov DKI Jakarta",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-bekasi.html": "Batching Plant Bekasi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-bogor.html": "Batching Plant Bogor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-dynamix.html": "Batching Plant Dynamix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/dynamix-beton.html": "Dynamix Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/04/scg-jayamix.html": "SCG Jayamix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/holcim-ready-mix.html": "Holcim Ready Mix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/ready-mix-merah-putih.html": "Ready Mix Merah Putih",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/ready-mix-tiga-roda.html": "Ready Mix Tiga Roda",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/04/scg-readymix.html": "SCG Ready Mix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/scg-beton.html": "SCG Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/pt-scg-readymix-indonesia.html": "PT SCG Ready Mix Indonesia",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/scg-readymix-indonesia.html": "SCG Ready Mix Indonesia",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/scg-batching-plant.html": "SCG Batching Plant",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/office-kantor-scg-kalibata.html": "Office Kantor SCG Kalibata",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/08/beton-cor-merah-putih.html": "Beton Cor Merah Putih",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY PAGE] - BATCHING PLANT SCG LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-subang.html": "Batching Plant SCG Subang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-karawang.html": "Batching Plant SCG Karawang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-sukabumi.html": "Batching Plant Sukabumi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-purwakarta.html": "Batching Plant SCG Purwakarta",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-majalengka.html": "Batching Plant SCG Majalengka",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-bandung.html": "Batching Plant SCG Bandung",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-cirebon.html": "Batching Plant SCG Cirebon",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-cianjur.html": "Batching Plant SCG Cianjur",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-bogor.html": "Batching Plant SCG Bogor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-scg-bekasi.html": "Batching Plant SCG Bekasi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/scg-jakarta.html": "SCG Jakarta",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/scg-jayamix-dki-jakarta.html": "SCG Jayamix DKI Jakarta",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/04/scg-readymix-jakarta.html": "SCG Ready Mix Jakarta",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY PAGE] - ADHIMIX
  // ============================================================
  "https://www.betonjayareadymix.com/2018/08/batching-plant-adhimix.html": "Batching Plant Adhimix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-ready-mix.html": "Adhimix Ready Mix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-rmc.html": "Adhimix RMC",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-retail.html": "Adhimix Retail",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-group.html": "Adhimix Group",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-terdekat.html": "Adhimix Terdekat",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-beton.html": "Adhimix Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-bogor.html": "Adhimix Bogor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-bekasi.html": "Adhimix Bekasi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-jakarta.html": "Adhimix Jakarta",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-tangerang.html": "Adhimix Tangerang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-depok.html": "Adhimix Depok",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-bandung.html": "Adhimix Bandung",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-cirebon.html": "Adhimix Cirebon",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-karawang.html": "Adhimix Karawang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-subang.html": "Adhimix Subang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-majalengka.html": "Adhimix Majalengka",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-sukabumi.html": "Adhimix Sukabumi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-purwakarta.html": "Adhimix Purwakarta",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-sumedang.html": "Adhimix Sumedang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-indramayu.html": "Adhimix Indramayu",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-kuningan.html": "Adhimix Kuningan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-cianjur.html": "Adhimix Cianjur",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-ciamis.html": "Adhimix Ciamis",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-serang.html": "Adhimix Serang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-cilegon.html": "Adhimix Cilegon",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-lebak.html": "Adhimix Lebak",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-pandeglang.html": "Adhimix Pandeglang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-kendal.html": "Adhimix Kendal",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-semarang.html": "Adhimix Semarang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-surabaya.html": "Adhimix Surabaya",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-gresik.html": "Adhimix Gresik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/adhimix-sidoarjo.html": "Adhimix Sidoarjo",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY PAGE] - PIONIR
  // ============================================================
  "https://www.betonjayareadymix.com/2018/08/pionir-beton-terdekat.html": "Pionir Beton Terdekat",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-pionirbeton.html": "Batching Plant Pionirbeton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/pionir-beton-jakarta.html": "Pionir Beton Jakarta",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/pionir-beton-tangerang.html": "Pionir Beton Tangerang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/pionir-beton-bekasi.html": "Pionir Beton Bekasi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/pionir-beton-depok.html": "Pionir Beton Depok",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/pionir-beton-bogor.html": "Pionir Beton Bogor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/08/pionir-beton-cor-bogor.html": "Pionir Beton Cor Bogor",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY PAGE] - FRESH BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-batching-plant.html": "Fresh Beton Batching Plant",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-terdekat.html": "Fresh Beton Terdekat",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-bogor.html": "Fresh Beton Bogor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-bekasi.html": "Fresh Beton Bekasi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-jakarta.html": "Fresh Beton Jakarta",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-tangerang.html": "Fresh Beton Tangerang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-depok.html": "Fresh Beton Depok",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-sukabumi.html": "Fresh Beton Sukabumi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/fresh-beton-cianjur.html": "Fresh Beton Cianjur",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY PAGE] - KARYA BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2018/08/karya-beton-terdekat.html": "Karya Beton Terdekat",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/karya-beton-sudhira.html": "Karya Beton Sudhira",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/batching-plant-karya-beton.html": "Batching Plant Karya Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/karya-beton-readymix.html": "Karya Beton Readymix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/karya-beton-bekasi.html": "Karya Beton Bekasi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/karya-beton-cikarang.html": "Karya Beton Cikarang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/karya-beton-bogor.html": "Karya Beton Bogor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/karya-beton-depok.html": "Karya Beton Depok",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/karya-beton-jakarta.html": "Karya Beton Jakarta",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/karya-beton-tangerang.html": "Karya Beton Tangerang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/karya-beton-karawang.html": "Karya Beton Karawang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/karya-beton-jogja.html": "Karya Beton Jogja",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/karya-beton-bali.html": "Karya Beton Bali",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY PAGE] - FARIKA BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2018/08/plant-farika-beton.html": "Plant Farika Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/farika-beton-terdekat.html": "Farika Beton Terdekat",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/farika-beton-jakarta.html": "Farika Beton Jakarta",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/farika-beton-bogor.html": "Farika Beton Bogor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/farika-beton-bekasi.html": "Farika Beton Bekasi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/farika-beton-depok.html": "Farika Beton Depok",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/farika-beton-tangerang.html": "Farika Beton Tangerang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/farika-beton-cilegon-prov-banten.html": "Farika Beton Cilegon Prov Banten",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/farika-beton-serang.html": "Farika Beton Serang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/08/farika-beton-kota-dumai-prov-riau.html": "Farika Beton Kota Dumai Prov Riau"  // TYPE: MONEY_PAGE
};

// ============================================================
// READY MIX PANDUAN POST - SUB1 (PANDUAN / BRIDGE)
// Parent: Ready Mix Panduan (/p/ready-mix-panduan.html)
// 🧠 SEO NOTE: Panduan adalah [SUB1] (bridge ke MONEY page)
// TYPE: SUB1 (WAJIB tampil di breadcrumb, tidak boleh skip)
// ============================================================

const urlMappingReadyMixPanduanPost = {
  // ============================================================
  // [SUB1] - PANDUAN CARA NGECOR
  // TYPE: SUB1 (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/04/cara-ngecor.html": "Cara Ngecor",  // TYPE: SUB1

  // ============================================================
  // [SUB1] - PANDUAN PERBEDAAN JAYAMIX DAN READY MIX
  // TYPE: SUB1 (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/perbedaan-jayamix-dan-readymix.html": "Perbedaan Jayamix dan Ready Mix",  // TYPE: SUB1

  // ============================================================
  // [SUB1] - PANDUAN UKURAN JAYAMIX
  // TYPE: SUB1 (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/ukuran-jayamix.html": "Ukuran Jayamix",  // TYPE: SUB1

  // ============================================================
  // [SUB1] - PANDUAN 1 MOBIL JAYAMIX BERAPA KUBIK
  // TYPE: SUB1 (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/1-mobil-jayamix-berapa-kubik.html": "1 Mobil Jayamix Berapa Kubik",  // TYPE: SUB1

  // ============================================================
  // [SUB1] - PANDUAN CARA PESAN JAYAMIX
  // TYPE: SUB1 (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/cara-pesan-jayamix.html": "Cara Pesan Jayamix",  // TYPE: SUB1

  // ============================================================
  // [SUB1] - PANDUAN CARA ORDER READY MIX
  // TYPE: SUB1 (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/08/cara-order-ready-mix.html": "Cara Order Ready Mix",  // TYPE: SUB1

  // ============================================================
  // [SUB1] - PANDUAN CARA MENGHITUNG KUBIKASI BETON
  // TYPE: SUB1 (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/04/cara-menghitung-kubikasi-beton.html": "Cara menghitung kubikasi beton",  // TYPE: SUB1

  // ============================================================
  // [SUB1] - PANDUAN 1 TRUK MOLEN BERAPA M3
  // TYPE: SUB1 (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/04/1-truk-molen-berapa-m3.html": "1 Truk molen berapa m3"  // TYPE: SUB1
};
/*
📋 RINGKASAN TYPE
No	Nama Halaman	Type	Boleh Skip?
1	Cara Ngecor	SUB1	❌ TIDAK (WAJIB)
2	Perbedaan Jayamix dan Ready Mix	SUB1	❌ TIDAK (WAJIB)
3	Ukuran Jayamix	SUB1	❌ TIDAK (WAJIB)
4	1 Mobil Jayamix Berapa Kubik	SUB1	❌ TIDAK (WAJIB)
5	Cara Pesan Jayamix	SUB1	❌ TIDAK (WAJIB)
6	Cara Order Ready Mix	SUB1	❌ TIDAK (WAJIB)
7	Cara menghitung kubikasi beton	SUB1	❌ TIDAK (WAJIB)
8	1 Truk molen berapa m3	SUB1	❌ TIDAK (WAJIB)

📊 HIERARCHY POSISI
MATERIAL STRUKTUR BANGUNAN (SUB2)
│
├── READY MIX (VARIANT)
│   ├── Ready Mix Lokasi (MONEY_CHILD)
│   ├── Ready Mix Mutu (MONEY_CHILD)
│   ├── Ready Mix Kegunaan (MONEY_CHILD)
│   ├── Ready Mix Plant (MONEY_CHILD)
│   │
│   └── READY MIX PANDUAN (SUB1) ← mapping ini
│       ├── Cara Ngecor (SUB1)
│       ├── Perbedaan Jayamix dan Ready Mix (SUB1)
│       ├── Ukuran Jayamix (SUB1)
│       ├── 1 Mobil Jayamix Berapa Kubik (SUB1)
│       ├── Cara Pesan Jayamix (SUB1)
│       ├── Cara Order Ready Mix (SUB1)
│       ├── Cara menghitung kubikasi beton (SUB1)
│       └── 1 Truk molen berapa m3 (SUB1)
*/
// ============================================================
// SEMEN PORTLAND POST - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Semua URL di bawah ini adalah [MONEY PAGE] untuk target keyword semen portland.
// Parent: Semen Portland (/p/semen-portland.html)
// Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Semen Portland > [Nama Post]
// ============================================================

// ============================================================
// SEMEN PORTLAND POST - MONEY PAGE & SUB1
// ============================================================

const urlMappingSemenPortlandPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA SEMEN PORTLAND
  // TYPE: MONEY PAGE (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Semen Portland > Harga Semen Portland
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-semen-portland.html": "Harga Semen Portland",  // TYPE: MONEY PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-semen-portland-per-sak.html": "Harga Semen Portland per Sak",  // TYPE: MONEY PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-semen-portland-50kg.html": "Harga Semen Portland 50kg",  // TYPE: MONEY PAGE
  
  // ============================================================
  // [MONEY PAGE] - JUAL / DISTRIBUTOR SEMEN PORTLAND
  // TYPE: MONEY PAGE (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Semen Portland > Jual Semen Portland
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/jual-semen-portland-terdekat.html": "Jual Semen Portland Terdekat",  // TYPE: MONEY PAGE
  // "https://www.betonjayareadymix.com/2019/08/supplier-semen-portland.html": "Supplier Semen Portland",  // TYPE: MONEY PAGE
  // "https://www.betonjayareadymix.com/2019/08/distributor-semen-portland.html": "Distributor Semen Portland",  // TYPE: MONEY PAGE
  
  // ============================================================
  // [SUB1] - JENIS & SPESIFIKASI SEMEN PORTLAND
  // TYPE: SUB1 (WAJIB tampil di breadcrumb - bridge ke MONEY)
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Semen Portland > Jenis Semen Portland
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/jenis-semen-portland.html": "Jenis Semen Portland",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/spesifikasi-semen-portland.html": "Spesifikasi Semen Portland",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/kelebihan-semen-portland.html": "Kelebihan Semen Portland",  // TYPE: SUB1
  
  // ============================================================
  // [SUB1] - PERBANDINGAN SEMEN PORTLAND
  // TYPE: SUB1 (WAJIB tampil di breadcrumb - bridge ke MONEY)
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Semen Portland > Perbandingan Semen Portland
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/perbedaan-semen-portland-dan-semen-biasa.html": "Perbedaan Semen Portland dan Semen Biasa",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/semen-portland-vs-semen-putih.html": "Semen Portland vs Semen Putih",  // TYPE: SUB1
};

// ============================================================
// SEMEN INSTAN POST - MONEY PAGE & SUB1
// ============================================================

const urlMappingSemenInstanPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA SEMEN INSTAN
  // TYPE: MONEY PAGE (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Semen Instan > Harga Semen Instan
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-semen-instan.html": "Harga Semen Instan",  // TYPE: MONEY PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-semen-instan-per-sak.html": "Harga Semen Instan per Sak",  // TYPE: MONEY PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-semen-instan-40kg.html": "Harga Semen Instan 40kg",  // TYPE: MONEY PAGE
  
  // ============================================================
  // [MONEY PAGE] - JUAL / DISTRIBUTOR SEMEN INSTAN
  // TYPE: MONEY PAGE (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Semen Instan > Jual Semen Instan
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/jual-semen-instan-terdekat.html": "Jual Semen Instan Terdekat",  // TYPE: MONEY PAGE
  // "https://www.betonjayareadymix.com/2019/08/supplier-semen-instan.html": "Supplier Semen Instan",  // TYPE: MONEY PAGE
  
  // ============================================================
  // [SUB1] - JENIS & SPESIFIKASI SEMEN INSTAN
  // TYPE: SUB1 (WAJIB tampil di breadcrumb - bridge ke MONEY)
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Semen Instan > Jenis Semen Instan
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/jenis-semen-instan.html": "Jenis Semen Instan",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/spesifikasi-semen-instan.html": "Spesifikasi Semen Instan",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/kelebihan-semen-instan.html": "Kelebihan Semen Instan",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/kekurangan-semen-instan.html": "Kekurangan Semen Instan",  // TYPE: SUB1
  
  // ============================================================
  // [SUB1] - APLIKASI SEMEN INSTAN
  // TYPE: SUB1 (WAJIB tampil di breadcrumb - bridge ke MONEY)
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Semen Instan > Aplikasi Semen Instan
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/aplikasi-semen-instan-untuk-renovasi.html": "Aplikasi Semen Instan untuk Renovasi",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/semen-instan-untuk-dinding.html": "Semen Instan untuk Dinding",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/semen-instan-untuk-lantai.html": "Semen Instan untuk Lantai",  // TYPE: SUB1
  
  // ============================================================
  // [SUB1] - PERBANDINGAN SEMEN INSTAN
  // TYPE: SUB1 (WAJIB tampil di breadcrumb - bridge ke MONEY)
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Semen Instan > Perbandingan Semen Instan
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/perbedaan-semen-instan-dan-semen-biasa.html": "Perbedaan Semen Instan dan Semen Biasa",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/semen-instan-vs-semen-portland.html": "Semen Instan vs Semen Portland",  // TYPE: SUB1
  
  // ============================================================
  // [SUB1] - CARA PENGGUNAAN SEMEN INSTAN
  // TYPE: SUB1 (WAJIB tampil di breadcrumb - bridge ke MONEY)
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Semen Instan > Cara Penggunaan Semen Instan
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/cara-penggunaan-semen-instan.html": "Cara Penggunaan Semen Instan",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/takaran-semen-instan.html": "Takaran Semen Instan",  // TYPE: SUB1
};

// ============================================================
// BESI BANGUNAN POST - MONEY PAGE (HARGA & TOKO)
// Parent: Besi Bangunan (/p/besi-bangunan.html)
// 🧠 SEO NOTE: Semua URL di bawah ini adalah [MONEY PAGE] untuk target keyword harga besi.
// Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Besi Bangunan > [Nama Post]
// ============================================================

const urlMappingBesiBangunanPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA BESI BANGUNAN (MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/04/harga-besi-bangunan.html": "Harga Besi Bangunan",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - VARIASI HARGA
  // ============================================================
  "https://www.betonjayareadymix.com/2019/04/besi-bangunan-harga-terbaru.html": "Besi Bangunan Harga Terbaru",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - TOKO & DISTRIBUTOR
  // ============================================================
  "https://www.betonjayareadymix.com/2019/04/toko-besi-bangunan-terdekat.html": "Toko Besi Bangunan Terdekat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/distributor-besi-bangunan-terlengkap.html": "Distributor Besi Bangunan Terlengkap",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/supplier-besi-bangunan-harga-grosir.html": "Supplier Besi Bangunan Harga Grosir",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB1] - DAFTAR PRODUK & PROMO (INFORMASIONAL)
  // 🧠 TYPE: SUB1 (WAJIB tampil di breadcrumb)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/04/daftar-produk-besi-bangunan.html": "Daftar Produk Besi Bangunan",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/promo-diskon-besi-bangunan.html": "Promo & Diskon Besi Bangunan"  // TYPE: SUB1
};

// ============================================================
// BAJA KONVENSIONAL POST - MONEY PAGE (HARGA PROFIL BAJA)
// Parent: Baja Konvensional (/p/baja-konvensional.html)
// 🧠 SEO NOTE: Semua URL adalah [MONEY PAGE] untuk harga profil baja (H Beam, Pipa, Plat, Siku, UNP, CNP, Hollow)
// Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Baja Konvensional > [Nama Post]
// ============================================================

const urlMappingBajaKonvensionalPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA PROFIL BAJA
  // 🧠 TYPE: MONEY_MASTER (semua adalah harga)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/04/harga-besi-h-beam.html": "Harga Besi H Beam",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-besi-pipa.html": "Harga Besi Pipa",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-besi-plat.html": "Harga Besi Plat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-besi-siku.html": "Harga Besi Siku",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-besi-unp.html": "Harga Besi UNP",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-besi-cnp.html": "Harga Besi CNP",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-besi-hollow.html": "Harga Besi Hollow"  // TYPE: MONEY_MASTER
};

// ============================================================
// BAJA RINGAN STRUKTUR POST - MONEY PAGE & SUB1
// Parent: Baja Ringan Struktur (/p/baja-ringan-struktur.html)
// 🧠 SEO NOTE: Harga adalah [MONEY PAGE], edukasi/panduan adalah [SUB1]
// Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Baja Ringan Struktur > [Nama Post]
// ============================================================

const urlMappingBajaRinganStrukturPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA BAJA RINGAN (UMUM & PER UNIT)
  // 🧠 TYPE: MONEY_MASTER (semua diawali "harga")
  // ============================================================
  "https://www.betonjayareadymix.com/2019/04/baja-ringan-harga.html": "Baja Ringan Harga",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan.html": "Harga Baja Ringan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-murah.html": "Harga Baja Ringan Murah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/baja-ringan.html": "Baja Ringan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-termurah.html": "Harga Baja Ringan Termurah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-lembaran.html": "Harga Baja Ringan Lembaran",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-saat-ini.html": "Harga Baja Ringan Saat Ini",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-lengkap.html": "Harga Baja Ringan Lengkap",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-075-full.html": "Harga Baja Ringan 0.75 Full",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-full.html": "Harga Baja Ringan Full",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-untuk-eternit.html": "Harga Baja Ringan Untuk Eternit",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-segi-empat.html": "Harga Baja Ringan Segi Empat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-dan-reng.html": "Harga Baja Ringan dan Reng",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-cnp.html": "Harga Baja Ringan CNP",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-canal-c-75.html": "Harga Baja Ringan Canal C75",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-cnp-075.html": "Harga Baja Ringan CNP 0.75",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-c75.html": "Harga Baja Ringan C75",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-buat-kanopi.html": "Harga Baja Ringan Buat Kanopi",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-buat-atap-rumah.html": "Harga Baja Ringan Buat Atap Rumah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-bekas-per-kilo.html": "Harga Baja Ringan Bekas per Kilo",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-bekas.html": "Harga Baja Ringan Bekas",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-batangan.html": "Harga Baja Ringan Batangan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-atap-rumah.html": "Harga Baja Ringan Atap Rumah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-atap-genteng.html": "Harga Baja Ringan Atap Genteng",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-atap-spandek-per-meter.html": "Harga Baja Ringan Atap Spandek per Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-atap-spandek.html": "Harga Baja Ringan Atap Spandek",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY CHILD] - HARGA PER KOTA/KABUPATEN
  // 🧠 TYPE: MONEY_CHILD (ada nama lokasi di akhir)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-di-jakarta.html": "Harga Baja Ringan di Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-bogor.html": "Harga Baja Ringan Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-depok.html": "Harga Baja Ringan Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-tangerang.html": "Harga Baja Ringan Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-bekasi.html": "Harga Baja Ringan Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-kota-bekasi.html": "Harga Baja Ringan Kota Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cikarang.html": "Harga Baja Ringan Cikarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-karawang.html": "Harga Baja Ringan Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-sumedang-utara.html": "Harga Baja Ringan Sumedang Utara",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cileunyi.html": "Harga Baja Ringan Cileunyi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cimahi.html": "Harga Baja Ringan Cimahi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-caringin.html": "Harga Baja Ringan Caringin",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-karawang-barat.html": "Harga Baja Ringan Karawang Barat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-gunung-putri.html": "Harga Baja Ringan Gunung Putri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-sukaraja.html": "Harga Baja Ringan Sukaraja",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-karawang-timur.html": "Harga Baja Ringan Karawang Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-bandung.html": "Harga Baja Ringan Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-garut.html": "Harga Baja Ringan Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-purwakarta.html": "Harga Baja Ringan Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cikampek.html": "Harga Baja Ringan Cikampek",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cirebon.html": "Harga Baja Ringan Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-telukjambe-timur.html": "Harga Baja Ringan Telukjambe Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-jatibarang.html": "Harga Baja Ringan Jatibarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-parung-panjang.html": "Harga Baja Ringan Parung Panjang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cibinong.html": "Harga Baja Ringan Cibinong",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-cileungsi.html": "Harga Baja Ringan Cileungsi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-baja-ringan-bojong-gede.html": "Harga Baja Ringan Bojong Gede",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY CHILD] - BAJA RINGAN HARGA (VARIASI KEYWORD + LOKASI)
  // 🧠 TYPE: MONEY_CHILD (ada nama lokasi di akhir)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-karawang-timur.html": "Baja Ringan Harga Karawang Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-gunung-putri.html": "Baja Ringan Harga Gunung Putri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-ciomas.html": "Baja Ringan Harga Ciomas",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-kota-bekasi.html": "Baja Ringan Harga Kota Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-cikampek.html": "Baja Ringan Harga Cikampek",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-lembang.html": "Baja Ringan Harga Lembang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-cianjur.html": "Baja Ringan Harga Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-caringin.html": "Baja Ringan Harga Caringin",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-purwakarta.html": "Baja Ringan Harga Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-cirebon.html": "Baja Ringan Harga Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-cimahi.html": "Baja Ringan Harga Cimahi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-bogor.html": "Baja Ringan Harga Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-dramaga.html": "Baja Ringan Harga Dramaga",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-cibinong.html": "Baja Ringan Harga Cibinong",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-cileungsi.html": "Baja Ringan Harga Cileungsi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-telukjambe-timur.html": "Baja Ringan Harga Telukjambe Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-bojong-gede.html": "Baja Ringan Harga Bojong Gede",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-parung-panjang.html": "Baja Ringan Harga Parung Panjang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-kemang.html": "Baja Ringan Harga Kemang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/baja-ringan-harga-tajur-halang.html": "Baja Ringan Harga Tajur Halang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY CHILD] - RENG BAJA RINGAN HARGA (LOKASI)
  // 🧠 TYPE: MONEY_CHILD (ada nama lokasi di akhir)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/reng-baja-ringan-harga-bandung.html": "Reng Baja Ringan Harga Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/reng-baja-ringan-harga-bogor.html": "Reng Baja Ringan Harga Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/reng-baja-ringan-harga-depok.html": "Reng Baja Ringan Harga Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/reng-baja-ringan-harga-kota-bekasi.html": "Reng Baja Ringan Harga Kota Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/reng-baja-ringan-harga-bekasi.html": "Reng Baja Ringan Harga Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/reng-baja-ringan-harga-sukabumi.html": "Reng Baja Ringan Harga Sukabumi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB1] - UKURAN & PERHITUNGAN (INFORMASIONAL)
  // 🧠 TYPE: SUB1 (WAJIB tampil di breadcrumb)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/04/reng-baja-ringan-harga.html": "Reng Baja Ringan Harga",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/harga-reng-baja-ringan-6-meter.html": "Harga Reng Baja Ringan 6 Meter",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/harga-reng-baja-ringan-per-batang.html": "Harga Reng Baja Ringan Per Batang",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/harga-reng-baja-ringan.html": "Harga Reng Baja Ringan",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-reng.html": "Harga Baja Ringan Reng",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-kaso.html": "Harga Baja Ringan Kaso",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/baja-ringan-reng.html": "Baja Ringan Reng",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/baja-ringan-kaso.html": "Baja Ringan Kaso",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-per-kilogram.html": "Harga Baja Ringan Per Kilogram",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-per-lembar.html": "Harga Baja Ringan Per Lembar",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-per-lonjor.html": "Harga Baja Ringan Per Lonjor",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-per-meter.html": "Harga Baja Ringan Per Meter",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/baja-ringan-per-meter.html": "Baja Ringan Per Meter",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/harga-baja-ringan-per-batang.html": "Harga Baja Ringan Per Batang",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/04/baja-ringan-per-batang.html": "Baja Ringan Per Batang"  // TYPE: SUB1
};
// ============================================================
// BEKISTING POST - SUB1 & MONEY PAGE
// Parent: Bekisting (/p/bekisting.html)
// 🧠 SEO NOTE: Harga adalah [MONEY PAGE], jenis/edukasi adalah [SUB1]
// Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Bekisting > [Nama Post]
// ============================================================

const urlMappingBekistingPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA BEKISTING (WAJIB TAMPIL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/harga-bekisting.html": "Harga Bekisting",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB1] - JENIS & APLIKASI BEKISTING (INFORMASIONAL, WAJIB TAMPIL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/bekisting-panel.html": "Bekisting Panel",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-modular.html": "Bekisting Modular",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-plastik.html": "Bekisting Plastik",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-aluminum.html": "Bekisting Aluminum",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-dak-beton.html": "Bekisting Dak Beton",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-kolom.html": "Bekisting Kolom",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-sloof.html": "Bekisting Sloof",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-ring-balok.html": "Bekisting Ring Balok",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-beton-pracetak.html": "Bekisting Beton Pracetak",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-beton-ready-mix.html": "Bekisting Beton Ready Mix"  // TYPE: SUB1
};

// ============================================================
// ALUMINIUM POST - SUB1 (EDUKASI) & MONEY PAGE (HARGA)
// Parent: Aluminium (/p/aluminium.html)
// 🧠 SEO NOTE: Harga adalah [MONEY PAGE], edukasi/perbedaan adalah [SUB1]
// Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Aluminium > [Nama Post]
// ============================================================

const urlMappingAluminiumPost = {
  // ============================================================
  // [SUB1] - EDUKASI & PERBEDAAN ALUMINIUM (WAJIB TAMPIL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/aluminium-anti-karat.html": "Aluminium Anti Karat untuk Konstruksi Bangunan",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/perbedaan-aluminium-dan-baja-ringan.html": "Perbedaan Aluminium dan Baja Ringan untuk Konstruksi",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/jenis-aluminium-bangunan.html": "Jenis Aluminium Bangunan dan Kegunaannya",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/aluminium-acp.html": "Aluminium ACP (Aluminium Composite Panel)",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/aluminium-foil-bangunan.html": "Aluminium Foil untuk Bangunan",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/aluminium-profil.html": "Aluminium Profil untuk Konstruksi",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/aluminium-untuk-kanopi.html": "Aluminium untuk Kanopi",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/aluminium-untuk-partisi.html": "Aluminium untuk Partisi Bangunan",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/aluminium-untuk-pintu-jendela.html": "Aluminium untuk Pintu dan Jendela",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/aluminium-lembaran.html": "Aluminium Lembaran untuk Konstruksi",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/aluminium-hollow.html": "Aluminium Hollow untuk Bangunan",  // TYPE: SUB1
  
  // ============================================================
  // [MONEY PAGE] - HARGA ALUMINIUM (WAJIB TAMPIL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/harga-aluminium-acp.html": "Harga Aluminium ACP Terbaru",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-aluminium-per-kg.html": "Harga Aluminium per Kg",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-aluminium-hollow.html": "Harga Aluminium Hollow Terbaru",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-aluminium.html": "Harga Aluminium Terbaru"  // TYPE: MONEY_MASTER
};

// ============================================================
// BAJA TULANGAN POST - MONEY PAGE (HARGA BESI BETON)
// Parent: Baja Tulangan (/p/baja-tulangan.html)
// 🧠 SEO NOTE: Semua URL adalah [MONEY PAGE] untuk harga besi beton, besi behel, dll.
// Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Baja Tulangan > [Nama Post]
// ============================================================

const urlMappingBajaTulanganPost = {
  // ============================================================
  // [MONEY PAGE] - BESI BETON (UMUM)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/besi-beton.html": "Besi Beton",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton.html": "Harga Besi Beton",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-per-kg.html": "Harga Besi Beton per Kg",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/daftar-harga-besi-beton.html": "Daftar Harga Besi Beton",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-12mm-per-batang.html": "Harga Besi Beton 12mm per Batang",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-10mm.html": "Harga Besi Beton 10mm",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-12mm.html": "Harga Besi Beton 12mm",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - HARGA PER KOTA (MONEY_CHILD)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-garut.html": "Harga Besi Beton Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-bandung.html": "Harga Besi Beton Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-karawang.html": "Harga Besi Beton Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-bekasi.html": "Harga Besi Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-tangerang.html": "Harga Besi Beton Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-depok.html": "Harga Besi Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-bogor.html": "Harga Besi Beton Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-jakarta.html": "Harga Besi Beton Jakarta",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY PAGE] - BESI BETON ULIR
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-per-kg.html": "Harga Besi Beton Ulir per Kg",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-10-mm.html": "Harga Besi Beton Ulir 10 mm",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-12-mm.html": "Harga Besi Beton Ulir 12 mm",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-13-mm.html": "Harga Besi Beton Ulir 13 mm",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-16-mm.html": "Harga Besi Beton Ulir 16 mm",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-per-batang.html": "Harga Besi Beton Ulir per Batang",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-12-mm-per-batang.html": "Harga Besi Beton Ulir 12 mm per Batang",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/besi-beton-ulir.html": "Besi Beton Ulir",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - BESI BETON POLOS
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/besi-beton-polos.html": "Besi Beton Polos",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - BESI BEHEL
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/besi-behel.html": "Besi Behel",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-besi-behel.html": "Harga Besi Behel"  // TYPE: MONEY_MASTER
};

// ============================================================
// WIREMESH POST - SUB1 & MONEY PAGE
// Parent: Wiremesh (/p/wiremesh.html)
// 🧠 SEO NOTE: Harga adalah [MONEY PAGE], edukasi/perbedaan adalah [SUB1]
// Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Wiremesh > [Nama Post]
// ============================================================

const urlMappingWiremeshPost = {
  // ============================================================
  // [SUB1] - EDUKASI & PERBEDAAN WIREMESH (WAJIB TAMPIL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/perbedaan-wiremesh-dan-besi-beton.html": "Perbedaan Wiremesh dan Besi Beton",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/wiremesh-untuk-jalan-beton.html": "Wiremesh untuk Jalan Beton",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/wiremesh-untuk-plat-lantai.html": "Wiremesh untuk Plat Lantai",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/jenis-wiremesh.html": "Jenis Wiremesh",  // TYPE: SUB1
  
  // ============================================================
  // [SUB1] - SPESIFIKASI WIREMESH (WAJIB TAMPIL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/wiremesh-m6.html": "Wiremesh M6",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/berat-wiremesh-per-lembar.html": "Berat Wiremesh per Lembar",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/ukuran-wiremesh.html": "Ukuran Wiremesh",  // TYPE: SUB1
  
  // ============================================================
  // [MONEY PAGE] - HARGA WIREMESH (WAJIB TAMPIL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/harga-wiremesh-m10.html": "Harga Wiremesh M10",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-wiremesh-m8.html": "Harga Wiremesh M8",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-wiremesh.html": "Harga Wiremesh",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-besi-wiremesh.html": "Harga Besi Wiremesh"  // TYPE: MONEY_MASTER
};

// ============================================================
// BONDEX POST - SUB1 & MONEY PAGE
// Parent: Bondex (/p/bondex.html)
// 🧠 SEO NOTE: Harga adalah [MONEY PAGE], edukasi/perbedaan adalah [SUB1]
// Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Bondex > [Nama Post]
// ============================================================

const urlMappingBondexPost = {
  // ============================================================
  // [SUB1] - EDUKASI & PERBEDAAN BONDEX (WAJIB TAMPIL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/bondex-galvanis.html": "Bondex Galvanis",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/perbedaan-bondex-dan-floordeck.html": "Perbedaan Bondex dan Floordeck",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bondex-untuk-dak-beton.html": "Bondex untuk Dak Beton",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bondex-untuk-plat-lantai.html": "Bondex untuk Plat Lantai",  // TYPE: SUB1
  
  // ============================================================
  // [SUB1] - SPESIFIKASI BONDEX (WAJIB TAMPIL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/berat-bondex.html": "Berat Bondex",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/tebal-bondex.html": "Tebal Bondex",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/ukuran-bondex.html": "Ukuran Bondex",  // TYPE: SUB1
  
  // ============================================================
  // [MONEY PAGE] - HARGA BONDEX (WAJIB TAMPIL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/harga-bondex-per-meter.html": "Harga Bondex per Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-bondex-per-lembar.html": "Harga Bondex per Lembar",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/05/harga-bondex.html": "Harga Bondex"  // TYPE: MONEY_MASTER
};

// ============================================================
// 🔴 URL YANG PERLU DIPERBAIKI
// ============================================================

/*
| URL | Masalah | Solusi |
|-----|---------|--------|
| /2019/04/distributor-besi-bangunan-terlengkap.html | 404 (tidak ditemukan) | Buat konten atau redirect ke /2019/04/harga-besi-bangunan.html |

📌 CATATAN: URL di atas tidak dimasukkan ke const karena mengembalikan status 404.
*/
// ============================================================
// BESI BETON ULIR POST - KOSONG (PERLU DIBUAT)
// Parent: Besi Beton Ulir (/p/besi-beton-ulir.html)
// 🧠 SEO NOTE: Const ini kosong. Jika diperlukan, tambahkan URL post untuk besi beton ulir.
// ============================================================

const urlMappingBesiBetonUlirPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA PER BATANG (TRANSACTIONAL)
  // 🧠 TYPE: MONEY_MASTER
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Besi Beton Ulir > Harga Besi Beton Ulir per Batang
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-ulir-per-batang.html": "Harga Besi Beton Ulir per Batang",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - DAFTAR HARGA LENGKAP (TRANSACTIONAL)
  // 🧠 TYPE: MONEY_MASTER
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Besi Beton Ulir > Daftar Harga Besi Beton Ulir
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/05/daftar-harga-besi-beton-ulir.html": "Daftar Harga Besi Beton Ulir",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB1] - SPESIFIKASI SNI (EDUKASI)
  // 🧠 TYPE: SUB1
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Besi Beton Ulir > Besi Beton Ulir SNI
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/05/besi-beton-ulir-sni.html": "Besi Beton Ulir SNI"  // TYPE: SUB1
};

// ============================================================
// BESI BETON POLOS POST - KOSONG (PERLU DIBUAT)
// Parent: Besi Beton Polos (/p/besi-beton-polos.html)
// 🧠 SEO NOTE: Const ini kosong. Jika diperlukan, tambahkan URL post untuk besi beton polos.
// ============================================================

const urlMappingBesiBetonPolosPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA PER BATANG (TRANSACTIONAL)
  // 🧠 TYPE: MONEY_MASTER
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Besi Beton Polos > Harga Besi Beton Polos per Batang
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/05/harga-besi-beton-polos-per-batang.html": "Harga Besi Beton Polos per Batang",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - DAFTAR HARGA LENGKAP (TRANSACTIONAL)
  // 🧠 TYPE: MONEY_MASTER
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Besi Beton Polos > Daftar Harga Besi Beton Polos
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/05/daftar-harga-besi-beton-polos.html": "Daftar Harga Besi Beton Polos"  // TYPE: MONEY_MASTER
};

// ============================================================
// BEKISTING BAJA POST - SUB1 (EDUKASI) & MONEY PAGE (HARGA)
// Parent: Bekisting Baja (/p/bekisting-baja.html)
// 🧠 SEO NOTE: Harga adalah [MONEY PAGE], jenis/edukasi adalah [SUB1]
// Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Bekisting Baja > [Nama Post]
// ============================================================

const urlMappingBekistingBajaPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA BEKISTING BAJA
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil di breadcrumb)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/harga-bekisting-baja.html": "Harga Bekisting Baja",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB1] - JENIS & APLIKASI BEKISTING BAJA (INFORMASIONAL)
  // 🧠 TYPE: SUB1 (WAJIB tampil di breadcrumb karena edukasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/bekisting-baja-ringan.html": "Bekisting Baja Ringan",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-baja-modular.html": "Bekisting Baja Modular",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-baja-dak.html": "Bekisting Baja Dak",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-baja-kolom.html": "Bekisting Baja Kolom",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-baja-sloof.html": "Bekisting Baja Sloof",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-baja-ring-balok.html": "Bekisting Baja Ring Balok",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-baja-pracetak.html": "Bekisting Baja Pracetak",  // TYPE: SUB1
  
  // ============================================================
  // [SUB1] - PERBANDINGAN & APLIKASI KHUSUS
  // 🧠 TYPE: SUB1 (WAJIB tampil di breadcrumb karena edukasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/perbandingan-bekisting-baja-vs-kayu.html": "Perbandingan Bekisting Baja vs Kayu",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-baja-untuk-jalan-beton.html": "Bekisting Baja untuk Jalan Beton",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-baja-galvanis.html": "Bekisting Baja Galvanis"  // TYPE: SUB1
};

// ============================================================
// BEKISTING KAYU POST - SUB1 (EDUKASI) & MONEY PAGE (HARGA)
// Parent: Bekisting Kayu (/p/bekisting-kayu.html)
// 🧠 SEO NOTE: Harga adalah [MONEY PAGE], edukasi/spesifikasi adalah [SUB1]
// Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Bekisting Kayu > [Nama Post]
// ============================================================

const urlMappingBekistingKayuPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA BEKISTING KAYU
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil di breadcrumb)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/harga-bekisting-kayu.html": "Harga Bekisting Kayu",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB1] - APLIKASI & SPESIFIKASI BEKISTING KAYU
  // 🧠 TYPE: SUB1 (WAJIB tampil di breadcrumb karena edukasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/bekisting-kayu-untuk-dak-beton.html": "Bekisting Kayu untuk Dak Beton",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-kayu-untuk-kolom.html": "Bekisting Kayu untuk Kolom",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-kayu-untuk-sloof.html": "Bekisting Kayu untuk Sloof",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-kayu--ring-balok.html": "Bekisting Kayu untuk Ring Balok",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/ukuran-bekisting-kayu.html": "Ukuran Bekisting Kayu",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/tebal-bekisting-kayu.html": "Tebal Bekisting Kayu",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-kayu-untuk-jalan-beton.html": "Bekisting Kayu untuk Jalan Beton",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/bekisting-kayu-laminasi.html": "Bekisting Kayu Laminasi"  // TYPE: SUB1
};

// ============================================================
// SCAFFOLDING POST - SUB1 (EDUKASI) & MONEY PAGE (HARGA)
// Parent: Scaffolding (/p/scaffolding.html)
// 🧠 SEO NOTE: Harga adalah [MONEY PAGE], jenis/ukuran adalah [SUB1]
// Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Scaffolding > [Nama Post]
// ============================================================

const urlMappingScaffoldingPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA SCAFFOLDING
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil di breadcrumb)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/harga-scaffolding.html": "Harga Scaffolding Terbaru",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB1] - JENIS SCAFFOLDING
  // 🧠 TYPE: SUB1 (WAJIB tampil di breadcrumb karena edukasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/scaffolding-frame.html": "Scaffolding Frame",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/scaffolding-andang.html": "Scaffolding Andang",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/scaffolding-pipa.html": "Scaffolding Pipa",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/scaffolding-ringlock.html": "Scaffolding Ringlock",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/scaffolding-cuplock.html": "Scaffolding Cuplock",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/scaffolding-galvanis.html": "Scaffolding Galvanis",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/scaffolding-baja.html": "Scaffolding Baja",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2019/05/scaffolding-modular.html": "Scaffolding Modular",  // TYPE: SUB1
  
  // ============================================================
  // [SUB1] - SPESIFIKASI SCAFFOLDING
  // 🧠 TYPE: SUB1 (WAJIB tampil di breadcrumb karena edukasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/ukuran-scaffolding.html": "Ukuran Scaffolding Standar Proyek"  // TYPE: SUB1
};

// ============================================================
// PEREKAT BETON EPOXY POST - KOSONG (PERLU DIBUAT)
// Parent: Perekat Beton Epoxy (/p/perekat-beton-epoxy.html)
// 🧠 SEO NOTE: Const ini kosong. Jika diperlukan, tambahkan URL post untuk perekat beton epoxy.
// ============================================================

const urlMappingPerekatBetonEpoxyPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA EPOXY BETON
  // 🧠 TYPE: MONEY_MASTER
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Perekat Beton Epoxy > Harga Epoxy Beton
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/05/harga-epoxy-beton.html": "Harga Epoxy Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB1] - JENIS EPOXY BETON (EDUKASI)
  // 🧠 TYPE: SUB1
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Perekat Beton Epoxy > Jenis Epoxy Beton
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/05/jenis-epoxy-beton.html": "Jenis Epoxy Beton",  // TYPE: SUB1
  
  // ============================================================
  // [SUB1] - CARA APLIKASI EPOXY BETON (EDUKASI)
  // 🧠 TYPE: SUB1
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Perekat Beton Epoxy > Cara Aplikasi Epoxy Beton
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/05/cara-aplikasi-epoxy-beton.html": "Cara Aplikasi Epoxy Beton"  // TYPE: SUB1
};

// ============================================================
// MORTAR STRUKTURAL POST - KOSONG (PERLU DIBUAT)
// Parent: Mortar Struktural (/p/mortar-struktural.html)
// 🧠 SEO NOTE: Const ini kosong. Jika diperlukan, tambahkan URL post untuk mortar struktural.
// ============================================================

const urlMappingMortarStrukturalPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA MORTAR STRUKTURAL
  // 🧠 TYPE: MONEY_MASTER
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Mortar Struktural > Harga Mortar Struktural
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/05/harga-mortar-struktural.html": "Harga Mortar Struktural",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB1] - JENIS MORTAR STRUKTURAL (EDUKASI)
  // 🧠 TYPE: SUB1
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Mortar Struktural > Jenis Mortar Struktural
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/05/jenis-mortar-struktural.html": "Jenis Mortar Struktural"  // TYPE: SUB1
};

// ============================================================
// SEMEN PUTIH POST - KOSONG (PERLU DIBUAT)
// Parent: Semen Putih (/p/semen-putih.html)
// 🧠 SEO NOTE: ⚠️ PERINGATAN: URL yang disarankan (harga-semen-putih & fungsi-semen-putih) menghasilkan 404.
//     Perlu dibuatkan konten terlebih dahulu sebelum mapping diaktifkan.
// ============================================================

const urlMappingSemenPutihPost = {
  // ============================================================
  // [MONEY PAGE] - HARGA SEMEN PUTIH
  // 🧠 TYPE: MONEY_MASTER
  // ⚠️ STATUS: 404 - Perlu dibuat kontennya
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Semen Putih > Harga Semen Putih
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/05/harga-semen-putih.html": "Harga Semen Putih",  // TYPE: MONEY_MASTER (404 - PERLU DIBUAT)
  
  // ============================================================
  // [SUB1] - FUNGSI SEMEN PUTIH (EDUKASI)
  // 🧠 TYPE: SUB1
  // ⚠️ STATUS: 404 - Perlu dibuat kontennya
  // Breadcrumb: Home > Material Konstruksi > Material Struktur Bangunan > Semen Putih > Fungsi Semen Putih
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/05/fungsi-semen-putih.html": "Fungsi Semen Putih"  // TYPE: SUB1 (404 - PERLU DIBUAT)
};

// ============================================================
// 🟡 RINGKASAN TYPE YANG DIGUNAKAN
// ============================================================
/*
| Type | Nama | Fungsi | Boleh Skip? |
|------|------|--------|-------------|
| MONEY_MASTER | Money Page | Harga, jual, beli, sewa | ❌ TIDAK (WAJIB tampil) |
| SUB1 | Bridge/Education | Panduan, jenis, spesifikasi, perbandingan | ❌ TIDAK (WAJIB tampil) |
| SUB2 | Kategori | Material struktur, atap, finishing | ✅ BOLEH skip |
| VARIANT | Spesifikasi produk | Genteng beton, besi ukuran 10mm | ❌ TIDAK (WAJIB tampil) |
*/

// ============================================================
// FUNGSI GENERATE BREADCRUMB - VERSI SEO TERCANGGIH (FINAL)
// UNTUK SEMUA PILLAR (PRODUK, MATERIAL, JASA, INTERIOR, DLL)
// MAX_LEVEL = 4 (TERMASUK HOME)
// TANPA PENGEKUSUSAN SUB2_TURUNAN
// ============================================================

// ============================================================
// FUNGSI GENERATE BREADCRUMB - VERSI FINAL
// UNTUK SEMUA PILLAR (PRODUK, MATERIAL, JASA, INTERIOR, DLL)
// MAX_LEVEL = 4 (TERMASUK HOME)
// SKIP LEVEL BEKERJA UNTUK PILLAR & SUB2
// ============================================================

function generateBreadcrumbForMapping(mappingObj, currentUrl, breadcrumbItems = [], pillarType = 'JASA_KONSTRUKSI') {
    
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    
    // ============================================================
    // 1. VALIDASI PILLAR TYPE
    // ============================================================
    const validPillarTypes = ['PRODUK_KONSTRUKSI', 'MATERIAL_KONSTRUKSI', 'JASA_KONSTRUKSI', 
                               'PRODUK_INTERIOR', 'JASA_DESAIN_INTERIOR'];
    if (!validPillarTypes.includes(pillarType)) {
        console.error(`❌ ERROR: "${pillarType}" BUKAN PILLAR TYPE yang valid!`);
        console.error(`   Gunakan salah satu dari: ${validPillarTypes.join(', ')}`);
        return null;
    }
    
    const pageTitle = mappingObj[currentUrl];
    if (!pageTitle) {
        console.error(`❌ ERROR: URL "${currentUrl}" tidak ditemukan di mapping`);
        return null;
    }
    
    // ============================================================
    // 2. KUMPULKAN SEMUA NAMA HALAMAN DARI MAPPING (UNTUK REFERENSI)
    // ============================================================
    const knownPages = [];
    for (const [url, name] of Object.entries(mappingObj)) {
        if (name && typeof name === 'string') {
            knownPages.push(name.toLowerCase());
        }
    }
    
    // ============================================================
    // 3. DETEKSI TYPE OTOMATIS
    // ============================================================
    function detectPageType(pageName, position, totalLevels) {
        const lowerName = pageName.toLowerCase();
        const parts = pageName.split(' ');
        const lastWord = parts[parts.length - 1].toLowerCase();
        const firstWord = parts[0].toLowerCase();
        const wordCount = parts.length;
        
        // PILLAR: posisi pertama
        if (position === 0) return 'PILLAR';
        
        // MONEY_LEADGEN
        if (lowerName.startsWith('konsultasi')) return 'MONEY_LEADGEN';
        
        // MONEY_MASTER (deteksi transaksi)
        const transactionWords = ['harga', 'sewa', 'jual', 'beli', 'pesan', 'booking', 'order', 'rental',
            'biaya', 'tarif', 'rate', 'cost', 'price', 'fee', 'charge', 'promo', 'diskon', 'obral',
            'gratis', 'voucher', 'cashback', 'cicilan', 'kredit', 'dp', 'angsuran', 'quote', 'penawaran', 'estimasi'];
        
        for (const word of transactionWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'MONEY_MASTER';
            }
        }
        
        // SUB1 (deteksi panduan)
        const guideWords = ['panduan', 'cara', 'tips', 'tutorial', 'langkah', 'petunjuk', 'pedoman', 'instruksi',
            'guide', 'how to', 'step by step', 'strategi', 'metode', 'teknik', 'rahasia', 'kunci sukses',
            'wajib tahu', 'perlu diketahui', 'edukasi', 'belajar', 'mempelajari', 'pemahaman', 'solusi', 'jawaban'];
        
        for (const word of guideWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ')) {
                return 'SUB1';
            }
        }
        
        // VARIANT (deteksi angka atau kata kunci)
        if (/\d/.test(lowerName)) return 'VARIANT';
        
        const variantWords = ['tipe', 'type', 'ukuran', 'model', 'varian', 'warna', 'bentuk', 'seri', 'versi',
            'grade', 'kelas', 'standar', 'jenis', 'macam', 'ragam', 'kategori', 'spesifikasi', 'detail', 'rinci',
            'kapasitas', 'volume', 'berat', 'panjang', 'lebar', 'tinggi', 'tebal', 'diameter', 'radius', 'luas',
            'bahan', 'material', 'komposisi', 'kualitas', 'mutu', 'kode', 'plus', 'minus', 'kelebihan', 'kekurangan',
            'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'putih', 'hitam', 'merah', 'biru', 'hijau',
            'kecil', 'besar', 'sedang', 'mini', 'maxi', 'jumbo', 'extra', 'super'];
        
        for (const word of variantWords) {
            if (lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'VARIANT';
            }
        }
        
        // MONEY_CHILD (deteksi lokasi)
        function isLikelyLocation(word) {
            if (word.length < 3 || word.length > 25) return false;
            if (!/^[a-zA-Z]+$/.test(word)) return false;
            if (word === firstWord) return false;
            
            const notLocationWords = ['mini', 'maxi', 'super', 'extra', 'plus', 'pro', 'max', 'ultra',
                'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'grade', 'murah', 'mahal', 'hemat',
                'premium', 'standar', 'ekonomis', 'kecil', 'besar', 'sedang', 'panjang', 'pendek', 'tebal', 'tipis',
                'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'ungu', 'abu', 'coklat'];
            if (notLocationWords.includes(word)) return false;
            
            const isKnownProduct = knownPages.some(known => known === word || (known.includes(word) && word.length > 3));
            if (isKnownProduct) return false;
            
            if (word.length >= 4 && word.length <= 12) return true;
            if (/[aiueo]$/.test(word) && word.length >= 4) return true;
            
            const locationPatterns = ['ang', 'ung', 'eng', 'ong', 'an', 'in', 'un', 'en', 
                'ap', 'ip', 'op', 'ar', 'ur', 'er', 'or', 'karta', 'jaya', 'pura', 'sari', 'mulya', 'agung', 'asih', 'ayem'];
            for (const pattern of locationPatterns) {
                if (word.endsWith(pattern) && word.length >= 4) return true;
            }
            
            if (word.length >= 5 && /[aiueo].*[aiueo]/.test(word)) return true;
            return false;
        }
        
        if (wordCount >= 2 && isLikelyLocation(lastWord)) return 'MONEY_CHILD';
        
        return 'SUB2';
    }
    
    // ============================================================
    // 4. FUNGSI BANTUAN
    // ============================================================
    function generateIdFromName(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '') + 'Post';
    }
    
    // ============================================================
    // 5. BANGUN LEVELS DARI ARRAY OBJECT (NAMA + URL)
    // ============================================================
    const allLevels = [];
    for (let i = 0; i < breadcrumbItems.length; i++) {
        const item = breadcrumbItems[i];
        const name = typeof item === 'string' ? item : item.name;
        const url = typeof item === 'string' ? null : item.url;
        
        allLevels.push({
            name: name,
            url: url,
            type: detectPageType(name, i, breadcrumbItems.length),
            id: generateIdFromName(name),
            position: i
        });
    }
    
    // ============================================================
    // 6. VALIDASI & FALLBACK URL
    // ============================================================
    for (const level of allLevels) {
        if (!level.url) {
            let foundUrl = null;
            for (const [url, name] of Object.entries(mappingObj)) {
                if (name === level.name) {
                    foundUrl = url.startsWith('http') ? url : DOMAIN + url;
                    break;
                }
            }
            if (!foundUrl) {
                const slug = level.name.toLowerCase().replace(/ /g, '-');
                foundUrl = `${DOMAIN}/p/${slug}.html`;
            }
            level.url = foundUrl;
        } else if (!level.url.startsWith('http')) {
            level.url = DOMAIN + level.url;
        }
    }
    
    // ============================================================
    // 7. TENTUKAN LEVEL YANG AKAN DITAMPILKAN (MAX 4 LEVEL)
    // ============================================================
    const selectedLevels = [];
    
    // Level 1: Home (WAJIB)
    selectedLevels.push({ name: 'BJR', url: DOMAIN, isHome: true });
    
    // Hitung slot tersisa (MAX_LEVEL - 1 untuk home - 1 untuk halaman saat ini)
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`📊 ========================================`);
    console.log(`📊 Breadcrumb Generator - SEO Tercanggih`);
    console.log(`📊 Max level: ${MAX_LEVEL}, slot untuk parent: ${remainingSlots}`);
    console.log(`📊 Breadcrumb items: ${allLevels.map(l => l.name).join(' → ')}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (level terakhir) - WAJIB tampil
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" (${parentTerdekat.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Level lainnya (dari awal sampai sebelum parent terdekat)
    const otherLevels = [...allLevels.slice(0, allLevels.length - 1)].reverse();
    const canSkipTypes = ['PILLAR', 'SUB2'];
    
    for (const level of otherLevels) {
        if (remainingSlots <= 0) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - tidak ada slot tersisa`);
            continue;
        }
        
        if (canSkipTypes.includes(level.type)) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - type boleh skip`);
            continue;
        }
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" (${level.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Halaman saat ini (WAJIB)
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    selectedLevels.push({
        name: pageTitle,
        url: currentFullUrl,
        isCurrent: true
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`✅ FINAL (${selectedLevels.length} level): ${selectedLevels.map(l => l.name).join(' → ')}`);
    
    // ============================================================
    // 8. GENERATE HTML BREADCRUMB
    // ============================================================
    let breadcrumbHtml = `<div class="breadcrumbs">\n<span>\n`;
    breadcrumbHtml += `<a href="${DOMAIN}/" itemprop="item" title="Beton Jaya Readymix">`;
    breadcrumbHtml += `<meta content="1" itemprop="position">`;
    breadcrumbHtml += `<span itemprop="name">BJR</span></a>\n`;
    breadcrumbHtml += `</span>\n &nbsp;›&nbsp;\n\n`;
    breadcrumbHtml += `<span>\n<div id="breadcrumbContainer" style="display: inline;">\n`;
    
    for (let i = 1; i < selectedLevels.length; i++) {
        const level = selectedLevels[i];
        const isLast = (i === selectedLevels.length - 1);
        
        if (!isLast) {
            breadcrumbHtml += `<a href="${level.url}" id="${level.id}" title="${level.name.toUpperCase()}" style="visibility: visible;">`;
            breadcrumbHtml += `<span id="${level.id}Name">${level.name}</span>&nbsp;›&nbsp;\n`;
            breadcrumbHtml += `</a>\n`;
        } else {
            breadcrumbHtml += `<span id="pageNameBreadcrumb">${level.name}</span>\n`;
        }
    }
    
    breadcrumbHtml += `</div>\n</span>\n</div>`;
    
    // ============================================================
    // 9. GENERATE JSON-LD SCHEMA
    // ============================================================
    const jsonLdItems = [];
    jsonLdItems.push({ "@type": "ListItem", "position": 1, "name": "Beton Jaya Readymix", "item": DOMAIN });
    
    for (let i = 1; i < selectedLevels.length; i++) {
        jsonLdItems.push({
            "@type": "ListItem",
            "position": i + 1,
            "name": selectedLevels[i].name,
            "item": selectedLevels[i].url
        });
    }
    
    // ============================================================
    // 10. HAPUS BREADCRUMB LAMA & INJECT YANG BARU
    // ============================================================
    // Hapus semua breadcrumb lama (manual)
    const oldBreadcrumbs = document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]');
    oldBreadcrumbs.forEach(el => el.remove());
    
    // Hapus JSON-LD lama
    const oldJsonLd = document.querySelector('script[data-breadcrumb="true"]');
    if (oldJsonLd) oldJsonLd.remove();
    
    // Inject HTML breadcrumb baru
    const mainContent = document.querySelector('main, article, .content, #main-content, .post-content');
    if (mainContent?.firstChild) {
        mainContent.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }
    
    // Inject JSON-LD baru
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": jsonLdItems
    });
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected ke DOM`);
    return breadcrumbHtml;
}

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
   
/* ==========================================================
   🧩 HybridDateModified v2.5 — StableHash + Safe Load Order
   Fitur:
   - Menjamin detect-evergreen.js dimuat lebih dulu
   - Update <meta dateModified> hanya jika URL terdaftar
   - Stable hash → hasil dateModified konsisten
   ========================================================== */
/*
(async function runHybridDateModified() {
  try {
    // --- Loader JS eksternal dengan Promise ---
    function loadExternalJSAsync(src) {
      return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve(src);
        s.onerror = () => reject(new Error("Gagal load " + src));
        document.head.appendChild(s);
      });
    }


     // --- loader evergreen JS dengan sessionStorage (anti 429) ---
    async function loadEvergreenScript() {
      const KEY = "evergreenScriptLoaded";

      const needReload =
        !sessionStorage.getItem(KEY) ||
        !window.AEDMetaDates ||
        !window.detectEvergreenReady;

      if (!needReload) {
        console.log("⚡ detect-evergreen.js sudah aktif & variable ready — SKIP load");
      } else {
        console.log("⏳ load detect-evergreen.js dari GitHack…");
        try {
          await loadExternalJSAsync(
            "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
          );
          window.detectEvergreenReady = true;
          sessionStorage.setItem(KEY, "true");
          console.log("✅ detect-evergreen.js LOADED & READY");
        } catch (err) {
          console.error("❌ Gagal load detect-evergreen.js", err);
          sessionStorage.removeItem(KEY);
        }
      }

      // --- ALWAYS run evergreen check tiap halaman ---
      if (typeof window.runEvergreenCheck === "function") {
        console.log("🔁 Running evergreen check for this page...");
        window.runEvergreenCheck();
      } else {
        console.warn("⚠️ runEvergreenCheck tidak ditemukan!");
      }
    }
    // --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},
      urlMappingReadyMixLokasiPost,
		urlMappingReadyMixPillarPost,
		urlMappingReadyMixMutuPost,
		urlMappingReadyMixKegunaanPost,
		urlMappingReadyMixPlantPost,
		urlMappingReadyMixPanduanPost,
		urlMappingDakBetonPost,
		urlMappingPondasiPost,
		urlMappingSloofPost,
		urlMappingRingBalokPost,
		urlMappingSemenPortlandPost,
		urlMappingSemenInstanPost,
		urlMappingBesiBangunanPost,
		urlMappingBajaKonvensionalPost,
		urlMappingBajaRinganStrukturPost,
		urlMappingBekistingPost,
		urlMappingAluminiumPost,
		urlMappingBajaTulanganPost,
		urlMappingWiremeshPost,
		urlMappingBondexPost,
		urlMappingBesiBetonUlirPost,
		urlMappingBesiBetonPolosPost,
		urlMappingBekistingBajaPost,
		urlMappingBekistingKayuPost,
		urlMappingScaffoldingPost,
		urlMappingPerekatBetonEpoxyPost,
		urlMappingMortarStrukturalPost,
		urlMappingSemenPutihPost
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrl]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrl}`);
      return;
    }
    
    const globalNextUpdate1 = "2026-02-18T00:00:00.000Z";
    console.log(`🌐 [AutoMeta] Detected material-struktur-bangunan-post: ${cleanUrl}`);

    // --- pastikan meta nextUpdate1 ada ---
    let metaNextUpdate1 = document.querySelector('meta[name="nextUpdate1"]');
    if (!metaNextUpdate1) {
      metaNextUpdate1 = document.createElement("meta");
      metaNextUpdate1.setAttribute("name", "nextUpdate1");
      metaNextUpdate1.setAttribute("content", globalNextUpdate1);
      document.head.appendChild(metaNextUpdate1);
      console.log(`🆕 [AutoMeta] Meta nextUpdate1 ditambahkan → ${globalNextUpdate1}`);
    } else {
      console.log("✅ [AutoMeta] Meta nextUpdate1 sudah ada, tidak dibuat ulang.");
    }

	      // ✅ Load evergreen JS (anti 429)
    await loadEvergreenScript();
    // --- pastikan detect-evergreen.js selesai dimuat ---
    console.log("✅ detect-evergreen.js selesai dimuat.");

    // --- pastikan AEDMetaDates sudah tersedia ---
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
      return;
    }

    const { dateModified, nextUpdate, type } = window.AEDMetaDates;

    // 🔒 Stable hash untuk variasi waktu stabil
    function stableHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    }

    const hash = stableHash(cleanUrl);
    const offsetSeconds = hash % 86400;
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = finalDate.toISOString();

    // 🧱 Update meta dateModified
    [
      ['meta[itemprop="dateModified"]', 'itemprop', 'dateModified'],
      ['meta[name="dateModified"]', 'name', 'dateModified'],
      ['meta[property="article:modified_time"]', 'property', 'article:modified_time']
    ].forEach(([selector, attr, val]) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, val);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", isoDate);
    });

	
				// Pastikan AEDMetaDates sudah ada minimal sebagai objek kosong
	window.AEDMetaDates = window.AEDMetaDates || {};
	
	// Update hanya properti dateModified tanpa menghapus lainnya
	window.AEDMetaDates = {
	  ...window.AEDMetaDates,
	  dateModified: isoDate
	};
	
	console.log("✅ AEDMetaDates updated material-struktur-bangunan-post:", window.AEDMetaDates); 
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrl} → ${isoDate} | type=${type || "-"}`);

    // 🧩 Perbarui schema jika ada
    const schemaEl = document.querySelector('script[data-schema="evergreen-maintenance"]');
    if (schemaEl) {
      try {
        const data = JSON.parse(schemaEl.textContent.trim());
        data.dateModified = isoDate;
        if (data.maintenanceSchedule) data.maintenanceSchedule.scheduledTime = nextUpdate;
        schemaEl.textContent = JSON.stringify(data, null, 2);
        console.log(`🔄 Schema maintenance diperbarui → dateModified: ${isoDate}`);
      } catch (err) {
        console.error("❌ Gagal update schema:", err);
      }
    }

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();
*/	
	// --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},
      urlMappingReadyMixLokasiPost,
		urlMappingReadyMixPillarPost,
		urlMappingReadyMixMutuPost,
		urlMappingReadyMixKegunaanPost,
		urlMappingReadyMixPlantPost,
		urlMappingReadyMixPanduanPost,
		//urlMappingDakBetonPost,
		//urlMappingPondasiPost,
		//urlMappingSloofPost,
		//urlMappingRingBalokPost,
		urlMappingSemenPortlandPost,
		urlMappingSemenInstanPost,
		urlMappingBesiBangunanPost,
		urlMappingBajaKonvensionalPost,
		urlMappingBajaRinganStrukturPost,
		urlMappingBekistingPost,
		urlMappingAluminiumPost,
		urlMappingBajaTulanganPost,
		urlMappingWiremeshPost,
		urlMappingBondexPost,
		urlMappingBesiBetonUlirPost,
		urlMappingBesiBetonPolosPost,
		urlMappingBekistingBajaPost,
		urlMappingBekistingKayuPost,
		urlMappingScaffoldingPost,
		urlMappingPerekatBetonEpoxyPost,
		urlMappingMortarStrukturalPost,
		urlMappingSemenPutihPost
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrl]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrl}`);
      return;
    }

	(async function runHybridDateModified() {
		  try {
		
		    function loadExternalJS(src) {
		      return new Promise((resolve) => {
		        if (document.querySelector(`script[src="${src}"]`)) {
		          resolve();
		          return;
		        }
		
		        const s = document.createElement("script");
		        s.src = src;
		        s.defer = true; // 🔥 PENTING
		        s.onload = resolve;
		        s.onerror = () => {
		          console.warn("[Evergreen] Gagal load:", src);
		          resolve(); // ❗ jangan reject
		        };
		        document.head.appendChild(s);
		      });
		    }
		
		    function waitForDetectEvergreen() {
		      return new Promise((resolve) => {
		        if (
		          window.__detectEvergreenReady &&
		          typeof window.detectEvergreen === "function"
		        ) {
		          resolve(true);
		        } else {
		          window.addEventListener(
		            "detectEvergreenReady",
		            () => resolve(true),
		            { once: true }
		          );
		        }
		      });
		    }
		
		    async function loadEvergreenScript(manualDate = null) {
		
		      if (typeof window.detectEvergreen !== "function") {
		        console.log("⏳ Loading detectEvergreen...");
		
		        await loadExternalJS(
		          "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
		        );
		
		        await waitForDetectEvergreen();
		        console.log("✅ detectEvergreen READY");
		      } else {
		        console.log("⚡ detectEvergreen already available");
		      }
		
		      const config = manualDate
		        ? { customDateModified: manualDate }
		        : {};
		
		      console.log("🧠 detectEvergreen config:", config);
		
		      try {
		        window.detectEvergreen(config);
		      } catch (e) {
		        console.error("[Evergreen] Execution failed:", e);
		      }
		    }
		
		    // =============================
		    // MODE PEMANGGILAN
		    // =============================
		
		    // ✔ MANUAL (ONCE UPDATE EVERGREEN)
		    await loadEvergreenScript("2026-01-26T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();
	
     // Menemukan elemen menggunakan ID
     var MaterialKonsStukturPost = document.getElementById("MaterialKonsStukturPost");
    if (!MaterialKonsStukturPost) {
        console.error("elemen Id MaterialKonsStukturPost kondisi terhapus");
        return;
    }
	
     var MaterialKonstruksiStukturPostLink = document.getElementById("MaterialKonstruksiStukturPost");
     var MaterialStrukturBangunanPostLink = document.getElementById("MaterialStrukturBangunanPost");

     //var DakBetonLink = document.getElementById("DakBeton");
     //var PondasiLink = document.getElementById("Pondasi");
     var BekistingLink = document.getElementById("Bekisting");
     var AluminiumLink = document.getElementById("Aluminium");
     //var RingBalokLink = document.getElementById("RingBalok");
     //var SloofLink = document.getElementById("Sloof");
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
     //DakBetonLink.style.visibility = 'hidden';
     //PondasiLink.style.visibility = 'hidden';
     BekistingLink.style.visibility = 'hidden';
     AluminiumLink.style.visibility = 'hidden';
     //RingBalokLink.style.visibility = 'hidden';
     //SloofLink.style.visibility = 'hidden';
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
/*
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
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
	*/
	
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
    
    // hapus elemen lain nya selain READY MIX
    removeCondition('Bekisting');
    removeCondition('Aluminium');
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
    
    // hapus semua elemen sub readymix kecuali ready mix lokasi
    removeCondition('ReadyMixMutuPost');
    removeCondition('ReadyMixPlantPost');
    removeCondition('ReadyMixKegunaanPost');
    removeCondition('ReadyMixPanduanPost');
    
    // set visibility
    MaterialKonsStukturPost.style.visibility = 'visible';
    MaterialKonstruksiStukturPostLink.style.visibility = 'visible';
    MaterialStrukturBangunanPostLink.style.visibility = 'visible';
    readyMixLink.style.visibility = 'visible';
    ReadyMixLokasiPostLink.style.visibility = 'visible';
    
    pageNameMaterialKonsStukturPost.textContent = urlMappingReadyMixLokasiPost[cleanUrl];
    
    // ✅ 1 BARIS PANGGIL FUNGSI (GANTI SEMUA JSON-LD MANUAL)
   // ✅ PANGGILAN DENGAN URL MANUAL PER LEVEL
		generateBreadcrumbForMapping(
		    urlMappingReadyMixLokasiPost,
		    cleanUrl,
		    [
		        { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
		        { name: 'Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/material-struktur-bangunan.html' },
		        { name: 'Ready Mix Beton Cor Jayamix Minimix', url: 'https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html' },
		        { name: 'Ready Mix Lokasi', url: 'https://www.betonjayareadymix.com/p/ready-mix-lokasi.html' }
		    ],
		    'MATERIAL_KONSTRUKSI'
		);
}
	
if (urlMappingReadyMixPillarPost[cleanUrl]) {
       restoreCondition('MaterialKonsStukturPost');
       restoreCondition('readyMix');
	
    //   restoreCondition('ReadyMixMutuPost');
      
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
        readyMixLink.style.visibility = 'visible';
        //ReadyMixMutuPostLink.style.visibility = 'visible';
	
        pageNameMaterialKonsStukturPost.textContent = urlMappingReadyMixPillarPost[cleanUrl];

	   generateBreadcrumbForMapping(
		    urlMappingReadyMixPillarPost,
		    cleanUrl,
		    [
		        { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
		        { name: 'Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/material-struktur-bangunan.html' },
		        { name: 'Ready Mix Beton Cor Jayamix Minimix', url: 'https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html' }
		    ],
		    'MATERIAL_KONSTRUKSI'
		);
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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

	    // ✅ 1 BARIS PANGGIL FUNGSI (GANTI SEMUA JSON-LD MANUAL)
	   		generateBreadcrumbForMapping(
		    urlMappingReadyMixMutuPost,
		    cleanUrl,
		    [
		        { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
		        { name: 'Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/material-struktur-bangunan.html' },
		        { name: 'Ready Mix Beton Cor Jayamix Minimix', url: 'https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html' },
		        { name: 'Ready Mix Mutu', url: 'https://www.betonjayareadymix.com/p/ready-mix-mutu.html' }
		    ],
		    'MATERIAL_KONSTRUKSI'
		);
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
	
	    generateBreadcrumbForMapping(
		    urlMappingReadyMixPlantPost,
		    cleanUrl,
		    [
		        { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
		        { name: 'Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/material-struktur-bangunan.html' },
		        { name: 'Ready Mix Beton Cor Jayamix Minimix', url: 'https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html' },
		        { name: 'Ready Mix Plant', url: 'https://www.betonjayareadymix.com/p/ready-mix-plant.html' }
		    ],
		    'MATERIAL_KONSTRUKSI'
		);
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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

	     generateBreadcrumbForMapping(
		    urlMappingReadyMixKegunaanPost,
		    cleanUrl,
		    [
		        { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
		        { name: 'Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/material-struktur-bangunan.html' },
		        { name: 'Ready Mix Beton Cor Jayamix Minimix', url: 'https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html' },
		        { name: 'Ready Mix Kegunaan', url: 'https://www.betonjayareadymix.com/p/ready-mix-kegunaan.html' }
		    ],
		    'MATERIAL_KONSTRUKSI'
		);
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
     ////removeCondition('DakBeton');
     //removeCondition('Pondasi');
     removeCondition('Bekisting');
     removeCondition('Aluminium');
     //removeCondition('RingBalok');
     //removeCondition('Sloof');
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
