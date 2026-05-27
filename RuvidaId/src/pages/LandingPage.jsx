import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { kategoriList, aplikasiPerKategori } from "../data/data";

// ── Hero Section ────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id=""
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-40 pb-12 overflow-hidden bg-[#0f2421]"
    >

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#3db5ae 1px, transparent 1px),
            linear-gradient(90deg, #3db5ae 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* RADIAL GLOW */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 60% at 60% 40%,
              rgba(42, 139, 133, 0.25) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 50% 50% at 10% 80%,
              rgba(42, 139, 133, 0.12) 0%,
              transparent 60%
            )
          `,
        }}
      />

      {/* TOP RIGHT ORB */}
      <div
        className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20"
        style={{
          background: "#2A8B85",
        }}
      />

      {/* BOTTOM LEFT ORB */}
      <div
        className="absolute -bottom-[100px] -left-[100px] w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
        style={{
          background: "#3db5ae",
        }}
      />

      {/* EXTRA CENTER GLOW */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
        style={{
          background: "#3db5ae",
        }}
      />

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2A8B85] animate-pulse" />
        <span className="text-white/80 text-xs font-medium tracking-wide">
          Platform Aplikasi Digital Indonesia
        </span>
      </div>

      {/* Headline */}
      <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 max-w-4xl tracking-tight">
        Solusi Aplikasi Digital untuk{" "}
        <span className="text-[#3db5ae]">
          Bisnis Anda
        </span>
      </h1>

      {/* Description */}
      <p className="relative z-10 text-white/60 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
        Ruvida.id hadir dengan ratusan template aplikasi siap pakai —
        dari kasir digital, sistem sekolah, undangan digital,
        hingga solusi custom sesuai kebutuhan bisnis Anda.
      </p>

      {/* Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mb-16">
        <button className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
          🗂 Jelajahi Katalog
        </button>

        <button className="flex items-center gap-2 bg-[#2A8B85] hover:bg-[#238880] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-300 shadow-2xl shadow-[#2A8B85]/30">
          Coba Gratis 7 Hari →
        </button>
      </div>

      {/* Stats */}
      <div className="relative z-10 flex items-center gap-6 sm:gap-10 flex-wrap justify-center">
        {[
          { value: "180+", label: "Aplikasi" },
          { value: "1.2K+", label: "Pelanggan" },
          { value: "4.9★", label: "Rating" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-6 py-5 text-center min-w-[120px]"
          >
            <div className="text-[#3db5ae] font-extrabold text-2xl sm:text-3xl">
              {stat.value}
            </div>

            <div className="text-white/40 text-xs uppercase tracking-[0.2em] mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
// ── Paket Section ───────────────────────────────────────────
const paketList = [
  {
    icon: "🎁",
    nama: "Trial",
    deskripsi: "Coba semua fitur tanpa batas selama periode trial. Tidak perlu kartu kredit.",
    harga: "Gratis",
    hargaSub: "Trial tanpa syarat",
    cta: "Mulai Trial",
    ctaVariant: "outline",
    isPopular: false,
  },
  {
    icon: "🔥",
    nama: "Free 1 Minggu",
    deskripsi: "Nikmati akses gratis selama 7 hari penuh tanpa perlu server sendiri. Khusus untuk pendaftar baru.",
    harga: "Rp 0",
    hargaSub: "7 hari akses premium",
    cta: "Klaim Sekarang",
    ctaVariant: "solid",
    isPopular: true,
  },
  {
    icon: "📦",
    nama: "Sewa Bulanan",
    deskripsi: "Sewa aplikasi pilihan tanpa harus beli domain atau server sendiri. Langsung pakai.",
    harga: "Mulai 99K",
    hargaSub: "per bulan / aplikasi",
    cta: "Pilih Paket Sewa",
    ctaVariant: "teal",
    isPopular: false,
  },
  {
    icon: "🛠",
    nama: "Custom Sewa",
    deskripsi: "Aplikasi didesain khusus sesuai alur bisnis Anda. Branding, fitur, dan domain sendiri.",
    harga: "Nego",
    hargaSub: "Harga sesuai kebutuhan",
    cta: "Konsultasi Gratis",
    ctaVariant: "outline",
    isPopular: false,
  },
];

function PaketSection() {
  return (
    <section id="layanan" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#2A8B85] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Pilih Paket yang Sesuai Kebutuhanmu
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Mulai dari coba gratis hingga paket custom enterprise — kami punya solusi untuk semua skala bisnis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paketList.map((paket) => (
            <div
              key={paket.nama}
              className={`relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 ${paket.isPopular
                ? "bg-[#0f2e2b] text-white shadow-2xl shadow-[#2A8B85]/20 ring-2 ring-[#2A8B85]"
                : "bg-white border border-gray-100 shadow-sm hover:shadow-md"
                }`}
            >
              {paket.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#2A8B85] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Populer
                  </span>
                </div>
              )}

              <div className="text-3xl">{paket.icon}</div>
              <div>
                <h3 className={`font-bold text-lg mb-1 ${paket.isPopular ? "text-white" : "text-gray-900"}`}>
                  {paket.nama}
                </h3>
                <p className={`text-sm leading-relaxed ${paket.isPopular ? "text-white/60" : "text-gray-500"}`}>
                  {paket.deskripsi}
                </p>
              </div>

              <div className="mt-auto">
                <div className={`font-extrabold text-2xl mb-0.5 ${paket.isPopular ? "text-white" : "text-[#2A8B85]"}`}>
                  {paket.harga}
                </div>
                <div className={`text-xs mb-4 ${paket.isPopular ? "text-white/50" : "text-gray-400"}`}>
                  {paket.hargaSub}
                </div>

                <button
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${paket.ctaVariant === "solid"
                    ? "bg-white text-[#0f2e2b] hover:bg-white/90"
                    : paket.ctaVariant === "teal"
                      ? "bg-[#2A8B85] text-white hover:bg-[#238880]"
                      : paket.isPopular
                        ? "border border-white/30 text-white hover:bg-white/10"
                        : "border border-gray-200 text-gray-700 hover:border-[#2A8B85] hover:text-[#2A8B85]"
                    }`}
                >
                  {paket.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Keunggulan Section ──────────────────────────────────────
const keunggulanList = [
  {
    no: "01",
    judul: "Template Siap Pakai, Deploy Cepat",
    deskripsi: "Ratusan template aplikasi sudah siap dan dapat digunakan dalam hitungan menit, bukan bulan.",
  },
  {
    no: "02",
    judul: "Harga Transparan & Terjangkau",
    deskripsi: "Tanpa biaya tersembunyi. Mulai dari gratis, sewa bulanan, hingga paket custom yang jelas harganya.",
  },
  {
    no: "03",
    judul: "Dukungan Teknis 24/7",
    deskripsi: "Tim kami siap membantu kapanpun via WhatsApp, email, atau live chat. Tidak ada gangguan yang dibiarkan.",
  },
  {
    no: "04",
    judul: "Data Aman di Server Lokal Indonesia",
    deskripsi: "Server berlokasi di Indonesia untuk latensi cepat dan kepatuhan regulasi data nasional.",
  },
  {
    no: "05",
    judul: "Bisa Custom Tanpa Beli Putus",
    deskripsi: "Model sewa custom memungkinkan Anda punya aplikasi profesional tanpa investasi besar di awal.",
  },
];

function KeunggulanSection() {
  return (
    <section
      id="kelebihan"
      className="py-20 px-4"
      style={{ background: "linear-gradient(160deg, #0a2420 0%, #0f3530 60%, #0a2420 100%)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <span className="text-[#2A8B85] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Mengapa Ruvida.id?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
            Lebih dari Sekedar Penyedia Aplikasi
          </h2>
          <p className="text-white/50 text-base mb-10 leading-relaxed">
            Kami membangun ekosistem digital yang memudahkan siapapun untuk memiliki aplikasi profesional tanpa kerumitan teknis.
          </p>

          {/* Stats */}
          <div className="flex gap-8 flex-wrap">
            {[
              { value: "180+", label: "Template Aplikasi" },
              { value: "1.2K+", label: "Aktif Pakai" },
              { value: "4.9/5", label: "Rating Google" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-[#2A8B85]/20 border border-[#2A8B85]/30 rounded-2xl px-5 py-4 text-center min-w-[100px]"
              >
                <div className="text-[#2A8B85] font-extrabold text-2xl">{s.value}</div>
                <div className="text-white/50 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5">
          {keunggulanList.map((item) => (
            <div key={item.no} className="flex gap-4 items-start group">
              <span className="text-[#2A8B85] font-bold text-sm min-w-[28px] mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                {item.no}
              </span>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">{item.judul}</h4>
                <p className="text-white/45 text-sm leading-relaxed">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Best Seller Section ─────────────────────────────────────
const bestSellerItems = [
  {
    id: "sekolah",
    icon: "🏫",
    badge: "Populer",
    badgeColor: "bg-blue-100 text-blue-700",
    nama: "Sistem Informasi Sekolah",
    deskripsi: "Manajemen siswa, nilai, absensi, dan laporan akademis dalam satu platform.",
    harga: "Mulai 150K",
    hargaUnit: "/bln",
    rating: "★★★★★",
    gradient: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
  },
  {
    id: "kasir",
    icon: "🧾",
    badge: "Best Seller",
    badgeColor: "bg-amber-100 text-amber-700",
    nama: "Aplikasi Kasir Digital",
    deskripsi: "POS modern untuk warung, toko, restoran, dan UMKM. Laporan real-time.",
    harga: "Mulai 99K",
    hargaUnit: "/bln",
    rating: "★★★★★",
    gradient: "linear-gradient(135deg, #fef9c3 0%, #fde68a 100%)",
  },
  {
    id: "undangan",
    icon: "💌",
    badge: "Trending",
    badgeColor: "bg-pink-100 text-pink-700",
    nama: "Undangan Digital",
    deskripsi: "Undangan pernikahan, khitanan, ulang tahun yang elegan dan interaktif.",
    harga: "Mulai 50K",
    hargaUnit: " /undangan",
    rating: "★★★★★",
    gradient: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",
  },
];

function BestSellerSection() {
  return (
    <section id="produk" className="bg-[#f8f9fa] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-[#2A8B85] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Produk Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Katalog Best Seller
          </h2>
          <p className="text-gray-500 text-base max-w-md">
            Aplikasi paling banyak dipesan oleh klien kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {bestSellerItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              {/* Colored top block */}
              <div
                className="h-36 flex items-center justify-center text-5xl"
                style={{ background: item.gradient }}
              >
                {item.icon}
              </div>

              <div className="p-5">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.badgeColor} uppercase tracking-wide mb-3 inline-block`}>
                  {item.badge}
                </span>
                <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-[#2A8B85] transition-colors">
                  {item.nama}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.deskripsi}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#2A8B85] font-extrabold text-base">{item.harga}</span>
                    <span className="text-gray-400 text-xs">{item.hargaUnit}</span>
                  </div>
                  <span className="text-yellow-400 text-sm">{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Main LandingPage ─────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="font-[Sora,sans-serif] antialiased">
      <Navbar />

      <HeroSection />
      <PaketSection />
      <KeunggulanSection />
      <BestSellerSection />

      <Footer />
    </div>
  );
}
