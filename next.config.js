/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  // reactStrictMode: true,
  basePath:isProd ? "/portfolio" : "",
  distDir: "dist",
  imagesDir: {
    unoptimized: true,
  }
}

module.exports = nextConfig
