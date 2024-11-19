export interface Payment {
  userId: number
  paymentMethod: string
  paymentDetail: PaymentDetail[]
}

export interface PaymentDetail {
  courseId: number
}
