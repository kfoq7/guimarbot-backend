import { useEffect, useState } from 'react'
import MenuDrop from './ui/MenuDrop'

export default function UserProfile() {
  const [accessToken, setAccessToken] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    setAccessToken(token)
  }, [])

  return (
    <>
      {!accessToken ? (
        <a
          href="/auth/login"
          className="flex items-center justify-center rounded-md border border-none px-4 py-2.5 text-lg leading-none transition-transform duration-300 hover:scale-105"
        >
          Aprende ahora
        </a>
      ) : (
        <div className="mr-4 flex items-center justify-end gap-4 md:flex-grow md:basis-0">
          <MenuDrop
            items={[
              {
                href: '/profile',
                name: 'Verfil'
              },
              {
                href: '/profile/my-courses',
                name: 'Mis cursos'
              }
            ]}
            label="Ver perfil"
          />
        </div>
      )}
    </>
  )
}
