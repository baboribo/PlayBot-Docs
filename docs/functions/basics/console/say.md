---
title: say()
description: 로봇이 말풍선으로 내용을 출력하도록 하기
editLink: true
---
<Badge type="info" text="함수" /><Badge type="tip" text="기본" /> - <Badge type="info" text="출력" />

# {{ $frontmatter.title }}
{{ $frontmatter.description }}
***
```javascript
say( string text )
```
로봇이 말풍선으로 내용을 출력할 수 있도록 하는 함수입니다.\
로봇이 다수일 경우 말풍선을출력할 특정 로봇을 명시해야 합니다.
## 로봇이 다수일 경우
```javascript
r<n>.say( string text )
```
```r<n>```으로 특정 로봇을 지정하여 함수를 사용해야 합니다.
```<n>```은 값을 적어야 합니다.
::: details 다수일 경우 함수 에시
```javascript
r1.say( string text )
```
:::

***
## 매개변수
### **문자열 ```( string text )```**
말풍선 내부(텍스트 영역)에 문자열을 출력합니다.
## 반환값
### **없음 ```( void )```**
이 함수는 반환값이 없습니다.
***

## 사용 예시
### 기본 출력
아래 예시 코드로 로봇이 말풍선을 출력할 수 있도록 합니다.
```javascript
say("안녕하세요")
```
### 여러 문자열을 출력
말풍선 내에서 여러 문자열을 출력합니다.\
여러 문자열을 출력하고 싶다면, <span class="tooltip">콤마<span class="tooltip-text">콤마는 `,`를 의미합니다.</span></span>를 사용하여 다수의 문자열 및 변수를 출력할 수 있습니다.
```javascript
say("안녕하세요", "반갑습니다.")
```
### 문자열과 변수를 출력
#### 1
```javascript{4}
move()
a = what_object()
move()
say("이 물건은", a, "(이)네요.") // [!code focus]
```
#### 2
```javascript{7}
move()
a = count_object()
move()
b = count_object()
move()
c=a+b
say("꽃의 개수는", c, "개", "입니다.") // [!code focus]
```