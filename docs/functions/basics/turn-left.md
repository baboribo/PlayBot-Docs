---
title: turn_left()
description: 왼쪽으로 90도 회전하기
editLink: true
---
<Badge type="info" text="함수" /><Badge type="tip" text="기본" />

# {{ $frontmatter.title }}
{{ $frontmatter.description }}
## 목차
[[toc]]
***

```javascript
turn_left()
```
로봇의 방향을 **반시계 방향으로 90도 회전**시킵니다.
PlayBot의 방향은 총 4가지로, 다음과 같은 순환 구조를 가집니다

## 회전 시뮬레이션
| 현재 방향 | `turn_left()` 호출 후 방향 | 시각적 설명 (로봇이 오른쪽을 바라볼 때) |
|:---|:---|:---|
| 🟥 동 (East) | 🟦 북 (North) | 로봇이 왼쪽으로 꺾여, 위를 바라봄 |
| 🟦 북 (North) | 🟩 서 (West) | 로봇이 다시 왼쪽으로 꺾여, 왼쪽을 바라봄 |
| 🟩 서 (West) | 🟨 남 (South) | 로봇이 왼쪽으로 꺾여, 아래를 바라봄 |
| 🟨 남 (South) | 🟥 동 (East) | 로봇이 왼쪽으로 꺾여, 오른쪽(처음)을 바라봄 |
::: tip 💡 팁
왼쪽으로만 계속 돌리면, 결국 **제자리**로 돌아와요.
> 동 → 북 → 서 → 남 → 동 → ...
:::
***
## 매개변수
### **없음 ```( void )```**
이 함수는 매개변수가 없습니다.
## 반환값
### **없음 ```( void )```**
이 함수는 반환값이 없습니다.
***
## 사용 예시
### 왼쪽으로 한 번 회전
```javascript{3}
move()
move()
turn_left() // 로봇이 바라보는 방향에서 왼쪽으로 90도 회전합니다. // [!code focus]
move()
```
### 바라보는 방향에서 아래로 회전
```javascript{4-6}
move() // 로봇은 오른쪽을 바라보고 있습니다.
move()
move()
turn_left() // [1] 90도 회전 => 위를 바라봄 // [!code focus]
turn_left() // [2] 90도 회전 => 왼쪽을 바라봄 // [!code focus]
turn_left() // [3] 90도 회전 => 아래를 바라봄 // [!code focus]
move()
```