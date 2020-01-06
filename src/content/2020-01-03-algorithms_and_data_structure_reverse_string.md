---
id: 20200103J
slug: /algorithms_and_data_structure_reverse_string
title: 資料結構與演算法by JS（一）文字反轉
date: 2020-01-03T1:00:00Z
description: 請完成一個function：參數為string，return該字串的倒轉。
tags:
  - Algorithms
  - Data Structures
headerImage: 'https://imgur.com/4u6bUII.jpg'
templateKey: blog-post
---
###### tags `Algorithms` `Data Structures`

## 1.字串反轉

### 請完成一個function：參數為string，return該字串的倒轉。
> 例：<br>
> reverse('apple') === 'elppa'<br>
> reverse('hello') === 'olleh'<br>
> reverse('Greetings!') === '!sgniteerG'

```javascript
function reverse(str) {

}
```
### 方法一、
> 1.要熟悉JS常用的API，String.prototype.split()，將字串轉為陣列<br>
> 2.知道JS有Array.prototype.reverse()，將陣列倒轉<br>
> 3.知道JS有Array.prototype.join()，將陣列合併成一個字串<br>
```javascript
function reverse(str) {
    const arr = str.split('');
    const reversedStr = arr.reverse().join('');
    return reversedStr;
}
```
以下是整理過後，更精簡的code：
```javascript
function reverse(str) {
    return str.split('').reverse().join('');
}
```
方法一可能會被面試官拒絕的部分是，reverse()這個方法太作弊了，就像排序直接用Array.prototype.sort()一樣，直接call out是不行der。

### 方法二、

#### 思考邏輯
![](https://i.imgur.com/PLrqfZD.png)


> 1.知道es6 `for...of` 的語句，用於**可迭代**的物件上，[可迭代物件](https://jiepeng.me/2018/04/19/iterable-and-iterator-in-javascript)包含陣列、字串、Map物件、Set物件等等。
> 2.知道字串相加後，會組成一個新字串。或是熟悉es6的**Template literals**。

```javascript
function reverse(str) {
  let reversed = '';
  for(let char of str){
      reversed = `${char}${reversed}`;
  }
  return reversed;
}
```
除非有特殊的迴圈條件，否則多數for迴圈建議使用`for...of`或`forEach`來完成，以避免使用傳統for迴圈`(let count = 0 ; count < 10 ; count++`)時，打錯字(ex:分號打成逗號)及不易閱讀之缺點。

### 方法三、
> 1.知道es6 Array.prototype.reduce()，跟上functional programming的潮流

方法二其實已經相當不錯了，若面試官想知道其它更潮的作法，可使用reduce()的特性，將字串相加起來。

```javascript
function reverse(str) {
  let arr = str.split('');
  return arr.reduce((string, char) => `${char}${string}`, "");
}
```
更精簡的code如下：
```javascript
function reverse(str) {
    return str.split('').reduce((string, char) => `${char}${string}`, "");
}
```

以下是本章節的程式碼：

<iframe
    src="https://codesandbox.io/embed/beautiful-ardinghelli-riss5?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fexercise%2Freversestring%2Findex.js&previewwindow=tests&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="beautiful-ardinghelli-riss5"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>