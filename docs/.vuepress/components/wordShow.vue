<template>
  <div class="cametaPatameters">
    <div class="line">我是一段会逐渐显示的文字~~~~~~~~</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.cametaPatameters {
  background: #000;
  height: 50px;
  padding: 10px;
  margin-top: 30px;
  .line {
    font-family: "Times New Roman", Times, serif;
    font-size: 30px;
    color: #fff;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 33.33%,
      rgba(255, 255, 255, 0) 66.67%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 300% 100%;
    background-position-x: 100%;

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    transition: 2s all ease-in-out;
  }
  .line:hover {
    background-position-x: 0%;
  }
}
</style>

