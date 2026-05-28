// ── Kategori Section ────────────────────────────────────────
function KategoriSection() {
  const [aktif, setAktif] = useState(null);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#2A8B85] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Semua Kategori
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Temukan Aplikasi yang Tepat
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Pilih kategori sesuai kebutuhan bisnis Anda dan temukan solusi digitalnya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kategoriList.map((kat) => (
            <div
              key={kat.id}
              onClick={() => setAktif(aktif === kat.id ? null : kat.id)}
              className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${kat.isDark ? "text-white" : "text-gray-800"
                } ${aktif === kat.id ? "ring-2 ring-[#2A8B85]" : ""}`}
              style={{ background: kat.gradient }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{kat.icon}</span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${kat.isDark ? "bg-white/20 text-white" : "bg-white/70 text-gray-600"
                    }`}
                >
                  {kat.tag}
                </span>
              </div>
              <h3 className={`font-bold text-lg mb-2 ${kat.isDark ? "text-white" : "text-gray-900"}`}>
                {kat.nama}
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${kat.isDark ? "text-white/70" : "text-gray-600"}`}>
                {kat.deskripsi}
              </p>
              <div className="flex items-center justify-between">
                <span className={`font-bold text-sm ${kat.isDark ? "text-white" : "text-[#2A8B85]"}`}>
                  {kat.harga}
                </span>
                {kat.rating && (
                  <span className="text-yellow-400 text-xs">{kat.rating}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Expanded list */}
        {aktif && aplikasiPerKategori[aktif] && aplikasiPerKategori[aktif].length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Produk dalam kategori ini
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {aplikasiPerKategori[aktif].map((app) => (
                <div
                  key={app.id}
                  className="rounded-2xl p-5 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <div
                    className="h-14 w-14 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: app.gradient }}
                  >
                    {app.icon}
                  </div>
                  {app.badge && (
                    <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full mb-3 inline-block">
                      {app.badge}
                    </span>
                  )}
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{app.nama}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{app.deskripsi}</p>
                  <span className="text-[#2A8B85] font-bold text-sm">{app.harga}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}