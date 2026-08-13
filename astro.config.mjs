// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeoparandus.eu',
  base: '/Jeo-arvutiparandus-',
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
});
