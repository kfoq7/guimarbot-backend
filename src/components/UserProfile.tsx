import { useEffect, useState } from 'react'

export default function UserProfile() {
  const [accessToken, setAccessToken] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    setAccessToken(token)
  }, [])

  return (
    <>
      {!accessToken ? (
        <div className="mr-4 flex items-center justify-end gap-4 md:flex-grow md:basis-0">
          <a
            href="/auth/login"
            className="flex items-center justify-center rounded-md border border-none px-4 py-2.5 text-lg leading-none transition-transform duration-300 hover:scale-105"
          >
            Aprende ahora
          </a>
        </div>
      ) : (
        <div className="mr-4 flex items-center justify-end gap-4 md:flex-grow md:basis-0">
          Logged
        </div>
      )}
    </>
  )
}
