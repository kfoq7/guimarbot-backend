import AsyncSelect from 'react-select/async'
import { $courseFilters } from '@/stores/courseFiltersStore'
import type { Category, Tag } from '@/types/Course'

export default function CourseFilter() {
  return (
    <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <AsyncSelect
        cacheOptions
        defaultOptions
        instanceId="categoryName"
        isClearable
        onChange={selectedOption => {
          $courseFilters.setKey('categoryName', `${selectedOption?.value}`)
        }}
        loadOptions={async () => {
          const response = await fetch(
            `${import.meta.env.PUBLIC_API_URL}/course/categories`
          )
          const categories = (await response.json()) as Category[]
          return categories.map(({ id, name }) => ({
            label: name,
            value: id
          }))
        }}
      />
      <AsyncSelect
        cacheOptions
        defaultOptions
        instanceId="tagNames"
        isMulti
        isSearchable={false}
        onChange={selectedOptions => {
          $courseFilters.setKey(
            'tagNames',
            selectedOptions.map(option => option.value).join(',')
          )
        }}
        loadOptions={async () => {
          const response = await fetch(
            `${import.meta.env.PUBLIC_API_URL}/course/tags`
          )
          const categories = (await response.json()) as Tag[]
          return categories.map(({ id, name }) => ({
            label: name,
            value: id
          }))
        }}
      />
      <input
        id="minPriceFilter"
        type="number"
        placeholder="Min Price"
        className="rounded border p-2"
        onChange={e => {
          $courseFilters.setKey('minPrice', Number(e.target.value))
        }}
      />
      <input
        id="maxPriceFilter"
        type="number"
        placeholder="Max Price"
        className="rounded border p-2"
        onChange={e => {
          $courseFilters.setKey('maxPrice', Number(e.target.value))
        }}
      />
    </div>
  )
}
