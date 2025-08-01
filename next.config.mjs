/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.pexels.com']
  },
};

export default nextConfig;
