/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          as: '*.tsx',
          loaders: ['@svgr/webpack']
        }
      },
      resolveAlias: {
        canvas: './empty-module.ts'
      }
    },
    optimizePackageImports: ['@fumy/ui', '@fumy/utilities', '@mui/x-charts', 'material-react-table', '@mui/lab'],
    scrollRestoration: false,
    serverActions: {
      bodySizeLimit: '10mb'
    }
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/ventures',
        basePath: false,
        permanent: false
      },
      {
        source: '/home',
        destination: '/ventures',
        basePath: false,
        permanent: false
      }
    ];
  },
  webpack: (config) => {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/ // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack']
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;
    config.resolve.alias.canvas = false;

    return config;
  },
  images: {
    remotePatterns: [
      { hostname: 'staging-api.fumydatacenter.com' },
      { hostname: 'api.fumydatacenter.com' },
      { hostname: 'staging-man-api.fumydatacenter.com' },
      { hostname: 'storage.fumydatacenter.com' },
      { hostname: 'img.icons8.com' },
      { hostname: 'ftp.hvantoan.io.vn' },
      { hostname: 'ventures.dc.hvantoan.io.vn' }
    ]
  },
  basePath: '/ventures',
  distDir: 'build',
  output: 'standalone'
};

export default nextConfig;
