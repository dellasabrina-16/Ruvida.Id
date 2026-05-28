import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  aplikasiPerKategori,
  kategoriList,
  getDetailProduk,
} from "../data/data";



export default function ProductDetails() {
  const { kategori, produk } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState("deskripsi");
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  // Cari data produk dari data.js
  const listProduk = aplikasiPerKategori[kategori] || [];
  const produkData = listProduk.find((p) => p.id === produk);
  const kategoriData = kategoriList.find((k) => k.id === kategori);
  const detail = getDetailProduk(produk);


  // Produk tidak ditemukan
  if (!produkData) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">Produk tidak ditemukan.</p>
        <button
          onClick={() => navigate("/katalog")}
          className="text-[#2A8B85] font-semibold hover:underline"
        >
          Kembali ke Katalog
        </button>
      </div>
    );
  }

  const tabs = ["Deskripsi", "Fitur", "Keunggulan"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-400">
          <button
            onClick={() => navigate("/katalog")}
            className="hover:text-[#2A8B85] transition-colors"
          >
            Katalog
          </button>
          <span>›</span>
          <button
            onClick={() => navigate(`/aplikasi/${kategori}`)}
            className="hover:text-[#2A8B85] transition-colors"
          >
            {kategoriData?.nama || kategori}
          </button>
          <span>›</span>
          <span className="text-gray-600 font-medium">{produkData.nama}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* ── KIRI: Screenshot Gallery ── */}
          <div>
            {/* Main Screenshot */}
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm mb-4">
              <img
                src={detail.screenshots[activeScreenshot]}
                alt={`Screenshot ${activeScreenshot + 1}`}
                className="w-full object-cover"
              />
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center gap-2">
              {/* Prev */}
              <button
                onClick={() =>
                  setActiveScreenshot((prev) =>
                    prev === 0 ? detail.screenshots.length - 1 : prev - 1,
                  )
                }
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#2A8B85] transition-colors shadow-sm"
              >
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {detail.screenshots.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScreenshot(idx)}
                  className={`flex-1 rounded-xl overflow-hidden border-2 transition-all ${
                    activeScreenshot === idx
                      ? "border-[#2A8B85] shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Thumb ${idx + 1}`}
                    className="w-full h-16 object-cover"
                  />
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() =>
                  setActiveScreenshot((prev) =>
                    prev === detail.screenshots.length - 1 ? 0 : prev + 1,
                  )
                }
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#2A8B85] transition-colors shadow-sm"
              >
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* ── KANAN: Info Produk ── */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1d6b66] mb-2">
              {produkData.nama}
            </h1>
            <p className="text-[#2A8B85] font-bold text-xl mb-6">
              {detail.hargaBulan}
            </p>

            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`pb-3 text-sm font-semibold transition-colors ${
                    activeTab === tab.toLowerCase()
                      ? "text-gray-900 border-b-2 border-gray-900 -mb-px"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-gray-600 text-sm leading-relaxed mb-8">
              {activeTab === "deskripsi" && (
                <p className="whitespace-pre-line">{detail.deskripsiPanjang}</p>
              )}
              {activeTab === "fitur" && (
                <ul className="flex flex-col gap-2">
                  {detail.fitur.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#2A8B85] mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === "keunggulan" && (
                <ul className="flex flex-col gap-2">
                  {detail.keunggulan.map((k, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#2A8B85] mt-0.5">✓</span>
                      {k}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                if (!user.isLoggedIn) {
                  navigate("/akun");
                } else {
                  alert("Fitur berlangganan segera hadir!");
                }
              }}
              className="w-55 flex items-center justify-center gap-2 bg-[#1d6b66] hover:bg-[#175f5a] text-white font-semibold py-3 rounded-xl transition-colors duration-200 mb-4 text-base"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              Berlangganan Sekarang
            </button>
          </div>
        </div>

        {/* ── Demo Banner ── */}
        <div className="mt-12 rounded-2xl bg-[#f2faec] border border-[#2A8B85]/20 p-8">
          <h3 className="text-center font-bold text-gray-800 text-lg mb-6">
            Rasakan pengalaman langsung menggunakan demo interaktif
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-8 flex-1">
              {[
                {
                  icon: "⚙️",
                  judul: "Pilih Modul",
                  sub: "Pilih modul yang ingin dicoba pada demo",
                },
                {
                  icon: "🖥",
                  judul: "Coba Fitur",
                  sub: "Eksplorasi fitur secara langsung",
                },
                {
                  icon: "📊",
                  judul: "Lihat Hasil",
                  sub: "Lihat bagaimana sistem membantu bisnismu",
                },
              ].map((item) => (
                <div key={item.judul} className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      {item.judul}
                    </p>
                    <p className="text-gray-500 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={detail.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Mulai Demo
              <span className="text-orange-200 text-xs font-normal">
              </span>
            </a>
          </div>
          <div className="text-right text-xs font normal mr-5 text-gray-500 mt-1">
            Membuka di tab baru
          </div>
        </div>

        {/* Kembali ke Kategori */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate(`/aplikasi/${kategori}`)}
            className="flex items-center gap-2 border border-gray-300 text-gray-600 hover:border-[#2A8B85] hover:text-[#2A8B85] font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Kategori
          </button>
        </div>
      </div>
    </div>
  );
}
