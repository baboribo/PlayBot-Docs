# 플레이봇 비공식 문서

## 📖 프로젝트 개요

플레이봇(PlayBot) 비공식 문서 사이트입니다. 기존의 공식 문서가 보기 불편한 점을 개선하여 사용자 친화적인 문서 사이트를 제작했습니다.

## 🎯 목적

- **사용성 개선**: 공식 문서의 불편한 UI/UX를 개선
- **접근성 향상**: 더 쉽고 직관적인 문서 탐색 경험 제공
- **검색 기능 강화**: 로컬 검색이 아닌 API 기반 검색으로 성능 개선 예정
- **커뮤니티 기여**: 플레이봇 사용자들을 위한 더 나은 문서 환경 제공

## ✨ 주요 특징

- **📱 반응형 디자인**: 모든 디바이스에서 최적화된 사용 경험
- **🔍 향상된 검색**: 빠르고 정확한 문서 검색 기능 (개발 중)
- **📚 체계적인 문서 구조**: 카테고리별로 정리된 문서 구조
- **🎨 깔끔한 UI**: 읽기 편한 디자인과 사용자 인터페이스
- **⚡ 빠른 로딩**: 최적화된 성능으로 빠른 페이지 로딩

## 🛠 개발 및 실행

### 요구사항

- Node.js (v14 이상)
- npm 또는 yarn

### 로컬 개발 환경 설정

```bash
# 저장소 클론
git clone https://github.com/baboribo/PlayBot-Docs.git

# 프로젝트 디렉토리로 이동
cd PlayBot-Docs

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 🤝 기여 방법

프로젝트에 기여하고 싶으시다면 다음 단계를 따라주세요:

1. **Fork**: 이 저장소를 포크합니다
2. **브랜치 생성**: 새로운 기능이나 버그 수정을 위한 브랜치를 생성합니다
   ```bash
   git checkout -b feature/새기능명
   ```
3. **변경사항 커밋**: 의미 있는 커밋 메시지와 함께 변경사항을 커밋합니다
   ```bash
   git commit -m "feat: 새로운 기능 추가"
   ```
4. **푸시**: 변경사항을 원격 저장소에 푸시합니다
   ```bash
   git push origin feature/새기능명
   ```
5. **Pull Request**: GitHub에서 Pull Request를 생성합니다

### 커밋 컨벤션

- `feat:` 새로운 기능 추가
- `fix:` 버그 수정
- `docs:` 문서 수정
- `style:` 코드 포맷팅, 세미콜론 누락 등
- `refactor:` 코드 리팩토링
- `test:` 테스트 코드
- `chore:` 기타 변경사항

## 📂 프로젝트 구조

```
PlayBot-Docs/
├── docs/          # 문서 파일들
├── src/           # 소스 코드
├── .github/       # GitHub Actions 워크플로우
├── .vscode/       # VS Code 설정
├── index.html     # 진입점 HTML
├── package.json   # 프로젝트 설정
└── README.md      # 프로젝트 설명서
```

## 🔗 참고 링크

- **🌐 라이브 사이트**: [https://baboribo.github.io/PlayBot-Docs/](https://baboribo.github.io/PlayBot-Docs/)
- **📖 플레이봇 공식 문서**: [PlayBot 공식 사이트](https://playbot.kr/)
- **🐛 이슈 리포트**: [GitHub Issues](https://github.com/baboribo/PlayBot-Docs/issues)
- **💡 기능 제안**: [GitHub Discussions](https://github.com/baboribo/PlayBot-Docs/discussions)

## 📋 개발 현황

- [x] 기본 문서 사이트 구조
- [x] 반응형 디자인 적용
- [ ] API 기반 검색 기능 구현
- [ ] 다크 모드 지원
- [ ] 사용자 피드백 시스템
- [ ] 다국어 지원

## 📜 라이선스



## 👨‍💻 개발자

- **baboribo** - [GitHub 프로필](https://github.com/baboribo)

---

**📝 참고**: 이 프로젝트는 현재 개발 중이며, 지속적으로 개선되고 있습니다. 문제점이나 개선 사항이 있으시면 언제든지 이슈를 등록해 주세요!
