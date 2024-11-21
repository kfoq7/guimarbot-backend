import type { Plan } from '@/types/Plan'

export const EnrolleCard: React.FC<Plan> = ({
  name,
  price,
  maxUsers,
  description,
  emphasis
}) => {
  const emphasisStyles = {
    low: {
      bg: 'bg-blue-500',
      text: 'text-white'
    },
    medium: {
      bg: 'bg-zinc-200',
      text: 'text-black'
    },
    high: {
      bg: 'bg-red-500',
      text: 'text-white'
    }
  }

  return (
    <div className="h-76 flex w-96 flex-col justify-between rounded-md border border-gray-300">
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center justify-between p-6 pb-3">
            <h2 className="text-xl font-bold">{name}</h2>
            <div
              className={`rounded-full px-2 py-1 ${emphasisStyles[emphasis].bg} hover:bg-opacity-90`}
            >
              <p
                className={`text-sm font-medium ${emphasisStyles[emphasis].text}`}
              >
                {maxUsers} personas
              </p>
            </div>
          </div>

          <div className="px-6 py-4">
            <p className="break-words text-gray-500">{description}</p>
          </div>
        </div>

        <div className="p-6 pt-3">
          <p>Capacidad: {maxUsers} usuarios</p>
          <p>Precio: ${price}</p>
        </div>
      </div>

      <button
        className={`w-full rounded-b-md ${emphasisStyles[emphasis].bg} ${emphasisStyles[emphasis].text} py-4 hover:bg-opacity-90`}
      >
        Ver detalles
      </button>
    </div>
  )
}
