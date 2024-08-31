// @ts-nocheck
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js');

/** @type {import("next").NextConfig} */
const config = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { hostname: 'img.icons8.com' },
      { hostname: 'gw.alipayobjects.com' },
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'cdn.discordapp.com' },
    ],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['vi'],
    defaultLocale: 'vi',
  },
  webpack(config, { isServer }) {
    if (isServer) {
      // Ignore self-signed certificates
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    }

    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;
    config.resolve.alias.canvas = false;

    return config;
  },
};

export default config;
