/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: produces a plain HTML/CSS/JS `out/` folder with no server
  // requirement, so it can be drag-and-dropped straight into Netlify (or any
  // static host). Nothing in this project needs a Node server — all backend
  // work (Firestore, Cloudinary) happens client-side — so this costs nothing.
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
