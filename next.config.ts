import type { NextConfig } from "next";

// DEPLOY_TARGET=firebase → no basePath (custom domain)
// DEPLOY_TARGET=ghpages or unset → /erecycle-framework basePath
const useBasePath =
  process.env.NODE_ENV === "production" &&
  process.env.DEPLOY_TARGET !== "firebase";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: useBasePath ? "/erecycle-framework" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
