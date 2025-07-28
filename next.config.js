/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static export
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    serverActions: {}, // ✅ Fixed format
  },
};

module.exports = nextConfig;
