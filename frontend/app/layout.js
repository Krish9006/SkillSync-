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
  metadataBase: new URL("https://skillsynkrish.netlify.app"),
  title: "Project Pals - Build, Collaborate, Ship",
  description: "The ultimate platform for students to find teammates, showcase skills, and build real-world projects together.",
  keywords: ["hackathon", "team finder", "student projects", "developer portfolio", "collaboration"],
  openGraph: {
    title: "Project Pals - Find Your Dream Team",
    description: "Connect with skilled students, form teams, and win hackathons. Built with Next.js & Three.js.",
    url: "https://skillsynkrish.netlify.app",
    siteName: "Project Pals",
    images: [
      {
        url: "/opengraph-image.png", // We will need to add this file
        width: 1200,
        height: 630,
        alt: "Project Pals Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Pals - The LinkedIn for Hackathons",
    description: "Don't build alone. Find the perfect teammate based on verified skills.",
    images: ["/opengraph-image.png"], // Same image
  },
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
