
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  // eslint: {
  //   ignoreDuringBuilds: false,
  // },
  images: {
    remotePatterns: [
      {
        hostname: "**", // Replace with your hostname
        // Replace with your image path or use `/**` for all paths
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
