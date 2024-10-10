import type { APIRoute } from 'astro';
import { coursesData, type Course } from '../../types/Course';

export const GET: APIRoute = async ({ params }) => {
    try {
        const { coursetitle } = params;

        const normalizedTitle = coursetitle.replace(/-/g, ' ').toLowerCase();

        const course = coursesData.courses.find((c) => c.title.toLowerCase() === normalizedTitle);

        if (!course) {
            return new Response(
                JSON.stringify({
                    status: 'error',
                    message: `Course with title "${coursetitle}" not found`
                }),
                {
                    status: 404,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        }

        return new Response(
            JSON.stringify({
                status: 'success',
                data: course as Course
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
                message: 'Error loading the course'
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
