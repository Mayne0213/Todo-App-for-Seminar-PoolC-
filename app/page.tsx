import TodoList from '@/src/entities/todo/ui/TodoList'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Todo App</h1>
        <div className="bg-red-500 rounded-lg shadow-md p-6">
          <TodoList />
        </div>
      </div>
    </div>
  );
}