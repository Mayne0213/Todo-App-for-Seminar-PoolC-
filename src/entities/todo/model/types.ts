export interface Todo {
  id: string
  title: string
  description?: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  createdAt: Date
  updatedAt: Date
}

export interface CreateTodoData {
  title: string
  description?: string
  priority?: 'low' | 'medium' | 'high'
}

export interface UpdateTodoData {
  title?: string
  description?: string
  completed?: boolean
  priority?: 'low' | 'medium' | 'high'
}

export type TodoFilter = 'all' | 'active' | 'completed'

export type TodoSort = 'createdAt' | 'updatedAt' | 'priority' | 'title'

// Store types
export interface TodoState {
  todos: Todo[]
  filter: TodoFilter
  sort: TodoSort
  searchQuery: string
}

export interface TodoActions {
  addTodo: (data: CreateTodoData) => void
  updateTodo: (id: string, data: UpdateTodoData) => void
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
  setFilter: (filter: TodoFilter) => void
  setSort: (sort: TodoSort) => void
  setSearchQuery: (query: string) => void
  clearCompleted: () => void
}

export type TodoStore = TodoState & TodoActions

// Priority order for sorting
export const PRIORITY_ORDER = { high: 3, medium: 2, low: 1 } as const
