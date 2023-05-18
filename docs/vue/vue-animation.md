---
title: vue-animation
date: 2022-04-15
sidebarDepth: 1
---

# Vue 动画

Vue 内部为我们封装了更便捷的过渡/动画效果实现，只需要用`transition`组件对我们需要用到动效的元素进行包裹，并对`transition`组件命名（示例中为 fade），以该命名对`transition`组件添加执行过渡效果时的 class 即可。

## 过渡效果

```vue
<template>
  <div>
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
```

<vue-transition1/>

## 动画效果

```vue
<template>
  <div class="app">
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
```

<vue-transition2/>

## 结合三方库使用

animate.css 官网：[animate.css](https://animate.style/)

### 安装

```
$ npm install animate.css --save
```

### 引入

```
import 'animate.css';
```

### 使用

#### 方法一：
根据Animate.css官网右边的效果名设置想要的动效，如```fadeInDown```效果
```vue
<template>
    <div class="app">
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
                isShow:true
            }
        }
    }
</script>

<style scoped>
    .title{
        display: inline-block;
    }
    .lib-enter-active{
        animation: fadeInDown 1s ease-in;
    }
    .lib-leave-active{
        animation: fadeInDown 1s ease-in reverse;
    }
</style>
```

#### 方法二：
给transition动画过程直接添加类名的方式（类名可在Animate.css官网右边动效处点击小图标复制）
```vue
<template>
    <div class="app">
        <div>
            <button @click="isShow=!isShow">显示/隐藏</button>
        </div>
        <transition enter-active-class="animate__animated animate__fadeInDown"
                    leave-active-class="animate__animated animate__fadeInDownR">
            <h1 class="title" v-if="isShow">Hello World</h1>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow:true
            }
        }
    }
</script>

<style scoped>
    .title{
        display: inline-block;
    }
    .animate__fadeInDownR{
        animation-direction: reverse;
    }
</style>
```

<vue-transition3/>

## Vue动画在Vue2和Vue3中的区别
- Vue2中enter进程的类名为**enter/enter-to**（leave同理）    
- Vue3中enter进程的类名为**enter-from/enter-to**（leave同理）

更多用法：[Vue动画官方文档](https://cn.vuejs.org/v2/guide/transitions.html)
