<template>
  <div style="height:100%">
    <div class="div1">我是一个隔开距离的元素,我的高为200px</div>
    <div class="box">
      我是高 300px 、宽 200px 的box元素，我有各 10px 的边框、内边距、外边距，我的内部还有一个宽高都为 500px 的子元素
      <div class="box1"></div>
      <div class="bjShow">
        <p>offsetTop: {{offsetTop}}</p>
        <p>clientTop: {{clientTop}}</p>
        <p>scrollTop: {{scrollTop}}</p>
      </div>
    </div>
    <div class="div2">
      <p style="font-weight:600;padding:0;font-size:16px;">返回元素的宽度/高度不同方法的区别：</p>
      <p class="pTitle">包括元素宽度/高度、内边距和边框，不包括外边距</p>
      <p>offsetWidth: {{offsetWidth}}&nbsp;&nbsp;&nbsp;offsetHeight: {{offsetHeight}}</p>
      <p class="pTitle">包括元素宽度/高度、内边距，不包括边框和外边距</p>
      <p>clientWidth: {{clientWidth}}&nbsp;&nbsp;&nbsp;clientHeight: {{clientHeight}}</p>
      <p class="pTitle">包括元素宽度/高度，不包括内边距、边框和外边距(只对内联样式生效)</p>
      <p>styleWidth: {{styleWidth}}&nbsp;&nbsp;&nbsp;styleHeight: {{styleHeight}}</p>
      <p class="pTip">(当前未设置内联样式，所以未取到值)</p>
      <p class="pTitle">包括元素宽度、内边距和溢出尺寸，不包括边框和外边距</p>
      <p>scrollWidth: {{scrollWidth}}&nbsp;&nbsp;&nbsp;scrollHeight: {{scrollHeight}}</p>
      <p class="pTip">(内部有宽高500px的子元素,计算溢出尺寸)</p>
    </div>
    <div class="div1">我是一个隔开距离的元素,我的高为200px</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offsetWidth: 0,
      offsetHeight: 0,
      clientWidth: 0,
      clientHeight: 0,
      styleWidth: 0,
      styleHeight: 0,
      scrollWidth: 0,
      scrollHeight: 0,
      // 边距
      offsetTop: 0,
      clientTop: 0,
      scrollTop: 0
    };
  },
  mounted() {
    // 返回元素的宽度/高度（包括元素宽度/高度、内边距和边框，不包括外边距）
    this.offsetWidth = document.querySelector(".box").offsetWidth;
    this.offsetHeight = document.querySelector(".box").offsetHeight;
    // 返回元素的宽度/高度（包括元素宽度/高度、内边距，不包括边框和外边距）
    this.clientWidth = document.querySelector(".box").clientWidth;
    this.clientHeight = document.querySelector(".box").clientHeight;
    // 返回元素的宽度/高度（包括元素宽度/高度，不包括内边距、边框和外边距）  只对内联样式生效
    this.styleWidth = document.querySelector(".box").style.width;
    this.styleHeight = document.querySelector(".box").style.height;
    // 返回元素的宽度（包括元素宽度、内边距和溢出尺寸，不包括边框和外边距），无溢出的情况，与clientWidth相同
    this.scrollWidth = document.querySelector(".box").scrollWidth;
    this.scrollHeight = document.querySelector(".box").scrollHeight;

    window.addEventListener("scroll", this.getBj);
  },
  methods: {
    getBj() {
      this.offsetTop = document.querySelector(".box").offsetTop; //body的margin默认是8px
      // 返回元素距离可视区域顶部的距离
      this.clientTop = document
        .querySelector(".box")
        .getBoundingClientRect().top;
      // 此属性可以获取或者设置对象的最顶部到对象在当前窗口显示的范围内的顶边的距离，也就是元素滚动条被向下拉动的距离
      this.scrollTop = document.documentElement.scrollTop;
    }
  }
};
</script>

<style lang="less" scoped>
.div1 {
  height: 200px;
  background-color: antiquewhite;
  text-align: center;
}
.box {
  height: 300px;
  width: 200px;
  background-color: aquamarine;
  border: 10px solid #0f0;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  position: relative;
  .box1 {
    height: 500px;
    width: 500px;
  }
  .bjShow {
    position: absolute;
    top: 50%;
    font-size: 14px;
  }
}
.div2 {
  padding-right: 50px;
  float: right;
  font-size: 12px;
  p {
    padding-left: 20px;
    line-height: 16px;
  }
  .pTitle {
    font-weight: 600;
  }
  .pTip {
    color: red;
  }
}
</style>
