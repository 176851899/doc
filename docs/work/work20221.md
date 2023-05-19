## 9.15

报道

## 9.16

1.遇到问题yarn : 无法加载文件 C:\Program Files\nodejs\yarn.ps1，因为在此系统上禁止运行脚本。

解决：更改执行策略https://blog.csdn.net/qq_40999917/article/details/121979987

xwu 

1.指标，考试报名模块

2.汇报进度，推进，表单设计器

3.数据挖掘

## 9.19

~~~
Hichatrs的使用,注意导入相关的包

 // 初始化图表

   var Highcharts = require("highcharts");

   // 在 Highcharts 加载之后加载功能模块

   require("highcharts/highcharts-more.js")(Highcharts);

   // 打印

   // require("highcharts/modules/exporting")(Highcharts);

   Highcharts.chart("hicharts", {

//相关配置

}）
~~~

~~~
Echatrs
//设置图标样式
 option.legend = {
        bottom: "12%",
        left: "center",
        // icon: "vertical",
        icon: "circle",
        // right: '0',
        // bottom: '0',
        itemWidth: 6, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 6,
      };
      
//设置图表大小和位置
grid: {
        left: '4%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
   
   
   option={
   tooltip: {
       trigger: 'item',
       formatter: "{a} <br/>{b}: {c} ({d}%)"
   }, 
   series: [{
       name: '',
       type: 'pie',
       radius: ['50%', '70%'], 
       labelLine:{  
            normal:{  
                 length:15,   	// 指示线长度
                 lineStyle: {
                    color: "#595959"  // 指示线颜色
                 }
            },
       },
       label: {
            normal: {
                 textStyle: {
                       color: '#595959',	// 提示文字颜色
                       fontSize: 18		// 提示文字大小
                 } 
           }
       },
       data: [
           // 各分区样式: value值，name模块文字、itemStyle模块样式
           {value: 10, name: '理财产品 10%', itemStyle: { color: '#FFBD1C'}}, 
           {value: 20, name: '普通经纪 20%', itemStyle: { color: '#13C2C2'}}, 
           {value: 30, name: '期权 30%', itemStyle: { color: '#267CFF' } },
           {value: 40, name: '两融 40%', itemStyle: { color: '#FF8C16' } },
       ]
       
   }]           
} 
//表格属性
x轴设置如下、y轴同理

     xAxis: {
        name: ' ',
        axisTick: {
          show: true  //坐标轴刻度线
        },
        axisLine: { //轴线
          show: false
        },
        splitLine:{ //网格线
          show:true
        },
        axisLabel: { //坐标轴样式
          textStyle: {
            color: '#636363'
          }
        }},
~~~

## 9.20

1.遇到问题导入图片，因为文件名原因导入失败

~~~
智慧医疗请求参数样式
{
    "list": [
        {
            "diseaseType": "CAC",
            "num": "huangyuxia_19"  //编码必须要有
        }
    ],
    "diseaseType": "CAC",
    "whereJson": "[\"leaveHosTime>=2020-09-01\",\"leaveHosTime<=2022-09-30\"]" 可选
    
}
~~~





## 9.22

遇到问题 背景图片 和 背景渐进只能出现一个 

解决方案：background: url(./img/Bitmap.png) right top /.3rem no-repeat,linear-gradient(225deg,rgba(0,137,80,1) 0%,rgba(0,137,81,1) 50%,rgba(0,130,72,1) 100%);一起写

## 9.26

#### 首页联调遇到问题，heichatrs堆积图过少有闪动问题

#### 遇到问题，排序不变，原来是注意数组地址变化



## 9.30



## 10.8

完善3个病种及首页，

遇到问题谷歌翻译失效，打开cmd管理员运行

~~~sql
echo 203.208.40.66 translate.googleapis.com >> C:\Windows\System32\drivers\etc\hosts & ipconfig /flushdns > nul
~~~

## 10.9

 知识积累

###### 面向 Serverless，同时支持 React，Vue2，Vue3，地球上没有对手的 SSR 框架



##### 这个是在 Vue 里，自定义组件，传入属性，非常常见的写法。vue-bind的高级用法

~~~
<person
  :name="name"
  :sex="sex"
  :height="height"
  :beforeCreate="beforeCreate"
/>
用了 v-bind 之后，就可以省略成这样:
<person v-bind="{ name, sex, height, beforeCreate }"/>

      //用于父子组件传参
      //比如：item = { "placeholder": "12", "label": [], "name": ''}
      <component
        v-bind="item"
      />
 
 
      //子标签在接收的时候 整体直接props 
      //比如接收上面的数据：
     props: {
      placeholder: {
        type: String,
        default: ""
      },
      label: {
        type: String,
        required: true
      }
~~~

指令：.native绑原生事件

### vue中使用v-bind="$attrs"和v-on="$listeners"进行多层组件监听通信

~~~
vue 2.4 提出
//父组件
<centers
      name="name"
      age="18"
      gender="666"
      sdf="asd"
      @isClick="isClick"
      @asd="asd"
    ></centers>

//子组件
 <section>
    <div class="mt-10">
      <bottom v-bind="$attrs" v-on="$listeners" />
    </div>
  </section>
  也是通信的一种方式
~~~

### .sync修饰符实现双向绑定

实现子组件与父组件的双向绑定，并且可以实现子组件同步修改父组件的值。

```
 <Child :money.sync="dataApp"/>
    // <Child :money="dataApp" v-on:update:money="dataApp = $event"/>  //两句作用等同

child组件
<template>
  <div class="child">
    {{money}}
    <button @click="$emit('update:money', money-100)">
    </button>
  </div>
</template>
 
<script>
export default {
  props: ["money"]
};
</script>
```



### 10.10

10.11



### 10.18

遇到使用vue-echarts时option数据一直渲染不出图片，原因是数据没有获取到option，

解决方法一watch,

~~~
watch: {
    // 无法监听到绑定的option更新，手动调用echarts方法触发更新
    realOption: {
      handler(newVal) {
        this.$refs.vchart.setOption(newVal);
      },
      deep: true
    }
  },
~~~

### 10.19

1.查看公司个人登录信息存在在哪里

2.[http请求头中的host、referer、origin字段](https://www.cnblogs.com/renjie1105/p/15355986.html)有什么区别

- ​    Host 请求头指明了请求服务器的域名/IP地址和端口号。

- Referer 首部包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。

- 请求首部字段 Origin 指示了请求来自于哪个站点。该字段仅指示服务器名称，并不包含任何路径信息。除了不包含路径信息，该字段与 Referer 首部字段相似。

  该首部用于 CORS 请求或者 POST 请求。

  3.pdf打印

  ### 10.25

  1.联调表单，

  2.表扬单管理开发

  #### 11.1投诉单统计开发

  同时使用时  multiple
              clearable(应该放后面，否则会失效)

  ~~~
   <el-select
              class="w-600-input"
              v-model="data.doctorIds"
              multiple
              clearable
              placeholder="请先选择科室"
              @change="handleNormalFormChange"
              :popper-append-to-body="false"
            >
              <el-option v-for="item in doctorList" :key="item.value" :value="item.value" :label="item.label" />
            </el-select>
  ~~~

  -  遇到问题，使用elment-ui时设置table属性max-height未生效，使用时应该考虑属性优先级，看之前是否已经配置

### 11.2投诉单统计统计

- 在自己的搜索组件中，遇到下拉select改变但框内没有改变，解决方法：给组件加key值

- 注意在组件传值时必须在子类名props定义，有时候

- css否定选择器

  在某些情况下，使用`:not`选择器实际上是最有效的选项，就像上面的示例一样，在该示例中，我们甚至可以在不添加不必要的类或其他标记的情况下选择一些随机元素。

  ~~~
  div:not(.abc)， ,表示不具备abc的div元素
  div:not(.active) .plan-detail-head-more {
          display: none;
        },表示div下没有active时 plan。。。选择的样式
  ~~~

  

#### 11.7随访抽查页面开发

1.遇到问题，在子组件中watch和change同时使用时，change优先级高，如果有什么额外操作在就在change里面使用

2**contains方法介绍

.需求描述：需要判断指定的dom元素是否包含当前点击的元素，然后在执行后边的逻辑。**contains方法介绍：**
如果A元素包含B元素，则返回true，否则false。同级也会返回true，参数是Element类型

### 判断dom元素是否包含class类，以及是否有包含这个元素

.black { background-color: black;} 
 var wrap = document.querySelector('.wrap')
 // 是否包含 .black
 wrap.classList.contains('black')

~~~
includes()和contains()的区别
includes和contains 都是搜索算法，用于查找字符串中的子串或查找数组中的元素。includes() 是JavaScript原生的方法，而contains() 则是在其他语言中使用，比如Java。所以从现在开始，我们在文章中只使用includes()。
作者：吴欣
链接：https://juejin.cn/post/7086366628262182949
~~~

### 11.10

好用的loading收藏

https://loading.io/
https://codepen.io/search/pens?q=loading

#### 11.16

**PerformanceObserver**

 可用于获取性能相关的数据，例如**首帧fp**、**首屏fcp**、**首次有意义的绘制 fmp**等等。

## 11.17

### 1.vue 中父组件开源通过props向子组件中传递函数

然后在子组件中通过备份this传递子组件的this到父组件中使用

~~~
子组件中
props: {
    queryRequset: {
      type: [Function],
      // id formName
    },
  },
~~~

## 2.解决消息弹窗重复显示

~~~
重写message
import { Message } from 'element-ui';

const showMessage = Symbol('showMessage');

export const uniqueMessage = {
  success(options, single = true) {
    this[showMessage]('success', options, single);
  },

  warning(options, single = true) {
    this[showMessage]('warning', options, single);
  },

  info(options, single = true) {
    this[showMessage]('info', options, single);
  },

  error(options, single = true) {
    this[showMessage]('error', options, single);
  },

  [showMessage](type, options, single) {
    if (single) {
      // 判断是否已存在Message
      if (!document.getElementsByClassName('el-message').length) {
        Message[type](options);
      }
    } else {
      Message[type](options);
    }
  }
};
https://juejin.cn/post/7003652396559630343
~~~

### 3.SortableJS 功能强大的JavaScript 拖拽库

功能强大的JavaScript 拖拽库，http://www.sortablejs.com/



### 11.23，研发需求给第三方业务系统的患者导入接口

##### core-js到底是什么？

1.  ECMAScript  的迅速成长以及浏览器的频繁更新换代，每年会出现新的 api ，举个例子 es6 时期诞生的  'Promise'  ，'Set'  或者是 'es7'  数组新提供的方法 'includes' ,这些新加入的 'api' ，就引出一个词 "polyfill"  'polyfill(垫片/补丁)' 就是用社区上提供的一段代码，让我们在不兼容某些新特性的浏览器上，使用该新特性。新功能的es'api'转换为大部分现代浏览器都可以支持运行的一个'api' 补丁包集合。

2. 因为官方库对他介绍的形容
 2.1. 它支持最新的 ECMAScript 标准
 2.2. 它支持ECMAScript 标准库提案
 2.3. 它支持一些 WHATWG / W3C 标准（跨平台或者 ECMAScript 相关）
 2.4. 它最大限度的模块化：你能仅仅加载你想要使用的功能
 2.5. 它能够不污染全局命名空间
 2.6. 它和babel紧密集成：这能够优化core-js的导入
 2.7. 它是最普遍、最流行 的给 JavaScript 标准库打补丁的方式
原文链接：https://blog.csdn.net/weixin_56650035/article/details/120940799

##### crypto-js 加密、解密使用方法

​    window提供了自带的base64的转化方法

（1）提供一个给第三方业务系统的患者导入接口，MDT和日间手术系统可以通过该接口将待随访患者推送至相应的随访计划中。

（2）按下图增加配置参数，参数开启后，随访计划中默认开启相应的随访计划，该计划中的患者为（1）中接口导入。

（3）参数在产品部署后默认为关闭。

（4）另将这两个随访计划的计划列表页面提供URL接口供MDT或日间手术系统调用嵌入其系统中。

浏览器提供的加密解密方法

~~~
参考后可以自定义相关加密解密方法vue中定义
btoa(str) {
      return window.btoa(decodeURIComponent(encodeURIComponent(str)));
    },
    atob(str) {
      return decodeURIComponent(encodeURIComponent(window.atob(str)));
    },
~~~

git fetch --all : 拉去远程所有分支

### 12.7  element form 用el-col 时出现的问题

https://blog.csdn.net/weixin_40119256/article/details/109224440

解决：el-form下的el-form-item的dom级次务必一致，如有不一致的情况会导致表单项无法点击的问题

安装项目时yarn 也要切换镜像源

导出excel方案之一并且对导出文件的样式进行一些修改，比如颜色、字体、合并单元格等，所以我找到了 [xlsx-style](https://link.segmentfault.com/?enc=LS4GOA2g%2FOKerx17clkMQg%3D%3D.kA9eXiZTXvBTkZmZMumaG8Q5gTrHC3%2BWVFEEgfI9xvm2aOzHNFn9j9ZsDUTVz0nB) 这个项目，

// 可参数文档: https://segmentfault.com/a/1190000022772664

//感觉也像他

//https://docs.sheetjs.com/docs/installation/deno 



### 12.13组件传值的其中一种方法

## `provide / inject`

`provide / inject` 是依赖注入，在一些插件或组件库里被常用

`provide`：可以让我们指定想要提供给后代组件的数据或方法

`inject`：在任何后代组件中接收想要添加在这个组件上的数据或方法，不管组件嵌套多深都可以直接拿来用

要注意的是 `provide` 和 `inject` 传递的数据不是响应式的，也就是说用 `inject` 接收来数据后，`provide` 里的数据改变了，后代组件中的数据不会改变，除非传入的就是一个可监听的对象 所以建议还是传递一些常量或者方法

```javascript
// 父组件
export default{
    // 方法一 不能获取 methods 中的方法
    provide:{
        name:"oldCode",
        age: this.data中的属性
    },
    // 方法二 不能获取 data 中的属性
    provide(){
        return {
            name:"oldCode",
            someMethod:this.someMethod // methods 中的方法
        }
    },
    methods:{
        someMethod(){
            console.log("这是注入的方法")
        }
    }
}

// 后代组件
export default{
    inject:["name","someMethod"],
    mounted(){
        console.log(this.name)
        this.someMethod()
    }
}
```

## 2.遇到问题，单病种项目抽屉关闭图标未显示

# 【Element-UI】解决el-icon图标显示不出来的问题

[![img](https://cdn2.jianshu.io/assets/default_avatar/6-fd30f34c8641f6f32f5494df5d6b8f3c.jpg)](https://www.jianshu.com/u/e596857c51c8)

[高阳刘](https://www.jianshu.com/u/e596857c51c8)关注

0.1182020.02.25 18:31:16字数 106阅读 13,072

遇到的问题是：
在vue中加入elment-ui中的图标，但是页面上没有显示。页面部分代码为：



```jsx
<i class="el-icon-edit"></i>
```

https://www.jianshu.com/p/706e180c67ad

不显示的原因是项目中引入的element-ui的版本过低了
我更新之前是V2.4.1
现在是V2.13.0

### 3.element ui 弹窗遮罩层在弹出层的上面。点击关闭弹窗弹窗关闭了但是遮罩层没关

未插入到body时https://blog.csdn.net/qq_33769914/article/details/88944714

总结当弹窗嵌套弹窗的时候就会出现这样的问题。

只要把嵌套的那个弹窗加到body上。把:append-to-body="true" 

| modal-append-to-body | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | boolean | —    | true  |
| -------------------- | ------------------------------------------------------------ | ------- | ---- | ----- |
| append-to-body       | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | boolean | —    | false |

标签的title属性tips提示也可以换行

### 4.好用的树状控件选择框vue-treeselect

https://www.vue-treeselect.cn/

### 5.好用的日历组件，库，可以居于此二次封装

vue2-datepickerhttps://github.com/mengxiong10/vue2-datepicker

也可参考https://gitee.com/wangankeji/vue-datepicker

###  document.write可以在页面添加任何标签

# 标签添加时间戳防止浏览器缓存导致的异常

*//给url地址增加时间戳，骗过浏览器，不读去缓存*

产生原因

如果在用户之前已经访问过系统，那么浏览器中会缓存该系统的CSS、JS，这些CSS、JS缓存未过期之前，浏览器只会从缓存中读取CSS和JS，如果在服务器上修改了CSS和JS，那么这些修改在用户的浏览器中是不会有变化的。

## ：在CSS、JS后面添加时间戳

```routeros
<link rel="stylesheet" href="/css/element.css?_t=<%=new Date().indexOf()%>">
<script type="text/javascript" href="/js/element.js?_t=<%=new Date().indexOf()%>"></script>
```

 document.write("<script type='text/javascript' src='./1.js?v=" + Date.now() + "'><\/script>");

## 12.16  echarts图表过多时

# echarts柱状图实现横向拖动展示数据

https://blog.csdn.net/xiaoqin5/article/details/124847695?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-124847695-blog-122734753.pc_relevant_3mothn_strategy_and_data_recovery&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-124847695-blog-122734753.pc_relevant_3mothn_strategy_and_data_recovery&utm_relevant_index=2

官方说明dataZoom 组件就是用于区域缩放，可以关注细节的数据信息，或者概览数据整体

dataZoom 现有三种类型：[内置型](https://www.echartsjs.com/zh/option.html#dataZoom-inside)，[滑动条型](https://www.echartsjs.com/zh/option.html#dataZoom-slider)，[框选型](https://www.echartsjs.com/zh/option.html#toolbox.feature.dataZoom)。上图的效果选用的是滑动条型dataZoom 组件的具体使用可以参考官方文档 https://echarts.apache.org/zh/option.html#dataZoom

 项目查询结果可能有上百条，使用echarts，然后查询完了[legend](https://so.csdn.net/so/search?q=legend&spm=1001.2101.3001.7020)就铺满了图表，看不清了，看了一下官网有分页设置：https://echarts.apache.org/examples/zh/editor.html?c=radar2&edit=1&reset=1

https://blog.csdn.net/huanhuan03/article/details/106012370/



# echarts中基线的设置

\#[echart](https://so.csdn.net/so/search?q=echart&spm=1001.2101.3001.7020)中基线的设置

在[series](https://so.csdn.net/so/search?q=series&spm=1001.2101.3001.7020)的数据里面data:[];中添加一个markLine{
data:[]
}属性，有[legend](https://so.csdn.net/so/search?q=legend&spm=1001.2101.3001.7020)属性时，基线有箭头，反之没有箭头

# web入门之 window.devicePixelRatio 设备像素比

```
legend: {
     type: 'scroll',
     bottom: 10,
     data: data
 },
 
 
 导出图表图片
  exportEchart(echartInstance, title) {
    // https://echarts.apache.org/zh/api.html#echartsInstance.getDataURL
    let url = echartInstance.getDataURL({
      type: "png",
      pixelRatio: window.devicePixelRatio,
      backgroundColor: "white",
      //  可以忽略图表内一些组件
      excludeComponents: ["dataZoom"]
    })
    let alink = document.createElement("a")
    alink.href = url;
    alink.download = title
    alink.click();
  },
```

### 12.28 获取iframe里面的标签元素需要加contentDocument

# iframe+postMessage进行跨域通信，结合 window.onmessage事件

模拟发布订阅模式进行消息传递和处理

https://blog.csdn.net/GitLuckyd/article/details/108779657

具体可参考多中心癌痛项目

iframeDocument =

​    document.getElementById('myiframe').contentDocument;

   const ele = iframeDocument.getElementById(id);

~~~
  // 参考目录点击滚动到相应位置
      this.currentInd = index;
      const iframeDocument =
        document.getElementById('myiframe').contentDocument;
      const ele = iframeDocument.getElementById(id);
      iframeDocument.body.scrollTo({
        left: 0,
        top: ele.offsetTop - 20,
        // behavior: 'smooth', // 与内容滚动联动目录会有冲突，所以改成瞬间切换
      });
~~~

vue 中的方法

~~~
Vue中this.$options.data()和this.$data
vm.$data
获取Vue实例的data选项（对象）
vm.$options
获取Vue实例的自定义属性（如vm.$options.methods,获取Vue实例的自定义属性methods）
重置组件数据
  Object.assign(this.$data, this.$options.data());或者
  this.$data = this.$options.data();
~~~

vue开发规范

https://blog.csdn.net/luoqiang616477607/article/details/122376036

## webSocket连接端口 癌痛项目 socket.js api 中

掘金试例：https://juejin.cn/post/6945057379834675230，并加入心跳机制

心跳机制就是每隔几分钟发送一个固定信息给服务端，服务端收到后回复一个固定信息如果服务端几分钟内没有收到客户端信息则视客户端断开。发包方可以是客户也可以是服务端，具体看哪边实现更方便合理