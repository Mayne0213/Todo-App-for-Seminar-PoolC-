import { Todo } from './types'

// TODO: 우선순위 라벨을 정의하세요 (low, medium, high에 대한 한글 라벨)
export const PRIORITY_LABELS: Record<Todo['priority'], string> = {
  low: '낮음', // TODO: '낮음' 등으로 구현
  medium: '보통', // TODO: '보통' 등으로 구현
  high: '높음' // TODO: '높음' 등으로 구현
}

// TODO: 우선순위에 따른 색상 클래스를 정의하세요 (Tailwind CSS 클래스 사용)
export const PRIORITY_COLORS: Record<Todo['priority'], string> = {
  low: 'text-green-600 bg-green-300', // TODO: 초록 글씨와 초록배경 등으로 구현
  medium: 'text-yellow-600 bg-yellow-300', // TODO: 노란 글씨와 노란배경 등으로 구현
  high: 'text-red-600 bg-red-300' // TODO: 빨간 글씨와 빨간배경 등으로 구현
}

export const FILTER_LABELS: Record<string, string> = {
  all: '전체',
  active: '진행중',
  completed: '완료'
}
