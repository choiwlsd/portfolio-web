# Dev Portfolio Website - Project Guide

## 프로젝트 개요

**Modern Playful Minimalism** 스타일의 개발자 포트폴리오 웹사이트입니다.
Vite, React, TypeScript, Tailwind CSS 스택으로 구축되었으며, 유지보수가 용이하도록 설계되었습니다.

## 프로젝트 구조

```
client/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── Navbar.tsx      # 상단 네비게이션 바
│   │   ├── Footer.tsx      # 하단 푸터
│   │   ├── Hero.tsx        # 히어로 섹션
│   │   ├── About.tsx       # 소개 섹션
│   │   ├── Projects.tsx    # 프로젝트 섹션
│   │   ├── Contact.tsx     # 연락처 섹션
│   │   ├── Button.tsx      # 버튼 컴포넌트
│   │   └── SocialLinks.tsx # 소셜 미디어 링크
│   ├── pages/
│   │   ├── Home.tsx        # 메인 페이지
│   │   └── NotFound.tsx    # 404 페이지
│   ├── App.tsx             # 라우팅 및 레이아웃
│   ├── index.css           # 전역 스타일 및 Tailwind 설정
│   └── main.tsx            # React 진입점
├── public/                 # 정적 파일 (favicon, robots.txt 등)
└── index.html             # HTML 템플릿

shared/
├── types.ts               # TypeScript 타입 정의
└── const.ts              # 상수 및 정적 데이터

server/
└── index.ts              # Express 서버 (프로덕션용)
```

## 주요 컴포넌트 설명

### Navbar (`components/Navbar.tsx`)
- 고정 위치 상단 네비게이션
- 데스크톱: 풀 메뉴 + 소셜 링크
- 모바일: 햄버거 메뉴
- 부드러운 스크롤 동작

### Hero (`components/Hero.tsx`)
- 큰 헤드라인 "I build digital experiences"
- 데코레이션 요소 (밑줄, 별, 박스)
- CTA 버튼 (View My Work, Get in Touch)
- 반응형 레이아웃

### About (`components/About.tsx`)
- 경험 및 자격 카드
- 스킬 프로그레스 바
- 도구/기술 그리드
- 호버 효과

### Projects (`components/Projects.tsx`)
- 3열 프로젝트 그리드
- 프로젝트 카드 (이미지, 설명, 태그)
- 호버 시 스케일 업 효과
- 프로젝트 링크

### Contact (`components/Contact.tsx`)
- 파란색 배경 섹션
- 연락처 정보 (이메일, 전화, 위치)
- 주요 CTA 버튼
- 데코레이션 배경 요소

### Button (`components/Button.tsx`)
- 3가지 변형: primary, secondary, outline
- 3가지 크기: sm, md, lg
- 아이콘 지원
- 호버 및 액티브 상태

## 디자인 시스템

### 색상 팔레트

| 용도 | 색상 | 코드 |
|------|------|------|
| 배경 | White | #FFFFFF |
| 주요 텍스트 | Dark Slate | #1F2937 |
| 주요 강조 | Bright Blue | #2563EB |
| 보조 배경 | Light Gray | #F3F4F6 |
| 보조 강조 | Warm Orange | #F59E0B |

### 타이포그래피

- **Display Font**: Poppins (700 weight)
  - h1: 64px (모바일: 40px)
  - h2: 48px (모바일: 32px)
  - h3: 24px
  
- **Body Font**: Inter (400 weight)
  - p: 16px
  - small: 14px

### 간격 및 반응형

- **모바일**: px-4 (16px)
- **태블릿**: px-6 (24px)
- **데스크톱**: px-8 (32px)

## 개발 워크플로우

### 1. 로컬 개발

```bash
# 개발 서버 시작
npm run dev

# 타입 체크
npm run check

# 포맷팅
npm run format
```

### 2. 새로운 페이지 추가

1. `client/src/pages/` 에 새 파일 생성
2. `App.tsx` 에 라우트 추가
3. 필요한 컴포넌트 구성

예시:
```tsx
// client/src/pages/About.tsx
export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main>{/* About page content */}</main>
      <Footer />
    </div>
  );
}
```

### 3. 새로운 컴포넌트 추가

1. `client/src/components/` 에 새 파일 생성
2. 타입 정의 (필요시 `shared/types.ts` 에 추가)
3. 주석으로 컴포넌트 목적 설명

예시:
```tsx
/**
 * MyComponent
 * 
 * 컴포넌트의 목적과 기능 설명
 */
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export default function MyComponent({ title, onClick }: MyComponentProps) {
  return <div onClick={onClick}>{title}</div>;
}
```

### 4. 상수 데이터 관리

모든 정적 데이터는 `shared/const.ts` 에서 관리합니다:
- 네비게이션 메뉴
- 프로젝트 목록
- 스킬 정보
- 연락처 정보

## 성능 최적화

### 1. 이미지 최적화
- Unsplash CDN 사용 (로컬 저장 금지)
- 적절한 크기 지정 (w, h 파라미터)

### 2. 코드 분할
- 페이지별 동적 임포트 (필요시)
- 컴포넌트 재사용으로 번들 크기 최소화

### 3. 스타일 최적화
- Tailwind CSS 유틸리티 사용
- 커스텀 CSS 최소화
- CSS-in-JS 사용 금지

## 접근성 (Accessibility)

### 1. 시맨틱 HTML
- 적절한 헤더 태그 사용 (h1, h2, h3)
- 버튼과 링크 구분
- 이미지 alt 텍스트

### 2. 키보드 네비게이션
- Tab 키로 모든 인터랙티브 요소 접근 가능
- Focus 상태 시각화
- Escape 키로 메뉴 닫기

### 3. 색상 대비
- 텍스트와 배경 대비 최소 4.5:1
- 파란색 강조색 사용 (색맹 고려)

## 유지보수 팁

### 1. 코드 스타일
- 모든 함수와 컴포넌트에 주석 추가
- 일관된 네이밍 컨벤션 (camelCase)
- 타입 안정성 유지

### 2. 컴포넌트 설계
- 단일 책임 원칙 준수
- Props 인터페이스 명확히 정의
- 재사용 가능한 구조

### 3. 상태 관리
- 로컬 상태만 사용 (useState)
- 복잡한 상태는 Context API 고려
- 불필요한 리렌더링 방지

## 배포

### 프로덕션 빌드
```bash
npm run build
```

### 배포 플랫폼
- Manus 내장 호스팅 (권장)
- Vercel, Netlify 등 지원

## 트러블슈팅

### 1. 타입 에러
```bash
npm run check
```

### 2. 스타일 문제
- Tailwind 클래스 확인
- CSS 우선순위 확인
- 브라우저 개발자 도구 활용

### 3. 성능 문제
- 개발자 도구 Performance 탭 확인
- 불필요한 리렌더링 확인
- 이미지 크기 최적화

## 다음 단계

1. **소셜 미디어 링크 업데이트**
   - `shared/const.ts` 의 SOCIAL_LINKS 수정

2. **프로젝트 추가**
   - `shared/const.ts` 의 PROJECTS 배열에 새 프로젝트 추가

3. **스킬 업데이트**
   - `shared/const.ts` 의 SKILLS 배열 수정

4. **이미지 최적화**
   - 프로젝트 이미지를 Unsplash CDN URL로 교체

5. **추가 페이지 개발**
   - About, Projects 상세 페이지 추가
   - Blog/Journal 섹션 구현

## 라이선스

© 2024 Dev Developer. All rights reserved.
