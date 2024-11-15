import { map } from 'nanostores'

export interface CourseFilter {
  categoryName?: string
  tagNames?: string
  minPrice?: number
  maxPrice?: number
}

export const $courseFilters = map<CourseFilter>({
  categoryName: '',
  tagNames: '',
  maxPrice: 0,
  minPrice: 0
})
