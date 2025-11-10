'use client'

import { useTodoStore } from '../../../entities/todo/model/store'
import type { TodoFilter } from '../../../entities/todo/model/types'
import { Button } from '../../../shared/ui'

const filterOptions: { value: TodoFilter; label: string; icon: string }[] = [
  { value: 'all', label: 'All', icon: '📋' },
  { value: 'active', label: 'Active', icon: '⏳' },
  { value: 'completed', label: 'Completed', icon: '✅' },
]

export default function TodoFilter() {
  const { filter, setFilter } = useTodoStore()

  return (
    <div className="flex gap-2">
      {filterOptions.map((option) => (
        <Button
          key={option.value}
          onClick={() => setFilter(option.value)}
          variant={filter === option.value ? 'default' : 'outline'}
          size="sm"
          className={`px-3 py-1 text-sm ${
            filter === option.value
              ? 'bg-blue-600 text-white'
              : 'border-gray-300 text-gray-600 hover:bg-gray-50'
          }`}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}
