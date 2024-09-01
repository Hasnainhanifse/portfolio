/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  output:"export",
  distDir: "dist",
  imagesDir: {
    unoptimized: true,
  }
}

module.exports = nextConfig
