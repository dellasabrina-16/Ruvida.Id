import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, ChevronDown, Menu, X } from "lucide-react";

// Simulasi state login — nanti diganti dengan auth context / Redux
const MOCK_USER = {
  isLoggedIn: false, // Ganti true untuk simulasi sudah login
  username: "Llaaa_sabbb",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const navigate = useNavigate();

  // Simulasi user — nanti dari context/auth
  const user = MOCK_USER;

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-accent-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-white font-bold text-xl">
              Ruvida<span className="text-accent-teal">.id</span>
            </span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/#layanan"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Layanan
            </Link>
            <Link
              to="/#kelebihan"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Kelebihan
            </Link>
            <Link
              to="/#produk"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Produk
            </Link>
          </div>

          {/* Kanan: CTA + User */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/katalog"
              className="bg-accent-teal text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-400 transition-colors"
            >
              Lihat Katalog
            </Link>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-600" />

            {/* Icon User / Dropdown kalau sudah login */}
            {user.isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdown(!userDropdown)}
                  className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                >
                  <User size={22} />
                  <ChevronDown size={16} />
                </button>
                {userDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-1 z-50">
                    <Link
                      to="/akun"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setUserDropdown(false)}
                    >
                      Profil
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                      onClick={() => setUserDropdown(false)}
                    >
                      Keluar
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/akun")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <User size={22} />
              </button>
            )}
          </div>

          {/* Hamburger Mobile */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary-light border-t border-gray-700 px-4 py-4 space-y-3">
          <Link
            to="/#layanan"
            className="block text-gray-300 hover:text-white text-sm font-medium py-1"
          >
            Layanan
          </Link>
          <Link
            to="/#kelebihan"
            className="block text-gray-300 hover:text-white text-sm font-medium py-1"
          >
            Kelebihan
          </Link>
          <Link
            to="/#produk"
            className="block text-gray-300 hover:text-white text-sm font-medium py-1"
          >
            Produk
          </Link>
          <Link
            to="/katalog"
            className="block bg-accent-teal text-white px-4 py-2 rounded-lg text-sm font-semibold text-center"
          >
            Lihat Katalog
          </Link>
        </div>
      )}
    </nav>
  );
}
