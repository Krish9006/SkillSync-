import "./globals.css";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LoadingProvider } from "./context/LoadingContext";
import PageLoader from "./components/PageLoader";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "SkillSync - Build the Future, Together",
  description: "Connect with students, find mentors, and ship real-world projects.",
};

import { AuthProvider } from "../context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning={true} className={`${inter.variable} ${outfit.variable} ${mono.variable}`}>
        <body className="bg-os-bg text-white antialiased selection:bg-signal-blue/30 selection:text-white">
          <LoadingProvider>
            <SmoothScroll />
            <PageLoader />
            <Navbar />
            <main className="min-h-screen pt-20">
              {children}
            </main>
            <Footer />
          </LoadingProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
