// next.config.ts  – single, unified export
import path from "path";
import mdx from "@next/mdx";

// --- 1. wrap MDX ---
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [], rehypePlugins: [] },
});

// --- 2. compose the real config ---
const nextConfig = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: { typedRoutes: true },

  webpack(config) {
    // alias "@/"  →  "<repo>/src"
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
});

// --- 3. export once, at the bottom ---
export default nextConfig;
