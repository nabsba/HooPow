/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['d2hkgoif6etp77.cloudfront.net'],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig
