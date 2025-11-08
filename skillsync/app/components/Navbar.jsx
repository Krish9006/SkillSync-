"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import JoinBetaModal from "./JoinBetaModal";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openBeta, setOpenBeta] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-700 ${
          scrolled
            ? "bg-[rgba(10,15,35,0.92)] shadow-[0_8px_30px_rgba(0,194,255,0.2)]"
            : "bg-transparent"
        } backdrop-blur-2xl border-b border-white/10`}
      >
        {/* ✨ Floating Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7c5cff]/30 via-[#00c2ff]/30 to-[#4fd1c5]/20 blur-[70px] opacity-40 pointer-events-none" />

        <div className="relative max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
          {/* 🚀 Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#7c5cff] to-[#00c2ff] text-white font-bold text-lg shadow-[0_0_20px_rgba(124,92,255,0.4)]">
              S
            </div>
            <span className="text-xl font-semibold text-white tracking-wide group-hover:text-[#00c2ff] transition">
              SkillSync
            </span>
          </Link>

          {/* 🌐 Nav Links */}
          <nav className="hidden md:flex items-center gap-10 text-slate-300 font-medium">
            {["Features", "Community", "Mentors", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative hover:text-white transition after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#7c5cff] after:to-[#00c2ff] hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* 🔮 Join Beta */}
          <button
            onClick={() => setOpenBeta(true)}
            className="hidden md:inline-flex px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[#7c5cff] via-[#00c2ff] to-[#4fd1c5]
                       hover:scale-[1.05] transition-all duration-300 shadow-[0_0_25px_rgba(0,194,255,0.35)]"
          >
            Join Beta
          </button>

          {/* 📱 Mobile Menu */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden text-slate-200 hover:text-white"
          >
            {openMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* 📱 Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            openMenu ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          } bg-[rgba(10,15,35,0.95)] backdrop-blur-xl border-t border-white/10`}
        >
          <div className="flex flex-col items-center py-6 gap-4 text-slate-300 font-medium">
            {["Features", "Community", "Mentors", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setOpenMenu(false)}
                className="hover:text-white transition"
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => {
                setOpenMenu(false);
                setOpenBeta(true);
              }}
              className="mt-3 px-5 py-2 rounded-lg bg-gradient-to-r from-[#7c5cff] to-[#00c2ff] text-white font-semibold shadow-lg hover:scale-[1.05] transition"
            >
              Join Beta
            </button>
          </div>
        </div>
      </header>

      {/* Modal — perfect z-index separation */}
      <JoinBetaModal open={openBeta} onClose={() => setOpenBeta(false)} />
    </>
  );
}
