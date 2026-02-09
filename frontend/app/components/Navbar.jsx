"use client";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext"; // Fixed import path
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Zap, Menu, X, LogOut, User as UserIcon, Bell } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { user, logout } = useAuth(); // Get user and logout from context
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  // Fetch pending requests count
  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user) return;
      try {
        const token = user.token || JSON.parse(localStorage.getItem('user'))?.token;
        if (!token) return;

        const res = await fetch('https://skillsync-backend-g2qf.onrender.com/api/requests/received', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          // Count pending requests
          const count = data.filter(r => r.status === 'pending').length;
          setPendingCount(count);
        }
      } catch (error) {
        console.error("Failed to fetch notifications", error);
      }
    };

    fetchNotifications();

    // Poll every 30 seconds for new notifications
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, [user]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "TeamFinder", href: "/teamfinder" },
    { name: "Mentorship", href: "/coming-soon" },
    { name: "Community", href: "/coming-soon" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-slate-900/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/20 py-2"
          : "bg-transparent border-b border-transparent py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-inner border border-white/20 group-hover:scale-105 transition-transform duration-300">
                <Zap className="text-white w-6 h-6 fill-white/20" />
              </div>
            </div>
            <span className="text-2xl font-heading font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
              Project Pals
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 relative group"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Auth & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                {/* Inbox/Notifications */}
                <Link href="/teamfinder/requests" className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-transparent hover:border-brand-primary/20">
                  <Bell size={20} />
                  {pendingCount > 0 && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-slate-900 animate-pulse" />
                  )}
                </Link>

                <Link href="/profile">
                  <div className="hidden md:flex items-center gap-3 p-1 pr-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-primary/50 transition-all cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform overflow-hidden">
                      {user.image && (user.image.startsWith('http') || user.image.startsWith('/')) ? (
                        <img src={user.image} alt={user.name || "User"} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-lg">{(user.name ? user.name.charAt(0) : "U")}</span>
                      )}
                    </div>
                    <span className="text-sm font-medium text-white group-hover:text-brand-primary transition-colors">{user.name}</span>
                  </div>
                </Link>

                <button
                  onClick={logout}
                  className="p-2 rounded-full bg-white/5 hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors border border-transparent hover:border-red-500/20"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link href="/sign-in">
                <button className="hidden md:flex relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white text-sm font-bold tracking-wide shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:scale-105 transition-all duration-300 overflow-hidden group">
                  <span className="relative z-10">Sign In</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 text-slate-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-3xl pt-32 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500 hover:from-brand-primary hover:to-brand-secondary transition-all duration-300 py-2"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            {!user ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-black text-xl shadow-2xl shadow-brand-primary/30">
                    Sign In
                  </button>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <button onClick={() => { logout(); setIsOpen(false); }} className="w-full py-4 rounded-2xl bg-white/10 text-red-400 border border-red-500/20 font-black text-xl">
                  Log Out
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}
