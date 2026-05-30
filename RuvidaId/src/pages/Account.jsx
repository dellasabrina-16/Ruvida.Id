import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { dummySubscriptions } from "../data/data";
import {
  Package,
  CheckCircle,
  XCircle,
  Bell,
  UserCircle,
  Pencil,
  Search,
  Filter,
  Headphones,
  ChevronLeft,
  ChevronRight,
  X,
  Camera,
  ChevronDown,
} from "lucide-react";
import botIcon from "../assets/garden_bot.png";
import sparkleIcon from "../assets/star.png";

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

// ── Modal Edit Profil ────────────────────────────────────────
function EditProfilModal({ user, onClose, onSave }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(user.foto || null);
  const [fotoFile, setFotoFile] = useState(null);
  const [username, setUsername] = useState(user.username || "");
  const [email, setEmail] = useState(user.email || "");
  const [errors, setErrors] = useState({});

  function handleFotoChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setFotoFile(file);
    setPreview(URL.createObjectURL(file));
  }

  function validate() {
    const err = {};
    if (!username.trim()) err.username = "Username tidak boleh kosong";
    if (!email.trim()) err.email = "Email tidak boleh kosong";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      err.email = "Format email tidak valid";
    return err;
  }

  function handleSubmit() {
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    // Nanti ganti dengan: fetch('/api/user/update', { method: 'PUT', body: formData })
    onSave({ username, email, foto: preview });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-extrabold text-gray-800">Edit Profil</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X size={16} className="text-gray-500" />
          </button>
        </div>

        {/* Foto Profil */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center border-4 border-gray-50 shadow-sm">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <UserCircle size={88} className="text-gray-400" />
              )}
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 w-8 h-8 bg-[#1d6b66] hover:bg-[#175f5a] rounded-full flex items-center justify-center shadow-md transition-colors"
            >
              <Camera size={14} className="text-white" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFotoChange}
            />
          </div>
          <p className="text-gray-400 text-xs mt-2">
            Klik icon kamera untuk ganti foto
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-4">
          {/* Username */}
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setErrors((prev) => ({ ...prev, username: "" }));
              }}
              className={`w-full border rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none transition-colors ${
                errors.username
                  ? "border-red-400 focus:border-red-400"
                  : "border-gray-200 focus:border-[#2A8B85]"
              }`}
              placeholder="Masukkan username"
            />
            {errors.username && (
              <p className="text-red-400 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              className={`w-full border rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none transition-colors ${
                errors.email
                  ? "border-red-400 focus:border-red-400"
                  : "border-gray-200 focus:border-[#2A8B85]"
              }`}
              placeholder="Masukkan email"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-200 text-gray-600 hover:border-gray-300 font-semibold py-2.5 rounded-xl text-sm transition-colors"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 bg-[#1d6b66] hover:bg-[#175f5a] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Filter Dropdown ──────────────────────────────────────────
function FilterDropdown({ activeFilters, onApply, onClose }) {
  const [statusBayar, setStatusBayar] = useState(
    activeFilters.statusBayar || ""
  );
  const [durasi, setDurasi] = useState(activeFilters.durasi || "");
  const [kategori, setKategori] = useState(activeFilters.kategori || "");

  const durasiOptions = ["1 Bulan", "6 Bulan", "10 Bulan", "12 Bulan"];
  const kategoriOptions = [
    "Aplikasi Kasir",
    "Website",
    "Aplikasi Keuangan",
    "Aplikasi",
  ];

  function handleReset() {
    setStatusBayar("");
    setDurasi("");
    setKategori("");
    onApply({ statusBayar: "", durasi: "", kategori: "" });
    onClose();
  }

  function handleApply() {
    onApply({ statusBayar, durasi, kategori });
    onClose();
  }

  return (
    <div className="absolute right-0 top-11 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-30">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold text-gray-700">Filter</p>
        <button onClick={onClose}>
          <X size={14} className="text-gray-400 hover:text-gray-600" />
        </button>
      </div>

      {/* Status Bayar */}
      <div className="mb-3">
        <p className="text-xs font-semibold text-gray-500 mb-2">Status Bayar</p>
        <div className="flex flex-col gap-1.5">
          {["Sudah Bayar", "Belum Dibayar"].map((opt) => (
            <button
              key={opt}
              onClick={() => setStatusBayar(statusBayar === opt ? "" : opt)}
              className={`text-left text-xs px-3 py-2 rounded-lg transition-colors ${
                statusBayar === opt
                  ? "bg-[#1d6b66] text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Durasi */}
      <div className="mb-3">
        <p className="text-xs font-semibold text-gray-500 mb-2">Durasi</p>
        <div className="flex flex-wrap gap-1.5">
          {durasiOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setDurasi(durasi === opt ? "" : opt)}
              className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                durasi === opt
                  ? "bg-[#1d6b66] text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Kategori */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-500 mb-2">Kategori</p>
        <div className="flex flex-col gap-1.5">
          {kategoriOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setKategori(kategori === opt ? "" : opt)}
              className={`text-left text-xs px-3 py-2 rounded-lg transition-colors ${
                kategori === opt
                  ? "bg-[#1d6b66] text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-3 border-t border-gray-100">
        <button
          onClick={handleReset}
          className="flex-1 border border-gray-200 text-gray-500 hover:border-gray-300 text-xs font-semibold py-2 rounded-lg transition-colors"
        >
          Reset
        </button>
        <button
          onClick={handleApply}
          className="flex-1 bg-[#1d6b66] hover:bg-[#175f5a] text-white text-xs font-semibold py-2 rounded-lg transition-colors"
        >
          Terapkan
        </button>
      </div>
    </div>
  );
}

// ── Main Account ─────────────────────────────────────────────
export default function Account() {
  const navigate = useNavigate();
  const { user, logout, login } = useAuth();

  const [filterTab, setFilterTab] = useState("Semua");
  const [search, setSearch] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    statusBayar: "",
    durasi: "",
    kategori: "",
  });

  const tabs = ["Semua", "Aktif", "Expired", "Draft"];

  // Hitung jumlah filter aktif untuk badge
  const activeFilterCount = Object.values(activeFilters).filter(Boolean).length;

  const filtered = dummySubscriptions.filter((s) => {
    const matchTab =
      filterTab === "Semua" ||
      (filterTab === "Aktif" && s.status === "Aktif") ||
      (filterTab === "Expired" && s.status === "Expired") ||
      (filterTab === "Draft" && s.status === "Draft");
    const matchSearch = s.nama.toLowerCase().includes(search.toLowerCase());
    const matchStatusBayar = !activeFilters.statusBayar ||
      s.statusBayar === activeFilters.statusBayar;
    const matchDurasi = !activeFilters.durasi ||
      s.durasi === activeFilters.durasi;
    const matchKategori = !activeFilters.kategori ||
      s.kategori === activeFilters.kategori;
    return matchTab && matchSearch && matchStatusBayar && matchDurasi && matchKategori;
  });

  const totalLangganan = dummySubscriptions.length;
  const totalAktif = dummySubscriptions.filter((s) => s.status === "Aktif").length;
  const totalExpired = dummySubscriptions.filter((s) => s.status === "Expired").length;
  const totalChat = 1;

  const stats = [
    {
      icon: <Package size={22} className="text-teal-600" />,
      value: totalLangganan,
      label: "Total Langganan",
      bgColor: "bg-teal-50",
    },
    {
      icon: <CheckCircle size={22} className="text-teal-600" />,
      value: totalAktif,
      label: "Aktif",
      bgColor: "bg-teal-50",
    },
    {
      icon: <XCircle size={22} className="text-red-500" />,
      value: totalExpired,
      label: "Expired",
      bgColor: "bg-red-50",
    },
    {
      icon: <Bell size={22} className="text-amber-500" />,
      value: totalChat,
      label: "Riwayat Chat",
      bgColor: "bg-amber-50",
    },
  ];

  // Simpan perubahan profil
  // Nanti ganti dengan API call: PUT /api/user/profile
  function handleSaveProfil(data) {
    login({ ...user, ...data });
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-12 px-4 sm:px-6">
      {/* Edit Profil Modal */}
      {showEditModal && (
        <EditProfilModal
          user={user}
          onClose={() => setShowEditModal(false)}
          onSave={handleSaveProfil}
        />
      )}

      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-extrabold text-[#1d6b66] mb-1">
            Akun Saya
          </h1>
          <p className="text-gray-400 text-sm">
            Kelola informasi akun dan histori langganan anda
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 w-full overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
            {/* Kiri: Avatar + Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full lg:w-auto">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-4 border-gray-50 overflow-hidden">
                  {user.foto ? (
                    <img
                      src={user.foto}
                      alt="avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <UserCircle size={76} className="text-gray-400" />
                  )}
                </div>
                <button
                  onClick={() => setShowEditModal(true)}
                  className="absolute bottom-0 right-0 w-6 h-6 bg-[#1d6b66] hover:bg-[#175f5a] rounded-full flex items-center justify-center transition-colors shadow-sm"
                >
                  <Pencil size={11} className="text-white" />
                </button>
              </div>

              {/* Info */}
              <div className="text-center sm:text-left flex-1 min-w-0">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1 flex-wrap">
                  <h2 className="text-xl font-bold text-gray-800 tracking-tight">
                    {user?.username}
                  </h2>
                  {user?.isPremium && (
                    <span className="bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-orange-100/50">
                      👑 Premium Member
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-xs flex items-center justify-center sm:justify-start gap-1.5 mb-1 truncate">
                  ✉️ {user?.email}
                </p>
                <p className="text-gray-400 text-xs flex items-center justify-center sm:justify-start gap-1.5 mb-3">
                  📅 Bergabung sejak {user?.joinDate}
                </p>
                <div className="flex justify-center sm:justify-start">
                  <button
                    onClick={() => setShowEditModal(true)}
                    className="flex items-center gap-1.5 border border-[#1d6b66] text-[#1d6b66] hover:bg-[#1d6b66]/5 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Pencil size={12} />
                    Edit Profil
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block h-16 w-px bg-gray-100 self-center" />

            {/* Kanan: Stats */}
            <div className="grid grid-cols-2 sm:flex mt-5 sm:items-center sm:justify-between w-full lg:flex-1 gap-4 sm:gap-2">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-3 sm:flex-1 min-w-0 sm:px-4 ${
                    index !== stats.length - 1
                      ? "sm:border-r sm:border-gray-100"
                      : ""
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${stat.bgColor}`}>
                    {stat.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xl font-black text-gray-800 leading-none">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs mt-1 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Histori Subscribe */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-extrabold text-gray-800 text-lg mb-1">
            Histori Suscribe
          </h3>
          <p className="text-gray-400 text-sm mb-5">
            Riwayat semua aplikasi atau website yang pernah Anda sewa.
          </p>

          {/* Filter + Search */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <div className="flex gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilterTab(tab)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                    filterTab === tab
                      ? "bg-[#1d6b66] text-white"
                      : "text-[#1d6b66] bg-[#1d6b661b] hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 focus-within:border-[#2A8B85] transition-colors">
                <Search size={15} className="text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari Aplikasi / Website"
                  className="text-sm text-gray-700 placeholder-gray-400 focus:outline-none w-44"
                />
              </div>

              {/* Filter Button + Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className={`flex items-center gap-1.5 border text-sm font-semibold px-3 py-2 rounded-xl transition-colors ${
                    activeFilterCount > 0
                      ? "border-[#1d6b66] text-[#1d6b66] bg-[#1d6b66]/5"
                      : "border-gray-200 text-gray-500 hover:border-[#2A8B85] hover:text-[#2A8B85]"
                  }`}
                >
                  <Filter size={14} />
                  Filter
                  {activeFilterCount > 0 && (
                    <span className="w-4 h-4 bg-[#1d6b66] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                {showFilter && (
                  <FilterDropdown
                    activeFilters={activeFilters}
                    onApply={(f) => setActiveFilters(f)}
                    onClose={() => setShowFilter(false)}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Aktif filter tags */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.entries(activeFilters).map(([key, val]) =>
                val ? (
                  <span
                    key={key}
                    className="flex items-center gap-1.5 bg-[#1d6b66]/10 text-[#1d6b66] text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {val}
                    <button
                      onClick={() =>
                        setActiveFilters((prev) => ({ ...prev, [key]: "" }))
                      }
                    >
                      <X size={11} />
                    </button>
                  </span>
                ) : null
              )}
              <button
                onClick={() =>
                  setActiveFilters({ statusBayar: "", durasi: "", kategori: "" })
                }
                className="text-xs text-gray-400 hover:text-red-400 transition-colors"
              >
                Reset semua
              </button>
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Aplikasi / Website", "Durasi", "Periode", "Status", "Status Bayar", "Aksi"].map((h) => (
                    <th key={h} className="text-left text-gray-400 text-xs font-semibold pb-3 pr-4">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((sub) => (
                  <tr key={sub.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                          style={{ background: sub.iconBg }}
                        >
                          {sub.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{sub.nama}</p>
                          <p className="text-gray-400 text-xs">{sub.kategori}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 pr-4 text-gray-600">{sub.durasi}</td>
                    <td className="py-4 pr-4 text-gray-600 text-xs whitespace-nowrap">{sub.periode}</td>
                    <td className="py-4 pr-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLE[sub.status]}`}>
                        {sub.status}
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${BAYAR_STYLE[sub.statusBayar]}`}>
                        {sub.statusBayar}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="border border-[#1d6b66] text-[#1d6b66] hover:border-[#2A8B85] hover:text-[#2A8B85] text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors">
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

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-400 text-xs">
              Menampilkan 1 – {filtered.length} dari {filtered.length} data
            </p>
            <div className="flex gap-1 items-center">
              <button className="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center hover:border-[#2A8B85] transition-colors">
                <ChevronLeft size={14} />
              </button>
              <button className="w-7 h-7 rounded-lg bg-[#1d6b66] text-white text-xs font-bold">
                1
              </button>
              <button className="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center hover:border-[#2A8B85] transition-colors">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Butuh Bantuan */}
        <div className="bg-[#f0faf9] border border-[#2A8B85]/20 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={botIcon} alt="bot" className="w-10 h-10 object-contain flex-shrink-0" />
            <div>
              <p className="font-bold text-gray-800 text-sm">Butuh Bantuan?</p>
              <p className="text-gray-500 text-xs">
                Tim kami siap membantu Anda terkait langganan atau kendala lainnya.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-[#1d6b66] hover:border-[#2A8B85] hover:text-[#2A8B85] font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm whitespace-nowrap">
            <Headphones size={15} className="text-[#1d6b66]" />
            Hubungi Support
          </button>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/katalog")}
            className="flex items-center justify-center gap-2 border border-gray-300 text-gray-600 hover:border-[#2A8B85] hover:text-[#2A8B85] font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
          >
            <ChevronLeft size={16} />
            Kembali ke Kategori
          </button>
          <button
            onClick={() => navigate("/custom")}
            className="flex items-center justify-center gap-2 bg-[#1d6b66] hover:bg-[#175f5a] text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
          >
            Custom Aplikasi
            <img src={sparkleIcon} alt="sparkle" className="w-4 h-4 object-contain brightness-0 invert" />
          </button>
        </div>

        {/* Logout */}
        <div className="text-center">
          <button
            onClick={() => { logout(); navigate("/"); }}
            className="text-red-400 hover:text-red-500 text-sm font-medium transition-colors"
          >
            Keluar dari akun
          </button>
        </div>
      </div>
    </div>
  );
}