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
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
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
