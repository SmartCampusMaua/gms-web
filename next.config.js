/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/gms',
  images:{
    loader:"custom",
    loaderFile:"custom-image-loader.js",
  },
  output: "standalone",
};

module.exports = nextConfig;
