const isDev = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: isDev
    ? {
        remotePatterns: [{ hostname: "strapi" }],
      }
    : {},
};

export default nextConfig;
