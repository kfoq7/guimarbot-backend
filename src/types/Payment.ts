export interface PaymentDetail {
  courseId: number
}

export interface Payment {
  userId?: number
  paymentMethodId: number
  paymentDetails: PaymentDetail[]
}
