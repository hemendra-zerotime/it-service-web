import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '', // leave empty unless using a custom port
        pathname: '/**', // match all paths
      },
           {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '', // leave empty unless using a custom port
        pathname: '/**', // match all paths
      },
    ],
  },

};

export default nextConfig;
