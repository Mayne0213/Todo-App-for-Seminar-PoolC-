// API 설정 - Next.js API Routes 사용
export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
  timeout: 10000,
}

export const API_ENDPOINTS = {
  todos: '/api/todos',
  health: '/api/health',
} as const
