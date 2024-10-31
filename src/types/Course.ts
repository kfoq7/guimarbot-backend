export interface Course {
  id: number
  title: string
  description: string
  price: number
  teacherName: string
  videoPreviewUrl: string
  durationHours: number
  averageRating: number
}

export const coursesData = {
  courses: [
    {
      id: 1,
      title: 'JavaScript Moderno: De cero a experto',
      description:
        'Aprende JavaScript desde los fundamentos hasta temas avanzados',
      instructor: 'María González',
      price: 59.99,
      thumbnail: 'https://example.com/js-course.jpg',
      duration: '32h 15min',
      level: 'Todos los niveles'
    },
    {
      id: 2,
      title: 'React.js: Construye aplicaciones web modernas',
      description: 'Domina React.js creando proyectos reales',
      instructor: 'Carlos Martínez',
      price: 49.99,
      thumbnail: 'https://example.com/react-course.jpg',
      duration: '28h 45min',
      level: 'Intermedio'
    },
    {
      id: 3,
      title: 'Python para Ciencia de Datos',
      description:
        'Aprende a utilizar Python para análisis de datos y machine learning',
      instructor: 'Ana Rodríguez',
      price: 69.99,
      thumbnail: 'https://example.com/python-data-science.jpg',
      duration: '40h 30min',
      level: 'Avanzado'
    },
    {
      id: 4,
      title: 'Desarrollo Web Full Stack',
      description:
        'Conviértete en un desarrollador web completo con HTML, CSS, JavaScript y Node.js',
      instructor: 'David López',
      price: 79.99,
      thumbnail: 'https://example.com/fullstack-web.jpg',
      duration: '50h 20min',
      level: 'Todos los niveles'
    },
    {
      id: 5,
      title: 'Diseño UX/UI: Principios y Mejores Prácticas',
      description:
        'Aprende a crear interfaces de usuario atractivas y funcionales',
      instructor: 'Laura Sánchez',
      price: 54.99,
      thumbnail: 'https://example.com/ux-ui-design.jpg',
      duration: '25h 40min',
      level: 'Principiante'
    },
    {
      id: 6,
      title: 'Machine Learning con TensorFlow',
      description:
        'Implementa modelos de machine learning utilizando TensorFlow',
      instructor: 'Roberto Fernández',
      price: 74.99,
      thumbnail: 'https://example.com/tensorflow-ml.jpg',
      duration: '35h 15min',
      level: 'Avanzado'
    },
    {
      id: 7,
      title: 'Desarrollo de Aplicaciones Móviles con Flutter',
      description: 'Crea aplicaciones nativas para iOS y Android con Flutter',
      instructor: 'Elena Castro',
      price: 64.99,
      thumbnail: 'https://example.com/flutter-mobile.jpg',
      duration: '30h 50min',
      level: 'Intermedio'
    },
    {
      id: 8,
      title: 'DevOps: Automatización y Despliegue Continuo',
      description:
        'Aprende las mejores prácticas de DevOps para optimizar el desarrollo y despliegue',
      instructor: 'Javier Ruiz',
      price: 69.99,
      thumbnail: 'https://example.com/devops-course.jpg',
      duration: '38h 20min',
      level: 'Avanzado'
    },
    {
      id: 9,
      title: 'Diseño Gráfico para Principiantes',
      description: 'Domina las herramientas esenciales del diseño gráfico',
      instructor: 'Carmen Vega',
      price: 44.99,
      thumbnail: 'https://example.com/graphic-design-basics.jpg',
      duration: '22h 30min',
      level: 'Principiante'
    },
    {
      id: 10,
      title: 'Ciberseguridad: Protección de Sistemas y Redes',
      description:
        'Aprende a proteger sistemas informáticos contra amenazas cibernéticas',
      instructor: 'Miguel Ángel Torres',
      price: 79.99,
      thumbnail: 'https://example.com/cybersecurity-course.jpg',
      duration: '45h 10min',
      level: 'Intermedio'
    },
    {
      id: 11,
      title: 'Marketing Digital: Estrategias Efectivas',
      description:
        'Desarrolla estrategias de marketing digital para impulsar tu negocio',
      instructor: 'Sofía Navarro',
      price: 59.99,
      thumbnail: 'https://example.com/digital-marketing.jpg',
      duration: '28h 45min',
      level: 'Todos los niveles'
    },
    {
      id: 12,
      title: 'Programación en C++: De Básico a Avanzado',
      description: 'Domina C++ desde los fundamentos hasta temas avanzados',
      instructor: 'Alberto Gómez',
      price: 69.99,
      thumbnail: 'https://example.com/cpp-programming.jpg',
      duration: '40h 30min',
      level: 'Todos los niveles'
    },
    {
      id: 13,
      title: 'Blockchain y Criptomonedas',
      description:
        'Entiende la tecnología blockchain y su aplicación en criptomonedas',
      instructor: 'Isabel Moreno',
      price: 74.99,
      thumbnail: 'https://example.com/blockchain-crypto.jpg',
      duration: '32h 15min',
      level: 'Intermedio'
    },
    {
      id: 14,
      title: 'Fotografía Digital para Principiantes',
      description:
        'Aprende los fundamentos de la fotografía digital y mejora tus habilidades',
      instructor: 'Ricardo Blanco',
      price: 49.99,
      thumbnail: 'https://example.com/digital-photography.jpg',
      duration: '20h 50min',
      level: 'Principiante'
    },
    {
      id: 15,
      title: 'Gestión de Proyectos con metodologías Ágiles',
      description:
        'Implementa metodologías ágiles para una gestión de proyectos eficiente',
      instructor: 'Patricia Herrera',
      price: 64.99,
      thumbnail: 'https://example.com/agile-project-management.jpg',
      duration: '25h 30min',
      level: 'Intermedio'
    },
    {
      id: 16,
      title: 'Inteligencia Artificial: Fundamentos y Aplicaciones',
      description:
        'Explora los conceptos básicos de la IA y sus aplicaciones prácticas',
      instructor: 'Fernando Ortiz',
      price: 79.99,
      thumbnail: 'https://example.com/ai-fundamentals.jpg',
      duration: '35h 45min',
      level: 'Intermedio'
    },
    {
      id: 17,
      title: 'Desarrollo de Videojuegos con Unity',
      description: 'Crea tus propios videojuegos utilizando el motor Unity',
      instructor: 'Lucía Jiménez',
      price: 69.99,
      thumbnail: 'https://example.com/unity-game-dev.jpg',
      duration: '42h 20min',
      level: 'Todos los niveles'
    },
    {
      id: 18,
      title: 'SEO: Optimización para Motores de Búsqueda',
      description:
        'Aprende técnicas efectivas de SEO para mejorar el ranking de tu sitio web',
      instructor: 'Andrés Vargas',
      price: 54.99,
      thumbnail: 'https://example.com/seo-optimization.jpg',
      duration: '23h 40min',
      level: 'Principiante'
    },
    {
      id: 19,
      title: 'Análisis de Datos con R',
      description:
        'Utiliza R para realizar análisis estadísticos y visualización de datos',
      instructor: 'Marta Salgado',
      price: 64.99,
      thumbnail: 'https://example.com/r-data-analysis.jpg',
      duration: '30h 15min',
      level: 'Intermedio'
    },
    {
      id: 20,
      title: 'Diseño de Interfaces de Usuario (UI)',
      description:
        'Crea interfaces atractivas y funcionales para aplicaciones y sitios web',
      instructor: 'Diego Mendoza',
      price: 59.99,
      thumbnail: 'https://example.com/ui-design.jpg',
      duration: '26h 50min',
      level: 'Todos los niveles'
    },
    {
      id: 21,
      title: 'Node.js: Desarrollo de Aplicaciones Backend',
      description:
        'Aprende a crear aplicaciones del lado del servidor con Node.js',
      instructor: 'Natalia Romero',
      price: 69.99,
      thumbnail: 'https://example.com/nodejs-backend.jpg',
      duration: '34h 30min',
      level: 'Intermedio'
    },
    {
      id: 22,
      title: 'Inglés para Negocios',
      description:
        'Mejora tu inglés para situaciones profesionales y de negocios',
      instructor: 'William Smith',
      price: 49.99,
      thumbnail: 'https://example.com/business-english.jpg',
      duration: '25h 45min',
      level: 'Intermedio'
    },
    {
      id: 23,
      title: 'Introducción a la Robótica',
      description:
        'Descubre los fundamentos de la robótica y la automatización',
      instructor: 'Jorge Ramos',
      price: 74.99,
      thumbnail: 'https://example.com/robotics-intro.jpg',
      duration: '28h 20min',
      level: 'Principiante'
    },
    {
      id: 24,
      title: 'Excel Avanzado para Análisis de Datos',
      description:
        'Domina las funciones avanzadas de Excel para análisis de datos',
      instructor: 'Cristina Velasco',
      price: 54.99,
      thumbnail: 'https://example.com/advanced-excel.jpg',
      duration: '22h 30min',
      level: 'Avanzado'
    },
    {
      id: 25,
      title: 'Desarrollo de Aplicaciones iOS con Swift',
      description: 'Crea aplicaciones nativas para iOS utilizando Swift',
      instructor: 'Rubén Castro',
      price: 79.99,
      thumbnail: 'https://example.com/ios-swift-dev.jpg',
      duration: '38h 15min',
      level: 'Intermedio'
    },
    {
      id: 26,
      title: 'Gestión de Bases de Datos con SQL',
      description:
        'Aprende a diseñar, implementar y administrar bases de datos relacionales',
      instructor: 'Elena Martín',
      price: 64.99,
      thumbnail: 'https://example.com/sql-database.jpg',
      duration: '30h 45min',
      level: 'Todos los niveles'
    },
    {
      id: 27,
      title: 'Diseño de Logotipos y Branding',
      description:
        'Crea logotipos efectivos y desarrolla la identidad visual de una marca',
      instructor: 'Gabriel Torres',
      price: 59.99,
      thumbnail: 'https://example.com/logo-branding.jpg',
      duration: '24h 50min',
      level: 'Intermedio'
    },
    {
      id: 28,
      title: 'Programación en Java: Fundamentos y POO',
      description:
        'Domina los fundamentos de Java y la programación orientada a objetos',
      instructor: 'Carolina Pérez',
      price: 69.99,
      thumbnail: 'https://example.com/java-oop.jpg',
      duration: '36h 20min',
      level: 'Principiante'
    },
    {
      id: 29,
      title: 'Marketing en Redes Sociales',
      description:
        'Desarrolla estrategias efectivas de marketing en plataformas sociales',
      instructor: 'Luis Morales',
      price: 54.99,
      thumbnail: 'https://example.com/social-media-marketing.jpg',
      duration: '26h 30min',
      level: 'Todos los niveles'
    },
    {
      id: 30,
      title: 'Desarrollo de Aplicaciones con Angular',
      description:
        'Crea aplicaciones web dinámicas utilizando el framework Angular',
      instructor: 'Alicia Gómez',
      price: 69.99,
      thumbnail: 'https://example.com/angular-dev.jpg',
      duration: '32h 45min',
      level: 'Intermedio'
    },
    {
      id: 31,
      title: 'Introducción a la Inteligencia de Negocios (BI)',
      description:
        'Aprende los conceptos fundamentales de la inteligencia de negocios',
      instructor: 'Raúl Sánchez',
      price: 74.99,
      thumbnail: 'https://example.com/business-intelligence.jpg',
      duration: '28h 15min',
      level: 'Principiante'
    },
    {
      id: 32,
      title: 'Desarrollo de Chatbots con DialogFlow',
      description:
        'Crea chatbots inteligentes utilizando la plataforma DialogFlow',
      instructor: 'Marina López',
      price: 59.99,
      thumbnail: 'https://example.com/chatbot-dialogflow.jpg',
      duration: '23h 50min',
      level: 'Intermedio'
    },
    {
      id: 33,
      title: 'Animación 3D con Blender',
      description:
        'Aprende a crear animaciones 3D utilizando el software libre Blender',
      instructor: 'Óscar Fernández',
      price: 69.99,
      thumbnail: 'https://example.com/blender-3d.jpg',
      duration: '40h 30min',
      level: 'Todos los niveles'
    },
    {
      id: 34,
      title: 'Gestión de Proyectos con Microsoft Project',
      description:
        'Domina Microsoft Project para una gestión eficiente de proyectos',
      instructor: 'Silvia Ortega',
      price: 64.99,
      thumbnail: 'https://example.com/ms-project.jpg',
      duration: '26h 45min',
      level: 'Intermedio'
    },
    {
      id: 35,
      title: 'Programación en Python para Principiantes',
      description: 'Iníciate en la programación con Python desde cero',
      instructor: 'Adrián Vega',
      price: 49.99,
      thumbnail: 'https://example.com/python-beginners.jpg',
      duration: '28h 20min',
      level: 'Principiante'
    },
    {
      id: 36,
      title: 'Diseño de Experiencia de Usuario (UX)',
      description:
        'Aprende a crear experiencias de usuario efectivas y satisfactorias',
      instructor: 'Beatriz Romero',
      price: 69.99,
      thumbnail: 'https://example.com/ux-design.jpg',
      duration: '30h 15min',
      level: 'Intermedio'
    },
    {
      id: 37,
      title: 'Big Data: Fundamentos y Tecnologías',
      description:
        'Explora los conceptos y tecnologías fundamentales del Big Data',
      instructor: 'Hugo Martínez',
      price: 79.99,
      thumbnail: 'https://example.com/big-data.jpg',
      duration: '36h 30min',
      level: 'Avanzado'
    },
    {
      id: 38,
      title: 'Desarrollo de Aplicaciones Android con Kotlin',
      description: 'Crea aplicaciones nativas para Android utilizando Kotlin',
      instructor: 'Nuria Sanz',
      price: 74.99,
      thumbnail: 'https://example.com/android-kotlin.jpg',
      duration: '34h 45min',
      level: 'Intermedio'
    },
    {
      id: 39,
      title: 'Contabilidad para No Contadores',
      description:
        'Aprende los fundamentos de la contabilidad de manera sencilla',
      instructor: 'Roberto Iglesias',
      price: 54.99,
      thumbnail: 'https://example.com/accounting-basics.jpg',
      duration: '22h 30min',
      level: 'Principiante'
    },
    {
      id: 40,
      title: 'Creación de Contenido para Redes Sociales',
      description:
        'Aprende a crear contenido atractivo y efectivo para redes sociales',
      instructor: 'Lucía Morales',
      price: 49.99,
      thumbnail: 'https://example.com/social-media-content.jpg',
      duration: '20h 45min',
      level: 'Todos los niveles'
    },
    {
      id: 41,
      title: 'Desarrollo Web con PHP y MySQL',
      description: 'Crea aplicaciones web dinámicas utilizando PHP y MySQL',
      instructor: 'Marcos Ruiz',
      price: 69.99,
      thumbnail: 'https://example.com/php-mysql.jpg',
      duration: '38h 20min',
      level: 'Intermedio'
    },
    {
      id: 42,
      title: 'Introducción a la Realidad Virtual',
      description:
        'Descubre los fundamentos y aplicaciones de la realidad virtual',
      instructor: 'Paula Herrera',
      price: 64.99,
      thumbnail: 'https://example.com/virtual-reality.jpg',
      duration: '26h 15min',
      level: 'Principiante'
    },
    {
      id: 43,
      title: 'Análisis Financiero para la Toma de Decisiones',
      description:
        'Aprende a interpretar estados financieros y tomar decisiones informadas',
      instructor: 'Javier Molina',
      price: 74.99,
      thumbnail: 'https://example.com/financial-analysis.jpg',
      duration: '30h 45min',
      level: 'Intermedio'
    },
    {
      id: 44,
      title: 'Desarrollo de APIs RESTful',
      description: 'Diseña e implementa APIs RESTful escalables y seguras',
      instructor: 'Cristina Vargas',
      price: 69.99,
      thumbnail: 'https://example.com/restful-api.jpg',
      duration: '28h 30min',
      level: 'Avanzado'
    },
    {
      id: 45,
      title: 'Copywriting: Escritura Persuasiva para Marketing',
      description:
        'Aprende a escribir textos persuasivos para marketing y publicidad',
      instructor: 'Daniel Soto',
      price: 54.99,
      thumbnail: 'https://example.com/copywriting.jpg',
      duration: '22h 45min',
      level: 'Todos los niveles'
    },
    {
      id: 46,
      title: 'Introducción a la Ciencia de Datos',
      description:
        'Descubre los fundamentos de la ciencia de datos y sus aplicaciones',
      instructor: 'Laura Márquez',
      price: 79.99,
      thumbnail: 'https://example.com/data-science-intro.jpg',
      duration: '34h 20min',
      level: 'Principiante'
    },
    {
      id: 47,
      title: 'Desarrollo de Juegos 2D con Unity',
      description: 'Crea juegos 2D completos utilizando el motor Unity',
      instructor: 'Sergio Ramos',
      price: 64.99,
      thumbnail: 'https://example.com/2d-game-unity.jpg',
      duration: '36h 15min',
      level: 'Intermedio'
    },
    {
      id: 48,
      title: 'Gestión del Tiempo y Productividad',
      description:
        'Mejora tu productividad y aprende a gestionar tu tiempo eficientemente',
      instructor: 'Ana Belén Sánchez',
      price: 49.99,
      thumbnail: 'https://example.com/time-management.jpg',
      duration: '18h 30min',
      level: 'Todos los niveles'
    },
    {
      id: 49,
      title: 'Introducción a la Computación Cuántica',
      description: 'Explora los conceptos básicos de la computación cuántica',
      instructor: 'Rafael Moreno',
      price: 84.99,
      thumbnail: 'https://example.com/quantum-computing.jpg',
      duration: '26h 45min',
      level: 'Avanzado'
    },
    {
      id: 50,
      title: 'Diseño de Moda Digital',
      description:
        'Aprende a crear diseños de moda utilizando herramientas digitales',
      instructor: 'Carla Jiménez',
      price: 59.99,
      thumbnail: 'https://example.com/digital-fashion-design.jpg',
      duration: '24h 50min',
      level: 'Intermedio'
    }
  ]
}
