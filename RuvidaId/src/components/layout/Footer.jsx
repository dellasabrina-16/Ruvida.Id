export default function Footer() {
  return (
    <footer
      className="py-16 px-4"
      style={{ background: "linear-gradient(160deg, #0a2420 0%, #0f3530 100%)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#2A8B85] flex items-center justify-center">
              <span className="text-white text-sm font-bold">R</span>
            </div>

            <span className="text-white font-bold text-lg tracking-tight">
              Ruvida<span className="text-[#2A8B85]">.id</span>
            </span>
          </div>

          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Platform solusi aplikasi digital Indonesia.
          </p>
        </div>

        {/* Kategori */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-5">
            Kategori
          </h4>

          <ul className="flex flex-col gap-3">
            {[
              "Apk Sekolah",
              "Apk Kasir",
              "Undangan Digital",
              "Apk Klinik",
              "Toko Online",
            ].map((k) => (
              <li key={k}>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/80 text-sm transition-colors"
                >
                  {k}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-5">
            Kontak
          </h4>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2 text-white/40 text-sm">
              📞 +62-812-XXXX-XXXX
            </li>

            <li className="flex items-center gap-2 text-white/40 text-sm">
              ✉️ hello@ruvida.id
            </li>

            <li className="flex items-center gap-2 text-white/40 text-sm">
              📍 Serang–Batos, DK-TT WIB
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/25 text-xs">
          © 2024 Ruvida.id — Semua Hak Dilindungi
        </p>

        <p className="text-white/25 text-xs">
          Dibuat dengan ❤️ untuk UMKM Indonesia
        </p>
      </div>
    </footer>
  );
}