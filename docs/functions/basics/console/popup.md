---
title: popup()
titleTemplate: 내용이 담긴 팝업 창을 띄우기
editLink: true
---
<Badge type="info" text="함수" /><Badge type="tip" text="기본" /> - <Badge type="info" text="출력" />

# {{ $frontmatter.title }}
{{ $frontmatter.titleTemplate }}
## 목차
[[toc]]
***
```javascript
popup( string text )
```
`popup()` 함수 호출 시 <span class="tooltip">괄호 안에 있는 내용<span class="tooltip-text">예시: `popup(**"내용"**)`</span></span>이 화면에 **팝업 창**으로 띄우도록 만듭니다.

::: warning 유의사항
* 변수의 값을 출력할 경우, 쌍따옴표 없이 변수 이름을 그대로 기입합니다.
* 문자열을 출력할 경우, 괄호 안에 두 쌍따옴표를 입력 후, 두 쌍따옴표 사이에 텍스트를 입력합니다.
:::

***
## 매개변수
### **문자열 ```( string text )```**
팝업창 내부(텍스트 영역)에 문자열을 출력합니다.
## 반환값
### **없음 ```( void )```**
이 함수는 반환값이 없습니다.
***

## 사용 예시
### 문자열 출력
```javascript
popup("Hello World!") // 문자열 출력
popup("Hello", "World!") // 문자열 여러개 출력
```
### 변수 출력
```javascript
popup(house_in_header_in_text) // 변수 출력
popup(header_in_text, item_section_in_description) // 변수 여러개 출력
```
### 변수와 문자열 출력
```javascript{7}
// 변수
name = "마치도로"
object_name = "MacBook Air"

// 출력
print(object_name, name)
popup(name, "의", object_name) // 변수와 문자열 출력
```