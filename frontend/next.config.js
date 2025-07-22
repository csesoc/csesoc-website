/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true, // Enable Server Actions
  },
};

module.exports = nextConfig;
