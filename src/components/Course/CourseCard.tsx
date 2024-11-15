import { transformTitleParam } from '@/utils'
import type { Course } from '@/types/Course'

interface Props {
  course: Course
}

export default function CouresCard({ course }: Props) {
  return (
    <a
      href={`/course/${transformTitleParam(course.title)}`}
      className="flex cursor-pointer flex-col gap-5 rounded-md bg-white pb-2"
    >
      <figure className="relative">
        <img
          src="/img/courses/ultimas-novedades-javascript.webp"
          width={500}
          className="aspect-[16/9] w-full rounded-t-md"
        />
      </figure>

      <div className="grow px-3 py-2">
        <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
        <p className="text-sm text-gray-600">{course.description}</p>
      </div>

      <div className="flex flex-col gap-1 px-3 text-sm text-gray-700">
        <p>
          <span className="font-semibold">Teacher:</span> {course.teacherName}
        </p>
        <p>
          <span className="font-semibold">Duration:</span>{' '}
          {course.durationHours} hours
        </p>
        <p>
          <span className="font-semibold">Rating:</span> {course.averageRating}
          /5
        </p>
        <p className="font-bold text-green-600">${course.price.toFixed(2)}</p>
      </div>
    </a>
  )
}
