interface EnrolleCardProps {
  title: string
  capacity: number
  price: number
  emphasis: 'low' | 'medium' | 'high'
}

export const EnrolleCard: React.FC<EnrolleCardProps> = ({
  title,
  capacity,
  price,
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
    <div className="w-96 rounded-md border border-gray-300">
      <div
        className={`flex items-center justify-between p-6 ${emphasisStyles[emphasis].bg}`}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <div className={`rounded-full px-2 py-1`}>
          <p className={`text-sm font-medium ${emphasisStyles[emphasis].text}`}>
            {capacity} usuarios
          </p>
        </div>
      </div>
      <p>Capacity: {capacity}</p>
      <p>Price: {price}</p>
    </div>
  )
}
