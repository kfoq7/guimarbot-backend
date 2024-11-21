export interface Plan {
  id: number
  name: string
  price: number
  maxUsers: number
  description: string
  emphasis: 'low' | 'medium' | 'high'
}
