---
title: get_random()
titleTemplate: 지정된 값 중에서 랜덤으로 하나의 값을 정해주는 함수
editLink: true
---
<Badge type="info" text="함수" /><Badge type="tip" text="기본" />

# {{ $frontmatter.title }}
{{ $frontmatter.titleTemplate }}
***
```javascript
int get_random( int num1, int num2 )
```
```{{ $frontmatter.title }}```은 ```int num1```과 ```int num2``` 사이의 숫자 중에서 값을 랜덤으로 정해주는 함수입니다.\
```num```에 입력하는 모든 값은 정수여야 하며, ```num2```는 ```num1```보다 값이 커야합니다.

***
## 매개변수
### **정수 값 1 ```( int num1 )```**
시작 값
### **정수 값 2 ```( int num2 )```**
끝 값
## 반환값
### **정수 ```( int )```**
시작 값과 끝 값 사이의 값 중 하나를 정수로 반환합니다.
***

## 사용 예시
```javascript
a = get_random(1, 4)
say("결과:", "a")
repeat("move()", a)
```