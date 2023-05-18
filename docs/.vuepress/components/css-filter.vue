<template>
  <div class="bgc">
    <button @click="addFilter">添加滤镜</button>
    <button @click="removeFilter">清除滤镜</button>
    <div :class="{'filter':isFilter}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFilter: false
    };
  },
  methods: {
    addFilter() {
      this.isFilter = true;
    },
    removeFilter() {
      this.isFilter = false;
    }
  }
};
</script>

<style lang="less" scoped>
.bgc {
  background-color: aquamarine;
  height: 200px;
  text-align: center;
  margin-top: 30px;
  div {
    width: 100px;
    height: 100px;
    background-color: #000;
    margin: 30px auto;
  }
  .filter {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(29deg)
      brightness(103%) contrast(101%);
  }
}
</style>
