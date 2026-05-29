import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { dummySubscriptions } from "../data/data";

const STATUS_STYLE = {
  Aktif: "bg-green-100 text-green-700",
  Expired: "bg-red-100 text-red-600",
  "Segera Berakhir": "bg-orange-100 text-orange-600",
  Draft: "bg-gray-100 text-gray-500",
};

const BAYAR_STYLE = {
  "Sudah Bayar": "bg-green-100 text-green-700",
  "Belum Dibayar": "bg-orange-100 text-orange-600",
};

export default function Account() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [filterTab, setFilterTab] = useState("Semua");
  const [search, setSearch] = useState("");

  const tabs = ["Semua", "Aktif", "Expired", "Draft"];

  const filtered = dummySubscriptions.filter((s) => {
    const matchTab =
      filterTab === "Semua" ||
      (filterTab === "Aktif" && s.status === "Aktif") ||
      (filterTab === "Expired" && s.status === "Expired") ||
      (filterTab === "Draft" && s.status === "Draft");
    const matchSearch = s.nama.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  // Hitung stats
  const totalLangganan = dummySubscriptions.length;
  const totalAktif = dummySubscriptions.filter(
    (s) => s.status === "Aktif",
  ).length;
  const totalExpired = dummySubscriptions.filter(
    (s) => s.status === "Expired",
  ).length;
  const totalChat = 1;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
        {/* ── Header Akun ── */}
        <div>
          <h1 className="text-2xl font-extrabold text-[#1d6b66] mb-1">
            Akun Saya
          </h1>
          <p className="text-gray-400 text-sm">
            Kelola informasi akun dan histori langganan anda
          </p>
        </div>

        {/* ── Profile Card ── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl">
                👤
              </div>
              <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-xl font-bold text-gray-800">
                  {user.username}
                </h2>
                {user.isPremium && (
                  <span className="bg-amber-100 text-amber-600 text-xs font-bold px-2.5 py-1 rounded-full">
                    ⭐ Premium Member
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm flex items-center gap-1.5 mb-0.5">
                ✉️ {user.email}
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-1.5">
                📅 Bergabung sejak {user.joinDate}
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-4 flex-wrap">
              {[
                {
                  icon: "📦",
                  value: totalLangganan,
                  label: "Total Langganan",
                  color: "text-blue-500",
                },
                {
                  icon: "✅",
                  value: totalAktif,
                  label: "Aktif",
                  color: "text-green-500",
                },
                {
                  icon: "❌",
                  value: totalExpired,
                  label: "Expired",
                  color: "text-red-400",
                },
                {
                  icon: "🔔",
                  value: totalChat,
                  label: "Riwayat Chat",
                  color: "text-amber-500",
                },
              ].map((stat) => (
                <div key={stat.label} className="text-center min-w-[60px]">
                  <div className={`text-xl font-extrabold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Edit Profil */}
          <div className="mt-5 pt-4 border-t border-gray-50">
            <button className="flex items-center gap-2 border border-gray-200 text-gray-600 hover:border-[#2A8B85] hover:text-[#2A8B85] text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
              ✏️ Edit Profil
            </button>
          </div>
        </div>

        {/* ── Histori Subscribe ── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-extrabold text-gray-800 text-lg mb-1">
            Histori Suscribe
          </h3>
          <p className="text-gray-400 text-sm mb-5">
            Riwayat semua aplikasi atau website yang pernah Anda sewa.
          </p>

          {/* Filter + Search */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            {/* Tabs */}
            <div className="flex gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilterTab(tab)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors ${filterTab === tab
                      ? "bg-[#1d6b66] text-white"
                      : "text-gray-500 hover:bg-gray-100"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 focus-within:border-[#2A8B85] transition-colors">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari Aplikasi / Website"
                className="text-sm text-gray-700 placeholder-gray-400 focus:outline-none w-44"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  {[
                    "Aplikasi / Website",
                    "Durasi",
                    "Periode",
                    "Status",
                    "Status Bayar",
                    "Aksi",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left text-gray-400 text-xs font-semibold pb-3 pr-4"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((sub) => (
                  <tr
                    key={sub.id}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    {/* Nama */}
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                          style={{ background: sub.iconBg }}
                        >
                          {sub.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">
                            {sub.nama}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {sub.kategori}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Durasi */}
                    <td className="py-4 pr-4 text-gray-600">{sub.durasi}</td>

                    {/* Periode */}
                    <td className="py-4 pr-4 text-gray-600 text-xs whitespace-nowrap">
                      {sub.periode}
                    </td>

                    {/* Status */}
                    <td className="py-4 pr-4">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLE[sub.status]}`}
                      >
                        {sub.status}
                      </span>
                    </td>

                    {/* Status Bayar */}
                    <td className="py-4 pr-4">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${BAYAR_STYLE[sub.statusBayar]}`}
                      >
                        {sub.statusBayar}
                      </span>
                    </td>

                    {/* Aksi */}
                    <td className="py-4">
                      <button className="border border-gray-200 text-gray-600 hover:border-[#2A8B85] hover:text-[#2A8B85] text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors">
                        {sub.status === "Draft" ? "Lanjutkan" : "Detail"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <p className="text-center text-gray-400 py-8 text-sm">
                Tidak ada data ditemukan.
              </p>
            )}
          </div>

          {/* Pagination info */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-400 text-xs">
              Menampilkan 1 – {filtered.length} dari {filtered.length} data
            </p>
            <div className="flex gap-1">
              <button className="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 text-xs hover:border-[#2A8B85] transition-colors">
                ‹
              </button>
              <button className="w-7 h-7 rounded-lg bg-[#1d6b66] text-white text-xs font-bold">
                1
              </button>
              <button className="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 text-xs hover:border-[#2A8B85] transition-colors">
                ›
              </button>
            </div>
          </div>
        </div>

        {/* ── Butuh Bantuan Banner ── */}
        <div className="bg-[#f0faf9] border border-[#2A8B85]/20 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🤖</span>
            <div>
              <p className="font-bold text-gray-800 text-sm">Butuh Bantuan?</p>
              <p className="text-gray-500 text-xs">
                Tim kami siap membantu Anda terkait langganan atau kendala
                lainnya.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-[#2A8B85] hover:text-[#2A8B85] font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm whitespace-nowrap">
            🎧 Hubungi Support
          </button>
        </div>

        {/* ── Bottom Actions ── */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/katalog")}
            className="flex items-center justify-center gap-2 border border-gray-300 text-gray-600 hover:border-[#2A8B85] hover:text-[#2A8B85] font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
          >
            ← Kembali ke Kategori
          </button>
          <button
            onClick={() => navigate("/custom")}
            className="flex items-center justify-center gap-2 bg-[#1d6b66] hover:bg-[#175f5a] text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
          >
            Custom Aplikasi 🛠
          </button>
        </div>

        {/* Logout */}
        <div className="text-center">
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="text-red-400 hover:text-red-500 text-sm font-medium transition-colors"
          >
            Keluar dari akun
          </button>
        </div>
      </div>
    </div>
  );
}
