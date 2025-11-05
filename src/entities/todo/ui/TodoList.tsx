'use client'

import { useFilteredTodos } from '../model/store'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useFilteredTodos()

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>할 일이 없습니다. 위에서 새로 추가해보세요.</p>
      </div>
    )
  }

  return (
    <div className="space-y-0">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
