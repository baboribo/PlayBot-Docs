---
title: turn_off()
description: 현재 프로그램을 실행 중단하기
editLink: true
---
<Badge type="info" text="함수" /><Badge type="tip" text="기본" />

# {{ $frontmatter.title }}
{{ $frontmatter.description }}
***
```javascript
turn_off()
```
실행 중인 **프로그램을 즉시 중단**하는 함수입니다. 이 함수가 호출된 이후 모든 코드는 **실행되지 않습니다**.

::: info 언제 사용하나요?
이 함수는 로봇이 모든 명령을 완수했음을 표시하거나, 더 이상 동작이 필요하지 않을 경우 사용합니다.

* 함수 호출 시 현재 실행 중인 프로그램이 중단됩니다.
* 이후 코드는 전혀 실행되지 않습니다.
* 일반적으로 코드 마지막 줄에 배치합니다.
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
```javascript{6}
move()
move()
move()
turn_left()
move()
turn_off() // 해당 함수가 실행된 이후 프로그램은 종료되며, 다음 코드는 실행되지 않습니다.
move()
turn_left()
move()
move()
```