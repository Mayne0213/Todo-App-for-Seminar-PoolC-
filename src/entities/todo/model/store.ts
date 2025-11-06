import { create } from 'zustand'
import { CreateTodoData, UpdateTodoData, TodoStore, TodoFilter, TodoSort, PRIORITY_ORDER } from './types'
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/client'

export const useTodoStore = create<TodoStore>()((set, get) => ({
  // State
  todos: [],
  filter: 'all',
  sort: 'createdAt',
  searchQuery: '',
  isLoading: false,
  error: null,

  // Actions
  addTodo: async (data: CreateTodoData) => {
    if (!data.title?.trim()) {
      console.warn('Todo title is required')
      return
    }

    try {
      const newTodo = await createTodo(data)
      set((state) => ({
        todos: [...state.todos, newTodo]
      }))
    } catch (error) {
      console.error('Failed to create todo:', error)
      set({ error: 'Failed to create todo' })
    }
  },

  updateTodo: async (id: string, data: UpdateTodoData) => {
    if (!id) {
      console.warn('Todo ID is required for update')
      return
    }

    try {
      const updatedTodo = await updateTodo(id, data)
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? updatedTodo : todo
        )
      }))
    } catch (error) {
      console.error('Failed to update todo:', error)
      set({ error: 'Failed to update todo' })
    }
  },

  deleteTodo: async (id: string) => {
    if (!id) {
      console.warn('Todo ID is required for deletion')
      return
    }

    try {
      await deleteTodo(id)
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
      }))
    } catch (error) {
      console.error('Failed to delete todo:', error)
      set({ error: 'Failed to delete todo' })
    }
  },

  toggleTodo: async (id: string) => {
    if (!id) {
      console.warn('Todo ID is required for toggle')
      return
    }

    const todo = get().todos.find((t) => t.id === id)
    if (!todo) return

    try {
      await get().updateTodo(id, { completed: !todo.completed })
    } catch (error) {
      console.error('Failed to toggle todo:', error)
    }
  },

  loadTodos: async () => {
    set({ isLoading: true, error: null })
    try {
      const todos = await fetchTodos()
      set({ todos, isLoading: false })
    } catch (error) {
      console.error('Failed to load todos:', error)
      set({ error: 'Failed to load todos', isLoading: false })
    }
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

  clearCompleted: async () => {
    const completedTodos = get().todos.filter((todo) => todo.completed)
    
    try {
      await Promise.all(completedTodos.map((todo) => deleteTodo(todo.id)))
      set((state) => ({
        todos: state.todos.filter((todo) => !todo.completed)
      }))
    } catch (error) {
      console.error('Failed to clear completed todos:', error)
      set({ error: 'Failed to clear completed todos' })
    }
  },
}))

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
