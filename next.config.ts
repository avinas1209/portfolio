import type { NextConfig } from "next";

// Supplied by the GitHub Pages workflow (actions/configure-pages), e.g. "/portfolio".
// Empty locally so `next dev` still serves from the root.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath,
  // Emit out/about/index.html instead of out/about.html — GitHub Pages resolves
  // directory URLs reliably, bare .html files less so.
  trailingSlash: true,
  // No image optimizer exists on a static host.
  images: { unoptimized: true },
};

export default nextConfig;
