---
title: pick_object()
titleTemplate: 로봇이 위치한 칸에 있는 오브젝트 줍기
editLink: true
---
<Badge type="info" text="함수" /><Badge type="info" text="오브젝트" />

# {{ $frontmatter.title }}
{{ $frontmatter.titleTemplate }}
***
```javascript
pick_object()
```
로봇 아래에 있는 오브젝트를 주울 수 있는 함수입니다.\
함수 하나에 오브젝트 하나만 픽 되며, 특정 값으로 반복하고 싶을 경우 [```repeat()```](../basics/repeat.md) 함수를 사용하십시오.

***
## 매개변수
### **없음 ```( void )```**
이 함수는 매개변수가 없습니다.
## 반환값
### **없음 ```( void )```**
이 함수는 반환값이 없습니다.
***

## 사용 예시
### 오브젝트 하나 줍기
```javascript
te = 3
move()
repeat("pick_object()", te)
move()
repeat("put_object("농구공")", te)
```javascript
move()
pick_object()
move()
put_object("사과")
move()
```
### 오브젝트 여러개 줍기
> [!note]
> [```repeat()```](../basics/repeat.md) 함수 사용됨
```javascript
te = 3
move()
repeat("pick_object()", te)
move()
repeat("put_object("농구공")", te)
```