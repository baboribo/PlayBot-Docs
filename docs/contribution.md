---
title: 문서 기여
description: 엇, 정말로 도와주신다고요?
editLink: true
---

# 문서 기여 방법
엇, 정말로 도와주신다고요?
***
::: warning 유의사항
- 용어는 왜곡되지 않도록 하되, 쉽게 보고 활용할 수 있도록 하는 것이 이 문서의 목표(?)입니다.
- 마크다운과 VitePress, GitHub 사용법을 알고 계셔야 합니다.
:::

## 기여 방법
### a. 직접 수정 및 PR 보내기
직접 수정 및 PR을 보내려면 GitHub 계정이 필요합니다.
#### 1. VSCode와 nodejs, GitHub CLI 설치
##### 1.1. 먼저 VSCode를 설치합시다
 - VSCode 사이트는 [여기](https://code.visualstudio.com)입니다. 들어가셔서 자신이 쓰는 운영체제에 맞는 프로그램을 다운로드 후 설치해주세요.
 - 설치가 다 되었다면 VSCode를 열어 GitHub에 로그인을 합시다.
##### 1.2. nodejs 설치
왜 node를 설치할까요? 간단해요, npm을 사용하기 위해서 설치합니다.
 - [nodejs 사이트](https://nodejs.org/ko)로 이동해 자신의 운영체제에 맞는 버전을 선택해 설치를 해주세요.
 - Windows 사용자의 경우 컴퓨터 재시작을 한 번 필수로 하거나, 터미널을 완전히 재시작해주세요.\ macOS 사용자라면 보통 재시작 없이도 바로 npm과 nodejs가 작동합니다.
##### 1.3. GitHub CLI 설치
[여기](https://cli.github.com)에서 설치하시면 됩니다.\ Windows 사용자라면 설치 후 컴퓨터를 재시작하거나, 터미널을 완전히 재시작해야 합니다.
#### 1. 리포지토리 포크
[이 문서의 리포지토리](https://github.com/baboribo/PlayBot-Docs/tree/main)로 이동해 해당 리포지토리를 자신의 계정으로 포크합니다.
문서 수정을 위해서는 리포지토리 포크는 **필수**입니다.
#### 2. 로컬에서 수정하기
 - 자신이 포크한 리포지토리 상세 페이지로 이동해 **Code** 버튼을 클릭하고 "GitHub CLI" 탭 선택 후 명령어를 복사해 VSCode 터미널에 입력하세요.
 - 이제 복제된 해당 포크 파일로 이동해 ```docs``` 폴더를 찾으세요.
    > ```docs``` 폴더는 vitepress 설정 파일과 마크다운 파일들이 모여있는 공간입니다.    
 - ```docs```에서는 funtions같은 이름으로 문서가 저장되어 있습니다.\ 편집을 원하는 마크다운 파일을 선택해 수정해주세요.
#### 3. 커밋 및 풀 리퀘스트(PR) 보내기
 - 커밋 메시지는 명확하고 간결하게 작성해주시길 바랍니다.
 - GitHub에서 Pull Request → Compare across forks 선택
 - 제목과 설명을 작성합니다.
 - “Create Pull Request”를 클릭해 PR을 보내주세요.
***
### b. 문제 제기
문제 제기를 하려면 GitHub 계정이 필요합니다.
- [이 문서의 리포지토리](https://github.com/baboribo/PlayBot-Docs/tree/main)로 이동하세요
- 네비게이션 바에서 "Issues"를 찾아 클릭합니다.
- 페이지 내 촤측 상단 "New Issue"라는 CTA 버튼을 클릭하세요.
- 제목과 설명을 작성합니다.
    > 설명 작성 시 자세하고 명확하게 적어주세요.\ 자세하고 자세할 수록 좋습니다!
- 페이지 내 좌측 아래 "Create" CTA 버튼을 클릭해 이슈를 만듭니다. 끝이에요!

---

> ฅ(´-ω-`)ฅ