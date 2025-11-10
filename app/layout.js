import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "SkillSync — Krish Gupta",
  description: "SkillSync — Empower students to build, connect, and grow.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen antialiased overflow-visible bg-gradient-to-b from-[#030614] via-[#0a0f24] to-[#05070E] text-white relative">
          <Navbar />
          <main className="pt-24 pb-12 relative z-10 fade-in overflow-visible">
            {children}
          </main>
          <Footer />
          <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-[#030614] via-[#11182b] to-[#05070E] opacity-95" />
        </body>
      </html>
    </ClerkProvider>
  );
}
