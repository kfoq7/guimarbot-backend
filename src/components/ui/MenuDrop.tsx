interface Props {
  label: string
  items: { href: string; name: string }[]
}

export default function MenuDrop({ label, items }: Props) {
  const groupName = label.toLowerCase().replace(/\s/g, '-')

  return (
    <div
      className={`group/${groupName} relative flex w-full justify-center first:mt-5 md:block md:w-auto md:first:mt-0`}
    >
      <label
        htmlFor={groupName}
        className="flex cursor-pointer select-none p-4"
      >
        <input id={groupName} type="checkbox" className={`peer hidden`} />
        <div>{label}</div>
      </label>

      <div
        className={`absolute -left-12 top-12 z-[9999999] hidden w-64 rounded-xl bg-box shadow-lg group-has-[input:checked]/${groupName}:block`}
      >
        <ul className="py-2">
          {items.map(item => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:bg-brand-gray/10 flex w-full items-center justify-between px-4 py-2 text-sm text-white transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
