<template>
  <div class="sprite">
    <div class="lock" ref="ani"></div>
    <button @click="operateAni">暂停/开始</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opAni: true
    };
  },
  methods: {
    operateAni() {
      this.opAni = !this.opAni;
      this.$refs.ani.style.animationPlayState = !this.opAni
        ? "paused"
        : "running";
    }
  }
};
</script>

<style lang="less" scoped>
.sprite {
  background: #000;
  height: 100px;
  padding: 50px;
  .lock {
    margin: 20px 100px 0 0;
    width: 48px;
    height: 64px;
    display: inline-block;

    background: url("../public/img/animationEffect/lockSprite.png") no-repeat;
    background-position: -1px -1px;
    animation: lock 1s steps(1);
    animation-iteration-count: infinite;
  }
  @keyframes lock {
    0% {
      background-position: -1px -1px;
    }
    2.77778% {
      background-position: -51px -1px;
    }
    5.55556% {
      background-position: -101px -1px;
    }
    8.33333% {
      background-position: -151px -1px;
    }
    11.1111% {
      background-position: -201px -1px;
    }
    13.8889% {
      background-position: -251px -1px;
    }
    16.6667% {
      background-position: -301px -1px;
    }
    19.4444% {
      background-position: -351px -1px;
    }
    22.2222% {
      background-position: -401px -1px;
    }
    25% {
      background-position: -1px -67px;
    }
    27.7778% {
      background-position: -51px -67px;
    }
    30.5556% {
      background-position: -101px -67px;
    }
    33.3333% {
      background-position: -151px -67px;
    }
    36.1111% {
      background-position: -201px -67px;
    }
    38.8889% {
      background-position: -251px -67px;
    }
    41.6667% {
      background-position: -301px -67px;
    }
    44.4444% {
      background-position: -351px -67px;
    }
    47.2222% {
      background-position: -401px -67px;
    }
    50% {
      background-position: -1px -133px;
    }
    52.7778% {
      background-position: -51px -133px;
    }
    55.5556% {
      background-position: -101px -133px;
    }
    58.3333% {
      background-position: -151px -133px;
    }
    61.1111% {
      background-position: -201px -133px;
    }
    63.8889% {
      background-position: -251px -133px;
    }
    66.6667% {
      background-position: -301px -133px;
    }
    69.4444% {
      background-position: -351px -133px;
    }
    72.2222% {
      background-position: -401px -133px;
    }
    75% {
      background-position: -1px -199px;
    }
    77.7778% {
      background-position: -51px -199px;
    }
    80.5556% {
      background-position: -101px -199px;
    }
    83.3333% {
      background-position: -151px -199px;
    }
    86.1111% {
      background-position: -201px -199px;
    }
    88.8889% {
      background-position: -251px -199px;
    }
    91.6667% {
      background-position: -301px -199px;
    }
    94.4444% {
      background-position: -351px -199px;
    }
    97.2222% {
      background-position: -401px -199px;
    }
    100% {
      background-position: -401px -199px;
    }
  }
}
</style>

