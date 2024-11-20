import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/stores/react-query'
import type { Payment } from '@/types/Payment'
import { paymentStore } from '@/stores/cartStore'

interface Props {
  subtotal: number
  tax: number
  total: number
  itemCount: number
}

export default function CartSummary({
  subtotal,
  tax,
  total,
  itemCount
}: Props) {
  const payment = paymentStore.get()

  const { mutate } = useMutation(
    {
      mutationFn: async (paymentData: Payment) => {
        console.log(paymentData)
        const response = await fetch(
          `${import.meta.env.PUBLIC_API_URL}/payment`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentData)
          }
        )
        const data = (await response.json()) as Payment
        return data
      }
    },
    queryClient
  )

  return (
    <div className="w-96 flex-none rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="text-2xl font-bold">Resumen de compra</h2>
      <div className="text-lg text-gray-800">
        <div className="mt-4 flex justify-between">
          <p>Subtotal:</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="mt-4 flex justify-between">
          <p>Impuestos (12%):</p>
          <p>${tax.toFixed(2)}</p>
        </div>
        <div className="mt-4 flex justify-between text-2xl font-bold">
          <p>Total:</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className="mt-4 flex justify-between">
          <p>Cantidad de artículos:</p>
          <p>{itemCount}</p>
        </div>
        <button
          onClick={() => mutate(payment)}
          className="mt-6 flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg bg-blue-500 py-3 font-bold text-white hover:bg-blue-400"
          disabled={itemCount === 0}
        >
          Proceder con el pago
        </button>
      </div>
    </div>
  )
}
