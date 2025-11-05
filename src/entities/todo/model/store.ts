import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Todo, CreateTodoData, UpdateTodoData, TodoStore, TodoFilter, TodoSort, PRIORITY_ORDER } from './types'
import { generateId } from '../../../shared/lib/utils'

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      // State
      todos: [],
      filter: 'all',
      sort: 'createdAt',
      searchQuery: '',

      // Actions
      addTodo: (data: CreateTodoData) => {
        if (!data.title?.trim()) {
          console.warn('Todo title is required')
          return
        }
        
        const newTodo: Todo = {
          id: generateId(),
          title: data.title.trim(),
          description: data.description?.trim(),
          completed: false,
          priority: data.priority || 'medium',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
        set((state) => ({
          todos: [...state.todos, newTodo]
        }))
      },

      updateTodo: (id: string, data: UpdateTodoData) => {
        if (!id) {
          console.warn('Todo ID is required for update')
          return
        }
        
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? { 
                  ...todo, 
                  ...data, 
                  title: data.title?.trim() || todo.title,
                  description: data.description?.trim() || todo.description,
                  updatedAt: new Date() 
                }
              : todo
          )
        }))
      },

      deleteTodo: (id: string) => {
        if (!id) {
          console.warn('Todo ID is required for deletion')
          return
        }
        
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id)
        }))
      },

      toggleTodo: (id: string) => {
        if (!id) {
          console.warn('Todo ID is required for toggle')
          return
        }
        
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
              : todo
          )
        }))
      },

      setFilter: (filter: TodoFilter) => {
        set({ filter })
      },

      setSort: (sort: TodoSort) => {
        set({ sort })
      },

      setSearchQuery: (query: string) => {
        set({ searchQuery: query })
      },

      clearCompleted: () => {
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed)
        }))
      },
    }),
    {
      name: 'todo-storage',
      partialize: (state) => ({ todos: state.todos }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Date 객체 복원
          state.todos = state.todos.map(todo => ({
            ...todo,
            createdAt: new Date(todo.createdAt),
            updatedAt: new Date(todo.updatedAt),
          }))
        }
      },
    }
  )
)

// Selectors
export const useFilteredTodos = () => {
  const { todos, filter, sort, searchQuery } = useTodoStore()
  
  if (!Array.isArray(todos)) {
    return []
  }
  
  const filteredTodos = todos.filter((todo) => {
    if (!todo || typeof todo !== 'object') {
      return false
    }
    
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'active' && !todo.completed) ||
      (filter === 'completed' && todo.completed)
    
    const matchesSearch = 
      !searchQuery || 
      (todo.title && todo.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (todo.description && todo.description.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesFilter && matchesSearch
  })

  // Sort todos
  filteredTodos.sort((a, b) => {
    if (!a || !b) return 0
    
    switch (sort) {
      case 'title':
        return (a.title || '').localeCompare(b.title || '')
      case 'priority':
        return PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]
      case 'updatedAt':
        return (b.updatedAt?.getTime() || 0) - (a.updatedAt?.getTime() || 0)
      case 'createdAt':
      default:
        return (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    }
  })

  return filteredTodos
}
