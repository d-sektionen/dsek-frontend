const isDev = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: isDev
        ? {
              remotePatterns: [
                  { hostname: "strapi" },
                  { hostname: "admin.d-sektionen.se" },
              ],
          }
        : {
              remotePatterns: [{ hostname: "admin.d-sektionen.se" }],
          },
};

export default nextConfig;
