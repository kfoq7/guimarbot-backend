export default function AchievementsTab() {
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
        <div className="flex items-center space-x-3">
          <svg
            className="h-6 w-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 00-10 10 10 10 0010 10 10 10 0010-10A10 10 0 0012 2zm0 18c-2.41 0-4.61-.87-6.34-2.3L6.5 15.5c1.23.88 2.72 1.5 5.5 1.5s4.27-.62 5.5-1.5l.84 2.2C16.61 19.13 14.41 20 12 20zm0-16a8 8 0 110 16 8 8 0 010-16zm-2 8H8.5v3H10v-3zm0-5H8.5v3H10V7zm4 5h1.5v3H14v-3zm0-5h1.5v3H14V7z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold">First Win</h3>
            <p className="text-sm text-gray-500">Won your first game</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">2023-05-15</p>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
        <div className="flex items-center space-x-3">
          <svg
            className="h-6 w-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 00-10 10 10 10 0010 10 10 10 0010-10A10 10 0 0012 2zm0 18c-2.41 0-4.61-.87-6.34-2.3L6.5 15.5c1.23.88 2.72 1.5 5.5 1.5s4.27-.62 5.5-1.5l.84 2.2C16.61 19.13 14.41 20 12 20zm0-16a8 8 0 110 16 8 8 0 010-16zm-2 8H8.5v3H10v-3zm0-5H8.5v3H10V7zm4 5h1.5v3H14v-3zm0-5h1.5v3H14V7z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold">Sharpshooter</h3>
            <p className="text-sm text-gray-500">Achieved 90% accuracy</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">2023-06-22</p>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
        <div className="flex items-center space-x-3">
          <svg
            className="h-6 w-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 00-10 10 10 10 0010 10 10 10 0010-10A10 10 0 0012 2zm0 18c-2.41 0-4.61-.87-6.34-2.3L6.5 15.5c1.23.88 2.72 1.5 5.5 1.5s4.27-.62 5.5-1.5l.84 2.2C16.61 19.13 14.41 20 12 20zm0-16a8 8 0 110 16 8 8 0 010-16zm-2 8H8.5v3H10v-3zm0-5H8.5v3H10V7zm4 5h1.5v3H14v-3zm0-5h1.5v3H14V7z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold">Marathon Runner</h3>
            <p className="text-sm text-gray-500">
              Played for 24 hours straight
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500">2023-07-30</p>
      </div>
    </div>
  )
}
