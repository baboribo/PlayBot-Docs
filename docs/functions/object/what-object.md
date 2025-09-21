---
title: what_object()
titleTemplate: 오브젝트 이름 확인하기
editLink: true
---
<Badge type="info" text="함수" /><Badge type="info" text="오브젝트" />

# {{ $frontmatter.title }}
{{ $frontmatter.titleTemplate }}
***
```javascript
string what_object()
```
현재 로봇이 위치한 곳에 떨어진 오브젝트의 이름을 확인하는 함수입니다.

***
## 매개변수
### **없음 ```( void )```**
이 함수는 매개변수가 없습니다.
## 반환값
### **문자열 ```( string )```**
오브젝트 이름을 확인할 때 사용하며, 호출 시 문자열을 반환합니다.
***

## 사용 예시
```javascript
move()
move()
a = what_object()
```