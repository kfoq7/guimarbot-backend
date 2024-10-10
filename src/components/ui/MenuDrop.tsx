import { useState } from 'react'

interface Props {
  label: string
}

export default function MenuDrop({ label }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button className="px-2 py-2" onClick={() => setIsOpen(!isOpen)}>
        {label}
      </button>

      {isOpen && (
        <div className="absolute w-[400px] rounded border-[1px] border-gray-300 bg-white shadow-md">
          <div className="cursor-pointer p-4 hover:bg-gray-300">
            Acc settings
          </div>
          <div className="cursor-pointer p-4 hover:bg-gray-300">
            Acc settings
          </div>
          <div className="cursor-pointer p-4 hover:bg-gray-300">
            Acc settings
          </div>
          <div className="cursor-pointer p-4 hover:bg-gray-300">
            Acc settings
          </div>
        </div>
      )}
    </div>
  )
}
