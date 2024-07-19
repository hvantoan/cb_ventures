/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
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

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["vi"],
    defaultLocale: "vi",
  },
  transpilePackages: ["geist", "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table"],
};

export default config;
