<template>
  <div style="margin-top:30px;">
    <div class="colorBtn" v-for="(item,index) in 5" :key="item"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@colorArr: #576856, #f1f2ed, #fae7cf, #54524f, #a7c1d9;
@len: length(@colorArr);

.Loop(@index) when(@index<@len+1) {
  // 执行内容
  // 类名参数要加大括号@{index}
  // 根据index获取对应的某个值 extract(数组名, 对应的序号)
  .colorBtn:nth-child(@{index}) {
    background-color: extract(@colorArr, @index);
  }
  //递归调用 达到循环目的
  .Loop(@index+1);
}
.Loop(1);

.colorBtn {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
}
</style>
