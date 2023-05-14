/** @type {import('next').NextConfig} */
const path = require('path');


const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
    images: {
        domains: ['images.pexels.com','avatars.githubusercontent.com'],
    },
}

module.exports = nextConfig
