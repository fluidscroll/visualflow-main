// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
// //   // Add this for Docker support
//    output: 'standalone',
//  };

// const nextConfig = {
// output: 'export',
// // // ... other existing config
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',         // tells Next.js to generate static HTML (works for Netlify)
  images: {
    unoptimized: true,      // disables Next.js image optimization (so images work statically)
  },
  eslint: {
    ignoreDuringBuilds: true,  // ignore lint errors during build
  },
};

module.exports = nextConfig;



