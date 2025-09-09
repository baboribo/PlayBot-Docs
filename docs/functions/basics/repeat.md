---
title: repeat()
description: 지정된 횟수만큼 함수 반복하기
editLink: true
---
<Badge type="info" text="함수" /><Badge type="tip" text="기본" />

# repeat()
지정된 횟수만큼 함수 반복하기
***
```javascript
repeat(" string function ", int count )
```
```string function```에서 지정된 함수를 ```int count``` 수 만큼 반복하는 함수입니다.

***
## 매개변수
### **문자열 함수 ( string function )**
반복적으로 실행할 함수를 지정합니다.
### **휫수 ```( int count )```**
지정한 함수를 반복 실행할 휫수 값
## 반환값
### **없음 ```( void )```**
이 함수는 반환값이 없습니다.
***

## 사용 예시
### 반복할 휫수를 값으로 지정
```javascript{1,3}
repeat("move()", 4) // [!code focus]
turn_left()
repeat("move()", 3) // [!code focus]
```
### 반복할 휫수를 변수로 지정
```javascript{3,5}
a = get_random(0.4)
b = get_random(0.4)
repeat("move()", a) // [!code focus]
turn_left()
repeat("move()", b) // [!code focus]
```
### 커스텀 함수를 반복하기
```javascript{10}
function upstair() {
  move()
  turn_left()
  move()
  turn_left()
  turn_left()
  turn_left()
  move()
}
repeat("upstair()", 3)
```