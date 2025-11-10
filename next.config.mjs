/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },

  // ✅ Prevent build-time warnings (Clerk + Netlify + Next.js 16)
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  // ✅ Enable faster builds and stable middleware (proxy.js)
  webpack: (config) => {
    config.cache = {
      type: "filesystem",
      compression: "gzip",
    };
    return config;
  },
};

export default nextConfig;
