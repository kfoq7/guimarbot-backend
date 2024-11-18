// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

import vercel from '@astrojs/vercel/serverless'

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react(), icon({ include: { mdi: ['*'] } })],
  vite: {
    ssr: {
      noExternal: ['path-to-regexp']
    },
    server: {
      watch: {
        usePolling: true
      }
    }
  },

  adapter: vercel()
})