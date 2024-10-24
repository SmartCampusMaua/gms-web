/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/gms',
  output: "standalone",
  async redirects() {
    return [
      {
        source: '/gms', // base URL
        destination: '/gms/reservatorios', // target path
        permanent: true, // makes the redirect permanent (use 308 status)
      },
    ];
  },
};

module.exports = nextConfig
