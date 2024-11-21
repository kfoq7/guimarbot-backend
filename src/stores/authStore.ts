import { persistentAtom } from '@nanostores/persistent'

const initialAuth = {
  userId: 0,
  token: ''
}

export const authStore = persistentAtom<string>('token', '', {
  encode: JSON.stringify,
  decode: JSON.parse
})
