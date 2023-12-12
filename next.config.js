/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "replicate.com",
        },
        {
          protocol: "https",
          hostname: "replicate.delivery",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  
