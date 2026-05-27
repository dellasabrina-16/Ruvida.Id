// src/layout/Navbar.jsx

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f2e2b]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#2A8B85] flex items-center justify-center">
            <span className="text-white text-sm font-bold">R</span>
          </div>

          <span className="text-white font-bold text-lg tracking-tight">
            Ruvida<span className="text-[#2A8B85]">.id</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

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

          <button className="bg-[#2A8B85] hover:bg-[#238880] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200">
            Lihat Katalog
          </button>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f2e2b] border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          {["Layanan", "Kelebihan", "Produk"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/70 hover:text-white text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <button className="bg-[#2A8B85] text-white text-sm font-semibold px-5 py-2 rounded-lg w-full">
            Lihat Katalog
          </button>
        </div>
      )}
    </nav>
  );
}