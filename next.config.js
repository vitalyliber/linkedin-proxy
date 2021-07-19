module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/proxy/:path*',
        destination: 'https://www.linkedin.com/:path*',
      },
    ]
  },
}
