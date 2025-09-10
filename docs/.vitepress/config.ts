// .vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "플레이봇 비공식 문서",
  description: "문서를 보면서 플레이봇으로 코딩하는 우리를 위해.",
  lang: 'ko-KR', // 한국어 설정

  // 🎨 테마 설정
  themeConfig: {
    logo: '/playbot.png',

    nav: [
      { text: '홈', link: '/' },
      { text: '함수 레퍼런스', link: '/functions/basics/move' },
      { text: '기여하기', link: '/contribution' }
    ],

    footer: {
      message: '<a href="https://playbot.spaceii.kr/portal/portal_reference.php">플레이봇 명령어 사전(공식)</a>',
      copyright: '<a href="https://x.com/machidoro">마치도로</a><a href="https://github.com/baboribo">(a.k.a. 바보리보)</a>가 만들었어요.'
    },

    // 📚 사이드바 (왼쪽 메뉴)
    sidebar: [
      {
        text: '🚀 시작하기',
        items: [
          { text: '문서 소개', link: '/' },
          { text: '문서 기여 방법', link: '/contribution' }
        ]
      },
      {
        text: '함수',
        collapsed: false, // 기본 펼침
        items: [
          {
            text: '기본 함수',
            collapsed: false,
            items: [
              { text: 'move()', link: '/functions/basics/move' },
              { text: 'turn_left()', link: '/functions/basics/turn-left' },
              { text: 'turn_off()', link: '/functions/basics/turn-off' },
              {
                text: '출력',
                collapsed: false,
                items: [
                  { text: 'print()', link: '/functions/basics/console/print' },
                  { text: 'popup()', link: '/functions/basics/console/popup' },
                  { text: 'say()', link: '/functions/basics/console/say' },
                ]
              },
              { text: 'repeat()', link: '/functions/basics/repeat' },
              { text: 'get_random()', link: '/functions/basics/get-random' },
            ]
          },
          {
            text: '물건',
            collapsed: true,
            items: [
              { text: 'pick_object()', link: '/functions/object/pick-object' },
              { text: 'put_object()', link: '/functions/object/put-object' },
              { text: 'what_object()', link: '/functions/object/what-object' },
              { text: 'count_object()', link: '/functions/object/count-object' },
              { text: 'on_object()', link: '/functions/object/on-object' },
              { text: 'kind_object()', link: '/functions/object/kind-object' },
              { text: 'have_object()', link: '/functions/object/have-object' },
              { text: 'own_object()', link: '/functions/object/own-object' },
            ]
          },
        ]
      },
      // {
      //   text: '❓ FAQ & 팁',
      //   items: [
      //     { text: '자주 묻는 질문', link: '/faq' },
      //     { text: '초보자를 위한 팁', link: '/tips' }
      //   ]
      // }
    ],

    // ✏️ 수정 링크 (GitHub 편집 버튼)
    editLink: {
      pattern: 'https://github.com/baboribo/PlayBot-Docs/edit/main/docs/:path',
      text: '이 페이지 수정하기'
    },

    // 🕒 마지막 수정일 표시
    lastUpdated: {
      text: '최종 수정일',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short',
        timeZone: 'Asia/Seoul'
      }
    },

    // 🌐 소셜 링크
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/baboribo/PlayBot-Docs',
        ariaLabel: 'GitHub 저장소'
      }
    ],

    // 🔍 검색 기능 (로컬 검색)
    search: {
      provider: 'local'
    },

    // 📄 문서 하단 이전/다음 버튼
    docFooter: {
      prev: '이전 페이지',
      next: '다음 페이지'
    },

    // 🌓 다크 모드 설정
    darkModeSwitchLabel: '테마',
    lightModeSwitchTitle: '밝은 테마로 전환',
    darkModeSwitchTitle: '어두운 테마로 전환',

    // 📱 모바일 메뉴 라벨
    sidebarMenuLabel: '메뉴',
    returnToTopLabel: '맨 위로'
  },

  // ⚙️ 빌드 설정
  base: '/PlayBot-Docs/', // GitHub Pages라면 '/repo-name/'로 변경

  // 🛠 Markdown 설정 (선택 사항)
  markdown: {
    lineNumbers: true, // 코드 블록에 줄번호 표시
    headers: {
      level: [2, 3, 4] // 목차에 포함할 헤더 레벨
    }
  },

  // 🧩 빌드 후크 (선택 사항 — sitemap 등)
  buildEnd: async (siteConfig) => {
    // 추후 sitemap 생성, 검색 인덱스 생성 등에 활용 가능
  }
})