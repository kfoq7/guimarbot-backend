// const courses = []

export const GET = () => {
  return new Response(
    JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build/'
    })
  )
}
