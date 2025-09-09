---
title: print()
description: 콘솔(출력 영역)에 내용을 출력하기
editLink: true
---
<Badge type="info" text="함수" /><Badge type="tip" text="기본" /> - <Badge type="info" text="출력" />

# print()
콘솔(출력 영역)에 내용을 출력하기
***
```javascript
print( string text )
```
프로그램 하단 콘솔(출력 영역)에 **내용을 출력**하는 함수입니다.

::: warning 유의사항
* 변수의 값을 출력할 경우, 쌍따옴표 없이 변수 이름을 그대로 기입합니다.
* 문자열을 출력할 경우, 괄호 안에 두 쌍따옴표를 입력 후, 두 쌍따옴표 사이에 텍스트를 입력합니다.
:::

***
## 매개변수
### **문자열 ```( string text )```**
콘솔(출력 영역)에 문자열을 출력합니다.
## 반환값
### **없음 ```( void )```**
이 함수는 반환값이 없습니다.
***

## 사용 예시
### 기본적인 출력
문자열과 변수를 출력할 수 있습니다.
```javascript
print("Hello World!") // 문자열 출력
print(date) // 변수 출력
```
### 문자열 여러개 출력
```javascript
print("Hello", "World", "!")
```
### 변수와 문자열 출력
#### 1
```javascript{6-7}
// 변수
name = "마치도로"
object_name = "MacBook Air"

// 출력
print(object_name, name)
print(name, "의", object_name)
```
#### 2
```javascript{7-8}
move()
a = count_object()
move()
b = count_object()
move()
c=a+b
print(c)
print("꽃의 개수는", c, "개 입니다")
```