import { API_ENDPOINTS } from '../../../shared/api/config'
import type { Todo, CreateTodoData, UpdateTodoData } from '../model/types'

// API 응답 타입
interface ApiTodo {
  id: number
  title: string
  description?: string | null
  completed: boolean
  priority: string
  createdAt: string
  updatedAt: string
}

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

// 백엔드 Todo를 프론트엔드 Todo로 변환
const mapApiTodoToTodo = (apiTodo: ApiTodo): Todo => {
  return {
    id: String(apiTodo.id),
    title: apiTodo.title,
    description: apiTodo.description || undefined,
    completed: apiTodo.completed,
    priority: (apiTodo.priority || 'medium') as 'low' | 'medium' | 'high',
    createdAt: new Date(apiTodo.createdAt),
    updatedAt: new Date(apiTodo.updatedAt),
  }
}

// 프론트엔드 Todo를 백엔드 형식으로 변환
const mapTodoToApiTodo = (todo: CreateTodoData | UpdateTodoData): Partial<ApiTodo> => {
  const apiTodo: Partial<ApiTodo> = {
    title: todo.title,
    description: todo.description || null,
  }
  
  if ('completed' in todo) {
    apiTodo.completed = todo.completed
  }
  
  if ('priority' in todo && todo.priority) {
    apiTodo.priority = todo.priority
  }
  
  return apiTodo
}

/**
 * 모든 TODO 가져오기
 */
export const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const response = await fetch(API_ENDPOINTS.todos, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: ApiResponse<ApiTodo[]> = await response.json()
    
    if (!result.success || !result.data) {
      throw new Error(result.error || 'Failed to fetch todos')
    }

    return result.data.map(mapApiTodoToTodo)
  } catch (error) {
    console.error('Error fetching todos:', error)
    throw error
  }
}

/**
 * TODO 생성
 */
export const createTodo = async (data: CreateTodoData): Promise<Todo> => {
  try {
    const response = await fetch(API_ENDPOINTS.todos, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mapTodoToApiTodo(data)),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: ApiResponse<ApiTodo> = await response.json()
    
    if (!result.success || !result.data) {
      throw new Error(result.error || 'Failed to create todo')
    }

    return mapApiTodoToTodo(result.data)
  } catch (error) {
    console.error('Error creating todo:', error)
    throw error
  }
}

/**
 * TODO 업데이트
 */
export const updateTodo = async (id: string, data: UpdateTodoData): Promise<Todo> => {
  try {
    const response = await fetch(`${API_ENDPOINTS.todos}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mapTodoToApiTodo(data)),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: ApiResponse<ApiTodo> = await response.json()
    
    if (!result.success || !result.data) {
      throw new Error(result.error || 'Failed to update todo')
    }

    return mapApiTodoToTodo(result.data)
  } catch (error) {
    console.error('Error updating todo:', error)
    throw error
  }
}

/**
 * TODO 삭제
 */
export const deleteTodo = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${API_ENDPOINTS.todos}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: ApiResponse<null> = await response.json()
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to delete todo')
    }
  } catch (error) {
    console.error('Error deleting todo:', error)
    throw error
  }
}
