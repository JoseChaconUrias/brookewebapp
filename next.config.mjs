/** @type {import('next').NextConfig} */


const nextConfig = {
    basePath: '/brookewebapp',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/brookewebapp' : '',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
