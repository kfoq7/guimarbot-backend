import { paymentStore, addCourseToCart } from '@/stores/cartStore'
import { useStore } from '@nanostores/react'
import { useEffect, useState } from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import type { Course } from '@/types/Course'

const TAX_RATE = 0.12

export default function Cart() {
    const { PaymentDetail } = useStore(paymentStore)
    const [courses, setCourses] = useState<Course[]>([])
    const [loading, setLoading] = useState(true)

    console.log(PaymentDetail)
    const fetchCourse = async (id: number) => {
        try {
            // no funciona el env
            const response = await fetch(`http://localhost:5006/api/course/${id}`)
            if (!response.ok) return null
            return await response.json()
        } catch (error) {
            console.error(`Error fetching course ${id}:`, error)
            return null
        }
    }

    useEffect(() => {
        const loadCourses = async () => {
            setLoading(true);

            const uniquePaymentDetail = Array.from(new Set(PaymentDetail.map(item => item.courseId)))
                .map(courseId => PaymentDetail.find(item => item.courseId === courseId));

            const coursesData = await Promise.all(
                uniquePaymentDetail.filter(item => item !== undefined).map(item => fetchCourse(item!.courseId))
            );

            setCourses(coursesData.filter(Boolean));
            setLoading(false);
        };

        loadCourses();
    }, [PaymentDetail]);


    const subtotal = courses.reduce((sum, course) => sum + course.price, 0)
    const tax = subtotal * TAX_RATE
    const total = subtotal + tax

    if (loading) {
        return <div className="py-10 text-center">Cargando carrito...</div>
    }

    return (
        <section className="h-screen px-10 flex flex-col">
            <h1 className="text-4xl font-bold mb-4">Tu carrito de compras</h1>
            <div className="flex-1 flex w-full gap-8 overflow-hidden">
                <div className="flex-1 rounded-xl border border-gray-200 bg-white p-6 flex flex-col">
                    <h2 className="mb-6 text-2xl font-bold">Artículos del carrito</h2>
                    {courses.length === 0 ? (
                        <div className="flex-1 py-10 text-center">
                            <p className="text-gray-600">Tu carrito está vacío</p>
                            <a href="/" className="mt-2 inline-block text-blue-500 hover:text-blue-600">
                                Ver catálogo de cursos
                            </a>
                        </div>
                    ) : (
                        <div className="flex-1 max-h-[300px] pr-2 overflow-y-auto
                      [&::-webkit-scrollbar]:w-2
                      [&::-webkit-scrollbar-track]:rounded-full
                      [&::-webkit-scrollbar-track]:bg-gray-100
                      [&::-webkit-scrollbar-thumb]:rounded-full
                      [&::-webkit-scrollbar-thumb]:bg-gray-300
                      dark:[&::-webkit-scrollbar-track]:bg-white
                      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-100 space-y-4">
                            {courses.map(course => (
                                <CartItem
                                    key={course.id}
                                    course={course}
                                    quantity={2}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <CartSummary
                    subtotal={subtotal}
                    tax={tax}
                    total={total}
                    itemCount={PaymentDetail.length}
                />
            </div>
        </section>
    )
}
