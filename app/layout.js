import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "SkillSync — Krish Gupta",
  description: "SkillSync — Empower students to build, connect, and grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<body className="min-h-screen antialiased overflow-visible">


        {/* 🔝 Fixed Navbar */}
        <Navbar />

        {/* ✨ Properly aligned main content */}
        <main className="pt-24 pb-12 relative z-10 fade-in overflow-visible">

          {children}
        </main>

        {/* 🌍 Footer */}
        <Footer />

        {/* 💫 Soft background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-[#05070E] via-[#0a0f24] to-[#05070E] opacity-95" />
      </body>
    </html>
  );
}
