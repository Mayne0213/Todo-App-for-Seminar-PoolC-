import { NextResponse } from 'next/server'

/**
 * CORS 헤더를 추가하는 유틸리티 함수
 * jotion (localhost:3001)에서 API 호출을 허용합니다
 */
export function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_ALLOWED_ORIGIN || 'http://localhost:3001',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  }
}

/**
 * CORS preflight 요청 처리
 */
export function handleCorsPreFlight() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(),
  })
}

/**
 * NextResponse에 CORS 헤더 추가
 */
export function withCors(response: NextResponse) {
  Object.entries(corsHeaders()).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  return response
}

