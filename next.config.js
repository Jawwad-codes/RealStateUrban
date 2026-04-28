/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: "export", // fully static — generates /out with plain HTML/CSS/JS
  images: {
    unoptimized: true, // required for static export (no Next.js image server)
  },
  trailingSlash: true, // /listings/ instead of /listings — better for static hosts
};

export default nextConfig;
