/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'ik.imagekit.io'],
    loader: 'custom',
    loaderFile: './src/lib/imagekit-loader.js',
  },
}

module.exports = nextConfig
