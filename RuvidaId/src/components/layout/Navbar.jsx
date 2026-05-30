import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { User, ChevronDown, Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const isLandingPage = location.pathname === "/";

  const handleLogout = () => {
    logout();
    setUserDropdown(false);
    navigate("/");
  };

  const renderUserArea = () => {
    // Landing page + belum login → tidak tampil sama sekali
    if (isLandingPage && !user.isLoggedIn) return null;

    // Landing page + sudah login → icon saja, tidak bisa diklik
    if (isLandingPage && user.isLoggedIn) {
      return (
        <div className="p-1.5 rounded-full bg-teal-900/40 border border-teal-700/50">
          <User size={18} className="text-teal-400 stroke-[2.5]" />
        </div>
      );
    }

    // Halaman lain + belum login → icon klik ke /account
    if (!user.isLoggedIn) {
      return (
        <button
          onClick={() => alert("fitur login belum ada le hahay")}
          className="p-1.5 rounded-full bg-teal-900/40 border border-teal-700/50 hover:border-teal-500 transition-colors"
        >
          <User size={18} className="text-teal-400 stroke-[2.5]" />
        </button>
      );
    }

    // Halaman lain + sudah login → icon + chevron + dropdown
    return (
      <div className="relative">
        <button
          onClick={() => setUserDropdown(!userDropdown)}
          className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors p-1"
        >
          <div className="p-1.5 rounded-full bg-teal-900/40 border border-teal-700/50">
            <User size={18} className="stroke-[2.5]" />
          </div>
          <ChevronDown
            size={14}
            className={`text-gray-400 transition-transform duration-200 ${
              userDropdown ? "rotate-180" : ""
            }`}
          />
        </button>

        {userDropdown && (
          <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl py-1 z-50 border border-gray-100">
            <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-50 truncate">
              {user.username}
            </div>
            <Link
              to="/akun"
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => setUserDropdown(false)}
            >
              Profil Saya
            </Link>
            <hr className="my-1 border-gray-100" />
            <button
              className="block w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50"
              onClick={handleLogout}
            >
              Keluar
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav
      className="sticky top-0 z-50 shadow-md backdrop-blur-sm"
      style={{ backgroundColor: "#112a27" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2A8B85] flex items-center justify-center">
              <span className="text-white text-sm font-bold">R</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Ruvida<span className="text-[#2A8B85]">.id</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 ml-auto">

            {/* Menu links - hanya di landing page */}
            {isLandingPage && (
              <div className="flex items-center gap-8">
                {["Layanan", "Kelebihan", "Produk"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}

            {/* Tombol Lihat Katalog - hanya di landing page */}
            {isLandingPage && (
              <Link
                to="/katalog"
                className="bg-[#2A8B85] hover:bg-[#238880] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200"
              >
                Lihat Katalog
              </Link>
            )}

            {/* Garis pemisah - sembunyikan jika landing + belum login */}
            {!(isLandingPage && !user.isLoggedIn) && (
              <div className="w-px h-6 bg-gray-600 opacity-60" />
            )}

            {/* User area */}
            {renderUserArea()}
          </div>

          {/* Hamburger mobile */}
          <button
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-white/5 px-4 py-4 flex flex-col gap-3"
          style={{ backgroundColor: "#0f2e2b" }}
        >
          {isLandingPage && (
            <>
              {["Layanan", "Kelebihan", "Produk"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/70 hover:text-white text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Link
                to="/katalog"
                className="bg-[#2A8B85] text-white text-sm font-semibold px-5 py-2 rounded-lg text-center"
                onClick={() => setMobileOpen(false)}
              >
                Lihat Katalog
              </Link>
            </>
          )}

          {/* Mobile user actions - halaman lain */}
          {!isLandingPage && user.isLoggedIn && (
            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              <span className="text-white/40 text-xs px-1">{user.username}</span>
              <Link
                to="/account"
                className="text-white/70 hover:text-white text-sm py-1 px-1"
                onClick={() => setMobileOpen(false)}
              >
                Profil Saya
              </Link>
              <button
                onClick={() => { handleLogout(); setMobileOpen(false); }}
                className="text-left text-red-400 hover:text-red-300 text-sm py-1 px-1"
              >
                Keluar
              </button>
            </div>
          )}

          {!isLandingPage && !user.isLoggedIn && (
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => { navigate("/account"); setMobileOpen(false); }}
                className="text-teal-400 hover:text-teal-300 text-sm"
              >
                Login / Daftar
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}