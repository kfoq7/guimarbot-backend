import { persistentAtom } from '@nanostores/persistent'
import type { Payment } from '@/types/Payment'

const initialPayment: Payment = {
  userId: JSON.parse(localStorage.getItem('user') ?? '{}')?.userId,
  paymentMethodId: 1,
  paymentDetails: []
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
    userId: JSON.parse(localStorage.getItem('user') ?? '{}').userId,
    paymentDetails: [...currentPayment.paymentDetails, { courseId }]
  })
}

export const removeCourseFromCart = (courseId: number) => {
  const currentPayment = paymentStore.get()
  paymentStore.set({
    ...currentPayment,
    paymentDetails: currentPayment.paymentDetails.filter(
      item => item.courseId !== courseId
    )
  })
}
