export default function AboutTab() {
  return (
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
        <h2 className="mb-2 text-lg font-semibold text-gray-700">Email</h2>
        <input
          type="text"
          value="maza05599@gmail.com"
          className="w-full rounded-md border p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  )
}
