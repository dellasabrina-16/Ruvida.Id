// src/pages/Category.jsx
import { useNavigate } from "react-router-dom";
import { kategoriList } from "../data/data";

export default function Category() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-[#0f2e2b] pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#2A8B85] text-sm font-medium mb-6 hover:text-[#4db6ac] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Beranda
          </button>
          <p className="text-[#2A8B85] text-xs font-semibold uppercase tracking-widest mb-2">
            Semua Produk
          </p>
          <h1 className="text-white text-4xl font-bold mb-3">Katalog Aplikasi</h1>
          <p className="text-white/50 text-sm">
            Pilih kategori yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {kategoriList.map((kat) => (
            <div
              key={kat.id}
              onClick={() => {
                if (kat.id === "custom") {
                  navigate("/custom");
                } else {
                  navigate(`/aplikasi/${kat.id}`)
                }
              }}
              className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: kat.gradient }}
            >
              {/* Icon Area */}
              <div className="flex items-center justify-center h-44">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {kat.icon}
                </span>
              </div>

              {/* Content */}
              <div className={`px-6 pb-6 ${kat.isDark ? "text-white" : "text-gray-800"}`}>
                {/* Tag */}
                <span
                  className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${
                    kat.isDark
                      ? "bg-white/20 text-white"
                      : "bg-black/8 text-gray-500"
                  }`}
                >
                  {kat.tag}
                </span>

                <h2 className="text-xl font-bold mb-2">{kat.nama}</h2>
                <p className={`text-sm leading-relaxed mb-4 ${kat.isDark ? "text-white/70" : "text-gray-500"}`}>
                  {kat.deskripsi}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`text-sm font-semibold ${kat.isDark ? "text-white" : "text-[#1d6b66]"}`}>
                    {kat.harga} →
                  </span>
                  {kat.rating && (
                    <span className="text-yellow-400 text-xs tracking-tight">{kat.rating}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
