// FILE: src/components/layout/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-accent-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-white font-bold text-lg">
                Ruvida<span className="text-accent-teal">.id</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Platform solusi aplikasi digital Indonesia. Ratusan template
              aplikasi siap pakai, dukungan 24/7.
            </p>
          </div>

          {/* Kolom 2: Kategori */}
          <div>
            <h4 className="text-white font-semibold mb-3">Kategori</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Apk Sekolah",
                "Apk Kasir",
                "Undangan Digital",
                "Apk Klinik",
                "Toko Online",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/katalog"
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h4 className="text-white font-semibold mb-3">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 +62-812-XXXX-XXXX</li>
              <li>✉️ hello@ruvida.id</li>
              <li>📍 Series-Salino, DG-TF WIB</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
          © 2025 Ruvida.id — Dibuat dengan ❤️ di Indonesia
        </div>
      </div>
    </footer>
  );
}
