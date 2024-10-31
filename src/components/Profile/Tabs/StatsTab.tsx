export default function StatsTab() {
  return (
    <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6 text-center">
        <h2 className="mt-4 text-2xl font-semibold">Luis García</h2>
        <p className="text-gray-600">Estudiante avanzado</p>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="rounded-lg bg-gray-100 p-4">
          <h3 className="text-xl font-bold">Cursos Completados</h3>
          <p className="text-3xl font-semibold text-indigo-600">12</p>
        </div>

        <div className="rounded-lg bg-gray-100 p-4">
          <h3 className="text-xl font-bold">Horas Estudiadas</h3>
          <p className="text-3xl font-semibold text-indigo-600">45h</p>
        </div>

        <div className="rounded-lg bg-gray-100 p-4">
          <h3 className="text-xl font-bold">Certificados</h3>
          <p className="text-3xl font-semibold text-indigo-600">3</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-4 text-xl font-semibold">Progreso Reciente</h3>
        <div className="rounded-lg bg-gray-100 p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-medium">Curso de JavaScript Avanzado</p>
            <span className="text-sm text-gray-500">80% completado</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-300">
            <div
              className="h-2 rounded-full bg-indigo-600"
              style={{ width: '80%' }}
            ></div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-gray-100 p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-medium">Curso de React Básico</p>
            <span className="text-sm text-gray-500">50% completado</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-300">
            <div
              className="h-2 rounded-full bg-indigo-600"
              style={{ width: '50%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
