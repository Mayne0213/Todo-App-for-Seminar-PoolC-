'use client'

import { Todo } from '../model/types'
import { useTodoStore } from '../model/store'
import { Button, Checkbox } from '../../../shared/ui'
import { PRIORITY_LABELS, PRIORITY_COLORS } from '../model'

interface TodoItemProps {
  todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { deleteTodo, toggleTodo } = useTodoStore()

  const handleDelete = () => deleteTodo(todo.id)
  const handleToggle = () => toggleTodo(todo.id)

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center gap-3 flex-1">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={handleToggle}
          className="w-4 h-4"
        />
        <div className="flex-1 flex items-center gap-2">
          <span
            className={`${
              todo.completed
                ? 'line-through text-gray-400'
                : 'text-gray-800'
            }`}
          >
            {todo.title}
          </span>
          <span
            className={`px-2 py-1 text-xs rounded-full ${PRIORITY_COLORS[todo.priority]}`}
          >
            {PRIORITY_LABELS[todo.priority]}
          </span>
        </div>
      </div>
      <Button
        onClick={handleDelete}
        variant="outline"
        size="sm"
        className="text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
      >
        삭제
      </Button>
    </div>
  )
}
