// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ["cdn.imagin.studio"]
//     },
//     reactStrictMode: true,
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    async redirects() {
        return [
            {
                source: '/',
                destination: '/landing',
                basePath: false,
                permanent: false
            }
        ]
    },
    reactStrictMode: true,
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
  }
  
  module.exports = nextConfig
  