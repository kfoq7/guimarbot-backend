// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      noExternal: ['path-to-regexp']
    },
    server: {
      watch: {
        usePolling: true
      }
    }
  }
})