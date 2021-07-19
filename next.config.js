module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.linkedin.com/:path*',
      },
    ]
  },
}
