import { NextResponse } from 'next/server'
import { prisma } from '@/shared/lib/prisma'
import { corsHeaders, handleCorsPreFlight } from '@/shared/lib/cors'

// OPTIONS - CORS preflight 처리
export async function OPTIONS() {
  return handleCorsPreFlight()
}

// GET - 모든 TODO 가져오기
export async function GET() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: 'desc' },
    })
    const response = NextResponse.json({ success: true, data: todos })
    Object.entries(corsHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    return response
  } catch (error) {
    console.error('Error fetching todos:', error)
    const response = NextResponse.json(
      { success: false, error: 'Failed to fetch todos' },
      { status: 500 }
    )
    Object.entries(corsHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    return response
  }
}

// POST - TODO 생성
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const todo = await prisma.todo.create({
      data: {
        title: body.title,
        description: body.description || null,
        completed: body.completed || false,
        priority: body.priority || 'medium',
      },
    })

    const response = NextResponse.json({ success: true, data: todo }, { status: 201 })
    Object.entries(corsHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    return response
  } catch (error) {
    console.error('Error creating todo:', error)
    const response = NextResponse.json(
      { success: false, error: 'Failed to create todo' },
      { status: 500 }
    )
    Object.entries(corsHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    return response
  }
}

