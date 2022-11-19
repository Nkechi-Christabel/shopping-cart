/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.canadagoose.com",
      "cdn.shopify.com",
      "store.storeimages.cdn-apple.com",
    ],
  },
};

module.exports = nextConfig;
