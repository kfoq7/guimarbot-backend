import { useMemo } from 'react'
import { useQueries } from '@tanstack/react-query'
import { useStore } from '@nanostores/react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import { TAX_RATE } from '@/consts/cart'
import { queryClient } from '@/stores/react-query'
import { paymentStore } from '@/stores/cartStore'
import type { Course } from '@/types/Course'

export default function Cart() {
  const { paymentDetails } = useStore(paymentStore)

   const uniqueCourseIds = useMemo(() => {
    return Array.from(new Set(paymentDetails.map(item => item.courseId)))
  }, [paymentDetails])

  const coursesQueries = useQueries(
    {
      queries: uniqueCourseIds.map(courseId => ({
        queryKey: ['course', courseId],
        queryFn: async () => {
          const response = await fetch(
            `${import.meta.env.PUBLIC_API_URL}/course/${courseId}`
          )
          const data = (await response.json()) as Course
          return data
        }
      }))
    },
    queryClient
  )

  const isLoading = coursesQueries.some(query => query.isLoading)

  if (isLoading) {
    return <div className="py-10 text-center">Cargando carrito...</div>
  }

  const courses = coursesQueries.map(query => query.data).filter(Boolean)

  const subtotal = courses.reduce((sum, course) => {
    if (!course?.price) return 0
    return sum + course.price
  }, 0)
  const tax = subtotal * TAX_RATE
  const total = subtotal + tax

  return (
    <section className="flex h-screen flex-col px-10">
      <h1 className="mb-4 text-4xl font-bold">Tu carrito de compras</h1>
      <div className="flex w-full flex-1 gap-8 overflow-hidden">
        <div className="flex flex-1 flex-col rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-6 text-2xl font-bold">Artículos del carrito</h2>
          {courses.length === 0 ? (
            <div className="flex-1 py-10 text-center">
              <p className="text-gray-600">Tu carrito está vacío</p>
              <a
                href="/"
                className="mt-2 inline-block text-blue-500 hover:text-blue-600"
              >
                Ver catálogo de cursos
              </a>
            </div>
          ) : (
            <div className="max-h-[300px] flex-1 space-y-4 overflow-y-auto pr-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar]:w-2">
              {courses.map(
                course =>
                  course && (
                    <CartItem key={course.id} course={course} quantity={1} />
                  )
              )}
            </div>
          )}
        </div>

        <CartSummary
          subtotal={subtotal}
          tax={tax}
          total={total}
          itemCount={paymentDetails.length}
        />
      </div>
    </section>
  )
}
