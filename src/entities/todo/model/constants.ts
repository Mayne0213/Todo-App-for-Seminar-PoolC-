import { Todo } from './types'

export const PRIORITY_LABELS: Record<Todo['priority'], string> = {
  low: '낮음',
  medium: '보통',
  high: '높음'
}

export const PRIORITY_COLORS: Record<Todo['priority'], string> = {
  low: 'text-green-600 bg-green-50',
  medium: 'text-yellow-600 bg-yellow-50',
  high: 'text-red-600 bg-red-50'
}

export const FILTER_LABELS: Record<string, string> = {
  all: '전체',
  active: '진행중',
  completed: '완료'
}
