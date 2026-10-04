// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeoparandus.eu',
  base: '/',

  vite: {
    plugins: [tailwindcss()],
      server: {
    allowedHosts: [
      'recolor-uselessly-deception.ngrok-free.dev',
      'localhost',
      '.ngrok-free.dev'
    ],
  },
  },

  integrations: [sentry()],
});