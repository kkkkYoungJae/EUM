# 이음 - A Social Platform

<!-- ![Eum Logo](path-to-your-logo) -->

## 프로젝트 소개

**이음**은 트위터와 유사한 기능을 제공하는 소셜 플랫폼입니다. React와 Next.js를 사용하여 구현되었으며, 테스트 라이브러리와 SEO 최적화에 중점을 두고 개발되었습니다. 이 프로젝트는 최신 웹 기술을 학습하고 이를 실제 환경에서 적용하는 것을 목표로 합니다.

## 목적

이 프로젝트의 주된 목적은 다음과 같습니다:

1. **React와 Next.js 사용**: 최신 웹 기술인 React와 Next.js를 실제 프로젝트에 적용하여 효율적인 웹 애플리케이션을 구현합니다.
2. **테스트 라이브러리 적극 사용**: React Testing Library와 Jest를 사용하여 안정적인 테스트 환경을 구축하고, TDD(Test-Driven Development)를 지향합니다.
3. **SEO 대응**: Next.js의 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG) 기능을 활용하여 검색엔진 최적화(SEO)를 구현합니다.

## 주요 기능

- 사용자 등록 및 로그인
- 트윗 작성 및 피드 보기
- 팔로우 및 언팔로우
- 실시간 알림 (웹소켓 사용 예정)
- SEO 최적화 (메타 태그, 서버사이드 렌더링)

## 기술 스택

- **Frontend**:
  - React
  - Next.js
  - Styled-components
- **Testing**:
  - React Testing Library
  - Jest
- **Backend**:
  - Firebase
- **Database**:
  - Firebase Firestore

## 설치 및 실행

### 클론 및 설치

```bash
# 레포지토리를 클론합니다
git clone https://github.com/your-username/eum.git

# 프로젝트 디렉토리로 이동합니다
cd eum

# 의존성 패키지를 설치합니다
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
# 개발 서버를 시작합니다
npm run dev
# 또는
yarn dev

# 브라우저에서 http://localhost:3000 을 열어 앱을 확인하세요
```

### 테스트 실행

```bash
# 모든 테스트를 실행합니다
npm test
# 또는
yarn test
```
