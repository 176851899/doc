---
title: countEl
date: 2022-04-18
sidebarDepth: 1
---

# 元素宽高/边距计算

## 元素宽高计算

- 返回元素的宽度/高度（包括元素宽度/高度、内边距和边框，不包括外边距）
  ```js
  let offsetWidth = document.querySelector(".box").offsetWidth;
  let offsetHeight = document.querySelector(".box").offsetHeight;
  ```
- 返回元素的宽度/高度（包括元素宽度/高度、内边距，不包括边框和外边距）
  ```js
  let clientWidth = document.querySelector(".box").clientWidth;
  let clientHeight = document.querySelector(".box").clientHeight;
  ```
- 返回元素的宽度/高度（包括元素宽度/高度，不包括内边距、边框和外边距）<font color='red'>只对内联样式生效</font>
  ```js
  let styleWidth = document.querySelector(".box").style.width;
  let styleHeight = document.querySelector(".box").style.height;
  ```
- 返回元素的宽度/高度（包括元素宽度、内边距和溢出尺寸，不包括边框和外边距）<font color='red'>无溢出的情况，与 clientWidth 相同</font>
  ```js
  let scrollWidth = document.querySelector(".box").scrollWidth
  let scrollHeight = document.querySelector(".box").scrollHeight)
  ```

## 元素边距计算

- 返回元素的上外缘距离最近采用定位父元素内壁的距离，如果父元素中没有采用定位的，则是获取上外边缘距离文档内壁的距离
  ```js
  let offsetTop = document.querySelector(".box").offsetTop;
  ```
- 返回元素距离可视区域顶部的距离
  ```js
  let clientTop = document.querySelector(".box").getBoundingClientRect().top;
  ```
- 此属性可以获取或者设置对象的最顶部到对象在当前窗口显示的范围内的顶边的距离，也就是元素滚动条被向下拉动的距离
  ```js
  let scrollTop = document.documentElement.scrollTop;
  ```

## 元素宽高/边距计算示例

  <countEl/>

  有了这些可得的元素宽高/边距值，我们就可以计算出一些特定值来实现我们的动效。如跟随滚轮滚动改变元素效果，可以计算出元素在当前可视区域的占比，滚轮滚动时，元素在可视区域的占比会发生变化，我们就可以根据这个占比值的变化相应切换我们的展示效果。
