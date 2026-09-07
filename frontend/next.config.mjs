const isDev = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: isDev
    ? {
        remotePatterns: [
          { hostname: "strapi" },
          { hostname: "meilisearch" },
          { hostname: "admin.d-sektionen.se" },
        ],
      }
    : {
        remotePatterns: [
          { hostname: "d-sektionen-se_meilisearch" },
          { hostname: "admin.d-sektionen.se" },
        ],
      },
};

export default nextConfig;
