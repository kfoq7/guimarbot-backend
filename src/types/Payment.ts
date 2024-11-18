export interface Payment {
    userId: number
    paymentMethod: string
    PaymentDetail: PaymentDetail[]
}

export interface PaymentDetail {
    courseId: number
}