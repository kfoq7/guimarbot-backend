import type { APIRoute } from 'astro'
import plans from '@/data/plans.json'

export const GET: APIRoute = async () => {
  try {
    return new Response(
      JSON.stringify({
        status: 'success',
        data: plans
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Error al cargar los palnes'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}
