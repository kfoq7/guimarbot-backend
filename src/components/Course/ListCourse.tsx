import { useEffect, useState } from 'react'
import CouresCard from './CourseCard'
import type { Course } from '@/types/Course'

export default function ListCourse() {
  const [course, setCourse] = useState<Course[]>([])

  useEffect(() => {
    const fetchAllCourse = async () => {
      const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/course`)
      const data = (await response.json()) as Course[]
      setCourse(data)
    }
    fetchAllCourse()
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 pb-10 pt-28">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Cursos habilitados
      </h1>

      <div className="rounded-md p-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {course.map(course => (
            <CouresCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  )
}
