/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => config,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
