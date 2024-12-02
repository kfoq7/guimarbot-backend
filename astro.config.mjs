// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless'
import icon from 'astro-icon'

export default defineConfig({
  output: 'server',
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), react(), icon({ include: { mdi: ['*'] } })],
  adapter: vercel(),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp']
    },
    server: {
      watch: {
        usePolling: true
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'three-vendors': ['three']
          }
        }
      }
    }
  }
})
