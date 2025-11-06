import { NextResponse } from 'next/server'
import { prisma } from '@/shared/lib/prisma'
import { corsHeaders, handleCorsPreFlight } from '@/shared/lib/cors'
import type { Prisma } from '@prisma/client'

// OPTIONS - CORS preflight 처리
export async function OPTIONS() {
  return handleCorsPreFlight()
}

// PUT - TODO 업데이트
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idParam } = await params
    const id = parseInt(idParam)
    const body = await request.json()

    const updateData: Prisma.TodoUpdateInput = {}
    if (body.title !== undefined) updateData.title = body.title
    if (body.description !== undefined) updateData.description = body.description
    if (body.completed !== undefined) updateData.completed = body.completed
    if (body.priority !== undefined) updateData.priority = body.priority

    const todo = await prisma.todo.update({
      where: { id },
      data: updateData,
    })

    const response = NextResponse.json({ success: true, data: todo })
    Object.entries(corsHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    return response
  } catch (error) {
    console.error('Error updating todo:', error)
    const response = NextResponse.json(
      { success: false, error: 'Failed to update todo' },
      { status: 500 }
    )
    Object.entries(corsHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    return response
  }
}

// DELETE - TODO 삭제
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idParam } = await params
    const id = parseInt(idParam)
    await prisma.todo.delete({
      where: { id },
    })

    const response = NextResponse.json({ success: true, message: 'Todo deleted' })
    Object.entries(corsHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    return response
  } catch (error) {
    console.error('Error deleting todo:', error)
    const response = NextResponse.json(
      { success: false, error: 'Failed to delete todo' },
      { status: 500 }
    )
    Object.entries(corsHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    return response
  }
}

