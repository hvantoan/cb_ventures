/* eslint-disable import/order,import/no-extraneous-dependencies */
import { background, error, grey, info, primary, secondary, success, text, warning } from './constants/colors';
import { customShadows } from './constants/shadows';

import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../libs/hvantoan-ui/components/**/*.{js,ts,jsx,tsx,mdx}', // relative to apps/project/tailwind.config.ts
    '../../libs/hvantoan-ui/theme/**/*.{js,ts,jsx,tsx,mdx}' // relative to apps/project/tailwind.config.ts
  ],
  corePlugins: {
    preflight: false
  },
  important: 'html',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      boxShadow: {
        ...customShadows
      },
      colors: {
        primary,
        secondary,
        success,
        error,
        warning,
        text,
        info,
        grey,
        background,
        white: '#FFFFFF',
        transparent: 'transparent'
      }
    }
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1440px'
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['solar', 'carbon', 'eva', 'mingcute', 'iconamoon', 'vscode-icons', 'ic'])
    })
  ]
};

export default config;
