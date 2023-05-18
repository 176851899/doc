---
title: sticky
date: 2022-04-15
sidebarDepth: 1
---

# position: sticky
粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。

```
position: sticky;
top: 10px;
```
在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下。

需要清楚的是，position:sticky**相对于它最近的滚动祖先**，当最近的滚动祖先滚动出页面视口后，设置position:sticky的元素也会跟随最近的滚动祖先移出。

**position：sticky不生效的几个原因：**
- 父元素设置了overflow:hidden或者overflow:auto
- 未指定top、right、bottom、left4个值中的任意一个
- 父元素高度小于sticky定位的元素高度

::: warning 注意
该属性不支持IE浏览器
:::

```
手写实现vue2 ,vue3 的 store
import { inject,reactive } from "vue";

class Store {
  constructor(options) {
    this.state = reactive(options.state);
    // getters {属性：方法}
    // this.getters {属性：值}
    let getters=options.getters;
    this.getters={};
    Object.keys(getters).forEach(item=>{
        Object.defineProperty(this.getters,item,{
            get:()=>{
                return getters[item](this.state);
            }
        })
    })
    // this.mutations
    let mutations=options.mutations;
    this.mutations={};
    Object.keys(mutations).forEach(item=>{
        this.mutations[item]=(data)=>{
            mutations[item](this.state,data)
        }
    })
  }
  commit(key,data){
    this.mutations[key](data);
  }
  install(app) {
    // vue2
    app.config.globalProperties.$store = this;
    // vue3 provide/inject
    app.provide("store", this);
  }
}

export function createStore(options) {
  //创建一个仓库
  return new Store(options);
}
export function useStore() {
  //让每一个使用的组件得到store仓库
  return inject("store");
}
```