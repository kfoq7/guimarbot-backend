export interface Category {
  id: number
  name: string
}

export interface Tag {
  id: number
  name: string
}

export interface Course {
  id: number
  title: string
  description: string
  price: number
  teacherName: string
  videoPreviewUrl: string
  durationHours: number
  averageRating: number
  category: Category
  tags: Tag[]
}
