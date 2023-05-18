<template>
  <div class="app" style="border:1px solid #eee;padding:20px;">
    <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
    </div>
    <transition name="lib">
      <h1 class="title" v-if="isShow">Hello World</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    };
  }
};
</script>

<style scoped>
.title {
  display: inline-block;
}
.lib-enter-active {
  animation: fadeInDown 1s ease-in;
}
.lib-leave-active {
  animation: fadeInDown 1s ease-in reverse;
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>