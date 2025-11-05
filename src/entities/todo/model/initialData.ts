import { Todo } from './types'
import { generateId } from '../../../shared/lib/utils'

export function getInitialTodos(): Todo[] {
  const now = new Date()
  
  return [
    {
      id: generateId(),
      title: 'Next.js 학습하기',
      description: 'Next.js 15의 새로운 기능들을 학습하고 실습해보기',
      completed: false,
      priority: 'high',
      createdAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000), // 2일 전
      updatedAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: generateId(),
      title: 'Todo 앱 완성하기',
      description: '모든 기능을 구현하고 테스트하기',
      completed: false,
      priority: 'medium',
      createdAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000), // 1일 전
      updatedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
    },
    {
      id: generateId(),
      title: '코드 리뷰 준비',
      description: '프로젝트 문서화 및 코드 정리',
      completed: true,
      priority: 'low',
      createdAt: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000), // 3일 전
      updatedAt: new Date(now.getTime() - 1 * 60 * 60 * 1000), // 1시간 전
    },
  ]
}

