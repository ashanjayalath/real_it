// /** @type {import('next').NextConfig} */
//
// const nextConfig = {
//   swcMinify: true,
//   basePath: process.env.NEXT_PUBLIC_BASE_PATH,
//   assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
//   images: {
//     domains: [
//       'images.unsplash.com',
//       'i.ibb.co',
//       'scontent.fotp8-1.fna.fbcdn.net',
//     ],
//     // Make ENV
//     unoptimized: true,
//   },
// };
//
// // module.exports = withTM(nextConfig);
// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable SWC minification for better compression
  swcMinify: true,
  // Define image domains
  images: {
    domains: ['images.unsplash.com', 'i.ibb.co', 'scontent.fotp8-1.fna.fbcdn.net'],
    // Unoptimized images for better compatibility
    unoptimized: true,
  },
};

module.exports = nextConfig;