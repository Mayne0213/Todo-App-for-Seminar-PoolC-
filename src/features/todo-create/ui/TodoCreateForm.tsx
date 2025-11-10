'use client'

import { useState } from 'react'
import { useTodoStore } from '../../../entities/todo/model/store'
import { Input, Button } from '../../../shared/ui'
import { PRIORITY_LABELS, PRIORITY_COLORS } from '../../../entities/todo/model'

export default function TodoCreateForm() {
  // TODO 2-1: useState로 title 상태를 선언하세요 (초기값: 빈 문자열)
  const [title, setTitle] = useState(/* fillout */)

  // TODO 2-2: useState로 description 상태를 선언하세요 (초기값: 빈 문자열)
  const [description, setDescription] = useState(/* fillout */)

  // TODO 2-3: useState로 priority 상태를 선언하세요
  // 타입: 'low' | 'medium' | 'high', 초기값: 'medium'
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>(/* fillout */)

  const addTodo = useTodoStore((state) => state.addTodo)

  // TODO 2-4: handleSubmit 함수를 완성하세요
  const handleSubmit = (e: React.FormEvent) => {
    // TODO 2-4-1: 폼의 기본 제출 동작을 막으세요
    // Hint: Default를 Prevent 합니다.
    // fillout

    if (title.trim()) {
      addTodo({
        title: title.trim(),
        description: description.trim() || undefined,
        priority
      })

      // TODO 2-4-2: 폼을 제출한 후 모든 상태를 초기값으로 되돌리세요
      // fillout (setTitle, setDescription, setPriority 사용)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        {/* TODO 2-5: Input의 value와 onChange를 연결하여 제어 컴포넌트로 만드세요 */}
        <Input
          type="text"
          placeholder="새로운 할 일을 입력하세요"
          value={/* fillout */}
          onChange={(e) => /* fillout */}
          className="flex-1 h-10 border-gray-300 focus:border-green-500 focus:ring-green-500/20"
        />
        <Button
          type="submit"
          disabled={!title.trim()}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          추가
        </Button>
      </div>

      {/* 우선순위 선택 */}
      <div className="flex gap-2">
        <span className="text-sm text-gray-600 font-medium">우선순위:</span>
        <div className="flex gap-1">
          {(['low', 'medium', 'high'] as const).map((priorityOption) => (
            <button
              key={priorityOption}
              type="button"
              // TODO 2-6: 클릭 시 priority 상태를 priorityOption으로 업데이트하세요
              onClick={() => /* fillout */}
              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                priority === priorityOption
                  ? PRIORITY_COLORS[priorityOption] + ' border-current'
                  : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200'
              }`}
            >
              {PRIORITY_LABELS[priorityOption]}
            </button>
          ))}
        </div>
      </div>
    </form>
  )
}