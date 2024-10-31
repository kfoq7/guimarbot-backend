export default function ProgressTab() {
  return (
    <>
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
    </>
  )
}
