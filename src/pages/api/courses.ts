import type { APIRoute } from 'astro';

const courses = [
  {
    id: 1,
    title: "JavaScript Moderno: De cero a experto",
    description: "Aprende JavaScript desde los fundamentos hasta temas avanzados",
    instructor: "María González",
    price: 59.99,
    thumbnail: "https://example.com/js-course.jpg",
    duration: "32h 15min",
    level: "Todos los niveles"
  },
  {
    id: 2,
    title: "React.js: Construye aplicaciones web modernas",
    description: "Domina React.js creando proyectos reales",
    instructor: "Carlos Martínez",
    price: 49.99,
    thumbnail: "https://example.com/react-course.jpg",
    duration: "28h 45min",
    level: "Intermedio"
  },
  {
    id: 3,
    title: "Python para Data Science",
    description: "Aprende Python y las principales librerías para análisis de datos",
    instructor: "Ana Rodríguez",
    price: 69.99,
    thumbnail: "https://example.com/python-ds-course.jpg",
    duration: "40h 30min",
    level: "Avanzado"
  }
];

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      status: 'success',
      data: courses
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}