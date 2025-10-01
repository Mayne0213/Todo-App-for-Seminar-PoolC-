# Todo App - Pool-C 세미나

대학생을 위한 웹 개발 세미나에서 제작된 Todo 애플리케이션입니다.

## 📚 세미나 소개

이 프로젝트는 풀씨 동아리 분들과 함께 진행된 웹 개발 세미나의 실습 프로젝트입니다.
웹 개발의 핵심 개념과 최신 기술 스택을 공부하기 위해 제작되었습니다.

### 학습 목표

- Feature-Sliced Design (FSD) 아키텍처 이해
- Next.js와 React의 최신 기능 활용
- TypeScript를 통한 타입 안전성 확보
- 상태 관리 라이브러리 (Zustand) 사용법
- 모던 CSS 프레임워크 (Tailwind CSS) 활용

## ✨ 주요 기능

- ✅ Todo 항목 추가, 완료, 삭제
- 🔍 실시간 검색 기능
- 🏷️ 상태별 필터링 (전체/활성/완료)
- 💾 로컬 스토리지를 통한 데이터 영구 저장
- 📱 반응형 디자인

## 🛠️ 기술 스택

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Architecture**: [Feature-Sliced Design (FSD)](https://feature-sliced.design/)

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
├── entities/              # 비즈니스 엔티티
│   └── todo/
│       ├── model/         # 상태 관리 (Zustand)
│       └── ui/            # Todo 컴포넌트
├── features/              # 기능 모듈
│   ├── todo-create/       # Todo 생성 기능
│   ├── todo-filter/       # 필터링 기능
│   └── todo-search/       # 검색 기능
├── shared/                # 공유 리소스
│   └── ui/                # 재사용 가능한 UI 컴포넌트
└── widgets/               # 복합 컴포넌트
    └── todo-app/          # Todo 앱 위젯
```

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 🎯 Feature-Sliced Design (FSD)

이 프로젝트는 FSD 아키텍처 원칙을 따릅니다:

- **Layers**: app → widgets → features → entities → shared
- **Slices**: 비즈니스 도메인별로 구분
- **Segments**: ui, model, api 등으로 구성

### FSD의 장점

- 높은 모듈성과 재사용성
- 명확한 의존성 방향 (단방향)
- 쉬운 확장성과 유지보수
- 팀 협업에 최적화

## 📝 주요 컴포넌트

### Entities
- `todo/model/store.ts`: Zustand 기반 상태 관리
- `todo/ui/TodoItem.tsx`: 개별 Todo 아이템
- `todo/ui/TodoList.tsx`: Todo 리스트

### Features
- `todo-create`: Todo 생성 폼
- `todo-filter`: 상태 필터 (All/Active/Completed)
- `todo-search`: 검색 입력

### Widgets
- `todo-app`: 전체 Todo 앱을 통합하는 위젯

## 🎨 UI/UX

- Tailwind CSS를 사용한 모던한 디자인
- shadcn/ui 컴포넌트로 일관된 UI
- 반응형 레이아웃
- 부드러운 애니메이션 효과

## 📦 주요 의존성

```json
{
  "next": "^15.1.4",
  "react": "^19.0.0",
  "zustand": "^5.0.2",
  "tailwindcss": "^3.4.17",
  "typescript": "^5"
}
```

## 💡 세미나 참가자를 위한 팁

1. **FSD 아키텍처 구조 파악하기**: `src` 폴더의 계층 구조를 먼저 이해하세요
2. **상태 관리 흐름 추적하기**: `src/entities/todo/model/store.ts`에서 Zustand 패턴을 학습하세요
3. **컴포넌트 재사용성 고려하기**: `shared/ui` 폴더의 공통 컴포넌트들을 참고하세요
4. **TypeScript 타입 정의 활용하기**: 각 모듈의 `types.ts` 파일을 확인하세요

## 🔗 참고 링크

- [Next.js Documentation](https://nextjs.org/docs)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

---