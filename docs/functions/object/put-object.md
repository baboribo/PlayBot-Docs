---
title: put_object()
titleTemplate: 로봇이 위치한 칸에 오브젝트 떨어뜨리기
editLink: true
---
<Badge type="info" text="함수" /><Badge type="info" text="오브젝트" />

# {{ $frontmatter.title }}
{{ $frontmatter.titleTemplate }}
***
```javascript
put_object( string name )
```
로봇이 위치한 칸에 물건을 떨구는 함수입니다.\
함수 호출 시 한 번만 실행되므로, 호출을 반복적으로 해야할 경우에는 [```repeat()```](../basics/repeat.md)를 참조하세요.
> [!IMPORTANT] 중요사항
> 이름과 일치하는 오브젝트를 안 가지고 있거나, 떨굴 오브젝트와 바닥에 있는 오브젝트와 다를 경우\
> => 오류가 발생합니다.

***
## 매개변수
### **오브젝트 이름 ```( string name )```**
로봇이 가지고 있는 오브젝트의 이름입니다.
## 반환값
### **없음 ```( void )```**
이 함수는 반환값이 없습니다.
***

## 사용 예시
### 함수 한 번만 실행
```javascript{4}
move()
pick_object()
move()
put_object("토마토")
move()
```
### 함수 여러번 실행
이 예시 코드는 ```put_object()```함수를 3번 연속으로 실행합니다. 
> [!note]
> [```repeat()```](../basics/repeat.md) 함수 사용됨
```javascript{4}
move()
repeat("pick_object()", 3)
move()
repeat("put_object("토마토")", 3)
move()
```