'use client'

import { useEffect } from 'react'
import { Card, CardContent } from '../../../shared/ui'
import { TodoCreateForm } from '../../../features/todo-create'
import { TodoList } from '../../../entities/todo'
import { TodoFilter } from '../../../features/todo-filter'
import { SearchInput } from '../../../features/todo-search'
import { useTodoStore } from '../../../entities/todo/model/store'

export function TodoApp() {
  const loadTodos = useTodoStore((state) => state.loadTodos)

  useEffect(() => {
    loadTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg border border-gray-200">
        <CardContent className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Todo App</h1>
          </div>

          {/* Add Task Form */}
          <div className="mb-8">
            <TodoCreateForm />
          </div>

          {/* Search and Filter */}
          <div className="mb-6 space-y-4">
            <SearchInput />
            <TodoFilter />
          </div>

          {/* Task List */}
          <div className="mb-6">
            <TodoList />
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
