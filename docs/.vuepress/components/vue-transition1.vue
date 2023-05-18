<template>
  <div style="border:1px solid #eee;padding:20px;">
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition name="fade">
      <h1 v-if="isShow">Hello world</h1>
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}
</style>