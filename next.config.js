/** @type {import('next').NextConfig} */
// const nextConfig = {
//     distDir: 'build',
//     output: 'export',
//     reactStrictMode: false,
//     swcMinify: true,
//     images: {
//         unoptimized: true,
//     },
// };

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // reactStrictMode: false,
    // swcMinify: true,
};

module.exports = nextConfig;
