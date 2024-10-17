import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const style = {}
export default function LoginTabs() {
  return (
    <TabGroup className="mx-5">
      <TabList className="flex justify-between gap-x-2 rounded-lg bg-gray-200 p-1 shadow-sm">
        <Tab className="w-full rounded-lg bg-white px-4 py-2 text-center font-semibold shadow-sm outline-none hover:bg-gray-300">
          Cursos
        </Tab>
        <Tab className="w-full rounded-lg bg-white px-4 py-2 text-center font-semibold shadow-sm outline-none hover:bg-gray-300">
          Achievements
        </Tab>
        <Tab className="w-full rounded-lg bg-white px-4 py-2 text-center font-semibold shadow-sm outline-none hover:bg-gray-300">
          Stats
        </Tab>
        <Tab className="w-full rounded-lg bg-white px-4 py-2 text-center font-semibold shadow-sm outline-none hover:bg-gray-300">
          About`
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel className="my-5 rounded-lg bg-white p-5">
          <h2 className="mb-4 text-2xl font-bold">My Courses</h2>
          <div className="mb-6">
            <h3 className="font-semibold">Introduction to Machine Learning</h3>
            <div className="relative pt-1">
              <div className="flex items-center justify-between">
                <div className="text-sm">30/40 hours</div>
                <div className="text-sm">75% Complete</div>
              </div>
              <div className="flex h-2 rounded bg-gray-200">
                <div className="h-2 w-[75%] rounded bg-black"></div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold">Advanced Web Development</h3>
            <div className="relative pt-1">
              <div className="flex items-center justify-between">
                <div className="text-sm">25/50 hours</div>
                <div className="text-sm">50% Complete</div>
              </div>
              <div className="flex h-2 rounded bg-gray-200">
                <div
                  className="h-2 w-1/2 rounded bg-black"
                // style="width: 50%;"
                ></div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold">Data Structures and Algorithms</h3>
            <div className="relative pt-1">
              <div className="flex items-center justify-between">
                <div className="text-sm">54/60 hours</div>
                <div className="text-sm">90% Complete</div>
              </div>
              <div className="flex h-2 rounded bg-gray-200">
                <div
                  className="h-2 w-11/12 rounded bg-black"
                // style="width: 90%;"
                ></div>
              </div>
            </div>
          </div>
          <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
            Explore More Courses
          </button>
        </TabPanel>
        <TabPanel>
          <div className="space-y-4 p-4">
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 00-10 10 10 10 0010 10 10 10 0010-10A10 10 0 0012 2zm0 18c-2.41 0-4.61-.87-6.34-2.3L6.5 15.5c1.23.88 2.72 1.5 5.5 1.5s4.27-.62 5.5-1.5l.84 2.2C16.61 19.13 14.41 20 12 20zm0-16a8 8 0 110 16 8 8 0 010-16zm-2 8H8.5v3H10v-3zm0-5H8.5v3H10V7zm4 5h1.5v3H14v-3zm0-5h1.5v3H14V7z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold">First Win</h3>
                  <p className="text-sm text-gray-500">Won your first game</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">2023-05-15</p>
            </div>

            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 00-10 10 10 10 0010 10 10 10 0010-10A10 10 0 0012 2zm0 18c-2.41 0-4.61-.87-6.34-2.3L6.5 15.5c1.23.88 2.72 1.5 5.5 1.5s4.27-.62 5.5-1.5l.84 2.2C16.61 19.13 14.41 20 12 20zm0-16a8 8 0 110 16 8 8 0 010-16zm-2 8H8.5v3H10v-3zm0-5H8.5v3H10V7zm4 5h1.5v3H14v-3zm0-5h1.5v3H14V7z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold">Sharpshooter</h3>
                  <p className="text-sm text-gray-500">Achieved 90% accuracy</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">2023-06-22</p>
            </div>

            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 00-10 10 10 10 0010 10 10 10 0010-10A10 10 0 0012 2zm0 18c-2.41 0-4.61-.87-6.34-2.3L6.5 15.5c1.23.88 2.72 1.5 5.5 1.5s4.27-.62 5.5-1.5l.84 2.2C16.61 19.13 14.41 20 12 20zm0-16a8 8 0 110 16 8 8 0 010-16zm-2 8H8.5v3H10v-3zm0-5H8.5v3H10V7zm4 5h1.5v3H14v-3zm0-5h1.5v3H14V7z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold">Marathon Runner</h3>
                  <p className="text-sm text-gray-500">Played for 24 hours straight</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">2023-07-30</p>
            </div>
          </div>

        </TabPanel>
        <TabPanel>
          <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mt-4">Luis García</h2>
              <p className="text-gray-600">Estudiante avanzado</p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold">Cursos Completados</h3>
                <p className="text-3xl text-indigo-600 font-semibold">12</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold">Horas Estudiadas</h3>
                <p className="text-3xl text-indigo-600 font-semibold">45h</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold">Certificados</h3>
                <p className="text-3xl text-indigo-600 font-semibold">3</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Progreso Reciente</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">Curso de JavaScript Avanzado</p>
                  <span className="text-sm text-gray-500">80% completado</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">Curso de React Básico</p>
                  <span className="text-sm text-gray-500">50% completado</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </TabPanel>
        <TabPanel>
          <div className="w-full rounded-lg bg-white p-6 shadow-md">
            <div className="mb-6 flex w-full items-center justify-center">
              <button className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
                Edit
              </button>
            </div>
            <section className="-mx-4 flex flex-wrap">
              <div className="flex w-full flex-col p-4 md:w-1/2">
                <label
                  htmlFor="fullName"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value="Maza"
                  className="rounded-md border p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex w-full flex-col p-4 md:w-1/2">
                <label
                  htmlFor="nickName"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Nick Name
                </label>
                <input
                  type="text"
                  id="nickName"
                  value="Luis"
                  className="rounded-md border p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex w-full flex-col p-4 md:w-1/2">
                <label
                  htmlFor="gender"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <input
                  type="text"
                  id="gender"
                  value="Male"
                  className="rounded-md border p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex w-full flex-col p-4 md:w-1/2">
                <label
                  htmlFor="additionalField1"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Additional Field 1
                </label>
                <input
                  type="text"
                  id="additionalField1"
                  value="Some Value"
                  className="rounded-md border p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex w-full flex-col p-4 md:w-1/2">
                <label
                  htmlFor="additionalField2"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Additional Field 2
                </label>
                <input
                  type="text"
                  id="additionalField2"
                  value="Another Value"
                  className="rounded-md border p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex w-full flex-col p-4 md:w-1/2">
                <label
                  htmlFor="additionalField3"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Additional Field 3
                </label>
                <input
                  type="text"
                  id="additionalField3"
                  value="Value"
                  className="rounded-md border p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </section>
            <div className="mt-6">
              <h2 className="mb-2 text-lg font-semibold text-gray-700">
                Email
              </h2>
              <input
                type="text"
                value="maza05599@gmail.com"
                className="w-full rounded-md border p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
