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
          className="aspect-[16/9] w-full rounded-t-md"
        />
      </figure>

      <div className="grow px-3 py-2">
        <h3 className="text-lg font-bold">{course.title}</h3>
        <p>{course.description}</p>
      </div>
      <div></div>
    </a>
  )
}
