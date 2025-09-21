---
title: count_object()
titleTemplate: 오브젝트의 개수 확인하기
editLink: true
---
<Badge type="info" text="함수" /><Badge type="info" text="오브젝트" />

# {{ $frontmatter.title }}
{{ $frontmatter.titleTemplate }}
***
```javascript
int count_object()
```
현재 로봇이 위치한 곳에 떨어진 오브젝트의 개수을 확인하는 함수입니다.

***
## 매개변수
### **없음 ```( void )```**
이 함수는 매개변수가 없습니다.
## 반환값
### **값 ```( int )```**
호출 시 오브젝트의 개수를 정수로 반환하며, 오브젝트 개수를 확인할 때 사용합니다.
***

## 사용 예시
```javascript
move()
move()
a = count_object()
print(a)
```