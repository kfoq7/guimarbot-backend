import { persistentAtom } from '@nanostores/persistent'
import type { Payment } from '@/types/Payment'

const initialPayment: Payment = {
  userId: 0,
  paymentMethod: '',
  paymentDetail: []
}

export const paymentStore = persistentAtom<Payment>(
  'cart-storage',
  initialPayment,
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
)

export const removeCart = () => {
  paymentStore.set(initialPayment)
}

export const addCourseToCart = (courseId: number) => {
  const currentPayment = paymentStore.get()
  paymentStore.set({
    ...currentPayment,
    paymentDetail: [...currentPayment.paymentDetail, { courseId }]
  })
}

export const removeCourseFromCart = (courseId: number) => {
  const currentPayment = paymentStore.get()
  paymentStore.set({
    ...currentPayment,
    paymentDetail: currentPayment.paymentDetail.filter(
      item => item.courseId !== courseId
    )
  })
}
