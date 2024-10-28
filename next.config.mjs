/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "km"],
    defaultLocale: "km",
    localeDetection: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
