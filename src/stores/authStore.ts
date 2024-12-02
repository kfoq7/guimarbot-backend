import { persistentAtom } from '@nanostores/persistent'

export const authStore = persistentAtom<string>('token', '', {
  encode: JSON.stringify,
  decode: JSON.parse
})
