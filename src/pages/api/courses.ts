import type { APIRoute } from 'astro';
import { coursesData, type Course } from '../../types/Course';

export const GET: APIRoute = async () => {
  try {
    return new Response(
      JSON.stringify({
        status: 'success',
        data: coursesData.courses as Course[]
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Error al cargar los cursos'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};