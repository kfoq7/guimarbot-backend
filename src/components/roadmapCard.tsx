interface PresetLearningPathProps {
  title: string
  description: string
  topics: string[]
  duration: string
}

export function RoadMapCard({
  title,
  description,
  topics,
  duration
}: PresetLearningPathProps) {
  return (
    <div className="rounded-lg border border-gray-200">
      <div className="w-full p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-medium">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {topics.map(topic => (
              <div
                className="rounded-full bg-gray-200 px-2 py-1 text-xs font-medium"
                key={topic}
              >
                {topic}
              </div>
            ))}
          </div>
          <p className="mb-4 text-sm text-gray-500">
            Duración estimada: {duration}
          </p>
        </div>
      </div>

      <button className="flex h-10 w-full items-center justify-center rounded-b-md bg-blue-500 text-white hover:bg-blue-400">
        <a href="/course/roadmap/1"> Ver detalles</a>
      </button>
    </div>
  )
}
