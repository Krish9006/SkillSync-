/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google Auth
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // GitHub Auth
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash
      },
    ],
  },
};

export default nextConfig;
