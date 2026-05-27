// src/pages/Application.jsx
import { useNavigate, useParams } from "react-router-dom";
import { kategoriList, aplikasiPerKategori } from "../data/data";

export default function Application() {
  const { id } = useParams();
  const navigate = useNavigate();

  const kategori = kategoriList.find((k) => k.id === id);
  const apps = aplikasiPerKategori[id] || [];

  if (!kategori) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-400 text-lg">Kategori tidak ditemukan.</p>
          <button
            onClick={() => navigate("/katalog")}
            className="mt-4 text-[#2A8B85] font-medium hover:underline"
          >
            Kembali ke Katalog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-[#0f2e2b] pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate("/katalog")}
            className="flex items-center gap-2 text-[#2A8B85] text-sm font-medium mb-6 hover:text-[#4db6ac] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Katalog
          </button>

          <div className="flex items-center gap-4">
            <span className="text-5xl">{kategori.icon}</span>
            <div>
              <p className="text-[#2A8B85] text-xs font-semibold uppercase tracking-widest mb-1">
                {kategori.tag}
              </p>
              <h1 className="text-white text-4xl font-bold">{kategori.nama}</h1>
              <p className="text-white/50 text-sm mt-1">{kategori.deskripsi}</p>
            </div>
          </div>
        </div>
      </div>

      {/* App Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {apps.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Belum ada produk tersedia.</p>
            <p className="text-gray-400 text-sm mt-2">Silakan hubungi kami untuk konsultasi.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {apps.map((app) => (
              <div
                key={app.id}
                className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white border border-gray-100"
              >
                {/* Icon Area */}
                <div
                  className="flex items-center justify-center h-40 relative"
                  style={{ background: app.gradient }}
                >
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {app.icon}
                  </span>
                  {app.badge && (
                    <span className="absolute top-3 right-3 bg-white/90 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                      {app.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="px-5 py-5">
                  <h2 className="text-gray-900 text-base font-bold mb-2">{app.nama}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{app.deskripsi}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#1d6b66] text-sm font-semibold">{app.harga}</span>
                    <button className="text-xs bg-[#e8f5f4] text-[#1d6b66] font-semibold px-3 py-1.5 rounded-lg hover:bg-[#2A8B85] hover:text-white transition-colors duration-200">
                      Lihat Detail →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
