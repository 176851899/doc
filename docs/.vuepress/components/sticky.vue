<template>
  <div class="frame1">
    <div class="title1">我是贴顶的title1</div>
    <div class="frame2">
      <div class="title2">我是贴顶的title2</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style lang="less" scoped>
.frame1 {
  height: 2500px;
  background-color: antiquewhite;
  padding-top: 400px;
  margin-bottom: 800px;
  .title1 {
    height: 30px;
    background-color: #ff0;
    color: #fff;
    position: sticky;
    top: 0;
  }
  .frame2 {
    background-color: aquamarine;
    padding-top: 200px;
    // overflow: hidden;
    .title2 {
      height: 30px;
      background-color: #000;
      color: #fff;
      position: sticky;
      top: 200px;
    }
  }
}
</style>
