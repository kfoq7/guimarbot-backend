import { useQuery } from '@tanstack/react-query'
import { useStore } from '@nanostores/react'
import CouresCard from './CourseCard'
import type { Course } from '@/types/Course'
import { queryClient } from '@/stores/react-query'
import { $courseFilters } from '@/stores/courseFiltersStore'

export default function ListCourse() {
  const { categoryName, maxPrice, minPrice, tagNames } =
    useStore($courseFilters)

  const { data: courses } = useQuery<Course[]>(
    {
      queryKey: ['list-courses', categoryName, maxPrice, minPrice, tagNames],
      queryFn: async () => {
        const response = await fetch(
          `${import.meta.env.PUBLIC_API_URL}/course/find-courses?categoryId=${categoryName}&tagIds=${tagNames}&minPrice=${minPrice}&maxPrice=${maxPrice}`
        )
        const data = (await response.json()) as Course[]
        return data
      }
    },
    queryClient
  )

  return (
    <>
      <div className="w-full rounded-md py-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses &&
            courses.map(course => (
              <CouresCard key={course.id} course={course} />
            ))}
        </div>
      </div>
    </>
  )
}
