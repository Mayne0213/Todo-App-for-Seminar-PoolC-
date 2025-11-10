'use client'

import { Search } from 'lucide-react'
import { Input } from '../../../shared/ui'
import { useTodoStore } from '../../../entities/todo/model/store'

export default function SearchInput() {
  const { searchQuery, setSearchQuery } = useTodoStore()

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        placeholder="검색..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-10 h-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
      />
    </div>
  )
}