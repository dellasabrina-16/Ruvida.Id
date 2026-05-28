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
