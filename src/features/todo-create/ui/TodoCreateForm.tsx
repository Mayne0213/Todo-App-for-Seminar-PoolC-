'use client'

import { useState } from 'react'
import { useTodoStore } from '../../../entities/todo/model'
import { Input, Button } from '../../../shared/ui'
import { PRIORITY_LABELS, PRIORITY_COLORS } from '../../../entities/todo/model'

export default function TodoCreateForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')
  const addTodo = useTodoStore((state) => state.addTodo)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      addTodo({ 
        title: title.trim(),
        description: description.trim() || undefined,
        priority
      })
      setTitle('')
      setDescription('')
      setPriority('medium')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="새로운 할 일을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
              onClick={() => setPriority(priorityOption)}
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
