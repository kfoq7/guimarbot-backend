import { addCourseToCart } from '@/stores/cartStore'
import { queryClient } from '@/stores/react-query'
import { useQuery } from '@tanstack/react-query'

interface Props {
  userId: number
  courseId: number
}

export default function CourseActionsButton({ userId, courseId }: Props) {
  const { data, isError } = useQuery(
    {
      queryKey: ['is-user-enrollment', userId, courseId],
      queryFn: async () => {
        const response = await fetch(
          `${import.meta.env.PUBLIC_API_URL}/user/${userId}/courses/${courseId}/enrollment`
        )
        const data = (await response.json()) as {
          userId: number
          isEnrolled: boolean
        }
        return data
      }
    },
    queryClient
  )

  const handleOnClick = () => {
    const courseId =
      Number(
        (document.querySelector('#buy-btn') as HTMLButtonElement).dataset
          .courseId
      ) || 0
    if (courseId === 0) return
    addCourseToCart(courseId)
  }

  if (isError || !data?.isEnrolled) {
    return (
      <>
        <button
          id="buy-btn"
          onClick={handleOnClick}
          data-course-id={courseId}
          className="w-full rounded-md border border-gray-200/90 bg-blue-500 px-4 py-2.5 font-semibold text-white transition-transform duration-300 hover:scale-105"
        >
          Agregar a carrito
        </button>
        <a
          id="buy-now-btn"
          onClick={handleOnClick}
          data-course-id={courseId}
          className="block w-full rounded-md border border-blue-500 bg-transparent px-4 py-2.5 text-center font-semibold text-blue-500 transition-transform duration-300 hover:scale-105"
        >
          Comprar ahora
        </a>
      </>
    )
  }

  return (
    <>
      <a
        href="/course"
        className="block w-full rounded-md border-gray-200/90 bg-blue-500 px-4 py-2.5 text-center font-semibold text-white transition-transform duration-300 hover:scale-105"
      >
        Ir a curso
      </a>
    </>
  )
}
