// ─── KATEGORI ───────────────────────────────────────────────
export const kategoriList = [
  {
    id: "sekolah",
    icon: "🏫",
    nama: "Aplikasi Sekolah",
    tag: "12 Aplikasi",
    deskripsi:
      "Sistem informasi akademik, e-learning, raport digital, dan absensi online untuk pendidikan modern.",
    harga: "Mulai 150K/bln",
    rating: "★★★★★",
    gradient: "linear-gradient(135deg,#e8f5f4,#b2dfdb)",
    jumlahProduk: "12 produk tersedia",
    hargaMulai: "Mulai dari Rp 150.000/bulan",
  },
  {
    id: "kasir",
    icon: "🧾",
    nama: "Aplikasi Kasir",
    tag: "18 Aplikasi",
    deskripsi:
      "POS kasir untuk warung, kafe, toko pakaian, minimarket, dan berbagai jenis UMKM lainnya.",
    harga: "Mulai 99K/bln",
    rating: "★★★★★",
    gradient: "linear-gradient(135deg,#fef3c7,#fde68a)",
    jumlahProduk: "18 produk tersedia",
    hargaMulai: "Mulai dari Rp 99.000/bulan",
  },
  {
    id: "undangan",
    icon: "💌",
    nama: "Undangan Digital",
    tag: "35 Template",
    deskripsi:
      "Undangan pernikahan, khitanan, ulang tahun, dan acara lainnya dengan desain elegan dan animasi menarik.",
    harga: "Mulai 50K",
    rating: "★★★★★",
    gradient: "linear-gradient(135deg,#fce7f3,#fbcfe8)",
    jumlahProduk: "35 template tersedia",
    hargaMulai: "Mulai dari Rp 50.000",
  },
  {
    id: "klinik",
    icon: "🏥",
    nama: "Aplikasi Klinik",
    tag: "8 Aplikasi",
    deskripsi:
      "Manajemen pasien, antrian online, rekam medis, dan billing untuk klinik dan praktik dokter.",
    harga: "Mulai 200K/bln",
    rating: "★★★★☆",
    gradient: "linear-gradient(135deg,#dbeafe,#bfdbfe)",
    jumlahProduk: "8 produk tersedia",
    hargaMulai: "Mulai dari Rp 200.000/bulan",
  },
  {
    id: "toko",
    icon: "🛒",
    nama: "Toko Online",
    tag: "20 Template",
    deskripsi:
      "Website toko online lengkap dengan keranjang belanja, payment gateway, dan manajemen produk.",
    harga: "Mulai 120K/bln",
    rating: "★★★★★",
    gradient: "linear-gradient(135deg,#d1fae5,#a7f3d0)",
    jumlahProduk: "20 template tersedia",
    hargaMulai: "Mulai dari Rp 120.000/bulan",
  },
  {
    id: "custom",
    icon: "🛠",
    nama: "Custom Aplikasi",
    tag: "Fleksibel",
    deskripsi:
      "Tidak menemukan yang cocok? Kami buat aplikasi dari nol sesuai alur bisnis unik Anda.",
    harga: "Konsultasi Gratis",
    rating: null,
    gradient: "linear-gradient(135deg,#1d6b66,#2A8B85)",
    jumlahProduk: null,
    hargaMulai: "Harga sesuai kebutuhan",
    isDark: true,
  },
];

// ─── APLIKASI PER KATEGORI ──────────────────────────────────
export const aplikasiPerKategori = {
  sekolah: [
    {
      id: "siakademik",
      icon: "📊",
      nama: "SiAkademik Pro",
      deskripsi:
        "Sistem informasi akademik lengkap: nilai, absensi, jadwal, dan raport digital terintegrasi.",
      harga: "Rp 200K/bln",
      badge: "⭐ Best Seller",
      gradient: "linear-gradient(135deg,#e8f5f4,#a7d9d5)",
    },
    {
      id: "elearning",
      icon: "📚",
      nama: "E-Learning Sekolah",
      deskripsi:
        "Platform belajar online dengan modul, kuis, dan video pembelajaran interaktif.",
      harga: "Rp 175K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#dbeafe,#bfdbfe)",
    },
    {
      id: "absensi-qr",
      icon: "📋",
      nama: "Absensi Digital QR",
      deskripsi:
        "Absensi siswa dan guru berbasis QR Code, rekap otomatis dan notifikasi orang tua.",
      harga: "Rp 150K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#fef3c7,#fde68a)",
    },
    {
      id: "spp",
      icon: "💳",
      nama: "SPP & Pembayaran Online",
      deskripsi:
        "Manajemen tagihan SPP, histori pembayaran, dan notifikasi via WhatsApp ke wali murid.",
      harga: "Rp 160K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#d1fae5,#a7f3d0)",
    },
    {
      id: "raport",
      icon: "📰",
      nama: "Raport Digital Otomatis",
      deskripsi:
        "Generate raport PDF otomatis dari data nilai, bisa diakses orang tua secara online.",
      harga: "Rp 180K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#ede9fe,#ddd6fe)",
    },
    {
      id: "perpus",
      icon: "📖",
      nama: "Perpustakaan Digital",
      deskripsi:
        "Katalog buku digital, sistem peminjaman, dan denda otomatis berbasis web.",
      harga: "Rp 120K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#fce7f3,#fbcfe8)",
    },
  ],

  kasir: [
    {
      id: "kasir-kafe",
      icon: "☕",
      nama: "Kasir Kafe & Resto",
      deskripsi:
        "POS lengkap untuk kafe dan restoran: menu digital, meja, dapur (KDS), dan laporan penjualan.",
      harga: "Rp 120K/bln",
      badge: "⭐ Best Seller",
      gradient: "linear-gradient(135deg,#fef3c7,#fbbf24)",
    },
    {
      id: "kasir-retail",
      icon: "🛒",
      nama: "Kasir Toko Retail",
      deskripsi:
        "POS untuk toko retail dengan stok, barcode scanner, diskon, dan cetak struk otomatis.",
      harga: "Rp 99K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#d1fae5,#34d399)",
    },
    {
      id: "kasir-barbershop",
      icon: "💈",
      nama: "Kasir Barbershop & Salon",
      deskripsi:
        "Booking online, antrian, layanan, komisi karyawan, dan laporan pendapatan harian.",
      harga: "Rp 110K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#dbeafe,#60a5fa)",
    },
    {
      id: "kasir-fashion",
      icon: "👗",
      nama: "Kasir Fashion & Clothing",
      deskripsi:
        "Manajemen varian produk (ukuran/warna), stok gudang, dan laporan penjualan per SKU.",
      harga: "Rp 115K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#fce7f3,#ec4899)",
    },
    {
      id: "kasir-warung",
      icon: "🍜",
      nama: "Kasir Warung Makan",
      deskripsi:
        "Solusi sederhana untuk warung makan: pesanan, bill, dan rekap pendapatan harian yang mudah dipakai.",
      harga: "Rp 99K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#e8f5f4,#2A8B85)",
    },
    {
      id: "kasir-apotek",
      icon: "⚕️",
      nama: "Kasir Apotek & Toko Obat",
      deskripsi:
        "Stok obat dengan expiry date, resep dokter, dan laporan penjualan yang terintegrasi.",
      harga: "Rp 130K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#ede9fe,#8b5cf6)",
    },
  ],

  undangan: [
    {
      id: "undangan-nikah",
      icon: "💍",
      nama: "Undangan Pernikahan Elegan",
      deskripsi:
        "Desain mewah dengan animasi bunga, countdown, RSVP online, dan peta lokasi terintegrasi.",
      harga: "Rp 75.000",
      badge: "💎 Paling Diminati",
      gradient: "linear-gradient(135deg,#fce7f3,#f9a8d4)",
    },
    {
      id: "undangan-islami",
      icon: "🌙",
      nama: "Undangan Islami Minimalis",
      deskripsi:
        "Desain bernuansa islami dengan kaligrafi, ayat suci, dan musik background yang indah.",
      harga: "Rp 65.000",
      badge: null,
      gradient: "linear-gradient(135deg,#fef3c7,#fcd34d)",
    },
    {
      id: "undangan-khitan",
      icon: "✂️",
      nama: "Undangan Khitanan Modern",
      deskripsi:
        "Desain ceria untuk acara khitanan dengan galeri foto, countdown, dan konfirmasi kehadiran.",
      harga: "Rp 50.000",
      badge: null,
      gradient: "linear-gradient(135deg,#dbeafe,#93c5fd)",
    },
    {
      id: "undangan-ultah",
      icon: "🎂",
      nama: "Undangan Ulang Tahun",
      deskripsi:
        "Desain fun dan colorful untuk ulang tahun anak maupun dewasa dengan animasi balon dan konfeti.",
      harga: "Rp 50.000",
      badge: null,
      gradient: "linear-gradient(135deg,#d1fae5,#6ee7b7)",
    },
    {
      id: "undangan-wisuda",
      icon: "🎓",
      nama: "Undangan Wisuda",
      deskripsi:
        "Tampilan elegan untuk perayaan wisuda dengan foto galeri dan ucapan selamat dari tamu.",
      harga: "Rp 55.000",
      badge: null,
      gradient: "linear-gradient(135deg,#ede9fe,#a78bfa)",
    },
    {
      id: "undangan-corporate",
      icon: "🏢",
      nama: "Undangan Corporate Event",
      deskripsi:
        "Desain profesional untuk seminar, konferensi, dan acara perusahaan dengan agenda dan speaker profile.",
      harga: "Rp 80.000",
      badge: null,
      gradient: "linear-gradient(135deg,#e8f5f4,#4db6ac)",
    },
  ],

  klinik: [
    {
      id: "klinik-umum",
      icon: "👨‍⚕️",
      nama: "Klinik Umum Pro",
      deskripsi:
        "Rekam medis digital, antrian online, billing, dan laporan kunjungan pasien lengkap.",
      harga: "Rp 250K/bln",
      badge: "⭐ Best Seller",
      gradient: "linear-gradient(135deg,#dbeafe,#3b82f6)",
    },
    {
      id: "klinik-gigi",
      icon: "🦷",
      nama: "Klinik Gigi Digital",
      deskripsi:
        "Manajemen pasien gigi, odontogram digital, jadwal dokter, dan reminder perawatan otomatis.",
      harga: "Rp 220K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#d1fae5,#059669)",
    },
    {
      id: "posyandu",
      icon: "👶",
      nama: "Posyandu & Klinik Anak",
      deskripsi:
        "Tumbuh kembang anak, imunisasi, KMS digital, dan monitoring gizi berbasis data.",
      harga: "Rp 200K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#fce7f3,#be185d)",
    },
  ],

  toko: [
    {
      id: "toko-fashion",
      icon: "🛍",
      nama: "Toko Fashion Online",
      deskripsi:
        "Website toko baju modern dengan filter kategori, wishlist, cart, dan integrasi Midtrans/QRIS.",
      harga: "Rp 150K/bln",
      badge: "⭐ Best Seller",
      gradient: "linear-gradient(135deg,#d1fae5,#10b981)",
    },
    {
      id: "toko-makanan",
      icon: "🍰",
      nama: "Toko Makanan & Catering",
      deskripsi:
        "Toko online makanan dengan menu digital, pemesanan pre-order, dan jadwal pengiriman.",
      harga: "Rp 120K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#fef3c7,#f59e0b)",
    },
    {
      id: "toko-perhiasan",
      icon: "💎",
      nama: "Toko Perhiasan & Aksesoris",
      deskripsi:
        "Desain premium untuk toko perhiasan dengan galeri produk HD, kustomisasi, dan chat CS live.",
      harga: "Rp 160K/bln",
      badge: null,
      gradient: "linear-gradient(135deg,#ede9fe,#7c3aed)",
    },
  ],

  custom: [],
};

// ─── DETAIL PRODUK ──────────────────────────────────────────
// Nanti diganti: GET /api/produk/:id
export const detailProduk = {
  "kasir-kafe": {
    screenshots: [
      "https://placehold.co/600x400/0f2e2b/2A8B85?text=Dashboard",
      "https://placehold.co/600x400/0f2e2b/2A8B85?text=Menu+Digital",
      "https://placehold.co/600x400/0f2e2b/2A8B85?text=Laporan",
      "https://placehold.co/600x400/0f2e2b/2A8B85?text=Manajemen+Meja",
    ],
    hargaBulan: "Rp 120K/bln",
    fitur: [
      "Manajemen menu digital dengan foto",
      "Sistem meja dan reservasi",
      "Kitchen Display System (KDS)",
      "Laporan penjualan real-time",
      "Multi user (kasir & admin)",
      "Integrasi printer struk",
      "Dashboard analitik interaktif",
      "Export laporan ke PDF/Excel",
    ],
    keunggulan: [
      "Deploy dalam hitungan menit",
      "Tanpa install aplikasi tambahan",
      "Support 24/7 via WhatsApp",
      "Server lokal Indonesia",
      "Update fitur gratis selamanya",
    ],
    deskripsiPanjang: `Sistem Kasir Kafe & Resto adalah aplikasi modern yang dirancang untuk membantu operasional bisnis makanan dan minuman menjadi lebih cepat, rapi, dan efisien. Aplikasi ini mendukung proses transaksi penjualan, manajemen menu, pencatatan stok bahan, hingga laporan keuangan secara otomatis dalam satu dashboard yang mudah digunakan.

Melalui dashboard analitik yang interaktif, pemilik usaha dapat melihat laporan omzet, produk terlaris, jumlah transaksi, dan performa penjualan harian maupun bulanan secara lebih detail. Sistem ini sangat cocok digunakan untuk berbagai jenis usaha kuliner seperti coffee shop, restoran, cafe modern, food court, hingga UMKM kuliner yang ingin meningkatkan kualitas pelayanan dan efisiensi manajemen bisnis mereka.`,
    demoUrl: "https://demo.ruvida.id/kasir-kafe",
  },
  "kasir-retail": {
    screenshots: [
      "https://placehold.co/600x400/0f2e2b/2A8B85?text=Dashboard+Retail",
      "https://placehold.co/600x400/0f2e2b/2A8B85?text=Stok+Barang",
      "https://placehold.co/600x400/0f2e2b/2A8B85?text=Transaksi",
      "https://placehold.co/600x400/0f2e2b/2A8B85?text=Laporan",
    ],
    hargaBulan: "Rp 99K/bln",
    fitur: [
      "POS dengan barcode scanner",
      "Manajemen stok otomatis",
      "Sistem diskon & promo",
      "Cetak struk otomatis",
      "Multi kasir",
      "Laporan penjualan harian",
    ],
    keunggulan: [
      "Cocok untuk toko retail skala kecil-menengah",
      "Antarmuka mudah digunakan",
      "Tidak perlu hardware khusus",
    ],
    deskripsiPanjang: `Kasir Toko Retail adalah solusi POS modern untuk toko retail dengan fitur stok, barcode scanner, diskon, dan cetak struk otomatis. Dirancang untuk kemudahan penggunaan sehari-hari.`,
    demoUrl: "https://demo.ruvida.id/kasir-retail",
  },
  "siakademik": {
    screenshots: [
      "https://placehold.co/600x400/0f2e2b/2A8B85?text=Dashboard+Akademik",
      "https://placehold.co/600x400/0f2e2b/2A8B85?text=Data+Siswa",
      "https://placehold.co/600x400/0f2e2b/2A8B85?text=Nilai+%26+Raport",
      "https://placehold.co/600x400/0f2e2b/2A8B85?text=Absensi",
    ],
    hargaBulan: "Rp 200K/bln",
    fitur: [
      "Manajemen data siswa lengkap",
      "Input nilai dan raport digital",
      "Absensi harian otomatis",
      "Jadwal pelajaran",
      "Notifikasi ke orang tua",
      "Laporan akademik per semester",
    ],
    keunggulan: [
      "Terintegrasi semua kebutuhan sekolah",
      "Akses dari mana saja",
      "Data aman di server lokal",
    ],
    deskripsiPanjang: `SiAkademik Pro adalah sistem informasi akademik lengkap yang mencakup nilai, absensi, jadwal, dan raport digital terintegrasi. Memudahkan guru, siswa, dan orang tua dalam memantau perkembangan akademik.`,
    demoUrl: "https://demo.ruvida.id/siakademik",
  },
};

// Fallback untuk produk yang belum punya detail spesifik
// Nanti saat API sudah ada, fungsi ini tidak diperlukan lagi
export function getDetailProduk(produkId) {
  return (
    detailProduk[produkId] || {
      screenshots: [
        "https://placehold.co/600x400/0f2e2b/2A8B85?text=Screenshot+1",
        "https://placehold.co/600x400/0f2e2b/2A8B85?text=Screenshot+2",
        "https://placehold.co/600x400/0f2e2b/2A8B85?text=Screenshot+3",
        "https://placehold.co/600x400/0f2e2b/2A8B85?text=Screenshot+4",
      ],
      hargaBulan: "Rp 99K/bln",
      fitur: [
        "Fitur utama lengkap",
        "Dashboard admin",
        "Laporan otomatis",
        "Multi user",
        "Support 24/7",
      ],
      keunggulan: [
        "Deploy cepat",
        "Tanpa install tambahan",
        "Server lokal Indonesia",
      ],
      deskripsiPanjang:
        "Aplikasi profesional yang dirancang untuk membantu operasional bisnis Anda menjadi lebih efisien dan terdigitalisasi.",
      demoUrl: "#",
    }
  );
}

// ─── SUBSCRIPTIONS (Mock User) ───────────────────────────────
// Nanti diganti: GET /api/user/subscriptions
export const dummySubscriptions = [
  {
    id: 1,
    nama: "Kasir Kafe & Resto",
    kategori: "Aplikasi Kasir",
    icon: "☕",
    iconBg: "#fef3c7",
    durasi: "12 Bulan",
    periode: "31 Des 2025 – 31 Des 2026",
    status: "Aktif",
    statusBayar: "Sudah Bayar",
  },
  {
    id: 2,
    nama: "Landing Page Salon",
    kategori: "Website",
    icon: "💅",
    iconBg: "#fce7f3",
    durasi: "6 Bulan",
    periode: "21 Jul 2026 – 21 Jan 2027",
    status: "Aktif",
    statusBayar: "Sudah Bayar",
  },
  {
    id: 3,
    nama: "Manajemen Keuangan",
    kategori: "Aplikasi Keuangan",
    icon: "💰",
    iconBg: "#d1fae5",
    durasi: "6 Bulan",
    periode: "21 Jul 2025 – 21 Jan 2026",
    status: "Expired",
    statusBayar: "Sudah Bayar",
  },
  {
    id: 4,
    nama: "Booking Service",
    kategori: "Aplikasi",
    icon: "📅",
    iconBg: "#dbeafe",
    durasi: "10 Bulan",
    periode: "31 Jul 2025 – 31 Mei 2026",
    status: "Segera Berakhir",
    statusBayar: "Sudah Bayar",
  },
  {
    id: 5,
    nama: "Undangan Wedding",
    kategori: "Website",
    icon: "💍",
    iconBg: "#ede9fe",
    durasi: "1 Bulan",
    periode: "–",
    status: "Draft",
    statusBayar: "Belum Dibayar",
  },
];

// ─── CHATBOT ─────────────────────────────────────────────────
export const chatbotConfig = {
  quickRepliesAwal: [
    "Saya butuh aplikasi kasir",
    "Buat sistem inventori",
    "Aplikasi untuk klinik",
  ],
  contohKebutuhan: [
    "Aplikasi Kasir & Resto",
    "Sistem Manajemen Sekolah",
    "Aplikasi Klinik & Rekam Medis",
    "Marketplace & Toko Online",
    "Sistem Inventori Gudang",
  ],
  systemPrompt: `Kamu adalah Asisten Ruvida, AI assistant dari platform Ruvida.id — platform penyedia aplikasi digital untuk bisnis di Indonesia.

Tugasmu:
- Membantu calon pelanggan mendeskripsikan kebutuhan aplikasi bisnis mereka
- Memberikan estimasi fitur dan biaya berdasarkan kebutuhan
- Merekomendasikan produk yang tersedia di Ruvida.id jika cocok
- Menjawab dalam Bahasa Indonesia yang ramah dan profesional

Produk tersedia di Ruvida.id:
- Aplikasi Kasir (warung, kafe, resto, retail, barbershop) mulai Rp 99.000/bln
- Sistem Informasi Sekolah (akademik, absensi, SPP, raport) mulai Rp 150.000/bln  
- Undangan Digital (pernikahan, khitanan, ulang tahun) mulai Rp 50.000
- Aplikasi Klinik (rekam medis, antrian, billing) mulai Rp 200.000/bln
- Toko Online (fashion, makanan, perhiasan) mulai Rp 120.000/bln
- Custom Aplikasi: dibangun dari nol sesuai kebutuhan, harga nego

Saat pengguna menjelaskan kebutuhan, ringkas dalam format daftar fitur, lalu tanya apakah ada tambahan, lalu tawarkan estimasi waktu dan biaya.`,
};