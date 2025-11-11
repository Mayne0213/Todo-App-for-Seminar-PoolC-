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
    // TODO : flex 레이아웃을 사용하여 가로로 배치하고, 아이템들을 양 끝에 정렬하세요. 세로 패딩 3단위(12px), 아래쪽 테두리를 추가하세요.
    <div className="flex justify-between py-3 border-b last:border-b-0">
      {/* TODO: flex 레이아웃을 사용하여 가로로 배치하고, 아이템들을 세로 중앙 정렬하세요. gap 3단위(12px), flex-1을 추가하세요. */}
      <div className="flex-1 flex items-center gap-3">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={handleToggle}
          className="w-4 h-4"
        />
        {/* TODO: flex-1과 flex 레이아웃을 사용하여 가로로 배치하고, 아이템들을 세로 중앙 정렬하세요. gap 2단위(8px)를 추가하세요. */}
        <div className="flex-1 flex items-center gap-2">
          {/* TODO: todo.completed가 true일 때는 회색 텍스트(text-gray-400)를, false일 때는 어두운 회색 텍스트(text-gray-800)를 적용하세요. (line-through는 이미 적용되어 있습니다) */}
          <span
            className={`${todo.completed ? 'text-gray-400' : 'text-gray-800'}`}
          >
            {todo.title}
          </span>
          {/* TODO: 좌우 패딩 2단위(8px), 세로 패딩 1단위(4px), 매우 작은 텍스트(text-xs), 둥근 모서리(rounded-full)를 추가하세요. (PRIORITY_COLORS는 이미 적용되어 있습니다) */}
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
