/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly API_URL: string
  readonly PUBLIC_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
