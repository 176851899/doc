<template>
  <div class="app" style="border:1px solid #eee;padding:20px;">
    <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
    </div>
    <transition name="ani">
      <h1 class="title" v-if="isShow">Hello world</h1>
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
.ani-enter-active {
  animation: bounce 1s ease;
}
.ani-leave-active {
  animation: bounce 1s ease reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.title {
  display: inline-block;
}
</style>