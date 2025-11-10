"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import JoinBetaModal from "./JoinBetaModal";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openBeta, setOpenBeta] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isSignedIn, user } = useUser();

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
            ? "bg-[rgba(13,17,40,0.85)] shadow-[0_8px_40px_rgba(0,194,255,0.25)] backdrop-blur-[20px] border-b border-[#1f2a45]/50"
            : "bg-transparent"
        }`}
      >
        {/* 🌈 Animated Dual Gradient Background */}
        <div className="absolute inset-0 -z-10 animate-gradient-flow">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_#7c5cff,_#00c2ff,_#4fd1c5,_#7c5cff)] bg-[length:300%_300%] opacity-80 blur-[70px]" />
          <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_rgba(124,92,255,0.25),_rgba(0,194,255,0)_70%)] blur-[120px]" />
        </div>

        {/* ✨ Main Navbar Content */}
        <div className="relative max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
          {/* 🚀 Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#7c5cff] via-[#00c2ff] to-[#4fd1c5] text-white font-bold text-lg shadow-[0_0_25px_rgba(0,194,255,0.45)]">
              S
            </div>
            <span className="text-xl font-semibold text-white tracking-wide group-hover:text-[#00c2ff] transition">
              SkillSync
            </span>
          </Link>

          {/* 🌐 Desktop Nav Links */}
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

          {/* 🔒 Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {isSignedIn ? (
              <div className="flex items-center gap-3">
                <span className="text-slate-200 font-medium">
                  Hi, {user.firstName || "User"} 👋
                </span>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <Link
                href="/sign-in"
                className="px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[#7c5cff] via-[#00c2ff] to-[#4fd1c5]
                           hover:scale-[1.05] transition-all duration-300 shadow-[0_0_30px_rgba(0,194,255,0.35)]"
              >
                Log In / Sign Up
              </Link>
            )}
          </div>

          {/* 📱 Mobile Menu Icon */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden text-slate-200 hover:text-white transition"
          >
            {openMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* 📱 Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            openMenu ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
          } bg-[rgba(15,20,40,0.92)] backdrop-blur-xl border-t border-white/10`}
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
            {isSignedIn ? (
              <div className="flex flex-col items-center">
                <span className="text-white mb-2">
                  Hello, {user.firstName || "User"} 👋
                </span>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <Link
                href="/sign-in"
                onClick={() => setOpenMenu(false)}
                className="mt-3 px-5 py-2 rounded-lg bg-gradient-to-r from-[#7c5cff] to-[#00c2ff] text-white font-semibold shadow-lg hover:scale-[1.05] transition"
              >
                Log In / Sign Up
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* 🎯 Modal (for future beta access) */}
      <JoinBetaModal open={openBeta} onClose={() => setOpenBeta(false)} />
    </>
  );
}
