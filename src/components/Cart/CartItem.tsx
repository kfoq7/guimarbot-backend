import { removeCourseFromCart } from '@/stores/cartStore'
import type { Course } from '@/types/Course'

interface Props {
  course: Course
  quantity: number
}

export default function CartItem({ course, quantity }: Props) {
  return (
    <div className="flex rounded-xl border border-gray-200 p-6">
      <div className="flex-1">
        <h2 className="text-lg font-bold">{course.title}</h2>
        <p className="text-gray-600">Cantidad: {quantity}</p>
        <p className="text-lg font-bold">${course.price}</p>
      </div>
      <div className="mx-6 flex w-40 items-center justify-center gap-3">
        <button className="flex items-center gap-3 rounded-lg border px-4 py-2">
          Ver
        </button>
        <button
          className="flex items-center rounded-lg bg-red-500 px-3 py-2 text-white hover:bg-red-400"
          onClick={() => removeCourseFromCart(course.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}
