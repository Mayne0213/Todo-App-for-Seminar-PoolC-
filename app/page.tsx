'use client'

import TodoList from '@/src/entities/todo/ui/TodoList'

// TODO: TodoCreateForm 컴포넌트 완성 후 주석 해제
// import { TodoCreateForm } from '@/src/features/todo-create'

// TODO: TodoFilter 컴포넌트 import하기
// import ~~~ from "example/Todos"

// TODO: SearchInput 컴포넌트 import하기
// import ~~~ from "example/Todos"

import { Card, CardContent, CardHeader, CardTitle } from '@/src/shared/ui'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg border border-gray-200">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="text-2xl font-bold text-gray-800">
            📝 Todo List
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Todo 생성 폼 */}

          {/* TODO: TodoCreateForm 컴포넌트 완성 후 주석 해제하기 */}
          {/* <TodoCreateForm /> */}

          {/* Todo 목록 */}
          <TodoList />
        </CardContent>
      </Card>
    </div>
  )
}
